/**
* Base class for all responses.
*/
export class AsposeResponse {
    /**
    * Response status code.
    */
    'code': number;
    /**
    * Response status.
    */
    'status': string;
    
    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "code",
            "baseName": "Code",
            "type": "number"
        },
        {
            "name": "status",
            "baseName": "Status",
            "type": "string"
        }    ];

    static getAttributeTypeMap() {
        return AsposeResponse.attributeTypeMap;
    }
}

/**
* DTO for bookmark updating.
*/
export class BookmarkData {
    /**
    * Gets or sets the name of the bookmark.
    */
    'name': string;
    /**
    * Gets or sets the text enclosed in the bookmark.
    */
    'text': string;
    
    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "name",
            "baseName": "Name",
            "type": "string"
        },
        {
            "name": "text",
            "baseName": "Text",
            "type": "string"
        }    ];

    static getAttributeTypeMap() {
        return BookmarkData.attributeTypeMap;
    }
}

/**
* container class for individual bookmarks outline level
*/
export class BookmarksOutlineLevelData {
    /**
    * Specify the bookmark's name
    */
    'name': string;
    /**
    * Specify the bookmark's level
    */
    'bookmarksOutlineLevel': number;
    
    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "name",
            "baseName": "Name",
            "type": "string"
        },
        {
            "name": "bookmarksOutlineLevel",
            "baseName": "BookmarksOutlineLevel",
            "type": "number"
        }    ];

    static getAttributeTypeMap() {
        return BookmarksOutlineLevelData.attributeTypeMap;
    }
}

/**
* Container class for compare documents
*/
export class CompareData {
    /**
    * Path to document to compare at the server.
    */
    'comparingWithDocument': string;
    /**
    * Initials of the author to use for revisions.
    */
    'author': string;
    /**
    * The date and time to use for revisions.             
    */
    'dateTime': Date;
    
    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "comparingWithDocument",
            "baseName": "ComparingWithDocument",
            "type": "string"
        },
        {
            "name": "author",
            "baseName": "Author",
            "type": "string"
        },
        {
            "name": "dateTime",
            "baseName": "DateTime",
            "type": "Date"
        }    ];

    static getAttributeTypeMap() {
        return CompareData.attributeTypeMap;
    }
}

/**
* Represents Words document DTO.
*/
export class Document {
    /**
    * A list of links that originate from this document.
    */
    'links': Array<Link>;
    /**
    * Gets the name of the file.
    */
    'fileName': string;
    /**
    * Gets the original format of the document.
    */
    'sourceFormat': Document.SourceFormatEnum;
    /**
    * Returns true if the document is encrypted and requires a password to open. 
    */
    'isEncrypted': boolean;
    /**
    * Returns true if the document contains a digital signature. This property merely informs that a  digital signature is present on a document, but it does not specify whether the signature is valid or not. 
    */
    'isSigned': boolean;
    /**
    * Returns document properties.
    */
    'documentProperties': DocumentProperties;
    
    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "links",
            "baseName": "Links",
            "type": "Array<Link>"
        },
        {
            "name": "fileName",
            "baseName": "FileName",
            "type": "string"
        },
        {
            "name": "sourceFormat",
            "baseName": "SourceFormat",
            "type": "Document.SourceFormatEnum"
        },
        {
            "name": "isEncrypted",
            "baseName": "IsEncrypted",
            "type": "boolean"
        },
        {
            "name": "isSigned",
            "baseName": "IsSigned",
            "type": "boolean"
        },
        {
            "name": "documentProperties",
            "baseName": "DocumentProperties",
            "type": "DocumentProperties"
        }    ];

    static getAttributeTypeMap() {
        return Document.attributeTypeMap;
    }
}

export namespace Document {
    export enum SourceFormatEnum {
        Unknown = <any> 'Unknown',
        Doc = <any> 'Doc',
        Dot = <any> 'Dot',
        DocPreWord60 = <any> 'DocPreWord60',
        Docx = <any> 'Docx',
        Docm = <any> 'Docm',
        Dotx = <any> 'Dotx',
        Dotm = <any> 'Dotm',
        FlatOpc = <any> 'FlatOpc',
        Rtf = <any> 'Rtf',
        WordML = <any> 'WordML',
        Html = <any> 'Html',
        Mhtml = <any> 'Mhtml',
        Epub = <any> 'Epub',
        Text = <any> 'Text',
        Odt = <any> 'Odt',
        Ott = <any> 'Ott',
        Pdf = <any> 'Pdf',
        Xps = <any> 'Xps',
        Swf = <any> 'Swf',
        Tiff = <any> 'Tiff',
        Svg = <any> 'Svg'
    }
}
/**
* Represents a document which will be appended to the original resource document.
*/
export class DocumentEntry {
    /**
    * Path to document to append at the server.
    */
    'href': string;
    /**
    * Defines which formatting will be used: appended or destination document.Can be KeepSourceFormatting or UseDestinationStyles.
    */
    'importFormatMode': string;
    
    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "href",
            "baseName": "Href",
            "type": "string"
        },
        {
            "name": "importFormatMode",
            "baseName": "ImportFormatMode",
            "type": "string"
        }    ];

    static getAttributeTypeMap() {
        return DocumentEntry.attributeTypeMap;
    }
}

/**
* Represents a list of documents which will be appended to the original resource document.
*/
export class DocumentEntryList {
    /**
    * List of documents.
    */
    'documentEntries': Array<DocumentEntry>;
    
    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "documentEntries",
            "baseName": "DocumentEntries",
            "type": "Array<DocumentEntry>"
        }    ];

    static getAttributeTypeMap() {
        return DocumentEntryList.attributeTypeMap;
    }
}

/**
* Represents a position in the document tree.
*/
export class DocumentPosition {
    /**
    * Link to  node.
    */
    'node': NodeLink;
    /**
    * Offset into the node.
    */
    'offset': number;
    
    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "node",
            "baseName": "Node",
            "type": "NodeLink"
        },
        {
            "name": "offset",
            "baseName": "Offset",
            "type": "number"
        }    ];

    static getAttributeTypeMap() {
        return DocumentPosition.attributeTypeMap;
    }
}

/**
* Container for the document's statistical data
*/
export class DocumentStatData {
    /**
    * Total count of words in the document
    */
    'wordCount': number;
    /**
    * Total count of paragraphs in the document
    */
    'paragraphCount': number;
    /**
    * Total count of pages in the document
    */
    'pageCount': number;
    /**
    * Detailed statistics of footnotes
    */
    'footnotesStatData': FootnotesStatData;
    /**
    * Detailed statistics of all pages
    */
    'pageStatData': Array<PageStatData>;
    
    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "wordCount",
            "baseName": "WordCount",
            "type": "number"
        },
        {
            "name": "paragraphCount",
            "baseName": "ParagraphCount",
            "type": "number"
        },
        {
            "name": "pageCount",
            "baseName": "PageCount",
            "type": "number"
        },
        {
            "name": "footnotesStatData",
            "baseName": "FootnotesStatData",
            "type": "FootnotesStatData"
        },
        {
            "name": "pageStatData",
            "baseName": "PageStatData",
            "type": "Array<PageStatData>"
        }    ];

    static getAttributeTypeMap() {
        return DocumentStatData.attributeTypeMap;
    }
}

/**
* Container class for Downsample options
*/
export class DownsampleOptionsData {
    /**
    * Specifies whether images should be downsampled.
    */
    'downsampleImages': boolean;
    /**
    * Specifies the resolution in pixels per inch which the images should be downsampled to.
    */
    'resolution': number;
    /**
    * Specifies the threshold resolution in pixels per inch. If resolution of an image in the document is less than threshold value,  the downsampling algorithm will not be applied. A value of 0 means the threshold check is not used and all images that can be reduced in size are downsampled.
    */
    'resolutionThreshold': number;
    
    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "downsampleImages",
            "baseName": "DownsampleImages",
            "type": "boolean"
        },
        {
            "name": "resolution",
            "baseName": "Resolution",
            "type": "number"
        },
        {
            "name": "resolutionThreshold",
            "baseName": "ResolutionThreshold",
            "type": "number"
        }    ];

    static getAttributeTypeMap() {
        return DownsampleOptionsData.attributeTypeMap;
    }
}

/**
* Container for the footnotes statistical data
*/
export class FootnotesStatData {
    /**
    * Total count of words in footnotes
    */
    'wordCount': number;
    /**
    * Total count of paragraphs in footnotes
    */
    'paragraphCount': number;
    
    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "wordCount",
            "baseName": "WordCount",
            "type": "number"
        },
        {
            "name": "paragraphCount",
            "baseName": "ParagraphCount",
            "type": "number"
        }    ];

    static getAttributeTypeMap() {
        return FootnotesStatData.attributeTypeMap;
    }
}

/**
* Allows to specify additional System.Drawing.Graphics quality options.
*/
export class GraphicsQualityOptionsData {
    /**
    * Gets or sets a value that specifies how composited images are drawn to this Graphics.
    */
    'compositingMode': GraphicsQualityOptionsData.CompositingModeEnum;
    /**
    * Gets or sets the rendering quality of composited images drawn to this Graphics.
    */
    'compositingQuality': GraphicsQualityOptionsData.CompositingQualityEnum;
    /**
    * Gets or sets the interpolation mode associated with this Graphics.
    */
    'interpolationMode': GraphicsQualityOptionsData.InterpolationModeEnum;
    /**
    * Gets or sets the rendering quality for this Graphics.
    */
    'smoothingMode': GraphicsQualityOptionsData.SmoothingModeEnum;
    /**
    * Gets or sets text layout information (such as alignment, orientation and tab stops) display manipulations (such as ellipsis insertion and national digit substitution) and OpenType features.
    */
    'stringFormat': StringFormatData;
    /**
    * Gets or sets the rendering mode for text associated with this Graphics.
    */
    'textRenderingHint': GraphicsQualityOptionsData.TextRenderingHintEnum;
    
    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "compositingMode",
            "baseName": "CompositingMode",
            "type": "GraphicsQualityOptionsData.CompositingModeEnum"
        },
        {
            "name": "compositingQuality",
            "baseName": "CompositingQuality",
            "type": "GraphicsQualityOptionsData.CompositingQualityEnum"
        },
        {
            "name": "interpolationMode",
            "baseName": "InterpolationMode",
            "type": "GraphicsQualityOptionsData.InterpolationModeEnum"
        },
        {
            "name": "smoothingMode",
            "baseName": "SmoothingMode",
            "type": "GraphicsQualityOptionsData.SmoothingModeEnum"
        },
        {
            "name": "stringFormat",
            "baseName": "StringFormat",
            "type": "StringFormatData"
        },
        {
            "name": "textRenderingHint",
            "baseName": "TextRenderingHint",
            "type": "GraphicsQualityOptionsData.TextRenderingHintEnum"
        }    ];

    static getAttributeTypeMap() {
        return GraphicsQualityOptionsData.attributeTypeMap;
    }
}

export namespace GraphicsQualityOptionsData {
    export enum CompositingModeEnum {
        SourceOver = <any> 'SourceOver',
        SourceCopy = <any> 'SourceCopy'
    }
    export enum CompositingQualityEnum {
        Default = <any> 'Default',
        HighSpeed = <any> 'HighSpeed',
        HighQuality = <any> 'HighQuality',
        GammaCorrected = <any> 'GammaCorrected',
        AssumeLinear = <any> 'AssumeLinear',
        Invalid = <any> 'Invalid'
    }
    export enum InterpolationModeEnum {
        Default = <any> 'Default',
        Low = <any> 'Low',
        High = <any> 'High',
        Bilinear = <any> 'Bilinear',
        Bicubic = <any> 'Bicubic',
        NearestNeighbor = <any> 'NearestNeighbor',
        HighQualityBilinear = <any> 'HighQualityBilinear',
        HighQualityBicubic = <any> 'HighQualityBicubic',
        Invalid = <any> 'Invalid'
    }
    export enum SmoothingModeEnum {
        Default = <any> 'Default',
        HighSpeed = <any> 'HighSpeed',
        HighQuality = <any> 'HighQuality',
        None = <any> 'None',
        AntiAlias = <any> 'AntiAlias',
        Invalid = <any> 'Invalid'
    }
    export enum TextRenderingHintEnum {
        SystemDefault = <any> 'SystemDefault',
        SingleBitPerPixelGridFit = <any> 'SingleBitPerPixelGridFit',
        SingleBitPerPixel = <any> 'SingleBitPerPixel',
        AntiAliasGridFit = <any> 'AntiAliasGridFit',
        AntiAlias = <any> 'AntiAlias',
        ClearTypeGridFit = <any> 'ClearTypeGridFit'
    }
}
/**
* Provides information for the object link. This is supposed to be an atom:link, therefore it should have all attributes specified here http://tools.ietf.org/html/rfc4287#section-4.2.7
*/
export class Link {
    /**
    * The \"href\" attribute contains the link's IRI. atom:link elements MUST have an href attribute, whose value MUST be a IRI reference
    */
    'href': string;
    /**
    * atom:link elements MAY have a \"rel\" attribute that indicates the link relation type.  If the \"rel\" attribute is not present, the link element MUST be interpreted as if the link relation type is \"alternate\".
    */
    'rel': string;
    /**
    * On the link element, the \"type\" attribute's value is an advisory media type: it is a hint about the type of the representation that is expected to be returned when the value of the href attribute is dereferenced.  Note that the type attribute does not override the actual media type returned with the representation.
    */
    'type': string;
    /**
    * The \"title\" attribute conveys human-readable information about the link.  The content of the \"title\" attribute is Language-Sensitive.
    */
    'title': string;
    
    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "href",
            "baseName": "Href",
            "type": "string"
        },
        {
            "name": "rel",
            "baseName": "Rel",
            "type": "string"
        },
        {
            "name": "type",
            "baseName": "Type",
            "type": "string"
        },
        {
            "name": "title",
            "baseName": "Title",
            "type": "string"
        }    ];

    static getAttributeTypeMap() {
        return Link.attributeTypeMap;
    }
}

/**
* Reference to document.
*/
export class LinkElement {
    /**
    * Link to the document.
    */
    'link': WordsApiLink;
    
    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "link",
            "baseName": "link",
            "type": "WordsApiLink"
        }    ];

    static getAttributeTypeMap() {
        return LinkElement.attributeTypeMap;
    }
}

/**
* Contains data for load web document
*/
export class LoadWebDocumentData {
    /**
    * Web document url
    */
    'loadingDocumentUrl': string;
    /**
    * Save options
    */
    'saveOptions': SaveOptionsData;
    
    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "loadingDocumentUrl",
            "baseName": "LoadingDocumentUrl",
            "type": "string"
        },
        {
            "name": "saveOptions",
            "baseName": "SaveOptions",
            "type": "SaveOptionsData"
        }    ];

    static getAttributeTypeMap() {
        return LoadWebDocumentData.attributeTypeMap;
    }
}

/**
* container class for options of metafile rendering
*/
export class MetafileRenderingOptionsData {
    /**
    * Determines how EMF+ Dual metafiles should be rendered
    */
    'emfPlusDualRenderingMode': string;
    /**
    * Determines how metafile images should be rendered
    */
    'renderingMode': string;
    /**
    * Determines how WMF metafiles with embedded EMF metafiles should be rendered
    */
    'useEmfEmbeddedToWmf': boolean;
    
    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "emfPlusDualRenderingMode",
            "baseName": "EmfPlusDualRenderingMode",
            "type": "string"
        },
        {
            "name": "renderingMode",
            "baseName": "RenderingMode",
            "type": "string"
        },
        {
            "name": "useEmfEmbeddedToWmf",
            "baseName": "UseEmfEmbeddedToWmf",
            "type": "boolean"
        }    ];

    static getAttributeTypeMap() {
        return MetafileRenderingOptionsData.attributeTypeMap;
    }
}

/**
* result of the operation which modifies the original document and saves the result
*/
export class ModificationOperationResult {
    /**
    * Link to the source document (source for the modification operation)
    */
    'source': FileLink;
    /**
    * Link to the dest document (result of the modification operation)
    */
    'dest': FileLink;
    
    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "source",
            "baseName": "Source",
            "type": "FileLink"
        },
        {
            "name": "dest",
            "baseName": "Dest",
            "type": "FileLink"
        }    ];

    static getAttributeTypeMap() {
        return ModificationOperationResult.attributeTypeMap;
    }
}

/**
* container class for outline options
*/
export class OutlineOptionsData {
    /**
    * Allows to specify individual bookmarks outline level
    */
    'bookmarksOutlineLevels': Array<BookmarksOutlineLevelData>;
    /**
    * Specifies the default level in the document outline at which to display Word bookmarks
    */
    'defaultBookmarksOutlineLevel': number;
    /**
    * Specifies how many levels in the document outline to show expanded when the file is viewed
    */
    'expandedOutlineLevels': number;
    /**
    * Specifies how many levels of headings (paragraphs formatted with the Heading styles) to include in the document outline
    */
    'headingsOutlineLevels': number;
    
    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "bookmarksOutlineLevels",
            "baseName": "BookmarksOutlineLevels",
            "type": "Array<BookmarksOutlineLevelData>"
        },
        {
            "name": "defaultBookmarksOutlineLevel",
            "baseName": "DefaultBookmarksOutlineLevel",
            "type": "number"
        },
        {
            "name": "expandedOutlineLevels",
            "baseName": "ExpandedOutlineLevels",
            "type": "number"
        },
        {
            "name": "headingsOutlineLevels",
            "baseName": "HeadingsOutlineLevels",
            "type": "number"
        }    ];

    static getAttributeTypeMap() {
        return OutlineOptionsData.attributeTypeMap;
    }
}

/**
* Class is used for insert page number request building.
*/
export class PageNumber {
    /**
    * Page number format, e.g. \"{PAGE} of {NUMPAGES}\".
    */
    'format': string;
    /**
    * Text alignment, possible values are left, right, center or justify.
    */
    'alignment': string;
    /**
    * If true the page number is added at the top of the page, else at the bottom.
    */
    'isTop': boolean;
    /**
    * If true the page number is added on first page too.
    */
    'setPageNumberOnFirstPage': boolean;
    
    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "format",
            "baseName": "Format",
            "type": "string"
        },
        {
            "name": "alignment",
            "baseName": "Alignment",
            "type": "string"
        },
        {
            "name": "isTop",
            "baseName": "IsTop",
            "type": "boolean"
        },
        {
            "name": "setPageNumberOnFirstPage",
            "baseName": "SetPageNumberOnFirstPage",
            "type": "boolean"
        }    ];

    static getAttributeTypeMap() {
        return PageNumber.attributeTypeMap;
    }
}

/**
* Container for the page's statistical data
*/
export class PageStatData {
    /**
    * Page number
    */
    'pageNumber': number;
    /**
    * Total count of words in the page
    */
    'wordCount': number;
    /**
    * Total count of paragraphs in the page
    */
    'paragraphCount': number;
    /**
    * Detailed statistics of footnotes
    */
    'footnotesStatData': FootnotesStatData;
    
    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "pageNumber",
            "baseName": "PageNumber",
            "type": "number"
        },
        {
            "name": "wordCount",
            "baseName": "WordCount",
            "type": "number"
        },
        {
            "name": "paragraphCount",
            "baseName": "ParagraphCount",
            "type": "number"
        },
        {
            "name": "footnotesStatData",
            "baseName": "FootnotesStatData",
            "type": "FootnotesStatData"
        }    ];

    static getAttributeTypeMap() {
        return PageStatData.attributeTypeMap;
    }
}

/**
* Paragraph element
*/
export class ParagraphInsert {
    /**
    * Paragraph's text
    */
    'text': string;
    
    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "text",
            "baseName": "Text",
            "type": "string"
        }    ];

    static getAttributeTypeMap() {
        return ParagraphInsert.attributeTypeMap;
    }
}

/**
* container class for details of digital signature
*/
export class PdfDigitalSignatureDetailsData {
    /**
    * certificate's filename using for signing
    */
    'certificateFilename': string;
    /**
    * hash algorithm
    */
    'hashAlgorithm': string;
    /**
    * location of the signing
    */
    'location': string;
    /**
    * reason for the signing
    */
    'reason': string;
    /**
    * date of the signing
    */
    'signatureDate': Date;
    
    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "certificateFilename",
            "baseName": "CertificateFilename",
            "type": "string"
        },
        {
            "name": "hashAlgorithm",
            "baseName": "HashAlgorithm",
            "type": "string"
        },
        {
            "name": "location",
            "baseName": "Location",
            "type": "string"
        },
        {
            "name": "reason",
            "baseName": "Reason",
            "type": "string"
        },
        {
            "name": "signatureDate",
            "baseName": "SignatureDate",
            "type": "Date"
        }    ];

    static getAttributeTypeMap() {
        return PdfDigitalSignatureDetailsData.attributeTypeMap;
    }
}

/**
* container class for details of encryption
*/
export class PdfEncryptionDetailsData {
    /**
    * Specifies the encryption algorithm to use
    */
    'encryptionAlgorithm': string;
    /**
    * Specifies the owner password for the encrypted PDF document
    */
    'ownerPassword': string;
    /**
    * Specifies the operations that are allowed to a user on an encrypted PDF document
    */
    'permissions': string;
    /**
    * Specifies the user password required for opening the encrypted PDF document
    */
    'userPassword': string;
    
    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "encryptionAlgorithm",
            "baseName": "EncryptionAlgorithm",
            "type": "string"
        },
        {
            "name": "ownerPassword",
            "baseName": "OwnerPassword",
            "type": "string"
        },
        {
            "name": "permissions",
            "baseName": "Permissions",
            "type": "string"
        },
        {
            "name": "userPassword",
            "baseName": "UserPassword",
            "type": "string"
        }    ];

    static getAttributeTypeMap() {
        return PdfEncryptionDetailsData.attributeTypeMap;
    }
}

/**
* Preferred width.
*/
export class PreferredWidth {
    /**
    * Gets the unit of measure used for this preferred width value.
    */
    'type': PreferredWidth.TypeEnum;
    /**
    * Gets or sets the preferred width value. The unit of measure is specified in the  property.
    */
    'value': number;
    
    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "type",
            "baseName": "Type",
            "type": "PreferredWidth.TypeEnum"
        },
        {
            "name": "value",
            "baseName": "Value",
            "type": "number"
        }    ];

    static getAttributeTypeMap() {
        return PreferredWidth.attributeTypeMap;
    }
}

export namespace PreferredWidth {
    export enum TypeEnum {
        Auto = <any> 'Auto',
        Percent = <any> 'Percent',
        Points = <any> 'Points'
    }
}
/**
* Container for the data about protection of the document
*/
export class ProtectionData {
    /**
    * Type of the protection
    */
    'protectionType': string;
    
    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "protectionType",
            "baseName": "ProtectionType",
            "type": "string"
        }    ];

    static getAttributeTypeMap() {
        return ProtectionData.attributeTypeMap;
    }
}

/**
* Request on changing of protection
*/
export class ProtectionRequest {
    /**
    * Current password
    */
    'password': string;
    /**
    * New password
    */
    'newPassword': string;
    /**
    * New type of protection
    */
    'protectionType': string;
    
    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "password",
            "baseName": "Password",
            "type": "string"
        },
        {
            "name": "newPassword",
            "baseName": "NewPassword",
            "type": "string"
        },
        {
            "name": "protectionType",
            "baseName": "ProtectionType",
            "type": "string"
        }    ];

    static getAttributeTypeMap() {
        return ProtectionRequest.attributeTypeMap;
    }
}

/**
* Class for document replace text request building.
*/
export class ReplaceTextRequest {
    /**
    * Old text value (or regex pattern ) to replace.
    */
    'oldValue': string;
    /**
    * New text value to replace by.
    */
    'newValue': string;
    /**
    * Flag, true means the search is case-sensitive; false means the search is not case-sensitive.
    */
    'isMatchCase': boolean;
    /**
    * Flag, means that only whole word matched are replaced.
    */
    'isMatchWholeWord': boolean;
    /**
    * Flag, means that  contains regex expression.
    */
    'isOldValueRegex': boolean;
    
    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "oldValue",
            "baseName": "OldValue",
            "type": "string"
        },
        {
            "name": "newValue",
            "baseName": "NewValue",
            "type": "string"
        },
        {
            "name": "isMatchCase",
            "baseName": "IsMatchCase",
            "type": "boolean"
        },
        {
            "name": "isMatchWholeWord",
            "baseName": "IsMatchWholeWord",
            "type": "boolean"
        },
        {
            "name": "isOldValueRegex",
            "baseName": "IsOldValueRegex",
            "type": "boolean"
        }    ];

    static getAttributeTypeMap() {
        return ReplaceTextRequest.attributeTypeMap;
    }
}

/**
* base container class for save options data
*/
export class SaveOptionsData {
    /**
    * Gets or sets a value determining how colors are rendered. { Normal | Grayscale}
    */
    'colorMode': string;
    /**
    * format of save
    */
    'saveFormat': string;
    /**
    * name of destination file
    */
    'fileName': string;
    /**
    * Gets or sets a value determining how DrawingML shapes are rendered. { Fallback | DrawingML }
    */
    'dmlRenderingMode': string;
    /**
    * Gets or sets a value determining how DrawingML effects are rendered. { Simplified | None | Fine }
    */
    'dmlEffectsRenderingMode': string;
    /**
    * Controls zip output or not. Default value is false.
    */
    'zipOutput': boolean;
    /**
    * Gets or sets value determining whether content of  is updated before saving.
    */
    'updateSdtContent': boolean;
    /**
    * Gets or sets a value determining if fields should be updated before saving the document to a fixed page format. Default value for this property is true
    */
    'updateFields': boolean;
    
    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "colorMode",
            "baseName": "ColorMode",
            "type": "string"
        },
        {
            "name": "saveFormat",
            "baseName": "SaveFormat",
            "type": "string"
        },
        {
            "name": "fileName",
            "baseName": "FileName",
            "type": "string"
        },
        {
            "name": "dmlRenderingMode",
            "baseName": "DmlRenderingMode",
            "type": "string"
        },
        {
            "name": "dmlEffectsRenderingMode",
            "baseName": "DmlEffectsRenderingMode",
            "type": "string"
        },
        {
            "name": "zipOutput",
            "baseName": "ZipOutput",
            "type": "boolean"
        },
        {
            "name": "updateSdtContent",
            "baseName": "UpdateSdtContent",
            "type": "boolean"
        },
        {
            "name": "updateFields",
            "baseName": "UpdateFields",
            "type": "boolean"
        }    ];

    static getAttributeTypeMap() {
        return SaveOptionsData.attributeTypeMap;
    }
}

/**
* Result of saving.
*/
export class SaveResult {
    /**
    * Link to source document.
    */
    'sourceDocument': FileLink;
    /**
    * Link to destination document.
    */
    'destDocument': FileLink;
    /**
    * Links to additional items (css, images etc).
    */
    'additionalItems': Array<FileLink>;
    
    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "sourceDocument",
            "baseName": "SourceDocument",
            "type": "FileLink"
        },
        {
            "name": "destDocument",
            "baseName": "DestDocument",
            "type": "FileLink"
        },
        {
            "name": "additionalItems",
            "baseName": "AdditionalItems",
            "type": "Array<FileLink>"
        }    ];

    static getAttributeTypeMap() {
        return SaveResult.attributeTypeMap;
    }
}

/**
* Result of search operation.
*/
export class SearchResult {
    /**
    * Link to result range start node.
    */
    'rangeStart': DocumentPosition;
    /**
    * Link to result range end node.
    */
    'rangeEnd': DocumentPosition;
    
    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "rangeStart",
            "baseName": "RangeStart",
            "type": "DocumentPosition"
        },
        {
            "name": "rangeEnd",
            "baseName": "RangeEnd",
            "type": "DocumentPosition"
        }    ];

    static getAttributeTypeMap() {
        return SearchResult.attributeTypeMap;
    }
}

/**
* Result of splitting document.
*/
export class SplitDocumentResult {
    /**
    * Linkt to the source document.
    */
    'sourceDocument': FileLink;
    /**
    * Array of pages.
    */
    'pages': Array<FileLink>;
    /**
    * Link to the file archive with pages.
    */
    'zippedPages': FileLink;
    
    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "sourceDocument",
            "baseName": "SourceDocument",
            "type": "FileLink"
        },
        {
            "name": "pages",
            "baseName": "Pages",
            "type": "Array<FileLink>"
        },
        {
            "name": "zippedPages",
            "baseName": "ZippedPages",
            "type": "FileLink"
        }    ];

    static getAttributeTypeMap() {
        return SplitDocumentResult.attributeTypeMap;
    }
}

/**
* Child nodes of  or 
*/
export class StoryChildNodes {
    /**
    * Child nodes.        
    */
    'childNodes': Array<NodeLink>;
    
    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "childNodes",
            "baseName": "ChildNodes",
            "type": "Array<NodeLink>"
        }    ];

    static getAttributeTypeMap() {
        return StoryChildNodes.attributeTypeMap;
    }
}

/**
* Allows to specify System.Drawing.StringFormat options.
*/
export class StringFormatData {
    /**
    * Gets or sets horizontal alignment of the string.
    */
    'alignment': StringFormatData.AlignmentEnum;
    /**
    * Gets or sets a System.Drawing.StringFormatFlags enumeration that contains formatting information.
    */
    'formatFlags': StringFormatData.FormatFlagsEnum;
    /**
    * Gets or sets the System.Drawing.Text.HotkeyPrefix object for this System.Drawing.StringFormat object.
    */
    'hotkeyPrefix': StringFormatData.HotkeyPrefixEnum;
    /**
    * Gets or sets the vertical alignment of the string.
    */
    'lineAlignment': StringFormatData.LineAlignmentEnum;
    /**
    * Gets or sets the System.Drawing.StringTrimming enumeration for this System.Drawing.StringFormat object.
    */
    'trimming': StringFormatData.TrimmingEnum;
    
    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "alignment",
            "baseName": "Alignment",
            "type": "StringFormatData.AlignmentEnum"
        },
        {
            "name": "formatFlags",
            "baseName": "FormatFlags",
            "type": "StringFormatData.FormatFlagsEnum"
        },
        {
            "name": "hotkeyPrefix",
            "baseName": "HotkeyPrefix",
            "type": "StringFormatData.HotkeyPrefixEnum"
        },
        {
            "name": "lineAlignment",
            "baseName": "LineAlignment",
            "type": "StringFormatData.LineAlignmentEnum"
        },
        {
            "name": "trimming",
            "baseName": "Trimming",
            "type": "StringFormatData.TrimmingEnum"
        }    ];

    static getAttributeTypeMap() {
        return StringFormatData.attributeTypeMap;
    }
}

export namespace StringFormatData {
    export enum AlignmentEnum {
        Near = <any> 'Near',
        Center = <any> 'Center',
        Far = <any> 'Far'
    }
    export enum FormatFlagsEnum {
        DirectionRightToLeft = <any> 'DirectionRightToLeft',
        DirectionVertical = <any> 'DirectionVertical',
        FitBlackBox = <any> 'FitBlackBox',
        DisplayFormatControl = <any> 'DisplayFormatControl',
        NoFontFallback = <any> 'NoFontFallback',
        MeasureTrailingSpaces = <any> 'MeasureTrailingSpaces',
        NoWrap = <any> 'NoWrap',
        LineLimit = <any> 'LineLimit',
        NoClip = <any> 'NoClip'
    }
    export enum HotkeyPrefixEnum {
        None = <any> 'None',
        Show = <any> 'Show',
        Hide = <any> 'Hide'
    }
    export enum LineAlignmentEnum {
        Near = <any> 'Near',
        Center = <any> 'Center',
        Far = <any> 'Far'
    }
    export enum TrimmingEnum {
        None = <any> 'None',
        Character = <any> 'Character',
        Word = <any> 'Word',
        EllipsisCharacter = <any> 'EllipsisCharacter',
        EllipsisWord = <any> 'EllipsisWord',
        EllipsisPath = <any> 'EllipsisPath'
    }
}
/**
* Table cell element
*/
export class TableCellInsert {
    /**
    * Table cell will be inserted after cell with specified 0-based index.
    */
    'insertAfter': number;
    
    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "insertAfter",
            "baseName": "InsertAfter",
            "type": "number"
        }    ];

    static getAttributeTypeMap() {
        return TableCellInsert.attributeTypeMap;
    }
}

/**
* Table element
*/
export class TableInsert {
    /**
    * Table will be inserted before specified position.
    */
    'postion': DocumentPosition;
    /**
    * Count of columns. Default is 2.
    */
    'columnsCount': number;
    /**
    * Count of rows. Default is 2.
    */
    'rowsCount': number;
    
    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "postion",
            "baseName": "Postion",
            "type": "DocumentPosition"
        },
        {
            "name": "columnsCount",
            "baseName": "ColumnsCount",
            "type": "number"
        },
        {
            "name": "rowsCount",
            "baseName": "RowsCount",
            "type": "number"
        }    ];

    static getAttributeTypeMap() {
        return TableInsert.attributeTypeMap;
    }
}

/**
* Table row element
*/
export class TableRowInsert {
    /**
    * Table row will be inserted after row with specified 0-based index.
    */
    'insertAfter': number;
    /**
    * Count of columns. Default is 1.
    */
    'columnsCount': number;
    
    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "insertAfter",
            "baseName": "InsertAfter",
            "type": "number"
        },
        {
            "name": "columnsCount",
            "baseName": "ColumnsCount",
            "type": "number"
        }    ];

    static getAttributeTypeMap() {
        return TableRowInsert.attributeTypeMap;
    }
}

/**
* Class for insert watermark text request building. 
*/
export class WatermarkText {
    /**
    * The watermark text.
    */
    'text': string;
    /**
    * The watermark rotation angle.
    */
    'rotationAngle': number;
    
    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "text",
            "baseName": "Text",
            "type": "string"
        },
        {
            "name": "rotationAngle",
            "baseName": "RotationAngle",
            "type": "number"
        }    ];

    static getAttributeTypeMap() {
        return WatermarkText.attributeTypeMap;
    }
}

/**
* Utility class for  serialization
*/
export class XmlColor {
    /**
    * HTML string color representation
    */
    'web': string;
    /**
    * Alpha component of color structure
    */
    'alpha': number;
    
    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "web",
            "baseName": "Web",
            "type": "string"
        },
        {
            "name": "alpha",
            "baseName": "Alpha",
            "type": "number"
        }    ];

    static getAttributeTypeMap() {
        return XmlColor.attributeTypeMap;
    }
}

/**
* Represents a single bookmark.
*/
export class Bookmark extends LinkElement {
    /**
    * Gets or sets the name of the bookmark.
    */
    'name': string;
    /**
    * Gets or sets the text enclosed in the bookmark.
    */
    'text': string;
    
    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "name",
            "baseName": "Name",
            "type": "string"
        },
        {
            "name": "text",
            "baseName": "Text",
            "type": "string"
        }    ];

    static getAttributeTypeMap() {
        return super.getAttributeTypeMap().concat(Bookmark.attributeTypeMap);
    }
}

/**
* This resonse should be returned by the service when handling:  GET bookmarks/{bookmarkName}.
*/
export class BookmarkResponse extends AsposeResponse {
    /**
    * Bookmark.
    */
    'bookmark': Bookmark;
    
    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "bookmark",
            "baseName": "Bookmark",
            "type": "Bookmark"
        }    ];

    static getAttributeTypeMap() {
        return super.getAttributeTypeMap().concat(BookmarkResponse.attributeTypeMap);
    }
}

/**
* Represents an array of bookmarks.
*/
export class Bookmarks extends LinkElement {
    /**
    * Array of bookmarks.
    */
    'bookmarkList': Array<Bookmark>;
    
    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "bookmarkList",
            "baseName": "BookmarkList",
            "type": "Array<Bookmark>"
        }    ];

    static getAttributeTypeMap() {
        return super.getAttributeTypeMap().concat(Bookmarks.attributeTypeMap);
    }
}

/**
* This resonse should be returned by the service when handling:  GET bookmarks.
*/
export class BookmarksResponse extends AsposeResponse {
    /**
    * Bookmarks which are contained in document.
    */
    'bookmarks': Bookmarks;
    
    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "bookmarks",
            "baseName": "Bookmarks",
            "type": "Bookmarks"
        }    ];

    static getAttributeTypeMap() {
        return super.getAttributeTypeMap().concat(BookmarksResponse.attributeTypeMap);
    }
}

/**
* Represents a border of an object.
*/
export class Border extends LinkElement {
    /**
    * Gets or sets the border type.             
    */
    'borderType': Border.BorderTypeEnum;
    /**
    * Gets or sets the border color.             
    */
    'color': XmlColor;
    /**
    * Gets or sets distance of the border from text or from the page edge in points.
    */
    'distanceFromText': number;
    /**
    * Gets or sets the border style.
    */
    'lineStyle': Border.LineStyleEnum;
    /**
    * Gets or sets the border width in points.
    */
    'lineWidth': number;
    /**
    * Gets or sets a value indicating whether the border has a shadow.
    */
    'shadow': boolean;
    
    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "borderType",
            "baseName": "BorderType",
            "type": "Border.BorderTypeEnum"
        },
        {
            "name": "color",
            "baseName": "Color",
            "type": "XmlColor"
        },
        {
            "name": "distanceFromText",
            "baseName": "DistanceFromText",
            "type": "number"
        },
        {
            "name": "lineStyle",
            "baseName": "LineStyle",
            "type": "Border.LineStyleEnum"
        },
        {
            "name": "lineWidth",
            "baseName": "LineWidth",
            "type": "number"
        },
        {
            "name": "shadow",
            "baseName": "Shadow",
            "type": "boolean"
        }    ];

    static getAttributeTypeMap() {
        return super.getAttributeTypeMap().concat(Border.attributeTypeMap);
    }
}

export namespace Border {
    export enum BorderTypeEnum {
        Bottom = <any> 'Bottom',
        Left = <any> 'Left',
        Right = <any> 'Right',
        Top = <any> 'Top',
        Horizontal = <any> 'Horizontal',
        Vertical = <any> 'Vertical',
        DiagonalDown = <any> 'DiagonalDown',
        DiagonalUp = <any> 'DiagonalUp',
        None = <any> 'None'
    }
    export enum LineStyleEnum {
        None = <any> 'None',
        Single = <any> 'Single',
        Thick = <any> 'Thick',
        Double = <any> 'Double',
        Hairline = <any> 'Hairline',
        Dot = <any> 'Dot',
        DashLargeGap = <any> 'DashLargeGap',
        DotDash = <any> 'DotDash',
        DotDotDash = <any> 'DotDotDash',
        Triple = <any> 'Triple',
        ThinThickSmallGap = <any> 'ThinThickSmallGap',
        ThickThinSmallGap = <any> 'ThickThinSmallGap',
        ThinThickThinSmallGap = <any> 'ThinThickThinSmallGap',
        ThinThickMediumGap = <any> 'ThinThickMediumGap',
        ThickThinMediumGap = <any> 'ThickThinMediumGap',
        ThinThickThinMediumGap = <any> 'ThinThickThinMediumGap',
        ThinThickLargeGap = <any> 'ThinThickLargeGap',
        ThickThinLargeGap = <any> 'ThickThinLargeGap',
        ThinThickThinLargeGap = <any> 'ThinThickThinLargeGap',
        Wave = <any> 'Wave',
        DoubleWave = <any> 'DoubleWave',
        DashSmallGap = <any> 'DashSmallGap',
        DashDotStroker = <any> 'DashDotStroker',
        Emboss3D = <any> 'Emboss3D',
        Engrave3D = <any> 'Engrave3D',
        Outset = <any> 'Outset',
        Inset = <any> 'Inset'
    }
}
/**
* This resonse should be returned by the service when handling: GET {nodeWithBorders}/borders.
*/
export class BorderResponse extends AsposeResponse {
    /**
    * Table.
    */
    'border': Border;
    
    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "border",
            "baseName": "Border",
            "type": "Border"
        }    ];

    static getAttributeTypeMap() {
        return super.getAttributeTypeMap().concat(BorderResponse.attributeTypeMap);
    }
}

/**
* Collection of borders.
*/
export class BordersCollection extends LinkElement {
    /**
    * Collection of comments
    */
    'list': Array<Border>;
    
    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "list",
            "baseName": "List",
            "type": "Array<Border>"
        }    ];

    static getAttributeTypeMap() {
        return super.getAttributeTypeMap().concat(BordersCollection.attributeTypeMap);
    }
}

/**
* This resonse should be returned by the service when handling: GET {nodeWithBorders}/borders.
*/
export class BordersResponse extends AsposeResponse {
    /**
    * Table.
    */
    'borders': BordersCollection;
    
    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "borders",
            "baseName": "Borders",
            "type": "BordersCollection"
        }    ];

    static getAttributeTypeMap() {
        return super.getAttributeTypeMap().concat(BordersResponse.attributeTypeMap);
    }
}

/**
* Comment link.
*/
export class CommentLink extends LinkElement {
    
    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
    ];

    static getAttributeTypeMap() {
        return super.getAttributeTypeMap().concat(CommentLink.attributeTypeMap);
    }
}

/**
* This resonse should be returned by the service when handling: GET http://api.aspose.com/v1.1/words/Test.doc/comments/0 
*/
export class CommentResponse extends AsposeResponse {
    /**
    * Comment information
    */
    'comment': Comment;
    
    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "comment",
            "baseName": "Comment",
            "type": "Comment"
        }    ];

    static getAttributeTypeMap() {
        return super.getAttributeTypeMap().concat(CommentResponse.attributeTypeMap);
    }
}

/**
* Collection of comments.
*/
export class CommentsCollection extends LinkElement {
    /**
    * Collection of comments
    */
    'commentList': Array<Comment>;
    
    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "commentList",
            "baseName": "CommentList",
            "type": "Array<Comment>"
        }    ];

    static getAttributeTypeMap() {
        return super.getAttributeTypeMap().concat(CommentsCollection.attributeTypeMap);
    }
}

/**
* This resonse should be returned by the service when handling: GET http://api.aspose.com/v1.1/words/Test.doc/comments 
*/
export class CommentsResponse extends AsposeResponse {
    /**
    * Collection of comments.
    */
    'comments': CommentsCollection;
    
    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "comments",
            "baseName": "Comments",
            "type": "CommentsCollection"
        }    ];

    static getAttributeTypeMap() {
        return super.getAttributeTypeMap().concat(CommentsResponse.attributeTypeMap);
    }
}

/**
* container class for doc/dot save options
*/
export class DocSaveOptionsData extends SaveOptionsData {
    /**
    * Password
    */
    'password': string;
    /**
    * Determine whether or not save RoutingSlip data saved to output document
    */
    'saveRoutingSlip': boolean;
    
    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "password",
            "baseName": "Password",
            "type": "string"
        },
        {
            "name": "saveRoutingSlip",
            "baseName": "SaveRoutingSlip",
            "type": "boolean"
        }    ];

    static getAttributeTypeMap() {
        return super.getAttributeTypeMap().concat(DocSaveOptionsData.attributeTypeMap);
    }
}

/**
* Collection of document properties.
*/
export class DocumentProperties extends LinkElement {
    'list': Array<DocumentProperty>;
    
    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "list",
            "baseName": "List",
            "type": "Array<DocumentProperty>"
        }    ];

    static getAttributeTypeMap() {
        return super.getAttributeTypeMap().concat(DocumentProperties.attributeTypeMap);
    }
}

/**
* This resonse should be returned by the service when handling:  GET /documentProperties.
*/
export class DocumentPropertiesResponse extends AsposeResponse {
    /**
    * Collection of document properties.
    */
    'documentProperties': DocumentProperties;
    
    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "documentProperties",
            "baseName": "DocumentProperties",
            "type": "DocumentProperties"
        }    ];

    static getAttributeTypeMap() {
        return super.getAttributeTypeMap().concat(DocumentPropertiesResponse.attributeTypeMap);
    }
}

/**
* Words document property DTO.
*/
export class DocumentProperty extends LinkElement {
    /**
    * Name of the document property.
    */
    'name': string;
    /**
    * String value of the document property. 
    */
    'value': string;
    /**
    * Flag indicates whether the property is built-in or not. If true the property is built-in, if false the property is custom.
    */
    'builtIn': boolean;
    
    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "name",
            "baseName": "Name",
            "type": "string"
        },
        {
            "name": "value",
            "baseName": "Value",
            "type": "string"
        },
        {
            "name": "builtIn",
            "baseName": "BuiltIn",
            "type": "boolean"
        }    ];

    static getAttributeTypeMap() {
        return super.getAttributeTypeMap().concat(DocumentProperty.attributeTypeMap);
    }
}

/**
* This resonse should be returned by the service when handling:  GET documentProperties/{propertyName}.
*/
export class DocumentPropertyResponse extends AsposeResponse {
    /**
    * Document property.
    */
    'documentProperty': DocumentProperty;
    
    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "documentProperty",
            "baseName": "DocumentProperty",
            "type": "DocumentProperty"
        }    ];

    static getAttributeTypeMap() {
        return super.getAttributeTypeMap().concat(DocumentPropertyResponse.attributeTypeMap);
    }
}

/**
* Represents the response with document description.
*/
export class DocumentResponse extends AsposeResponse {
    /**
    * Document description.
    */
    'document': Document;
    
    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "document",
            "baseName": "Document",
            "type": "Document"
        }    ];

    static getAttributeTypeMap() {
        return super.getAttributeTypeMap().concat(DocumentResponse.attributeTypeMap);
    }
}

/**
* Represents drawing objects collection DTO.
*/
export class DrawingObjectCollection extends LinkElement {
    /**
    * Collection of DrawingObjects links 
    */
    'list': Array<LinkElement>;
    
    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "list",
            "baseName": "List",
            "type": "Array<LinkElement>"
        }    ];

    static getAttributeTypeMap() {
        return super.getAttributeTypeMap().concat(DrawingObjectCollection.attributeTypeMap);
    }
}

/**
* Response for \"drawingObjects/n\" resource.
*/
export class DrawingObjectResponse extends AsposeResponse {
    /**
    * Drawing object.
    */
    'drawingObject': DrawingObject;
    
    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "drawingObject",
            "baseName": "DrawingObject",
            "type": "DrawingObject"
        }    ];

    static getAttributeTypeMap() {
        return super.getAttributeTypeMap().concat(DrawingObjectResponse.attributeTypeMap);
    }
}

/**
* This resonse should be returned by the service when handling:  GET /drawingObjects.
*/
export class DrawingObjectsResponse extends AsposeResponse {
    /**
    * Collection of drawing objects.
    */
    'drawingObjects': DrawingObjectCollection;
    
    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "drawingObjects",
            "baseName": "DrawingObjects",
            "type": "DrawingObjectCollection"
        }    ];

    static getAttributeTypeMap() {
        return super.getAttributeTypeMap().concat(DrawingObjectsResponse.attributeTypeMap);
    }
}

/**
* Represents DTO for collection of fields.
*/
export class FieldCollection extends LinkElement {
    /**
    * Collection of fields
    */
    'list': Array<Field>;
    
    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "list",
            "baseName": "List",
            "type": "Array<Field>"
        }    ];

    static getAttributeTypeMap() {
        return super.getAttributeTypeMap().concat(FieldCollection.attributeTypeMap);
    }
}

/**
* Represents a collection of merge fields within a document. 
*/
export class FieldNames extends LinkElement {
    'names': Array<string>;
    
    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "names",
            "baseName": "Names",
            "type": "Array<string>"
        }    ];

    static getAttributeTypeMap() {
        return super.getAttributeTypeMap().concat(FieldNames.attributeTypeMap);
    }
}

/**
* This resonse should be returned by the service when handling:  GET /{name}/mailMergeFieldNames.
*/
export class FieldNamesResponse extends AsposeResponse {
    /**
    * Collection of mail merge fields.
    */
    'fieldNames': FieldNames;
    
    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "fieldNames",
            "baseName": "FieldNames",
            "type": "FieldNames"
        }    ];

    static getAttributeTypeMap() {
        return super.getAttributeTypeMap().concat(FieldNamesResponse.attributeTypeMap);
    }
}

/**
* This resonse should be returned by the service when handling: GET http://api.aspose.com/v1.1/words/Test.doc/paragraphs/{0}/fields/{1} 
*/
export class FieldResponse extends AsposeResponse {
    /**
    * Field information
    */
    'field': Field;
    
    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "field",
            "baseName": "Field",
            "type": "Field"
        }    ];

    static getAttributeTypeMap() {
        return super.getAttributeTypeMap().concat(FieldResponse.attributeTypeMap);
    }
}

/**
* This resonse should be returned by the service when handling: GET http://api.aspose.com/v1.1/words/Test.doc/{nodePath}/fields
*/
export class FieldsResponse extends AsposeResponse {
    /**
    * Collection of fields.
    */
    'fields': FieldCollection;
    
    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "fields",
            "baseName": "Fields",
            "type": "FieldCollection"
        }    ];

    static getAttributeTypeMap() {
        return super.getAttributeTypeMap().concat(FieldsResponse.attributeTypeMap);
    }
}

/**
* Provides information for the file link.
*/
export class FileLink extends Link {
    
    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
    ];

    static getAttributeTypeMap() {
        return super.getAttributeTypeMap().concat(FileLink.attributeTypeMap);
    }
}

/**
* Contains common options that can be specified when saving a document into fixed page formats (PDF, XPS, SWF, images etc).
*/
export class FixedPageSaveOptionsData extends SaveOptionsData {
    /**
    * Determines the quality of the JPEG images inside PDF document.
    */
    'jpegQuality': number;
    /**
    * Allows to specify metafile rendering options.
    */
    'metafileRenderingOptions': MetafileRenderingOptionsData;
    /**
    * Indicates the symbol set that is used to represent numbers while rendering to fixed page formats
    */
    'numeralFormat': string;
    /**
    * Flag indicates whether it is required to optimize output of XPS.  If this flag is set redundant nested canvases and empty canvases are removed, also neighbor glyphs with the same formatting are concatenated.  Note: The accuracy of the content display may be affected if this property is set to true.  Default is false.
    */
    'optimizeOutput': boolean;
    /**
    * Determines number of pages to render
    */
    'pageCount': number;
    /**
    * Determines 0-based index of the first page to render
    */
    'pageIndex': number;
    
    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "jpegQuality",
            "baseName": "JpegQuality",
            "type": "number"
        },
        {
            "name": "metafileRenderingOptions",
            "baseName": "MetafileRenderingOptions",
            "type": "MetafileRenderingOptionsData"
        },
        {
            "name": "numeralFormat",
            "baseName": "NumeralFormat",
            "type": "string"
        },
        {
            "name": "optimizeOutput",
            "baseName": "OptimizeOutput",
            "type": "boolean"
        },
        {
            "name": "pageCount",
            "baseName": "PageCount",
            "type": "number"
        },
        {
            "name": "pageIndex",
            "baseName": "PageIndex",
            "type": "number"
        }    ];

    static getAttributeTypeMap() {
        return super.getAttributeTypeMap().concat(FixedPageSaveOptionsData.attributeTypeMap);
    }
}

/**
* Font element             
*/
export class Font extends LinkElement {
    /**
    * True if the font is formatted as all capital letters.             
    */
    'allCaps': boolean;
    /**
    * Specifies whether the contents of this run shall have right-to-left characteristics.             
    */
    'bidi': boolean;
    /**
    * True if the font is formatted as bold.             
    */
    'bold': boolean;
    /**
    * True if the right-to-left text is formatted as bold.             
    */
    'boldBi': boolean;
    /**
    * Border object that specifies border for the font.
    */
    'border': Border;
    /**
    * Gets or sets the color of the font.             
    */
    'color': XmlColor;
    /**
    * Specifies whether the contents of this run shall be treated as complex script text regardless of their Unicode character values when determining the formatting for this run.             
    */
    'complexScript': boolean;
    /**
    * True if the font is formatted as double strikethrough text.             
    */
    'doubleStrikeThrough': boolean;
    /**
    * True if the font is formatted as embossed.             
    */
    'emboss': boolean;
    /**
    * True if the font is formatted as engraved.             
    */
    'engrave': boolean;
    /**
    * True if the font is formatted as hidden text.             
    */
    'hidden': boolean;
    /**
    * Gets or sets the highlight (marker) color.             
    */
    'highlightColor': XmlColor;
    /**
    * True if the font is formatted as italic.             
    */
    'italic': boolean;
    /**
    * True if the right-to-left text is formatted as italic.             
    */
    'italicBi': boolean;
    /**
    * Gets or sets the font size at which kerning starts.             
    */
    'kerning': number;
    /**
    * Gets or sets the locale identifier (language) of the formatted characters.             
    */
    'localeId': number;
    /**
    * Gets or sets the locale identifier (language) of the formatted right-to-left characters.             
    */
    'localeIdBi': number;
    /**
    * Gets or sets the locale identifier (language) of the formatted Asian characters.             
    */
    'localeIdFarEast': number;
    /**
    * Gets or sets the name of the font             
    */
    'name': string;
    /**
    * Returns or sets the font used for Latin text (characters with character codes from 0 (zero) through 127).             
    */
    'nameAscii': string;
    /**
    * Returns or sets the name of the font in a right-to-left language document.             
    */
    'nameBi': string;
    /**
    * Returns or sets an East Asian font name.             
    */
    'nameFarEast': string;
    /**
    * Returns or sets the font used for characters with character codes from 128 through 255.             
    */
    'nameOther': string;
    /**
    * True when the formatted characters are not to be spell checked.
    */
    'noProofing': boolean;
    /**
    * True if the font is formatted as outline.             
    */
    'outline': boolean;
    /**
    * Gets or sets the position of text (in points) relative to the base line. A positive number raises the text, and a negative number lowers it.             
    */
    'position': number;
    /**
    * Gets or sets character width scaling in percent.             
    */
    'scaling': number;
    /**
    * True if the font is formatted as shadowed.             
    */
    'shadow': boolean;
    /**
    * Gets or sets the font size in points.             
    */
    'size': number;
    /**
    * Gets or sets the font size in points used in a right-to-left document.             
    */
    'sizeBi': number;
    /**
    * True if the font is formatted as small capital letters.             
    */
    'smallCaps': boolean;
    /**
    * Returns or sets the spacing (in points) between characters.             
    */
    'spacing': number;
    /**
    * True if the font is formatted as strikethrough text.             
    */
    'strikeThrough': boolean;
    /**
    * Gets or sets the locale independent style identifier of the character style applied to this formatting.
    */
    'styleIdentifier': Font.StyleIdentifierEnum;
    /**
    * Gets or sets the name of the character style applied to this formatting.             
    */
    'styleName': string;
    /**
    * True if the font is formatted as subscript.             
    */
    'subscript': boolean;
    /**
    * True if the font is formatted as superscript.             
    */
    'superscript': boolean;
    /**
    * Gets or sets the font animation effect.
    */
    'textEffect': Font.TextEffectEnum;
    /**
    * Gets or sets the type of underline applied to the font.
    */
    'underline': Font.UnderlineEnum;
    /**
    * Gets or sets the color of the underline applied to the font.
    */
    'underlineColor': XmlColor;
    
    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "allCaps",
            "baseName": "AllCaps",
            "type": "boolean"
        },
        {
            "name": "bidi",
            "baseName": "Bidi",
            "type": "boolean"
        },
        {
            "name": "bold",
            "baseName": "Bold",
            "type": "boolean"
        },
        {
            "name": "boldBi",
            "baseName": "BoldBi",
            "type": "boolean"
        },
        {
            "name": "border",
            "baseName": "Border",
            "type": "Border"
        },
        {
            "name": "color",
            "baseName": "Color",
            "type": "XmlColor"
        },
        {
            "name": "complexScript",
            "baseName": "ComplexScript",
            "type": "boolean"
        },
        {
            "name": "doubleStrikeThrough",
            "baseName": "DoubleStrikeThrough",
            "type": "boolean"
        },
        {
            "name": "emboss",
            "baseName": "Emboss",
            "type": "boolean"
        },
        {
            "name": "engrave",
            "baseName": "Engrave",
            "type": "boolean"
        },
        {
            "name": "hidden",
            "baseName": "Hidden",
            "type": "boolean"
        },
        {
            "name": "highlightColor",
            "baseName": "HighlightColor",
            "type": "XmlColor"
        },
        {
            "name": "italic",
            "baseName": "Italic",
            "type": "boolean"
        },
        {
            "name": "italicBi",
            "baseName": "ItalicBi",
            "type": "boolean"
        },
        {
            "name": "kerning",
            "baseName": "Kerning",
            "type": "number"
        },
        {
            "name": "localeId",
            "baseName": "LocaleId",
            "type": "number"
        },
        {
            "name": "localeIdBi",
            "baseName": "LocaleIdBi",
            "type": "number"
        },
        {
            "name": "localeIdFarEast",
            "baseName": "LocaleIdFarEast",
            "type": "number"
        },
        {
            "name": "name",
            "baseName": "Name",
            "type": "string"
        },
        {
            "name": "nameAscii",
            "baseName": "NameAscii",
            "type": "string"
        },
        {
            "name": "nameBi",
            "baseName": "NameBi",
            "type": "string"
        },
        {
            "name": "nameFarEast",
            "baseName": "NameFarEast",
            "type": "string"
        },
        {
            "name": "nameOther",
            "baseName": "NameOther",
            "type": "string"
        },
        {
            "name": "noProofing",
            "baseName": "NoProofing",
            "type": "boolean"
        },
        {
            "name": "outline",
            "baseName": "Outline",
            "type": "boolean"
        },
        {
            "name": "position",
            "baseName": "Position",
            "type": "number"
        },
        {
            "name": "scaling",
            "baseName": "Scaling",
            "type": "number"
        },
        {
            "name": "shadow",
            "baseName": "Shadow",
            "type": "boolean"
        },
        {
            "name": "size",
            "baseName": "Size",
            "type": "number"
        },
        {
            "name": "sizeBi",
            "baseName": "SizeBi",
            "type": "number"
        },
        {
            "name": "smallCaps",
            "baseName": "SmallCaps",
            "type": "boolean"
        },
        {
            "name": "spacing",
            "baseName": "Spacing",
            "type": "number"
        },
        {
            "name": "strikeThrough",
            "baseName": "StrikeThrough",
            "type": "boolean"
        },
        {
            "name": "styleIdentifier",
            "baseName": "StyleIdentifier",
            "type": "Font.StyleIdentifierEnum"
        },
        {
            "name": "styleName",
            "baseName": "StyleName",
            "type": "string"
        },
        {
            "name": "subscript",
            "baseName": "Subscript",
            "type": "boolean"
        },
        {
            "name": "superscript",
            "baseName": "Superscript",
            "type": "boolean"
        },
        {
            "name": "textEffect",
            "baseName": "TextEffect",
            "type": "Font.TextEffectEnum"
        },
        {
            "name": "underline",
            "baseName": "Underline",
            "type": "Font.UnderlineEnum"
        },
        {
            "name": "underlineColor",
            "baseName": "UnderlineColor",
            "type": "XmlColor"
        }    ];

    static getAttributeTypeMap() {
        return super.getAttributeTypeMap().concat(Font.attributeTypeMap);
    }
}

export namespace Font {
    export enum StyleIdentifierEnum {
        Normal = <any> 'Normal',
        Heading1 = <any> 'Heading1',
        Heading2 = <any> 'Heading2',
        Heading3 = <any> 'Heading3',
        Heading4 = <any> 'Heading4',
        Heading5 = <any> 'Heading5',
        Heading6 = <any> 'Heading6',
        Heading7 = <any> 'Heading7',
        Heading8 = <any> 'Heading8',
        Heading9 = <any> 'Heading9',
        Index1 = <any> 'Index1',
        Index2 = <any> 'Index2',
        Index3 = <any> 'Index3',
        Index4 = <any> 'Index4',
        Index5 = <any> 'Index5',
        Index6 = <any> 'Index6',
        Index7 = <any> 'Index7',
        Index8 = <any> 'Index8',
        Index9 = <any> 'Index9',
        Toc1 = <any> 'Toc1',
        Toc2 = <any> 'Toc2',
        Toc3 = <any> 'Toc3',
        Toc4 = <any> 'Toc4',
        Toc5 = <any> 'Toc5',
        Toc6 = <any> 'Toc6',
        Toc7 = <any> 'Toc7',
        Toc8 = <any> 'Toc8',
        Toc9 = <any> 'Toc9',
        NormalIndent = <any> 'NormalIndent',
        FootnoteText = <any> 'FootnoteText',
        CommentText = <any> 'CommentText',
        Header = <any> 'Header',
        Footer = <any> 'Footer',
        IndexHeading = <any> 'IndexHeading',
        Caption = <any> 'Caption',
        TableOfFigures = <any> 'TableOfFigures',
        EnvelopeAddress = <any> 'EnvelopeAddress',
        EnvelopeReturn = <any> 'EnvelopeReturn',
        FootnoteReference = <any> 'FootnoteReference',
        CommentReference = <any> 'CommentReference',
        LineNumber = <any> 'LineNumber',
        PageNumber = <any> 'PageNumber',
        EndnoteReference = <any> 'EndnoteReference',
        EndnoteText = <any> 'EndnoteText',
        TableOfAuthorities = <any> 'TableOfAuthorities',
        Macro = <any> 'Macro',
        ToaHeading = <any> 'ToaHeading',
        List = <any> 'List',
        ListBullet = <any> 'ListBullet',
        ListNumber = <any> 'ListNumber',
        List2 = <any> 'List2',
        List3 = <any> 'List3',
        List4 = <any> 'List4',
        List5 = <any> 'List5',
        ListBullet2 = <any> 'ListBullet2',
        ListBullet3 = <any> 'ListBullet3',
        ListBullet4 = <any> 'ListBullet4',
        ListBullet5 = <any> 'ListBullet5',
        ListNumber2 = <any> 'ListNumber2',
        ListNumber3 = <any> 'ListNumber3',
        ListNumber4 = <any> 'ListNumber4',
        ListNumber5 = <any> 'ListNumber5',
        Title = <any> 'Title',
        Closing = <any> 'Closing',
        Signature = <any> 'Signature',
        DefaultParagraphFont = <any> 'DefaultParagraphFont',
        BodyText = <any> 'BodyText',
        BodyTextInd = <any> 'BodyTextInd',
        ListContinue = <any> 'ListContinue',
        ListContinue2 = <any> 'ListContinue2',
        ListContinue3 = <any> 'ListContinue3',
        ListContinue4 = <any> 'ListContinue4',
        ListContinue5 = <any> 'ListContinue5',
        MessageHeader = <any> 'MessageHeader',
        Subtitle = <any> 'Subtitle',
        Salutation = <any> 'Salutation',
        Date = <any> 'Date',
        BodyText1I = <any> 'BodyText1I',
        BodyText1I2 = <any> 'BodyText1I2',
        NoteHeading = <any> 'NoteHeading',
        BodyText2 = <any> 'BodyText2',
        BodyText3 = <any> 'BodyText3',
        BodyTextInd2 = <any> 'BodyTextInd2',
        BodyTextInd3 = <any> 'BodyTextInd3',
        BlockText = <any> 'BlockText',
        Hyperlink = <any> 'Hyperlink',
        FollowedHyperlink = <any> 'FollowedHyperlink',
        Strong = <any> 'Strong',
        Emphasis = <any> 'Emphasis',
        DocumentMap = <any> 'DocumentMap',
        PlainText = <any> 'PlainText',
        EmailSignature = <any> 'EmailSignature',
        HtmlTopOfForm = <any> 'HtmlTopOfForm',
        HtmlBottomOfForm = <any> 'HtmlBottomOfForm',
        NormalWeb = <any> 'NormalWeb',
        HtmlAcronym = <any> 'HtmlAcronym',
        HtmlAddress = <any> 'HtmlAddress',
        HtmlCite = <any> 'HtmlCite',
        HtmlCode = <any> 'HtmlCode',
        HtmlDefinition = <any> 'HtmlDefinition',
        HtmlKeyboard = <any> 'HtmlKeyboard',
        HtmlPreformatted = <any> 'HtmlPreformatted',
        HtmlSample = <any> 'HtmlSample',
        HtmlTypewriter = <any> 'HtmlTypewriter',
        HtmlVariable = <any> 'HtmlVariable',
        TableNormal = <any> 'TableNormal',
        CommentSubject = <any> 'CommentSubject',
        NoList = <any> 'NoList',
        OutlineList1 = <any> 'OutlineList1',
        OutlineList2 = <any> 'OutlineList2',
        OutlineList3 = <any> 'OutlineList3',
        TableSimple1 = <any> 'TableSimple1',
        TableSimple2 = <any> 'TableSimple2',
        TableSimple3 = <any> 'TableSimple3',
        TableClassic1 = <any> 'TableClassic1',
        TableClassic2 = <any> 'TableClassic2',
        TableClassic3 = <any> 'TableClassic3',
        TableClassic4 = <any> 'TableClassic4',
        TableColorful1 = <any> 'TableColorful1',
        TableColorful2 = <any> 'TableColorful2',
        TableColorful3 = <any> 'TableColorful3',
        TableColumns1 = <any> 'TableColumns1',
        TableColumns2 = <any> 'TableColumns2',
        TableColumns3 = <any> 'TableColumns3',
        TableColumns4 = <any> 'TableColumns4',
        TableColumns5 = <any> 'TableColumns5',
        TableGrid1 = <any> 'TableGrid1',
        TableGrid2 = <any> 'TableGrid2',
        TableGrid3 = <any> 'TableGrid3',
        TableGrid4 = <any> 'TableGrid4',
        TableGrid5 = <any> 'TableGrid5',
        TableGrid6 = <any> 'TableGrid6',
        TableGrid7 = <any> 'TableGrid7',
        TableGrid8 = <any> 'TableGrid8',
        TableList1 = <any> 'TableList1',
        TableList2 = <any> 'TableList2',
        TableList3 = <any> 'TableList3',
        TableList4 = <any> 'TableList4',
        TableList5 = <any> 'TableList5',
        TableList6 = <any> 'TableList6',
        TableList7 = <any> 'TableList7',
        TableList8 = <any> 'TableList8',
        Table3DEffects1 = <any> 'Table3DEffects1',
        Table3DEffects2 = <any> 'Table3DEffects2',
        Table3DEffects3 = <any> 'Table3DEffects3',
        TableContemporary = <any> 'TableContemporary',
        TableElegant = <any> 'TableElegant',
        TableProfessional = <any> 'TableProfessional',
        TableSubtle1 = <any> 'TableSubtle1',
        TableSubtle2 = <any> 'TableSubtle2',
        TableWeb1 = <any> 'TableWeb1',
        TableWeb2 = <any> 'TableWeb2',
        TableWeb3 = <any> 'TableWeb3',
        BalloonText = <any> 'BalloonText',
        TableGrid = <any> 'TableGrid',
        TableTheme = <any> 'TableTheme',
        PlaceholderText = <any> 'PlaceholderText',
        NoSpacing = <any> 'NoSpacing',
        LightShading = <any> 'LightShading',
        LightList = <any> 'LightList',
        LightGrid = <any> 'LightGrid',
        MediumShading1 = <any> 'MediumShading1',
        MediumShading2 = <any> 'MediumShading2',
        MediumList1 = <any> 'MediumList1',
        MediumList2 = <any> 'MediumList2',
        MediumGrid1 = <any> 'MediumGrid1',
        MediumGrid2 = <any> 'MediumGrid2',
        MediumGrid3 = <any> 'MediumGrid3',
        DarkList = <any> 'DarkList',
        ColorfulShading = <any> 'ColorfulShading',
        ColorfulList = <any> 'ColorfulList',
        ColorfulGrid = <any> 'ColorfulGrid',
        LightShadingAccent1 = <any> 'LightShadingAccent1',
        LightListAccent1 = <any> 'LightListAccent1',
        LightGridAccent1 = <any> 'LightGridAccent1',
        MediumShading1Accent1 = <any> 'MediumShading1Accent1',
        MediumShading2Accent1 = <any> 'MediumShading2Accent1',
        MediumList1Accent1 = <any> 'MediumList1Accent1',
        Revision = <any> 'Revision',
        ListParagraph = <any> 'ListParagraph',
        Quote = <any> 'Quote',
        IntenseQuote = <any> 'IntenseQuote',
        MediumList2Accent1 = <any> 'MediumList2Accent1',
        MediumGrid1Accent1 = <any> 'MediumGrid1Accent1',
        MediumGrid2Accent1 = <any> 'MediumGrid2Accent1',
        MediumGrid3Accent1 = <any> 'MediumGrid3Accent1',
        DarkListAccent1 = <any> 'DarkListAccent1',
        ColorfulShadingAccent1 = <any> 'ColorfulShadingAccent1',
        ColorfulListAccent1 = <any> 'ColorfulListAccent1',
        ColorfulGridAccent1 = <any> 'ColorfulGridAccent1',
        LightShadingAccent2 = <any> 'LightShadingAccent2',
        LightListAccent2 = <any> 'LightListAccent2',
        LightGridAccent2 = <any> 'LightGridAccent2',
        MediumShading1Accent2 = <any> 'MediumShading1Accent2',
        MediumShading2Accent2 = <any> 'MediumShading2Accent2',
        MediumList1Accent2 = <any> 'MediumList1Accent2',
        MediumList2Accent2 = <any> 'MediumList2Accent2',
        MediumGrid1Accent2 = <any> 'MediumGrid1Accent2',
        MediumGrid2Accent2 = <any> 'MediumGrid2Accent2',
        MediumGrid3Accent2 = <any> 'MediumGrid3Accent2',
        DarkListAccent2 = <any> 'DarkListAccent2',
        ColorfulShadingAccent2 = <any> 'ColorfulShadingAccent2',
        ColorfulListAccent2 = <any> 'ColorfulListAccent2',
        ColorfulGridAccent2 = <any> 'ColorfulGridAccent2',
        LightShadingAccent3 = <any> 'LightShadingAccent3',
        LightListAccent3 = <any> 'LightListAccent3',
        LightGridAccent3 = <any> 'LightGridAccent3',
        MediumShading1Accent3 = <any> 'MediumShading1Accent3',
        MediumShading2Accent3 = <any> 'MediumShading2Accent3',
        MediumList1Accent3 = <any> 'MediumList1Accent3',
        MediumList2Accent3 = <any> 'MediumList2Accent3',
        MediumGrid1Accent3 = <any> 'MediumGrid1Accent3',
        MediumGrid2Accent3 = <any> 'MediumGrid2Accent3',
        MediumGrid3Accent3 = <any> 'MediumGrid3Accent3',
        DarkListAccent3 = <any> 'DarkListAccent3',
        ColorfulShadingAccent3 = <any> 'ColorfulShadingAccent3',
        ColorfulListAccent3 = <any> 'ColorfulListAccent3',
        ColorfulGridAccent3 = <any> 'ColorfulGridAccent3',
        LightShadingAccent4 = <any> 'LightShadingAccent4',
        LightListAccent4 = <any> 'LightListAccent4',
        LightGridAccent4 = <any> 'LightGridAccent4',
        MediumShading1Accent4 = <any> 'MediumShading1Accent4',
        MediumShading2Accent4 = <any> 'MediumShading2Accent4',
        MediumList1Accent4 = <any> 'MediumList1Accent4',
        MediumList2Accent4 = <any> 'MediumList2Accent4',
        MediumGrid1Accent4 = <any> 'MediumGrid1Accent4',
        MediumGrid2Accent4 = <any> 'MediumGrid2Accent4',
        MediumGrid3Accent4 = <any> 'MediumGrid3Accent4',
        DarkListAccent4 = <any> 'DarkListAccent4',
        ColorfulShadingAccent4 = <any> 'ColorfulShadingAccent4',
        ColorfulListAccent4 = <any> 'ColorfulListAccent4',
        ColorfulGridAccent4 = <any> 'ColorfulGridAccent4',
        LightShadingAccent5 = <any> 'LightShadingAccent5',
        LightListAccent5 = <any> 'LightListAccent5',
        LightGridAccent5 = <any> 'LightGridAccent5',
        MediumShading1Accent5 = <any> 'MediumShading1Accent5',
        MediumShading2Accent5 = <any> 'MediumShading2Accent5',
        MediumList1Accent5 = <any> 'MediumList1Accent5',
        MediumList2Accent5 = <any> 'MediumList2Accent5',
        MediumGrid1Accent5 = <any> 'MediumGrid1Accent5',
        MediumGrid2Accent5 = <any> 'MediumGrid2Accent5',
        MediumGrid3Accent5 = <any> 'MediumGrid3Accent5',
        DarkListAccent5 = <any> 'DarkListAccent5',
        ColorfulShadingAccent5 = <any> 'ColorfulShadingAccent5',
        ColorfulListAccent5 = <any> 'ColorfulListAccent5',
        ColorfulGridAccent5 = <any> 'ColorfulGridAccent5',
        LightShadingAccent6 = <any> 'LightShadingAccent6',
        LightListAccent6 = <any> 'LightListAccent6',
        LightGridAccent6 = <any> 'LightGridAccent6',
        MediumShading1Accent6 = <any> 'MediumShading1Accent6',
        MediumShading2Accent6 = <any> 'MediumShading2Accent6',
        MediumList1Accent6 = <any> 'MediumList1Accent6',
        MediumList2Accent6 = <any> 'MediumList2Accent6',
        MediumGrid1Accent6 = <any> 'MediumGrid1Accent6',
        MediumGrid2Accent6 = <any> 'MediumGrid2Accent6',
        MediumGrid3Accent6 = <any> 'MediumGrid3Accent6',
        DarkListAccent6 = <any> 'DarkListAccent6',
        ColorfulShadingAccent6 = <any> 'ColorfulShadingAccent6',
        ColorfulListAccent6 = <any> 'ColorfulListAccent6',
        ColorfulGridAccent6 = <any> 'ColorfulGridAccent6',
        SubtleEmphasis = <any> 'SubtleEmphasis',
        IntenseEmphasis = <any> 'IntenseEmphasis',
        SubtleReference = <any> 'SubtleReference',
        IntenseReference = <any> 'IntenseReference',
        BookTitle = <any> 'BookTitle',
        Bibliography = <any> 'Bibliography',
        TocHeading = <any> 'TocHeading',
        PlainTable1 = <any> 'PlainTable1',
        PlainTable2 = <any> 'PlainTable2',
        PlainTable3 = <any> 'PlainTable3',
        PlainTable4 = <any> 'PlainTable4',
        PlainTable5 = <any> 'PlainTable5',
        TableGridLight = <any> 'TableGridLight',
        GridTable1Light = <any> 'GridTable1Light',
        GridTable2 = <any> 'GridTable2',
        GridTable3 = <any> 'GridTable3',
        GridTable4 = <any> 'GridTable4',
        GridTable5Dark = <any> 'GridTable5Dark',
        GridTable6Colorful = <any> 'GridTable6Colorful',
        GridTable7Colorful = <any> 'GridTable7Colorful',
        GridTable1LightAccent1 = <any> 'GridTable1LightAccent1',
        GridTable2Accent1 = <any> 'GridTable2Accent1',
        GridTable3Accent1 = <any> 'GridTable3Accent1',
        GridTable4Accent1 = <any> 'GridTable4Accent1',
        GridTable5DarkAccent1 = <any> 'GridTable5DarkAccent1',
        GridTable6ColorfulAccent1 = <any> 'GridTable6ColorfulAccent1',
        GridTable7ColorfulAccent1 = <any> 'GridTable7ColorfulAccent1',
        GridTable1LightAccent2 = <any> 'GridTable1LightAccent2',
        GridTable2Accent2 = <any> 'GridTable2Accent2',
        GridTable3Accent2 = <any> 'GridTable3Accent2',
        GridTable4Accent2 = <any> 'GridTable4Accent2',
        GridTable5DarkAccent2 = <any> 'GridTable5DarkAccent2',
        GridTable6ColorfulAccent2 = <any> 'GridTable6ColorfulAccent2',
        GridTable7ColorfulAccent2 = <any> 'GridTable7ColorfulAccent2',
        GridTable1LightAccent3 = <any> 'GridTable1LightAccent3',
        GridTable2Accent3 = <any> 'GridTable2Accent3',
        GridTable3Accent3 = <any> 'GridTable3Accent3',
        GridTable4Accent3 = <any> 'GridTable4Accent3',
        GridTable5DarkAccent3 = <any> 'GridTable5DarkAccent3',
        GridTable6ColorfulAccent3 = <any> 'GridTable6ColorfulAccent3',
        GridTable7ColorfulAccent3 = <any> 'GridTable7ColorfulAccent3',
        GridTable1LightAccent4 = <any> 'GridTable1LightAccent4',
        GridTable2Accent4 = <any> 'GridTable2Accent4',
        GridTable3Accent4 = <any> 'GridTable3Accent4',
        GridTable4Accent4 = <any> 'GridTable4Accent4',
        GridTable5DarkAccent4 = <any> 'GridTable5DarkAccent4',
        GridTable6ColorfulAccent4 = <any> 'GridTable6ColorfulAccent4',
        GridTable7ColorfulAccent4 = <any> 'GridTable7ColorfulAccent4',
        GridTable1LightAccent5 = <any> 'GridTable1LightAccent5',
        GridTable2Accent5 = <any> 'GridTable2Accent5',
        GridTable3Accent5 = <any> 'GridTable3Accent5',
        GridTable4Accent5 = <any> 'GridTable4Accent5',
        GridTable5DarkAccent5 = <any> 'GridTable5DarkAccent5',
        GridTable6ColorfulAccent5 = <any> 'GridTable6ColorfulAccent5',
        GridTable7ColorfulAccent5 = <any> 'GridTable7ColorfulAccent5',
        GridTable1LightAccent6 = <any> 'GridTable1LightAccent6',
        GridTable2Accent6 = <any> 'GridTable2Accent6',
        GridTable3Accent6 = <any> 'GridTable3Accent6',
        GridTable4Accent6 = <any> 'GridTable4Accent6',
        GridTable5DarkAccent6 = <any> 'GridTable5DarkAccent6',
        GridTable6ColorfulAccent6 = <any> 'GridTable6ColorfulAccent6',
        GridTable7ColorfulAccent6 = <any> 'GridTable7ColorfulAccent6',
        ListTable1Light = <any> 'ListTable1Light',
        ListTable2 = <any> 'ListTable2',
        ListTable3 = <any> 'ListTable3',
        ListTable4 = <any> 'ListTable4',
        ListTable5Dark = <any> 'ListTable5Dark',
        ListTable6Colorful = <any> 'ListTable6Colorful',
        ListTable7Colorful = <any> 'ListTable7Colorful',
        ListTable1LightAccent1 = <any> 'ListTable1LightAccent1',
        ListTable2Accent1 = <any> 'ListTable2Accent1',
        ListTable3Accent1 = <any> 'ListTable3Accent1',
        ListTable4Accent1 = <any> 'ListTable4Accent1',
        ListTable5DarkAccent1 = <any> 'ListTable5DarkAccent1',
        ListTable6ColorfulAccent1 = <any> 'ListTable6ColorfulAccent1',
        ListTable7ColorfulAccent1 = <any> 'ListTable7ColorfulAccent1',
        ListTable1LightAccent2 = <any> 'ListTable1LightAccent2',
        ListTable2Accent2 = <any> 'ListTable2Accent2',
        ListTable3Accent2 = <any> 'ListTable3Accent2',
        ListTable4Accent2 = <any> 'ListTable4Accent2',
        ListTable5DarkAccent2 = <any> 'ListTable5DarkAccent2',
        ListTable6ColorfulAccent2 = <any> 'ListTable6ColorfulAccent2',
        ListTable7ColorfulAccent2 = <any> 'ListTable7ColorfulAccent2',
        ListTable1LightAccent3 = <any> 'ListTable1LightAccent3',
        ListTable2Accent3 = <any> 'ListTable2Accent3',
        ListTable3Accent3 = <any> 'ListTable3Accent3',
        ListTable4Accent3 = <any> 'ListTable4Accent3',
        ListTable5DarkAccent3 = <any> 'ListTable5DarkAccent3',
        ListTable6ColorfulAccent3 = <any> 'ListTable6ColorfulAccent3',
        ListTable7ColorfulAccent3 = <any> 'ListTable7ColorfulAccent3',
        ListTable1LightAccent4 = <any> 'ListTable1LightAccent4',
        ListTable2Accent4 = <any> 'ListTable2Accent4',
        ListTable3Accent4 = <any> 'ListTable3Accent4',
        ListTable4Accent4 = <any> 'ListTable4Accent4',
        ListTable5DarkAccent4 = <any> 'ListTable5DarkAccent4',
        ListTable6ColorfulAccent4 = <any> 'ListTable6ColorfulAccent4',
        ListTable7ColorfulAccent4 = <any> 'ListTable7ColorfulAccent4',
        ListTable1LightAccent5 = <any> 'ListTable1LightAccent5',
        ListTable2Accent5 = <any> 'ListTable2Accent5',
        ListTable3Accent5 = <any> 'ListTable3Accent5',
        ListTable4Accent5 = <any> 'ListTable4Accent5',
        ListTable5DarkAccent5 = <any> 'ListTable5DarkAccent5',
        ListTable6ColorfulAccent5 = <any> 'ListTable6ColorfulAccent5',
        ListTable7ColorfulAccent5 = <any> 'ListTable7ColorfulAccent5',
        ListTable1LightAccent6 = <any> 'ListTable1LightAccent6',
        ListTable2Accent6 = <any> 'ListTable2Accent6',
        ListTable3Accent6 = <any> 'ListTable3Accent6',
        ListTable4Accent6 = <any> 'ListTable4Accent6',
        ListTable5DarkAccent6 = <any> 'ListTable5DarkAccent6',
        ListTable6ColorfulAccent6 = <any> 'ListTable6ColorfulAccent6',
        ListTable7ColorfulAccent6 = <any> 'ListTable7ColorfulAccent6',
        User = <any> 'User',
        Nil = <any> 'Nil'
    }
    export enum TextEffectEnum {
        None = <any> 'None',
        LasVegasLights = <any> 'LasVegasLights',
        BlinkingBackground = <any> 'BlinkingBackground',
        SparkleText = <any> 'SparkleText',
        MarchingBlackAnts = <any> 'MarchingBlackAnts',
        MarchingRedAnts = <any> 'MarchingRedAnts',
        Shimmer = <any> 'Shimmer'
    }
    export enum UnderlineEnum {
        None = <any> 'None',
        Single = <any> 'Single',
        Words = <any> 'Words',
        Double = <any> 'Double',
        Dotted = <any> 'Dotted',
        Thick = <any> 'Thick',
        Dash = <any> 'Dash',
        DotDash = <any> 'DotDash',
        DotDotDash = <any> 'DotDotDash',
        Wavy = <any> 'Wavy',
        DottedHeavy = <any> 'DottedHeavy',
        DashHeavy = <any> 'DashHeavy',
        DotDashHeavy = <any> 'DotDashHeavy',
        DotDotDashHeavy = <any> 'DotDotDashHeavy',
        WavyHeavy = <any> 'WavyHeavy',
        DashLong = <any> 'DashLong',
        WavyDouble = <any> 'WavyDouble',
        DashLongHeavy = <any> 'DashLongHeavy'
    }
}
/**
* This resonse should be returned by the service when handling: GET http://api.aspose.com/v1.1/words/Test.doc/paragraphs/{0}/runs/{1}/font 
*/
export class FontResponse extends AsposeResponse {
    /**
    * Font
    */
    'font': Font;
    
    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "font",
            "baseName": "Font",
            "type": "Font"
        }    ];

    static getAttributeTypeMap() {
        return super.getAttributeTypeMap().concat(FontResponse.attributeTypeMap);
    }
}

/**
* Collection of footnotes.
*/
export class FootnoteCollection extends LinkElement {
    /**
    * Collection of foonotes links 
    */
    'list': Array<Footnote>;
    
    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "list",
            "baseName": "List",
            "type": "Array<Footnote>"
        }    ];

    static getAttributeTypeMap() {
        return super.getAttributeTypeMap().concat(FootnoteCollection.attributeTypeMap);
    }
}

/**
* This resonse should be returned by the service when handling: GET http://api.aspose.com/v1.1/words/Test.doc/footnote/0 
*/
export class FootnoteResponse extends AsposeResponse {
    /**
    * Footnote information
    */
    'footnote': Footnote;
    
    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "footnote",
            "baseName": "Footnote",
            "type": "Footnote"
        }    ];

    static getAttributeTypeMap() {
        return super.getAttributeTypeMap().concat(FootnoteResponse.attributeTypeMap);
    }
}

/**
* This resonse should be returned by the service when handling: GET http://api.aspose.com/v1.1/words/Test.doc/footnotes 
*/
export class FootnotesResponse extends AsposeResponse {
    /**
    * Collection of footnotes.
    */
    'footnotes': FootnoteCollection;
    
    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "footnotes",
            "baseName": "Footnotes",
            "type": "FootnoteCollection"
        }    ];

    static getAttributeTypeMap() {
        return super.getAttributeTypeMap().concat(FootnotesResponse.attributeTypeMap);
    }
}

/**
* Represents DTO for collection of formfields.
*/
export class FormFieldCollection extends LinkElement {
    /**
    * Collection of formfields
    */
    'list': Array<FormField>;
    
    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "list",
            "baseName": "List",
            "type": "Array<FormField>"
        }    ];

    static getAttributeTypeMap() {
        return super.getAttributeTypeMap().concat(FormFieldCollection.attributeTypeMap);
    }
}

/**
* This resonse should be returned by the service when handling: GET http://api.aspose.com/v1.1/words/Test.doc/paragraphs/{0}/formfields/{1} 
*/
export class FormFieldResponse extends AsposeResponse {
    /**
    * Field information
    */
    'formField': FormField;
    
    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "formField",
            "baseName": "FormField",
            "type": "FormField"
        }    ];

    static getAttributeTypeMap() {
        return super.getAttributeTypeMap().concat(FormFieldResponse.attributeTypeMap);
    }
}

/**
* This resonse should be returned by the service when handling: GET http://api.aspose.com/v1.1/words/Test.doc/{nodePath}/formfields
*/
export class FormFieldsResponse extends AsposeResponse {
    /**
    * Collection of form fields.
    */
    'formFields': FormFieldCollection;
    
    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "formFields",
            "baseName": "FormFields",
            "type": "FormFieldCollection"
        }    ];

    static getAttributeTypeMap() {
        return super.getAttributeTypeMap().concat(FormFieldsResponse.attributeTypeMap);
    }
}

/**
* HeaderFooter link element
*/
export class HeaderFooterLink extends LinkElement {
    /**
    * Paragraph's text
    */
    'type': HeaderFooterLink.TypeEnum;
    
    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "type",
            "baseName": "Type",
            "type": "HeaderFooterLink.TypeEnum"
        }    ];

    static getAttributeTypeMap() {
        return super.getAttributeTypeMap().concat(HeaderFooterLink.attributeTypeMap);
    }
}

export namespace HeaderFooterLink {
    export enum TypeEnum {
        HeaderEven = <any> 'HeaderEven',
        HeaderPrimary = <any> 'HeaderPrimary',
        FooterEven = <any> 'FooterEven',
        FooterPrimary = <any> 'FooterPrimary',
        HeaderFirst = <any> 'HeaderFirst',
        FooterFirst = <any> 'FooterFirst'
    }
}
/**
* Collection of links to header/footers
*/
export class HeaderFooterLinkCollection extends LinkElement {
    /**
    * Collection of section's links
    */
    'list': Array<HeaderFooterLink>;
    
    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "list",
            "baseName": "List",
            "type": "Array<HeaderFooterLink>"
        }    ];

    static getAttributeTypeMap() {
        return super.getAttributeTypeMap().concat(HeaderFooterLinkCollection.attributeTypeMap);
    }
}

/**
* This resonse should be returned by the service when handling: GET http://api.aspose.com/v1.1/words/Test.doc/headersfooters/{0} 
*/
export class HeaderFooterResponse extends AsposeResponse {
    /**
    * HeaderFooter
    */
    'headerFooter': HeaderFooter;
    
    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "headerFooter",
            "baseName": "HeaderFooter",
            "type": "HeaderFooter"
        }    ];

    static getAttributeTypeMap() {
        return super.getAttributeTypeMap().concat(HeaderFooterResponse.attributeTypeMap);
    }
}

/**
* This resonse should be returned by the service when handling: GET http://api.aspose.com/v1.1/words/Test.doc/headersfooters 
*/
export class HeaderFootersResponse extends AsposeResponse {
    /**
    * Collection of headers/footers
    */
    'headerFooters': HeaderFooterLinkCollection;
    
    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "headerFooters",
            "baseName": "HeaderFooters",
            "type": "HeaderFooterLinkCollection"
        }    ];

    static getAttributeTypeMap() {
        return super.getAttributeTypeMap().concat(HeaderFootersResponse.attributeTypeMap);
    }
}

/**
* container class for html save options
*/
export class HtmlSaveOptionsData extends SaveOptionsData {
    /**
    * Specifies whether or not use pretty formats output
    */
    'prettyFormat': boolean;
    /**
    * Specifies whether negative left and right indents of paragraphs are allowed (not normalized)
    */
    'allowNegativeIndent': boolean;
    /**
    * Specifies the name of the CSS file written when the document is exported to HTML
    */
    'cssStyleSheetFileName': string;
    /**
    * Specifies how CSS styles are exported
    */
    'cssStyleSheetType': string;
    /**
    * Specifies how the document should be split when saving
    */
    'documentSplitCriteria': string;
    /**
    * Specifies the maximum level of headings at which to split the document
    */
    'documentSplitHeadingLevel': number;
    /**
    * Specifies the encoding to use when exporting
    */
    'encoding': string;
    /**
    * Specifies whether to export built-in and custom document properties
    */
    'exportDocumentProperties': boolean;
    /**
    * Specifies whether fonts resources should be embedded to HTML in Base64 encoding.  Default is false.
    */
    'exportFontsAsBase64': boolean;
    /**
    * Specifies whether font resources should be exported
    */
    'exportFontResources': boolean;
    /**
    * Specifies how headers and footers are output
    */
    'exportHeadersFootersMode': string;
    /**
    * Specifies whether images are saved in Base64 format
    */
    'exportImagesAsBase64': boolean;
    /**
    * Specifies whether language information is exported
    */
    'exportLanguageInformation': boolean;
    /**
    * Controls how list labels are output
    */
    'exportListLabels': string;
    /**
    * Specifies whether to convert metafiles into raster images when exporting
    */
    'exportMetafileAsRaster': boolean;
    /**
    * Specifies whether original URL should be used as the URL of the linked images. Default value is false.
    */
    'exportOriginalUrlForLinkedImages': boolean;
    /**
    * Specifies whether page margins is exported to HTML, MHTML or EPUB. Default is false.
    */
    'exportPageMargins': boolean;
    /**
    * Specifies whether page setup is exported
    */
    'exportPageSetup': boolean;
    /**
    * Specifies whether font sizes should be output in relative units when saving
    */
    'exportRelativeFontSize': boolean;
    /**
    * Specifies whether to write the roundtrip information when saving to HTML Default value is true.
    */
    'exportRoundtripInformation': boolean;
    /**
    * Controls how textboxes represented by Aspose.Words.Drawing.Shape are saved to HTML, MHTML or EPUB. Default value is false.    When set to true, exports textboxes as inline \"svg\" elements. When false, exports as \"image\" elements.
    */
    'exportTextBoxAsSvg': boolean;
    /**
    * Controls how text input form fields are saved
    */
    'exportTextInputFormFieldAsText': boolean;
    /**
    * Specifies whether to write page numbers to table of contents when saving
    */
    'exportTocPageNumbers': boolean;
    /**
    * Specifies whether to write the DOCTYPE declaration when saving
    */
    'exportXhtmlTransitional': boolean;
    /**
    * Specifies the physical folder where fonts are saved when exporting a document
    */
    'fontsFolder': string;
    /**
    * Specifies the name of the folder used to construct font URIs
    */
    'fontsFolderAlias': string;
    /**
    * Controls which font resources need subsetting when saving
    */
    'fontResourcesSubsettingSizeThreshold': number;
    /**
    * Specifies version of HTML standard that should be used when saving the document to HTML or MHTML.   Default value is Aspose.Words.Saving.HtmlVersion.Xhtml.
    */
    'htmlVersion': HtmlSaveOptionsData.HtmlVersionEnum;
    /**
    * Specifies the physical folder where images are saved when exporting a document
    */
    'imagesFolder': string;
    /**
    * Specifies the name of the folder used to construct image URIs
    */
    'imagesFolderAlias': string;
    /**
    * Specifies the output resolution for images when exporting
    */
    'imageResolution': number;
    /**
    * Controls how OfficeMath objects are exported to HTML, MHTML or EPUB.  Default value is HtmlOfficeMathOutputMode.Image.
    */
    'officeMathOutputMode': HtmlSaveOptionsData.OfficeMathOutputModeEnum;
    /**
    * Specifies a physical folder where all resources like images, fonts, and external CSS are saved when a document is exported to HTML. Default is an empty string.
    */
    'resourceFolder': string;
    /**
    * Specifies the name of the folder used to construct URIs of all resources written into an HTML document.  Default is an empty string.
    */
    'resourceFolderAlias': string;
    /**
    * Specifies whether images are scaled by Aspose.Words to the bounding shape size when exporting
    */
    'scaleImageToShapeSize': boolean;
    /**
    * Controls how table, row and cell widths are exported
    */
    'tableWidthOutputMode': string;
    /**
    * Controls how drop-down form fields are saved to HTML. Default value is false.
    */
    'exportDropDownFormFieldAsText': boolean;
    
    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "prettyFormat",
            "baseName": "PrettyFormat",
            "type": "boolean"
        },
        {
            "name": "allowNegativeIndent",
            "baseName": "AllowNegativeIndent",
            "type": "boolean"
        },
        {
            "name": "cssStyleSheetFileName",
            "baseName": "CssStyleSheetFileName",
            "type": "string"
        },
        {
            "name": "cssStyleSheetType",
            "baseName": "CssStyleSheetType",
            "type": "string"
        },
        {
            "name": "documentSplitCriteria",
            "baseName": "DocumentSplitCriteria",
            "type": "string"
        },
        {
            "name": "documentSplitHeadingLevel",
            "baseName": "DocumentSplitHeadingLevel",
            "type": "number"
        },
        {
            "name": "encoding",
            "baseName": "Encoding",
            "type": "string"
        },
        {
            "name": "exportDocumentProperties",
            "baseName": "ExportDocumentProperties",
            "type": "boolean"
        },
        {
            "name": "exportFontsAsBase64",
            "baseName": "ExportFontsAsBase64",
            "type": "boolean"
        },
        {
            "name": "exportFontResources",
            "baseName": "ExportFontResources",
            "type": "boolean"
        },
        {
            "name": "exportHeadersFootersMode",
            "baseName": "ExportHeadersFootersMode",
            "type": "string"
        },
        {
            "name": "exportImagesAsBase64",
            "baseName": "ExportImagesAsBase64",
            "type": "boolean"
        },
        {
            "name": "exportLanguageInformation",
            "baseName": "ExportLanguageInformation",
            "type": "boolean"
        },
        {
            "name": "exportListLabels",
            "baseName": "ExportListLabels",
            "type": "string"
        },
        {
            "name": "exportMetafileAsRaster",
            "baseName": "ExportMetafileAsRaster",
            "type": "boolean"
        },
        {
            "name": "exportOriginalUrlForLinkedImages",
            "baseName": "ExportOriginalUrlForLinkedImages",
            "type": "boolean"
        },
        {
            "name": "exportPageMargins",
            "baseName": "ExportPageMargins",
            "type": "boolean"
        },
        {
            "name": "exportPageSetup",
            "baseName": "ExportPageSetup",
            "type": "boolean"
        },
        {
            "name": "exportRelativeFontSize",
            "baseName": "ExportRelativeFontSize",
            "type": "boolean"
        },
        {
            "name": "exportRoundtripInformation",
            "baseName": "ExportRoundtripInformation",
            "type": "boolean"
        },
        {
            "name": "exportTextBoxAsSvg",
            "baseName": "ExportTextBoxAsSvg",
            "type": "boolean"
        },
        {
            "name": "exportTextInputFormFieldAsText",
            "baseName": "ExportTextInputFormFieldAsText",
            "type": "boolean"
        },
        {
            "name": "exportTocPageNumbers",
            "baseName": "ExportTocPageNumbers",
            "type": "boolean"
        },
        {
            "name": "exportXhtmlTransitional",
            "baseName": "ExportXhtmlTransitional",
            "type": "boolean"
        },
        {
            "name": "fontsFolder",
            "baseName": "FontsFolder",
            "type": "string"
        },
        {
            "name": "fontsFolderAlias",
            "baseName": "FontsFolderAlias",
            "type": "string"
        },
        {
            "name": "fontResourcesSubsettingSizeThreshold",
            "baseName": "FontResourcesSubsettingSizeThreshold",
            "type": "number"
        },
        {
            "name": "htmlVersion",
            "baseName": "HtmlVersion",
            "type": "HtmlSaveOptionsData.HtmlVersionEnum"
        },
        {
            "name": "imagesFolder",
            "baseName": "ImagesFolder",
            "type": "string"
        },
        {
            "name": "imagesFolderAlias",
            "baseName": "ImagesFolderAlias",
            "type": "string"
        },
        {
            "name": "imageResolution",
            "baseName": "ImageResolution",
            "type": "number"
        },
        {
            "name": "officeMathOutputMode",
            "baseName": "OfficeMathOutputMode",
            "type": "HtmlSaveOptionsData.OfficeMathOutputModeEnum"
        },
        {
            "name": "resourceFolder",
            "baseName": "ResourceFolder",
            "type": "string"
        },
        {
            "name": "resourceFolderAlias",
            "baseName": "ResourceFolderAlias",
            "type": "string"
        },
        {
            "name": "scaleImageToShapeSize",
            "baseName": "ScaleImageToShapeSize",
            "type": "boolean"
        },
        {
            "name": "tableWidthOutputMode",
            "baseName": "TableWidthOutputMode",
            "type": "string"
        },
        {
            "name": "exportDropDownFormFieldAsText",
            "baseName": "ExportDropDownFormFieldAsText",
            "type": "boolean"
        }    ];

    static getAttributeTypeMap() {
        return super.getAttributeTypeMap().concat(HtmlSaveOptionsData.attributeTypeMap);
    }
}

export namespace HtmlSaveOptionsData {
    export enum HtmlVersionEnum {
        Xhtml = <any> 'Xhtml',
        Html5 = <any> 'Html5'
    }
    export enum OfficeMathOutputModeEnum {
        Image = <any> 'Image',
        MathML = <any> 'MathML',
        Text = <any> 'Text'
    }
}
/**
* Hyperlink element.
*/
export class Hyperlink extends LinkElement {
    /**
    * Hypelink's display text
    */
    'displayText': string;
    /**
    * Value
    */
    'value': string;
    
    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "displayText",
            "baseName": "DisplayText",
            "type": "string"
        },
        {
            "name": "value",
            "baseName": "Value",
            "type": "string"
        }    ];

    static getAttributeTypeMap() {
        return super.getAttributeTypeMap().concat(Hyperlink.attributeTypeMap);
    }
}

/**
* This resonse should be returned by the service when handling:  GET /{name}/hyperlinks/{hyperlinkIndex} .
*/
export class HyperlinkResponse extends AsposeResponse {
    /**
    * Hyperlink.
    */
    'hyperlink': Hyperlink;
    
    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "hyperlink",
            "baseName": "Hyperlink",
            "type": "Hyperlink"
        }    ];

    static getAttributeTypeMap() {
        return super.getAttributeTypeMap().concat(HyperlinkResponse.attributeTypeMap);
    }
}

/**
* Collection of .
*/
export class Hyperlinks extends LinkElement {
    /**
    * Array of .
    */
    'hyperlinkList': Array<Hyperlink>;
    
    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "hyperlinkList",
            "baseName": "HyperlinkList",
            "type": "Array<Hyperlink>"
        }    ];

    static getAttributeTypeMap() {
        return super.getAttributeTypeMap().concat(Hyperlinks.attributeTypeMap);
    }
}

/**
* This resonse should be returned by the service when handling:  GET /{name}/hyperlinks .
*/
export class HyperlinksResponse extends AsposeResponse {
    /**
    * Collection of hyperlinks.
    */
    'hyperlinks': Hyperlinks;
    
    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "hyperlinks",
            "baseName": "Hyperlinks",
            "type": "Hyperlinks"
        }    ];

    static getAttributeTypeMap() {
        return super.getAttributeTypeMap().concat(HyperlinksResponse.attributeTypeMap);
    }
}

/**
* Reference to node
*/
export class NodeLink extends LinkElement {
    /**
    * Node id
    */
    'nodeId': string;
    
    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "nodeId",
            "baseName": "NodeId",
            "type": "string"
        }    ];

    static getAttributeTypeMap() {
        return super.getAttributeTypeMap().concat(NodeLink.attributeTypeMap);
    }
}

/**
* container class for odt/ott save options
*/
export class OdtSaveOptionsData extends SaveOptionsData {
    /**
    * Specifies whether or not use pretty formats output
    */
    'prettyFormat': boolean;
    /**
    * Specifies whether export should correspond to ODT specification 1.1 strictly
    */
    'isStrictSchema11': boolean;
    
    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "prettyFormat",
            "baseName": "PrettyFormat",
            "type": "boolean"
        },
        {
            "name": "isStrictSchema11",
            "baseName": "IsStrictSchema11",
            "type": "boolean"
        }    ];

    static getAttributeTypeMap() {
        return super.getAttributeTypeMap().concat(OdtSaveOptionsData.attributeTypeMap);
    }
}

/**
* This resonse should be returned by the service when handling: GET http://api.aspose.com/v1.1/words/Test.doc/officeMathObjects/0 
*/
export class OfficeMathObjectResponse extends AsposeResponse {
    /**
    * OfficeMathObject information
    */
    'officeMathObject': OfficeMathObject;
    
    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "officeMathObject",
            "baseName": "OfficeMathObject",
            "type": "OfficeMathObject"
        }    ];

    static getAttributeTypeMap() {
        return super.getAttributeTypeMap().concat(OfficeMathObjectResponse.attributeTypeMap);
    }
}

/**
* Collection of OfficeMath objects.
*/
export class OfficeMathObjectsCollection extends LinkElement {
    /**
    * Collection of OfficeMath objects.
    */
    'list': Array<OfficeMathObject>;
    
    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "list",
            "baseName": "List",
            "type": "Array<OfficeMathObject>"
        }    ];

    static getAttributeTypeMap() {
        return super.getAttributeTypeMap().concat(OfficeMathObjectsCollection.attributeTypeMap);
    }
}

/**
* This response should be returned by the service when handling: GET http://api.aspose.com/v1.1/words/Test.doc/OfficeMathObjects 
*/
export class OfficeMathObjectsResponse extends AsposeResponse {
    /**
    * Collection of OfficeMath objects.
    */
    'officeMathObjects': OfficeMathObjectsCollection;
    
    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "officeMathObjects",
            "baseName": "OfficeMathObjects",
            "type": "OfficeMathObjectsCollection"
        }    ];

    static getAttributeTypeMap() {
        return super.getAttributeTypeMap().concat(OfficeMathObjectsResponse.attributeTypeMap);
    }
}

/**
* container class for docx/docm/dotx/dotm/flatopc save options
*/
export class OoxmlSaveOptionsData extends SaveOptionsData {
    /**
    * Specifies whether or not use pretty formats output
    */
    'prettyFormat': boolean;
    /**
    * Specifies the OOXML version for the output document
    */
    'compliance': string;
    /**
    * Specifies a password to encrypt document using ECMA376 Standard encryption algorithm
    */
    'password': string;
    
    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "prettyFormat",
            "baseName": "PrettyFormat",
            "type": "boolean"
        },
        {
            "name": "compliance",
            "baseName": "Compliance",
            "type": "string"
        },
        {
            "name": "password",
            "baseName": "Password",
            "type": "string"
        }    ];

    static getAttributeTypeMap() {
        return super.getAttributeTypeMap().concat(OoxmlSaveOptionsData.attributeTypeMap);
    }
}

/**
* Represents the page setup properties of a section.             
*/
export class PageSetup extends LinkElement {
    /**
    * Specifies that this section contains bidirectional (complex scripts) text.             
    */
    'bidi': boolean;
    /**
    * Specifies where the page border is positioned relative to intersecting texts and objects.             
    */
    'borderAlwaysInFront': boolean;
    /**
    * Specifies which pages the page border is printed on.             
    */
    'borderAppliesTo': PageSetup.BorderAppliesToEnum;
    /**
    * Gets or sets a value that indicates whether the specified page border is measured from the edge of the page or from the text it surrounds.             
    */
    'borderDistanceFrom': PageSetup.BorderDistanceFromEnum;
    /**
    * Returns or sets the distance (in points) between the bottom edge of the page and the bottom boundary of the body text.             
    */
    'bottomMargin': number;
    /**
    * True if a different header or footer is used on the first page.             
    */
    'differentFirstPageHeaderFooter': boolean;
    /**
    * Gets or sets the paper tray (bin) to use for the first page of a section. The value is implementation (printer) specific.             
    */
    'firstPageTray': number;
    /**
    * Returns or sets the distance (in points) between the footer and the bottom of the page.             
    */
    'footerDistance': number;
    /**
    * Gets or sets the amount of extra space added to the margin for document binding.             
    */
    'gutter': number;
    /**
    * Returns or sets the distance (in points) between the header and the top of the page.             
    */
    'headerDistance': number;
    /**
    * Returns or sets the distance (in points) between the left edge of the page and the left boundary of the body text.             
    */
    'leftMargin': number;
    /**
    * Returns or sets the numeric increment for line numbers.             
    */
    'lineNumberCountBy': number;
    /**
    * Gets or sets distance between the right edge of line numbers and the left edge of the document.             
    */
    'lineNumberDistanceFromText': number;
    /**
    * Gets or sets the way line numbering runs  that is, whether it starts over at the beginning of a new page or section or runs continuously.             
    */
    'lineNumberRestartMode': PageSetup.LineNumberRestartModeEnum;
    /**
    * Gets or sets the starting line number.             
    */
    'lineStartingNumber': number;
    /**
    * Returns or sets the orientation of the page.             
    */
    'orientation': PageSetup.OrientationEnum;
    /**
    * Gets or sets the paper tray (bin) to be used for all but the first page of a section. The value is implementation (printer) specific.             
    */
    'otherPagesTray': number;
    /**
    * Returns or sets the height of the page in points.             
    */
    'pageHeight': number;
    /**
    * Gets or sets the page number format.             
    */
    'pageNumberStyle': PageSetup.PageNumberStyleEnum;
    /**
    * Gets or sets the starting page number of the section.             
    */
    'pageStartingNumber': number;
    /**
    * Returns or sets the width of the page in points.             
    */
    'pageWidth': number;
    /**
    * Returns or sets the paper size.             
    */
    'paperSize': PageSetup.PaperSizeEnum;
    /**
    * True if page numbering restarts at the beginning of the section.             
    */
    'restartPageNumbering': boolean;
    /**
    * Returns or sets the distance (in points) between the right edge of the page and the right boundary of the body text.             
    */
    'rightMargin': number;
    /**
    * Gets or sets whether Microsoft Word uses gutters for the section based on a right-to-left language or a left-to-right language.             
    */
    'rtlGutter': boolean;
    /**
    * Returns or sets the type of section break for the specified object.             
    */
    'sectionStart': PageSetup.SectionStartEnum;
    /**
    * True if endnotes are printed at the end of the next section that doesn't suppress endnotes.                 Suppressed endnotes are printed before the endnotes in that section.             
    */
    'suppressEndnotes': boolean;
    /**
    * Returns or sets the distance (in points) between the top edge of the page and the top boundary of the body text.             
    */
    'topMargin': number;
    /**
    * Returns or sets the vertical alignment of text on each page in a document or section.             
    */
    'verticalAlignment': PageSetup.VerticalAlignmentEnum;
    
    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "bidi",
            "baseName": "Bidi",
            "type": "boolean"
        },
        {
            "name": "borderAlwaysInFront",
            "baseName": "BorderAlwaysInFront",
            "type": "boolean"
        },
        {
            "name": "borderAppliesTo",
            "baseName": "BorderAppliesTo",
            "type": "PageSetup.BorderAppliesToEnum"
        },
        {
            "name": "borderDistanceFrom",
            "baseName": "BorderDistanceFrom",
            "type": "PageSetup.BorderDistanceFromEnum"
        },
        {
            "name": "bottomMargin",
            "baseName": "BottomMargin",
            "type": "number"
        },
        {
            "name": "differentFirstPageHeaderFooter",
            "baseName": "DifferentFirstPageHeaderFooter",
            "type": "boolean"
        },
        {
            "name": "firstPageTray",
            "baseName": "FirstPageTray",
            "type": "number"
        },
        {
            "name": "footerDistance",
            "baseName": "FooterDistance",
            "type": "number"
        },
        {
            "name": "gutter",
            "baseName": "Gutter",
            "type": "number"
        },
        {
            "name": "headerDistance",
            "baseName": "HeaderDistance",
            "type": "number"
        },
        {
            "name": "leftMargin",
            "baseName": "LeftMargin",
            "type": "number"
        },
        {
            "name": "lineNumberCountBy",
            "baseName": "LineNumberCountBy",
            "type": "number"
        },
        {
            "name": "lineNumberDistanceFromText",
            "baseName": "LineNumberDistanceFromText",
            "type": "number"
        },
        {
            "name": "lineNumberRestartMode",
            "baseName": "LineNumberRestartMode",
            "type": "PageSetup.LineNumberRestartModeEnum"
        },
        {
            "name": "lineStartingNumber",
            "baseName": "LineStartingNumber",
            "type": "number"
        },
        {
            "name": "orientation",
            "baseName": "Orientation",
            "type": "PageSetup.OrientationEnum"
        },
        {
            "name": "otherPagesTray",
            "baseName": "OtherPagesTray",
            "type": "number"
        },
        {
            "name": "pageHeight",
            "baseName": "PageHeight",
            "type": "number"
        },
        {
            "name": "pageNumberStyle",
            "baseName": "PageNumberStyle",
            "type": "PageSetup.PageNumberStyleEnum"
        },
        {
            "name": "pageStartingNumber",
            "baseName": "PageStartingNumber",
            "type": "number"
        },
        {
            "name": "pageWidth",
            "baseName": "PageWidth",
            "type": "number"
        },
        {
            "name": "paperSize",
            "baseName": "PaperSize",
            "type": "PageSetup.PaperSizeEnum"
        },
        {
            "name": "restartPageNumbering",
            "baseName": "RestartPageNumbering",
            "type": "boolean"
        },
        {
            "name": "rightMargin",
            "baseName": "RightMargin",
            "type": "number"
        },
        {
            "name": "rtlGutter",
            "baseName": "RtlGutter",
            "type": "boolean"
        },
        {
            "name": "sectionStart",
            "baseName": "SectionStart",
            "type": "PageSetup.SectionStartEnum"
        },
        {
            "name": "suppressEndnotes",
            "baseName": "SuppressEndnotes",
            "type": "boolean"
        },
        {
            "name": "topMargin",
            "baseName": "TopMargin",
            "type": "number"
        },
        {
            "name": "verticalAlignment",
            "baseName": "VerticalAlignment",
            "type": "PageSetup.VerticalAlignmentEnum"
        }    ];

    static getAttributeTypeMap() {
        return super.getAttributeTypeMap().concat(PageSetup.attributeTypeMap);
    }
}

export namespace PageSetup {
    export enum BorderAppliesToEnum {
        AllPages = <any> 'AllPages',
        FirstPage = <any> 'FirstPage',
        OtherPages = <any> 'OtherPages'
    }
    export enum BorderDistanceFromEnum {
        Text = <any> 'Text',
        PageEdge = <any> 'PageEdge'
    }
    export enum LineNumberRestartModeEnum {
        RestartPage = <any> 'RestartPage',
        RestartSection = <any> 'RestartSection',
        Continuous = <any> 'Continuous'
    }
    export enum OrientationEnum {
        Portrait = <any> 'Portrait',
        Landscape = <any> 'Landscape'
    }
    export enum PageNumberStyleEnum {
        Arabic = <any> 'Arabic',
        UppercaseRoman = <any> 'UppercaseRoman',
        LowercaseRoman = <any> 'LowercaseRoman',
        UppercaseLetter = <any> 'UppercaseLetter',
        LowercaseLetter = <any> 'LowercaseLetter',
        Ordinal = <any> 'Ordinal',
        Number = <any> 'Number',
        OrdinalText = <any> 'OrdinalText',
        Hex = <any> 'Hex',
        ChicagoManual = <any> 'ChicagoManual',
        Kanji = <any> 'Kanji',
        KanjiDigit = <any> 'KanjiDigit',
        AiueoHalfWidth = <any> 'AiueoHalfWidth',
        IrohaHalfWidth = <any> 'IrohaHalfWidth',
        ArabicFullWidth = <any> 'ArabicFullWidth',
        ArabicHalfWidth = <any> 'ArabicHalfWidth',
        KanjiTraditional = <any> 'KanjiTraditional',
        KanjiTraditional2 = <any> 'KanjiTraditional2',
        NumberInCircle = <any> 'NumberInCircle',
        DecimalFullWidth = <any> 'DecimalFullWidth',
        Aiueo = <any> 'Aiueo',
        Iroha = <any> 'Iroha',
        LeadingZero = <any> 'LeadingZero',
        Bullet = <any> 'Bullet',
        Ganada = <any> 'Ganada',
        Chosung = <any> 'Chosung',
        GB1 = <any> 'GB1',
        GB2 = <any> 'GB2',
        GB3 = <any> 'GB3',
        GB4 = <any> 'GB4',
        Zodiac1 = <any> 'Zodiac1',
        Zodiac2 = <any> 'Zodiac2',
        Zodiac3 = <any> 'Zodiac3',
        TradChinNum1 = <any> 'TradChinNum1',
        TradChinNum2 = <any> 'TradChinNum2',
        TradChinNum3 = <any> 'TradChinNum3',
        TradChinNum4 = <any> 'TradChinNum4',
        SimpChinNum1 = <any> 'SimpChinNum1',
        SimpChinNum2 = <any> 'SimpChinNum2',
        SimpChinNum3 = <any> 'SimpChinNum3',
        SimpChinNum4 = <any> 'SimpChinNum4',
        HanjaRead = <any> 'HanjaRead',
        HanjaReadDigit = <any> 'HanjaReadDigit',
        Hangul = <any> 'Hangul',
        Hanja = <any> 'Hanja',
        Hebrew1 = <any> 'Hebrew1',
        Arabic1 = <any> 'Arabic1',
        Hebrew2 = <any> 'Hebrew2',
        Arabic2 = <any> 'Arabic2',
        HindiLetter1 = <any> 'HindiLetter1',
        HindiLetter2 = <any> 'HindiLetter2',
        HindiArabic = <any> 'HindiArabic',
        HindiCardinalText = <any> 'HindiCardinalText',
        ThaiLetter = <any> 'ThaiLetter',
        ThaiArabic = <any> 'ThaiArabic',
        ThaiCardinalText = <any> 'ThaiCardinalText',
        VietCardinalText = <any> 'VietCardinalText',
        NumberInDash = <any> 'NumberInDash',
        NumInDash = <any> 'NumInDash',
        LowercaseRussian = <any> 'LowercaseRussian',
        UppercaseRussian = <any> 'UppercaseRussian',
        None = <any> 'None',
        Custom = <any> 'Custom'
    }
    export enum PaperSizeEnum {
        A3 = <any> 'A3',
        A4 = <any> 'A4',
        A5 = <any> 'A5',
        B4 = <any> 'B4',
        B5 = <any> 'B5',
        Executive = <any> 'Executive',
        Folio = <any> 'Folio',
        Ledger = <any> 'Ledger',
        Legal = <any> 'Legal',
        Letter = <any> 'Letter',
        EnvelopeDL = <any> 'EnvelopeDL',
        Quarto = <any> 'Quarto',
        Statement = <any> 'Statement',
        Tabloid = <any> 'Tabloid',
        Paper10x14 = <any> 'Paper10x14',
        Paper11x17 = <any> 'Paper11x17',
        Custom = <any> 'Custom'
    }
    export enum SectionStartEnum {
        Continuous = <any> 'Continuous',
        NewColumn = <any> 'NewColumn',
        NewPage = <any> 'NewPage',
        EvenPage = <any> 'EvenPage',
        OddPage = <any> 'OddPage'
    }
    export enum VerticalAlignmentEnum {
        Top = <any> 'Top',
        Center = <any> 'Center',
        Justify = <any> 'Justify',
        Bottom = <any> 'Bottom'
    }
}
/**
* Collection of links to paragraphs
*/
export class ParagraphLinkCollection extends LinkElement {
    /**
    * Collection of paragraph's links
    */
    'paragraphLinkList': Array<ParagraphLink>;
    
    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "paragraphLinkList",
            "baseName": "ParagraphLinkList",
            "type": "Array<ParagraphLink>"
        }    ];

    static getAttributeTypeMap() {
        return super.getAttributeTypeMap().concat(ParagraphLinkCollection.attributeTypeMap);
    }
}

/**
* This resonse should be returned by the service when handling: GET http://api.aspose.com/v1.1/words/Test.doc/paragraphs 
*/
export class ParagraphLinkCollectionResponse extends AsposeResponse {
    /**
    * Collection of paragraphs
    */
    'paragraphs': ParagraphLinkCollection;
    
    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "paragraphs",
            "baseName": "Paragraphs",
            "type": "ParagraphLinkCollection"
        }    ];

    static getAttributeTypeMap() {
        return super.getAttributeTypeMap().concat(ParagraphLinkCollectionResponse.attributeTypeMap);
    }
}

/**
* This resonse should be returned by the service when handling: GET http://api.aspose.com/v1.1/words/Test.doc/paragraphs/{0} 
*/
export class ParagraphResponse extends AsposeResponse {
    /**
    * Paragraph
    */
    'paragraph': Paragraph;
    
    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "paragraph",
            "baseName": "Paragraph",
            "type": "Paragraph"
        }    ];

    static getAttributeTypeMap() {
        return super.getAttributeTypeMap().concat(ParagraphResponse.attributeTypeMap);
    }
}

/**
* Response for the request of data about protection
*/
export class ProtectionDataResponse extends AsposeResponse {
    /**
    * Protection's data of the document
    */
    'protectionData': ProtectionData;
    /**
    * Link to the document
    */
    'documentLink': FileLink;
    
    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "protectionData",
            "baseName": "ProtectionData",
            "type": "ProtectionData"
        },
        {
            "name": "documentLink",
            "baseName": "DocumentLink",
            "type": "FileLink"
        }    ];

    static getAttributeTypeMap() {
        return super.getAttributeTypeMap().concat(ProtectionDataResponse.attributeTypeMap);
    }
}

/**
* Response for the request on changing protection of the document
*/
export class ProtectionResponse extends AsposeResponse {
    /**
    * Result of the changing of protection
    */
    'protectionResult': boolean;
    /**
    * Link to the document
    */
    'documentLink': FileLink;
    
    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "protectionResult",
            "baseName": "ProtectionResult",
            "type": "boolean"
        },
        {
            "name": "documentLink",
            "baseName": "DocumentLink",
            "type": "FileLink"
        }    ];

    static getAttributeTypeMap() {
        return super.getAttributeTypeMap().concat(ProtectionResponse.attributeTypeMap);
    }
}

/**
* Response for \"Replace text\" action.
*/
export class ReplaceTextResponse extends AsposeResponse {
    /**
    * Number of occurrences of the captured text in the document.
    */
    'matches': number;
    /**
    * Link to the document.
    */
    'documentLink': FileLink;
    
    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "matches",
            "baseName": "Matches",
            "type": "number"
        },
        {
            "name": "documentLink",
            "baseName": "DocumentLink",
            "type": "FileLink"
        }    ];

    static getAttributeTypeMap() {
        return super.getAttributeTypeMap().concat(ReplaceTextResponse.attributeTypeMap);
    }
}

/**
* response of the modification operations for the revisions collection (now these are acceptAll and rejectAll)
*/
export class RevisionsModificationResponse extends AsposeResponse {
    /**
    * result of the modification operations for the revisions collection
    */
    'result': ModificationOperationResult;
    
    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "result",
            "baseName": "Result",
            "type": "ModificationOperationResult"
        }    ];

    static getAttributeTypeMap() {
        return super.getAttributeTypeMap().concat(RevisionsModificationResponse.attributeTypeMap);
    }
}

/**
* container class for rtf save options
*/
export class RtfSaveOptionsData extends SaveOptionsData {
    /**
    * Specifies whether or not use pretty formats output
    */
    'prettyFormat': boolean;
    /**
    * Allows to make output RTF documents smaller in size, but if they contain RTL (right-to-left) text, it will not be displayed correctly
    */
    'exportCompactSize': boolean;
    /**
    * Specifies whether the keywords for \"old readers\" are written to RTF or not
    */
    'exportImagesForOldReaders': boolean;
    
    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "prettyFormat",
            "baseName": "PrettyFormat",
            "type": "boolean"
        },
        {
            "name": "exportCompactSize",
            "baseName": "ExportCompactSize",
            "type": "boolean"
        },
        {
            "name": "exportImagesForOldReaders",
            "baseName": "ExportImagesForOldReaders",
            "type": "boolean"
        }    ];

    static getAttributeTypeMap() {
        return super.getAttributeTypeMap().concat(RtfSaveOptionsData.attributeTypeMap);
    }
}

/**
* This resonse should be returned by the service when handling: GET http://api.aspose.com/v1.1/words/Test.doc/paragraphs/{0}/runs/{1} 
*/
export class RunResponse extends AsposeResponse {
    /**
    * Run
    */
    'run': Run;
    
    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "run",
            "baseName": "Run",
            "type": "Run"
        }    ];

    static getAttributeTypeMap() {
        return super.getAttributeTypeMap().concat(RunResponse.attributeTypeMap);
    }
}

/**
* Represents DTO for collection of runs.
*/
export class Runs extends LinkElement {
    /**
    * Collection of fields
    */
    'list': Array<Run>;
    
    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "list",
            "baseName": "List",
            "type": "Array<Run>"
        }    ];

    static getAttributeTypeMap() {
        return super.getAttributeTypeMap().concat(Runs.attributeTypeMap);
    }
}

/**
* This resonse should be returned by the service when handling: GET http://api.aspose.com/v1.1/words/Test.doc/{paragraphPath}/runs
*/
export class RunsResponse extends AsposeResponse {
    /**
    * Collection of runs.
    */
    'runs': Runs;
    
    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "runs",
            "baseName": "Runs",
            "type": "Runs"
        }    ];

    static getAttributeTypeMap() {
        return super.getAttributeTypeMap().concat(RunsResponse.attributeTypeMap);
    }
}

/**
* Save response.
*/
export class SaveResponse extends AsposeResponse {
    /**
    * Save result.
    */
    'saveResult': SaveResult;
    
    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "saveResult",
            "baseName": "SaveResult",
            "type": "SaveResult"
        }    ];

    static getAttributeTypeMap() {
        return super.getAttributeTypeMap().concat(SaveResponse.attributeTypeMap);
    }
}

/**
* This resonse should be returned by the service when handling: GET http://api.aspose.com/v1.1/words/Test.doc/search 
*/
export class SearchResponse extends AsposeResponse {
    /**
    * A regular expression pattern used to find matches.
    */
    'searchingPattern': string;
    /**
    * Collection of search results.
    */
    'searchResults': SearchResultsCollection;
    
    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "searchingPattern",
            "baseName": "SearchingPattern",
            "type": "string"
        },
        {
            "name": "searchResults",
            "baseName": "SearchResults",
            "type": "SearchResultsCollection"
        }    ];

    static getAttributeTypeMap() {
        return super.getAttributeTypeMap().concat(SearchResponse.attributeTypeMap);
    }
}

/**
* Collection of search results.
*/
export class SearchResultsCollection extends LinkElement {
    /**
    * Collection of comments
    */
    'resultsList': Array<SearchResult>;
    
    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "resultsList",
            "baseName": "ResultsList",
            "type": "Array<SearchResult>"
        }    ];

    static getAttributeTypeMap() {
        return super.getAttributeTypeMap().concat(SearchResultsCollection.attributeTypeMap);
    }
}

/**
* Section element
*/
export class Section extends LinkElement {
    /**
    * Link to Paragraphs resource
    */
    'paragraphs': LinkElement;
    /**
    * Link to PageSetup resource
    */
    'pageSetup': LinkElement;
    /**
    * Link to HeaderFooters resource
    */
    'headerFooters': LinkElement;
    /**
    * Link to Tables resource
    */
    'tables': LinkElement;
    /**
    * Child nodes.
    */
    'childNodes': Array<NodeLink>;
    
    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "paragraphs",
            "baseName": "Paragraphs",
            "type": "LinkElement"
        },
        {
            "name": "pageSetup",
            "baseName": "PageSetup",
            "type": "LinkElement"
        },
        {
            "name": "headerFooters",
            "baseName": "HeaderFooters",
            "type": "LinkElement"
        },
        {
            "name": "tables",
            "baseName": "Tables",
            "type": "LinkElement"
        },
        {
            "name": "childNodes",
            "baseName": "ChildNodes",
            "type": "Array<NodeLink>"
        }    ];

    static getAttributeTypeMap() {
        return super.getAttributeTypeMap().concat(Section.attributeTypeMap);
    }
}

/**
* Section link element
*/
export class SectionLink extends LinkElement {
    
    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
    ];

    static getAttributeTypeMap() {
        return super.getAttributeTypeMap().concat(SectionLink.attributeTypeMap);
    }
}

/**
* Collection of links to sections
*/
export class SectionLinkCollection extends LinkElement {
    /**
    * Collection of section's links
    */
    'sectionLinkList': Array<SectionLink>;
    
    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "sectionLinkList",
            "baseName": "SectionLinkList",
            "type": "Array<SectionLink>"
        }    ];

    static getAttributeTypeMap() {
        return super.getAttributeTypeMap().concat(SectionLinkCollection.attributeTypeMap);
    }
}

/**
* This resonse should be returned by the service when handling: GET http://api.aspose.com/v1.1/words/Test.doc/sections 
*/
export class SectionLinkCollectionResponse extends AsposeResponse {
    /**
    * Collection of sections
    */
    'sections': SectionLinkCollection;
    
    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "sections",
            "baseName": "Sections",
            "type": "SectionLinkCollection"
        }    ];

    static getAttributeTypeMap() {
        return super.getAttributeTypeMap().concat(SectionLinkCollectionResponse.attributeTypeMap);
    }
}

/**
* This resonse should be returned by the service when handling: GET http://api.aspose.com/v1.1/words/Test.doc/sections/{0}/PageSetup 
*/
export class SectionPageSetupResponse extends AsposeResponse {
    /**
    * Section
    */
    'pageSetup': PageSetup;
    
    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "pageSetup",
            "baseName": "PageSetup",
            "type": "PageSetup"
        }    ];

    static getAttributeTypeMap() {
        return super.getAttributeTypeMap().concat(SectionPageSetupResponse.attributeTypeMap);
    }
}

/**
* This resonse should be returned by the service when handling: GET http://api.aspose.com/v1.1/words/Test.doc/sections/{0} 
*/
export class SectionResponse extends AsposeResponse {
    /**
    * Section
    */
    'section': Section;
    
    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "section",
            "baseName": "Section",
            "type": "Section"
        }    ];

    static getAttributeTypeMap() {
        return super.getAttributeTypeMap().concat(SectionResponse.attributeTypeMap);
    }
}

/**
* This resonse should be returned by the service when handling:  POST /{name}/split .
*/
export class SplitDocumentResponse extends AsposeResponse {
    /**
    * Resylt of splitting document.
    */
    'splitResult': SplitDocumentResult;
    
    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "splitResult",
            "baseName": "SplitResult",
            "type": "SplitDocumentResult"
        }    ];

    static getAttributeTypeMap() {
        return super.getAttributeTypeMap().concat(SplitDocumentResponse.attributeTypeMap);
    }
}

/**
* Response for the request of the document's statistical data
*/
export class StatDataResponse extends AsposeResponse {
    /**
    * Statistical data of the document
    */
    'statData': DocumentStatData;
    /**
    * Link to the document
    */
    'documentLink': FileLink;
    
    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "statData",
            "baseName": "StatData",
            "type": "DocumentStatData"
        },
        {
            "name": "documentLink",
            "baseName": "DocumentLink",
            "type": "FileLink"
        }    ];

    static getAttributeTypeMap() {
        return super.getAttributeTypeMap().concat(StatDataResponse.attributeTypeMap);
    }
}

/**
* Represents all formatting for a table row.
*/
export class TableCellFormat extends LinkElement {
    /**
    * Returns or sets the amount of space (in points) to add below the contents of cell.
    */
    'bottomPadding': number;
    /**
    * If true, fits text in the cell, compressing each paragraph to the width of the cell.
    */
    'fitText': boolean;
    /**
    * Specifies how the cell is merged horizontally with other cells in the row.
    */
    'horizontalMerge': TableCellFormat.HorizontalMergeEnum;
    /**
    * Returns or sets the amount of space (in points) to add to the left of the contents of cell.
    */
    'leftPadding': number;
    /**
    * Returns or sets the orientation of text in a table cell.
    */
    'orientation': TableCellFormat.OrientationEnum;
    /**
    * Returns or sets the preferred width of the cell.
    */
    'preferredWidth': PreferredWidth;
    /**
    * Returns or sets the amount of space (in points) to add to the right of the contents of cell.
    */
    'rightPadding': number;
    /**
    * Returns or sets the amount of space (in points) to add above the contents of cell.
    */
    'topPadding': number;
    /**
    * Returns or sets the vertical alignment of text in the cell.
    */
    'verticalAlignment': TableCellFormat.VerticalAlignmentEnum;
    /**
    * Specifies how the cell is merged with other cells vertically.
    */
    'verticalMerge': TableCellFormat.VerticalMergeEnum;
    /**
    * Gets the width of the cell in points.
    */
    'width': number;
    /**
    * If true, wrap text for the cell.
    */
    'wrapText': boolean;
    
    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "bottomPadding",
            "baseName": "BottomPadding",
            "type": "number"
        },
        {
            "name": "fitText",
            "baseName": "FitText",
            "type": "boolean"
        },
        {
            "name": "horizontalMerge",
            "baseName": "HorizontalMerge",
            "type": "TableCellFormat.HorizontalMergeEnum"
        },
        {
            "name": "leftPadding",
            "baseName": "LeftPadding",
            "type": "number"
        },
        {
            "name": "orientation",
            "baseName": "Orientation",
            "type": "TableCellFormat.OrientationEnum"
        },
        {
            "name": "preferredWidth",
            "baseName": "PreferredWidth",
            "type": "PreferredWidth"
        },
        {
            "name": "rightPadding",
            "baseName": "RightPadding",
            "type": "number"
        },
        {
            "name": "topPadding",
            "baseName": "TopPadding",
            "type": "number"
        },
        {
            "name": "verticalAlignment",
            "baseName": "VerticalAlignment",
            "type": "TableCellFormat.VerticalAlignmentEnum"
        },
        {
            "name": "verticalMerge",
            "baseName": "VerticalMerge",
            "type": "TableCellFormat.VerticalMergeEnum"
        },
        {
            "name": "width",
            "baseName": "Width",
            "type": "number"
        },
        {
            "name": "wrapText",
            "baseName": "WrapText",
            "type": "boolean"
        }    ];

    static getAttributeTypeMap() {
        return super.getAttributeTypeMap().concat(TableCellFormat.attributeTypeMap);
    }
}

export namespace TableCellFormat {
    export enum HorizontalMergeEnum {
        None = <any> 'None',
        First = <any> 'First',
        Previous = <any> 'Previous'
    }
    export enum OrientationEnum {
        Horizontal = <any> 'Horizontal',
        Downward = <any> 'Downward',
        Upward = <any> 'Upward',
        HorizontalRotatedFarEast = <any> 'HorizontalRotatedFarEast',
        VerticalFarEast = <any> 'VerticalFarEast',
        VerticalRotatedFarEast = <any> 'VerticalRotatedFarEast'
    }
    export enum VerticalAlignmentEnum {
        Top = <any> 'Top',
        Center = <any> 'Center',
        Bottom = <any> 'Bottom'
    }
    export enum VerticalMergeEnum {
        None = <any> 'None',
        First = <any> 'First',
        Previous = <any> 'Previous'
    }
}
/**
* This resonse should be returned by the service when handling: GET http://api.aspose.com/v1.1/words/Test.doc/tables/{0}/rows/{1}/cells/{2}/cellformat
*/
export class TableCellFormatResponse extends AsposeResponse {
    /**
    * Table.
    */
    'cellFormat': TableCellFormat;
    
    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "cellFormat",
            "baseName": "CellFormat",
            "type": "TableCellFormat"
        }    ];

    static getAttributeTypeMap() {
        return super.getAttributeTypeMap().concat(TableCellFormatResponse.attributeTypeMap);
    }
}

/**
* This resonse should be returned by the service when handling: GET http://api.aspose.com/v1.1/words/Test.doc/tables/{0}
*/
export class TableCellResponse extends AsposeResponse {
    /**
    * Table cell.
    */
    'cell': TableCell;
    
    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "cell",
            "baseName": "Cell",
            "type": "TableCell"
        }    ];

    static getAttributeTypeMap() {
        return super.getAttributeTypeMap().concat(TableCellResponse.attributeTypeMap);
    }
}

/**
* Collection of links to tables
*/
export class TableLinkCollection extends LinkElement {
    /**
    * Collection of table's links
    */
    'tableLinkList': Array<TableLink>;
    
    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "tableLinkList",
            "baseName": "TableLinkList",
            "type": "Array<TableLink>"
        }    ];

    static getAttributeTypeMap() {
        return super.getAttributeTypeMap().concat(TableLinkCollection.attributeTypeMap);
    }
}

/**
* This resonse should be returned by the service when handling: GET http://api.aspose.com/v1.1/words/Test.doc/tables.
*/
export class TableLinkCollectionResponse extends AsposeResponse {
    /**
    * Collection of tables.
    */
    'tables': TableLinkCollection;
    
    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "tables",
            "baseName": "Tables",
            "type": "TableLinkCollection"
        }    ];

    static getAttributeTypeMap() {
        return super.getAttributeTypeMap().concat(TableLinkCollectionResponse.attributeTypeMap);
    }
}

/**
* Represents the table properties.             
*/
export class TableProperties extends LinkElement {
    /**
    * Specifies how an inline table is aligned in the document.
    */
    'alignment': TableProperties.AlignmentEnum;
    /**
    * Allows Microsoft Word and Aspose.Words to automatically resize cells in a table to fit their contents.
    */
    'allowAutoFit': boolean;
    /**
    * Gets or sets whether this is a right-to-left table.
    */
    'bidi': boolean;
    /**
    * Gets or sets the amount of space (in points) to add below the contents of cells.
    */
    'bottomPadding': number;
    /**
    * Gets or sets the amount of space (in points) between the cells.
    */
    'cellSpacing': number;
    /**
    * Gets or sets the value that represents the left indent of the table.
    */
    'leftIndent': number;
    /**
    * Gets or sets the amount of space (in points) to add to the left of the contents of cells.
    */
    'leftPadding': number;
    /**
    * Gets or sets the table preferred width.  Preferred width can be specified as a percentage, number of points or a special \"auto\" value.
    */
    'preferredWidth': PreferredWidth;
    /**
    * Gets or sets the amount of space (in points) to add to the right of the contents of cells.
    */
    'rightPadding': number;
    /**
    * Gets or sets the locale independent style identifier of the table style applied to this table.
    */
    'styleIdentifier': TableProperties.StyleIdentifierEnum;
    /**
    * Gets or sets the name of the table style applied to this table.
    */
    'styleName': string;
    /**
    * Gets or sets bit flags that specify how a table style is applied to this table.
    */
    'styleOptions': TableProperties.StyleOptionsEnum;
    /**
    * Get or sets TextWrapping  for table.
    */
    'textWrapping': TableProperties.TextWrappingEnum;
    /**
    * Gets or sets the amount of space (in points) to add above the contents of cells.
    */
    'topPadding': number;
    
    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "alignment",
            "baseName": "Alignment",
            "type": "TableProperties.AlignmentEnum"
        },
        {
            "name": "allowAutoFit",
            "baseName": "AllowAutoFit",
            "type": "boolean"
        },
        {
            "name": "bidi",
            "baseName": "Bidi",
            "type": "boolean"
        },
        {
            "name": "bottomPadding",
            "baseName": "BottomPadding",
            "type": "number"
        },
        {
            "name": "cellSpacing",
            "baseName": "CellSpacing",
            "type": "number"
        },
        {
            "name": "leftIndent",
            "baseName": "LeftIndent",
            "type": "number"
        },
        {
            "name": "leftPadding",
            "baseName": "LeftPadding",
            "type": "number"
        },
        {
            "name": "preferredWidth",
            "baseName": "PreferredWidth",
            "type": "PreferredWidth"
        },
        {
            "name": "rightPadding",
            "baseName": "RightPadding",
            "type": "number"
        },
        {
            "name": "styleIdentifier",
            "baseName": "StyleIdentifier",
            "type": "TableProperties.StyleIdentifierEnum"
        },
        {
            "name": "styleName",
            "baseName": "StyleName",
            "type": "string"
        },
        {
            "name": "styleOptions",
            "baseName": "StyleOptions",
            "type": "TableProperties.StyleOptionsEnum"
        },
        {
            "name": "textWrapping",
            "baseName": "TextWrapping",
            "type": "TableProperties.TextWrappingEnum"
        },
        {
            "name": "topPadding",
            "baseName": "TopPadding",
            "type": "number"
        }    ];

    static getAttributeTypeMap() {
        return super.getAttributeTypeMap().concat(TableProperties.attributeTypeMap);
    }
}

export namespace TableProperties {
    export enum AlignmentEnum {
        Left = <any> 'Left',
        Center = <any> 'Center',
        Right = <any> 'Right'
    }
    export enum StyleIdentifierEnum {
        Normal = <any> 'Normal',
        Heading1 = <any> 'Heading1',
        Heading2 = <any> 'Heading2',
        Heading3 = <any> 'Heading3',
        Heading4 = <any> 'Heading4',
        Heading5 = <any> 'Heading5',
        Heading6 = <any> 'Heading6',
        Heading7 = <any> 'Heading7',
        Heading8 = <any> 'Heading8',
        Heading9 = <any> 'Heading9',
        Index1 = <any> 'Index1',
        Index2 = <any> 'Index2',
        Index3 = <any> 'Index3',
        Index4 = <any> 'Index4',
        Index5 = <any> 'Index5',
        Index6 = <any> 'Index6',
        Index7 = <any> 'Index7',
        Index8 = <any> 'Index8',
        Index9 = <any> 'Index9',
        Toc1 = <any> 'Toc1',
        Toc2 = <any> 'Toc2',
        Toc3 = <any> 'Toc3',
        Toc4 = <any> 'Toc4',
        Toc5 = <any> 'Toc5',
        Toc6 = <any> 'Toc6',
        Toc7 = <any> 'Toc7',
        Toc8 = <any> 'Toc8',
        Toc9 = <any> 'Toc9',
        NormalIndent = <any> 'NormalIndent',
        FootnoteText = <any> 'FootnoteText',
        CommentText = <any> 'CommentText',
        Header = <any> 'Header',
        Footer = <any> 'Footer',
        IndexHeading = <any> 'IndexHeading',
        Caption = <any> 'Caption',
        TableOfFigures = <any> 'TableOfFigures',
        EnvelopeAddress = <any> 'EnvelopeAddress',
        EnvelopeReturn = <any> 'EnvelopeReturn',
        FootnoteReference = <any> 'FootnoteReference',
        CommentReference = <any> 'CommentReference',
        LineNumber = <any> 'LineNumber',
        PageNumber = <any> 'PageNumber',
        EndnoteReference = <any> 'EndnoteReference',
        EndnoteText = <any> 'EndnoteText',
        TableOfAuthorities = <any> 'TableOfAuthorities',
        Macro = <any> 'Macro',
        ToaHeading = <any> 'ToaHeading',
        List = <any> 'List',
        ListBullet = <any> 'ListBullet',
        ListNumber = <any> 'ListNumber',
        List2 = <any> 'List2',
        List3 = <any> 'List3',
        List4 = <any> 'List4',
        List5 = <any> 'List5',
        ListBullet2 = <any> 'ListBullet2',
        ListBullet3 = <any> 'ListBullet3',
        ListBullet4 = <any> 'ListBullet4',
        ListBullet5 = <any> 'ListBullet5',
        ListNumber2 = <any> 'ListNumber2',
        ListNumber3 = <any> 'ListNumber3',
        ListNumber4 = <any> 'ListNumber4',
        ListNumber5 = <any> 'ListNumber5',
        Title = <any> 'Title',
        Closing = <any> 'Closing',
        Signature = <any> 'Signature',
        DefaultParagraphFont = <any> 'DefaultParagraphFont',
        BodyText = <any> 'BodyText',
        BodyTextInd = <any> 'BodyTextInd',
        ListContinue = <any> 'ListContinue',
        ListContinue2 = <any> 'ListContinue2',
        ListContinue3 = <any> 'ListContinue3',
        ListContinue4 = <any> 'ListContinue4',
        ListContinue5 = <any> 'ListContinue5',
        MessageHeader = <any> 'MessageHeader',
        Subtitle = <any> 'Subtitle',
        Salutation = <any> 'Salutation',
        Date = <any> 'Date',
        BodyText1I = <any> 'BodyText1I',
        BodyText1I2 = <any> 'BodyText1I2',
        NoteHeading = <any> 'NoteHeading',
        BodyText2 = <any> 'BodyText2',
        BodyText3 = <any> 'BodyText3',
        BodyTextInd2 = <any> 'BodyTextInd2',
        BodyTextInd3 = <any> 'BodyTextInd3',
        BlockText = <any> 'BlockText',
        Hyperlink = <any> 'Hyperlink',
        FollowedHyperlink = <any> 'FollowedHyperlink',
        Strong = <any> 'Strong',
        Emphasis = <any> 'Emphasis',
        DocumentMap = <any> 'DocumentMap',
        PlainText = <any> 'PlainText',
        EmailSignature = <any> 'EmailSignature',
        HtmlTopOfForm = <any> 'HtmlTopOfForm',
        HtmlBottomOfForm = <any> 'HtmlBottomOfForm',
        NormalWeb = <any> 'NormalWeb',
        HtmlAcronym = <any> 'HtmlAcronym',
        HtmlAddress = <any> 'HtmlAddress',
        HtmlCite = <any> 'HtmlCite',
        HtmlCode = <any> 'HtmlCode',
        HtmlDefinition = <any> 'HtmlDefinition',
        HtmlKeyboard = <any> 'HtmlKeyboard',
        HtmlPreformatted = <any> 'HtmlPreformatted',
        HtmlSample = <any> 'HtmlSample',
        HtmlTypewriter = <any> 'HtmlTypewriter',
        HtmlVariable = <any> 'HtmlVariable',
        TableNormal = <any> 'TableNormal',
        CommentSubject = <any> 'CommentSubject',
        NoList = <any> 'NoList',
        OutlineList1 = <any> 'OutlineList1',
        OutlineList2 = <any> 'OutlineList2',
        OutlineList3 = <any> 'OutlineList3',
        TableSimple1 = <any> 'TableSimple1',
        TableSimple2 = <any> 'TableSimple2',
        TableSimple3 = <any> 'TableSimple3',
        TableClassic1 = <any> 'TableClassic1',
        TableClassic2 = <any> 'TableClassic2',
        TableClassic3 = <any> 'TableClassic3',
        TableClassic4 = <any> 'TableClassic4',
        TableColorful1 = <any> 'TableColorful1',
        TableColorful2 = <any> 'TableColorful2',
        TableColorful3 = <any> 'TableColorful3',
        TableColumns1 = <any> 'TableColumns1',
        TableColumns2 = <any> 'TableColumns2',
        TableColumns3 = <any> 'TableColumns3',
        TableColumns4 = <any> 'TableColumns4',
        TableColumns5 = <any> 'TableColumns5',
        TableGrid1 = <any> 'TableGrid1',
        TableGrid2 = <any> 'TableGrid2',
        TableGrid3 = <any> 'TableGrid3',
        TableGrid4 = <any> 'TableGrid4',
        TableGrid5 = <any> 'TableGrid5',
        TableGrid6 = <any> 'TableGrid6',
        TableGrid7 = <any> 'TableGrid7',
        TableGrid8 = <any> 'TableGrid8',
        TableList1 = <any> 'TableList1',
        TableList2 = <any> 'TableList2',
        TableList3 = <any> 'TableList3',
        TableList4 = <any> 'TableList4',
        TableList5 = <any> 'TableList5',
        TableList6 = <any> 'TableList6',
        TableList7 = <any> 'TableList7',
        TableList8 = <any> 'TableList8',
        Table3DEffects1 = <any> 'Table3DEffects1',
        Table3DEffects2 = <any> 'Table3DEffects2',
        Table3DEffects3 = <any> 'Table3DEffects3',
        TableContemporary = <any> 'TableContemporary',
        TableElegant = <any> 'TableElegant',
        TableProfessional = <any> 'TableProfessional',
        TableSubtle1 = <any> 'TableSubtle1',
        TableSubtle2 = <any> 'TableSubtle2',
        TableWeb1 = <any> 'TableWeb1',
        TableWeb2 = <any> 'TableWeb2',
        TableWeb3 = <any> 'TableWeb3',
        BalloonText = <any> 'BalloonText',
        TableGrid = <any> 'TableGrid',
        TableTheme = <any> 'TableTheme',
        PlaceholderText = <any> 'PlaceholderText',
        NoSpacing = <any> 'NoSpacing',
        LightShading = <any> 'LightShading',
        LightList = <any> 'LightList',
        LightGrid = <any> 'LightGrid',
        MediumShading1 = <any> 'MediumShading1',
        MediumShading2 = <any> 'MediumShading2',
        MediumList1 = <any> 'MediumList1',
        MediumList2 = <any> 'MediumList2',
        MediumGrid1 = <any> 'MediumGrid1',
        MediumGrid2 = <any> 'MediumGrid2',
        MediumGrid3 = <any> 'MediumGrid3',
        DarkList = <any> 'DarkList',
        ColorfulShading = <any> 'ColorfulShading',
        ColorfulList = <any> 'ColorfulList',
        ColorfulGrid = <any> 'ColorfulGrid',
        LightShadingAccent1 = <any> 'LightShadingAccent1',
        LightListAccent1 = <any> 'LightListAccent1',
        LightGridAccent1 = <any> 'LightGridAccent1',
        MediumShading1Accent1 = <any> 'MediumShading1Accent1',
        MediumShading2Accent1 = <any> 'MediumShading2Accent1',
        MediumList1Accent1 = <any> 'MediumList1Accent1',
        Revision = <any> 'Revision',
        ListParagraph = <any> 'ListParagraph',
        Quote = <any> 'Quote',
        IntenseQuote = <any> 'IntenseQuote',
        MediumList2Accent1 = <any> 'MediumList2Accent1',
        MediumGrid1Accent1 = <any> 'MediumGrid1Accent1',
        MediumGrid2Accent1 = <any> 'MediumGrid2Accent1',
        MediumGrid3Accent1 = <any> 'MediumGrid3Accent1',
        DarkListAccent1 = <any> 'DarkListAccent1',
        ColorfulShadingAccent1 = <any> 'ColorfulShadingAccent1',
        ColorfulListAccent1 = <any> 'ColorfulListAccent1',
        ColorfulGridAccent1 = <any> 'ColorfulGridAccent1',
        LightShadingAccent2 = <any> 'LightShadingAccent2',
        LightListAccent2 = <any> 'LightListAccent2',
        LightGridAccent2 = <any> 'LightGridAccent2',
        MediumShading1Accent2 = <any> 'MediumShading1Accent2',
        MediumShading2Accent2 = <any> 'MediumShading2Accent2',
        MediumList1Accent2 = <any> 'MediumList1Accent2',
        MediumList2Accent2 = <any> 'MediumList2Accent2',
        MediumGrid1Accent2 = <any> 'MediumGrid1Accent2',
        MediumGrid2Accent2 = <any> 'MediumGrid2Accent2',
        MediumGrid3Accent2 = <any> 'MediumGrid3Accent2',
        DarkListAccent2 = <any> 'DarkListAccent2',
        ColorfulShadingAccent2 = <any> 'ColorfulShadingAccent2',
        ColorfulListAccent2 = <any> 'ColorfulListAccent2',
        ColorfulGridAccent2 = <any> 'ColorfulGridAccent2',
        LightShadingAccent3 = <any> 'LightShadingAccent3',
        LightListAccent3 = <any> 'LightListAccent3',
        LightGridAccent3 = <any> 'LightGridAccent3',
        MediumShading1Accent3 = <any> 'MediumShading1Accent3',
        MediumShading2Accent3 = <any> 'MediumShading2Accent3',
        MediumList1Accent3 = <any> 'MediumList1Accent3',
        MediumList2Accent3 = <any> 'MediumList2Accent3',
        MediumGrid1Accent3 = <any> 'MediumGrid1Accent3',
        MediumGrid2Accent3 = <any> 'MediumGrid2Accent3',
        MediumGrid3Accent3 = <any> 'MediumGrid3Accent3',
        DarkListAccent3 = <any> 'DarkListAccent3',
        ColorfulShadingAccent3 = <any> 'ColorfulShadingAccent3',
        ColorfulListAccent3 = <any> 'ColorfulListAccent3',
        ColorfulGridAccent3 = <any> 'ColorfulGridAccent3',
        LightShadingAccent4 = <any> 'LightShadingAccent4',
        LightListAccent4 = <any> 'LightListAccent4',
        LightGridAccent4 = <any> 'LightGridAccent4',
        MediumShading1Accent4 = <any> 'MediumShading1Accent4',
        MediumShading2Accent4 = <any> 'MediumShading2Accent4',
        MediumList1Accent4 = <any> 'MediumList1Accent4',
        MediumList2Accent4 = <any> 'MediumList2Accent4',
        MediumGrid1Accent4 = <any> 'MediumGrid1Accent4',
        MediumGrid2Accent4 = <any> 'MediumGrid2Accent4',
        MediumGrid3Accent4 = <any> 'MediumGrid3Accent4',
        DarkListAccent4 = <any> 'DarkListAccent4',
        ColorfulShadingAccent4 = <any> 'ColorfulShadingAccent4',
        ColorfulListAccent4 = <any> 'ColorfulListAccent4',
        ColorfulGridAccent4 = <any> 'ColorfulGridAccent4',
        LightShadingAccent5 = <any> 'LightShadingAccent5',
        LightListAccent5 = <any> 'LightListAccent5',
        LightGridAccent5 = <any> 'LightGridAccent5',
        MediumShading1Accent5 = <any> 'MediumShading1Accent5',
        MediumShading2Accent5 = <any> 'MediumShading2Accent5',
        MediumList1Accent5 = <any> 'MediumList1Accent5',
        MediumList2Accent5 = <any> 'MediumList2Accent5',
        MediumGrid1Accent5 = <any> 'MediumGrid1Accent5',
        MediumGrid2Accent5 = <any> 'MediumGrid2Accent5',
        MediumGrid3Accent5 = <any> 'MediumGrid3Accent5',
        DarkListAccent5 = <any> 'DarkListAccent5',
        ColorfulShadingAccent5 = <any> 'ColorfulShadingAccent5',
        ColorfulListAccent5 = <any> 'ColorfulListAccent5',
        ColorfulGridAccent5 = <any> 'ColorfulGridAccent5',
        LightShadingAccent6 = <any> 'LightShadingAccent6',
        LightListAccent6 = <any> 'LightListAccent6',
        LightGridAccent6 = <any> 'LightGridAccent6',
        MediumShading1Accent6 = <any> 'MediumShading1Accent6',
        MediumShading2Accent6 = <any> 'MediumShading2Accent6',
        MediumList1Accent6 = <any> 'MediumList1Accent6',
        MediumList2Accent6 = <any> 'MediumList2Accent6',
        MediumGrid1Accent6 = <any> 'MediumGrid1Accent6',
        MediumGrid2Accent6 = <any> 'MediumGrid2Accent6',
        MediumGrid3Accent6 = <any> 'MediumGrid3Accent6',
        DarkListAccent6 = <any> 'DarkListAccent6',
        ColorfulShadingAccent6 = <any> 'ColorfulShadingAccent6',
        ColorfulListAccent6 = <any> 'ColorfulListAccent6',
        ColorfulGridAccent6 = <any> 'ColorfulGridAccent6',
        SubtleEmphasis = <any> 'SubtleEmphasis',
        IntenseEmphasis = <any> 'IntenseEmphasis',
        SubtleReference = <any> 'SubtleReference',
        IntenseReference = <any> 'IntenseReference',
        BookTitle = <any> 'BookTitle',
        Bibliography = <any> 'Bibliography',
        TocHeading = <any> 'TocHeading',
        PlainTable1 = <any> 'PlainTable1',
        PlainTable2 = <any> 'PlainTable2',
        PlainTable3 = <any> 'PlainTable3',
        PlainTable4 = <any> 'PlainTable4',
        PlainTable5 = <any> 'PlainTable5',
        TableGridLight = <any> 'TableGridLight',
        GridTable1Light = <any> 'GridTable1Light',
        GridTable2 = <any> 'GridTable2',
        GridTable3 = <any> 'GridTable3',
        GridTable4 = <any> 'GridTable4',
        GridTable5Dark = <any> 'GridTable5Dark',
        GridTable6Colorful = <any> 'GridTable6Colorful',
        GridTable7Colorful = <any> 'GridTable7Colorful',
        GridTable1LightAccent1 = <any> 'GridTable1LightAccent1',
        GridTable2Accent1 = <any> 'GridTable2Accent1',
        GridTable3Accent1 = <any> 'GridTable3Accent1',
        GridTable4Accent1 = <any> 'GridTable4Accent1',
        GridTable5DarkAccent1 = <any> 'GridTable5DarkAccent1',
        GridTable6ColorfulAccent1 = <any> 'GridTable6ColorfulAccent1',
        GridTable7ColorfulAccent1 = <any> 'GridTable7ColorfulAccent1',
        GridTable1LightAccent2 = <any> 'GridTable1LightAccent2',
        GridTable2Accent2 = <any> 'GridTable2Accent2',
        GridTable3Accent2 = <any> 'GridTable3Accent2',
        GridTable4Accent2 = <any> 'GridTable4Accent2',
        GridTable5DarkAccent2 = <any> 'GridTable5DarkAccent2',
        GridTable6ColorfulAccent2 = <any> 'GridTable6ColorfulAccent2',
        GridTable7ColorfulAccent2 = <any> 'GridTable7ColorfulAccent2',
        GridTable1LightAccent3 = <any> 'GridTable1LightAccent3',
        GridTable2Accent3 = <any> 'GridTable2Accent3',
        GridTable3Accent3 = <any> 'GridTable3Accent3',
        GridTable4Accent3 = <any> 'GridTable4Accent3',
        GridTable5DarkAccent3 = <any> 'GridTable5DarkAccent3',
        GridTable6ColorfulAccent3 = <any> 'GridTable6ColorfulAccent3',
        GridTable7ColorfulAccent3 = <any> 'GridTable7ColorfulAccent3',
        GridTable1LightAccent4 = <any> 'GridTable1LightAccent4',
        GridTable2Accent4 = <any> 'GridTable2Accent4',
        GridTable3Accent4 = <any> 'GridTable3Accent4',
        GridTable4Accent4 = <any> 'GridTable4Accent4',
        GridTable5DarkAccent4 = <any> 'GridTable5DarkAccent4',
        GridTable6ColorfulAccent4 = <any> 'GridTable6ColorfulAccent4',
        GridTable7ColorfulAccent4 = <any> 'GridTable7ColorfulAccent4',
        GridTable1LightAccent5 = <any> 'GridTable1LightAccent5',
        GridTable2Accent5 = <any> 'GridTable2Accent5',
        GridTable3Accent5 = <any> 'GridTable3Accent5',
        GridTable4Accent5 = <any> 'GridTable4Accent5',
        GridTable5DarkAccent5 = <any> 'GridTable5DarkAccent5',
        GridTable6ColorfulAccent5 = <any> 'GridTable6ColorfulAccent5',
        GridTable7ColorfulAccent5 = <any> 'GridTable7ColorfulAccent5',
        GridTable1LightAccent6 = <any> 'GridTable1LightAccent6',
        GridTable2Accent6 = <any> 'GridTable2Accent6',
        GridTable3Accent6 = <any> 'GridTable3Accent6',
        GridTable4Accent6 = <any> 'GridTable4Accent6',
        GridTable5DarkAccent6 = <any> 'GridTable5DarkAccent6',
        GridTable6ColorfulAccent6 = <any> 'GridTable6ColorfulAccent6',
        GridTable7ColorfulAccent6 = <any> 'GridTable7ColorfulAccent6',
        ListTable1Light = <any> 'ListTable1Light',
        ListTable2 = <any> 'ListTable2',
        ListTable3 = <any> 'ListTable3',
        ListTable4 = <any> 'ListTable4',
        ListTable5Dark = <any> 'ListTable5Dark',
        ListTable6Colorful = <any> 'ListTable6Colorful',
        ListTable7Colorful = <any> 'ListTable7Colorful',
        ListTable1LightAccent1 = <any> 'ListTable1LightAccent1',
        ListTable2Accent1 = <any> 'ListTable2Accent1',
        ListTable3Accent1 = <any> 'ListTable3Accent1',
        ListTable4Accent1 = <any> 'ListTable4Accent1',
        ListTable5DarkAccent1 = <any> 'ListTable5DarkAccent1',
        ListTable6ColorfulAccent1 = <any> 'ListTable6ColorfulAccent1',
        ListTable7ColorfulAccent1 = <any> 'ListTable7ColorfulAccent1',
        ListTable1LightAccent2 = <any> 'ListTable1LightAccent2',
        ListTable2Accent2 = <any> 'ListTable2Accent2',
        ListTable3Accent2 = <any> 'ListTable3Accent2',
        ListTable4Accent2 = <any> 'ListTable4Accent2',
        ListTable5DarkAccent2 = <any> 'ListTable5DarkAccent2',
        ListTable6ColorfulAccent2 = <any> 'ListTable6ColorfulAccent2',
        ListTable7ColorfulAccent2 = <any> 'ListTable7ColorfulAccent2',
        ListTable1LightAccent3 = <any> 'ListTable1LightAccent3',
        ListTable2Accent3 = <any> 'ListTable2Accent3',
        ListTable3Accent3 = <any> 'ListTable3Accent3',
        ListTable4Accent3 = <any> 'ListTable4Accent3',
        ListTable5DarkAccent3 = <any> 'ListTable5DarkAccent3',
        ListTable6ColorfulAccent3 = <any> 'ListTable6ColorfulAccent3',
        ListTable7ColorfulAccent3 = <any> 'ListTable7ColorfulAccent3',
        ListTable1LightAccent4 = <any> 'ListTable1LightAccent4',
        ListTable2Accent4 = <any> 'ListTable2Accent4',
        ListTable3Accent4 = <any> 'ListTable3Accent4',
        ListTable4Accent4 = <any> 'ListTable4Accent4',
        ListTable5DarkAccent4 = <any> 'ListTable5DarkAccent4',
        ListTable6ColorfulAccent4 = <any> 'ListTable6ColorfulAccent4',
        ListTable7ColorfulAccent4 = <any> 'ListTable7ColorfulAccent4',
        ListTable1LightAccent5 = <any> 'ListTable1LightAccent5',
        ListTable2Accent5 = <any> 'ListTable2Accent5',
        ListTable3Accent5 = <any> 'ListTable3Accent5',
        ListTable4Accent5 = <any> 'ListTable4Accent5',
        ListTable5DarkAccent5 = <any> 'ListTable5DarkAccent5',
        ListTable6ColorfulAccent5 = <any> 'ListTable6ColorfulAccent5',
        ListTable7ColorfulAccent5 = <any> 'ListTable7ColorfulAccent5',
        ListTable1LightAccent6 = <any> 'ListTable1LightAccent6',
        ListTable2Accent6 = <any> 'ListTable2Accent6',
        ListTable3Accent6 = <any> 'ListTable3Accent6',
        ListTable4Accent6 = <any> 'ListTable4Accent6',
        ListTable5DarkAccent6 = <any> 'ListTable5DarkAccent6',
        ListTable6ColorfulAccent6 = <any> 'ListTable6ColorfulAccent6',
        ListTable7ColorfulAccent6 = <any> 'ListTable7ColorfulAccent6',
        User = <any> 'User',
        Nil = <any> 'Nil'
    }
    export enum StyleOptionsEnum {
        None = <any> 'None',
        FirstRow = <any> 'FirstRow',
        LastRow = <any> 'LastRow',
        FirstColumn = <any> 'FirstColumn',
        LastColumn = <any> 'LastColumn',
        RowBands = <any> 'RowBands',
        Default = <any> 'Default',
        ColumnBands = <any> 'ColumnBands',
        Default2003 = <any> 'Default2003'
    }
    export enum TextWrappingEnum {
        Default = <any> 'Default',
        None = <any> 'None',
        Around = <any> 'Around'
    }
}
/**
* This resonse should be returned by the service when handling: GET http://api.aspose.com/v1.1/words/Test.doc/tables/{0}/properties
*/
export class TablePropertiesResponse extends AsposeResponse {
    /**
    * Table.
    */
    'properties': TableProperties;
    
    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "properties",
            "baseName": "Properties",
            "type": "TableProperties"
        }    ];

    static getAttributeTypeMap() {
        return super.getAttributeTypeMap().concat(TablePropertiesResponse.attributeTypeMap);
    }
}

/**
* This resonse should be returned by the service when handling: GET http://api.aspose.com/v1.1/words/Test.doc/tables/{0}
*/
export class TableResponse extends AsposeResponse {
    /**
    * Table.
    */
    'table': Table;
    
    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "table",
            "baseName": "Table",
            "type": "Table"
        }    ];

    static getAttributeTypeMap() {
        return super.getAttributeTypeMap().concat(TableResponse.attributeTypeMap);
    }
}

/**
* Represents all formatting for a table row.
*/
export class TableRowFormat extends LinkElement {
    /**
    * Gets or sets the height of the table row in points.
    */
    'height': number;
    /**
    * Gets or sets the rule for determining the height of the table row.
    */
    'heightRule': TableRowFormat.HeightRuleEnum;
    /**
    * True if the text in a table row is allowed to split across a page break.
    */
    'allowBreakAcrossPages': boolean;
    /**
    * True if the row is repeated as a table heading on every page when the table spans more than one page.
    */
    'headingFormat': boolean;
    
    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "height",
            "baseName": "Height",
            "type": "number"
        },
        {
            "name": "heightRule",
            "baseName": "HeightRule",
            "type": "TableRowFormat.HeightRuleEnum"
        },
        {
            "name": "allowBreakAcrossPages",
            "baseName": "AllowBreakAcrossPages",
            "type": "boolean"
        },
        {
            "name": "headingFormat",
            "baseName": "HeadingFormat",
            "type": "boolean"
        }    ];

    static getAttributeTypeMap() {
        return super.getAttributeTypeMap().concat(TableRowFormat.attributeTypeMap);
    }
}

export namespace TableRowFormat {
    export enum HeightRuleEnum {
        AtLeast = <any> 'AtLeast',
        Exactly = <any> 'Exactly',
        Auto = <any> 'Auto'
    }
}
/**
* This resonse should be returned by the service when handling: GET http://api.aspose.com/v1.1/words/Test.doc/tables/{0}/rows/{1}/rowformat
*/
export class TableRowFormatResponse extends AsposeResponse {
    /**
    * Table.
    */
    'rowFormat': TableRowFormat;
    
    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "rowFormat",
            "baseName": "RowFormat",
            "type": "TableRowFormat"
        }    ];

    static getAttributeTypeMap() {
        return super.getAttributeTypeMap().concat(TableRowFormatResponse.attributeTypeMap);
    }
}

/**
* This resonse should be returned by the service when handling: GET http://api.aspose.com/v1.1/words/Test.doc/tables/{0}
*/
export class TableRowResponse extends AsposeResponse {
    /**
    * Table row.
    */
    'row': TableRow;
    
    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "row",
            "baseName": "Row",
            "type": "TableRow"
        }    ];

    static getAttributeTypeMap() {
        return super.getAttributeTypeMap().concat(TableRowResponse.attributeTypeMap);
    }
}

/**
* Represents text DTO.
*/
export class TextItem extends LinkElement {
    'text': string;
    
    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "text",
            "baseName": "Text",
            "type": "string"
        }    ];

    static getAttributeTypeMap() {
        return super.getAttributeTypeMap().concat(TextItem.attributeTypeMap);
    }
}

/**
* Represents text items DTO.
*/
export class TextItems extends LinkElement {
    'list': Array<TextItem>;
    
    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "list",
            "baseName": "List",
            "type": "Array<TextItem>"
        }    ];

    static getAttributeTypeMap() {
        return super.getAttributeTypeMap().concat(TextItems.attributeTypeMap);
    }
}

/**
* This resonse should be returned by the service when handling:  GET /{name}/textItems .
*/
export class TextItemsResponse extends AsposeResponse {
    /**
    * Collection of text items.
    */
    'textItems': TextItems;
    
    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "textItems",
            "baseName": "TextItems",
            "type": "TextItems"
        }    ];

    static getAttributeTypeMap() {
        return super.getAttributeTypeMap().concat(TextItemsResponse.attributeTypeMap);
    }
}

/**
* Container class for text save options.
*/
export class TextSaveOptionsData extends SaveOptionsData {
    /**
    * Specifies the encoding to use when exporting in plain text format
    */
    'encoding': string;
    /**
    * Specifies whether to output headers and footers when exporting in plain text format
    */
    'exportHeadersFooters': boolean;
    /**
    * Allows to specify whether the page breaks should be preserved during export. The default value is false.
    */
    'forcePageBreaks': boolean;
    /**
    * Specifies the string to use as a paragraph break when exporting in plain text format
    */
    'paragraphBreak': string;
    /**
    * Specifies whether the program should attempt to preserve layout of tables when saving in the plain text format
    */
    'preserveTableLayout': boolean;
    /**
    * Specifies whether the program should simplify list labels in case of complex label formatting not being adequately represented by plain text
    */
    'simplifyListLabels': boolean;
    
    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "encoding",
            "baseName": "Encoding",
            "type": "string"
        },
        {
            "name": "exportHeadersFooters",
            "baseName": "ExportHeadersFooters",
            "type": "boolean"
        },
        {
            "name": "forcePageBreaks",
            "baseName": "ForcePageBreaks",
            "type": "boolean"
        },
        {
            "name": "paragraphBreak",
            "baseName": "ParagraphBreak",
            "type": "string"
        },
        {
            "name": "preserveTableLayout",
            "baseName": "PreserveTableLayout",
            "type": "boolean"
        },
        {
            "name": "simplifyListLabels",
            "baseName": "SimplifyListLabels",
            "type": "boolean"
        }    ];

    static getAttributeTypeMap() {
        return super.getAttributeTypeMap().concat(TextSaveOptionsData.attributeTypeMap);
    }
}

/**
* container class for wml save options
*/
export class WordMLSaveOptionsData extends SaveOptionsData {
    /**
    * Specifies whether or not use pretty formats output
    */
    'prettyFormat': boolean;
    
    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "prettyFormat",
            "baseName": "PrettyFormat",
            "type": "boolean"
        }    ];

    static getAttributeTypeMap() {
        return super.getAttributeTypeMap().concat(WordMLSaveOptionsData.attributeTypeMap);
    }
}

/**
* Response for Api error
*/
export class WordsApiErrorResponse extends AsposeResponse {
    /**
    * Error message.
    */
    'message': string;
    
    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "message",
            "baseName": "Message",
            "type": "string"
        }    ];

    static getAttributeTypeMap() {
        return super.getAttributeTypeMap().concat(WordsApiErrorResponse.attributeTypeMap);
    }
}

/**
* Provides information for the words api resource link.
*/
export class WordsApiLink extends Link {
    
    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
    ];

    static getAttributeTypeMap() {
        return super.getAttributeTypeMap().concat(WordsApiLink.attributeTypeMap);
    }
}

/**
* container class for xaml flow save options
*/
export class XamlFlowSaveOptionsData extends SaveOptionsData {
    /**
    * Specifies the physical folder where images are saved when exporting
    */
    'imagesFolder': string;
    /**
    * Specifies the name of the folder used to construct image URIs
    */
    'imagesFolderAlias': string;
    
    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "imagesFolder",
            "baseName": "ImagesFolder",
            "type": "string"
        },
        {
            "name": "imagesFolderAlias",
            "baseName": "ImagesFolderAlias",
            "type": "string"
        }    ];

    static getAttributeTypeMap() {
        return super.getAttributeTypeMap().concat(XamlFlowSaveOptionsData.attributeTypeMap);
    }
}

/**
* Comment.
*/
export class Comment extends CommentLink {
    /**
    * Link to comment range start node.
    */
    'rangeStart': DocumentPosition;
    /**
    * Link to comment range end node.
    */
    'rangeEnd': DocumentPosition;
    /**
    * Returns or sets the author name for a comment.
    */
    'author': string;
    /**
    * Returns or sets the initials of the user associated with a specific comment.
    */
    'initial': string;
    /**
    * Gets the date and time that the comment was made.
    */
    'dateTime': Date;
    /**
    * This is a convenience property that allows to easily get or set text of the comment.
    */
    'text': string;
    /**
    * Content of comment
    */
    'content': StoryChildNodes;
    
    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "rangeStart",
            "baseName": "RangeStart",
            "type": "DocumentPosition"
        },
        {
            "name": "rangeEnd",
            "baseName": "RangeEnd",
            "type": "DocumentPosition"
        },
        {
            "name": "author",
            "baseName": "Author",
            "type": "string"
        },
        {
            "name": "initial",
            "baseName": "Initial",
            "type": "string"
        },
        {
            "name": "dateTime",
            "baseName": "DateTime",
            "type": "Date"
        },
        {
            "name": "text",
            "baseName": "Text",
            "type": "string"
        },
        {
            "name": "content",
            "baseName": "Content",
            "type": "StoryChildNodes"
        }    ];

    static getAttributeTypeMap() {
        return super.getAttributeTypeMap().concat(Comment.attributeTypeMap);
    }
}

/**
* Represents link for Drawing Object DTO.
*/
export class DrawingObjectLink extends NodeLink {
    
    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
    ];

    static getAttributeTypeMap() {
        return super.getAttributeTypeMap().concat(DrawingObjectLink.attributeTypeMap);
    }
}

/**
* Container class for epub save options.
*/
export class EpubSaveOptionsData extends HtmlSaveOptionsData {
    /**
    * Specifies the maximum level of headings populated to the navigation map when exporting
    */
    'epubNavigationMapLevel': number;
    
    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "epubNavigationMapLevel",
            "baseName": "EpubNavigationMapLevel",
            "type": "number"
        }    ];

    static getAttributeTypeMap() {
        return super.getAttributeTypeMap().concat(EpubSaveOptionsData.attributeTypeMap);
    }
}

export namespace EpubSaveOptionsData {
}
/**
* Field link
*/
export class FieldLink extends NodeLink {
    /**
    * Field code
    */
    'fieldCode': string;
    
    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "fieldCode",
            "baseName": "FieldCode",
            "type": "string"
        }    ];

    static getAttributeTypeMap() {
        return super.getAttributeTypeMap().concat(FieldLink.attributeTypeMap);
    }
}

/**
* Footnote link.
*/
export class FootnoteLink extends NodeLink {
    
    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
    ];

    static getAttributeTypeMap() {
        return super.getAttributeTypeMap().concat(FootnoteLink.attributeTypeMap);
    }
}

/**
* FromField
*/
export class FormField extends NodeLink {
    /**
    * Gets or sets the form field name.
    */
    'name': string;
    /**
    * True if a form field is enabled.
    */
    'enabled': boolean;
    /**
    * Returns or sets the text that's displayed in the status bar when a form field has the focus.
    */
    'statusText': string;
    /**
    * Specifies the source of the text that's displayed in the status bar when a form field has the focus.
    */
    'ownStatus': boolean;
    /**
    * Returns or sets the text that's displayed in a message box when the form field has the focus and the user presses F1.
    */
    'helpText': string;
    /**
    * Specifies the source of the text that's displayed in a message box when a form field has the focus and the user presses F1.
    */
    'ownHelp': boolean;
    /**
    * True if references to the specified form field are automatically updated whenever the field is exited.
    */
    'calculateOnExit': boolean;
    /**
    * Returns or sets an entry macro name for the form field.
    */
    'entryMacro': string;
    /**
    * Returns or sets an exit macro name for the form field.
    */
    'exitMacro': string;
    
    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "name",
            "baseName": "Name",
            "type": "string"
        },
        {
            "name": "enabled",
            "baseName": "Enabled",
            "type": "boolean"
        },
        {
            "name": "statusText",
            "baseName": "StatusText",
            "type": "string"
        },
        {
            "name": "ownStatus",
            "baseName": "OwnStatus",
            "type": "boolean"
        },
        {
            "name": "helpText",
            "baseName": "HelpText",
            "type": "string"
        },
        {
            "name": "ownHelp",
            "baseName": "OwnHelp",
            "type": "boolean"
        },
        {
            "name": "calculateOnExit",
            "baseName": "CalculateOnExit",
            "type": "boolean"
        },
        {
            "name": "entryMacro",
            "baseName": "EntryMacro",
            "type": "string"
        },
        {
            "name": "exitMacro",
            "baseName": "ExitMacro",
            "type": "string"
        }    ];

    static getAttributeTypeMap() {
        return super.getAttributeTypeMap().concat(FormField.attributeTypeMap);
    }
}

/**
* Section element
*/
export class HeaderFooter extends HeaderFooterLink {
    /**
    * Link to Paragraphs resource
    */
    'paragraphs': LinkElement;
    /**
    * Link to DrawingObjects resource
    */
    'drawingObjects': LinkElement;
    
    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "paragraphs",
            "baseName": "Paragraphs",
            "type": "LinkElement"
        },
        {
            "name": "drawingObjects",
            "baseName": "DrawingObjects",
            "type": "LinkElement"
        }    ];

    static getAttributeTypeMap() {
        return super.getAttributeTypeMap().concat(HeaderFooter.attributeTypeMap);
    }
}

export namespace HeaderFooter {
}
/**
* container class for fixed html save options
*/
export class HtmlFixedSaveOptionsData extends FixedPageSaveOptionsData {
    /**
    * Specifies prefix which is added to all class names in style.css file. Default value is \"aw\".
    */
    'cssClassNamesPrefix': string;
    /**
    * Specifies whether the CSS (Cascading Style Sheet) should be embedded into Html document.
    */
    'exportEmbeddedCss': boolean;
    /**
    * Specifies whether fonts should be embedded into Html document in Base64 format.
    */
    'exportEmbeddedFonts': boolean;
    /**
    * Specifies whether images should be embedded into Html document in Base64 format.
    */
    'exportEmbeddedImages': boolean;
    /**
    * Gets or sets indication of whether form fields are exported as interactive items (as 'input' tag) rather than converted to text or graphics.
    */
    'exportFormFields': boolean;
    /**
    * Encoding.
    */
    'encoding': string;
    /**
    * Specifies export format of fonts
    */
    'fontFormat': string;
    /**
    * Specifies the physical folder where resources are saved when exporting a document
    */
    'resourcesFolder': string;
    /**
    * Specifies the name of the folder used to construct resource URIs
    */
    'resourcesFolderAlias': string;
    /**
    * Specifies whether border around pages should be shown.
    */
    'showPageBorder': boolean;
    /**
    * Specifies the horizontal alignment of pages in an HTML document. Default value is HtmlFixedHorizontalPageAlignment.Center.
    */
    'pageHorizontalAlignment': string;
    /**
    * Specifies the margins around pages in an HTML document. The margins value is measured in points and should be equal to or greater than 0. Default value is 10 points.
    */
    'pageMargins': number;
    
    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "cssClassNamesPrefix",
            "baseName": "CssClassNamesPrefix",
            "type": "string"
        },
        {
            "name": "exportEmbeddedCss",
            "baseName": "ExportEmbeddedCss",
            "type": "boolean"
        },
        {
            "name": "exportEmbeddedFonts",
            "baseName": "ExportEmbeddedFonts",
            "type": "boolean"
        },
        {
            "name": "exportEmbeddedImages",
            "baseName": "ExportEmbeddedImages",
            "type": "boolean"
        },
        {
            "name": "exportFormFields",
            "baseName": "ExportFormFields",
            "type": "boolean"
        },
        {
            "name": "encoding",
            "baseName": "Encoding",
            "type": "string"
        },
        {
            "name": "fontFormat",
            "baseName": "FontFormat",
            "type": "string"
        },
        {
            "name": "resourcesFolder",
            "baseName": "ResourcesFolder",
            "type": "string"
        },
        {
            "name": "resourcesFolderAlias",
            "baseName": "ResourcesFolderAlias",
            "type": "string"
        },
        {
            "name": "showPageBorder",
            "baseName": "ShowPageBorder",
            "type": "boolean"
        },
        {
            "name": "pageHorizontalAlignment",
            "baseName": "PageHorizontalAlignment",
            "type": "string"
        },
        {
            "name": "pageMargins",
            "baseName": "PageMargins",
            "type": "number"
        }    ];

    static getAttributeTypeMap() {
        return super.getAttributeTypeMap().concat(HtmlFixedSaveOptionsData.attributeTypeMap);
    }
}

/**
* Container abstract class for image save options
*/
export class ImageSaveOptionsData extends FixedPageSaveOptionsData {
    /**
    * Brightness of image
    */
    'imageBrightness': number;
    /**
    * Color mode of image
    */
    'imageColorMode': string;
    /**
    * Contrast of image
    */
    'imageContrast': number;
    /**
    * Allows to specify additional System.Drawing.Graphics quality options.
    */
    'graphicsQualityOptions': GraphicsQualityOptionsData;
    /**
    * Pixel format of image
    */
    'pixelFormat': string;
    /**
    * Background (paper) color of image
    */
    'paperColor': string;
    /**
    * Sets both horizontal and vertical resolution for the generated images, in dots per inch.  This property has effect only when saving to raster image formats. The default value is 96.
    */
    'resolution': number;
    /**
    * Gets or sets the horizontal resolution for the generated images, in dots per inch.  This property has effect only when saving to raster image formats. The default value is 96.
    */
    'horizontalResolution': number;
    /**
    * Gets or sets the vertical resolution for the generated images, in dots per inch.  This property has effect only when saving to raster image formats. The default value is 96.
    */
    'verticalResolution': number;
    /**
    * Zoom factor of image
    */
    'scale': number;
    /**
    * Determine whether or not to use high quality (i.e. slow) rendering algorithms
    */
    'useHighQualityRendering': boolean;
    /**
    * Determine whether or not to use anti-aliasing for rendering
    */
    'useAntiAliasing': boolean;
    /**
    * Gets or sets a value determining whether to use GDI+ or Aspose.Words metafile renderer when saving to EMF.
    */
    'useGdiEmfRenderer': boolean;
    
    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "imageBrightness",
            "baseName": "ImageBrightness",
            "type": "number"
        },
        {
            "name": "imageColorMode",
            "baseName": "ImageColorMode",
            "type": "string"
        },
        {
            "name": "imageContrast",
            "baseName": "ImageContrast",
            "type": "number"
        },
        {
            "name": "graphicsQualityOptions",
            "baseName": "GraphicsQualityOptions",
            "type": "GraphicsQualityOptionsData"
        },
        {
            "name": "pixelFormat",
            "baseName": "PixelFormat",
            "type": "string"
        },
        {
            "name": "paperColor",
            "baseName": "PaperColor",
            "type": "string"
        },
        {
            "name": "resolution",
            "baseName": "Resolution",
            "type": "number"
        },
        {
            "name": "horizontalResolution",
            "baseName": "HorizontalResolution",
            "type": "number"
        },
        {
            "name": "verticalResolution",
            "baseName": "VerticalResolution",
            "type": "number"
        },
        {
            "name": "scale",
            "baseName": "Scale",
            "type": "number"
        },
        {
            "name": "useHighQualityRendering",
            "baseName": "UseHighQualityRendering",
            "type": "boolean"
        },
        {
            "name": "useAntiAliasing",
            "baseName": "UseAntiAliasing",
            "type": "boolean"
        },
        {
            "name": "useGdiEmfRenderer",
            "baseName": "UseGdiEmfRenderer",
            "type": "boolean"
        }    ];

    static getAttributeTypeMap() {
        return super.getAttributeTypeMap().concat(ImageSaveOptionsData.attributeTypeMap);
    }
}

/**
* Container class for mhtml save options.
*/
export class MhtmlSaveOptionsData extends HtmlSaveOptionsData {
    
    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
    ];

    static getAttributeTypeMap() {
        return super.getAttributeTypeMap().concat(MhtmlSaveOptionsData.attributeTypeMap);
    }
}

export namespace MhtmlSaveOptionsData {
}
/**
* OfficeMath object link element
*/
export class OfficeMathLink extends NodeLink {
    
    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
    ];

    static getAttributeTypeMap() {
        return super.getAttributeTypeMap().concat(OfficeMathLink.attributeTypeMap);
    }
}

/**
* Paragraph element
*/
export class Paragraph extends NodeLink {
    /**
    * Child nodes
    */
    'childNodes': Array<NodeLink>;
    
    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "childNodes",
            "baseName": "ChildNodes",
            "type": "Array<NodeLink>"
        }    ];

    static getAttributeTypeMap() {
        return super.getAttributeTypeMap().concat(Paragraph.attributeTypeMap);
    }
}

/**
* Paragraph link element
*/
export class ParagraphLink extends NodeLink {
    /**
    * Paragraph's text
    */
    'text': string;
    
    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "text",
            "baseName": "Text",
            "type": "string"
        }    ];

    static getAttributeTypeMap() {
        return super.getAttributeTypeMap().concat(ParagraphLink.attributeTypeMap);
    }
}

/**
* Container class for pcl save options
*/
export class PclSaveOptionsData extends FixedPageSaveOptionsData {
    /**
    * Name of the font that will be used if no expected font is found in printer and built-in fonts collections.
    */
    'falllbackFontName': string;
    /**
    * Gets or sets a value determining whether or not complex transformed elements should be rasterized before saving to PCL document.  Default is true.
    */
    'rasterizeTransformedElements': boolean;
    
    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "falllbackFontName",
            "baseName": "FalllbackFontName",
            "type": "string"
        },
        {
            "name": "rasterizeTransformedElements",
            "baseName": "RasterizeTransformedElements",
            "type": "boolean"
        }    ];

    static getAttributeTypeMap() {
        return super.getAttributeTypeMap().concat(PclSaveOptionsData.attributeTypeMap);
    }
}

/**
* container class for pdf save options
*/
export class PdfSaveOptionsData extends FixedPageSaveOptionsData {
    /**
    * Specifies the level in the PDF document outline at which to display Word bookmarks
    */
    'bookmarksOutlineLevel': number;
    /**
    * Specifies whether to convert footnote/endnote references in main text story into active hyperlinks. When clicked the hyperlink will lead to the corresponding footnote/endnote. Default is false.
    */
    'createNoteHyperlinks': boolean;
    /**
    * Specifies the PDF standards compliance level for output documents
    */
    'compliance': string;
    /**
    * Specifies the details for signing the output PDF document
    */
    'digitalSignatureDetails': PdfDigitalSignatureDetailsData;
    /**
    * A flag specifying whether the window’s title bar should display the document title taken from the Title entry of the document information dictionary.
    */
    'displayDocTitle': boolean;
    /**
    * Specifies whether or not the images should be downsampled
    */
    'downsampleImages': boolean;
    /**
    * Specifies the resolution in pixels per inch to which the images should be downsampled
    */
    'downsampleResolution': number;
    /**
    * Allows to specify downsample options.
    */
    'downsampleOptions': DownsampleOptionsData;
    /**
    * Controls how fonts are embedded into the resulting PDF documents
    */
    'embedFullFonts': boolean;
    /**
    * Determines whether or not to embed standard windows fonts Arial and Times New Roman
    */
    'embedStandardWindowsFonts': boolean;
    /**
    * Specifies the details for encrypting the output PDF document
    */
    'encryptionDetails': PdfEncryptionDetailsData;
    /**
    * Specifies how many levels in the PDF document outline to show expanded when the PDF file is viewed
    */
    'expandedOutlineLevels': number;
    /**
    * Determines whether or not to export custom properties of document as Metadata
    */
    'exportCustomPropertiesAsMetadata': boolean;
    /**
    * Determines whether or not to export document structure
    */
    'exportDocumentStructure': boolean;
    /**
    * Specifies the font embedding mode
    */
    'fontEmbeddingMode': string;
    /**
    * Specifies how many levels of headings (paragraphs formatted with the Heading styles) to include in the PDF document outline
    */
    'headingsOutlineLevels': number;
    /**
    * Specifies compression type to be used for all images in the document
    */
    'imageCompression': string;
    /**
    * Determines whether hyperlinks in the output Pdf document are forced to be opened in a new window (or tab) of a browser
    */
    'openHyperlinksInNewWindow': boolean;
    /**
    * Allows to specify outline options
    */
    'outlineOptions': OutlineOptionsData;
    /**
    * Specifies how the PDF document should be displayed when opened in the PDF reader
    */
    'pageMode': string;
    /**
    * Specifies how the color space will be selected for the images in PDF document.
    */
    'imageColorSpaceExportMode': string;
    /**
    * Specifies whether to preserve Microsoft Word form fields as form fields in PDF or convert them to text
    */
    'preserveFormFields': boolean;
    /**
    * Specifies compression type to be used for all textual content in the document
    */
    'textCompression': string;
    /**
    * Determines whether or not to substitute TrueType fonts Arial, Times New Roman, Courier New and Symbol with core PDF Type 1 fonts
    */
    'useCoreFonts': boolean;
    /**
    * Determines whether the document should be saved using a booklet printing layout
    */
    'useBookFoldPrintingSettings': boolean;
    /**
    * Determines what type of zoom should be applied when a document is opened with a PDF viewer
    */
    'zoomBehavior': string;
    /**
    * Determines zoom factor (in percentages) for a document
    */
    'zoomFactor': number;
    /**
    * Gets or sets a value determining the way  are exported to PDF file. Default value is .
    */
    'customPropertiesExport': string;
    /**
    * Gets or sets a value determining whether or not to preblend transparent images with black background color.
    */
    'preblendImages': boolean;
    
    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "bookmarksOutlineLevel",
            "baseName": "BookmarksOutlineLevel",
            "type": "number"
        },
        {
            "name": "createNoteHyperlinks",
            "baseName": "CreateNoteHyperlinks",
            "type": "boolean"
        },
        {
            "name": "compliance",
            "baseName": "Compliance",
            "type": "string"
        },
        {
            "name": "digitalSignatureDetails",
            "baseName": "DigitalSignatureDetails",
            "type": "PdfDigitalSignatureDetailsData"
        },
        {
            "name": "displayDocTitle",
            "baseName": "DisplayDocTitle",
            "type": "boolean"
        },
        {
            "name": "downsampleImages",
            "baseName": "DownsampleImages",
            "type": "boolean"
        },
        {
            "name": "downsampleResolution",
            "baseName": "DownsampleResolution",
            "type": "number"
        },
        {
            "name": "downsampleOptions",
            "baseName": "DownsampleOptions",
            "type": "DownsampleOptionsData"
        },
        {
            "name": "embedFullFonts",
            "baseName": "EmbedFullFonts",
            "type": "boolean"
        },
        {
            "name": "embedStandardWindowsFonts",
            "baseName": "EmbedStandardWindowsFonts",
            "type": "boolean"
        },
        {
            "name": "encryptionDetails",
            "baseName": "EncryptionDetails",
            "type": "PdfEncryptionDetailsData"
        },
        {
            "name": "expandedOutlineLevels",
            "baseName": "ExpandedOutlineLevels",
            "type": "number"
        },
        {
            "name": "exportCustomPropertiesAsMetadata",
            "baseName": "ExportCustomPropertiesAsMetadata",
            "type": "boolean"
        },
        {
            "name": "exportDocumentStructure",
            "baseName": "ExportDocumentStructure",
            "type": "boolean"
        },
        {
            "name": "fontEmbeddingMode",
            "baseName": "FontEmbeddingMode",
            "type": "string"
        },
        {
            "name": "headingsOutlineLevels",
            "baseName": "HeadingsOutlineLevels",
            "type": "number"
        },
        {
            "name": "imageCompression",
            "baseName": "ImageCompression",
            "type": "string"
        },
        {
            "name": "openHyperlinksInNewWindow",
            "baseName": "OpenHyperlinksInNewWindow",
            "type": "boolean"
        },
        {
            "name": "outlineOptions",
            "baseName": "OutlineOptions",
            "type": "OutlineOptionsData"
        },
        {
            "name": "pageMode",
            "baseName": "PageMode",
            "type": "string"
        },
        {
            "name": "imageColorSpaceExportMode",
            "baseName": "ImageColorSpaceExportMode",
            "type": "string"
        },
        {
            "name": "preserveFormFields",
            "baseName": "PreserveFormFields",
            "type": "boolean"
        },
        {
            "name": "textCompression",
            "baseName": "TextCompression",
            "type": "string"
        },
        {
            "name": "useCoreFonts",
            "baseName": "UseCoreFonts",
            "type": "boolean"
        },
        {
            "name": "useBookFoldPrintingSettings",
            "baseName": "UseBookFoldPrintingSettings",
            "type": "boolean"
        },
        {
            "name": "zoomBehavior",
            "baseName": "ZoomBehavior",
            "type": "string"
        },
        {
            "name": "zoomFactor",
            "baseName": "ZoomFactor",
            "type": "number"
        },
        {
            "name": "customPropertiesExport",
            "baseName": "CustomPropertiesExport",
            "type": "string"
        },
        {
            "name": "preblendImages",
            "baseName": "PreblendImages",
            "type": "boolean"
        }    ];

    static getAttributeTypeMap() {
        return super.getAttributeTypeMap().concat(PdfSaveOptionsData.attributeTypeMap);
    }
}

/**
* container class for ps save options
*/
export class PsSaveOptionsData extends FixedPageSaveOptionsData {
    /**
    * Determines whether the document should be saved using a booklet printing layout
    */
    'useBookFoldPrintingSettings': boolean;
    
    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "useBookFoldPrintingSettings",
            "baseName": "UseBookFoldPrintingSettings",
            "type": "boolean"
        }    ];

    static getAttributeTypeMap() {
        return super.getAttributeTypeMap().concat(PsSaveOptionsData.attributeTypeMap);
    }
}

/**
* Run link element
*/
export class RunLink extends NodeLink {
    /**
    * Run's text
    */
    'text': string;
    
    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "text",
            "baseName": "Text",
            "type": "string"
        }    ];

    static getAttributeTypeMap() {
        return super.getAttributeTypeMap().concat(RunLink.attributeTypeMap);
    }
}

/**
* container class for svg save options
*/
export class SvgSaveOptionsData extends FixedPageSaveOptionsData {
    /**
    * Specified whether images should be embedded into SVG document as base64
    */
    'exportEmbeddedImages': boolean;
    /**
    * Specifies if the output SVG should fill the available viewport area (browser window or container). When set to true width and height of output SVG are set to 100%.
    */
    'fitToViewPort': boolean;
    /**
    * Specifies the physical folder where resources (images) are saved when exporting
    */
    'resourcesFolder': string;
    /**
    * Specifies the name of the folder used to construct image URIs
    */
    'resourcesFolderAlias': string;
    /**
    * Show/hide page stepper
    */
    'showPageBorder': boolean;
    /**
    * Determines how text should be rendered
    */
    'textOutputMode': string;
    
    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "exportEmbeddedImages",
            "baseName": "ExportEmbeddedImages",
            "type": "boolean"
        },
        {
            "name": "fitToViewPort",
            "baseName": "FitToViewPort",
            "type": "boolean"
        },
        {
            "name": "resourcesFolder",
            "baseName": "ResourcesFolder",
            "type": "string"
        },
        {
            "name": "resourcesFolderAlias",
            "baseName": "ResourcesFolderAlias",
            "type": "string"
        },
        {
            "name": "showPageBorder",
            "baseName": "ShowPageBorder",
            "type": "boolean"
        },
        {
            "name": "textOutputMode",
            "baseName": "TextOutputMode",
            "type": "string"
        }    ];

    static getAttributeTypeMap() {
        return super.getAttributeTypeMap().concat(SvgSaveOptionsData.attributeTypeMap);
    }
}

/**
* container class for swf save options
*/
export class SwfSaveOptionsData extends FixedPageSaveOptionsData {
    /**
    * Allows to enable read mode
    */
    'allowReadMode': boolean;
    /**
    * Specifies the level in the SWF document outline at which to display Word bookmarks
    */
    'bookmarksOutlineLevel': number;
    /**
    * Specifies whether the generated SWF document should be compressed or not
    */
    'compressed': boolean;
    /**
    * Enable/disable context menu
    */
    'enableContextMenu': boolean;
    /**
    * Specifies how many levels in the SWF document outline to show expanded when the SWF file is viewed
    */
    'expandedOutlineLevels': number;
    /**
    * Specifies how many levels of headings (paragraphs formatted with the Heading styles) to include in the SWF document outline
    */
    'headingsOutlineLevels': number;
    /**
    * Control flags used to configure appearance of left panel of SWF viewer
    */
    'leftPaneControlFlags': string;
    /**
    * Image that will be displayed as logo in the top right corner of the viewer as string in base64 format
    */
    'logoImageBytes': string;
    /**
    * Specifies the full hyperlink address for a logo
    */
    'logoLink': string;
    /**
    * Allows to specify outline options
    */
    'outlineOptions': OutlineOptionsData;
    /**
    * Show/hide bottom pane
    */
    'showBottomPane': boolean;
    /**
    * Show/hide fullscreen button
    */
    'showFullScreen': boolean;
    /**
    * Show/hide left pane
    */
    'showLeftPane': boolean;
    /**
    * Specifies whether border around pages should be shown
    */
    'showPageBorder': boolean;
    /**
    * Show/hide page stepper
    */
    'showPageStepper': boolean;
    /**
    * Show/hide search section
    */
    'showSearch': boolean;
    /**
    * Show/hide whole top pane
    */
    'showTopPane': boolean;
    /**
    * Start with opened left pane
    */
    'startOpenLeftPane': boolean;
    /**
    * Specifies a font used for tooltips in SWF viewer
    */
    'toolTipsFontName': string;
    /**
    * Control flags used to configure appearance of top panel of SWF viewer
    */
    'topPaneControlFlags': string;
    /**
    * Specifies whether the generated SWF document should include the integrated document viewer or not
    */
    'viewerIncluded': boolean;
    
    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "allowReadMode",
            "baseName": "AllowReadMode",
            "type": "boolean"
        },
        {
            "name": "bookmarksOutlineLevel",
            "baseName": "BookmarksOutlineLevel",
            "type": "number"
        },
        {
            "name": "compressed",
            "baseName": "Compressed",
            "type": "boolean"
        },
        {
            "name": "enableContextMenu",
            "baseName": "EnableContextMenu",
            "type": "boolean"
        },
        {
            "name": "expandedOutlineLevels",
            "baseName": "ExpandedOutlineLevels",
            "type": "number"
        },
        {
            "name": "headingsOutlineLevels",
            "baseName": "HeadingsOutlineLevels",
            "type": "number"
        },
        {
            "name": "leftPaneControlFlags",
            "baseName": "LeftPaneControlFlags",
            "type": "string"
        },
        {
            "name": "logoImageBytes",
            "baseName": "LogoImageBytes",
            "type": "string"
        },
        {
            "name": "logoLink",
            "baseName": "LogoLink",
            "type": "string"
        },
        {
            "name": "outlineOptions",
            "baseName": "OutlineOptions",
            "type": "OutlineOptionsData"
        },
        {
            "name": "showBottomPane",
            "baseName": "ShowBottomPane",
            "type": "boolean"
        },
        {
            "name": "showFullScreen",
            "baseName": "ShowFullScreen",
            "type": "boolean"
        },
        {
            "name": "showLeftPane",
            "baseName": "ShowLeftPane",
            "type": "boolean"
        },
        {
            "name": "showPageBorder",
            "baseName": "ShowPageBorder",
            "type": "boolean"
        },
        {
            "name": "showPageStepper",
            "baseName": "ShowPageStepper",
            "type": "boolean"
        },
        {
            "name": "showSearch",
            "baseName": "ShowSearch",
            "type": "boolean"
        },
        {
            "name": "showTopPane",
            "baseName": "ShowTopPane",
            "type": "boolean"
        },
        {
            "name": "startOpenLeftPane",
            "baseName": "StartOpenLeftPane",
            "type": "boolean"
        },
        {
            "name": "toolTipsFontName",
            "baseName": "ToolTipsFontName",
            "type": "string"
        },
        {
            "name": "topPaneControlFlags",
            "baseName": "TopPaneControlFlags",
            "type": "string"
        },
        {
            "name": "viewerIncluded",
            "baseName": "ViewerIncluded",
            "type": "boolean"
        }    ];

    static getAttributeTypeMap() {
        return super.getAttributeTypeMap().concat(SwfSaveOptionsData.attributeTypeMap);
    }
}

/**
* Table element
*/
export class Table extends NodeLink {
    /**
    * Collection of table's rows.
    */
    'tableRowList': Array<TableRow>;
    /**
    * Table properties.
    */
    'tableProperties': TableProperties;
    
    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "tableRowList",
            "baseName": "TableRowList",
            "type": "Array<TableRow>"
        },
        {
            "name": "tableProperties",
            "baseName": "TableProperties",
            "type": "TableProperties"
        }    ];

    static getAttributeTypeMap() {
        return super.getAttributeTypeMap().concat(Table.attributeTypeMap);
    }
}

/**
* Table cell element.
*/
export class TableCell extends NodeLink {
    /**
    * Child nodes.
    */
    'childNodes': Array<NodeLink>;
    
    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "childNodes",
            "baseName": "ChildNodes",
            "type": "Array<NodeLink>"
        }    ];

    static getAttributeTypeMap() {
        return super.getAttributeTypeMap().concat(TableCell.attributeTypeMap);
    }
}

/**
* Table link element
*/
export class TableLink extends NodeLink {
    
    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
    ];

    static getAttributeTypeMap() {
        return super.getAttributeTypeMap().concat(TableLink.attributeTypeMap);
    }
}

/**
* Table row element.
*/
export class TableRow extends NodeLink {
    /**
    * Collection of table's rows.
    */
    'tableCellList': Array<TableCell>;
    /**
    * Provides access to the formatting properties of the row.
    */
    'rowFormat': TableRowFormat;
    
    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "tableCellList",
            "baseName": "TableCellList",
            "type": "Array<TableCell>"
        },
        {
            "name": "rowFormat",
            "baseName": "RowFormat",
            "type": "TableRowFormat"
        }    ];

    static getAttributeTypeMap() {
        return super.getAttributeTypeMap().concat(TableRow.attributeTypeMap);
    }
}

/**
* container class for xaml fixed save options
*/
export class XamlFixedSaveOptionsData extends FixedPageSaveOptionsData {
    /**
    * Specifies the physical folder where resources (images and fonts) are saved when exporting a document to fixed page Xaml format. Default is null.
    */
    'resourcesFolder': string;
    /**
    * Specifies the name of the folder used to construct image URIs written into an fixed page Xaml document. Default is null.
    */
    'resourcesFolderAlias': string;
    
    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "resourcesFolder",
            "baseName": "ResourcesFolder",
            "type": "string"
        },
        {
            "name": "resourcesFolderAlias",
            "baseName": "ResourcesFolderAlias",
            "type": "string"
        }    ];

    static getAttributeTypeMap() {
        return super.getAttributeTypeMap().concat(XamlFixedSaveOptionsData.attributeTypeMap);
    }
}

/**
* Container class for xps save options.
*/
export class XpsSaveOptionsData extends FixedPageSaveOptionsData {
    /**
    * Specifies the level in the XPS document outline at which to display Word bookmarks.
    */
    'bookmarksOutlineLevel': number;
    /**
    * Specifies how many levels of headings (paragraphs formatted with the Heading styles) to include in the XPS document outline.
    */
    'headingsOutlineLevels': number;
    /**
    * Allows to specify outline options
    */
    'outlineOptions': OutlineOptionsData;
    /**
    * Determines whether the document should be saved using a booklet printing layout
    */
    'useBookFoldPrintingSettings': boolean;
    
    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "bookmarksOutlineLevel",
            "baseName": "BookmarksOutlineLevel",
            "type": "number"
        },
        {
            "name": "headingsOutlineLevels",
            "baseName": "HeadingsOutlineLevels",
            "type": "number"
        },
        {
            "name": "outlineOptions",
            "baseName": "OutlineOptions",
            "type": "OutlineOptionsData"
        },
        {
            "name": "useBookFoldPrintingSettings",
            "baseName": "UseBookFoldPrintingSettings",
            "type": "boolean"
        }    ];

    static getAttributeTypeMap() {
        return super.getAttributeTypeMap().concat(XpsSaveOptionsData.attributeTypeMap);
    }
}

/**
* Container class for bmp save options.
*/
export class BmpSaveOptionsData extends ImageSaveOptionsData {
    
    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
    ];

    static getAttributeTypeMap() {
        return super.getAttributeTypeMap().concat(BmpSaveOptionsData.attributeTypeMap);
    }
}

/**
* Represents Drawing Object DTO.
*/
export class DrawingObject extends DrawingObjectLink {
    /**
    * A list of links that originate from this .
    */
    'renderLinks': Array<WordsApiLink>;
    /**
    * Width of the drawing objects in points.
    */
    'width': number;
    /**
    * Height of the drawing object in points.
    */
    'height': number;
    /**
    * Link to ole object. Can be null if shape does not have ole data.
    */
    'oleDataLink': WordsApiLink;
    /**
    * Link to image data. Can be null if shape does not have an image.
    */
    'imageDataLink': WordsApiLink;
    /**
    * Specifies where the distance to the image is measured from.             
    */
    'relativeHorizontalPosition': DrawingObject.RelativeHorizontalPositionEnum;
    /**
    * Distance in points from the origin to the left side of the image.             
    */
    'left': number;
    /**
    * Specifies where the distance to the image measured from.
    */
    'relativeVerticalPosition': DrawingObject.RelativeVerticalPositionEnum;
    /**
    * Distance in points from the origin to the top side of the image.
    */
    'top': number;
    /**
    * Specifies how to wrap text around the image.
    */
    'wrapType': DrawingObject.WrapTypeEnum;
    
    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "renderLinks",
            "baseName": "RenderLinks",
            "type": "Array<WordsApiLink>"
        },
        {
            "name": "width",
            "baseName": "Width",
            "type": "number"
        },
        {
            "name": "height",
            "baseName": "Height",
            "type": "number"
        },
        {
            "name": "oleDataLink",
            "baseName": "OleDataLink",
            "type": "WordsApiLink"
        },
        {
            "name": "imageDataLink",
            "baseName": "ImageDataLink",
            "type": "WordsApiLink"
        },
        {
            "name": "relativeHorizontalPosition",
            "baseName": "RelativeHorizontalPosition",
            "type": "DrawingObject.RelativeHorizontalPositionEnum"
        },
        {
            "name": "left",
            "baseName": "Left",
            "type": "number"
        },
        {
            "name": "relativeVerticalPosition",
            "baseName": "RelativeVerticalPosition",
            "type": "DrawingObject.RelativeVerticalPositionEnum"
        },
        {
            "name": "top",
            "baseName": "Top",
            "type": "number"
        },
        {
            "name": "wrapType",
            "baseName": "WrapType",
            "type": "DrawingObject.WrapTypeEnum"
        }    ];

    static getAttributeTypeMap() {
        return super.getAttributeTypeMap().concat(DrawingObject.attributeTypeMap);
    }
}

export namespace DrawingObject {
    export enum RelativeHorizontalPositionEnum {
        Margin = <any> 'Margin',
        Page = <any> 'Page',
        Column = <any> 'Column',
        Default = <any> 'Default',
        Character = <any> 'Character',
        LeftMargin = <any> 'LeftMargin',
        RightMargin = <any> 'RightMargin',
        InsideMargin = <any> 'InsideMargin',
        OutsideMargin = <any> 'OutsideMargin'
    }
    export enum RelativeVerticalPositionEnum {
        Margin = <any> 'Margin',
        TableDefault = <any> 'TableDefault',
        Page = <any> 'Page',
        Paragraph = <any> 'Paragraph',
        TextFrameDefault = <any> 'TextFrameDefault',
        Line = <any> 'Line',
        TopMargin = <any> 'TopMargin',
        BottomMargin = <any> 'BottomMargin',
        InsideMargin = <any> 'InsideMargin',
        OutsideMargin = <any> 'OutsideMargin'
    }
    export enum WrapTypeEnum {
        Inline = <any> 'Inline',
        TopBottom = <any> 'TopBottom',
        Square = <any> 'Square',
        None = <any> 'None',
        Tight = <any> 'Tight',
        Through = <any> 'Through'
    }
}
/**
* Container class for emf save options.
*/
export class EmfSaveOptionsData extends ImageSaveOptionsData {
    
    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
    ];

    static getAttributeTypeMap() {
        return super.getAttributeTypeMap().concat(EmfSaveOptionsData.attributeTypeMap);
    }
}

/**
* Field
*/
export class Field extends FieldLink {
    /**
    * Field result
    */
    'result': string;
    /**
    * Gets or sets LCID of the field.
    */
    'localeId': string;
    
    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "result",
            "baseName": "Result",
            "type": "string"
        },
        {
            "name": "localeId",
            "baseName": "LocaleId",
            "type": "string"
        }    ];

    static getAttributeTypeMap() {
        return super.getAttributeTypeMap().concat(Field.attributeTypeMap);
    }
}

/**
* Footnote.
*/
export class Footnote extends FootnoteLink {
    /**
    * Link to comment range start node.
    */
    'position': DocumentPosition;
    /**
    * Returns a value that specifies whether this is a footnote or endnote.
    */
    'footnoteType': Footnote.FootnoteTypeEnum;
    /**
    * Gets/sets custom reference mark to be used for this footnote. Default value is , meaning auto-numbered footnotes are used.
    */
    'referenceMark': string;
    /**
    * This is a convenience property that allows to easily get or set text of the footnote.
    */
    'text': string;
    /**
    * Content of footnote.
    */
    'content': StoryChildNodes;
    
    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "position",
            "baseName": "Position",
            "type": "DocumentPosition"
        },
        {
            "name": "footnoteType",
            "baseName": "FootnoteType",
            "type": "Footnote.FootnoteTypeEnum"
        },
        {
            "name": "referenceMark",
            "baseName": "ReferenceMark",
            "type": "string"
        },
        {
            "name": "text",
            "baseName": "Text",
            "type": "string"
        },
        {
            "name": "content",
            "baseName": "Content",
            "type": "StoryChildNodes"
        }    ];

    static getAttributeTypeMap() {
        return super.getAttributeTypeMap().concat(Footnote.attributeTypeMap);
    }
}

export namespace Footnote {
    export enum FootnoteTypeEnum {
        Footnote = <any> 'Footnote',
        Endnote = <any> 'Endnote'
    }
}
/**
* FormField checkbox element
*/
export class FormFieldCheckbox extends FormField {
    /**
    * Gets or sets the boolean value that indicates whether the size of the textbox is automatic or specified explicitly.
    */
    'isCheckBoxExactSize': boolean;
    /**
    * Gets or sets the size of the checkbox in points. Has effect only when  is true.
    */
    'checkBoxSize': number;
    /**
    * Gets or sets the checked status of the check box form field.
    */
    'checked': boolean;
    
    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "isCheckBoxExactSize",
            "baseName": "IsCheckBoxExactSize",
            "type": "boolean"
        },
        {
            "name": "checkBoxSize",
            "baseName": "CheckBoxSize",
            "type": "number"
        },
        {
            "name": "checked",
            "baseName": "Checked",
            "type": "boolean"
        }    ];

    static getAttributeTypeMap() {
        return super.getAttributeTypeMap().concat(FormFieldCheckbox.attributeTypeMap);
    }
}

/**
* FormField dropdownlist element
*/
export class FormFieldDropDown extends FormField {
    /**
    * Gets or sets the index specifying the currently selected item in a dropdown form field.
    */
    'dropDownSelectedIndex': number;
    /**
    * Provides access to the items of a dropdown form field.
    */
    'dropDownItems': Array<string>;
    
    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "dropDownSelectedIndex",
            "baseName": "DropDownSelectedIndex",
            "type": "number"
        },
        {
            "name": "dropDownItems",
            "baseName": "DropDownItems",
            "type": "Array<string>"
        }    ];

    static getAttributeTypeMap() {
        return super.getAttributeTypeMap().concat(FormFieldDropDown.attributeTypeMap);
    }
}

/**
* FormField text input element
*/
export class FormFieldTextInput extends FormField {
    /**
    * Returns or sets the text formatting for a text form field.
    */
    'textInputFormat': string;
    /**
    * Gets or sets the type of a text form field.
    */
    'textInputType': FormFieldTextInput.TextInputTypeEnum;
    /**
    * Gets or sets the default string or a calculation expression of a text form field. 
    */
    'textInputDefault': string;
    /**
    * Maximum length for the text field. Zero when the length is not limited.
    */
    'maxLength': number;
    
    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "textInputFormat",
            "baseName": "TextInputFormat",
            "type": "string"
        },
        {
            "name": "textInputType",
            "baseName": "TextInputType",
            "type": "FormFieldTextInput.TextInputTypeEnum"
        },
        {
            "name": "textInputDefault",
            "baseName": "TextInputDefault",
            "type": "string"
        },
        {
            "name": "maxLength",
            "baseName": "MaxLength",
            "type": "number"
        }    ];

    static getAttributeTypeMap() {
        return super.getAttributeTypeMap().concat(FormFieldTextInput.attributeTypeMap);
    }
}

export namespace FormFieldTextInput {
    export enum TextInputTypeEnum {
        Regular = <any> 'Regular',
        Number = <any> 'Number',
        Date = <any> 'Date',
        CurrentDate = <any> 'CurrentDate',
        CurrentTime = <any> 'CurrentTime',
        Calculated = <any> 'Calculated'
    }
}
/**
* Container class for gif save options.
*/
export class GifSaveOptionsData extends ImageSaveOptionsData {
    
    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
    ];

    static getAttributeTypeMap() {
        return super.getAttributeTypeMap().concat(GifSaveOptionsData.attributeTypeMap);
    }
}

/**
* container class for jpeg save options.
*/
export class JpegSaveOptionsData extends ImageSaveOptionsData {
    
    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
    ];

    static getAttributeTypeMap() {
        return super.getAttributeTypeMap().concat(JpegSaveOptionsData.attributeTypeMap);
    }
}

/**
* OfficeMath object.
*/
export class OfficeMathObject extends OfficeMathLink {
    /**
    * Content of footnote.
    */
    'content': StoryChildNodes;
    /**
    * Gets/sets Office Math display format type which represents whether an equation is displayed inline with the text or displayed on its own line.
    */
    'displayType': OfficeMathObject.DisplayTypeEnum;
    /**
    * Gets/sets Office Math justification.
    */
    'justification': OfficeMathObject.JustificationEnum;
    /**
    * Gets type Aspose.Words.Math.OfficeMath.MathObjectType of this Office Math object.
    */
    'mathObjectType': OfficeMathObject.MathObjectTypeEnum;
    
    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "content",
            "baseName": "Content",
            "type": "StoryChildNodes"
        },
        {
            "name": "displayType",
            "baseName": "DisplayType",
            "type": "OfficeMathObject.DisplayTypeEnum"
        },
        {
            "name": "justification",
            "baseName": "Justification",
            "type": "OfficeMathObject.JustificationEnum"
        },
        {
            "name": "mathObjectType",
            "baseName": "MathObjectType",
            "type": "OfficeMathObject.MathObjectTypeEnum"
        }    ];

    static getAttributeTypeMap() {
        return super.getAttributeTypeMap().concat(OfficeMathObject.attributeTypeMap);
    }
}

export namespace OfficeMathObject {
    export enum DisplayTypeEnum {
        Display = <any> 'Display',
        Inline = <any> 'Inline'
    }
    export enum JustificationEnum {
        CenterGroup = <any> 'CenterGroup',
        Default = <any> 'Default',
        Center = <any> 'Center',
        Left = <any> 'Left',
        Right = <any> 'Right',
        Inline = <any> 'Inline'
    }
    export enum MathObjectTypeEnum {
        OMath = <any> 'OMath',
        OMathPara = <any> 'OMathPara',
        Accent = <any> 'Accent',
        Bar = <any> 'Bar',
        BorderBox = <any> 'BorderBox',
        Box = <any> 'Box',
        Delimiter = <any> 'Delimiter',
        Degree = <any> 'Degree',
        Argument = <any> 'Argument',
        Array = <any> 'Array',
        Fraction = <any> 'Fraction',
        Denominator = <any> 'Denominator',
        Numerator = <any> 'Numerator',
        Function = <any> 'Function',
        FunctionName = <any> 'FunctionName',
        GroupCharacter = <any> 'GroupCharacter',
        Limit = <any> 'Limit',
        LowerLimit = <any> 'LowerLimit',
        UpperLimit = <any> 'UpperLimit',
        Matrix = <any> 'Matrix',
        MatrixRow = <any> 'MatrixRow',
        NAry = <any> 'NAry',
        Phantom = <any> 'Phantom',
        Radical = <any> 'Radical',
        SubscriptPart = <any> 'SubscriptPart',
        SuperscriptPart = <any> 'SuperscriptPart',
        PreSubSuperscript = <any> 'PreSubSuperscript',
        Subscript = <any> 'Subscript',
        SubSuperscript = <any> 'SubSuperscript',
        Supercript = <any> 'Supercript'
    }
}
/**
* container class for png save options.
*/
export class PngSaveOptionsData extends ImageSaveOptionsData {
    
    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
    ];

    static getAttributeTypeMap() {
        return super.getAttributeTypeMap().concat(PngSaveOptionsData.attributeTypeMap);
    }
}

/**
* Run element
*/
export class Run extends RunLink {
    
    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
    ];

    static getAttributeTypeMap() {
        return super.getAttributeTypeMap().concat(Run.attributeTypeMap);
    }
}

/**
* Container class for tiff save options.
*/
export class TiffSaveOptionsData extends ImageSaveOptionsData {
    /**
    * Specifies method used while converting images to 1 bpp format.
    */
    'tiffBinarizationMethod': string;
    /**
    * Type of compression.
    */
    'tiffCompression': string;
    
    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "tiffBinarizationMethod",
            "baseName": "TiffBinarizationMethod",
            "type": "string"
        },
        {
            "name": "tiffCompression",
            "baseName": "TiffCompression",
            "type": "string"
        }    ];

    static getAttributeTypeMap() {
        return super.getAttributeTypeMap().concat(TiffSaveOptionsData.attributeTypeMap);
    }
}


let enumsMap = {
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
    "HtmlSaveOptionsData.HtmlVersionEnum": HtmlSaveOptionsData.HtmlVersionEnum,
    "HtmlSaveOptionsData.OfficeMathOutputModeEnum": HtmlSaveOptionsData.OfficeMathOutputModeEnum,
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
    "FormFieldTextInput.TextInputTypeEnum": FormFieldTextInput.TextInputTypeEnum,
    "OfficeMathObject.DisplayTypeEnum": OfficeMathObject.DisplayTypeEnum,
    "OfficeMathObject.JustificationEnum": OfficeMathObject.JustificationEnum,
    "OfficeMathObject.MathObjectTypeEnum": OfficeMathObject.MathObjectTypeEnum,
}

let typeMap = {
    "AsposeResponse": AsposeResponse,
    "BookmarkData": BookmarkData,
    "BookmarksOutlineLevelData": BookmarksOutlineLevelData,
    "CompareData": CompareData,
    "Document": Document,
    "DocumentEntry": DocumentEntry,
    "DocumentEntryList": DocumentEntryList,
    "DocumentPosition": DocumentPosition,
    "DocumentStatData": DocumentStatData,
    "DownsampleOptionsData": DownsampleOptionsData,
    "FootnotesStatData": FootnotesStatData,
    "GraphicsQualityOptionsData": GraphicsQualityOptionsData,
    "Link": Link,
    "LinkElement": LinkElement,
    "LoadWebDocumentData": LoadWebDocumentData,
    "MetafileRenderingOptionsData": MetafileRenderingOptionsData,
    "ModificationOperationResult": ModificationOperationResult,
    "OutlineOptionsData": OutlineOptionsData,
    "PageNumber": PageNumber,
    "PageStatData": PageStatData,
    "ParagraphInsert": ParagraphInsert,
    "PdfDigitalSignatureDetailsData": PdfDigitalSignatureDetailsData,
    "PdfEncryptionDetailsData": PdfEncryptionDetailsData,
    "PreferredWidth": PreferredWidth,
    "ProtectionData": ProtectionData,
    "ProtectionRequest": ProtectionRequest,
    "ReplaceTextRequest": ReplaceTextRequest,
    "SaveOptionsData": SaveOptionsData,
    "SaveResult": SaveResult,
    "SearchResult": SearchResult,
    "SplitDocumentResult": SplitDocumentResult,
    "StoryChildNodes": StoryChildNodes,
    "StringFormatData": StringFormatData,
    "TableCellInsert": TableCellInsert,
    "TableInsert": TableInsert,
    "TableRowInsert": TableRowInsert,
    "WatermarkText": WatermarkText,
    "XmlColor": XmlColor,
    "Bookmark": Bookmark,
    "BookmarkResponse": BookmarkResponse,
    "Bookmarks": Bookmarks,
    "BookmarksResponse": BookmarksResponse,
    "Border": Border,
    "BorderResponse": BorderResponse,
    "BordersCollection": BordersCollection,
    "BordersResponse": BordersResponse,
    "CommentLink": CommentLink,
    "CommentResponse": CommentResponse,
    "CommentsCollection": CommentsCollection,
    "CommentsResponse": CommentsResponse,
    "DocSaveOptionsData": DocSaveOptionsData,
    "DocumentProperties": DocumentProperties,
    "DocumentPropertiesResponse": DocumentPropertiesResponse,
    "DocumentProperty": DocumentProperty,
    "DocumentPropertyResponse": DocumentPropertyResponse,
    "DocumentResponse": DocumentResponse,
    "DrawingObjectCollection": DrawingObjectCollection,
    "DrawingObjectResponse": DrawingObjectResponse,
    "DrawingObjectsResponse": DrawingObjectsResponse,
    "FieldCollection": FieldCollection,
    "FieldNames": FieldNames,
    "FieldNamesResponse": FieldNamesResponse,
    "FieldResponse": FieldResponse,
    "FieldsResponse": FieldsResponse,
    "FileLink": FileLink,
    "FixedPageSaveOptionsData": FixedPageSaveOptionsData,
    "Font": Font,
    "FontResponse": FontResponse,
    "FootnoteCollection": FootnoteCollection,
    "FootnoteResponse": FootnoteResponse,
    "FootnotesResponse": FootnotesResponse,
    "FormFieldCollection": FormFieldCollection,
    "FormFieldResponse": FormFieldResponse,
    "FormFieldsResponse": FormFieldsResponse,
    "HeaderFooterLink": HeaderFooterLink,
    "HeaderFooterLinkCollection": HeaderFooterLinkCollection,
    "HeaderFooterResponse": HeaderFooterResponse,
    "HeaderFootersResponse": HeaderFootersResponse,
    "HtmlSaveOptionsData": HtmlSaveOptionsData,
    "Hyperlink": Hyperlink,
    "HyperlinkResponse": HyperlinkResponse,
    "Hyperlinks": Hyperlinks,
    "HyperlinksResponse": HyperlinksResponse,
    "NodeLink": NodeLink,
    "OdtSaveOptionsData": OdtSaveOptionsData,
    "OfficeMathObjectResponse": OfficeMathObjectResponse,
    "OfficeMathObjectsCollection": OfficeMathObjectsCollection,
    "OfficeMathObjectsResponse": OfficeMathObjectsResponse,
    "OoxmlSaveOptionsData": OoxmlSaveOptionsData,
    "PageSetup": PageSetup,
    "ParagraphLinkCollection": ParagraphLinkCollection,
    "ParagraphLinkCollectionResponse": ParagraphLinkCollectionResponse,
    "ParagraphResponse": ParagraphResponse,
    "ProtectionDataResponse": ProtectionDataResponse,
    "ProtectionResponse": ProtectionResponse,
    "ReplaceTextResponse": ReplaceTextResponse,
    "RevisionsModificationResponse": RevisionsModificationResponse,
    "RtfSaveOptionsData": RtfSaveOptionsData,
    "RunResponse": RunResponse,
    "Runs": Runs,
    "RunsResponse": RunsResponse,
    "SaveResponse": SaveResponse,
    "SearchResponse": SearchResponse,
    "SearchResultsCollection": SearchResultsCollection,
    "Section": Section,
    "SectionLink": SectionLink,
    "SectionLinkCollection": SectionLinkCollection,
    "SectionLinkCollectionResponse": SectionLinkCollectionResponse,
    "SectionPageSetupResponse": SectionPageSetupResponse,
    "SectionResponse": SectionResponse,
    "SplitDocumentResponse": SplitDocumentResponse,
    "StatDataResponse": StatDataResponse,
    "TableCellFormat": TableCellFormat,
    "TableCellFormatResponse": TableCellFormatResponse,
    "TableCellResponse": TableCellResponse,
    "TableLinkCollection": TableLinkCollection,
    "TableLinkCollectionResponse": TableLinkCollectionResponse,
    "TableProperties": TableProperties,
    "TablePropertiesResponse": TablePropertiesResponse,
    "TableResponse": TableResponse,
    "TableRowFormat": TableRowFormat,
    "TableRowFormatResponse": TableRowFormatResponse,
    "TableRowResponse": TableRowResponse,
    "TextItem": TextItem,
    "TextItems": TextItems,
    "TextItemsResponse": TextItemsResponse,
    "TextSaveOptionsData": TextSaveOptionsData,
    "WordMLSaveOptionsData": WordMLSaveOptionsData,
    "WordsApiErrorResponse": WordsApiErrorResponse,
    "WordsApiLink": WordsApiLink,
    "XamlFlowSaveOptionsData": XamlFlowSaveOptionsData,
    "Comment": Comment,
    "DrawingObjectLink": DrawingObjectLink,
    "EpubSaveOptionsData": EpubSaveOptionsData,
    "FieldLink": FieldLink,
    "FootnoteLink": FootnoteLink,
    "FormField": FormField,
    "HeaderFooter": HeaderFooter,
    "HtmlFixedSaveOptionsData": HtmlFixedSaveOptionsData,
    "ImageSaveOptionsData": ImageSaveOptionsData,
    "MhtmlSaveOptionsData": MhtmlSaveOptionsData,
    "OfficeMathLink": OfficeMathLink,
    "Paragraph": Paragraph,
    "ParagraphLink": ParagraphLink,
    "PclSaveOptionsData": PclSaveOptionsData,
    "PdfSaveOptionsData": PdfSaveOptionsData,
    "PsSaveOptionsData": PsSaveOptionsData,
    "RunLink": RunLink,
    "SvgSaveOptionsData": SvgSaveOptionsData,
    "SwfSaveOptionsData": SwfSaveOptionsData,
    "Table": Table,
    "TableCell": TableCell,
    "TableLink": TableLink,
    "TableRow": TableRow,
    "XamlFixedSaveOptionsData": XamlFixedSaveOptionsData,
    "XpsSaveOptionsData": XpsSaveOptionsData,
    "BmpSaveOptionsData": BmpSaveOptionsData,
    "DrawingObject": DrawingObject,
    "EmfSaveOptionsData": EmfSaveOptionsData,
    "Field": Field,
    "Footnote": Footnote,
    "FormFieldCheckbox": FormFieldCheckbox,
    "FormFieldDropDown": FormFieldDropDown,
    "FormFieldTextInput": FormFieldTextInput,
    "GifSaveOptionsData": GifSaveOptionsData,
    "JpegSaveOptionsData": JpegSaveOptionsData,
    "OfficeMathObject": OfficeMathObject,
    "PngSaveOptionsData": PngSaveOptionsData,
    "Run": Run,
    "TiffSaveOptionsData": TiffSaveOptionsData,
}

export {enumsMap, typeMap};


/**
* Request model for acceptAllRevisions operation.
*/
export class acceptAllRevisionsRequest{
    /**
    * The document name.
    */
    'name' : string;

    /**
    * Original document folder.
    */
    'folder' : string;

    /**
    * File storage, which have to be used.
    */
    'storage' : string;

    /**
    * Encoding that will be used to load an HTML (or TXT) document if the encoding is not specified in HTML.
    */
    'loadEncoding' : string;

    /**
    * Password for opening an encrypted document.
    */
    'password' : string;

    /**
    * Result name of the document after the operation. If this parameter is omitted then result of the operation will be saved as the source document.
    */
    'destFileName' : string;
}

/**
* Request model for createOrUpdateDocumentProperty operation.
*/
export class createOrUpdateDocumentPropertyRequest{
    /**
    * The document name.
    */
    'name' : string;

    /**
    * The property name.
    */
    'propertyName' : string;

    /**
    * The property with new value.
    */
    'property' : DocumentProperty;

    /**
    * Original document folder.
    */
    'folder' : string;

    /**
    * File storage, which have to be used.
    */
    'storage' : string;

    /**
    * Encoding that will be used to load an HTML (or TXT) document if the encoding is not specified in HTML.
    */
    'loadEncoding' : string;

    /**
    * Password for opening an encrypted document.
    */
    'password' : string;

    /**
    * Result name of the document after the operation. If this parameter is omitted then result of the operation will be saved as the source document.
    */
    'destFileName' : string;

    /**
    * Initials of the author to use for revisions.If you set this parameter and then make some changes to the document programmatically, save the document and later open the document in MS Word you will see these changes as revisions.
    */
    'revisionAuthor' : string;

    /**
    * The date and time to use for revisions.
    */
    'revisionDateTime' : string;
}

/**
* Request model for deleteBorder operation.
*/
export class deleteBorderRequest{
    /**
    * The document name.
    */
    'name' : string;

    /**
    * Path to node with border(node should be cell or row).
    */
    'nodePath' : string;

    /**
    * Object's index
    */
    'index' : number;

    /**
    * Original document folder.
    */
    'folder' : string;

    /**
    * File storage, which have to be used.
    */
    'storage' : string;

    /**
    * Encoding that will be used to load an HTML (or TXT) document if the encoding is not specified in HTML.
    */
    'loadEncoding' : string;

    /**
    * Password for opening an encrypted document.
    */
    'password' : string;

    /**
    * Result name of the document after the operation. If this parameter is omitted then result of the operation will be saved as the source document.
    */
    'destFileName' : string;

    /**
    * Initials of the author to use for revisions.If you set this parameter and then make some changes to the document programmatically, save the document and later open the document in MS Word you will see these changes as revisions.
    */
    'revisionAuthor' : string;

    /**
    * The date and time to use for revisions.
    */
    'revisionDateTime' : string;
}

/**
* Request model for deleteBorders operation.
*/
export class deleteBordersRequest{
    /**
    * The document name.
    */
    'name' : string;

    /**
    * Path to node with borders(node should be cell or row).
    */
    'nodePath' : string;

    /**
    * Original document folder.
    */
    'folder' : string;

    /**
    * File storage, which have to be used.
    */
    'storage' : string;

    /**
    * Encoding that will be used to load an HTML (or TXT) document if the encoding is not specified in HTML.
    */
    'loadEncoding' : string;

    /**
    * Password for opening an encrypted document.
    */
    'password' : string;

    /**
    * Result name of the document after the operation. If this parameter is omitted then result of the operation will be saved as the source document.
    */
    'destFileName' : string;

    /**
    * Initials of the author to use for revisions.If you set this parameter and then make some changes to the document programmatically, save the document and later open the document in MS Word you will see these changes as revisions.
    */
    'revisionAuthor' : string;

    /**
    * The date and time to use for revisions.
    */
    'revisionDateTime' : string;
}

/**
* Request model for deleteComment operation.
*/
export class deleteCommentRequest{
    /**
    * The file name.
    */
    'name' : string;

    /**
    * Comment index
    */
    'commentIndex' : number;

    /**
    * Original document folder.
    */
    'folder' : string;

    /**
    * File storage, which have to be used.
    */
    'storage' : string;

    /**
    * Encoding that will be used to load an HTML (or TXT) document if the encoding is not specified in HTML.
    */
    'loadEncoding' : string;

    /**
    * Password for opening an encrypted document.
    */
    'password' : string;

    /**
    * Result name of the document after the operation. If this parameter is omitted then result of the operation will be saved as the source document.
    */
    'destFileName' : string;

    /**
    * Initials of the author to use for revisions.If you set this parameter and then make some changes to the document programmatically, save the document and later open the document in MS Word you will see these changes as revisions.
    */
    'revisionAuthor' : string;

    /**
    * The date and time to use for revisions.
    */
    'revisionDateTime' : string;
}

/**
* Request model for deleteDocumentMacros operation.
*/
export class deleteDocumentMacrosRequest{
    /**
    * The file name.
    */
    'name' : string;

    /**
    * Original document folder.
    */
    'folder' : string;

    /**
    * File storage, which have to be used.
    */
    'storage' : string;

    /**
    * Encoding that will be used to load an HTML (or TXT) document if the encoding is not specified in HTML.
    */
    'loadEncoding' : string;

    /**
    * Password for opening an encrypted document.
    */
    'password' : string;

    /**
    * Result name of the document after the operation. If this parameter is omitted then result of the operation will be saved as the source document.
    */
    'destFileName' : string;

    /**
    * Initials of the author to use for revisions.If you set this parameter and then make some changes to the document programmatically, save the document and later open the document in MS Word you will see these changes as revisions.
    */
    'revisionAuthor' : string;

    /**
    * The date and time to use for revisions.
    */
    'revisionDateTime' : string;
}

/**
* Request model for deleteDocumentProperty operation.
*/
export class deleteDocumentPropertyRequest{
    /**
    * The document name.
    */
    'name' : string;

    /**
    * The property name.
    */
    'propertyName' : string;

    /**
    * Original document folder.
    */
    'folder' : string;

    /**
    * File storage, which have to be used.
    */
    'storage' : string;

    /**
    * Encoding that will be used to load an HTML (or TXT) document if the encoding is not specified in HTML.
    */
    'loadEncoding' : string;

    /**
    * Password for opening an encrypted document.
    */
    'password' : string;

    /**
    * Result name of the document after the operation. If this parameter is omitted then result of the operation will be saved as the source document.
    */
    'destFileName' : string;

    /**
    * Initials of the author to use for revisions.If you set this parameter and then make some changes to the document programmatically, save the document and later open the document in MS Word you will see these changes as revisions.
    */
    'revisionAuthor' : string;

    /**
    * The date and time to use for revisions.
    */
    'revisionDateTime' : string;
}

/**
* Request model for deleteDocumentWatermark operation.
*/
export class deleteDocumentWatermarkRequest{
    /**
    * The document name.
    */
    'name' : string;

    /**
    * Original document folder.
    */
    'folder' : string;

    /**
    * File storage, which have to be used.
    */
    'storage' : string;

    /**
    * Encoding that will be used to load an HTML (or TXT) document if the encoding is not specified in HTML.
    */
    'loadEncoding' : string;

    /**
    * Password for opening an encrypted document.
    */
    'password' : string;

    /**
    * Result name of the document after the operation. If this parameter is omitted then result of the operation will be saved as the source document.
    */
    'destFileName' : string;

    /**
    * Initials of the author to use for revisions.If you set this parameter and then make some changes to the document programmatically, save the document and later open the document in MS Word you will see these changes as revisions.
    */
    'revisionAuthor' : string;

    /**
    * The date and time to use for revisions.
    */
    'revisionDateTime' : string;
}

/**
* Request model for deleteDrawingObject operation.
*/
export class deleteDrawingObjectRequest{
    /**
    * The file name.
    */
    'name' : string;

    /**
    * Object's index
    */
    'index' : number;

    /**
    * Original document folder.
    */
    'folder' : string;

    /**
    * File storage, which have to be used.
    */
    'storage' : string;

    /**
    * Encoding that will be used to load an HTML (or TXT) document if the encoding is not specified in HTML.
    */
    'loadEncoding' : string;

    /**
    * Password for opening an encrypted document.
    */
    'password' : string;

    /**
    * Result name of the document after the operation. If this parameter is omitted then result of the operation will be saved as the source document.
    */
    'destFileName' : string;

    /**
    * Initials of the author to use for revisions.If you set this parameter and then make some changes to the document programmatically, save the document and later open the document in MS Word you will see these changes as revisions.
    */
    'revisionAuthor' : string;

    /**
    * The date and time to use for revisions.
    */
    'revisionDateTime' : string;

    /**
    * Path to node, which contains collection of drawing objects.
    */
    'nodePath' : string;
}

/**
* Request model for deleteField operation.
*/
export class deleteFieldRequest{
    /**
    * The file name.
    */
    'name' : string;

    /**
    * Object's index
    */
    'index' : number;

    /**
    * Original document folder.
    */
    'folder' : string;

    /**
    * File storage, which have to be used.
    */
    'storage' : string;

    /**
    * Encoding that will be used to load an HTML (or TXT) document if the encoding is not specified in HTML.
    */
    'loadEncoding' : string;

    /**
    * Password for opening an encrypted document.
    */
    'password' : string;

    /**
    * Result name of the document after the operation. If this parameter is omitted then result of the operation will be saved as the source document.
    */
    'destFileName' : string;

    /**
    * Initials of the author to use for revisions.If you set this parameter and then make some changes to the document programmatically, save the document and later open the document in MS Word you will see these changes as revisions.
    */
    'revisionAuthor' : string;

    /**
    * The date and time to use for revisions.
    */
    'revisionDateTime' : string;

    /**
    * Path to node, which contains collection of fields.
    */
    'nodePath' : string;
}

/**
* Request model for deleteFields operation.
*/
export class deleteFieldsRequest{
    /**
    * The file name.
    */
    'name' : string;

    /**
    * Original document folder.
    */
    'folder' : string;

    /**
    * File storage, which have to be used.
    */
    'storage' : string;

    /**
    * Encoding that will be used to load an HTML (or TXT) document if the encoding is not specified in HTML.
    */
    'loadEncoding' : string;

    /**
    * Password for opening an encrypted document.
    */
    'password' : string;

    /**
    * Result name of the document after the operation. If this parameter is omitted then result of the operation will be saved as the source document.
    */
    'destFileName' : string;

    /**
    * Initials of the author to use for revisions.If you set this parameter and then make some changes to the document programmatically, save the document and later open the document in MS Word you will see these changes as revisions.
    */
    'revisionAuthor' : string;

    /**
    * The date and time to use for revisions.
    */
    'revisionDateTime' : string;

    /**
    * Path to node, which contains collection of fields.
    */
    'nodePath' : string;
}

/**
* Request model for deleteFootnote operation.
*/
export class deleteFootnoteRequest{
    /**
    * The file name.
    */
    'name' : string;

    /**
    * Object's index
    */
    'index' : number;

    /**
    * Original document folder.
    */
    'folder' : string;

    /**
    * File storage, which have to be used.
    */
    'storage' : string;

    /**
    * Encoding that will be used to load an HTML (or TXT) document if the encoding is not specified in HTML.
    */
    'loadEncoding' : string;

    /**
    * Password for opening an encrypted document.
    */
    'password' : string;

    /**
    * Result name of the document after the operation. If this parameter is omitted then result of the operation will be saved as the source document.
    */
    'destFileName' : string;

    /**
    * Initials of the author to use for revisions.If you set this parameter and then make some changes to the document programmatically, save the document and later open the document in MS Word you will see these changes as revisions.
    */
    'revisionAuthor' : string;

    /**
    * The date and time to use for revisions.
    */
    'revisionDateTime' : string;

    /**
    * Path to node, which contains collection of footnotes.
    */
    'nodePath' : string;
}

/**
* Request model for deleteFormField operation.
*/
export class deleteFormFieldRequest{
    /**
    * The document name.
    */
    'name' : string;

    /**
    * Object's index
    */
    'index' : number;

    /**
    * Original document folder.
    */
    'folder' : string;

    /**
    * File storage, which have to be used.
    */
    'storage' : string;

    /**
    * Encoding that will be used to load an HTML (or TXT) document if the encoding is not specified in HTML.
    */
    'loadEncoding' : string;

    /**
    * Password for opening an encrypted document.
    */
    'password' : string;

    /**
    * Result name of the document after the operation. If this parameter is omitted then result of the operation will be saved as the source document.
    */
    'destFileName' : string;

    /**
    * Initials of the author to use for revisions.If you set this parameter and then make some changes to the document programmatically, save the document and later open the document in MS Word you will see these changes as revisions.
    */
    'revisionAuthor' : string;

    /**
    * The date and time to use for revisions.
    */
    'revisionDateTime' : string;

    /**
    * Path to node that contains collection of formfields.
    */
    'nodePath' : string;
}

/**
* Request model for deleteHeaderFooter operation.
*/
export class deleteHeaderFooterRequest{
    /**
    * The document name.
    */
    'name' : string;

    /**
    * Object's index
    */
    'index' : number;

    /**
    * Original document folder.
    */
    'folder' : string;

    /**
    * File storage, which have to be used.
    */
    'storage' : string;

    /**
    * Encoding that will be used to load an HTML (or TXT) document if the encoding is not specified in HTML.
    */
    'loadEncoding' : string;

    /**
    * Password for opening an encrypted document.
    */
    'password' : string;

    /**
    * Result name of the document after the operation. If this parameter is omitted then result of the operation will be saved as the source document.
    */
    'destFileName' : string;

    /**
    * Initials of the author to use for revisions.If you set this parameter and then make some changes to the document programmatically, save the document and later open the document in MS Word you will see these changes as revisions.
    */
    'revisionAuthor' : string;

    /**
    * The date and time to use for revisions.
    */
    'revisionDateTime' : string;

    /**
    * Path to parent section.
    */
    'sectionPath' : string;
}

/**
* Request model for deleteHeadersFooters operation.
*/
export class deleteHeadersFootersRequest{
    /**
    * The document name.
    */
    'name' : string;

    /**
    * Original document folder.
    */
    'folder' : string;

    /**
    * File storage, which have to be used.
    */
    'storage' : string;

    /**
    * Encoding that will be used to load an HTML (or TXT) document if the encoding is not specified in HTML.
    */
    'loadEncoding' : string;

    /**
    * Password for opening an encrypted document.
    */
    'password' : string;

    /**
    * Result name of the document after the operation. If this parameter is omitted then result of the operation will be saved as the source document.
    */
    'destFileName' : string;

    /**
    * Initials of the author to use for revisions.If you set this parameter and then make some changes to the document programmatically, save the document and later open the document in MS Word you will see these changes as revisions.
    */
    'revisionAuthor' : string;

    /**
    * The date and time to use for revisions.
    */
    'revisionDateTime' : string;

    /**
    * Path to parent section.
    */
    'sectionPath' : string;

    /**
    * List of types of headers and footers.
    */
    'headersFootersTypes' : string;
}

/**
* Request model for deleteOfficeMathObject operation.
*/
export class deleteOfficeMathObjectRequest{
    /**
    * The file name.
    */
    'name' : string;

    /**
    * Object's index
    */
    'index' : number;

    /**
    * Original document folder.
    */
    'folder' : string;

    /**
    * File storage, which have to be used.
    */
    'storage' : string;

    /**
    * Encoding that will be used to load an HTML (or TXT) document if the encoding is not specified in HTML.
    */
    'loadEncoding' : string;

    /**
    * Password for opening an encrypted document.
    */
    'password' : string;

    /**
    * Result name of the document after the operation. If this parameter is omitted then result of the operation will be saved as the source document.
    */
    'destFileName' : string;

    /**
    * Initials of the author to use for revisions.If you set this parameter and then make some changes to the document programmatically, save the document and later open the document in MS Word you will see these changes as revisions.
    */
    'revisionAuthor' : string;

    /**
    * The date and time to use for revisions.
    */
    'revisionDateTime' : string;

    /**
    * Path to node, which contains collection of OfficeMath objects.
    */
    'nodePath' : string;
}

/**
* Request model for deleteParagraph operation.
*/
export class deleteParagraphRequest{
    /**
    * The file name.
    */
    'name' : string;

    /**
    * Object's index
    */
    'index' : number;

    /**
    * Original document folder.
    */
    'folder' : string;

    /**
    * File storage, which have to be used.
    */
    'storage' : string;

    /**
    * Encoding that will be used to load an HTML (or TXT) document if the encoding is not specified in HTML.
    */
    'loadEncoding' : string;

    /**
    * Password for opening an encrypted document.
    */
    'password' : string;

    /**
    * Result name of the document after the operation. If this parameter is omitted then result of the operation will be saved as the source document.
    */
    'destFileName' : string;

    /**
    * Initials of the author to use for revisions.If you set this parameter and then make some changes to the document programmatically, save the document and later open the document in MS Word you will see these changes as revisions.
    */
    'revisionAuthor' : string;

    /**
    * The date and time to use for revisions.
    */
    'revisionDateTime' : string;

    /**
    * Path to node which contains paragraphs.
    */
    'nodePath' : string;
}

/**
* Request model for deleteRun operation.
*/
export class deleteRunRequest{
    /**
    * The file name.
    */
    'name' : string;

    /**
    * Path to parent paragraph.
    */
    'paragraphPath' : string;

    /**
    * Object's index
    */
    'index' : number;

    /**
    * Original document folder.
    */
    'folder' : string;

    /**
    * File storage, which have to be used.
    */
    'storage' : string;

    /**
    * Encoding that will be used to load an HTML (or TXT) document if the encoding is not specified in HTML.
    */
    'loadEncoding' : string;

    /**
    * Password for opening an encrypted document.
    */
    'password' : string;

    /**
    * Result name of the document after the operation. If this parameter is omitted then result of the operation will be saved as the source document.
    */
    'destFileName' : string;

    /**
    * Initials of the author to use for revisions.If you set this parameter and then make some changes to the document programmatically, save the document and later open the document in MS Word you will see these changes as revisions.
    */
    'revisionAuthor' : string;

    /**
    * The date and time to use for revisions.
    */
    'revisionDateTime' : string;
}

/**
* Request model for deleteTable operation.
*/
export class deleteTableRequest{
    /**
    * The document name.
    */
    'name' : string;

    /**
    * Object's index
    */
    'index' : number;

    /**
    * Original document folder.
    */
    'folder' : string;

    /**
    * File storage, which have to be used.
    */
    'storage' : string;

    /**
    * Encoding that will be used to load an HTML (or TXT) document if the encoding is not specified in HTML.
    */
    'loadEncoding' : string;

    /**
    * Password for opening an encrypted document.
    */
    'password' : string;

    /**
    * Result name of the document after the operation. If this parameter is omitted then result of the operation will be saved as the source document.
    */
    'destFileName' : string;

    /**
    * Initials of the author to use for revisions.If you set this parameter and then make some changes to the document programmatically, save the document and later open the document in MS Word you will see these changes as revisions.
    */
    'revisionAuthor' : string;

    /**
    * The date and time to use for revisions.
    */
    'revisionDateTime' : string;

    /**
    * Path to node, which contains tables.
    */
    'nodePath' : string;
}

/**
* Request model for deleteTableCell operation.
*/
export class deleteTableCellRequest{
    /**
    * The document name.
    */
    'name' : string;

    /**
    * Path to table row.
    */
    'tableRowPath' : string;

    /**
    * Object's index
    */
    'index' : number;

    /**
    * Original document folder.
    */
    'folder' : string;

    /**
    * File storage, which have to be used.
    */
    'storage' : string;

    /**
    * Encoding that will be used to load an HTML (or TXT) document if the encoding is not specified in HTML.
    */
    'loadEncoding' : string;

    /**
    * Password for opening an encrypted document.
    */
    'password' : string;

    /**
    * Result name of the document after the operation. If this parameter is omitted then result of the operation will be saved as the source document.
    */
    'destFileName' : string;

    /**
    * Initials of the author to use for revisions.If you set this parameter and then make some changes to the document programmatically, save the document and later open the document in MS Word you will see these changes as revisions.
    */
    'revisionAuthor' : string;

    /**
    * The date and time to use for revisions.
    */
    'revisionDateTime' : string;
}

/**
* Request model for deleteTableRow operation.
*/
export class deleteTableRowRequest{
    /**
    * The document name.
    */
    'name' : string;

    /**
    * Path to table.
    */
    'tablePath' : string;

    /**
    * Object's index
    */
    'index' : number;

    /**
    * Original document folder.
    */
    'folder' : string;

    /**
    * File storage, which have to be used.
    */
    'storage' : string;

    /**
    * Encoding that will be used to load an HTML (or TXT) document if the encoding is not specified in HTML.
    */
    'loadEncoding' : string;

    /**
    * Password for opening an encrypted document.
    */
    'password' : string;

    /**
    * Result name of the document after the operation. If this parameter is omitted then result of the operation will be saved as the source document.
    */
    'destFileName' : string;

    /**
    * Initials of the author to use for revisions.If you set this parameter and then make some changes to the document programmatically, save the document and later open the document in MS Word you will see these changes as revisions.
    */
    'revisionAuthor' : string;

    /**
    * The date and time to use for revisions.
    */
    'revisionDateTime' : string;
}

/**
* Request model for deleteUnprotectDocument operation.
*/
export class deleteUnprotectDocumentRequest{
    /**
    * The document name.
    */
    'name' : string;

    /**
    * with protection settings.            
    */
    'protectionRequest' : ProtectionRequest;

    /**
    * Original document folder.
    */
    'folder' : string;

    /**
    * File storage, which have to be used.
    */
    'storage' : string;

    /**
    * Encoding that will be used to load an HTML (or TXT) document if the encoding is not specified in HTML.
    */
    'loadEncoding' : string;

    /**
    * Password for opening an encrypted document.
    */
    'password' : string;

    /**
    * Result name of the document after the operation. If this parameter is omitted then result of the operation will be saved as the source document.
    */
    'destFileName' : string;
}

/**
* Request model for getBorder operation.
*/
export class getBorderRequest{
    /**
    * The document name.
    */
    'name' : string;

    /**
    * Path to node with border(node should be cell or row).
    */
    'nodePath' : string;

    /**
    * Object's index
    */
    'index' : number;

    /**
    * Original document folder.
    */
    'folder' : string;

    /**
    * File storage, which have to be used.
    */
    'storage' : string;

    /**
    * Encoding that will be used to load an HTML (or TXT) document if the encoding is not specified in HTML.
    */
    'loadEncoding' : string;

    /**
    * Password for opening an encrypted document.
    */
    'password' : string;
}

/**
* Request model for getBorders operation.
*/
export class getBordersRequest{
    /**
    * The document name.
    */
    'name' : string;

    /**
    * Path to node with borders(node should be cell or row).
    */
    'nodePath' : string;

    /**
    * Original document folder.
    */
    'folder' : string;

    /**
    * File storage, which have to be used.
    */
    'storage' : string;

    /**
    * Encoding that will be used to load an HTML (or TXT) document if the encoding is not specified in HTML.
    */
    'loadEncoding' : string;

    /**
    * Password for opening an encrypted document.
    */
    'password' : string;
}

/**
* Request model for getComment operation.
*/
export class getCommentRequest{
    /**
    * The file name.
    */
    'name' : string;

    /**
    * Comment index
    */
    'commentIndex' : number;

    /**
    * Original document folder.
    */
    'folder' : string;

    /**
    * File storage, which have to be used.
    */
    'storage' : string;

    /**
    * Encoding that will be used to load an HTML (or TXT) document if the encoding is not specified in HTML.
    */
    'loadEncoding' : string;

    /**
    * Password for opening an encrypted document.
    */
    'password' : string;
}

/**
* Request model for getComments operation.
*/
export class getCommentsRequest{
    /**
    * The file name.
    */
    'name' : string;

    /**
    * Original document folder.
    */
    'folder' : string;

    /**
    * File storage, which have to be used.
    */
    'storage' : string;

    /**
    * Encoding that will be used to load an HTML (or TXT) document if the encoding is not specified in HTML.
    */
    'loadEncoding' : string;

    /**
    * Password for opening an encrypted document.
    */
    'password' : string;
}

/**
* Request model for getDocument operation.
*/
export class getDocumentRequest{
    /**
    * The file name.
    */
    'documentName' : string;

    /**
    * Original document folder.
    */
    'folder' : string;

    /**
    * File storage, which have to be used.
    */
    'storage' : string;

    /**
    * Encoding that will be used to load an HTML (or TXT) document if the encoding is not specified in HTML.
    */
    'loadEncoding' : string;

    /**
    * Password for opening an encrypted document.
    */
    'password' : string;
}

/**
* Request model for getDocumentBookmarkByName operation.
*/
export class getDocumentBookmarkByNameRequest{
    /**
    * The document name.
    */
    'name' : string;

    /**
    * The bookmark name.
    */
    'bookmarkName' : string;

    /**
    * Original document folder.
    */
    'folder' : string;

    /**
    * File storage, which have to be used.
    */
    'storage' : string;

    /**
    * Encoding that will be used to load an HTML (or TXT) document if the encoding is not specified in HTML.
    */
    'loadEncoding' : string;

    /**
    * Password for opening an encrypted document.
    */
    'password' : string;
}

/**
* Request model for getDocumentBookmarks operation.
*/
export class getDocumentBookmarksRequest{
    /**
    * The document name.
    */
    'name' : string;

    /**
    * Original document folder.
    */
    'folder' : string;

    /**
    * File storage, which have to be used.
    */
    'storage' : string;

    /**
    * Encoding that will be used to load an HTML (or TXT) document if the encoding is not specified in HTML.
    */
    'loadEncoding' : string;

    /**
    * Password for opening an encrypted document.
    */
    'password' : string;
}

/**
* Request model for getDocumentDrawingObjectByIndex operation.
*/
export class getDocumentDrawingObjectByIndexRequest{
    /**
    * The document name.
    */
    'name' : string;

    /**
    * Object's index
    */
    'index' : number;

    /**
    * Original document folder.
    */
    'folder' : string;

    /**
    * File storage, which have to be used.
    */
    'storage' : string;

    /**
    * Encoding that will be used to load an HTML (or TXT) document if the encoding is not specified in HTML.
    */
    'loadEncoding' : string;

    /**
    * Password for opening an encrypted document.
    */
    'password' : string;

    /**
    * Path to node, which contains collection of drawing objects.
    */
    'nodePath' : string;
}

/**
* Request model for getDocumentDrawingObjectImageData operation.
*/
export class getDocumentDrawingObjectImageDataRequest{
    /**
    * The document name.
    */
    'name' : string;

    /**
    * Object's index
    */
    'index' : number;

    /**
    * Original document folder.
    */
    'folder' : string;

    /**
    * File storage, which have to be used.
    */
    'storage' : string;

    /**
    * Encoding that will be used to load an HTML (or TXT) document if the encoding is not specified in HTML.
    */
    'loadEncoding' : string;

    /**
    * Password for opening an encrypted document.
    */
    'password' : string;

    /**
    * Path to node, which contains collection of drawing objects.
    */
    'nodePath' : string;
}

/**
* Request model for getDocumentDrawingObjectOleData operation.
*/
export class getDocumentDrawingObjectOleDataRequest{
    /**
    * The document name.
    */
    'name' : string;

    /**
    * Object's index
    */
    'index' : number;

    /**
    * Original document folder.
    */
    'folder' : string;

    /**
    * File storage, which have to be used.
    */
    'storage' : string;

    /**
    * Encoding that will be used to load an HTML (or TXT) document if the encoding is not specified in HTML.
    */
    'loadEncoding' : string;

    /**
    * Password for opening an encrypted document.
    */
    'password' : string;

    /**
    * Path to node, which contains collection of drawing objects.
    */
    'nodePath' : string;
}

/**
* Request model for getDocumentDrawingObjects operation.
*/
export class getDocumentDrawingObjectsRequest{
    /**
    * The document name.
    */
    'name' : string;

    /**
    * Original document folder.
    */
    'folder' : string;

    /**
    * File storage, which have to be used.
    */
    'storage' : string;

    /**
    * Encoding that will be used to load an HTML (or TXT) document if the encoding is not specified in HTML.
    */
    'loadEncoding' : string;

    /**
    * Password for opening an encrypted document.
    */
    'password' : string;

    /**
    * Path to node, which contains collection of drawing objects.
    */
    'nodePath' : string;
}

/**
* Request model for getDocumentFieldNames operation.
*/
export class getDocumentFieldNamesRequest{
    /**
    * The document name.
    */
    'name' : string;

    /**
    * Original document folder.
    */
    'folder' : string;

    /**
    * File storage, which have to be used.
    */
    'storage' : string;

    /**
    * Encoding that will be used to load an HTML (or TXT) document if the encoding is not specified in HTML.
    */
    'loadEncoding' : string;

    /**
    * Password for opening an encrypted document.
    */
    'password' : string;

    /**
    * If true, result includes \"mustache\" field names.
    */
    'useNonMergeFields' : boolean;
}

/**
* Request model for getDocumentHyperlinkByIndex operation.
*/
export class getDocumentHyperlinkByIndexRequest{
    /**
    * The document name.
    */
    'name' : string;

    /**
    * The hyperlink index.
    */
    'hyperlinkIndex' : number;

    /**
    * Original document folder.
    */
    'folder' : string;

    /**
    * File storage, which have to be used.
    */
    'storage' : string;

    /**
    * Encoding that will be used to load an HTML (or TXT) document if the encoding is not specified in HTML.
    */
    'loadEncoding' : string;

    /**
    * Password for opening an encrypted document.
    */
    'password' : string;
}

/**
* Request model for getDocumentHyperlinks operation.
*/
export class getDocumentHyperlinksRequest{
    /**
    * The document name.
    */
    'name' : string;

    /**
    * Original document folder.
    */
    'folder' : string;

    /**
    * File storage, which have to be used.
    */
    'storage' : string;

    /**
    * Encoding that will be used to load an HTML (or TXT) document if the encoding is not specified in HTML.
    */
    'loadEncoding' : string;

    /**
    * Password for opening an encrypted document.
    */
    'password' : string;
}

/**
* Request model for getDocumentParagraph operation.
*/
export class getDocumentParagraphRequest{
    /**
    * The document name.
    */
    'name' : string;

    /**
    * Object's index
    */
    'index' : number;

    /**
    * Original document folder.
    */
    'folder' : string;

    /**
    * File storage, which have to be used.
    */
    'storage' : string;

    /**
    * Encoding that will be used to load an HTML (or TXT) document if the encoding is not specified in HTML.
    */
    'loadEncoding' : string;

    /**
    * Password for opening an encrypted document.
    */
    'password' : string;

    /**
    * Path to node which contains paragraphs.
    */
    'nodePath' : string;
}

/**
* Request model for getDocumentParagraphRun operation.
*/
export class getDocumentParagraphRunRequest{
    /**
    * The document name.
    */
    'name' : string;

    /**
    * Path to parent paragraph.
    */
    'paragraphPath' : string;

    /**
    * Object's index
    */
    'index' : number;

    /**
    * Original document folder.
    */
    'folder' : string;

    /**
    * File storage, which have to be used.
    */
    'storage' : string;

    /**
    * Encoding that will be used to load an HTML (or TXT) document if the encoding is not specified in HTML.
    */
    'loadEncoding' : string;

    /**
    * Password for opening an encrypted document.
    */
    'password' : string;
}

/**
* Request model for getDocumentParagraphRunFont operation.
*/
export class getDocumentParagraphRunFontRequest{
    /**
    * The document name.
    */
    'name' : string;

    /**
    * Path to parent paragraph.
    */
    'paragraphPath' : string;

    /**
    * Object's index
    */
    'index' : number;

    /**
    * Original document folder.
    */
    'folder' : string;

    /**
    * File storage, which have to be used.
    */
    'storage' : string;

    /**
    * Encoding that will be used to load an HTML (or TXT) document if the encoding is not specified in HTML.
    */
    'loadEncoding' : string;

    /**
    * Password for opening an encrypted document.
    */
    'password' : string;
}

/**
* Request model for getDocumentParagraphRuns operation.
*/
export class getDocumentParagraphRunsRequest{
    /**
    * The document name.
    */
    'name' : string;

    /**
    * Path to parent paragraph.
    */
    'paragraphPath' : string;

    /**
    * Original document folder.
    */
    'folder' : string;

    /**
    * File storage, which have to be used.
    */
    'storage' : string;

    /**
    * Encoding that will be used to load an HTML (or TXT) document if the encoding is not specified in HTML.
    */
    'loadEncoding' : string;

    /**
    * Password for opening an encrypted document.
    */
    'password' : string;
}

/**
* Request model for getDocumentParagraphs operation.
*/
export class getDocumentParagraphsRequest{
    /**
    * The document name.
    */
    'name' : string;

    /**
    * Original document folder.
    */
    'folder' : string;

    /**
    * File storage, which have to be used.
    */
    'storage' : string;

    /**
    * Encoding that will be used to load an HTML (or TXT) document if the encoding is not specified in HTML.
    */
    'loadEncoding' : string;

    /**
    * Password for opening an encrypted document.
    */
    'password' : string;

    /**
    * Path to node which contains paragraphs.
    */
    'nodePath' : string;
}

/**
* Request model for getDocumentProperties operation.
*/
export class getDocumentPropertiesRequest{
    /**
    * The document's name.
    */
    'name' : string;

    /**
    * Original document folder.
    */
    'folder' : string;

    /**
    * File storage, which have to be used.
    */
    'storage' : string;

    /**
    * Encoding that will be used to load an HTML (or TXT) document if the encoding is not specified in HTML.
    */
    'loadEncoding' : string;

    /**
    * Password for opening an encrypted document.
    */
    'password' : string;
}

/**
* Request model for getDocumentProperty operation.
*/
export class getDocumentPropertyRequest{
    /**
    * The document name.
    */
    'name' : string;

    /**
    * The property name.
    */
    'propertyName' : string;

    /**
    * Original document folder.
    */
    'folder' : string;

    /**
    * File storage, which have to be used.
    */
    'storage' : string;

    /**
    * Encoding that will be used to load an HTML (or TXT) document if the encoding is not specified in HTML.
    */
    'loadEncoding' : string;

    /**
    * Password for opening an encrypted document.
    */
    'password' : string;
}

/**
* Request model for getDocumentProtection operation.
*/
export class getDocumentProtectionRequest{
    /**
    * The document name.
    */
    'name' : string;

    /**
    * Original document folder.
    */
    'folder' : string;

    /**
    * File storage, which have to be used.
    */
    'storage' : string;

    /**
    * Encoding that will be used to load an HTML (or TXT) document if the encoding is not specified in HTML.
    */
    'loadEncoding' : string;

    /**
    * Password for opening an encrypted document.
    */
    'password' : string;
}

/**
* Request model for getDocumentStatistics operation.
*/
export class getDocumentStatisticsRequest{
    /**
    * The document name.
    */
    'name' : string;

    /**
    * Original document folder.
    */
    'folder' : string;

    /**
    * File storage, which have to be used.
    */
    'storage' : string;

    /**
    * Encoding that will be used to load an HTML (or TXT) document if the encoding is not specified in HTML.
    */
    'loadEncoding' : string;

    /**
    * Password for opening an encrypted document.
    */
    'password' : string;

    /**
    * Support including/excluding comments from the WordCount. Default value is \"true\".
    */
    'includeComments' : boolean;

    /**
    * Support including/excluding footnotes from the WordCount. Default value is \"false\".
    */
    'includeFootnotes' : boolean;

    /**
    * Support including/excluding shape's text from the WordCount. Default value is \"false\"
    */
    'includeTextInShapes' : boolean;
}

/**
* Request model for getDocumentTextItems operation.
*/
export class getDocumentTextItemsRequest{
    /**
    * The document name.
    */
    'name' : string;

    /**
    * Original document folder.
    */
    'folder' : string;

    /**
    * File storage, which have to be used.
    */
    'storage' : string;

    /**
    * Encoding that will be used to load an HTML (or TXT) document if the encoding is not specified in HTML.
    */
    'loadEncoding' : string;

    /**
    * Password for opening an encrypted document.
    */
    'password' : string;
}

/**
* Request model for getDocumentWithFormat operation.
*/
export class getDocumentWithFormatRequest{
    /**
    * The file name.
    */
    'name' : string;

    /**
    * The destination format.
    */
    'format' : string;

    /**
    * Original document folder.
    */
    'folder' : string;

    /**
    * File storage, which have to be used.
    */
    'storage' : string;

    /**
    * Encoding that will be used to load an HTML (or TXT) document if the encoding is not specified in HTML.
    */
    'loadEncoding' : string;

    /**
    * Password for opening an encrypted document.
    */
    'password' : string;

    /**
    * Path to save result
    */
    'outPath' : string;

    /**
    * Folder in filestorage with custom fonts.
    */
    'fontsLocation' : string;
}

/**
* Request model for getField operation.
*/
export class getFieldRequest{
    /**
    * The file name.
    */
    'name' : string;

    /**
    * Object's index
    */
    'index' : number;

    /**
    * Original document folder.
    */
    'folder' : string;

    /**
    * File storage, which have to be used.
    */
    'storage' : string;

    /**
    * Encoding that will be used to load an HTML (or TXT) document if the encoding is not specified in HTML.
    */
    'loadEncoding' : string;

    /**
    * Password for opening an encrypted document.
    */
    'password' : string;

    /**
    * Path to node, which contains collection of fields.
    */
    'nodePath' : string;
}

/**
* Request model for getFields operation.
*/
export class getFieldsRequest{
    /**
    * The file name.
    */
    'name' : string;

    /**
    * Original document folder.
    */
    'folder' : string;

    /**
    * File storage, which have to be used.
    */
    'storage' : string;

    /**
    * Encoding that will be used to load an HTML (or TXT) document if the encoding is not specified in HTML.
    */
    'loadEncoding' : string;

    /**
    * Password for opening an encrypted document.
    */
    'password' : string;

    /**
    * Path to node, which contains collection of fields.
    */
    'nodePath' : string;
}

/**
* Request model for getFootnote operation.
*/
export class getFootnoteRequest{
    /**
    * The document name.
    */
    'name' : string;

    /**
    * Object's index
    */
    'index' : number;

    /**
    * Original document folder.
    */
    'folder' : string;

    /**
    * File storage, which have to be used.
    */
    'storage' : string;

    /**
    * Encoding that will be used to load an HTML (or TXT) document if the encoding is not specified in HTML.
    */
    'loadEncoding' : string;

    /**
    * Password for opening an encrypted document.
    */
    'password' : string;

    /**
    * Path to node, which contains collection of footnotes.
    */
    'nodePath' : string;
}

/**
* Request model for getFootnotes operation.
*/
export class getFootnotesRequest{
    /**
    * The file name.
    */
    'name' : string;

    /**
    * Original document folder.
    */
    'folder' : string;

    /**
    * File storage, which have to be used.
    */
    'storage' : string;

    /**
    * Encoding that will be used to load an HTML (or TXT) document if the encoding is not specified in HTML.
    */
    'loadEncoding' : string;

    /**
    * Password for opening an encrypted document.
    */
    'password' : string;

    /**
    * Path to node, which contains collection of footnotes.
    */
    'nodePath' : string;
}

/**
* Request model for getFormField operation.
*/
export class getFormFieldRequest{
    /**
    * The document name.
    */
    'name' : string;

    /**
    * Object's index
    */
    'index' : number;

    /**
    * Original document folder.
    */
    'folder' : string;

    /**
    * File storage, which have to be used.
    */
    'storage' : string;

    /**
    * Encoding that will be used to load an HTML (or TXT) document if the encoding is not specified in HTML.
    */
    'loadEncoding' : string;

    /**
    * Password for opening an encrypted document.
    */
    'password' : string;

    /**
    * Path to node that contains collection of formfields.
    */
    'nodePath' : string;
}

/**
* Request model for getFormFields operation.
*/
export class getFormFieldsRequest{
    /**
    * The file name.
    */
    'name' : string;

    /**
    * Original document folder.
    */
    'folder' : string;

    /**
    * File storage, which have to be used.
    */
    'storage' : string;

    /**
    * Encoding that will be used to load an HTML (or TXT) document if the encoding is not specified in HTML.
    */
    'loadEncoding' : string;

    /**
    * Password for opening an encrypted document.
    */
    'password' : string;

    /**
    * Path to node containing collection of form fields.
    */
    'nodePath' : string;
}

/**
* Request model for getHeaderFooter operation.
*/
export class getHeaderFooterRequest{
    /**
    * The document name.
    */
    'name' : string;

    /**
    * Header/footer index.
    */
    'headerFooterIndex' : number;

    /**
    * Original document folder.
    */
    'folder' : string;

    /**
    * File storage, which have to be used.
    */
    'storage' : string;

    /**
    * Encoding that will be used to load an HTML (or TXT) document if the encoding is not specified in HTML.
    */
    'loadEncoding' : string;

    /**
    * Password for opening an encrypted document.
    */
    'password' : string;

    /**
    * List of types of headers and footers.
    */
    'filterByType' : string;
}

/**
* Request model for getHeaderFooterOfSection operation.
*/
export class getHeaderFooterOfSectionRequest{
    /**
    * The document name.
    */
    'name' : string;

    /**
    * Header/footer index.
    */
    'headerFooterIndex' : number;

    /**
    * Section index.
    */
    'sectionIndex' : number;

    /**
    * Original document folder.
    */
    'folder' : string;

    /**
    * File storage, which have to be used.
    */
    'storage' : string;

    /**
    * Encoding that will be used to load an HTML (or TXT) document if the encoding is not specified in HTML.
    */
    'loadEncoding' : string;

    /**
    * Password for opening an encrypted document.
    */
    'password' : string;

    /**
    * List of types of headers and footers.
    */
    'filterByType' : string;
}

/**
* Request model for getHeaderFooters operation.
*/
export class getHeaderFootersRequest{
    /**
    * The document name.
    */
    'name' : string;

    /**
    * Original document folder.
    */
    'folder' : string;

    /**
    * File storage, which have to be used.
    */
    'storage' : string;

    /**
    * Encoding that will be used to load an HTML (or TXT) document if the encoding is not specified in HTML.
    */
    'loadEncoding' : string;

    /**
    * Password for opening an encrypted document.
    */
    'password' : string;

    /**
    * Path to parent section.
    */
    'sectionPath' : string;

    /**
    * List of types of headers and footers.
    */
    'filterByType' : string;
}

/**
* Request model for getOfficeMathObject operation.
*/
export class getOfficeMathObjectRequest{
    /**
    * The document name.
    */
    'name' : string;

    /**
    * Object's index
    */
    'index' : number;

    /**
    * Original document folder.
    */
    'folder' : string;

    /**
    * File storage, which have to be used.
    */
    'storage' : string;

    /**
    * Encoding that will be used to load an HTML (or TXT) document if the encoding is not specified in HTML.
    */
    'loadEncoding' : string;

    /**
    * Password for opening an encrypted document.
    */
    'password' : string;

    /**
    * Path to node, which contains collection of OfficeMath objects.
    */
    'nodePath' : string;
}

/**
* Request model for getOfficeMathObjects operation.
*/
export class getOfficeMathObjectsRequest{
    /**
    * The file name.
    */
    'name' : string;

    /**
    * Original document folder.
    */
    'folder' : string;

    /**
    * File storage, which have to be used.
    */
    'storage' : string;

    /**
    * Encoding that will be used to load an HTML (or TXT) document if the encoding is not specified in HTML.
    */
    'loadEncoding' : string;

    /**
    * Password for opening an encrypted document.
    */
    'password' : string;

    /**
    * Path to node, which contains collection of OfficeMath objects.
    */
    'nodePath' : string;
}

/**
* Request model for getSection operation.
*/
export class getSectionRequest{
    /**
    * The document name.
    */
    'name' : string;

    /**
    * Section index
    */
    'sectionIndex' : number;

    /**
    * Original document folder.
    */
    'folder' : string;

    /**
    * File storage, which have to be used.
    */
    'storage' : string;

    /**
    * Encoding that will be used to load an HTML (or TXT) document if the encoding is not specified in HTML.
    */
    'loadEncoding' : string;

    /**
    * Password for opening an encrypted document.
    */
    'password' : string;
}

/**
* Request model for getSectionPageSetup operation.
*/
export class getSectionPageSetupRequest{
    /**
    * The document name.
    */
    'name' : string;

    /**
    * Section index
    */
    'sectionIndex' : number;

    /**
    * Original document folder.
    */
    'folder' : string;

    /**
    * File storage, which have to be used.
    */
    'storage' : string;

    /**
    * Encoding that will be used to load an HTML (or TXT) document if the encoding is not specified in HTML.
    */
    'loadEncoding' : string;

    /**
    * Password for opening an encrypted document.
    */
    'password' : string;
}

/**
* Request model for getSections operation.
*/
export class getSectionsRequest{
    /**
    * The document name.
    */
    'name' : string;

    /**
    * Original document folder.
    */
    'folder' : string;

    /**
    * File storage, which have to be used.
    */
    'storage' : string;

    /**
    * Encoding that will be used to load an HTML (or TXT) document if the encoding is not specified in HTML.
    */
    'loadEncoding' : string;

    /**
    * Password for opening an encrypted document.
    */
    'password' : string;
}

/**
* Request model for getTable operation.
*/
export class getTableRequest{
    /**
    * The document name.
    */
    'name' : string;

    /**
    * Object's index
    */
    'index' : number;

    /**
    * Original document folder.
    */
    'folder' : string;

    /**
    * File storage, which have to be used.
    */
    'storage' : string;

    /**
    * Encoding that will be used to load an HTML (or TXT) document if the encoding is not specified in HTML.
    */
    'loadEncoding' : string;

    /**
    * Password for opening an encrypted document.
    */
    'password' : string;

    /**
    * Path to node, which contains tables.
    */
    'nodePath' : string;
}

/**
* Request model for getTableCell operation.
*/
export class getTableCellRequest{
    /**
    * The document name.
    */
    'name' : string;

    /**
    * Path to table row.
    */
    'tableRowPath' : string;

    /**
    * Object's index
    */
    'index' : number;

    /**
    * Original document folder.
    */
    'folder' : string;

    /**
    * File storage, which have to be used.
    */
    'storage' : string;

    /**
    * Encoding that will be used to load an HTML (or TXT) document if the encoding is not specified in HTML.
    */
    'loadEncoding' : string;

    /**
    * Password for opening an encrypted document.
    */
    'password' : string;
}

/**
* Request model for getTableCellFormat operation.
*/
export class getTableCellFormatRequest{
    /**
    * The document name.
    */
    'name' : string;

    /**
    * Path to table row.
    */
    'tableRowPath' : string;

    /**
    * Object's index
    */
    'index' : number;

    /**
    * Original document folder.
    */
    'folder' : string;

    /**
    * File storage, which have to be used.
    */
    'storage' : string;

    /**
    * Encoding that will be used to load an HTML (or TXT) document if the encoding is not specified in HTML.
    */
    'loadEncoding' : string;

    /**
    * Password for opening an encrypted document.
    */
    'password' : string;
}

/**
* Request model for getTableProperties operation.
*/
export class getTablePropertiesRequest{
    /**
    * The document name.
    */
    'name' : string;

    /**
    * Object's index
    */
    'index' : number;

    /**
    * Original document folder.
    */
    'folder' : string;

    /**
    * File storage, which have to be used.
    */
    'storage' : string;

    /**
    * Encoding that will be used to load an HTML (or TXT) document if the encoding is not specified in HTML.
    */
    'loadEncoding' : string;

    /**
    * Password for opening an encrypted document.
    */
    'password' : string;

    /**
    * Path to node, which contains tables.
    */
    'nodePath' : string;
}

/**
* Request model for getTableRow operation.
*/
export class getTableRowRequest{
    /**
    * The document name.
    */
    'name' : string;

    /**
    * Path to table.
    */
    'tablePath' : string;

    /**
    * Object's index
    */
    'index' : number;

    /**
    * Original document folder.
    */
    'folder' : string;

    /**
    * File storage, which have to be used.
    */
    'storage' : string;

    /**
    * Encoding that will be used to load an HTML (or TXT) document if the encoding is not specified in HTML.
    */
    'loadEncoding' : string;

    /**
    * Password for opening an encrypted document.
    */
    'password' : string;
}

/**
* Request model for getTableRowFormat operation.
*/
export class getTableRowFormatRequest{
    /**
    * The document name.
    */
    'name' : string;

    /**
    * Path to table.
    */
    'tablePath' : string;

    /**
    * Object's index
    */
    'index' : number;

    /**
    * Original document folder.
    */
    'folder' : string;

    /**
    * File storage, which have to be used.
    */
    'storage' : string;

    /**
    * Encoding that will be used to load an HTML (or TXT) document if the encoding is not specified in HTML.
    */
    'loadEncoding' : string;

    /**
    * Password for opening an encrypted document.
    */
    'password' : string;
}

/**
* Request model for getTables operation.
*/
export class getTablesRequest{
    /**
    * The document name.
    */
    'name' : string;

    /**
    * Original document folder.
    */
    'folder' : string;

    /**
    * File storage, which have to be used.
    */
    'storage' : string;

    /**
    * Encoding that will be used to load an HTML (or TXT) document if the encoding is not specified in HTML.
    */
    'loadEncoding' : string;

    /**
    * Password for opening an encrypted document.
    */
    'password' : string;

    /**
    * Path to node, which contains tables.
    */
    'nodePath' : string;
}

/**
* Request model for insertTable operation.
*/
export class insertTableRequest{
    /**
    * The document name.
    */
    'name' : string;

    /**
    * Original document folder.
    */
    'folder' : string;

    /**
    * File storage, which have to be used.
    */
    'storage' : string;

    /**
    * Encoding that will be used to load an HTML (or TXT) document if the encoding is not specified in HTML.
    */
    'loadEncoding' : string;

    /**
    * Password for opening an encrypted document.
    */
    'password' : string;

    /**
    * Result name of the document after the operation. If this parameter is omitted then result of the operation will be saved as the source document.
    */
    'destFileName' : string;

    /**
    * Initials of the author to use for revisions.If you set this parameter and then make some changes to the document programmatically, save the document and later open the document in MS Word you will see these changes as revisions.
    */
    'revisionAuthor' : string;

    /**
    * The date and time to use for revisions.
    */
    'revisionDateTime' : string;

    /**
    * Table parameters/
    */
    'table' : TableInsert;

    /**
    * Path to node, which contains tables.
    */
    'nodePath' : string;
}

/**
* Request model for insertTableCell operation.
*/
export class insertTableCellRequest{
    /**
    * The document name.
    */
    'name' : string;

    /**
    * Path to table row.
    */
    'tableRowPath' : string;

    /**
    * Original document folder.
    */
    'folder' : string;

    /**
    * File storage, which have to be used.
    */
    'storage' : string;

    /**
    * Encoding that will be used to load an HTML (or TXT) document if the encoding is not specified in HTML.
    */
    'loadEncoding' : string;

    /**
    * Password for opening an encrypted document.
    */
    'password' : string;

    /**
    * Result name of the document after the operation. If this parameter is omitted then result of the operation will be saved as the source document.
    */
    'destFileName' : string;

    /**
    * Initials of the author to use for revisions.If you set this parameter and then make some changes to the document programmatically, save the document and later open the document in MS Word you will see these changes as revisions.
    */
    'revisionAuthor' : string;

    /**
    * The date and time to use for revisions.
    */
    'revisionDateTime' : string;

    /**
    * Table cell parameters/
    */
    'cell' : TableCellInsert;
}

/**
* Request model for insertTableRow operation.
*/
export class insertTableRowRequest{
    /**
    * The document name.
    */
    'name' : string;

    /**
    * Path to table.
    */
    'tablePath' : string;

    /**
    * Original document folder.
    */
    'folder' : string;

    /**
    * File storage, which have to be used.
    */
    'storage' : string;

    /**
    * Encoding that will be used to load an HTML (or TXT) document if the encoding is not specified in HTML.
    */
    'loadEncoding' : string;

    /**
    * Password for opening an encrypted document.
    */
    'password' : string;

    /**
    * Result name of the document after the operation. If this parameter is omitted then result of the operation will be saved as the source document.
    */
    'destFileName' : string;

    /**
    * Initials of the author to use for revisions.If you set this parameter and then make some changes to the document programmatically, save the document and later open the document in MS Word you will see these changes as revisions.
    */
    'revisionAuthor' : string;

    /**
    * The date and time to use for revisions.
    */
    'revisionDateTime' : string;

    /**
    * Table row parameters/
    */
    'row' : TableRowInsert;
}

/**
* Request model for postAppendDocument operation.
*/
export class postAppendDocumentRequest{
    /**
    * Original document name.
    */
    'name' : string;

    /**
    * with a list of documents to append.            
    */
    'documentList' : DocumentEntryList;

    /**
    * Original document folder.
    */
    'folder' : string;

    /**
    * File storage, which have to be used.
    */
    'storage' : string;

    /**
    * Encoding that will be used to load an HTML (or TXT) document if the encoding is not specified in HTML.
    */
    'loadEncoding' : string;

    /**
    * Password for opening an encrypted document.
    */
    'password' : string;

    /**
    * Result name of the document after the operation. If this parameter is omitted then result of the operation will be saved as the source document.
    */
    'destFileName' : string;

    /**
    * Initials of the author to use for revisions.If you set this parameter and then make some changes to the document programmatically, save the document and later open the document in MS Word you will see these changes as revisions.
    */
    'revisionAuthor' : string;

    /**
    * The date and time to use for revisions.
    */
    'revisionDateTime' : string;
}

/**
* Request model for postChangeDocumentProtection operation.
*/
export class postChangeDocumentProtectionRequest{
    /**
    * The document name.
    */
    'name' : string;

    /**
    * with protection settings.            
    */
    'protectionRequest' : ProtectionRequest;

    /**
    * Original document folder.
    */
    'folder' : string;

    /**
    * File storage, which have to be used.
    */
    'storage' : string;

    /**
    * Encoding that will be used to load an HTML (or TXT) document if the encoding is not specified in HTML.
    */
    'loadEncoding' : string;

    /**
    * Password for opening an encrypted document.
    */
    'password' : string;

    /**
    * Result name of the document after the operation. If this parameter is omitted then result of the operation will be saved as the source document.
    */
    'destFileName' : string;
}

/**
* Request model for postComment operation.
*/
export class postCommentRequest{
    /**
    * The document name.
    */
    'name' : string;

    /**
    * Comment index
    */
    'commentIndex' : number;

    /**
    * Comment data.
    */
    'comment' : Comment;

    /**
    * Original document folder.
    */
    'folder' : string;

    /**
    * File storage, which have to be used.
    */
    'storage' : string;

    /**
    * Encoding that will be used to load an HTML (or TXT) document if the encoding is not specified in HTML.
    */
    'loadEncoding' : string;

    /**
    * Password for opening an encrypted document.
    */
    'password' : string;

    /**
    * Result name of the document after the operation. If this parameter is omitted then result of the operation will be saved as the source document.
    */
    'destFileName' : string;

    /**
    * Initials of the author to use for revisions.If you set this parameter and then make some changes to the document programmatically, save the document and later open the document in MS Word you will see these changes as revisions.
    */
    'revisionAuthor' : string;

    /**
    * The date and time to use for revisions.
    */
    'revisionDateTime' : string;
}

/**
* Request model for postCompareDocument operation.
*/
export class postCompareDocumentRequest{
    /**
    * Original document name.
    */
    'name' : string;

    /**
    * with a document to compare.            
    */
    'compareData' : CompareData;

    /**
    * Original document folder.
    */
    'folder' : string;

    /**
    * File storage, which have to be used.
    */
    'storage' : string;

    /**
    * Encoding that will be used to load an HTML (or TXT) document if the encoding is not specified in HTML.
    */
    'loadEncoding' : string;

    /**
    * Password for opening an encrypted document.
    */
    'password' : string;

    /**
    * Result name of the document after the operation. If this parameter is omitted then result of the operation will be saved as the source document.
    */
    'destFileName' : string;
}

/**
* Request model for postDocumentExecuteMailMerge operation.
*/
export class postDocumentExecuteMailMergeRequest{
    /**
    * The document name.
    */
    'name' : string;

    /**
    * With regions flag.
    */
    'withRegions' : boolean;

    /**
    * Mail merge data
    */
    'data' : string;

    /**
    * Original document folder.
    */
    'folder' : string;

    /**
    * File storage, which have to be used.
    */
    'storage' : string;

    /**
    * Encoding that will be used to load an HTML (or TXT) document if the encoding is not specified in HTML.
    */
    'loadEncoding' : string;

    /**
    * Password for opening an encrypted document.
    */
    'password' : string;

    /**
    * Mail merge data.
    */
    'mailMergeDataFile' : string;

    /**
    * Clean up options.
    */
    'cleanup' : string;

    /**
    * Gets or sets a value indicating whether paragraph with TableStart or              TableEnd field should be fully included into mail merge region or particular range between TableStart and TableEnd fields.              The default value is true.
    */
    'useWholeParagraphAsRegion' : boolean;

    /**
    * Result name of the document after the operation. If this parameter is omitted then result of the operation will be saved with autogenerated name.
    */
    'destFileName' : string;
}

/**
* Request model for postDocumentParagraphRunFont operation.
*/
export class postDocumentParagraphRunFontRequest{
    /**
    * The document name.
    */
    'name' : string;

    /**
    * Font dto object
    */
    'fontDto' : Font;

    /**
    * Path to parent paragraph.
    */
    'paragraphPath' : string;

    /**
    * Object's index
    */
    'index' : number;

    /**
    * Original document folder.
    */
    'folder' : string;

    /**
    * File storage, which have to be used.
    */
    'storage' : string;

    /**
    * Encoding that will be used to load an HTML (or TXT) document if the encoding is not specified in HTML.
    */
    'loadEncoding' : string;

    /**
    * Password for opening an encrypted document.
    */
    'password' : string;

    /**
    * Result name of the document after the operation. If this parameter is omitted then result of the operation will be saved as the source document.
    */
    'destFileName' : string;

    /**
    * Initials of the author to use for revisions.If you set this parameter and then make some changes to the document programmatically, save the document and later open the document in MS Word you will see these changes as revisions.
    */
    'revisionAuthor' : string;

    /**
    * The date and time to use for revisions.
    */
    'revisionDateTime' : string;
}

/**
* Request model for postDocumentSaveAs operation.
*/
export class postDocumentSaveAsRequest{
    /**
    * The document name.
    */
    'name' : string;

    /**
    * Save options.
    */
    'saveOptionsData' : SaveOptionsData;

    /**
    * Original document folder.
    */
    'folder' : string;

    /**
    * File storage, which have to be used.
    */
    'storage' : string;

    /**
    * Encoding that will be used to load an HTML (or TXT) document if the encoding is not specified in HTML.
    */
    'loadEncoding' : string;

    /**
    * Password for opening an encrypted document.
    */
    'password' : string;

    /**
    * Result name of the document after the operation. If this parameter is omitted then result of the operation will be saved as the source document.
    */
    'destFileName' : string;

    /**
    * Folder in filestorage with custom fonts.
    */
    'fontsLocation' : string;
}

/**
* Request model for postDrawingObject operation.
*/
export class postDrawingObjectRequest{
    /**
    * The document name.
    */
    'name' : string;

    /**
    * Drawing object parameters
    */
    'drawingObject' : string;

    /**
    * File with image
    */
    'imageFile' : Buffer;

    /**
    * Object's index
    */
    'index' : number;

    /**
    * Original document folder.
    */
    'folder' : string;

    /**
    * File storage, which have to be used.
    */
    'storage' : string;

    /**
    * Encoding that will be used to load an HTML (or TXT) document if the encoding is not specified in HTML.
    */
    'loadEncoding' : string;

    /**
    * Password for opening an encrypted document.
    */
    'password' : string;

    /**
    * Result name of the document after the operation. If this parameter is omitted then result of the operation will be saved as the source document.
    */
    'destFileName' : string;

    /**
    * Initials of the author to use for revisions.If you set this parameter and then make some changes to the document programmatically, save the document and later open the document in MS Word you will see these changes as revisions.
    */
    'revisionAuthor' : string;

    /**
    * The date and time to use for revisions.
    */
    'revisionDateTime' : string;

    /**
    * Path to node, which contains collection of drawing objects.
    */
    'nodePath' : string;
}

/**
* Request model for postExecuteTemplate operation.
*/
export class postExecuteTemplateRequest{
    /**
    * The template document name.
    */
    'name' : string;

    /**
    * Mail merge data
    */
    'data' : string;

    /**
    * Original document folder.
    */
    'folder' : string;

    /**
    * File storage, which have to be used.
    */
    'storage' : string;

    /**
    * Encoding that will be used to load an HTML (or TXT) document if the encoding is not specified in HTML.
    */
    'loadEncoding' : string;

    /**
    * Password for opening an encrypted document.
    */
    'password' : string;

    /**
    * Clean up options.
    */
    'cleanup' : string;

    /**
    * Gets or sets a value indicating whether paragraph with TableStart or  TableEnd field should be fully included into mail merge region or particular range between TableStart and TableEnd fields.   The default value is true.
    */
    'useWholeParagraphAsRegion' : boolean;

    /**
    * Merge with regions or not. True by default
    */
    'withRegions' : boolean;

    /**
    * Result name of the document after the operation. If this parameter is omitted then result of the operation will be saved with autogenerated name.
    */
    'destFileName' : string;
}

/**
* Request model for postField operation.
*/
export class postFieldRequest{
    /**
    * The document name.
    */
    'name' : string;

    /**
    * Field data.
    */
    'field' : Field;

    /**
    * Object's index
    */
    'index' : number;

    /**
    * Original document folder.
    */
    'folder' : string;

    /**
    * File storage, which have to be used.
    */
    'storage' : string;

    /**
    * Encoding that will be used to load an HTML (or TXT) document if the encoding is not specified in HTML.
    */
    'loadEncoding' : string;

    /**
    * Password for opening an encrypted document.
    */
    'password' : string;

    /**
    * Result name of the document after the operation. If this parameter is omitted then result of the operation will be saved as the source document.
    */
    'destFileName' : string;

    /**
    * Initials of the author to use for revisions.If you set this parameter and then make some changes to the document programmatically, save the document and later open the document in MS Word you will see these changes as revisions.
    */
    'revisionAuthor' : string;

    /**
    * The date and time to use for revisions.
    */
    'revisionDateTime' : string;

    /**
    * Path to node, which contains collection of fields.
    */
    'nodePath' : string;
}

/**
* Request model for postFootnote operation.
*/
export class postFootnoteRequest{
    /**
    * The document name.
    */
    'name' : string;

    /**
    * Footnote data.
    */
    'footnoteDto' : Footnote;

    /**
    * Object's index
    */
    'index' : number;

    /**
    * Original document folder.
    */
    'folder' : string;

    /**
    * File storage, which have to be used.
    */
    'storage' : string;

    /**
    * Encoding that will be used to load an HTML (or TXT) document if the encoding is not specified in HTML.
    */
    'loadEncoding' : string;

    /**
    * Password for opening an encrypted document.
    */
    'password' : string;

    /**
    * Result name of the document after the operation. If this parameter is omitted then result of the operation will be saved as the source document.
    */
    'destFileName' : string;

    /**
    * Initials of the author to use for revisions.If you set this parameter and then make some changes to the document programmatically, save the document and later open the document in MS Word you will see these changes as revisions.
    */
    'revisionAuthor' : string;

    /**
    * The date and time to use for revisions.
    */
    'revisionDateTime' : string;

    /**
    * Path to node, which contains collection of footnotes.
    */
    'nodePath' : string;
}

/**
* Request model for postFormField operation.
*/
export class postFormFieldRequest{
    /**
    * The document name.
    */
    'name' : string;

    /**
    * From field data.
    */
    'formField' : FormField;

    /**
    * Object's index
    */
    'index' : number;

    /**
    * Original document folder.
    */
    'folder' : string;

    /**
    * File storage, which have to be used.
    */
    'storage' : string;

    /**
    * Encoding that will be used to load an HTML (or TXT) document if the encoding is not specified in HTML.
    */
    'loadEncoding' : string;

    /**
    * Password for opening an encrypted document.
    */
    'password' : string;

    /**
    * Result name of the document after the operation. If this parameter is omitted then result of the operation will be saved as the source document.
    */
    'destFileName' : string;

    /**
    * Initials of the author to use for revisions.If you set this parameter and then make some changes to the document programmatically, save the document and later open the document in MS Word you will see these changes as revisions.
    */
    'revisionAuthor' : string;

    /**
    * The date and time to use for revisions.
    */
    'revisionDateTime' : string;

    /**
    * Path to node that contains collection of formfields.
    */
    'nodePath' : string;
}

/**
* Request model for postInsertDocumentWatermarkImage operation.
*/
export class postInsertDocumentWatermarkImageRequest{
    /**
    * The document name.
    */
    'name' : string;

    /**
    * File with image
    */
    'imageFile' : Buffer;

    /**
    * Original document folder.
    */
    'folder' : string;

    /**
    * File storage, which have to be used.
    */
    'storage' : string;

    /**
    * Encoding that will be used to load an HTML (or TXT) document if the encoding is not specified in HTML.
    */
    'loadEncoding' : string;

    /**
    * Password for opening an encrypted document.
    */
    'password' : string;

    /**
    * Result name of the document after the operation. If this parameter is omitted then result of the operation will be saved as the source document.
    */
    'destFileName' : string;

    /**
    * Initials of the author to use for revisions.If you set this parameter and then make some changes to the document programmatically, save the document and later open the document in MS Word you will see these changes as revisions.
    */
    'revisionAuthor' : string;

    /**
    * The date and time to use for revisions.
    */
    'revisionDateTime' : string;

    /**
    * The watermark rotation angle.
    */
    'rotationAngle' : number;

    /**
    * The image file server full name. If the name is empty the image is expected in request content.
    */
    'image' : string;
}

/**
* Request model for postInsertDocumentWatermarkText operation.
*/
export class postInsertDocumentWatermarkTextRequest{
    /**
    * The document name.
    */
    'name' : string;

    /**
    * with the watermark data.            
    */
    'watermarkText' : WatermarkText;

    /**
    * Original document folder.
    */
    'folder' : string;

    /**
    * File storage, which have to be used.
    */
    'storage' : string;

    /**
    * Encoding that will be used to load an HTML (or TXT) document if the encoding is not specified in HTML.
    */
    'loadEncoding' : string;

    /**
    * Password for opening an encrypted document.
    */
    'password' : string;

    /**
    * Result name of the document after the operation. If this parameter is omitted then result of the operation will be saved as the source document.
    */
    'destFileName' : string;

    /**
    * Initials of the author to use for revisions.If you set this parameter and then make some changes to the document programmatically, save the document and later open the document in MS Word you will see these changes as revisions.
    */
    'revisionAuthor' : string;

    /**
    * The date and time to use for revisions.
    */
    'revisionDateTime' : string;
}

/**
* Request model for postInsertPageNumbers operation.
*/
export class postInsertPageNumbersRequest{
    /**
    * A document name.
    */
    'name' : string;

    /**
    * with the page numbers settings.
    */
    'pageNumber' : PageNumber;

    /**
    * Original document folder.
    */
    'folder' : string;

    /**
    * File storage, which have to be used.
    */
    'storage' : string;

    /**
    * Encoding that will be used to load an HTML (or TXT) document if the encoding is not specified in HTML.
    */
    'loadEncoding' : string;

    /**
    * Password for opening an encrypted document.
    */
    'password' : string;

    /**
    * Result name of the document after the operation. If this parameter is omitted then result of the operation will be saved as the source document.
    */
    'destFileName' : string;

    /**
    * Initials of the author to use for revisions.If you set this parameter and then make some changes to the document programmatically, save the document and later open the document in MS Word you will see these changes as revisions.
    */
    'revisionAuthor' : string;

    /**
    * The date and time to use for revisions.
    */
    'revisionDateTime' : string;
}

/**
* Request model for postLoadWebDocument operation.
*/
export class postLoadWebDocumentRequest{
    /**
    * Parameters of loading.
    */
    'data' : LoadWebDocumentData;

    /**
    * File storage, which have to be used.
    */
    'storage' : string;
}

/**
* Request model for postReplaceText operation.
*/
export class postReplaceTextRequest{
    /**
    * The document name.
    */
    'name' : string;

    /**
    * with the replace operation settings.            
    */
    'replaceText' : ReplaceTextRequest;

    /**
    * Original document folder.
    */
    'folder' : string;

    /**
    * File storage, which have to be used.
    */
    'storage' : string;

    /**
    * Encoding that will be used to load an HTML (or TXT) document if the encoding is not specified in HTML.
    */
    'loadEncoding' : string;

    /**
    * Password for opening an encrypted document.
    */
    'password' : string;

    /**
    * Result name of the document after the operation. If this parameter is omitted then result of the operation will be saved as the source document.
    */
    'destFileName' : string;

    /**
    * Initials of the author to use for revisions.If you set this parameter and then make some changes to the document programmatically, save the document and later open the document in MS Word you will see these changes as revisions.
    */
    'revisionAuthor' : string;

    /**
    * The date and time to use for revisions.
    */
    'revisionDateTime' : string;
}

/**
* Request model for postRun operation.
*/
export class postRunRequest{
    /**
    * The document name.
    */
    'name' : string;

    /**
    * Run data.
    */
    'run' : Run;

    /**
    * Path to parent paragraph.
    */
    'paragraphPath' : string;

    /**
    * Object's index
    */
    'index' : number;

    /**
    * Original document folder.
    */
    'folder' : string;

    /**
    * File storage, which have to be used.
    */
    'storage' : string;

    /**
    * Encoding that will be used to load an HTML (or TXT) document if the encoding is not specified in HTML.
    */
    'loadEncoding' : string;

    /**
    * Password for opening an encrypted document.
    */
    'password' : string;

    /**
    * Result name of the document after the operation. If this parameter is omitted then result of the operation will be saved as the source document.
    */
    'destFileName' : string;

    /**
    * Initials of the author to use for revisions.If you set this parameter and then make some changes to the document programmatically, save the document and later open the document in MS Word you will see these changes as revisions.
    */
    'revisionAuthor' : string;

    /**
    * The date and time to use for revisions.
    */
    'revisionDateTime' : string;
}

/**
* Request model for postSplitDocument operation.
*/
export class postSplitDocumentRequest{
    /**
    * Original document name.
    */
    'name' : string;

    /**
    * Original document folder.
    */
    'folder' : string;

    /**
    * File storage, which have to be used.
    */
    'storage' : string;

    /**
    * Encoding that will be used to load an HTML (or TXT) document if the encoding is not specified in HTML.
    */
    'loadEncoding' : string;

    /**
    * Password for opening an encrypted document.
    */
    'password' : string;

    /**
    * Result name of the document after the operation. If this parameter is omitted then result of the operation will be saved as the source document.
    */
    'destFileName' : string;

    /**
    * Format to split.
    */
    'format' : string;

    /**
    * Start page.
    */
    'from' : number;

    /**
    * End page.
    */
    'to' : number;

    /**
    * ZipOutput or not.
    */
    'zipOutput' : boolean;

    /**
    * Folder in filestorage with custom fonts.
    */
    'fontsLocation' : string;
}

/**
* Request model for postUpdateDocumentBookmark operation.
*/
export class postUpdateDocumentBookmarkRequest{
    /**
    * The document name.
    */
    'name' : string;

    /**
    * with new bookmark data.            
    */
    'bookmarkData' : BookmarkData;

    /**
    * The bookmark name.
    */
    'bookmarkName' : string;

    /**
    * Original document folder.
    */
    'folder' : string;

    /**
    * File storage, which have to be used.
    */
    'storage' : string;

    /**
    * Encoding that will be used to load an HTML (or TXT) document if the encoding is not specified in HTML.
    */
    'loadEncoding' : string;

    /**
    * Password for opening an encrypted document.
    */
    'password' : string;

    /**
    * Result name of the document after the operation. If this parameter is omitted then result of the operation will be saved as the source document.
    */
    'destFileName' : string;

    /**
    * Initials of the author to use for revisions.If you set this parameter and then make some changes to the document programmatically, save the document and later open the document in MS Word you will see these changes as revisions.
    */
    'revisionAuthor' : string;

    /**
    * The date and time to use for revisions.
    */
    'revisionDateTime' : string;
}

/**
* Request model for postUpdateDocumentFields operation.
*/
export class postUpdateDocumentFieldsRequest{
    /**
    * The document name.
    */
    'name' : string;

    /**
    * Original document folder.
    */
    'folder' : string;

    /**
    * File storage, which have to be used.
    */
    'storage' : string;

    /**
    * Encoding that will be used to load an HTML (or TXT) document if the encoding is not specified in HTML.
    */
    'loadEncoding' : string;

    /**
    * Password for opening an encrypted document.
    */
    'password' : string;

    /**
    * Result name of the document after the operation. If this parameter is omitted then result of the operation will be saved as the source document.
    */
    'destFileName' : string;
}

/**
* Request model for putComment operation.
*/
export class putCommentRequest{
    /**
    * The document name.
    */
    'name' : string;

    /**
    * Comment data.
    */
    'comment' : Comment;

    /**
    * Original document folder.
    */
    'folder' : string;

    /**
    * File storage, which have to be used.
    */
    'storage' : string;

    /**
    * Encoding that will be used to load an HTML (or TXT) document if the encoding is not specified in HTML.
    */
    'loadEncoding' : string;

    /**
    * Password for opening an encrypted document.
    */
    'password' : string;

    /**
    * Result name of the document after the operation. If this parameter is omitted then result of the operation will be saved as the source document.
    */
    'destFileName' : string;

    /**
    * Initials of the author to use for revisions.If you set this parameter and then make some changes to the document programmatically, save the document and later open the document in MS Word you will see these changes as revisions.
    */
    'revisionAuthor' : string;

    /**
    * The date and time to use for revisions.
    */
    'revisionDateTime' : string;
}

/**
* Request model for putConvertDocument operation.
*/
export class putConvertDocumentRequest{
    /**
    * Converting document
    */
    'document' : Buffer;

    /**
    * Format to convert.
    */
    'format' : string;

    /**
    * File storage, which have to be used.
    */
    'storage' : string;

    /**
    * Path for saving operation result to the local storage.
    */
    'outPath' : string;

    /**
    * Folder in filestorage with custom fonts.
    */
    'fontsLocation' : string;
}

/**
* Request model for putCreateDocument operation.
*/
export class putCreateDocumentRequest{
    /**
    * File storage, which have to be used.
    */
    'storage' : string;

    /**
    * The file name.
    */
    'fileName' : string;

    /**
    * The document folder.
    */
    'folder' : string;
}

/**
* Request model for putDocumentFieldNames operation.
*/
export class putDocumentFieldNamesRequest{
    /**
    * File with template
    */
    'template' : Buffer;

    /**
    * Use non merge fields or not.
    */
    'useNonMergeFields' : boolean;
}

/**
* Request model for putDocumentSaveAsTiff operation.
*/
export class putDocumentSaveAsTiffRequest{
    /**
    * The document name.
    */
    'name' : string;

    /**
    * Tiff save options.
    */
    'saveOptions' : TiffSaveOptionsData;

    /**
    * Original document folder.
    */
    'folder' : string;

    /**
    * File storage, which have to be used.
    */
    'storage' : string;

    /**
    * Encoding that will be used to load an HTML (or TXT) document if the encoding is not specified in HTML.
    */
    'loadEncoding' : string;

    /**
    * Password for opening an encrypted document.
    */
    'password' : string;

    /**
    * Result name of the document after the operation. If this parameter is omitted then result of the operation will be saved as the source document.
    */
    'destFileName' : string;

    /**
    * The resulting file name.
    */
    'resultFile' : string;

    /**
    * Use antialiasing flag.
    */
    'useAntiAliasing' : boolean;

    /**
    * Use high quality flag.
    */
    'useHighQualityRendering' : boolean;

    /**
    * Brightness for the generated images.
    */
    'imageBrightness' : number;

    /**
    * Color mode for the generated images.
    */
    'imageColorMode' : string;

    /**
    * The contrast for the generated images.
    */
    'imageContrast' : number;

    /**
    * The images numeral format.
    */
    'numeralFormat' : string;

    /**
    * Number of pages to render.
    */
    'pageCount' : number;

    /**
    * Page index to start rendering.
    */
    'pageIndex' : number;

    /**
    * Background image color.
    */
    'paperColor' : string;

    /**
    * The pixel format of generated images.
    */
    'pixelFormat' : string;

    /**
    * The resolution of generated images.
    */
    'resolution' : number;

    /**
    * Zoom factor for generated images.
    */
    'scale' : number;

    /**
    * The compression tipe.
    */
    'tiffCompression' : string;

    /**
    * Optional, default is Fallback.
    */
    'dmlRenderingMode' : string;

    /**
    * Optional, default is Simplified.
    */
    'dmlEffectsRenderingMode' : string;

    /**
    * Optional, Tiff binarization method, possible values are: FloydSteinbergDithering, Threshold.
    */
    'tiffBinarizationMethod' : string;

    /**
    * Optional. A value determining zip output or not.
    */
    'zipOutput' : boolean;

    /**
    * Folder in filestorage with custom fonts.
    */
    'fontsLocation' : string;
}

/**
* Request model for putDrawingObject operation.
*/
export class putDrawingObjectRequest{
    /**
    * The document name.
    */
    'name' : string;

    /**
    * Drawing object parameters
    */
    'drawingObject' : string;

    /**
    * File with image
    */
    'imageFile' : Buffer;

    /**
    * Original document folder.
    */
    'folder' : string;

    /**
    * File storage, which have to be used.
    */
    'storage' : string;

    /**
    * Encoding that will be used to load an HTML (or TXT) document if the encoding is not specified in HTML.
    */
    'loadEncoding' : string;

    /**
    * Password for opening an encrypted document.
    */
    'password' : string;

    /**
    * Result name of the document after the operation. If this parameter is omitted then result of the operation will be saved as the source document.
    */
    'destFileName' : string;

    /**
    * Initials of the author to use for revisions.If you set this parameter and then make some changes to the document programmatically, save the document and later open the document in MS Word you will see these changes as revisions.
    */
    'revisionAuthor' : string;

    /**
    * The date and time to use for revisions.
    */
    'revisionDateTime' : string;

    /**
    * Path to node, which contains collection of drawing objects.
    */
    'nodePath' : string;
}

/**
* Request model for putExecuteMailMergeOnline operation.
*/
export class putExecuteMailMergeOnlineRequest{
    /**
    * File with template
    */
    'template' : Buffer;

    /**
    * File with mailmerge data
    */
    'data' : Buffer;

    /**
    * With regions flag.
    */
    'withRegions' : boolean;

    /**
    * Clean up options.
    */
    'cleanup' : string;
}

/**
* Request model for putExecuteTemplateOnline operation.
*/
export class putExecuteTemplateOnlineRequest{
    /**
    * File with template
    */
    'template' : Buffer;

    /**
    * File with mailmerge data
    */
    'data' : Buffer;

    /**
    * Clean up options.
    */
    'cleanup' : string;

    /**
    * Gets or sets a value indicating whether paragraph with TableStart or              TableEnd field should be fully included into mail merge region or particular range between TableStart and TableEnd fields.              The default value is true.
    */
    'useWholeParagraphAsRegion' : boolean;

    /**
    * Merge with regions or not. True by default
    */
    'withRegions' : boolean;
}

/**
* Request model for putField operation.
*/
export class putFieldRequest{
    /**
    * The document name.
    */
    'name' : string;

    /**
    * Field data.
    */
    'field' : Field;

    /**
    * Original document folder.
    */
    'folder' : string;

    /**
    * File storage, which have to be used.
    */
    'storage' : string;

    /**
    * Encoding that will be used to load an HTML (or TXT) document if the encoding is not specified in HTML.
    */
    'loadEncoding' : string;

    /**
    * Password for opening an encrypted document.
    */
    'password' : string;

    /**
    * Result name of the document after the operation. If this parameter is omitted then result of the operation will be saved as the source document.
    */
    'destFileName' : string;

    /**
    * Initials of the author to use for revisions.If you set this parameter and then make some changes to the document programmatically, save the document and later open the document in MS Word you will see these changes as revisions.
    */
    'revisionAuthor' : string;

    /**
    * The date and time to use for revisions.
    */
    'revisionDateTime' : string;

    /**
    * Path to node, which contains collection of fields.
    */
    'nodePath' : string;

    /**
    * Field will be inserted before node with id=\"nodeId\".
    */
    'insertBeforeNode' : string;
}

/**
* Request model for putFootnote operation.
*/
export class putFootnoteRequest{
    /**
    * The document name.
    */
    'name' : string;

    /**
    * Footnote data.
    */
    'footnoteDto' : Footnote;

    /**
    * Original document folder.
    */
    'folder' : string;

    /**
    * File storage, which have to be used.
    */
    'storage' : string;

    /**
    * Encoding that will be used to load an HTML (or TXT) document if the encoding is not specified in HTML.
    */
    'loadEncoding' : string;

    /**
    * Password for opening an encrypted document.
    */
    'password' : string;

    /**
    * Result name of the document after the operation. If this parameter is omitted then result of the operation will be saved as the source document.
    */
    'destFileName' : string;

    /**
    * Initials of the author to use for revisions.If you set this parameter and then make some changes to the document programmatically, save the document and later open the document in MS Word you will see these changes as revisions.
    */
    'revisionAuthor' : string;

    /**
    * The date and time to use for revisions.
    */
    'revisionDateTime' : string;

    /**
    * Path to node, which contains collection of footnotes.
    */
    'nodePath' : string;
}

/**
* Request model for putFormField operation.
*/
export class putFormFieldRequest{
    /**
    * The document name.
    */
    'name' : string;

    /**
    * From field data.
    */
    'formField' : FormField;

    /**
    * Original document folder.
    */
    'folder' : string;

    /**
    * File storage, which have to be used.
    */
    'storage' : string;

    /**
    * Encoding that will be used to load an HTML (or TXT) document if the encoding is not specified in HTML.
    */
    'loadEncoding' : string;

    /**
    * Password for opening an encrypted document.
    */
    'password' : string;

    /**
    * Result name of the document after the operation. If this parameter is omitted then result of the operation will be saved as the source document.
    */
    'destFileName' : string;

    /**
    * Initials of the author to use for revisions.If you set this parameter and then make some changes to the document programmatically, save the document and later open the document in MS Word you will see these changes as revisions.
    */
    'revisionAuthor' : string;

    /**
    * The date and time to use for revisions.
    */
    'revisionDateTime' : string;

    /**
    * Path to node that contains collection of formfields.
    */
    'nodePath' : string;

    /**
    * Form field will be inserted before node with index.
    */
    'insertBeforeNode' : string;
}

/**
* Request model for putHeaderFooter operation.
*/
export class putHeaderFooterRequest{
    /**
    * The document name.
    */
    'name' : string;

    /**
    * Type of header/footer.
    */
    'headerFooterType' : string;

    /**
    * Original document folder.
    */
    'folder' : string;

    /**
    * File storage, which have to be used.
    */
    'storage' : string;

    /**
    * Encoding that will be used to load an HTML (or TXT) document if the encoding is not specified in HTML.
    */
    'loadEncoding' : string;

    /**
    * Password for opening an encrypted document.
    */
    'password' : string;

    /**
    * Result name of the document after the operation. If this parameter is omitted then result of the operation will be saved as the source document.
    */
    'destFileName' : string;

    /**
    * Initials of the author to use for revisions.If you set this parameter and then make some changes to the document programmatically, save the document and later open the document in MS Word you will see these changes as revisions.
    */
    'revisionAuthor' : string;

    /**
    * The date and time to use for revisions.
    */
    'revisionDateTime' : string;

    /**
    * Path to parent section.
    */
    'sectionPath' : string;
}

/**
* Request model for putParagraph operation.
*/
export class putParagraphRequest{
    /**
    * The document name.
    */
    'name' : string;

    /**
    * Paragraph data.
    */
    'paragraph' : ParagraphInsert;

    /**
    * Original document folder.
    */
    'folder' : string;

    /**
    * File storage, which have to be used.
    */
    'storage' : string;

    /**
    * Encoding that will be used to load an HTML (or TXT) document if the encoding is not specified in HTML.
    */
    'loadEncoding' : string;

    /**
    * Password for opening an encrypted document.
    */
    'password' : string;

    /**
    * Result name of the document after the operation. If this parameter is omitted then result of the operation will be saved as the source document.
    */
    'destFileName' : string;

    /**
    * Initials of the author to use for revisions.If you set this parameter and then make some changes to the document programmatically, save the document and later open the document in MS Word you will see these changes as revisions.
    */
    'revisionAuthor' : string;

    /**
    * The date and time to use for revisions.
    */
    'revisionDateTime' : string;

    /**
    * Path to node which contains paragraphs.
    */
    'nodePath' : string;

    /**
    * Paragraph will be inserted before node with index.
    */
    'insertBeforeNode' : string;
}

/**
* Request model for putProtectDocument operation.
*/
export class putProtectDocumentRequest{
    /**
    * The document name.
    */
    'name' : string;

    /**
    * with protection settings.            
    */
    'protectionRequest' : ProtectionRequest;

    /**
    * Original document folder.
    */
    'folder' : string;

    /**
    * File storage, which have to be used.
    */
    'storage' : string;

    /**
    * Encoding that will be used to load an HTML (or TXT) document if the encoding is not specified in HTML.
    */
    'loadEncoding' : string;

    /**
    * Password for opening an encrypted document.
    */
    'password' : string;

    /**
    * Result name of the document after the operation. If this parameter is omitted then result of the operation will be saved as the source document.
    */
    'destFileName' : string;
}

/**
* Request model for putRun operation.
*/
export class putRunRequest{
    /**
    * The document name.
    */
    'name' : string;

    /**
    * Path to parent paragraph.
    */
    'paragraphPath' : string;

    /**
    * Run data.
    */
    'run' : Run;

    /**
    * Original document folder.
    */
    'folder' : string;

    /**
    * File storage, which have to be used.
    */
    'storage' : string;

    /**
    * Encoding that will be used to load an HTML (or TXT) document if the encoding is not specified in HTML.
    */
    'loadEncoding' : string;

    /**
    * Password for opening an encrypted document.
    */
    'password' : string;

    /**
    * Result name of the document after the operation. If this parameter is omitted then result of the operation will be saved as the source document.
    */
    'destFileName' : string;

    /**
    * Initials of the author to use for revisions.If you set this parameter and then make some changes to the document programmatically, save the document and later open the document in MS Word you will see these changes as revisions.
    */
    'revisionAuthor' : string;

    /**
    * The date and time to use for revisions.
    */
    'revisionDateTime' : string;

    /**
    * Paragraph will be inserted before node with index.
    */
    'insertBeforeNode' : string;
}

/**
* Request model for rejectAllRevisions operation.
*/
export class rejectAllRevisionsRequest{
    /**
    * The document name.
    */
    'name' : string;

    /**
    * Original document folder.
    */
    'folder' : string;

    /**
    * File storage, which have to be used.
    */
    'storage' : string;

    /**
    * Encoding that will be used to load an HTML (or TXT) document if the encoding is not specified in HTML.
    */
    'loadEncoding' : string;

    /**
    * Password for opening an encrypted document.
    */
    'password' : string;

    /**
    * Result name of the document after the operation. If this parameter is omitted then result of the operation will be saved as the source document.
    */
    'destFileName' : string;
}

/**
* Request model for renderDrawingObject operation.
*/
export class renderDrawingObjectRequest{
    /**
    * The file name.
    */
    'name' : string;

    /**
    * The destination format.
    */
    'format' : string;

    /**
    * Object's index
    */
    'index' : number;

    /**
    * Original document folder.
    */
    'folder' : string;

    /**
    * File storage, which have to be used.
    */
    'storage' : string;

    /**
    * Encoding that will be used to load an HTML (or TXT) document if the encoding is not specified in HTML.
    */
    'loadEncoding' : string;

    /**
    * Password for opening an encrypted document.
    */
    'password' : string;

    /**
    * Path to node, which contains drawing objects.
    */
    'nodePath' : string;

    /**
    * Folder in filestorage with custom fonts.
    */
    'fontsLocation' : string;
}

/**
* Request model for renderMathObject operation.
*/
export class renderMathObjectRequest{
    /**
    * The file name.
    */
    'name' : string;

    /**
    * The destination format.
    */
    'format' : string;

    /**
    * Object's index
    */
    'index' : number;

    /**
    * Original document folder.
    */
    'folder' : string;

    /**
    * File storage, which have to be used.
    */
    'storage' : string;

    /**
    * Encoding that will be used to load an HTML (or TXT) document if the encoding is not specified in HTML.
    */
    'loadEncoding' : string;

    /**
    * Password for opening an encrypted document.
    */
    'password' : string;

    /**
    * Path to node, which contains office math objects.
    */
    'nodePath' : string;

    /**
    * Folder in filestorage with custom fonts.
    */
    'fontsLocation' : string;
}

/**
* Request model for renderPage operation.
*/
export class renderPageRequest{
    /**
    * The file name.
    */
    'name' : string;

    /**
    * Comment index
    */
    'pageIndex' : number;

    /**
    * The destination format.
    */
    'format' : string;

    /**
    * Original document folder.
    */
    'folder' : string;

    /**
    * File storage, which have to be used.
    */
    'storage' : string;

    /**
    * Encoding that will be used to load an HTML (or TXT) document if the encoding is not specified in HTML.
    */
    'loadEncoding' : string;

    /**
    * Password for opening an encrypted document.
    */
    'password' : string;

    /**
    * Folder in filestorage with custom fonts.
    */
    'fontsLocation' : string;
}

/**
* Request model for renderParagraph operation.
*/
export class renderParagraphRequest{
    /**
    * The file name.
    */
    'name' : string;

    /**
    * The destination format.
    */
    'format' : string;

    /**
    * Object's index
    */
    'index' : number;

    /**
    * Original document folder.
    */
    'folder' : string;

    /**
    * File storage, which have to be used.
    */
    'storage' : string;

    /**
    * Encoding that will be used to load an HTML (or TXT) document if the encoding is not specified in HTML.
    */
    'loadEncoding' : string;

    /**
    * Password for opening an encrypted document.
    */
    'password' : string;

    /**
    * Path to node, which contains paragraphs.
    */
    'nodePath' : string;

    /**
    * Folder in filestorage with custom fonts.
    */
    'fontsLocation' : string;
}

/**
* Request model for renderTable operation.
*/
export class renderTableRequest{
    /**
    * The file name.
    */
    'name' : string;

    /**
    * The destination format.
    */
    'format' : string;

    /**
    * Object's index
    */
    'index' : number;

    /**
    * Original document folder.
    */
    'folder' : string;

    /**
    * File storage, which have to be used.
    */
    'storage' : string;

    /**
    * Encoding that will be used to load an HTML (or TXT) document if the encoding is not specified in HTML.
    */
    'loadEncoding' : string;

    /**
    * Password for opening an encrypted document.
    */
    'password' : string;

    /**
    * Path to node, which contains tables.
    */
    'nodePath' : string;

    /**
    * Folder in filestorage with custom fonts.
    */
    'fontsLocation' : string;
}

/**
* Request model for resetCache operation.
*/
export class resetCacheRequest{
}

/**
* Request model for search operation.
*/
export class searchRequest{
    /**
    * The document name.
    */
    'name' : string;

    /**
    * The regular expression used to find matches.
    */
    'pattern' : string;

    /**
    * Original document folder.
    */
    'folder' : string;

    /**
    * File storage, which have to be used.
    */
    'storage' : string;

    /**
    * Encoding that will be used to load an HTML (or TXT) document if the encoding is not specified in HTML.
    */
    'loadEncoding' : string;

    /**
    * Password for opening an encrypted document.
    */
    'password' : string;
}

/**
* Request model for updateBorder operation.
*/
export class updateBorderRequest{
    /**
    * The document name.
    */
    'name' : string;

    /**
    * Border properties
    */
    'borderProperties' : Border;

    /**
    * Path to node with border(node should be cell or row).
    */
    'nodePath' : string;

    /**
    * Object's index
    */
    'index' : number;

    /**
    * Original document folder.
    */
    'folder' : string;

    /**
    * File storage, which have to be used.
    */
    'storage' : string;

    /**
    * Encoding that will be used to load an HTML (or TXT) document if the encoding is not specified in HTML.
    */
    'loadEncoding' : string;

    /**
    * Password for opening an encrypted document.
    */
    'password' : string;

    /**
    * Result name of the document after the operation. If this parameter is omitted then result of the operation will be saved as the source document.
    */
    'destFileName' : string;

    /**
    * Initials of the author to use for revisions.If you set this parameter and then make some changes to the document programmatically, save the document and later open the document in MS Word you will see these changes as revisions.
    */
    'revisionAuthor' : string;

    /**
    * The date and time to use for revisions.
    */
    'revisionDateTime' : string;
}

/**
* Request model for updateSectionPageSetup operation.
*/
export class updateSectionPageSetupRequest{
    /**
    * The document name.
    */
    'name' : string;

    /**
    * Section index
    */
    'sectionIndex' : number;

    /**
    * Page setup properties dto
    */
    'pageSetup' : PageSetup;

    /**
    * Original document folder.
    */
    'folder' : string;

    /**
    * File storage, which have to be used.
    */
    'storage' : string;

    /**
    * Encoding that will be used to load an HTML (or TXT) document if the encoding is not specified in HTML.
    */
    'loadEncoding' : string;

    /**
    * Password for opening an encrypted document.
    */
    'password' : string;

    /**
    * Result name of the document after the operation. If this parameter is omitted then result of the operation will be saved as the source document.
    */
    'destFileName' : string;

    /**
    * Initials of the author to use for revisions.If you set this parameter and then make some changes to the document programmatically, save the document and later open the document in MS Word you will see these changes as revisions.
    */
    'revisionAuthor' : string;

    /**
    * The date and time to use for revisions.
    */
    'revisionDateTime' : string;
}

/**
* Request model for updateTableCellFormat operation.
*/
export class updateTableCellFormatRequest{
    /**
    * The document name.
    */
    'name' : string;

    /**
    * Path to table row.
    */
    'tableRowPath' : string;

    /**
    * Object's index
    */
    'index' : number;

    /**
    * Original document folder.
    */
    'folder' : string;

    /**
    * File storage, which have to be used.
    */
    'storage' : string;

    /**
    * Encoding that will be used to load an HTML (or TXT) document if the encoding is not specified in HTML.
    */
    'loadEncoding' : string;

    /**
    * Password for opening an encrypted document.
    */
    'password' : string;

    /**
    * Result name of the document after the operation. If this parameter is omitted then result of the operation will be saved as the source document.
    */
    'destFileName' : string;

    /**
    * Initials of the author to use for revisions.If you set this parameter and then make some changes to the document programmatically, save the document and later open the document in MS Word you will see these changes as revisions.
    */
    'revisionAuthor' : string;

    /**
    * The date and time to use for revisions.
    */
    'revisionDateTime' : string;

    /**
    * The properties.
    */
    'format' : TableCellFormat;
}

/**
* Request model for updateTableProperties operation.
*/
export class updateTablePropertiesRequest{
    /**
    * The document name.
    */
    'name' : string;

    /**
    * Object's index
    */
    'index' : number;

    /**
    * Original document folder.
    */
    'folder' : string;

    /**
    * File storage, which have to be used.
    */
    'storage' : string;

    /**
    * Encoding that will be used to load an HTML (or TXT) document if the encoding is not specified in HTML.
    */
    'loadEncoding' : string;

    /**
    * Password for opening an encrypted document.
    */
    'password' : string;

    /**
    * Result name of the document after the operation. If this parameter is omitted then result of the operation will be saved as the source document.
    */
    'destFileName' : string;

    /**
    * Initials of the author to use for revisions.If you set this parameter and then make some changes to the document programmatically, save the document and later open the document in MS Word you will see these changes as revisions.
    */
    'revisionAuthor' : string;

    /**
    * The date and time to use for revisions.
    */
    'revisionDateTime' : string;

    /**
    * The properties.
    */
    'properties' : TableProperties;

    /**
    * Path to node, which contains tables.
    */
    'nodePath' : string;
}

/**
* Request model for updateTableRowFormat operation.
*/
export class updateTableRowFormatRequest{
    /**
    * The document name.
    */
    'name' : string;

    /**
    * Path to table.
    */
    'tablePath' : string;

    /**
    * Object's index
    */
    'index' : number;

    /**
    * Original document folder.
    */
    'folder' : string;

    /**
    * File storage, which have to be used.
    */
    'storage' : string;

    /**
    * Encoding that will be used to load an HTML (or TXT) document if the encoding is not specified in HTML.
    */
    'loadEncoding' : string;

    /**
    * Password for opening an encrypted document.
    */
    'password' : string;

    /**
    * Result name of the document after the operation. If this parameter is omitted then result of the operation will be saved as the source document.
    */
    'destFileName' : string;

    /**
    * Initials of the author to use for revisions.If you set this parameter and then make some changes to the document programmatically, save the document and later open the document in MS Word you will see these changes as revisions.
    */
    'revisionAuthor' : string;

    /**
    * The date and time to use for revisions.
    */
    'revisionDateTime' : string;

    /**
    * Table row format.
    */
    'format' : TableRowFormat;
}

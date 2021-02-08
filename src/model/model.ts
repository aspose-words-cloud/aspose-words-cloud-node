/*
 * --------------------------------------------------------------------------------
 * <copyright company="Aspose" file="model.ts">
 *   Copyright (c) 2021 Aspose.Words for Cloud
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

import { Readable } from "stream";
import { IncomingMessage } from 'http';
import * as importedApiError from './apiError';
import * as importedAvailableFontsResponse from './availableFontsResponse';
import * as importedBmpSaveOptionsData from './bmpSaveOptionsData';
import * as importedBookmark from './bookmark';
import * as importedBookmarkData from './bookmarkData';
import * as importedBookmarkResponse from './bookmarkResponse';
import * as importedBookmarks from './bookmarks';
import * as importedBookmarksOutlineLevelData from './bookmarksOutlineLevelData';
import * as importedBookmarksResponse from './bookmarksResponse';
import * as importedBorder from './border';
import * as importedBorderResponse from './borderResponse';
import * as importedBordersCollection from './bordersCollection';
import * as importedBordersResponse from './bordersResponse';
import * as importedClassificationResponse from './classificationResponse';
import * as importedClassificationResult from './classificationResult';
import * as importedComment from './comment';
import * as importedCommentBase from './commentBase';
import * as importedCommentInsert from './commentInsert';
import * as importedCommentLink from './commentLink';
import * as importedCommentResponse from './commentResponse';
import * as importedCommentsCollection from './commentsCollection';
import * as importedCommentsResponse from './commentsResponse';
import * as importedCommentUpdate from './commentUpdate';
import * as importedCompareData from './compareData';
import * as importedCompareOptions from './compareOptions';
import * as importedCsvDataLoadOptions from './csvDataLoadOptions';
import * as importedDocSaveOptionsData from './docSaveOptionsData';
import * as importedDocument from './document';
import * as importedDocumentEntry from './documentEntry';
import * as importedDocumentEntryList from './documentEntryList';
import * as importedDocumentPosition from './documentPosition';
import * as importedDocumentProperties from './documentProperties';
import * as importedDocumentPropertiesResponse from './documentPropertiesResponse';
import * as importedDocumentProperty from './documentProperty';
import * as importedDocumentPropertyBase from './documentPropertyBase';
import * as importedDocumentPropertyCreateOrUpdate from './documentPropertyCreateOrUpdate';
import * as importedDocumentPropertyResponse from './documentPropertyResponse';
import * as importedDocumentResponse from './documentResponse';
import * as importedDocumentStatData from './documentStatData';
import * as importedDownsampleOptionsData from './downsampleOptionsData';
import * as importedDrawingObject from './drawingObject';
import * as importedDrawingObjectCollection from './drawingObjectCollection';
import * as importedDrawingObjectInsert from './drawingObjectInsert';
import * as importedDrawingObjectLink from './drawingObjectLink';
import * as importedDrawingObjectResponse from './drawingObjectResponse';
import * as importedDrawingObjectsResponse from './drawingObjectsResponse';
import * as importedDrawingObjectUpdate from './drawingObjectUpdate';
import * as importedEmfSaveOptionsData from './emfSaveOptionsData';
import * as importedEpubSaveOptionsData from './epubSaveOptionsData';
import * as importedError from './error';
import * as importedErrorDetails from './errorDetails';
import * as importedField from './field';
import * as importedFieldBase from './fieldBase';
import * as importedFieldCollection from './fieldCollection';
import * as importedFieldInsert from './fieldInsert';
import * as importedFieldLink from './fieldLink';
import * as importedFieldNames from './fieldNames';
import * as importedFieldNamesResponse from './fieldNamesResponse';
import * as importedFieldResponse from './fieldResponse';
import * as importedFieldsResponse from './fieldsResponse';
import * as importedFieldUpdate from './fieldUpdate';
import * as importedFileLink from './fileLink';
import * as importedFilesList from './filesList';
import * as importedFilesUploadResult from './filesUploadResult';
import * as importedFixedPageSaveOptionsData from './fixedPageSaveOptionsData';
import * as importedFont from './font';
import * as importedFontDto from './fontDto';
import * as importedFontInfo from './fontInfo';
import * as importedFontResponse from './fontResponse';
import * as importedFootnote from './footnote';
import * as importedFootnoteBase from './footnoteBase';
import * as importedFootnoteCollection from './footnoteCollection';
import * as importedFootnoteInsert from './footnoteInsert';
import * as importedFootnoteLink from './footnoteLink';
import * as importedFootnoteResponse from './footnoteResponse';
import * as importedFootnotesResponse from './footnotesResponse';
import * as importedFootnotesStatData from './footnotesStatData';
import * as importedFootnoteUpdate from './footnoteUpdate';
import * as importedFormField from './formField';
import * as importedFormFieldCheckbox from './formFieldCheckbox';
import * as importedFormFieldCollection from './formFieldCollection';
import * as importedFormFieldDropDown from './formFieldDropDown';
import * as importedFormFieldResponse from './formFieldResponse';
import * as importedFormFieldsResponse from './formFieldsResponse';
import * as importedFormFieldTextInput from './formFieldTextInput';
import * as importedGifSaveOptionsData from './gifSaveOptionsData';
import * as importedGraphicsQualityOptionsData from './graphicsQualityOptionsData';
import * as importedHeaderFooter from './headerFooter';
import * as importedHeaderFooterLink from './headerFooterLink';
import * as importedHeaderFooterLinkCollection from './headerFooterLinkCollection';
import * as importedHeaderFooterResponse from './headerFooterResponse';
import * as importedHeaderFootersResponse from './headerFootersResponse';
import * as importedHtmlFixedSaveOptionsData from './htmlFixedSaveOptionsData';
import * as importedHtmlSaveOptionsData from './htmlSaveOptionsData';
import * as importedHyperlink from './hyperlink';
import * as importedHyperlinkResponse from './hyperlinkResponse';
import * as importedHyperlinks from './hyperlinks';
import * as importedHyperlinksResponse from './hyperlinksResponse';
import * as importedImageSaveOptionsData from './imageSaveOptionsData';
import * as importedJpegSaveOptionsData from './jpegSaveOptionsData';
import * as importedLink from './link';
import * as importedLinkElement from './linkElement';
import * as importedListFormat from './listFormat';
import * as importedListFormatUpdate from './listFormatUpdate';
import * as importedListInfo from './listInfo';
import * as importedListInsert from './listInsert';
import * as importedListLevel from './listLevel';
import * as importedListLevels from './listLevels';
import * as importedListLevelUpdate from './listLevelUpdate';
import * as importedListResponse from './listResponse';
import * as importedLists from './lists';
import * as importedListsResponse from './listsResponse';
import * as importedListUpdate from './listUpdate';
import * as importedLoadWebDocumentData from './loadWebDocumentData';
import * as importedMarkdownSaveOptionsData from './markdownSaveOptionsData';
import * as importedMetafileRenderingOptionsData from './metafileRenderingOptionsData';
import * as importedMhtmlSaveOptionsData from './mhtmlSaveOptionsData';
import * as importedModificationOperationResult from './modificationOperationResult';
import * as importedNodeLink from './nodeLink';
import * as importedOdtSaveOptionsData from './odtSaveOptionsData';
import * as importedOfficeMathLink from './officeMathLink';
import * as importedOfficeMathObject from './officeMathObject';
import * as importedOfficeMathObjectResponse from './officeMathObjectResponse';
import * as importedOfficeMathObjectsCollection from './officeMathObjectsCollection';
import * as importedOfficeMathObjectsResponse from './officeMathObjectsResponse';
import * as importedOoxmlSaveOptionsData from './ooxmlSaveOptionsData';
import * as importedOptimizationOptions from './optimizationOptions';
import * as importedOutlineOptionsData from './outlineOptionsData';
import * as importedPageNumber from './pageNumber';
import * as importedPageSetup from './pageSetup';
import * as importedPageStatData from './pageStatData';
import * as importedParagraph from './paragraph';
import * as importedParagraphFormat from './paragraphFormat';
import * as importedParagraphFormatBase from './paragraphFormatBase';
import * as importedParagraphFormatResponse from './paragraphFormatResponse';
import * as importedParagraphFormatUpdate from './paragraphFormatUpdate';
import * as importedParagraphInsert from './paragraphInsert';
import * as importedParagraphLink from './paragraphLink';
import * as importedParagraphLinkCollection from './paragraphLinkCollection';
import * as importedParagraphLinkCollectionResponse from './paragraphLinkCollectionResponse';
import * as importedParagraphListFormatResponse from './paragraphListFormatResponse';
import * as importedParagraphResponse from './paragraphResponse';
import * as importedPclSaveOptionsData from './pclSaveOptionsData';
import * as importedPdfDigitalSignatureDetailsData from './pdfDigitalSignatureDetailsData';
import * as importedPdfEncryptionDetailsData from './pdfEncryptionDetailsData';
import * as importedPdfSaveOptionsData from './pdfSaveOptionsData';
import * as importedPngSaveOptionsData from './pngSaveOptionsData';
import * as importedPreferredWidth from './preferredWidth';
import * as importedProtectionData from './protectionData';
import * as importedProtectionDataResponse from './protectionDataResponse';
import * as importedProtectionRequest from './protectionRequest';
import * as importedPsSaveOptionsData from './psSaveOptionsData';
import * as importedRangeDocument from './rangeDocument';
import * as importedRangeDocumentDto from './rangeDocumentDto';
import * as importedRangeTextResponse from './rangeTextResponse';
import * as importedReplaceRange from './replaceRange';
import * as importedReplaceRangeDto from './replaceRangeDto';
import * as importedReplaceTextParameters from './replaceTextParameters';
import * as importedReplaceTextResponse from './replaceTextResponse';
import * as importedReportBuildOptions from './reportBuildOptions';
import * as importedReportEngineSettings from './reportEngineSettings';
import * as importedRevisionsModificationResponse from './revisionsModificationResponse';
import * as importedRtfSaveOptionsData from './rtfSaveOptionsData';
import * as importedRun from './run';
import * as importedRunBase from './runBase';
import * as importedRunInsert from './runInsert';
import * as importedRunLink from './runLink';
import * as importedRunResponse from './runResponse';
import * as importedRuns from './runs';
import * as importedRunsResponse from './runsResponse';
import * as importedRunUpdate from './runUpdate';
import * as importedSaveOptionsData from './saveOptionsData';
import * as importedSaveResponse from './saveResponse';
import * as importedSaveResult from './saveResult';
import * as importedSearchResponse from './searchResponse';
import * as importedSearchResult from './searchResult';
import * as importedSearchResultsCollection from './searchResultsCollection';
import * as importedSection from './section';
import * as importedSectionLink from './sectionLink';
import * as importedSectionLinkCollection from './sectionLinkCollection';
import * as importedSectionLinkCollectionResponse from './sectionLinkCollectionResponse';
import * as importedSectionPageSetupResponse from './sectionPageSetupResponse';
import * as importedSectionResponse from './sectionResponse';
import * as importedShading from './shading';
import * as importedSplitDocumentResponse from './splitDocumentResponse';
import * as importedSplitDocumentResult from './splitDocumentResult';
import * as importedStatDataResponse from './statDataResponse';
import * as importedStorageFile from './storageFile';
import * as importedStoryChildNodes from './storyChildNodes';
import * as importedStringFormatData from './stringFormatData';
import * as importedStyle from './style';
import * as importedStyleApply from './styleApply';
import * as importedStyleCopy from './styleCopy';
import * as importedStyleInsert from './styleInsert';
import * as importedStyleResponse from './styleResponse';
import * as importedStylesResponse from './stylesResponse';
import * as importedStyleUpdate from './styleUpdate';
import * as importedSvgSaveOptionsData from './svgSaveOptionsData';
import * as importedTable from './table';
import * as importedTableCell from './tableCell';
import * as importedTableCellFormat from './tableCellFormat';
import * as importedTableCellFormatDto from './tableCellFormatDto';
import * as importedTableCellFormatResponse from './tableCellFormatResponse';
import * as importedTableCellInsert from './tableCellInsert';
import * as importedTableCellInsertDto from './tableCellInsertDto';
import * as importedTableCellResponse from './tableCellResponse';
import * as importedTableInsert from './tableInsert';
import * as importedTableInsertDto from './tableInsertDto';
import * as importedTableLink from './tableLink';
import * as importedTableLinkCollection from './tableLinkCollection';
import * as importedTableLinkCollectionResponse from './tableLinkCollectionResponse';
import * as importedTableProperties from './tableProperties';
import * as importedTablePropertiesDto from './tablePropertiesDto';
import * as importedTablePropertiesResponse from './tablePropertiesResponse';
import * as importedTableResponse from './tableResponse';
import * as importedTableRow from './tableRow';
import * as importedTableRowFormat from './tableRowFormat';
import * as importedTableRowFormatDto from './tableRowFormatDto';
import * as importedTableRowFormatResponse from './tableRowFormatResponse';
import * as importedTableRowInsert from './tableRowInsert';
import * as importedTableRowInsertDto from './tableRowInsertDto';
import * as importedTableRowResponse from './tableRowResponse';
import * as importedTabStop from './tabStop';
import * as importedTabStopBase from './tabStopBase';
import * as importedTabStopInsert from './tabStopInsert';
import * as importedTabStopsResponse from './tabStopsResponse';
import * as importedTextSaveOptionsData from './textSaveOptionsData';
import * as importedTiffSaveOptionsData from './tiffSaveOptionsData';
import * as importedTxtSaveOptionsBaseData from './txtSaveOptionsBaseData';
import * as importedWatermarkText from './watermarkText';
import * as importedWordMLSaveOptionsData from './wordMLSaveOptionsData';
import * as importedWordsApiErrorResponse from './wordsApiErrorResponse';
import * as importedWordsApiLink from './wordsApiLink';
import * as importedWordsResponse from './wordsResponse';
import * as importedXamlFixedSaveOptionsData from './xamlFixedSaveOptionsData';
import * as importedXamlFlowSaveOptionsData from './xamlFlowSaveOptionsData';
import * as importedXmlColor from './xmlColor';
import * as importedXpsSaveOptionsData from './xpsSaveOptionsData';

export { AttributeInfo } from '../internal/attributeInfo';
export * from './apiError';
export * from './availableFontsResponse';
export * from './bmpSaveOptionsData';
export * from './bookmark';
export * from './bookmarkData';
export * from './bookmarkResponse';
export * from './bookmarks';
export * from './bookmarksOutlineLevelData';
export * from './bookmarksResponse';
export * from './border';
export * from './borderResponse';
export * from './bordersCollection';
export * from './bordersResponse';
export * from './classificationResponse';
export * from './classificationResult';
export * from './comment';
export * from './commentBase';
export * from './commentInsert';
export * from './commentLink';
export * from './commentResponse';
export * from './commentsCollection';
export * from './commentsResponse';
export * from './commentUpdate';
export * from './compareData';
export * from './compareOptions';
export * from './csvDataLoadOptions';
export * from './docSaveOptionsData';
export * from './document';
export * from './documentEntry';
export * from './documentEntryList';
export * from './documentPosition';
export * from './documentProperties';
export * from './documentPropertiesResponse';
export * from './documentProperty';
export * from './documentPropertyBase';
export * from './documentPropertyCreateOrUpdate';
export * from './documentPropertyResponse';
export * from './documentResponse';
export * from './documentStatData';
export * from './downsampleOptionsData';
export * from './drawingObject';
export * from './drawingObjectCollection';
export * from './drawingObjectInsert';
export * from './drawingObjectLink';
export * from './drawingObjectResponse';
export * from './drawingObjectsResponse';
export * from './drawingObjectUpdate';
export * from './emfSaveOptionsData';
export * from './epubSaveOptionsData';
export * from './error';
export * from './errorDetails';
export * from './field';
export * from './fieldBase';
export * from './fieldCollection';
export * from './fieldInsert';
export * from './fieldLink';
export * from './fieldNames';
export * from './fieldNamesResponse';
export * from './fieldResponse';
export * from './fieldsResponse';
export * from './fieldUpdate';
export * from './fileLink';
export * from './filesList';
export * from './filesUploadResult';
export * from './fixedPageSaveOptionsData';
export * from './font';
export * from './fontDto';
export * from './fontInfo';
export * from './fontResponse';
export * from './footnote';
export * from './footnoteBase';
export * from './footnoteCollection';
export * from './footnoteInsert';
export * from './footnoteLink';
export * from './footnoteResponse';
export * from './footnotesResponse';
export * from './footnotesStatData';
export * from './footnoteUpdate';
export * from './formField';
export * from './formFieldCheckbox';
export * from './formFieldCollection';
export * from './formFieldDropDown';
export * from './formFieldResponse';
export * from './formFieldsResponse';
export * from './formFieldTextInput';
export * from './gifSaveOptionsData';
export * from './graphicsQualityOptionsData';
export * from './headerFooter';
export * from './headerFooterLink';
export * from './headerFooterLinkCollection';
export * from './headerFooterResponse';
export * from './headerFootersResponse';
export * from './htmlFixedSaveOptionsData';
export * from './htmlSaveOptionsData';
export * from './hyperlink';
export * from './hyperlinkResponse';
export * from './hyperlinks';
export * from './hyperlinksResponse';
export * from './imageSaveOptionsData';
export * from './jpegSaveOptionsData';
export * from './link';
export * from './linkElement';
export * from './listFormat';
export * from './listFormatUpdate';
export * from './listInfo';
export * from './listInsert';
export * from './listLevel';
export * from './listLevels';
export * from './listLevelUpdate';
export * from './listResponse';
export * from './lists';
export * from './listsResponse';
export * from './listUpdate';
export * from './loadWebDocumentData';
export * from './markdownSaveOptionsData';
export * from './metafileRenderingOptionsData';
export * from './mhtmlSaveOptionsData';
export * from './modificationOperationResult';
export * from './nodeLink';
export * from './odtSaveOptionsData';
export * from './officeMathLink';
export * from './officeMathObject';
export * from './officeMathObjectResponse';
export * from './officeMathObjectsCollection';
export * from './officeMathObjectsResponse';
export * from './ooxmlSaveOptionsData';
export * from './optimizationOptions';
export * from './outlineOptionsData';
export * from './pageNumber';
export * from './pageSetup';
export * from './pageStatData';
export * from './paragraph';
export * from './paragraphFormat';
export * from './paragraphFormatBase';
export * from './paragraphFormatResponse';
export * from './paragraphFormatUpdate';
export * from './paragraphInsert';
export * from './paragraphLink';
export * from './paragraphLinkCollection';
export * from './paragraphLinkCollectionResponse';
export * from './paragraphListFormatResponse';
export * from './paragraphResponse';
export * from './pclSaveOptionsData';
export * from './pdfDigitalSignatureDetailsData';
export * from './pdfEncryptionDetailsData';
export * from './pdfSaveOptionsData';
export * from './pngSaveOptionsData';
export * from './preferredWidth';
export * from './protectionData';
export * from './protectionDataResponse';
export * from './protectionRequest';
export * from './psSaveOptionsData';
export * from './rangeDocument';
export * from './rangeDocumentDto';
export * from './rangeTextResponse';
export * from './replaceRange';
export * from './replaceRangeDto';
export * from './replaceTextParameters';
export * from './replaceTextResponse';
export * from './reportBuildOptions';
export * from './reportEngineSettings';
export * from './revisionsModificationResponse';
export * from './rtfSaveOptionsData';
export * from './run';
export * from './runBase';
export * from './runInsert';
export * from './runLink';
export * from './runResponse';
export * from './runs';
export * from './runsResponse';
export * from './runUpdate';
export * from './saveOptionsData';
export * from './saveResponse';
export * from './saveResult';
export * from './searchResponse';
export * from './searchResult';
export * from './searchResultsCollection';
export * from './section';
export * from './sectionLink';
export * from './sectionLinkCollection';
export * from './sectionLinkCollectionResponse';
export * from './sectionPageSetupResponse';
export * from './sectionResponse';
export * from './shading';
export * from './splitDocumentResponse';
export * from './splitDocumentResult';
export * from './statDataResponse';
export * from './storageFile';
export * from './storyChildNodes';
export * from './stringFormatData';
export * from './style';
export * from './styleApply';
export * from './styleCopy';
export * from './styleInsert';
export * from './styleResponse';
export * from './stylesResponse';
export * from './styleUpdate';
export * from './svgSaveOptionsData';
export * from './table';
export * from './tableCell';
export * from './tableCellFormat';
export * from './tableCellFormatDto';
export * from './tableCellFormatResponse';
export * from './tableCellInsert';
export * from './tableCellInsertDto';
export * from './tableCellResponse';
export * from './tableInsert';
export * from './tableInsertDto';
export * from './tableLink';
export * from './tableLinkCollection';
export * from './tableLinkCollectionResponse';
export * from './tableProperties';
export * from './tablePropertiesDto';
export * from './tablePropertiesResponse';
export * from './tableResponse';
export * from './tableRow';
export * from './tableRowFormat';
export * from './tableRowFormatDto';
export * from './tableRowFormatResponse';
export * from './tableRowInsert';
export * from './tableRowInsertDto';
export * from './tableRowResponse';
export * from './tabStop';
export * from './tabStopBase';
export * from './tabStopInsert';
export * from './tabStopsResponse';
export * from './textSaveOptionsData';
export * from './tiffSaveOptionsData';
export * from './txtSaveOptionsBaseData';
export * from './watermarkText';
export * from './wordMLSaveOptionsData';
export * from './wordsApiErrorResponse';
export * from './wordsApiLink';
export * from './wordsResponse';
export * from './xamlFixedSaveOptionsData';
export * from './xamlFlowSaveOptionsData';
export * from './xmlColor';
export * from './xpsSaveOptionsData';

/**
 * WordsIncomingMessage
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

const enumsMap = {
    "Border.BorderTypeEnum": importedBorder.Border.BorderTypeEnum,
    "Border.LineStyleEnum": importedBorder.Border.LineStyleEnum,
    "CompareOptions.TargetEnum": importedCompareOptions.CompareOptions.TargetEnum,
    "Document.SourceFormatEnum": importedDocument.Document.SourceFormatEnum,
    "DrawingObject.RelativeHorizontalPositionEnum": importedDrawingObject.DrawingObject.RelativeHorizontalPositionEnum,
    "DrawingObject.RelativeVerticalPositionEnum": importedDrawingObject.DrawingObject.RelativeVerticalPositionEnum,
    "DrawingObject.WrapTypeEnum": importedDrawingObject.DrawingObject.WrapTypeEnum,
    "DrawingObjectInsert.RelativeHorizontalPositionEnum": importedDrawingObjectInsert.DrawingObjectInsert.RelativeHorizontalPositionEnum,
    "DrawingObjectInsert.RelativeVerticalPositionEnum": importedDrawingObjectInsert.DrawingObjectInsert.RelativeVerticalPositionEnum,
    "DrawingObjectInsert.WrapTypeEnum": importedDrawingObjectInsert.DrawingObjectInsert.WrapTypeEnum,
    "DrawingObjectUpdate.RelativeHorizontalPositionEnum": importedDrawingObjectUpdate.DrawingObjectUpdate.RelativeHorizontalPositionEnum,
    "DrawingObjectUpdate.RelativeVerticalPositionEnum": importedDrawingObjectUpdate.DrawingObjectUpdate.RelativeVerticalPositionEnum,
    "DrawingObjectUpdate.WrapTypeEnum": importedDrawingObjectUpdate.DrawingObjectUpdate.WrapTypeEnum,
    "Font.StyleIdentifierEnum": importedFont.Font.StyleIdentifierEnum,
    "Font.TextEffectEnum": importedFont.Font.TextEffectEnum,
    "Font.UnderlineEnum": importedFont.Font.UnderlineEnum,
    "Footnote.FootnoteTypeEnum": importedFootnote.Footnote.FootnoteTypeEnum,
    "FootnoteBase.FootnoteTypeEnum": importedFootnoteBase.FootnoteBase.FootnoteTypeEnum,
    "FormFieldTextInput.TextInputTypeEnum": importedFormFieldTextInput.FormFieldTextInput.TextInputTypeEnum,
    "GraphicsQualityOptionsData.CompositingModeEnum": importedGraphicsQualityOptionsData.GraphicsQualityOptionsData.CompositingModeEnum,
    "GraphicsQualityOptionsData.CompositingQualityEnum": importedGraphicsQualityOptionsData.GraphicsQualityOptionsData.CompositingQualityEnum,
    "GraphicsQualityOptionsData.InterpolationModeEnum": importedGraphicsQualityOptionsData.GraphicsQualityOptionsData.InterpolationModeEnum,
    "GraphicsQualityOptionsData.SmoothingModeEnum": importedGraphicsQualityOptionsData.GraphicsQualityOptionsData.SmoothingModeEnum,
    "GraphicsQualityOptionsData.TextRenderingHintEnum": importedGraphicsQualityOptionsData.GraphicsQualityOptionsData.TextRenderingHintEnum,
    "HeaderFooterLink.TypeEnum": importedHeaderFooterLink.HeaderFooterLink.TypeEnum,
    "HtmlSaveOptionsData.HtmlVersionEnum": importedHtmlSaveOptionsData.HtmlSaveOptionsData.HtmlVersionEnum,
    "HtmlSaveOptionsData.MetafileFormatEnum": importedHtmlSaveOptionsData.HtmlSaveOptionsData.MetafileFormatEnum,
    "HtmlSaveOptionsData.OfficeMathOutputModeEnum": importedHtmlSaveOptionsData.HtmlSaveOptionsData.OfficeMathOutputModeEnum,
    "ListInsert.TemplateEnum": importedListInsert.ListInsert.TemplateEnum,
    "ListLevel.AlignmentEnum": importedListLevel.ListLevel.AlignmentEnum,
    "ListLevel.NumberStyleEnum": importedListLevel.ListLevel.NumberStyleEnum,
    "ListLevel.TrailingCharacterEnum": importedListLevel.ListLevel.TrailingCharacterEnum,
    "ListLevelUpdate.AlignmentEnum": importedListLevelUpdate.ListLevelUpdate.AlignmentEnum,
    "ListLevelUpdate.NumberStyleEnum": importedListLevelUpdate.ListLevelUpdate.NumberStyleEnum,
    "ListLevelUpdate.TrailingCharacterEnum": importedListLevelUpdate.ListLevelUpdate.TrailingCharacterEnum,
    "MarkdownSaveOptionsData.TableContentAlignmentEnum": importedMarkdownSaveOptionsData.MarkdownSaveOptionsData.TableContentAlignmentEnum,
    "OdtSaveOptionsData.MeasureUnitEnum": importedOdtSaveOptionsData.OdtSaveOptionsData.MeasureUnitEnum,
    "OfficeMathObject.DisplayTypeEnum": importedOfficeMathObject.OfficeMathObject.DisplayTypeEnum,
    "OfficeMathObject.JustificationEnum": importedOfficeMathObject.OfficeMathObject.JustificationEnum,
    "OfficeMathObject.MathObjectTypeEnum": importedOfficeMathObject.OfficeMathObject.MathObjectTypeEnum,
    "OoxmlSaveOptionsData.CompressionLevelEnum": importedOoxmlSaveOptionsData.OoxmlSaveOptionsData.CompressionLevelEnum,
    "OptimizationOptions.MsWordVersionEnum": importedOptimizationOptions.OptimizationOptions.MsWordVersionEnum,
    "PageSetup.BorderAppliesToEnum": importedPageSetup.PageSetup.BorderAppliesToEnum,
    "PageSetup.BorderDistanceFromEnum": importedPageSetup.PageSetup.BorderDistanceFromEnum,
    "PageSetup.LineNumberRestartModeEnum": importedPageSetup.PageSetup.LineNumberRestartModeEnum,
    "PageSetup.OrientationEnum": importedPageSetup.PageSetup.OrientationEnum,
    "PageSetup.PageNumberStyleEnum": importedPageSetup.PageSetup.PageNumberStyleEnum,
    "PageSetup.PaperSizeEnum": importedPageSetup.PageSetup.PaperSizeEnum,
    "PageSetup.SectionStartEnum": importedPageSetup.PageSetup.SectionStartEnum,
    "PageSetup.VerticalAlignmentEnum": importedPageSetup.PageSetup.VerticalAlignmentEnum,
    "ParagraphFormatBase.AlignmentEnum": importedParagraphFormatBase.ParagraphFormatBase.AlignmentEnum,
    "ParagraphFormatBase.DropCapPositionEnum": importedParagraphFormatBase.ParagraphFormatBase.DropCapPositionEnum,
    "ParagraphFormatBase.LineSpacingRuleEnum": importedParagraphFormatBase.ParagraphFormatBase.LineSpacingRuleEnum,
    "ParagraphFormatBase.OutlineLevelEnum": importedParagraphFormatBase.ParagraphFormatBase.OutlineLevelEnum,
    "ParagraphFormatBase.StyleIdentifierEnum": importedParagraphFormatBase.ParagraphFormatBase.StyleIdentifierEnum,
    "PdfSaveOptionsData.HeaderFooterBookmarksExportModeEnum": importedPdfSaveOptionsData.PdfSaveOptionsData.HeaderFooterBookmarksExportModeEnum,
    "PreferredWidth.TypeEnum": importedPreferredWidth.PreferredWidth.TypeEnum,
    "ReplaceRange.TextTypeEnum": importedReplaceRange.ReplaceRange.TextTypeEnum,
    "ReplaceRangeDto.TextTypeEnum": importedReplaceRangeDto.ReplaceRangeDto.TextTypeEnum,
    "ReportEngineSettings.DataSourceTypeEnum": importedReportEngineSettings.ReportEngineSettings.DataSourceTypeEnum,
    "SaveOptionsData.Dml3DEffectsRenderingModeEnum": importedSaveOptionsData.SaveOptionsData.Dml3DEffectsRenderingModeEnum,
    "Shading.TextureEnum": importedShading.Shading.TextureEnum,
    "StringFormatData.AlignmentEnum": importedStringFormatData.StringFormatData.AlignmentEnum,
    "StringFormatData.FormatFlagsEnum": importedStringFormatData.StringFormatData.FormatFlagsEnum,
    "StringFormatData.HotkeyPrefixEnum": importedStringFormatData.StringFormatData.HotkeyPrefixEnum,
    "StringFormatData.LineAlignmentEnum": importedStringFormatData.StringFormatData.LineAlignmentEnum,
    "StringFormatData.TrimmingEnum": importedStringFormatData.StringFormatData.TrimmingEnum,
    "Style.StyleIdentifierEnum": importedStyle.Style.StyleIdentifierEnum,
    "Style.TypeEnum": importedStyle.Style.TypeEnum,
    "StyleInsert.StyleTypeEnum": importedStyleInsert.StyleInsert.StyleTypeEnum,
    "TableCellFormat.HorizontalMergeEnum": importedTableCellFormat.TableCellFormat.HorizontalMergeEnum,
    "TableCellFormat.OrientationEnum": importedTableCellFormat.TableCellFormat.OrientationEnum,
    "TableCellFormat.VerticalAlignmentEnum": importedTableCellFormat.TableCellFormat.VerticalAlignmentEnum,
    "TableCellFormat.VerticalMergeEnum": importedTableCellFormat.TableCellFormat.VerticalMergeEnum,
    "TableProperties.AlignmentEnum": importedTableProperties.TableProperties.AlignmentEnum,
    "TableProperties.StyleIdentifierEnum": importedTableProperties.TableProperties.StyleIdentifierEnum,
    "TableProperties.StyleOptionsEnum": importedTableProperties.TableProperties.StyleOptionsEnum,
    "TableProperties.TextWrappingEnum": importedTableProperties.TableProperties.TextWrappingEnum,
    "TableRowFormat.HeightRuleEnum": importedTableRowFormat.TableRowFormat.HeightRuleEnum,
    "TabStopBase.AlignmentEnum": importedTabStopBase.TabStopBase.AlignmentEnum,
    "TabStopBase.LeaderEnum": importedTabStopBase.TabStopBase.LeaderEnum,
    "TxtSaveOptionsBaseData.ExportHeadersFootersModeEnum": importedTxtSaveOptionsBaseData.TxtSaveOptionsBaseData.ExportHeadersFootersModeEnum,

};

const typeMap = {
    ApiError: importedApiError.ApiError,
    AvailableFontsResponse: importedAvailableFontsResponse.AvailableFontsResponse,
    BmpSaveOptionsData: importedBmpSaveOptionsData.BmpSaveOptionsData,
    Bookmark: importedBookmark.Bookmark,
    BookmarkData: importedBookmarkData.BookmarkData,
    BookmarkResponse: importedBookmarkResponse.BookmarkResponse,
    Bookmarks: importedBookmarks.Bookmarks,
    BookmarksOutlineLevelData: importedBookmarksOutlineLevelData.BookmarksOutlineLevelData,
    BookmarksResponse: importedBookmarksResponse.BookmarksResponse,
    Border: importedBorder.Border,
    BorderResponse: importedBorderResponse.BorderResponse,
    BordersCollection: importedBordersCollection.BordersCollection,
    BordersResponse: importedBordersResponse.BordersResponse,
    ClassificationResponse: importedClassificationResponse.ClassificationResponse,
    ClassificationResult: importedClassificationResult.ClassificationResult,
    Comment: importedComment.Comment,
    CommentBase: importedCommentBase.CommentBase,
    CommentInsert: importedCommentInsert.CommentInsert,
    CommentLink: importedCommentLink.CommentLink,
    CommentResponse: importedCommentResponse.CommentResponse,
    CommentsCollection: importedCommentsCollection.CommentsCollection,
    CommentsResponse: importedCommentsResponse.CommentsResponse,
    CommentUpdate: importedCommentUpdate.CommentUpdate,
    CompareData: importedCompareData.CompareData,
    CompareOptions: importedCompareOptions.CompareOptions,
    CsvDataLoadOptions: importedCsvDataLoadOptions.CsvDataLoadOptions,
    DocSaveOptionsData: importedDocSaveOptionsData.DocSaveOptionsData,
    Document: importedDocument.Document,
    DocumentEntry: importedDocumentEntry.DocumentEntry,
    DocumentEntryList: importedDocumentEntryList.DocumentEntryList,
    DocumentPosition: importedDocumentPosition.DocumentPosition,
    DocumentProperties: importedDocumentProperties.DocumentProperties,
    DocumentPropertiesResponse: importedDocumentPropertiesResponse.DocumentPropertiesResponse,
    DocumentProperty: importedDocumentProperty.DocumentProperty,
    DocumentPropertyBase: importedDocumentPropertyBase.DocumentPropertyBase,
    DocumentPropertyCreateOrUpdate: importedDocumentPropertyCreateOrUpdate.DocumentPropertyCreateOrUpdate,
    DocumentPropertyResponse: importedDocumentPropertyResponse.DocumentPropertyResponse,
    DocumentResponse: importedDocumentResponse.DocumentResponse,
    DocumentStatData: importedDocumentStatData.DocumentStatData,
    DownsampleOptionsData: importedDownsampleOptionsData.DownsampleOptionsData,
    DrawingObject: importedDrawingObject.DrawingObject,
    DrawingObjectCollection: importedDrawingObjectCollection.DrawingObjectCollection,
    DrawingObjectInsert: importedDrawingObjectInsert.DrawingObjectInsert,
    DrawingObjectLink: importedDrawingObjectLink.DrawingObjectLink,
    DrawingObjectResponse: importedDrawingObjectResponse.DrawingObjectResponse,
    DrawingObjectsResponse: importedDrawingObjectsResponse.DrawingObjectsResponse,
    DrawingObjectUpdate: importedDrawingObjectUpdate.DrawingObjectUpdate,
    EmfSaveOptionsData: importedEmfSaveOptionsData.EmfSaveOptionsData,
    EpubSaveOptionsData: importedEpubSaveOptionsData.EpubSaveOptionsData,
    Error: importedError.Error,
    ErrorDetails: importedErrorDetails.ErrorDetails,
    Field: importedField.Field,
    FieldBase: importedFieldBase.FieldBase,
    FieldCollection: importedFieldCollection.FieldCollection,
    FieldInsert: importedFieldInsert.FieldInsert,
    FieldLink: importedFieldLink.FieldLink,
    FieldNames: importedFieldNames.FieldNames,
    FieldNamesResponse: importedFieldNamesResponse.FieldNamesResponse,
    FieldResponse: importedFieldResponse.FieldResponse,
    FieldsResponse: importedFieldsResponse.FieldsResponse,
    FieldUpdate: importedFieldUpdate.FieldUpdate,
    FileLink: importedFileLink.FileLink,
    FilesList: importedFilesList.FilesList,
    FilesUploadResult: importedFilesUploadResult.FilesUploadResult,
    FixedPageSaveOptionsData: importedFixedPageSaveOptionsData.FixedPageSaveOptionsData,
    Font: importedFont.Font,
    FontDto: importedFontDto.FontDto,
    FontInfo: importedFontInfo.FontInfo,
    FontResponse: importedFontResponse.FontResponse,
    Footnote: importedFootnote.Footnote,
    FootnoteBase: importedFootnoteBase.FootnoteBase,
    FootnoteCollection: importedFootnoteCollection.FootnoteCollection,
    FootnoteInsert: importedFootnoteInsert.FootnoteInsert,
    FootnoteLink: importedFootnoteLink.FootnoteLink,
    FootnoteResponse: importedFootnoteResponse.FootnoteResponse,
    FootnotesResponse: importedFootnotesResponse.FootnotesResponse,
    FootnotesStatData: importedFootnotesStatData.FootnotesStatData,
    FootnoteUpdate: importedFootnoteUpdate.FootnoteUpdate,
    FormField: importedFormField.FormField,
    FormFieldCheckbox: importedFormFieldCheckbox.FormFieldCheckbox,
    FormFieldCollection: importedFormFieldCollection.FormFieldCollection,
    FormFieldDropDown: importedFormFieldDropDown.FormFieldDropDown,
    FormFieldResponse: importedFormFieldResponse.FormFieldResponse,
    FormFieldsResponse: importedFormFieldsResponse.FormFieldsResponse,
    FormFieldTextInput: importedFormFieldTextInput.FormFieldTextInput,
    GifSaveOptionsData: importedGifSaveOptionsData.GifSaveOptionsData,
    GraphicsQualityOptionsData: importedGraphicsQualityOptionsData.GraphicsQualityOptionsData,
    HeaderFooter: importedHeaderFooter.HeaderFooter,
    HeaderFooterLink: importedHeaderFooterLink.HeaderFooterLink,
    HeaderFooterLinkCollection: importedHeaderFooterLinkCollection.HeaderFooterLinkCollection,
    HeaderFooterResponse: importedHeaderFooterResponse.HeaderFooterResponse,
    HeaderFootersResponse: importedHeaderFootersResponse.HeaderFootersResponse,
    HtmlFixedSaveOptionsData: importedHtmlFixedSaveOptionsData.HtmlFixedSaveOptionsData,
    HtmlSaveOptionsData: importedHtmlSaveOptionsData.HtmlSaveOptionsData,
    Hyperlink: importedHyperlink.Hyperlink,
    HyperlinkResponse: importedHyperlinkResponse.HyperlinkResponse,
    Hyperlinks: importedHyperlinks.Hyperlinks,
    HyperlinksResponse: importedHyperlinksResponse.HyperlinksResponse,
    ImageSaveOptionsData: importedImageSaveOptionsData.ImageSaveOptionsData,
    JpegSaveOptionsData: importedJpegSaveOptionsData.JpegSaveOptionsData,
    Link: importedLink.Link,
    LinkElement: importedLinkElement.LinkElement,
    ListFormat: importedListFormat.ListFormat,
    ListFormatUpdate: importedListFormatUpdate.ListFormatUpdate,
    ListInfo: importedListInfo.ListInfo,
    ListInsert: importedListInsert.ListInsert,
    ListLevel: importedListLevel.ListLevel,
    ListLevels: importedListLevels.ListLevels,
    ListLevelUpdate: importedListLevelUpdate.ListLevelUpdate,
    ListResponse: importedListResponse.ListResponse,
    Lists: importedLists.Lists,
    ListsResponse: importedListsResponse.ListsResponse,
    ListUpdate: importedListUpdate.ListUpdate,
    LoadWebDocumentData: importedLoadWebDocumentData.LoadWebDocumentData,
    MarkdownSaveOptionsData: importedMarkdownSaveOptionsData.MarkdownSaveOptionsData,
    MetafileRenderingOptionsData: importedMetafileRenderingOptionsData.MetafileRenderingOptionsData,
    MhtmlSaveOptionsData: importedMhtmlSaveOptionsData.MhtmlSaveOptionsData,
    ModificationOperationResult: importedModificationOperationResult.ModificationOperationResult,
    NodeLink: importedNodeLink.NodeLink,
    OdtSaveOptionsData: importedOdtSaveOptionsData.OdtSaveOptionsData,
    OfficeMathLink: importedOfficeMathLink.OfficeMathLink,
    OfficeMathObject: importedOfficeMathObject.OfficeMathObject,
    OfficeMathObjectResponse: importedOfficeMathObjectResponse.OfficeMathObjectResponse,
    OfficeMathObjectsCollection: importedOfficeMathObjectsCollection.OfficeMathObjectsCollection,
    OfficeMathObjectsResponse: importedOfficeMathObjectsResponse.OfficeMathObjectsResponse,
    OoxmlSaveOptionsData: importedOoxmlSaveOptionsData.OoxmlSaveOptionsData,
    OptimizationOptions: importedOptimizationOptions.OptimizationOptions,
    OutlineOptionsData: importedOutlineOptionsData.OutlineOptionsData,
    PageNumber: importedPageNumber.PageNumber,
    PageSetup: importedPageSetup.PageSetup,
    PageStatData: importedPageStatData.PageStatData,
    Paragraph: importedParagraph.Paragraph,
    ParagraphFormat: importedParagraphFormat.ParagraphFormat,
    ParagraphFormatBase: importedParagraphFormatBase.ParagraphFormatBase,
    ParagraphFormatResponse: importedParagraphFormatResponse.ParagraphFormatResponse,
    ParagraphFormatUpdate: importedParagraphFormatUpdate.ParagraphFormatUpdate,
    ParagraphInsert: importedParagraphInsert.ParagraphInsert,
    ParagraphLink: importedParagraphLink.ParagraphLink,
    ParagraphLinkCollection: importedParagraphLinkCollection.ParagraphLinkCollection,
    ParagraphLinkCollectionResponse: importedParagraphLinkCollectionResponse.ParagraphLinkCollectionResponse,
    ParagraphListFormatResponse: importedParagraphListFormatResponse.ParagraphListFormatResponse,
    ParagraphResponse: importedParagraphResponse.ParagraphResponse,
    PclSaveOptionsData: importedPclSaveOptionsData.PclSaveOptionsData,
    PdfDigitalSignatureDetailsData: importedPdfDigitalSignatureDetailsData.PdfDigitalSignatureDetailsData,
    PdfEncryptionDetailsData: importedPdfEncryptionDetailsData.PdfEncryptionDetailsData,
    PdfSaveOptionsData: importedPdfSaveOptionsData.PdfSaveOptionsData,
    PngSaveOptionsData: importedPngSaveOptionsData.PngSaveOptionsData,
    PreferredWidth: importedPreferredWidth.PreferredWidth,
    ProtectionData: importedProtectionData.ProtectionData,
    ProtectionDataResponse: importedProtectionDataResponse.ProtectionDataResponse,
    ProtectionRequest: importedProtectionRequest.ProtectionRequest,
    PsSaveOptionsData: importedPsSaveOptionsData.PsSaveOptionsData,
    RangeDocument: importedRangeDocument.RangeDocument,
    RangeDocumentDto: importedRangeDocumentDto.RangeDocumentDto,
    RangeTextResponse: importedRangeTextResponse.RangeTextResponse,
    ReplaceRange: importedReplaceRange.ReplaceRange,
    ReplaceRangeDto: importedReplaceRangeDto.ReplaceRangeDto,
    ReplaceTextParameters: importedReplaceTextParameters.ReplaceTextParameters,
    ReplaceTextResponse: importedReplaceTextResponse.ReplaceTextResponse,
    ReportBuildOptions: importedReportBuildOptions.ReportBuildOptions,
    ReportEngineSettings: importedReportEngineSettings.ReportEngineSettings,
    RevisionsModificationResponse: importedRevisionsModificationResponse.RevisionsModificationResponse,
    RtfSaveOptionsData: importedRtfSaveOptionsData.RtfSaveOptionsData,
    Run: importedRun.Run,
    RunBase: importedRunBase.RunBase,
    RunInsert: importedRunInsert.RunInsert,
    RunLink: importedRunLink.RunLink,
    RunResponse: importedRunResponse.RunResponse,
    Runs: importedRuns.Runs,
    RunsResponse: importedRunsResponse.RunsResponse,
    RunUpdate: importedRunUpdate.RunUpdate,
    SaveOptionsData: importedSaveOptionsData.SaveOptionsData,
    SaveResponse: importedSaveResponse.SaveResponse,
    SaveResult: importedSaveResult.SaveResult,
    SearchResponse: importedSearchResponse.SearchResponse,
    SearchResult: importedSearchResult.SearchResult,
    SearchResultsCollection: importedSearchResultsCollection.SearchResultsCollection,
    Section: importedSection.Section,
    SectionLink: importedSectionLink.SectionLink,
    SectionLinkCollection: importedSectionLinkCollection.SectionLinkCollection,
    SectionLinkCollectionResponse: importedSectionLinkCollectionResponse.SectionLinkCollectionResponse,
    SectionPageSetupResponse: importedSectionPageSetupResponse.SectionPageSetupResponse,
    SectionResponse: importedSectionResponse.SectionResponse,
    Shading: importedShading.Shading,
    SplitDocumentResponse: importedSplitDocumentResponse.SplitDocumentResponse,
    SplitDocumentResult: importedSplitDocumentResult.SplitDocumentResult,
    StatDataResponse: importedStatDataResponse.StatDataResponse,
    StorageFile: importedStorageFile.StorageFile,
    StoryChildNodes: importedStoryChildNodes.StoryChildNodes,
    StringFormatData: importedStringFormatData.StringFormatData,
    Style: importedStyle.Style,
    StyleApply: importedStyleApply.StyleApply,
    StyleCopy: importedStyleCopy.StyleCopy,
    StyleInsert: importedStyleInsert.StyleInsert,
    StyleResponse: importedStyleResponse.StyleResponse,
    StylesResponse: importedStylesResponse.StylesResponse,
    StyleUpdate: importedStyleUpdate.StyleUpdate,
    SvgSaveOptionsData: importedSvgSaveOptionsData.SvgSaveOptionsData,
    Table: importedTable.Table,
    TableCell: importedTableCell.TableCell,
    TableCellFormat: importedTableCellFormat.TableCellFormat,
    TableCellFormatDto: importedTableCellFormatDto.TableCellFormatDto,
    TableCellFormatResponse: importedTableCellFormatResponse.TableCellFormatResponse,
    TableCellInsert: importedTableCellInsert.TableCellInsert,
    TableCellInsertDto: importedTableCellInsertDto.TableCellInsertDto,
    TableCellResponse: importedTableCellResponse.TableCellResponse,
    TableInsert: importedTableInsert.TableInsert,
    TableInsertDto: importedTableInsertDto.TableInsertDto,
    TableLink: importedTableLink.TableLink,
    TableLinkCollection: importedTableLinkCollection.TableLinkCollection,
    TableLinkCollectionResponse: importedTableLinkCollectionResponse.TableLinkCollectionResponse,
    TableProperties: importedTableProperties.TableProperties,
    TablePropertiesDto: importedTablePropertiesDto.TablePropertiesDto,
    TablePropertiesResponse: importedTablePropertiesResponse.TablePropertiesResponse,
    TableResponse: importedTableResponse.TableResponse,
    TableRow: importedTableRow.TableRow,
    TableRowFormat: importedTableRowFormat.TableRowFormat,
    TableRowFormatDto: importedTableRowFormatDto.TableRowFormatDto,
    TableRowFormatResponse: importedTableRowFormatResponse.TableRowFormatResponse,
    TableRowInsert: importedTableRowInsert.TableRowInsert,
    TableRowInsertDto: importedTableRowInsertDto.TableRowInsertDto,
    TableRowResponse: importedTableRowResponse.TableRowResponse,
    TabStop: importedTabStop.TabStop,
    TabStopBase: importedTabStopBase.TabStopBase,
    TabStopInsert: importedTabStopInsert.TabStopInsert,
    TabStopsResponse: importedTabStopsResponse.TabStopsResponse,
    TextSaveOptionsData: importedTextSaveOptionsData.TextSaveOptionsData,
    TiffSaveOptionsData: importedTiffSaveOptionsData.TiffSaveOptionsData,
    TxtSaveOptionsBaseData: importedTxtSaveOptionsBaseData.TxtSaveOptionsBaseData,
    WatermarkText: importedWatermarkText.WatermarkText,
    WordMLSaveOptionsData: importedWordMLSaveOptionsData.WordMLSaveOptionsData,
    WordsApiErrorResponse: importedWordsApiErrorResponse.WordsApiErrorResponse,
    WordsApiLink: importedWordsApiLink.WordsApiLink,
    WordsResponse: importedWordsResponse.WordsResponse,
    XamlFixedSaveOptionsData: importedXamlFixedSaveOptionsData.XamlFixedSaveOptionsData,
    XamlFlowSaveOptionsData: importedXamlFlowSaveOptionsData.XamlFlowSaveOptionsData,
    XmlColor: importedXmlColor.XmlColor,
    XpsSaveOptionsData: importedXpsSaveOptionsData.XpsSaveOptionsData
};

export {enumsMap, typeMap};

/**
 * Request model for AcceptAllRevisions operation.
 * Accepts all revisions in the document.
 */
export class AcceptAllRevisionsRequest {
    /**
     * The filename of the input document.
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

    public constructor(init?: Partial< AcceptAllRevisionsRequest >) {
        Object.assign(this, init);
    }
}

/**
 * Request model for AcceptAllRevisionsOnline operation.
 * Accepts all revisions in the document.
 */
export class AcceptAllRevisionsOnlineRequest {
    /**
     * The document.
     */
    public document: Readable;

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

    public constructor(init?: Partial< AcceptAllRevisionsOnlineRequest >) {
        Object.assign(this, init);
    }
}

/**
 * Request model for AppendDocument operation.
 * Appends documents to the original document.
 */
export class AppendDocumentRequest {
    /**
     * The filename of the input document.
     */
    public name: string;

    /**
     * <see cref="DocumentEntryList"/> with a list of documents to append.
     */
    public documentList: importedDocumentEntryList.DocumentEntryList;

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

    public constructor(init?: Partial< AppendDocumentRequest >) {
        Object.assign(this, init);
    }
}

/**
 * Request model for AppendDocumentOnline operation.
 * Appends documents to the original document.
 */
export class AppendDocumentOnlineRequest {
    /**
     * The document.
     */
    public document: Readable;

    /**
     * <see cref="DocumentEntryList"/> with a list of documents to append.
     */
    public documentList: importedDocumentEntryList.DocumentEntryList;

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

    public constructor(init?: Partial< AppendDocumentOnlineRequest >) {
        Object.assign(this, init);
    }
}

/**
 * Request model for ApplyStyleToDocumentElement operation.
 * Applies a style to the document node.
 */
export class ApplyStyleToDocumentElementRequest {
    /**
     * The filename of the input document.
     */
    public name: string;

    /**
     * The path to the node in the document tree, that supports styles: ParagraphFormat, List, ListLevel, Table.
     */
    public styledNodePath: string;

    /**
     * Style to apply.
     */
    public styleApply: importedStyleApply.StyleApply;

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

    public constructor(init?: Partial< ApplyStyleToDocumentElementRequest >) {
        Object.assign(this, init);
    }
}

/**
 * Request model for ApplyStyleToDocumentElementOnline operation.
 * Applies a style to the document node.
 */
export class ApplyStyleToDocumentElementOnlineRequest {
    /**
     * The document.
     */
    public document: Readable;

    /**
     * The path to the node in the document tree, that supports styles: ParagraphFormat, List, ListLevel, Table.
     */
    public styledNodePath: string;

    /**
     * Style to apply.
     */
    public styleApply: importedStyleApply.StyleApply;

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

    public constructor(init?: Partial< ApplyStyleToDocumentElementOnlineRequest >) {
        Object.assign(this, init);
    }
}

/**
 * Request model for BuildReport operation.
 * Executes the report generation process using the specified document template and the external data source in XML, JSON or CSV format.
 */
export class BuildReportRequest {
    /**
     * The filename of the input document.
     */
    public name: string;

    /**
     * A string providing a data to populate the specified template. The string must be of one of the following types: xml, json, csv.
     */
    public data: string;

    /**
     * An object providing a settings of report engine.
     */
    public reportEngineSettings: importedReportEngineSettings.ReportEngineSettings;

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
     * The filename of the output document. If this parameter is omitted, the result will be saved with autogenerated name.
     */
    public destFileName: string;

    public constructor(init?: Partial< BuildReportRequest >) {
        Object.assign(this, init);
    }
}

/**
 * Request model for BuildReportOnline operation.
 * Executes the report generation process online using the specified document template and the external data source in XML, JSON or CSV format.
 */
export class BuildReportOnlineRequest {
    /**
     * File with template.
     */
    public template: Readable;

    /**
     * A string providing a data to populate the specified template. The string must be of one of the following types: xml, json, csv.
     */
    public data: string;

    /**
     * An object providing a settings of report engine.
     */
    public reportEngineSettings: importedReportEngineSettings.ReportEngineSettings;

    /**
     * The filename of the output document, that will be used when the resulting document has a dynamic field {filename}. If it is not set, the "template" will be used instead.
     */
    public documentFileName: string;

    public constructor(init?: Partial< BuildReportOnlineRequest >) {
        Object.assign(this, init);
    }
}

/**
 * Request model for Classify operation.
 * Runs a multi-class text classification for the specified raw text.
 */
export class ClassifyRequest {
    /**
     * The text to classify.
     */
    public text: string;

    /**
     * The number of the best classes to return.
     */
    public bestClassesCount: string;

    public constructor(init?: Partial< ClassifyRequest >) {
        Object.assign(this, init);
    }
}

/**
 * Request model for ClassifyDocument operation.
 * Runs a multi-class text classification for the document.
 */
export class ClassifyDocumentRequest {
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
     * The number of the best classes to return.
     */
    public bestClassesCount: string;

    /**
     * The taxonomy to use.
     */
    public taxonomy: string;

    public constructor(init?: Partial< ClassifyDocumentRequest >) {
        Object.assign(this, init);
    }
}

/**
 * Request model for ClassifyDocumentOnline operation.
 * Runs a multi-class text classification for the document.
 */
export class ClassifyDocumentOnlineRequest {
    /**
     * The document.
     */
    public document: Readable;

    /**
     * Encoding that will be used to load an HTML (or TXT) document if the encoding is not specified in HTML.
     */
    public loadEncoding: string;

    /**
     * Password for opening an encrypted document.
     */
    public password: string;

    /**
     * The number of the best classes to return.
     */
    public bestClassesCount: string;

    /**
     * The taxonomy to use.
     */
    public taxonomy: string;

    public constructor(init?: Partial< ClassifyDocumentOnlineRequest >) {
        Object.assign(this, init);
    }
}

/**
 * Request model for CompareDocument operation.
 * Compares two documents.
 */
export class CompareDocumentRequest {
    /**
     * The filename of the input document.
     */
    public name: string;

    /**
     * Compare data.
     */
    public compareData: importedCompareData.CompareData;

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

    public constructor(init?: Partial< CompareDocumentRequest >) {
        Object.assign(this, init);
    }
}

/**
 * Request model for CompareDocumentOnline operation.
 * Compares two documents.
 */
export class CompareDocumentOnlineRequest {
    /**
     * The document.
     */
    public document: Readable;

    /**
     * Compare data.
     */
    public compareData: importedCompareData.CompareData;

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

    public constructor(init?: Partial< CompareDocumentOnlineRequest >) {
        Object.assign(this, init);
    }
}

/**
 * Request model for ConvertDocument operation.
 * Converts a document on a local drive to the specified format.
 */
export class ConvertDocumentRequest {
    /**
     * Converting document.
     */
    public document: Readable;

    /**
     * The format to convert.
     */
    public format: string;

    /**
     * The path to the output document on a local storage.
     */
    public outPath: string;

    /**
     * The filename of the output document, that will be used when the resulting document has a dynamic field {filename}. If it is not set, the "sourceFilename" will be used instead.
     */
    public fileNameFieldValue: string;

    /**
     * Original document storage.
     */
    public storage: string;

    /**
     * Folder in filestorage with custom fonts.
     */
    public fontsLocation: string;

    public constructor(init?: Partial< ConvertDocumentRequest >) {
        Object.assign(this, init);
    }
}

/**
 * Request model for CopyFile operation.
 * Copy file.
 */
export class CopyFileRequest {
    /**
     * Destination file path.
     */
    public destPath: string;

    /**
     * Source file's path e.g. '/Folder 1/file.ext' or '/Bucket/Folder 1/file.ext'.
     */
    public srcPath: string;

    /**
     * Source storage name.
     */
    public srcStorageName: string;

    /**
     * Destination storage name.
     */
    public destStorageName: string;

    /**
     * File version ID to copy.
     */
    public versionId: string;

    public constructor(init?: Partial< CopyFileRequest >) {
        Object.assign(this, init);
    }
}

/**
 * Request model for CopyFolder operation.
 * Copy folder.
 */
export class CopyFolderRequest {
    /**
     * Destination folder path e.g. '/dst'.
     */
    public destPath: string;

    /**
     * Source folder path e.g. /Folder1.
     */
    public srcPath: string;

    /**
     * Source storage name.
     */
    public srcStorageName: string;

    /**
     * Destination storage name.
     */
    public destStorageName: string;

    public constructor(init?: Partial< CopyFolderRequest >) {
        Object.assign(this, init);
    }
}

/**
 * Request model for CopyStyle operation.
 * Makes a copy of the style in the document.
 */
export class CopyStyleRequest {
    /**
     * The filename of the input document.
     */
    public name: string;

    /**
     * Style to copy.
     */
    public styleCopy: importedStyleCopy.StyleCopy;

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

    public constructor(init?: Partial< CopyStyleRequest >) {
        Object.assign(this, init);
    }
}

/**
 * Request model for CopyStyleOnline operation.
 * Makes a copy of the style in the document.
 */
export class CopyStyleOnlineRequest {
    /**
     * The document.
     */
    public document: Readable;

    /**
     * Style to copy.
     */
    public styleCopy: importedStyleCopy.StyleCopy;

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

    public constructor(init?: Partial< CopyStyleOnlineRequest >) {
        Object.assign(this, init);
    }
}

/**
 * Request model for CreateDocument operation.
 * Supported extensions: ".doc", ".docx", ".docm", ".dot", ".dotm", ".dotx", ".flatopc", ".fopc", ".flatopc_macro", ".fopc_macro", ".flatopc_template", ".fopc_template", ".flatopc_template_macro", ".fopc_template_macro", ".wordml", ".wml", ".rtf".
 */
export class CreateDocumentRequest {
    /**
     * The filename of the document.
     */
    public fileName: string;

    /**
     * The path to the document folder.
     */
    public folder: string;

    /**
     * Original document storage.
     */
    public storage: string;

    public constructor(init?: Partial< CreateDocumentRequest >) {
        Object.assign(this, init);
    }
}

/**
 * Request model for CreateFolder operation.
 * Create the folder.
 */
export class CreateFolderRequest {
    /**
     * Target folder's path e.g. Folder1/Folder2/. The folders will be created recursively.
     */
    public path: string;

    /**
     * Storage name.
     */
    public storageName: string;

    public constructor(init?: Partial< CreateFolderRequest >) {
        Object.assign(this, init);
    }
}

/**
 * Request model for CreateOrUpdateDocumentProperty operation.
 * Adds a new or updates an existing document property.
 */
export class CreateOrUpdateDocumentPropertyRequest {
    /**
     * The filename of the input document.
     */
    public name: string;

    /**
     * The name of the property.
     */
    public propertyName: string;

    /**
     * The property with new value.
     */
    public property: importedDocumentPropertyCreateOrUpdate.DocumentPropertyCreateOrUpdate;

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

    public constructor(init?: Partial< CreateOrUpdateDocumentPropertyRequest >) {
        Object.assign(this, init);
    }
}

/**
 * Request model for CreateOrUpdateDocumentPropertyOnline operation.
 * Adds a new or updates an existing document property.
 */
export class CreateOrUpdateDocumentPropertyOnlineRequest {
    /**
     * The document.
     */
    public document: Readable;

    /**
     * The name of the property.
     */
    public propertyName: string;

    /**
     * The property with new value.
     */
    public property: importedDocumentPropertyCreateOrUpdate.DocumentPropertyCreateOrUpdate;

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

    public constructor(init?: Partial< CreateOrUpdateDocumentPropertyOnlineRequest >) {
        Object.assign(this, init);
    }
}

/**
 * Request model for DeleteAllParagraphTabStops operation.
 * Removes paragraph tab stops from the document node.
 */
export class DeleteAllParagraphTabStopsRequest {
    /**
     * The filename of the input document.
     */
    public name: string;

    /**
     * Object index.
     */
    public index: number;

    /**
     * The path to the node in the document tree.
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

    public constructor(init?: Partial< DeleteAllParagraphTabStopsRequest >) {
        Object.assign(this, init);
    }
}

/**
 * Request model for DeleteAllParagraphTabStopsOnline operation.
 * Removes paragraph tab stops from the document node.
 */
export class DeleteAllParagraphTabStopsOnlineRequest {
    /**
     * The document.
     */
    public document: Readable;

    /**
     * Object index.
     */
    public index: number;

    /**
     * The path to the node in the document tree.
     */
    public nodePath: string;

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

    public constructor(init?: Partial< DeleteAllParagraphTabStopsOnlineRequest >) {
        Object.assign(this, init);
    }
}

/**
 * Request model for DeleteBorder operation.
 * The 'nodePath' parameter should refer to a paragraph, a cell or a row.
 */
export class DeleteBorderRequest {
    /**
     * The filename of the input document.
     */
    public name: string;

    /**
     * Border type.
     */
    public borderType: string;

    /**
     * The path to the node in the document tree.
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

    public constructor(init?: Partial< DeleteBorderRequest >) {
        Object.assign(this, init);
    }
}

/**
 * Request model for DeleteBorderOnline operation.
 * Removes a border from the document node.
 */
export class DeleteBorderOnlineRequest {
    /**
     * The document.
     */
    public document: Readable;

    /**
     * Border type.
     */
    public borderType: string;

    /**
     * The path to the node in the document tree.
     */
    public nodePath: string;

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

    public constructor(init?: Partial< DeleteBorderOnlineRequest >) {
        Object.assign(this, init);
    }
}

/**
 * Request model for DeleteBorders operation.
 * The 'nodePath' parameter should refer to a paragraph, a cell or a row.
 */
export class DeleteBordersRequest {
    /**
     * The filename of the input document.
     */
    public name: string;

    /**
     * The path to the node in the document tree.
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

    public constructor(init?: Partial< DeleteBordersRequest >) {
        Object.assign(this, init);
    }
}

/**
 * Request model for DeleteBordersOnline operation.
 * Removes borders from the document node.
 */
export class DeleteBordersOnlineRequest {
    /**
     * The document.
     */
    public document: Readable;

    /**
     * The path to the node in the document tree.
     */
    public nodePath: string;

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

    public constructor(init?: Partial< DeleteBordersOnlineRequest >) {
        Object.assign(this, init);
    }
}

/**
 * Request model for DeleteComment operation.
 * Removes a comment from the document.
 */
export class DeleteCommentRequest {
    /**
     * The filename of the input document.
     */
    public name: string;

    /**
     * The index of the comment.
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

    public constructor(init?: Partial< DeleteCommentRequest >) {
        Object.assign(this, init);
    }
}

/**
 * Request model for DeleteCommentOnline operation.
 * Removes a comment from the document.
 */
export class DeleteCommentOnlineRequest {
    /**
     * The document.
     */
    public document: Readable;

    /**
     * The index of the comment.
     */
    public commentIndex: number;

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

    public constructor(init?: Partial< DeleteCommentOnlineRequest >) {
        Object.assign(this, init);
    }
}

/**
 * Request model for DeleteComments operation.
 * Removes all comments from the document.
 */
export class DeleteCommentsRequest {
    /**
     * The filename of the input document.
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

    public constructor(init?: Partial< DeleteCommentsRequest >) {
        Object.assign(this, init);
    }
}

/**
 * Request model for DeleteCommentsOnline operation.
 * Removes all comments from the document.
 */
export class DeleteCommentsOnlineRequest {
    /**
     * The document.
     */
    public document: Readable;

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

    public constructor(init?: Partial< DeleteCommentsOnlineRequest >) {
        Object.assign(this, init);
    }
}

/**
 * Request model for DeleteDocumentProperty operation.
 * Removes a document property.
 */
export class DeleteDocumentPropertyRequest {
    /**
     * The filename of the input document.
     */
    public name: string;

    /**
     * The name of the property.
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

    public constructor(init?: Partial< DeleteDocumentPropertyRequest >) {
        Object.assign(this, init);
    }
}

/**
 * Request model for DeleteDocumentPropertyOnline operation.
 * Removes a document property.
 */
export class DeleteDocumentPropertyOnlineRequest {
    /**
     * The document.
     */
    public document: Readable;

    /**
     * The name of the property.
     */
    public propertyName: string;

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

    public constructor(init?: Partial< DeleteDocumentPropertyOnlineRequest >) {
        Object.assign(this, init);
    }
}

/**
 * Request model for DeleteDrawingObject operation.
 * Removes a DrawingObject from the document node.
 */
export class DeleteDrawingObjectRequest {
    /**
     * The filename of the input document.
     */
    public name: string;

    /**
     * Object index.
     */
    public index: number;

    /**
     * The path to the node in the document tree.
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

    public constructor(init?: Partial< DeleteDrawingObjectRequest >) {
        Object.assign(this, init);
    }
}

/**
 * Request model for DeleteDrawingObjectOnline operation.
 * Removes a DrawingObject from the document node.
 */
export class DeleteDrawingObjectOnlineRequest {
    /**
     * The document.
     */
    public document: Readable;

    /**
     * Object index.
     */
    public index: number;

    /**
     * The path to the node in the document tree.
     */
    public nodePath: string;

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

    public constructor(init?: Partial< DeleteDrawingObjectOnlineRequest >) {
        Object.assign(this, init);
    }
}

/**
 * Request model for DeleteField operation.
 * Removes a field from the document node.
 */
export class DeleteFieldRequest {
    /**
     * The filename of the input document.
     */
    public name: string;

    /**
     * Object index.
     */
    public index: number;

    /**
     * The path to the node in the document tree.
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

    public constructor(init?: Partial< DeleteFieldRequest >) {
        Object.assign(this, init);
    }
}

/**
 * Request model for DeleteFieldOnline operation.
 * Removes a field from the document node.
 */
export class DeleteFieldOnlineRequest {
    /**
     * The document.
     */
    public document: Readable;

    /**
     * Object index.
     */
    public index: number;

    /**
     * The path to the node in the document tree.
     */
    public nodePath: string;

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

    public constructor(init?: Partial< DeleteFieldOnlineRequest >) {
        Object.assign(this, init);
    }
}

/**
 * Request model for DeleteFields operation.
 * Removes fields from the document node.
 */
export class DeleteFieldsRequest {
    /**
     * The filename of the input document.
     */
    public name: string;

    /**
     * The path to the node in the document tree.
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

    public constructor(init?: Partial< DeleteFieldsRequest >) {
        Object.assign(this, init);
    }
}

/**
 * Request model for DeleteFieldsOnline operation.
 * Removes fields from the document node.
 */
export class DeleteFieldsOnlineRequest {
    /**
     * The document.
     */
    public document: Readable;

    /**
     * The path to the node in the document tree.
     */
    public nodePath: string;

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

    public constructor(init?: Partial< DeleteFieldsOnlineRequest >) {
        Object.assign(this, init);
    }
}

/**
 * Request model for DeleteFile operation.
 * Delete file.
 */
export class DeleteFileRequest {
    /**
     * Path of the file including the file name and extension e.g. /folder1/file.ext.
     */
    public path: string;

    /**
     * Storage name.
     */
    public storageName: string;

    /**
     * File version ID to delete.
     */
    public versionId: string;

    public constructor(init?: Partial< DeleteFileRequest >) {
        Object.assign(this, init);
    }
}

/**
 * Request model for DeleteFolder operation.
 * Delete folder.
 */
export class DeleteFolderRequest {
    /**
     * Folder path e.g. '/folder'.
     */
    public path: string;

    /**
     * Storage name.
     */
    public storageName: string;

    /**
     * Enable to delete folders, subfolders and files.
     */
    public recursive: boolean;

    public constructor(init?: Partial< DeleteFolderRequest >) {
        Object.assign(this, init);
    }
}

/**
 * Request model for DeleteFootnote operation.
 * Removes a footnote from the document node.
 */
export class DeleteFootnoteRequest {
    /**
     * The filename of the input document.
     */
    public name: string;

    /**
     * Object index.
     */
    public index: number;

    /**
     * The path to the node in the document tree.
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

    public constructor(init?: Partial< DeleteFootnoteRequest >) {
        Object.assign(this, init);
    }
}

/**
 * Request model for DeleteFootnoteOnline operation.
 * Removes a footnote from the document node.
 */
export class DeleteFootnoteOnlineRequest {
    /**
     * The document.
     */
    public document: Readable;

    /**
     * Object index.
     */
    public index: number;

    /**
     * The path to the node in the document tree.
     */
    public nodePath: string;

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

    public constructor(init?: Partial< DeleteFootnoteOnlineRequest >) {
        Object.assign(this, init);
    }
}

/**
 * Request model for DeleteFormField operation.
 * Removes a form field from the document node.
 */
export class DeleteFormFieldRequest {
    /**
     * The filename of the input document.
     */
    public name: string;

    /**
     * Object index.
     */
    public index: number;

    /**
     * The path to the node in the document tree.
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

    public constructor(init?: Partial< DeleteFormFieldRequest >) {
        Object.assign(this, init);
    }
}

/**
 * Request model for DeleteFormFieldOnline operation.
 * Removes a form field from the document node.
 */
export class DeleteFormFieldOnlineRequest {
    /**
     * The document.
     */
    public document: Readable;

    /**
     * Object index.
     */
    public index: number;

    /**
     * The path to the node in the document tree.
     */
    public nodePath: string;

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

    public constructor(init?: Partial< DeleteFormFieldOnlineRequest >) {
        Object.assign(this, init);
    }
}

/**
 * Request model for DeleteHeaderFooter operation.
 * Removes a HeaderFooter object from the document section.
 */
export class DeleteHeaderFooterRequest {
    /**
     * The filename of the input document.
     */
    public name: string;

    /**
     * The path to the section in the document tree.
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

    public constructor(init?: Partial< DeleteHeaderFooterRequest >) {
        Object.assign(this, init);
    }
}

/**
 * Request model for DeleteHeaderFooterOnline operation.
 * Removes a HeaderFooter object from the document section.
 */
export class DeleteHeaderFooterOnlineRequest {
    /**
     * The document.
     */
    public document: Readable;

    /**
     * The path to the section in the document tree.
     */
    public sectionPath: string;

    /**
     * Object index.
     */
    public index: number;

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

    public constructor(init?: Partial< DeleteHeaderFooterOnlineRequest >) {
        Object.assign(this, init);
    }
}

/**
 * Request model for DeleteHeadersFooters operation.
 * Removes HeaderFooter objects from the document section.
 */
export class DeleteHeadersFootersRequest {
    /**
     * The filename of the input document.
     */
    public name: string;

    /**
     * The path to the section in the document tree.
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
     * The list of HeaderFooter types.
     */
    public headersFootersTypes: string;

    public constructor(init?: Partial< DeleteHeadersFootersRequest >) {
        Object.assign(this, init);
    }
}

/**
 * Request model for DeleteHeadersFootersOnline operation.
 * Removes HeaderFooter objects from the document section.
 */
export class DeleteHeadersFootersOnlineRequest {
    /**
     * The document.
     */
    public document: Readable;

    /**
     * The path to the section in the document tree.
     */
    public sectionPath: string;

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
     * The list of HeaderFooter types.
     */
    public headersFootersTypes: string;

    public constructor(init?: Partial< DeleteHeadersFootersOnlineRequest >) {
        Object.assign(this, init);
    }
}

/**
 * Request model for DeleteMacros operation.
 * Removes macros from the document.
 */
export class DeleteMacrosRequest {
    /**
     * The filename of the input document.
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

    public constructor(init?: Partial< DeleteMacrosRequest >) {
        Object.assign(this, init);
    }
}

/**
 * Request model for DeleteMacrosOnline operation.
 * Removes macros from the document.
 */
export class DeleteMacrosOnlineRequest {
    /**
     * The document.
     */
    public document: Readable;

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

    public constructor(init?: Partial< DeleteMacrosOnlineRequest >) {
        Object.assign(this, init);
    }
}

/**
 * Request model for DeleteOfficeMathObject operation.
 * Removes an OfficeMath object from the document node.
 */
export class DeleteOfficeMathObjectRequest {
    /**
     * The filename of the input document.
     */
    public name: string;

    /**
     * Object index.
     */
    public index: number;

    /**
     * The path to the node in the document tree.
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

    public constructor(init?: Partial< DeleteOfficeMathObjectRequest >) {
        Object.assign(this, init);
    }
}

/**
 * Request model for DeleteOfficeMathObjectOnline operation.
 * Removes an OfficeMath object from the document node.
 */
export class DeleteOfficeMathObjectOnlineRequest {
    /**
     * The document.
     */
    public document: Readable;

    /**
     * Object index.
     */
    public index: number;

    /**
     * The path to the node in the document tree.
     */
    public nodePath: string;

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

    public constructor(init?: Partial< DeleteOfficeMathObjectOnlineRequest >) {
        Object.assign(this, init);
    }
}

/**
 * Request model for DeleteParagraph operation.
 * Removes a paragraph from the document node.
 */
export class DeleteParagraphRequest {
    /**
     * The filename of the input document.
     */
    public name: string;

    /**
     * Object index.
     */
    public index: number;

    /**
     * The path to the node in the document tree.
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

    public constructor(init?: Partial< DeleteParagraphRequest >) {
        Object.assign(this, init);
    }
}

/**
 * Request model for DeleteParagraphListFormat operation.
 * Removes the formatting properties of a paragraph list from the document node.
 */
export class DeleteParagraphListFormatRequest {
    /**
     * The filename of the input document.
     */
    public name: string;

    /**
     * Object index.
     */
    public index: number;

    /**
     * The path to the node in the document tree.
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

    public constructor(init?: Partial< DeleteParagraphListFormatRequest >) {
        Object.assign(this, init);
    }
}

/**
 * Request model for DeleteParagraphListFormatOnline operation.
 * Removes the formatting properties of a paragraph list from the document node.
 */
export class DeleteParagraphListFormatOnlineRequest {
    /**
     * The document.
     */
    public document: Readable;

    /**
     * Object index.
     */
    public index: number;

    /**
     * The path to the node in the document tree.
     */
    public nodePath: string;

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

    public constructor(init?: Partial< DeleteParagraphListFormatOnlineRequest >) {
        Object.assign(this, init);
    }
}

/**
 * Request model for DeleteParagraphOnline operation.
 * Removes a paragraph from the document node.
 */
export class DeleteParagraphOnlineRequest {
    /**
     * The document.
     */
    public document: Readable;

    /**
     * Object index.
     */
    public index: number;

    /**
     * The path to the node in the document tree.
     */
    public nodePath: string;

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

    public constructor(init?: Partial< DeleteParagraphOnlineRequest >) {
        Object.assign(this, init);
    }
}

/**
 * Request model for DeleteParagraphTabStop operation.
 * Removes a paragraph tab stop from the document node.
 */
export class DeleteParagraphTabStopRequest {
    /**
     * The filename of the input document.
     */
    public name: string;

    /**
     * The position of a tab stop to remove.
     */
    public position: number;

    /**
     * Object index.
     */
    public index: number;

    /**
     * The path to the node in the document tree.
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

    public constructor(init?: Partial< DeleteParagraphTabStopRequest >) {
        Object.assign(this, init);
    }
}

/**
 * Request model for DeleteParagraphTabStopOnline operation.
 * Removes a paragraph tab stop from the document node.
 */
export class DeleteParagraphTabStopOnlineRequest {
    /**
     * The document.
     */
    public document: Readable;

    /**
     * The position of a tab stop to remove.
     */
    public position: number;

    /**
     * Object index.
     */
    public index: number;

    /**
     * The path to the node in the document tree.
     */
    public nodePath: string;

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

    public constructor(init?: Partial< DeleteParagraphTabStopOnlineRequest >) {
        Object.assign(this, init);
    }
}

/**
 * Request model for DeleteRun operation.
 * Removes a Run object from the paragraph.
 */
export class DeleteRunRequest {
    /**
     * The filename of the input document.
     */
    public name: string;

    /**
     * The path to the paragraph in the document tree.
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

    public constructor(init?: Partial< DeleteRunRequest >) {
        Object.assign(this, init);
    }
}

/**
 * Request model for DeleteRunOnline operation.
 * Removes a Run object from the paragraph.
 */
export class DeleteRunOnlineRequest {
    /**
     * The document.
     */
    public document: Readable;

    /**
     * The path to the paragraph in the document tree.
     */
    public paragraphPath: string;

    /**
     * Object index.
     */
    public index: number;

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

    public constructor(init?: Partial< DeleteRunOnlineRequest >) {
        Object.assign(this, init);
    }
}

/**
 * Request model for DeleteSection operation.
 * Removes a section from the document.
 */
export class DeleteSectionRequest {
    /**
     * The filename of the input document.
     */
    public name: string;

    /**
     * The index of the section.
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

    public constructor(init?: Partial< DeleteSectionRequest >) {
        Object.assign(this, init);
    }
}

/**
 * Request model for DeleteSectionOnline operation.
 * Removes a section from the document.
 */
export class DeleteSectionOnlineRequest {
    /**
     * The document.
     */
    public document: Readable;

    /**
     * The index of the section.
     */
    public sectionIndex: number;

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

    public constructor(init?: Partial< DeleteSectionOnlineRequest >) {
        Object.assign(this, init);
    }
}

/**
 * Request model for DeleteTable operation.
 * Removes a table from the document node.
 */
export class DeleteTableRequest {
    /**
     * The filename of the input document.
     */
    public name: string;

    /**
     * Object index.
     */
    public index: number;

    /**
     * The path to the node in the document tree.
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

    public constructor(init?: Partial< DeleteTableRequest >) {
        Object.assign(this, init);
    }
}

/**
 * Request model for DeleteTableCell operation.
 * Removes a cell from the table row.
 */
export class DeleteTableCellRequest {
    /**
     * The filename of the input document.
     */
    public name: string;

    /**
     * The path to the table row in the document tree.
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

    public constructor(init?: Partial< DeleteTableCellRequest >) {
        Object.assign(this, init);
    }
}

/**
 * Request model for DeleteTableCellOnline operation.
 * Removes a cell from the table row.
 */
export class DeleteTableCellOnlineRequest {
    /**
     * The document.
     */
    public document: Readable;

    /**
     * The path to the table row in the document tree.
     */
    public tableRowPath: string;

    /**
     * Object index.
     */
    public index: number;

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

    public constructor(init?: Partial< DeleteTableCellOnlineRequest >) {
        Object.assign(this, init);
    }
}

/**
 * Request model for DeleteTableOnline operation.
 * Removes a table from the document node.
 */
export class DeleteTableOnlineRequest {
    /**
     * The document.
     */
    public document: Readable;

    /**
     * Object index.
     */
    public index: number;

    /**
     * The path to the node in the document tree.
     */
    public nodePath: string;

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

    public constructor(init?: Partial< DeleteTableOnlineRequest >) {
        Object.assign(this, init);
    }
}

/**
 * Request model for DeleteTableRow operation.
 * Removes a row from the table.
 */
export class DeleteTableRowRequest {
    /**
     * The filename of the input document.
     */
    public name: string;

    /**
     * The path to the table in the document tree.
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

    public constructor(init?: Partial< DeleteTableRowRequest >) {
        Object.assign(this, init);
    }
}

/**
 * Request model for DeleteTableRowOnline operation.
 * Removes a row from the table.
 */
export class DeleteTableRowOnlineRequest {
    /**
     * The document.
     */
    public document: Readable;

    /**
     * The path to the table in the document tree.
     */
    public tablePath: string;

    /**
     * Object index.
     */
    public index: number;

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

    public constructor(init?: Partial< DeleteTableRowOnlineRequest >) {
        Object.assign(this, init);
    }
}

/**
 * Request model for DeleteWatermark operation.
 * Removes a watermark from the document.
 */
export class DeleteWatermarkRequest {
    /**
     * The filename of the input document.
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

    public constructor(init?: Partial< DeleteWatermarkRequest >) {
        Object.assign(this, init);
    }
}

/**
 * Request model for DeleteWatermarkOnline operation.
 * Removes a watermark from the document.
 */
export class DeleteWatermarkOnlineRequest {
    /**
     * The document.
     */
    public document: Readable;

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

    public constructor(init?: Partial< DeleteWatermarkOnlineRequest >) {
        Object.assign(this, init);
    }
}

/**
 * Request model for DownloadFile operation.
 * Download file.
 */
export class DownloadFileRequest {
    /**
     * Path of the file including the file name and extension e.g. /folder1/file.ext.
     */
    public path: string;

    /**
     * Storage name.
     */
    public storageName: string;

    /**
     * File version ID to download.
     */
    public versionId: string;

    public constructor(init?: Partial< DownloadFileRequest >) {
        Object.assign(this, init);
    }
}

/**
 * Request model for ExecuteMailMerge operation.
 * Executes a Mail Merge operation.
 */
export class ExecuteMailMergeRequest {
    /**
     * The filename of the input document.
     */
    public name: string;

    /**
     * Mail merge data.
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
     * The flag indicating whether to execute Mail Merge operation with regions.
     */
    public withRegions: boolean;

    /**
     * The data file.
     */
    public mailMergeDataFile: string;

    /**
     * The cleanup options.
     */
    public cleanup: string;

    /**
     * The flag indicating whether paragraph with TableStart or TableEnd field should be fully included into mail merge region or particular range between TableStart and TableEnd fields. The default value is true.
     */
    public useWholeParagraphAsRegion: boolean;

    /**
     * The filename of the output document. If this parameter is omitted, the result will be saved with autogenerated name.
     */
    public destFileName: string;

    public constructor(init?: Partial< ExecuteMailMergeRequest >) {
        Object.assign(this, init);
    }
}

/**
 * Request model for ExecuteMailMergeOnline operation.
 * Executes a Mail Merge operation online.
 */
export class ExecuteMailMergeOnlineRequest {
    /**
     * File with template.
     */
    public template: Readable;

    /**
     * File with mailmerge data.
     */
    public data: Readable;

    /**
     * The flag indicating whether to execute Mail Merge operation with regions.
     */
    public withRegions: boolean;

    /**
     * The cleanup options.
     */
    public cleanup: string;

    /**
     * The filename of the output document, that will be used when the resulting document has a dynamic field {filename}. If it is not set, the "template" will be used instead.
     */
    public documentFileName: string;

    public constructor(init?: Partial< ExecuteMailMergeOnlineRequest >) {
        Object.assign(this, init);
    }
}

/**
 * Request model for GetAvailableFonts operation.
 * Reads available fonts from the document.
 */
export class GetAvailableFontsRequest {
    /**
     * The folder in cloud storage with custom fonts.
     */
    public fontsLocation: string;

    public constructor(init?: Partial< GetAvailableFontsRequest >) {
        Object.assign(this, init);
    }
}

/**
 * Request model for GetBookmarkByName operation.
 * Reads a bookmark, specified by name, from the document.
 */
export class GetBookmarkByNameRequest {
    /**
     * The filename of the input document.
     */
    public name: string;

    /**
     * The name of the bookmark.
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

    public constructor(init?: Partial< GetBookmarkByNameRequest >) {
        Object.assign(this, init);
    }
}

/**
 * Request model for GetBookmarkByNameOnline operation.
 * Reads a bookmark, specified by name, from the document.
 */
export class GetBookmarkByNameOnlineRequest {
    /**
     * The document.
     */
    public document: Readable;

    /**
     * The name of the bookmark.
     */
    public bookmarkName: string;

    /**
     * Encoding that will be used to load an HTML (or TXT) document if the encoding is not specified in HTML.
     */
    public loadEncoding: string;

    /**
     * Password for opening an encrypted document.
     */
    public password: string;

    public constructor(init?: Partial< GetBookmarkByNameOnlineRequest >) {
        Object.assign(this, init);
    }
}

/**
 * Request model for GetBookmarks operation.
 * Reads bookmarks from the document.
 */
export class GetBookmarksRequest {
    /**
     * The filename of the input document.
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

    public constructor(init?: Partial< GetBookmarksRequest >) {
        Object.assign(this, init);
    }
}

/**
 * Request model for GetBookmarksOnline operation.
 * Reads bookmarks from the document.
 */
export class GetBookmarksOnlineRequest {
    /**
     * The document.
     */
    public document: Readable;

    /**
     * Encoding that will be used to load an HTML (or TXT) document if the encoding is not specified in HTML.
     */
    public loadEncoding: string;

    /**
     * Password for opening an encrypted document.
     */
    public password: string;

    public constructor(init?: Partial< GetBookmarksOnlineRequest >) {
        Object.assign(this, init);
    }
}

/**
 * Request model for GetBorder operation.
 * The 'nodePath' parameter should refer to a paragraph, a cell or a row.
 */
export class GetBorderRequest {
    /**
     * The filename of the input document.
     */
    public name: string;

    /**
     * Border type.
     */
    public borderType: string;

    /**
     * The path to the node in the document tree.
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

    public constructor(init?: Partial< GetBorderRequest >) {
        Object.assign(this, init);
    }
}

/**
 * Request model for GetBorderOnline operation.
 * Reads a border from the document node.
 */
export class GetBorderOnlineRequest {
    /**
     * The document.
     */
    public document: Readable;

    /**
     * Border type.
     */
    public borderType: string;

    /**
     * The path to the node in the document tree.
     */
    public nodePath: string;

    /**
     * Encoding that will be used to load an HTML (or TXT) document if the encoding is not specified in HTML.
     */
    public loadEncoding: string;

    /**
     * Password for opening an encrypted document.
     */
    public password: string;

    public constructor(init?: Partial< GetBorderOnlineRequest >) {
        Object.assign(this, init);
    }
}

/**
 * Request model for GetBorders operation.
 * Reads borders from the document node.
 */
export class GetBordersRequest {
    /**
     * The filename of the input document.
     */
    public name: string;

    /**
     * The path to the node in the document tree.
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

    public constructor(init?: Partial< GetBordersRequest >) {
        Object.assign(this, init);
    }
}

/**
 * Request model for GetBordersOnline operation.
 * Reads borders from the document node.
 */
export class GetBordersOnlineRequest {
    /**
     * The document.
     */
    public document: Readable;

    /**
     * The path to the node in the document tree.
     */
    public nodePath: string;

    /**
     * Encoding that will be used to load an HTML (or TXT) document if the encoding is not specified in HTML.
     */
    public loadEncoding: string;

    /**
     * Password for opening an encrypted document.
     */
    public password: string;

    public constructor(init?: Partial< GetBordersOnlineRequest >) {
        Object.assign(this, init);
    }
}

/**
 * Request model for GetComment operation.
 * Reads a comment from the document.
 */
export class GetCommentRequest {
    /**
     * The filename of the input document.
     */
    public name: string;

    /**
     * The index of the comment.
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

    public constructor(init?: Partial< GetCommentRequest >) {
        Object.assign(this, init);
    }
}

/**
 * Request model for GetCommentOnline operation.
 * Reads a comment from the document.
 */
export class GetCommentOnlineRequest {
    /**
     * The document.
     */
    public document: Readable;

    /**
     * The index of the comment.
     */
    public commentIndex: number;

    /**
     * Encoding that will be used to load an HTML (or TXT) document if the encoding is not specified in HTML.
     */
    public loadEncoding: string;

    /**
     * Password for opening an encrypted document.
     */
    public password: string;

    public constructor(init?: Partial< GetCommentOnlineRequest >) {
        Object.assign(this, init);
    }
}

/**
 * Request model for GetComments operation.
 * Reads comments from the document.
 */
export class GetCommentsRequest {
    /**
     * The filename of the input document.
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

    public constructor(init?: Partial< GetCommentsRequest >) {
        Object.assign(this, init);
    }
}

/**
 * Request model for GetCommentsOnline operation.
 * Reads comments from the document.
 */
export class GetCommentsOnlineRequest {
    /**
     * The document.
     */
    public document: Readable;

    /**
     * Encoding that will be used to load an HTML (or TXT) document if the encoding is not specified in HTML.
     */
    public loadEncoding: string;

    /**
     * Password for opening an encrypted document.
     */
    public password: string;

    public constructor(init?: Partial< GetCommentsOnlineRequest >) {
        Object.assign(this, init);
    }
}

/**
 * Request model for GetDocument operation.
 * Reads common information from the document.
 */
export class GetDocumentRequest {
    /**
     * The filename of the input document.
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

    public constructor(init?: Partial< GetDocumentRequest >) {
        Object.assign(this, init);
    }
}

/**
 * Request model for GetDocumentDrawingObjectByIndex operation.
 * Reads a DrawingObject from the document node.
 */
export class GetDocumentDrawingObjectByIndexRequest {
    /**
     * The filename of the input document.
     */
    public name: string;

    /**
     * Object index.
     */
    public index: number;

    /**
     * The path to the node in the document tree.
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

    public constructor(init?: Partial< GetDocumentDrawingObjectByIndexRequest >) {
        Object.assign(this, init);
    }
}

/**
 * Request model for GetDocumentDrawingObjectByIndexOnline operation.
 * Reads a DrawingObject from the document node.
 */
export class GetDocumentDrawingObjectByIndexOnlineRequest {
    /**
     * The document.
     */
    public document: Readable;

    /**
     * Object index.
     */
    public index: number;

    /**
     * The path to the node in the document tree.
     */
    public nodePath: string;

    /**
     * Encoding that will be used to load an HTML (or TXT) document if the encoding is not specified in HTML.
     */
    public loadEncoding: string;

    /**
     * Password for opening an encrypted document.
     */
    public password: string;

    public constructor(init?: Partial< GetDocumentDrawingObjectByIndexOnlineRequest >) {
        Object.assign(this, init);
    }
}

/**
 * Request model for GetDocumentDrawingObjectImageData operation.
 * Reads image data of a DrawingObject from the document node.
 */
export class GetDocumentDrawingObjectImageDataRequest {
    /**
     * The filename of the input document.
     */
    public name: string;

    /**
     * Object index.
     */
    public index: number;

    /**
     * The path to the node in the document tree.
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

    public constructor(init?: Partial< GetDocumentDrawingObjectImageDataRequest >) {
        Object.assign(this, init);
    }
}

/**
 * Request model for GetDocumentDrawingObjectImageDataOnline operation.
 * Reads image data of a DrawingObject from the document node.
 */
export class GetDocumentDrawingObjectImageDataOnlineRequest {
    /**
     * The document.
     */
    public document: Readable;

    /**
     * Object index.
     */
    public index: number;

    /**
     * The path to the node in the document tree.
     */
    public nodePath: string;

    /**
     * Encoding that will be used to load an HTML (or TXT) document if the encoding is not specified in HTML.
     */
    public loadEncoding: string;

    /**
     * Password for opening an encrypted document.
     */
    public password: string;

    public constructor(init?: Partial< GetDocumentDrawingObjectImageDataOnlineRequest >) {
        Object.assign(this, init);
    }
}

/**
 * Request model for GetDocumentDrawingObjectOleData operation.
 * Reads OLE data of a DrawingObject from the document node.
 */
export class GetDocumentDrawingObjectOleDataRequest {
    /**
     * The filename of the input document.
     */
    public name: string;

    /**
     * Object index.
     */
    public index: number;

    /**
     * The path to the node in the document tree.
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

    public constructor(init?: Partial< GetDocumentDrawingObjectOleDataRequest >) {
        Object.assign(this, init);
    }
}

/**
 * Request model for GetDocumentDrawingObjectOleDataOnline operation.
 * Reads OLE data of a DrawingObject from the document node.
 */
export class GetDocumentDrawingObjectOleDataOnlineRequest {
    /**
     * The document.
     */
    public document: Readable;

    /**
     * Object index.
     */
    public index: number;

    /**
     * The path to the node in the document tree.
     */
    public nodePath: string;

    /**
     * Encoding that will be used to load an HTML (or TXT) document if the encoding is not specified in HTML.
     */
    public loadEncoding: string;

    /**
     * Password for opening an encrypted document.
     */
    public password: string;

    public constructor(init?: Partial< GetDocumentDrawingObjectOleDataOnlineRequest >) {
        Object.assign(this, init);
    }
}

/**
 * Request model for GetDocumentDrawingObjects operation.
 * Reads DrawingObjects from the document node.
 */
export class GetDocumentDrawingObjectsRequest {
    /**
     * The filename of the input document.
     */
    public name: string;

    /**
     * The path to the node in the document tree.
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

    public constructor(init?: Partial< GetDocumentDrawingObjectsRequest >) {
        Object.assign(this, init);
    }
}

/**
 * Request model for GetDocumentDrawingObjectsOnline operation.
 * Reads DrawingObjects from the document node.
 */
export class GetDocumentDrawingObjectsOnlineRequest {
    /**
     * The document.
     */
    public document: Readable;

    /**
     * The path to the node in the document tree.
     */
    public nodePath: string;

    /**
     * Encoding that will be used to load an HTML (or TXT) document if the encoding is not specified in HTML.
     */
    public loadEncoding: string;

    /**
     * Password for opening an encrypted document.
     */
    public password: string;

    public constructor(init?: Partial< GetDocumentDrawingObjectsOnlineRequest >) {
        Object.assign(this, init);
    }
}

/**
 * Request model for GetDocumentFieldNames operation.
 * Reads merge field names from the document.
 */
export class GetDocumentFieldNamesRequest {
    /**
     * The filename of the input document.
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
     * The flag indicating whether to use non merge fields. If true, result includes "mustache" field names.
     */
    public useNonMergeFields: boolean;

    public constructor(init?: Partial< GetDocumentFieldNamesRequest >) {
        Object.assign(this, init);
    }
}

/**
 * Request model for GetDocumentFieldNamesOnline operation.
 * Reads merge field names from the document.
 */
export class GetDocumentFieldNamesOnlineRequest {
    /**
     * The document.
     */
    public document: Readable;

    /**
     * Encoding that will be used to load an HTML (or TXT) document if the encoding is not specified in HTML.
     */
    public loadEncoding: string;

    /**
     * Password for opening an encrypted document.
     */
    public password: string;

    /**
     * The flag indicating whether to use non merge fields. If true, result includes "mustache" field names.
     */
    public useNonMergeFields: boolean;

    public constructor(init?: Partial< GetDocumentFieldNamesOnlineRequest >) {
        Object.assign(this, init);
    }
}

/**
 * Request model for GetDocumentHyperlinkByIndex operation.
 * Reads a hyperlink from the document.
 */
export class GetDocumentHyperlinkByIndexRequest {
    /**
     * The filename of the input document.
     */
    public name: string;

    /**
     * The index of the hyperlink.
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

    public constructor(init?: Partial< GetDocumentHyperlinkByIndexRequest >) {
        Object.assign(this, init);
    }
}

/**
 * Request model for GetDocumentHyperlinkByIndexOnline operation.
 * Reads a hyperlink from the document.
 */
export class GetDocumentHyperlinkByIndexOnlineRequest {
    /**
     * The document.
     */
    public document: Readable;

    /**
     * The index of the hyperlink.
     */
    public hyperlinkIndex: number;

    /**
     * Encoding that will be used to load an HTML (or TXT) document if the encoding is not specified in HTML.
     */
    public loadEncoding: string;

    /**
     * Password for opening an encrypted document.
     */
    public password: string;

    public constructor(init?: Partial< GetDocumentHyperlinkByIndexOnlineRequest >) {
        Object.assign(this, init);
    }
}

/**
 * Request model for GetDocumentHyperlinks operation.
 * Reads hyperlinks from the document.
 */
export class GetDocumentHyperlinksRequest {
    /**
     * The filename of the input document.
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

    public constructor(init?: Partial< GetDocumentHyperlinksRequest >) {
        Object.assign(this, init);
    }
}

/**
 * Request model for GetDocumentHyperlinksOnline operation.
 * Reads hyperlinks from the document.
 */
export class GetDocumentHyperlinksOnlineRequest {
    /**
     * The document.
     */
    public document: Readable;

    /**
     * Encoding that will be used to load an HTML (or TXT) document if the encoding is not specified in HTML.
     */
    public loadEncoding: string;

    /**
     * Password for opening an encrypted document.
     */
    public password: string;

    public constructor(init?: Partial< GetDocumentHyperlinksOnlineRequest >) {
        Object.assign(this, init);
    }
}

/**
 * Request model for GetDocumentProperties operation.
 * Reads document properties.
 */
export class GetDocumentPropertiesRequest {
    /**
     * The filename of the input document.
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

    public constructor(init?: Partial< GetDocumentPropertiesRequest >) {
        Object.assign(this, init);
    }
}

/**
 * Request model for GetDocumentPropertiesOnline operation.
 * Reads document properties.
 */
export class GetDocumentPropertiesOnlineRequest {
    /**
     * The document.
     */
    public document: Readable;

    /**
     * Encoding that will be used to load an HTML (or TXT) document if the encoding is not specified in HTML.
     */
    public loadEncoding: string;

    /**
     * Password for opening an encrypted document.
     */
    public password: string;

    public constructor(init?: Partial< GetDocumentPropertiesOnlineRequest >) {
        Object.assign(this, init);
    }
}

/**
 * Request model for GetDocumentProperty operation.
 * Reads a document property.
 */
export class GetDocumentPropertyRequest {
    /**
     * The filename of the input document.
     */
    public name: string;

    /**
     * The name of the property.
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

    public constructor(init?: Partial< GetDocumentPropertyRequest >) {
        Object.assign(this, init);
    }
}

/**
 * Request model for GetDocumentPropertyOnline operation.
 * Reads a document property.
 */
export class GetDocumentPropertyOnlineRequest {
    /**
     * The document.
     */
    public document: Readable;

    /**
     * The name of the property.
     */
    public propertyName: string;

    /**
     * Encoding that will be used to load an HTML (or TXT) document if the encoding is not specified in HTML.
     */
    public loadEncoding: string;

    /**
     * Password for opening an encrypted document.
     */
    public password: string;

    public constructor(init?: Partial< GetDocumentPropertyOnlineRequest >) {
        Object.assign(this, init);
    }
}

/**
 * Request model for GetDocumentProtection operation.
 * Reads protection properties from the document.
 */
export class GetDocumentProtectionRequest {
    /**
     * The filename of the input document.
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

    public constructor(init?: Partial< GetDocumentProtectionRequest >) {
        Object.assign(this, init);
    }
}

/**
 * Request model for GetDocumentProtectionOnline operation.
 * Reads protection properties from the document.
 */
export class GetDocumentProtectionOnlineRequest {
    /**
     * The document.
     */
    public document: Readable;

    /**
     * Encoding that will be used to load an HTML (or TXT) document if the encoding is not specified in HTML.
     */
    public loadEncoding: string;

    /**
     * Password for opening an encrypted document.
     */
    public password: string;

    public constructor(init?: Partial< GetDocumentProtectionOnlineRequest >) {
        Object.assign(this, init);
    }
}

/**
 * Request model for GetDocumentStatistics operation.
 * Reads document statistics.
 */
export class GetDocumentStatisticsRequest {
    /**
     * The filename of the input document.
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
     * The flag indicating whether to include comments from the WordCount. The default value is "false".
     */
    public includeComments: boolean;

    /**
     * The flag indicating whether to include footnotes from the WordCount. The default value is "false".
     */
    public includeFootnotes: boolean;

    /**
     * The flag indicating whether to include shape's text from the WordCount. The default value is "false".
     */
    public includeTextInShapes: boolean;

    public constructor(init?: Partial< GetDocumentStatisticsRequest >) {
        Object.assign(this, init);
    }
}

/**
 * Request model for GetDocumentStatisticsOnline operation.
 * Reads document statistics.
 */
export class GetDocumentStatisticsOnlineRequest {
    /**
     * The document.
     */
    public document: Readable;

    /**
     * Encoding that will be used to load an HTML (or TXT) document if the encoding is not specified in HTML.
     */
    public loadEncoding: string;

    /**
     * Password for opening an encrypted document.
     */
    public password: string;

    /**
     * The flag indicating whether to include comments from the WordCount. The default value is "false".
     */
    public includeComments: boolean;

    /**
     * The flag indicating whether to include footnotes from the WordCount. The default value is "false".
     */
    public includeFootnotes: boolean;

    /**
     * The flag indicating whether to include shape's text from the WordCount. The default value is "false".
     */
    public includeTextInShapes: boolean;

    public constructor(init?: Partial< GetDocumentStatisticsOnlineRequest >) {
        Object.assign(this, init);
    }
}

/**
 * Request model for GetDocumentWithFormat operation.
 * Converts a document in cloud storage to the specified format.
 */
export class GetDocumentWithFormatRequest {
    /**
     * The filename of the input document.
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
     * The path to the output document.
     */
    public outPath: string;

    /**
     * Folder in filestorage with custom fonts.
     */
    public fontsLocation: string;

    public constructor(init?: Partial< GetDocumentWithFormatRequest >) {
        Object.assign(this, init);
    }
}

/**
 * Request model for GetField operation.
 * Reads a field from the document node.
 */
export class GetFieldRequest {
    /**
     * The filename of the input document.
     */
    public name: string;

    /**
     * Object index.
     */
    public index: number;

    /**
     * The path to the node in the document tree.
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

    public constructor(init?: Partial< GetFieldRequest >) {
        Object.assign(this, init);
    }
}

/**
 * Request model for GetFieldOnline operation.
 * Reads a field from the document node.
 */
export class GetFieldOnlineRequest {
    /**
     * The document.
     */
    public document: Readable;

    /**
     * Object index.
     */
    public index: number;

    /**
     * The path to the node in the document tree.
     */
    public nodePath: string;

    /**
     * Encoding that will be used to load an HTML (or TXT) document if the encoding is not specified in HTML.
     */
    public loadEncoding: string;

    /**
     * Password for opening an encrypted document.
     */
    public password: string;

    public constructor(init?: Partial< GetFieldOnlineRequest >) {
        Object.assign(this, init);
    }
}

/**
 * Request model for GetFields operation.
 * Reads fields from the document node.
 */
export class GetFieldsRequest {
    /**
     * The filename of the input document.
     */
    public name: string;

    /**
     * The path to the node in the document tree.
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

    public constructor(init?: Partial< GetFieldsRequest >) {
        Object.assign(this, init);
    }
}

/**
 * Request model for GetFieldsOnline operation.
 * Reads fields from the document node.
 */
export class GetFieldsOnlineRequest {
    /**
     * The document.
     */
    public document: Readable;

    /**
     * The path to the node in the document tree.
     */
    public nodePath: string;

    /**
     * Encoding that will be used to load an HTML (or TXT) document if the encoding is not specified in HTML.
     */
    public loadEncoding: string;

    /**
     * Password for opening an encrypted document.
     */
    public password: string;

    public constructor(init?: Partial< GetFieldsOnlineRequest >) {
        Object.assign(this, init);
    }
}

/**
 * Request model for GetFilesList operation.
 * Get all files and folders within a folder.
 */
export class GetFilesListRequest {
    /**
     * Folder path e.g. '/folder'.
     */
    public path: string;

    /**
     * Storage name.
     */
    public storageName: string;

    public constructor(init?: Partial< GetFilesListRequest >) {
        Object.assign(this, init);
    }
}

/**
 * Request model for GetFootnote operation.
 * Reads a footnote from the document node.
 */
export class GetFootnoteRequest {
    /**
     * The filename of the input document.
     */
    public name: string;

    /**
     * Object index.
     */
    public index: number;

    /**
     * The path to the node in the document tree.
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

    public constructor(init?: Partial< GetFootnoteRequest >) {
        Object.assign(this, init);
    }
}

/**
 * Request model for GetFootnoteOnline operation.
 * Reads a footnote from the document node.
 */
export class GetFootnoteOnlineRequest {
    /**
     * The document.
     */
    public document: Readable;

    /**
     * Object index.
     */
    public index: number;

    /**
     * The path to the node in the document tree.
     */
    public nodePath: string;

    /**
     * Encoding that will be used to load an HTML (or TXT) document if the encoding is not specified in HTML.
     */
    public loadEncoding: string;

    /**
     * Password for opening an encrypted document.
     */
    public password: string;

    public constructor(init?: Partial< GetFootnoteOnlineRequest >) {
        Object.assign(this, init);
    }
}

/**
 * Request model for GetFootnotes operation.
 * Reads footnotes from the document node.
 */
export class GetFootnotesRequest {
    /**
     * The filename of the input document.
     */
    public name: string;

    /**
     * The path to the node in the document tree.
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

    public constructor(init?: Partial< GetFootnotesRequest >) {
        Object.assign(this, init);
    }
}

/**
 * Request model for GetFootnotesOnline operation.
 * Reads footnotes from the document node.
 */
export class GetFootnotesOnlineRequest {
    /**
     * The document.
     */
    public document: Readable;

    /**
     * The path to the node in the document tree.
     */
    public nodePath: string;

    /**
     * Encoding that will be used to load an HTML (or TXT) document if the encoding is not specified in HTML.
     */
    public loadEncoding: string;

    /**
     * Password for opening an encrypted document.
     */
    public password: string;

    public constructor(init?: Partial< GetFootnotesOnlineRequest >) {
        Object.assign(this, init);
    }
}

/**
 * Request model for GetFormField operation.
 * Reads a form field from the document node.
 */
export class GetFormFieldRequest {
    /**
     * The filename of the input document.
     */
    public name: string;

    /**
     * Object index.
     */
    public index: number;

    /**
     * The path to the node in the document tree.
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

    public constructor(init?: Partial< GetFormFieldRequest >) {
        Object.assign(this, init);
    }
}

/**
 * Request model for GetFormFieldOnline operation.
 * Reads a form field from the document node.
 */
export class GetFormFieldOnlineRequest {
    /**
     * The document.
     */
    public document: Readable;

    /**
     * Object index.
     */
    public index: number;

    /**
     * The path to the node in the document tree.
     */
    public nodePath: string;

    /**
     * Encoding that will be used to load an HTML (or TXT) document if the encoding is not specified in HTML.
     */
    public loadEncoding: string;

    /**
     * Password for opening an encrypted document.
     */
    public password: string;

    public constructor(init?: Partial< GetFormFieldOnlineRequest >) {
        Object.assign(this, init);
    }
}

/**
 * Request model for GetFormFields operation.
 * Reads form fields from the document node.
 */
export class GetFormFieldsRequest {
    /**
     * The filename of the input document.
     */
    public name: string;

    /**
     * The path to the node in the document tree.
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

    public constructor(init?: Partial< GetFormFieldsRequest >) {
        Object.assign(this, init);
    }
}

/**
 * Request model for GetFormFieldsOnline operation.
 * Reads form fields from the document node.
 */
export class GetFormFieldsOnlineRequest {
    /**
     * The document.
     */
    public document: Readable;

    /**
     * The path to the node in the document tree.
     */
    public nodePath: string;

    /**
     * Encoding that will be used to load an HTML (or TXT) document if the encoding is not specified in HTML.
     */
    public loadEncoding: string;

    /**
     * Password for opening an encrypted document.
     */
    public password: string;

    public constructor(init?: Partial< GetFormFieldsOnlineRequest >) {
        Object.assign(this, init);
    }
}

/**
 * Request model for GetHeaderFooter operation.
 * Reads a HeaderFooter object from the document.
 */
export class GetHeaderFooterRequest {
    /**
     * The filename of the input document.
     */
    public name: string;

    /**
     * The index of the HeaderFooter object.
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
     * The list of HeaderFooter types.
     */
    public filterByType: string;

    public constructor(init?: Partial< GetHeaderFooterRequest >) {
        Object.assign(this, init);
    }
}

/**
 * Request model for GetHeaderFooterOfSection operation.
 * Reads a HeaderFooter object from the document section.
 */
export class GetHeaderFooterOfSectionRequest {
    /**
     * The filename of the input document.
     */
    public name: string;

    /**
     * The index of the HeaderFooter object.
     */
    public headerFooterIndex: number;

    /**
     * The index of the section.
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
     * The list of HeaderFooter types.
     */
    public filterByType: string;

    public constructor(init?: Partial< GetHeaderFooterOfSectionRequest >) {
        Object.assign(this, init);
    }
}

/**
 * Request model for GetHeaderFooterOfSectionOnline operation.
 * Reads a HeaderFooter object from the document section.
 */
export class GetHeaderFooterOfSectionOnlineRequest {
    /**
     * The document.
     */
    public document: Readable;

    /**
     * The index of the HeaderFooter object.
     */
    public headerFooterIndex: number;

    /**
     * The index of the section.
     */
    public sectionIndex: number;

    /**
     * Encoding that will be used to load an HTML (or TXT) document if the encoding is not specified in HTML.
     */
    public loadEncoding: string;

    /**
     * Password for opening an encrypted document.
     */
    public password: string;

    /**
     * The list of HeaderFooter types.
     */
    public filterByType: string;

    public constructor(init?: Partial< GetHeaderFooterOfSectionOnlineRequest >) {
        Object.assign(this, init);
    }
}

/**
 * Request model for GetHeaderFooterOnline operation.
 * Reads a HeaderFooter object from the document.
 */
export class GetHeaderFooterOnlineRequest {
    /**
     * The document.
     */
    public document: Readable;

    /**
     * The index of the HeaderFooter object.
     */
    public headerFooterIndex: number;

    /**
     * Encoding that will be used to load an HTML (or TXT) document if the encoding is not specified in HTML.
     */
    public loadEncoding: string;

    /**
     * Password for opening an encrypted document.
     */
    public password: string;

    /**
     * The list of HeaderFooter types.
     */
    public filterByType: string;

    public constructor(init?: Partial< GetHeaderFooterOnlineRequest >) {
        Object.assign(this, init);
    }
}

/**
 * Request model for GetHeaderFooters operation.
 * Reads HeaderFooter objects from the document section.
 */
export class GetHeaderFootersRequest {
    /**
     * The filename of the input document.
     */
    public name: string;

    /**
     * The path to the section in the document tree.
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
     * The list of HeaderFooter types.
     */
    public filterByType: string;

    public constructor(init?: Partial< GetHeaderFootersRequest >) {
        Object.assign(this, init);
    }
}

/**
 * Request model for GetHeaderFootersOnline operation.
 * Reads HeaderFooter objects from the document section.
 */
export class GetHeaderFootersOnlineRequest {
    /**
     * The document.
     */
    public document: Readable;

    /**
     * The path to the section in the document tree.
     */
    public sectionPath: string;

    /**
     * Encoding that will be used to load an HTML (or TXT) document if the encoding is not specified in HTML.
     */
    public loadEncoding: string;

    /**
     * Password for opening an encrypted document.
     */
    public password: string;

    /**
     * The list of HeaderFooter types.
     */
    public filterByType: string;

    public constructor(init?: Partial< GetHeaderFootersOnlineRequest >) {
        Object.assign(this, init);
    }
}

/**
 * Request model for GetList operation.
 * Reads a list from the document.
 */
export class GetListRequest {
    /**
     * The filename of the input document.
     */
    public name: string;

    /**
     * The list Id.
     */
    public listId: number;

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

    public constructor(init?: Partial< GetListRequest >) {
        Object.assign(this, init);
    }
}

/**
 * Request model for GetListOnline operation.
 * Reads a list from the document.
 */
export class GetListOnlineRequest {
    /**
     * The document.
     */
    public document: Readable;

    /**
     * The list Id.
     */
    public listId: number;

    /**
     * Encoding that will be used to load an HTML (or TXT) document if the encoding is not specified in HTML.
     */
    public loadEncoding: string;

    /**
     * Password for opening an encrypted document.
     */
    public password: string;

    public constructor(init?: Partial< GetListOnlineRequest >) {
        Object.assign(this, init);
    }
}

/**
 * Request model for GetLists operation.
 * Reads lists from the document.
 */
export class GetListsRequest {
    /**
     * The filename of the input document.
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

    public constructor(init?: Partial< GetListsRequest >) {
        Object.assign(this, init);
    }
}

/**
 * Request model for GetListsOnline operation.
 * Reads lists from the document.
 */
export class GetListsOnlineRequest {
    /**
     * The document.
     */
    public document: Readable;

    /**
     * Encoding that will be used to load an HTML (or TXT) document if the encoding is not specified in HTML.
     */
    public loadEncoding: string;

    /**
     * Password for opening an encrypted document.
     */
    public password: string;

    public constructor(init?: Partial< GetListsOnlineRequest >) {
        Object.assign(this, init);
    }
}

/**
 * Request model for GetOfficeMathObject operation.
 * Reads an OfficeMath object from the document node.
 */
export class GetOfficeMathObjectRequest {
    /**
     * The filename of the input document.
     */
    public name: string;

    /**
     * Object index.
     */
    public index: number;

    /**
     * The path to the node in the document tree.
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

    public constructor(init?: Partial< GetOfficeMathObjectRequest >) {
        Object.assign(this, init);
    }
}

/**
 * Request model for GetOfficeMathObjectOnline operation.
 * Reads an OfficeMath object from the document node.
 */
export class GetOfficeMathObjectOnlineRequest {
    /**
     * The document.
     */
    public document: Readable;

    /**
     * Object index.
     */
    public index: number;

    /**
     * The path to the node in the document tree.
     */
    public nodePath: string;

    /**
     * Encoding that will be used to load an HTML (or TXT) document if the encoding is not specified in HTML.
     */
    public loadEncoding: string;

    /**
     * Password for opening an encrypted document.
     */
    public password: string;

    public constructor(init?: Partial< GetOfficeMathObjectOnlineRequest >) {
        Object.assign(this, init);
    }
}

/**
 * Request model for GetOfficeMathObjects operation.
 * Reads OfficeMath objects from the document node.
 */
export class GetOfficeMathObjectsRequest {
    /**
     * The filename of the input document.
     */
    public name: string;

    /**
     * The path to the node in the document tree.
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

    public constructor(init?: Partial< GetOfficeMathObjectsRequest >) {
        Object.assign(this, init);
    }
}

/**
 * Request model for GetOfficeMathObjectsOnline operation.
 * Reads OfficeMath objects from the document node.
 */
export class GetOfficeMathObjectsOnlineRequest {
    /**
     * The document.
     */
    public document: Readable;

    /**
     * The path to the node in the document tree.
     */
    public nodePath: string;

    /**
     * Encoding that will be used to load an HTML (or TXT) document if the encoding is not specified in HTML.
     */
    public loadEncoding: string;

    /**
     * Password for opening an encrypted document.
     */
    public password: string;

    public constructor(init?: Partial< GetOfficeMathObjectsOnlineRequest >) {
        Object.assign(this, init);
    }
}

/**
 * Request model for GetParagraph operation.
 * Reads a paragraph from the document node.
 */
export class GetParagraphRequest {
    /**
     * The filename of the input document.
     */
    public name: string;

    /**
     * Object index.
     */
    public index: number;

    /**
     * The path to the node in the document tree.
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

    public constructor(init?: Partial< GetParagraphRequest >) {
        Object.assign(this, init);
    }
}

/**
 * Request model for GetParagraphFormat operation.
 * Reads the formatting properties of a paragraph from the document node.
 */
export class GetParagraphFormatRequest {
    /**
     * The filename of the input document.
     */
    public name: string;

    /**
     * Object index.
     */
    public index: number;

    /**
     * The path to the node in the document tree.
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

    public constructor(init?: Partial< GetParagraphFormatRequest >) {
        Object.assign(this, init);
    }
}

/**
 * Request model for GetParagraphFormatOnline operation.
 * Reads the formatting properties of a paragraph from the document node.
 */
export class GetParagraphFormatOnlineRequest {
    /**
     * The document.
     */
    public document: Readable;

    /**
     * Object index.
     */
    public index: number;

    /**
     * The path to the node in the document tree.
     */
    public nodePath: string;

    /**
     * Encoding that will be used to load an HTML (or TXT) document if the encoding is not specified in HTML.
     */
    public loadEncoding: string;

    /**
     * Password for opening an encrypted document.
     */
    public password: string;

    public constructor(init?: Partial< GetParagraphFormatOnlineRequest >) {
        Object.assign(this, init);
    }
}

/**
 * Request model for GetParagraphListFormat operation.
 * Reads the formatting properties of a paragraph list from the document node.
 */
export class GetParagraphListFormatRequest {
    /**
     * The filename of the input document.
     */
    public name: string;

    /**
     * Object index.
     */
    public index: number;

    /**
     * The path to the node in the document tree.
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

    public constructor(init?: Partial< GetParagraphListFormatRequest >) {
        Object.assign(this, init);
    }
}

/**
 * Request model for GetParagraphListFormatOnline operation.
 * Reads the formatting properties of a paragraph list from the document node.
 */
export class GetParagraphListFormatOnlineRequest {
    /**
     * The document.
     */
    public document: Readable;

    /**
     * Object index.
     */
    public index: number;

    /**
     * The path to the node in the document tree.
     */
    public nodePath: string;

    /**
     * Encoding that will be used to load an HTML (or TXT) document if the encoding is not specified in HTML.
     */
    public loadEncoding: string;

    /**
     * Password for opening an encrypted document.
     */
    public password: string;

    public constructor(init?: Partial< GetParagraphListFormatOnlineRequest >) {
        Object.assign(this, init);
    }
}

/**
 * Request model for GetParagraphOnline operation.
 * Reads a paragraph from the document node.
 */
export class GetParagraphOnlineRequest {
    /**
     * The document.
     */
    public document: Readable;

    /**
     * Object index.
     */
    public index: number;

    /**
     * The path to the node in the document tree.
     */
    public nodePath: string;

    /**
     * Encoding that will be used to load an HTML (or TXT) document if the encoding is not specified in HTML.
     */
    public loadEncoding: string;

    /**
     * Password for opening an encrypted document.
     */
    public password: string;

    public constructor(init?: Partial< GetParagraphOnlineRequest >) {
        Object.assign(this, init);
    }
}

/**
 * Request model for GetParagraphs operation.
 * Reads paragraphs from the document node.
 */
export class GetParagraphsRequest {
    /**
     * The filename of the input document.
     */
    public name: string;

    /**
     * The path to the node in the document tree.
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

    public constructor(init?: Partial< GetParagraphsRequest >) {
        Object.assign(this, init);
    }
}

/**
 * Request model for GetParagraphsOnline operation.
 * Reads paragraphs from the document node.
 */
export class GetParagraphsOnlineRequest {
    /**
     * The document.
     */
    public document: Readable;

    /**
     * The path to the node in the document tree.
     */
    public nodePath: string;

    /**
     * Encoding that will be used to load an HTML (or TXT) document if the encoding is not specified in HTML.
     */
    public loadEncoding: string;

    /**
     * Password for opening an encrypted document.
     */
    public password: string;

    public constructor(init?: Partial< GetParagraphsOnlineRequest >) {
        Object.assign(this, init);
    }
}

/**
 * Request model for GetParagraphTabStops operation.
 * Reads paragraph tab stops from the document node.
 */
export class GetParagraphTabStopsRequest {
    /**
     * The filename of the input document.
     */
    public name: string;

    /**
     * Object index.
     */
    public index: number;

    /**
     * The path to the node in the document tree.
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

    public constructor(init?: Partial< GetParagraphTabStopsRequest >) {
        Object.assign(this, init);
    }
}

/**
 * Request model for GetParagraphTabStopsOnline operation.
 * Reads paragraph tab stops from the document node.
 */
export class GetParagraphTabStopsOnlineRequest {
    /**
     * The document.
     */
    public document: Readable;

    /**
     * Object index.
     */
    public index: number;

    /**
     * The path to the node in the document tree.
     */
    public nodePath: string;

    /**
     * Encoding that will be used to load an HTML (or TXT) document if the encoding is not specified in HTML.
     */
    public loadEncoding: string;

    /**
     * Password for opening an encrypted document.
     */
    public password: string;

    public constructor(init?: Partial< GetParagraphTabStopsOnlineRequest >) {
        Object.assign(this, init);
    }
}

/**
 * Request model for GetRangeText operation.
 * Reads range text from the document.
 */
export class GetRangeTextRequest {
    /**
     * The filename of the input document.
     */
    public name: string;

    /**
     * The range start identifier.
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

    public constructor(init?: Partial< GetRangeTextRequest >) {
        Object.assign(this, init);
    }
}

/**
 * Request model for GetRangeTextOnline operation.
 * Reads range text from the document.
 */
export class GetRangeTextOnlineRequest {
    /**
     * The document.
     */
    public document: Readable;

    /**
     * The range start identifier.
     */
    public rangeStartIdentifier: string;

    /**
     * The range end identifier.
     */
    public rangeEndIdentifier: string;

    /**
     * Encoding that will be used to load an HTML (or TXT) document if the encoding is not specified in HTML.
     */
    public loadEncoding: string;

    /**
     * Password for opening an encrypted document.
     */
    public password: string;

    public constructor(init?: Partial< GetRangeTextOnlineRequest >) {
        Object.assign(this, init);
    }
}

/**
 * Request model for GetRun operation.
 * Reads a Run object from the paragraph.
 */
export class GetRunRequest {
    /**
     * The filename of the input document.
     */
    public name: string;

    /**
     * The path to the paragraph in the document tree.
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

    public constructor(init?: Partial< GetRunRequest >) {
        Object.assign(this, init);
    }
}

/**
 * Request model for GetRunFont operation.
 * Reads the font properties of a Run object from the paragraph.
 */
export class GetRunFontRequest {
    /**
     * The filename of the input document.
     */
    public name: string;

    /**
     * The path to the paragraph in the document tree.
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

    public constructor(init?: Partial< GetRunFontRequest >) {
        Object.assign(this, init);
    }
}

/**
 * Request model for GetRunFontOnline operation.
 * Reads the font properties of a Run object from the paragraph.
 */
export class GetRunFontOnlineRequest {
    /**
     * The document.
     */
    public document: Readable;

    /**
     * The path to the paragraph in the document tree.
     */
    public paragraphPath: string;

    /**
     * Object index.
     */
    public index: number;

    /**
     * Encoding that will be used to load an HTML (or TXT) document if the encoding is not specified in HTML.
     */
    public loadEncoding: string;

    /**
     * Password for opening an encrypted document.
     */
    public password: string;

    public constructor(init?: Partial< GetRunFontOnlineRequest >) {
        Object.assign(this, init);
    }
}

/**
 * Request model for GetRunOnline operation.
 * Reads a Run object from the paragraph.
 */
export class GetRunOnlineRequest {
    /**
     * The document.
     */
    public document: Readable;

    /**
     * The path to the paragraph in the document tree.
     */
    public paragraphPath: string;

    /**
     * Object index.
     */
    public index: number;

    /**
     * Encoding that will be used to load an HTML (or TXT) document if the encoding is not specified in HTML.
     */
    public loadEncoding: string;

    /**
     * Password for opening an encrypted document.
     */
    public password: string;

    public constructor(init?: Partial< GetRunOnlineRequest >) {
        Object.assign(this, init);
    }
}

/**
 * Request model for GetRuns operation.
 * Reads Run objects from the paragraph.
 */
export class GetRunsRequest {
    /**
     * The filename of the input document.
     */
    public name: string;

    /**
     * The path to the paragraph in the document tree.
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

    public constructor(init?: Partial< GetRunsRequest >) {
        Object.assign(this, init);
    }
}

/**
 * Request model for GetRunsOnline operation.
 * Reads Run objects from the paragraph.
 */
export class GetRunsOnlineRequest {
    /**
     * The document.
     */
    public document: Readable;

    /**
     * The path to the paragraph in the document tree.
     */
    public paragraphPath: string;

    /**
     * Encoding that will be used to load an HTML (or TXT) document if the encoding is not specified in HTML.
     */
    public loadEncoding: string;

    /**
     * Password for opening an encrypted document.
     */
    public password: string;

    public constructor(init?: Partial< GetRunsOnlineRequest >) {
        Object.assign(this, init);
    }
}

/**
 * Request model for GetSection operation.
 * Reads a section from the document.
 */
export class GetSectionRequest {
    /**
     * The filename of the input document.
     */
    public name: string;

    /**
     * The index of the section.
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

    public constructor(init?: Partial< GetSectionRequest >) {
        Object.assign(this, init);
    }
}

/**
 * Request model for GetSectionOnline operation.
 * Reads a section from the document.
 */
export class GetSectionOnlineRequest {
    /**
     * The document.
     */
    public document: Readable;

    /**
     * The index of the section.
     */
    public sectionIndex: number;

    /**
     * Encoding that will be used to load an HTML (or TXT) document if the encoding is not specified in HTML.
     */
    public loadEncoding: string;

    /**
     * Password for opening an encrypted document.
     */
    public password: string;

    public constructor(init?: Partial< GetSectionOnlineRequest >) {
        Object.assign(this, init);
    }
}

/**
 * Request model for GetSectionPageSetup operation.
 * Reads the page setup of a section from the document.
 */
export class GetSectionPageSetupRequest {
    /**
     * The filename of the input document.
     */
    public name: string;

    /**
     * The index of the section.
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

    public constructor(init?: Partial< GetSectionPageSetupRequest >) {
        Object.assign(this, init);
    }
}

/**
 * Request model for GetSectionPageSetupOnline operation.
 * Reads the page setup of a section from the document.
 */
export class GetSectionPageSetupOnlineRequest {
    /**
     * The document.
     */
    public document: Readable;

    /**
     * The index of the section.
     */
    public sectionIndex: number;

    /**
     * Encoding that will be used to load an HTML (or TXT) document if the encoding is not specified in HTML.
     */
    public loadEncoding: string;

    /**
     * Password for opening an encrypted document.
     */
    public password: string;

    public constructor(init?: Partial< GetSectionPageSetupOnlineRequest >) {
        Object.assign(this, init);
    }
}

/**
 * Request model for GetSections operation.
 * Reads sections from the document.
 */
export class GetSectionsRequest {
    /**
     * The filename of the input document.
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

    public constructor(init?: Partial< GetSectionsRequest >) {
        Object.assign(this, init);
    }
}

/**
 * Request model for GetSectionsOnline operation.
 * Reads sections from the document.
 */
export class GetSectionsOnlineRequest {
    /**
     * The document.
     */
    public document: Readable;

    /**
     * Encoding that will be used to load an HTML (or TXT) document if the encoding is not specified in HTML.
     */
    public loadEncoding: string;

    /**
     * Password for opening an encrypted document.
     */
    public password: string;

    public constructor(init?: Partial< GetSectionsOnlineRequest >) {
        Object.assign(this, init);
    }
}

/**
 * Request model for GetStyle operation.
 * Reads a style from the document.
 */
export class GetStyleRequest {
    /**
     * The filename of the input document.
     */
    public name: string;

    /**
     * The name of the style.
     */
    public styleName: string;

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

    public constructor(init?: Partial< GetStyleRequest >) {
        Object.assign(this, init);
    }
}

/**
 * Request model for GetStyleFromDocumentElement operation.
 * Reads a style from the document node.
 */
export class GetStyleFromDocumentElementRequest {
    /**
     * The filename of the input document.
     */
    public name: string;

    /**
     * The path to the node in the document tree, that supports styles: ParagraphFormat, List, ListLevel, Table.
     */
    public styledNodePath: string;

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

    public constructor(init?: Partial< GetStyleFromDocumentElementRequest >) {
        Object.assign(this, init);
    }
}

/**
 * Request model for GetStyleFromDocumentElementOnline operation.
 * Reads a style from the document node.
 */
export class GetStyleFromDocumentElementOnlineRequest {
    /**
     * The document.
     */
    public document: Readable;

    /**
     * The path to the node in the document tree, that supports styles: ParagraphFormat, List, ListLevel, Table.
     */
    public styledNodePath: string;

    /**
     * Encoding that will be used to load an HTML (or TXT) document if the encoding is not specified in HTML.
     */
    public loadEncoding: string;

    /**
     * Password for opening an encrypted document.
     */
    public password: string;

    public constructor(init?: Partial< GetStyleFromDocumentElementOnlineRequest >) {
        Object.assign(this, init);
    }
}

/**
 * Request model for GetStyleOnline operation.
 * Reads a style from the document.
 */
export class GetStyleOnlineRequest {
    /**
     * The document.
     */
    public document: Readable;

    /**
     * The name of the style.
     */
    public styleName: string;

    /**
     * Encoding that will be used to load an HTML (or TXT) document if the encoding is not specified in HTML.
     */
    public loadEncoding: string;

    /**
     * Password for opening an encrypted document.
     */
    public password: string;

    public constructor(init?: Partial< GetStyleOnlineRequest >) {
        Object.assign(this, init);
    }
}

/**
 * Request model for GetStyles operation.
 * Reads styles from the document.
 */
export class GetStylesRequest {
    /**
     * The filename of the input document.
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

    public constructor(init?: Partial< GetStylesRequest >) {
        Object.assign(this, init);
    }
}

/**
 * Request model for GetStylesOnline operation.
 * Reads styles from the document.
 */
export class GetStylesOnlineRequest {
    /**
     * The document.
     */
    public document: Readable;

    /**
     * Encoding that will be used to load an HTML (or TXT) document if the encoding is not specified in HTML.
     */
    public loadEncoding: string;

    /**
     * Password for opening an encrypted document.
     */
    public password: string;

    public constructor(init?: Partial< GetStylesOnlineRequest >) {
        Object.assign(this, init);
    }
}

/**
 * Request model for GetTable operation.
 * Reads a table from the document node.
 */
export class GetTableRequest {
    /**
     * The filename of the input document.
     */
    public name: string;

    /**
     * Object index.
     */
    public index: number;

    /**
     * The path to the node in the document tree.
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

    public constructor(init?: Partial< GetTableRequest >) {
        Object.assign(this, init);
    }
}

/**
 * Request model for GetTableCell operation.
 * Reads a cell from the table row.
 */
export class GetTableCellRequest {
    /**
     * The filename of the input document.
     */
    public name: string;

    /**
     * The path to the table row in the document tree.
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

    public constructor(init?: Partial< GetTableCellRequest >) {
        Object.assign(this, init);
    }
}

/**
 * Request model for GetTableCellFormat operation.
 * Reads the formatting properties of a table cell.
 */
export class GetTableCellFormatRequest {
    /**
     * The filename of the input document.
     */
    public name: string;

    /**
     * The path to the table row in the document tree.
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

    public constructor(init?: Partial< GetTableCellFormatRequest >) {
        Object.assign(this, init);
    }
}

/**
 * Request model for GetTableCellFormatOnline operation.
 * Reads the formatting properties of a table cell.
 */
export class GetTableCellFormatOnlineRequest {
    /**
     * The document.
     */
    public document: Readable;

    /**
     * The path to the table row in the document tree.
     */
    public tableRowPath: string;

    /**
     * Object index.
     */
    public index: number;

    /**
     * Encoding that will be used to load an HTML (or TXT) document if the encoding is not specified in HTML.
     */
    public loadEncoding: string;

    /**
     * Password for opening an encrypted document.
     */
    public password: string;

    public constructor(init?: Partial< GetTableCellFormatOnlineRequest >) {
        Object.assign(this, init);
    }
}

/**
 * Request model for GetTableCellOnline operation.
 * Reads a cell from the table row.
 */
export class GetTableCellOnlineRequest {
    /**
     * The document.
     */
    public document: Readable;

    /**
     * The path to the table row in the document tree.
     */
    public tableRowPath: string;

    /**
     * Object index.
     */
    public index: number;

    /**
     * Encoding that will be used to load an HTML (or TXT) document if the encoding is not specified in HTML.
     */
    public loadEncoding: string;

    /**
     * Password for opening an encrypted document.
     */
    public password: string;

    public constructor(init?: Partial< GetTableCellOnlineRequest >) {
        Object.assign(this, init);
    }
}

/**
 * Request model for GetTableOnline operation.
 * Reads a table from the document node.
 */
export class GetTableOnlineRequest {
    /**
     * The document.
     */
    public document: Readable;

    /**
     * Object index.
     */
    public index: number;

    /**
     * The path to the node in the document tree.
     */
    public nodePath: string;

    /**
     * Encoding that will be used to load an HTML (or TXT) document if the encoding is not specified in HTML.
     */
    public loadEncoding: string;

    /**
     * Password for opening an encrypted document.
     */
    public password: string;

    public constructor(init?: Partial< GetTableOnlineRequest >) {
        Object.assign(this, init);
    }
}

/**
 * Request model for GetTableProperties operation.
 * Reads properties of a table from the document node.
 */
export class GetTablePropertiesRequest {
    /**
     * The filename of the input document.
     */
    public name: string;

    /**
     * Object index.
     */
    public index: number;

    /**
     * The path to the node in the document tree.
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

    public constructor(init?: Partial< GetTablePropertiesRequest >) {
        Object.assign(this, init);
    }
}

/**
 * Request model for GetTablePropertiesOnline operation.
 * Reads properties of a table from the document node.
 */
export class GetTablePropertiesOnlineRequest {
    /**
     * The document.
     */
    public document: Readable;

    /**
     * Object index.
     */
    public index: number;

    /**
     * The path to the node in the document tree.
     */
    public nodePath: string;

    /**
     * Encoding that will be used to load an HTML (or TXT) document if the encoding is not specified in HTML.
     */
    public loadEncoding: string;

    /**
     * Password for opening an encrypted document.
     */
    public password: string;

    public constructor(init?: Partial< GetTablePropertiesOnlineRequest >) {
        Object.assign(this, init);
    }
}

/**
 * Request model for GetTableRow operation.
 * Reads a row from the table.
 */
export class GetTableRowRequest {
    /**
     * The filename of the input document.
     */
    public name: string;

    /**
     * The path to the table in the document tree.
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

    public constructor(init?: Partial< GetTableRowRequest >) {
        Object.assign(this, init);
    }
}

/**
 * Request model for GetTableRowFormat operation.
 * Reads the formatting properties of a table row.
 */
export class GetTableRowFormatRequest {
    /**
     * The filename of the input document.
     */
    public name: string;

    /**
     * The path to the table in the document tree.
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

    public constructor(init?: Partial< GetTableRowFormatRequest >) {
        Object.assign(this, init);
    }
}

/**
 * Request model for GetTableRowFormatOnline operation.
 * Reads the formatting properties of a table row.
 */
export class GetTableRowFormatOnlineRequest {
    /**
     * The document.
     */
    public document: Readable;

    /**
     * The path to the table in the document tree.
     */
    public tablePath: string;

    /**
     * Object index.
     */
    public index: number;

    /**
     * Encoding that will be used to load an HTML (or TXT) document if the encoding is not specified in HTML.
     */
    public loadEncoding: string;

    /**
     * Password for opening an encrypted document.
     */
    public password: string;

    public constructor(init?: Partial< GetTableRowFormatOnlineRequest >) {
        Object.assign(this, init);
    }
}

/**
 * Request model for GetTableRowOnline operation.
 * Reads a row from the table.
 */
export class GetTableRowOnlineRequest {
    /**
     * The document.
     */
    public document: Readable;

    /**
     * The path to the table in the document tree.
     */
    public tablePath: string;

    /**
     * Object index.
     */
    public index: number;

    /**
     * Encoding that will be used to load an HTML (or TXT) document if the encoding is not specified in HTML.
     */
    public loadEncoding: string;

    /**
     * Password for opening an encrypted document.
     */
    public password: string;

    public constructor(init?: Partial< GetTableRowOnlineRequest >) {
        Object.assign(this, init);
    }
}

/**
 * Request model for GetTables operation.
 * Reads tables from the document node.
 */
export class GetTablesRequest {
    /**
     * The filename of the input document.
     */
    public name: string;

    /**
     * The path to the node in the document tree.
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

    public constructor(init?: Partial< GetTablesRequest >) {
        Object.assign(this, init);
    }
}

/**
 * Request model for GetTablesOnline operation.
 * Reads tables from the document node.
 */
export class GetTablesOnlineRequest {
    /**
     * The document.
     */
    public document: Readable;

    /**
     * The path to the node in the document tree.
     */
    public nodePath: string;

    /**
     * Encoding that will be used to load an HTML (or TXT) document if the encoding is not specified in HTML.
     */
    public loadEncoding: string;

    /**
     * Password for opening an encrypted document.
     */
    public password: string;

    public constructor(init?: Partial< GetTablesOnlineRequest >) {
        Object.assign(this, init);
    }
}

/**
 * Request model for InsertComment operation.
 * Inserts a new comment to the document.
 */
export class InsertCommentRequest {
    /**
     * The filename of the input document.
     */
    public name: string;

    /**
     * Comment data.
     */
    public comment: importedCommentInsert.CommentInsert;

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

    public constructor(init?: Partial< InsertCommentRequest >) {
        Object.assign(this, init);
    }
}

/**
 * Request model for InsertCommentOnline operation.
 * Inserts a new comment to the document.
 */
export class InsertCommentOnlineRequest {
    /**
     * The document.
     */
    public document: Readable;

    /**
     * Comment data.
     */
    public comment: importedCommentInsert.CommentInsert;

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

    public constructor(init?: Partial< InsertCommentOnlineRequest >) {
        Object.assign(this, init);
    }
}

/**
 * Request model for InsertDrawingObject operation.
 * Inserts a new DrawingObject to the document node.
 */
export class InsertDrawingObjectRequest {
    /**
     * The filename of the input document.
     */
    public name: string;

    /**
     * Drawing object parameters.
     */
    public drawingObject: importedDrawingObjectInsert.DrawingObjectInsert;

    /**
     * File with image.
     */
    public imageFile: Readable;

    /**
     * The path to the node in the document tree.
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

    public constructor(init?: Partial< InsertDrawingObjectRequest >) {
        Object.assign(this, init);
    }
}

/**
 * Request model for InsertDrawingObjectOnline operation.
 * Inserts a new DrawingObject to the document node.
 */
export class InsertDrawingObjectOnlineRequest {
    /**
     * The document.
     */
    public document: Readable;

    /**
     * Drawing object parameters.
     */
    public drawingObject: importedDrawingObjectInsert.DrawingObjectInsert;

    /**
     * File with image.
     */
    public imageFile: Readable;

    /**
     * The path to the node in the document tree.
     */
    public nodePath: string;

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

    public constructor(init?: Partial< InsertDrawingObjectOnlineRequest >) {
        Object.assign(this, init);
    }
}

/**
 * Request model for InsertField operation.
 * Inserts a new field to the document node.
 */
export class InsertFieldRequest {
    /**
     * The filename of the input document.
     */
    public name: string;

    /**
     * Field data.
     */
    public field: importedFieldInsert.FieldInsert;

    /**
     * The path to the node in the document tree.
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
     * The index of the node. A new field will be inserted before the node with the specified node Id.
     */
    public insertBeforeNode: string;

    public constructor(init?: Partial< InsertFieldRequest >) {
        Object.assign(this, init);
    }
}

/**
 * Request model for InsertFieldOnline operation.
 * Inserts a new field to the document node.
 */
export class InsertFieldOnlineRequest {
    /**
     * The document.
     */
    public document: Readable;

    /**
     * Field data.
     */
    public field: importedFieldInsert.FieldInsert;

    /**
     * The path to the node in the document tree.
     */
    public nodePath: string;

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
     * The index of the node. A new field will be inserted before the node with the specified node Id.
     */
    public insertBeforeNode: string;

    public constructor(init?: Partial< InsertFieldOnlineRequest >) {
        Object.assign(this, init);
    }
}

/**
 * Request model for InsertFootnote operation.
 * Inserts a new footnote to the document node.
 */
export class InsertFootnoteRequest {
    /**
     * The filename of the input document.
     */
    public name: string;

    /**
     * Footnote data.
     */
    public footnoteDto: importedFootnoteInsert.FootnoteInsert;

    /**
     * The path to the node in the document tree.
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

    public constructor(init?: Partial< InsertFootnoteRequest >) {
        Object.assign(this, init);
    }
}

/**
 * Request model for InsertFootnoteOnline operation.
 * Inserts a new footnote to the document node.
 */
export class InsertFootnoteOnlineRequest {
    /**
     * The document.
     */
    public document: Readable;

    /**
     * Footnote data.
     */
    public footnoteDto: importedFootnoteInsert.FootnoteInsert;

    /**
     * The path to the node in the document tree.
     */
    public nodePath: string;

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

    public constructor(init?: Partial< InsertFootnoteOnlineRequest >) {
        Object.assign(this, init);
    }
}

/**
 * Request model for InsertFormField operation.
 * Inserts a new form field to the document node.
 */
export class InsertFormFieldRequest {
    /**
     * The filename of the input document.
     */
    public name: string;

    /**
     * From field data.
     */
    public formField: importedFormField.FormField;

    /**
     * The path to the node in the document tree.
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
     * The index of the node. A new form field will be inserted before the node with the specified node Id.
     */
    public insertBeforeNode: string;

    public constructor(init?: Partial< InsertFormFieldRequest >) {
        Object.assign(this, init);
    }
}

/**
 * Request model for InsertFormFieldOnline operation.
 * Inserts a new form field to the document node.
 */
export class InsertFormFieldOnlineRequest {
    /**
     * The document.
     */
    public document: Readable;

    /**
     * From field data.
     */
    public formField: importedFormField.FormField;

    /**
     * The path to the node in the document tree.
     */
    public nodePath: string;

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
     * The index of the node. A new form field will be inserted before the node with the specified node Id.
     */
    public insertBeforeNode: string;

    public constructor(init?: Partial< InsertFormFieldOnlineRequest >) {
        Object.assign(this, init);
    }
}

/**
 * Request model for InsertHeaderFooter operation.
 * Inserts a new HeaderFooter object to the document section.
 */
export class InsertHeaderFooterRequest {
    /**
     * The filename of the input document.
     */
    public name: string;

    /**
     * The path to the section in the document tree.
     */
    public sectionPath: string;

    /**
     * Type of header/footer.
     */
    public headerFooterType: string;

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

    public constructor(init?: Partial< InsertHeaderFooterRequest >) {
        Object.assign(this, init);
    }
}

/**
 * Request model for InsertHeaderFooterOnline operation.
 * Inserts a new HeaderFooter object to the document section.
 */
export class InsertHeaderFooterOnlineRequest {
    /**
     * The document.
     */
    public document: Readable;

    /**
     * The path to the section in the document tree.
     */
    public sectionPath: string;

    /**
     * Type of header/footer.
     */
    public headerFooterType: string;

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

    public constructor(init?: Partial< InsertHeaderFooterOnlineRequest >) {
        Object.assign(this, init);
    }
}

/**
 * Request model for InsertList operation.
 * Inserts a new list to the document.
 */
export class InsertListRequest {
    /**
     * The filename of the input document.
     */
    public name: string;

    /**
     * List object.
     */
    public listInsert: importedListInsert.ListInsert;

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

    public constructor(init?: Partial< InsertListRequest >) {
        Object.assign(this, init);
    }
}

/**
 * Request model for InsertListOnline operation.
 * Inserts a new list to the document.
 */
export class InsertListOnlineRequest {
    /**
     * The document.
     */
    public document: Readable;

    /**
     * List object.
     */
    public listInsert: importedListInsert.ListInsert;

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

    public constructor(init?: Partial< InsertListOnlineRequest >) {
        Object.assign(this, init);
    }
}

/**
 * Request model for InsertOrUpdateParagraphTabStop operation.
 * Inserts a new or updates an existing paragraph tab stop in the document node.
 */
export class InsertOrUpdateParagraphTabStopRequest {
    /**
     * The filename of the input document.
     */
    public name: string;

    /**
     * Object index.
     */
    public index: number;

    /**
     * TabStopInsert dto.
     */
    public tabStopInsertDto: importedTabStopInsert.TabStopInsert;

    /**
     * The path to the node in the document tree.
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

    public constructor(init?: Partial< InsertOrUpdateParagraphTabStopRequest >) {
        Object.assign(this, init);
    }
}

/**
 * Request model for InsertOrUpdateParagraphTabStopOnline operation.
 * Inserts a new or updates an existing paragraph tab stop in the document node.
 */
export class InsertOrUpdateParagraphTabStopOnlineRequest {
    /**
     * The document.
     */
    public document: Readable;

    /**
     * TabStopInsert dto.
     */
    public tabStopInsertDto: importedTabStopInsert.TabStopInsert;

    /**
     * Object index.
     */
    public index: number;

    /**
     * The path to the node in the document tree.
     */
    public nodePath: string;

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

    public constructor(init?: Partial< InsertOrUpdateParagraphTabStopOnlineRequest >) {
        Object.assign(this, init);
    }
}

/**
 * Request model for InsertPageNumbers operation.
 * Inserts page numbers to the document.
 */
export class InsertPageNumbersRequest {
    /**
     * The filename of the input document.
     */
    public name: string;

    /**
     * Page number dto.
     */
    public pageNumber: importedPageNumber.PageNumber;

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

    public constructor(init?: Partial< InsertPageNumbersRequest >) {
        Object.assign(this, init);
    }
}

/**
 * Request model for InsertPageNumbersOnline operation.
 * Inserts page numbers to the document.
 */
export class InsertPageNumbersOnlineRequest {
    /**
     * The document.
     */
    public document: Readable;

    /**
     * Page number dto.
     */
    public pageNumber: importedPageNumber.PageNumber;

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

    public constructor(init?: Partial< InsertPageNumbersOnlineRequest >) {
        Object.assign(this, init);
    }
}

/**
 * Request model for InsertParagraph operation.
 * Inserts a new paragraph to the document node.
 */
export class InsertParagraphRequest {
    /**
     * The filename of the input document.
     */
    public name: string;

    /**
     * Paragraph data.
     */
    public paragraph: importedParagraphInsert.ParagraphInsert;

    /**
     * The path to the node in the document tree.
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
     * The index of the node. A new paragraph will be inserted before the node with the specified index.
     */
    public insertBeforeNode: string;

    public constructor(init?: Partial< InsertParagraphRequest >) {
        Object.assign(this, init);
    }
}

/**
 * Request model for InsertParagraphOnline operation.
 * Inserts a new paragraph to the document node.
 */
export class InsertParagraphOnlineRequest {
    /**
     * The document.
     */
    public document: Readable;

    /**
     * Paragraph data.
     */
    public paragraph: importedParagraphInsert.ParagraphInsert;

    /**
     * The path to the node in the document tree.
     */
    public nodePath: string;

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
     * The index of the node. A new paragraph will be inserted before the node with the specified index.
     */
    public insertBeforeNode: string;

    public constructor(init?: Partial< InsertParagraphOnlineRequest >) {
        Object.assign(this, init);
    }
}

/**
 * Request model for InsertRun operation.
 * Inserts a new Run object to the paragraph.
 */
export class InsertRunRequest {
    /**
     * The filename of the input document.
     */
    public name: string;

    /**
     * The path to the paragraph in the document tree.
     */
    public paragraphPath: string;

    /**
     * Run data.
     */
    public run: importedRunInsert.RunInsert;

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
     * The index of the node. A new Run object will be inserted before the node with the specified node Id.
     */
    public insertBeforeNode: string;

    public constructor(init?: Partial< InsertRunRequest >) {
        Object.assign(this, init);
    }
}

/**
 * Request model for InsertRunOnline operation.
 * Inserts a new Run object to the paragraph.
 */
export class InsertRunOnlineRequest {
    /**
     * The document.
     */
    public document: Readable;

    /**
     * The path to the paragraph in the document tree.
     */
    public paragraphPath: string;

    /**
     * Run data.
     */
    public run: importedRunInsert.RunInsert;

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
     * The index of the node. A new Run object will be inserted before the node with the specified node Id.
     */
    public insertBeforeNode: string;

    public constructor(init?: Partial< InsertRunOnlineRequest >) {
        Object.assign(this, init);
    }
}

/**
 * Request model for InsertStyle operation.
 * Inserts a new style to the document.
 */
export class InsertStyleRequest {
    /**
     * The filename of the input document.
     */
    public name: string;

    /**
     * Style to insert.
     */
    public styleInsert: importedStyleInsert.StyleInsert;

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

    public constructor(init?: Partial< InsertStyleRequest >) {
        Object.assign(this, init);
    }
}

/**
 * Request model for InsertStyleOnline operation.
 * Inserts a new style to the document.
 */
export class InsertStyleOnlineRequest {
    /**
     * The document.
     */
    public document: Readable;

    /**
     * Style to insert.
     */
    public styleInsert: importedStyleInsert.StyleInsert;

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

    public constructor(init?: Partial< InsertStyleOnlineRequest >) {
        Object.assign(this, init);
    }
}

/**
 * Request model for InsertTable operation.
 * Inserts a new table to the document node.
 */
export class InsertTableRequest {
    /**
     * The filename of the input document.
     */
    public name: string;

    /**
     * Table parameters.
     */
    public table: importedTableInsert.TableInsert;

    /**
     * The path to the node in the document tree.
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

    public constructor(init?: Partial< InsertTableRequest >) {
        Object.assign(this, init);
    }
}

/**
 * Request model for InsertTableCell operation.
 * Inserts a new cell to the table row.
 */
export class InsertTableCellRequest {
    /**
     * The filename of the input document.
     */
    public name: string;

    /**
     * The path to the table row in the document tree.
     */
    public tableRowPath: string;

    /**
     * Table cell parameters.
     */
    public cell: importedTableCellInsert.TableCellInsert;

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

    public constructor(init?: Partial< InsertTableCellRequest >) {
        Object.assign(this, init);
    }
}

/**
 * Request model for InsertTableCellOnline operation.
 * Inserts a new cell to the table row.
 */
export class InsertTableCellOnlineRequest {
    /**
     * The document.
     */
    public document: Readable;

    /**
     * The path to the table row in the document tree.
     */
    public tableRowPath: string;

    /**
     * Table cell parameters.
     */
    public cell: importedTableCellInsert.TableCellInsert;

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

    public constructor(init?: Partial< InsertTableCellOnlineRequest >) {
        Object.assign(this, init);
    }
}

/**
 * Request model for InsertTableOnline operation.
 * Inserts a new table to the document node.
 */
export class InsertTableOnlineRequest {
    /**
     * The document.
     */
    public document: Readable;

    /**
     * Table parameters.
     */
    public table: importedTableInsert.TableInsert;

    /**
     * The path to the node in the document tree.
     */
    public nodePath: string;

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

    public constructor(init?: Partial< InsertTableOnlineRequest >) {
        Object.assign(this, init);
    }
}

/**
 * Request model for InsertTableRow operation.
 * Inserts a new row to the table.
 */
export class InsertTableRowRequest {
    /**
     * The filename of the input document.
     */
    public name: string;

    /**
     * The path to the table in the document tree.
     */
    public tablePath: string;

    /**
     * Table row parameters.
     */
    public row: importedTableRowInsert.TableRowInsert;

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

    public constructor(init?: Partial< InsertTableRowRequest >) {
        Object.assign(this, init);
    }
}

/**
 * Request model for InsertTableRowOnline operation.
 * Inserts a new row to the table.
 */
export class InsertTableRowOnlineRequest {
    /**
     * The document.
     */
    public document: Readable;

    /**
     * The path to the table in the document tree.
     */
    public tablePath: string;

    /**
     * Table row parameters.
     */
    public row: importedTableRowInsert.TableRowInsert;

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

    public constructor(init?: Partial< InsertTableRowOnlineRequest >) {
        Object.assign(this, init);
    }
}

/**
 * Request model for InsertWatermarkImage operation.
 * Inserts a new watermark image to the document.
 */
export class InsertWatermarkImageRequest {
    /**
     * The filename of the input document.
     */
    public name: string;

    /**
     * File with image.
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
     * The rotation angle of the watermark.
     */
    public rotationAngle: number;

    /**
     * The filename of the image. If the parameter value is missing — the image data is expected in the request content.
     */
    public image: string;

    public constructor(init?: Partial< InsertWatermarkImageRequest >) {
        Object.assign(this, init);
    }
}

/**
 * Request model for InsertWatermarkImageOnline operation.
 * Inserts a new watermark image to the document.
 */
export class InsertWatermarkImageOnlineRequest {
    /**
     * The document.
     */
    public document: Readable;

    /**
     * File with image.
     */
    public imageFile: Readable;

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
     * The rotation angle of the watermark.
     */
    public rotationAngle: number;

    /**
     * The filename of the image. If the parameter value is missing — the image data is expected in the request content.
     */
    public image: string;

    public constructor(init?: Partial< InsertWatermarkImageOnlineRequest >) {
        Object.assign(this, init);
    }
}

/**
 * Request model for InsertWatermarkText operation.
 * Inserts a new watermark text to the document.
 */
export class InsertWatermarkTextRequest {
    /**
     * The filename of the input document.
     */
    public name: string;

    /**
     * The watermark data.
     */
    public watermarkText: importedWatermarkText.WatermarkText;

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

    public constructor(init?: Partial< InsertWatermarkTextRequest >) {
        Object.assign(this, init);
    }
}

/**
 * Request model for InsertWatermarkTextOnline operation.
 * Inserts a new watermark text to the document.
 */
export class InsertWatermarkTextOnlineRequest {
    /**
     * The document.
     */
    public document: Readable;

    /**
     * The watermark data.
     */
    public watermarkText: importedWatermarkText.WatermarkText;

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

    public constructor(init?: Partial< InsertWatermarkTextOnlineRequest >) {
        Object.assign(this, init);
    }
}

/**
 * Request model for LoadWebDocument operation.
 * Downloads a document from the Web using URL and saves it to cloud storage in the specified format.
 */
export class LoadWebDocumentRequest {
    /**
     * The properties of data downloading.
     */
    public data: importedLoadWebDocumentData.LoadWebDocumentData;

    /**
     * Original document storage.
     */
    public storage: string;

    public constructor(init?: Partial< LoadWebDocumentRequest >) {
        Object.assign(this, init);
    }
}

/**
 * Request model for MoveFile operation.
 * Move file.
 */
export class MoveFileRequest {
    /**
     * Destination file path e.g. '/dest.ext'.
     */
    public destPath: string;

    /**
     * Source file's path e.g. '/Folder 1/file.ext' or '/Bucket/Folder 1/file.ext'.
     */
    public srcPath: string;

    /**
     * Source storage name.
     */
    public srcStorageName: string;

    /**
     * Destination storage name.
     */
    public destStorageName: string;

    /**
     * File version ID to move.
     */
    public versionId: string;

    public constructor(init?: Partial< MoveFileRequest >) {
        Object.assign(this, init);
    }
}

/**
 * Request model for MoveFolder operation.
 * Move folder.
 */
export class MoveFolderRequest {
    /**
     * Destination folder path to move to e.g '/dst'.
     */
    public destPath: string;

    /**
     * Source folder path e.g. /Folder1.
     */
    public srcPath: string;

    /**
     * Source storage name.
     */
    public srcStorageName: string;

    /**
     * Destination storage name.
     */
    public destStorageName: string;

    public constructor(init?: Partial< MoveFolderRequest >) {
        Object.assign(this, init);
    }
}

/**
 * Request model for OptimizeDocument operation.
 * Applies document content optimization options, specific to a particular versions of Microsoft Word.
 */
export class OptimizeDocumentRequest {
    /**
     * The filename of the input document.
     */
    public name: string;

    /**
     * The document optimization options.
     */
    public options: importedOptimizationOptions.OptimizationOptions;

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

    public constructor(init?: Partial< OptimizeDocumentRequest >) {
        Object.assign(this, init);
    }
}

/**
 * Request model for OptimizeDocumentOnline operation.
 * Applies document content optimization options, specific to a particular versions of Microsoft Word.
 */
export class OptimizeDocumentOnlineRequest {
    /**
     * The document.
     */
    public document: Readable;

    /**
     * The document optimization options.
     */
    public options: importedOptimizationOptions.OptimizationOptions;

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

    public constructor(init?: Partial< OptimizeDocumentOnlineRequest >) {
        Object.assign(this, init);
    }
}

/**
 * Request model for ProtectDocument operation.
 * Adds protection to the document.
 */
export class ProtectDocumentRequest {
    /**
     * The filename of the input document.
     */
    public name: string;

    /**
     * Protection request.
     */
    public protectionRequest: importedProtectionRequest.ProtectionRequest;

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

    public constructor(init?: Partial< ProtectDocumentRequest >) {
        Object.assign(this, init);
    }
}

/**
 * Request model for ProtectDocumentOnline operation.
 * Adds protection to the document.
 */
export class ProtectDocumentOnlineRequest {
    /**
     * The document.
     */
    public document: Readable;

    /**
     * Protection request.
     */
    public protectionRequest: importedProtectionRequest.ProtectionRequest;

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

    public constructor(init?: Partial< ProtectDocumentOnlineRequest >) {
        Object.assign(this, init);
    }
}

/**
 * Request model for RejectAllRevisions operation.
 * Rejects all revisions in the document.
 */
export class RejectAllRevisionsRequest {
    /**
     * The filename of the input document.
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

    public constructor(init?: Partial< RejectAllRevisionsRequest >) {
        Object.assign(this, init);
    }
}

/**
 * Request model for RejectAllRevisionsOnline operation.
 * Rejects all revisions in the document.
 */
export class RejectAllRevisionsOnlineRequest {
    /**
     * The document.
     */
    public document: Readable;

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

    public constructor(init?: Partial< RejectAllRevisionsOnlineRequest >) {
        Object.assign(this, init);
    }
}

/**
 * Request model for RemoveRange operation.
 * Removes a range from the document.
 */
export class RemoveRangeRequest {
    /**
     * The filename of the input document.
     */
    public name: string;

    /**
     * The range start identifier.
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

    public constructor(init?: Partial< RemoveRangeRequest >) {
        Object.assign(this, init);
    }
}

/**
 * Request model for RemoveRangeOnline operation.
 * Removes a range from the document.
 */
export class RemoveRangeOnlineRequest {
    /**
     * The document.
     */
    public document: Readable;

    /**
     * The range start identifier.
     */
    public rangeStartIdentifier: string;

    /**
     * The range end identifier.
     */
    public rangeEndIdentifier: string;

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

    public constructor(init?: Partial< RemoveRangeOnlineRequest >) {
        Object.assign(this, init);
    }
}

/**
 * Request model for RenderDrawingObject operation.
 * Renders a DrawingObject to the specified format.
 */
export class RenderDrawingObjectRequest {
    /**
     * The filename of the input document.
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
     * The path to the node in the document tree.
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
     * Folder in filestorage with custom fonts.
     */
    public fontsLocation: string;

    public constructor(init?: Partial< RenderDrawingObjectRequest >) {
        Object.assign(this, init);
    }
}

/**
 * Request model for RenderDrawingObjectOnline operation.
 * Renders a DrawingObject to the specified format.
 */
export class RenderDrawingObjectOnlineRequest {
    /**
     * The document.
     */
    public document: Readable;

    /**
     * The destination format.
     */
    public format: string;

    /**
     * Object index.
     */
    public index: number;

    /**
     * The path to the node in the document tree.
     */
    public nodePath: string;

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
     * Folder in filestorage with custom fonts.
     */
    public fontsLocation: string;

    public constructor(init?: Partial< RenderDrawingObjectOnlineRequest >) {
        Object.assign(this, init);
    }
}

/**
 * Request model for RenderMathObject operation.
 * Renders an OfficeMath object to the specified format.
 */
export class RenderMathObjectRequest {
    /**
     * The filename of the input document.
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
     * The path to the node in the document tree.
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
     * Folder in filestorage with custom fonts.
     */
    public fontsLocation: string;

    public constructor(init?: Partial< RenderMathObjectRequest >) {
        Object.assign(this, init);
    }
}

/**
 * Request model for RenderMathObjectOnline operation.
 * Renders an OfficeMath object to the specified format.
 */
export class RenderMathObjectOnlineRequest {
    /**
     * The document.
     */
    public document: Readable;

    /**
     * The destination format.
     */
    public format: string;

    /**
     * Object index.
     */
    public index: number;

    /**
     * The path to the node in the document tree.
     */
    public nodePath: string;

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
     * Folder in filestorage with custom fonts.
     */
    public fontsLocation: string;

    public constructor(init?: Partial< RenderMathObjectOnlineRequest >) {
        Object.assign(this, init);
    }
}

/**
 * Request model for RenderPage operation.
 * Renders a page to the specified format.
 */
export class RenderPageRequest {
    /**
     * The filename of the input document.
     */
    public name: string;

    /**
     * The index of the page.
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

    public constructor(init?: Partial< RenderPageRequest >) {
        Object.assign(this, init);
    }
}

/**
 * Request model for RenderPageOnline operation.
 * Renders a page to the specified format.
 */
export class RenderPageOnlineRequest {
    /**
     * The document.
     */
    public document: Readable;

    /**
     * The index of the page.
     */
    public pageIndex: number;

    /**
     * The destination format.
     */
    public format: string;

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

    public constructor(init?: Partial< RenderPageOnlineRequest >) {
        Object.assign(this, init);
    }
}

/**
 * Request model for RenderParagraph operation.
 * Renders a paragraph to the specified format.
 */
export class RenderParagraphRequest {
    /**
     * The filename of the input document.
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
     * The path to the node in the document tree.
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
     * Folder in filestorage with custom fonts.
     */
    public fontsLocation: string;

    public constructor(init?: Partial< RenderParagraphRequest >) {
        Object.assign(this, init);
    }
}

/**
 * Request model for RenderParagraphOnline operation.
 * Renders a paragraph to the specified format.
 */
export class RenderParagraphOnlineRequest {
    /**
     * The document.
     */
    public document: Readable;

    /**
     * The destination format.
     */
    public format: string;

    /**
     * Object index.
     */
    public index: number;

    /**
     * The path to the node in the document tree.
     */
    public nodePath: string;

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
     * Folder in filestorage with custom fonts.
     */
    public fontsLocation: string;

    public constructor(init?: Partial< RenderParagraphOnlineRequest >) {
        Object.assign(this, init);
    }
}

/**
 * Request model for RenderTable operation.
 * Renders a table to the specified format.
 */
export class RenderTableRequest {
    /**
     * The filename of the input document.
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
     * The path to the node in the document tree.
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
     * Folder in filestorage with custom fonts.
     */
    public fontsLocation: string;

    public constructor(init?: Partial< RenderTableRequest >) {
        Object.assign(this, init);
    }
}

/**
 * Request model for RenderTableOnline operation.
 * Renders a table to the specified format.
 */
export class RenderTableOnlineRequest {
    /**
     * The document.
     */
    public document: Readable;

    /**
     * The destination format.
     */
    public format: string;

    /**
     * Object index.
     */
    public index: number;

    /**
     * The path to the node in the document tree.
     */
    public nodePath: string;

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
     * Folder in filestorage with custom fonts.
     */
    public fontsLocation: string;

    public constructor(init?: Partial< RenderTableOnlineRequest >) {
        Object.assign(this, init);
    }
}

/**
 * Request model for ReplaceText operation.
 * Replaces text in the document.
 */
export class ReplaceTextRequest {
    /**
     * The filename of the input document.
     */
    public name: string;

    /**
     * The replace operation settings.
     */
    public replaceText: importedReplaceTextParameters.ReplaceTextParameters;

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

    public constructor(init?: Partial< ReplaceTextRequest >) {
        Object.assign(this, init);
    }
}

/**
 * Request model for ReplaceTextOnline operation.
 * Replaces text in the document.
 */
export class ReplaceTextOnlineRequest {
    /**
     * The document.
     */
    public document: Readable;

    /**
     * The replace operation settings.
     */
    public replaceText: importedReplaceTextParameters.ReplaceTextParameters;

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

    public constructor(init?: Partial< ReplaceTextOnlineRequest >) {
        Object.assign(this, init);
    }
}

/**
 * Request model for ReplaceWithText operation.
 * Replaces a range with text in the document.
 */
export class ReplaceWithTextRequest {
    /**
     * The filename of the input document.
     */
    public name: string;

    /**
     * The range start identifier.
     */
    public rangeStartIdentifier: string;

    /**
     * Model with text for replacement.
     */
    public rangeText: importedReplaceRange.ReplaceRange;

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

    public constructor(init?: Partial< ReplaceWithTextRequest >) {
        Object.assign(this, init);
    }
}

/**
 * Request model for ReplaceWithTextOnline operation.
 * Replaces a range with text in the document.
 */
export class ReplaceWithTextOnlineRequest {
    /**
     * The document.
     */
    public document: Readable;

    /**
     * The range start identifier.
     */
    public rangeStartIdentifier: string;

    /**
     * Model with text for replacement.
     */
    public rangeText: importedReplaceRange.ReplaceRange;

    /**
     * The range end identifier.
     */
    public rangeEndIdentifier: string;

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

    public constructor(init?: Partial< ReplaceWithTextOnlineRequest >) {
        Object.assign(this, init);
    }
}

/**
 * Request model for ResetCache operation.
 * Clears the font cache.
 */
export class ResetCacheRequest {

    public constructor(init?: Partial< ResetCacheRequest >) {
        Object.assign(this, init);
    }
}

/**
 * Request model for SaveAs operation.
 * Converts a document in cloud storage to the specified format.
 */
export class SaveAsRequest {
    /**
     * The filename of the input document.
     */
    public name: string;

    /**
     * Save options.
     */
    public saveOptionsData: importedSaveOptionsData.SaveOptionsData;

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

    public constructor(init?: Partial< SaveAsRequest >) {
        Object.assign(this, init);
    }
}

/**
 * Request model for SaveAsOnline operation.
 * Converts a document in cloud storage to the specified format.
 */
export class SaveAsOnlineRequest {
    /**
     * The document.
     */
    public document: Readable;

    /**
     * Save options.
     */
    public saveOptionsData: importedSaveOptionsData.SaveOptionsData;

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

    public constructor(init?: Partial< SaveAsOnlineRequest >) {
        Object.assign(this, init);
    }
}

/**
 * Request model for SaveAsRange operation.
 * Saves a range as a new document.
 */
export class SaveAsRangeRequest {
    /**
     * The filename of the input document.
     */
    public name: string;

    /**
     * The range start identifier.
     */
    public rangeStartIdentifier: string;

    /**
     * Parameters of a new document.
     */
    public documentParameters: importedRangeDocument.RangeDocument;

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

    public constructor(init?: Partial< SaveAsRangeRequest >) {
        Object.assign(this, init);
    }
}

/**
 * Request model for SaveAsRangeOnline operation.
 * Saves a range as a new document.
 */
export class SaveAsRangeOnlineRequest {
    /**
     * The document.
     */
    public document: Readable;

    /**
     * The range start identifier.
     */
    public rangeStartIdentifier: string;

    /**
     * Parameters of a new document.
     */
    public documentParameters: importedRangeDocument.RangeDocument;

    /**
     * The range end identifier.
     */
    public rangeEndIdentifier: string;

    /**
     * Encoding that will be used to load an HTML (or TXT) document if the encoding is not specified in HTML.
     */
    public loadEncoding: string;

    /**
     * Password for opening an encrypted document.
     */
    public password: string;

    public constructor(init?: Partial< SaveAsRangeOnlineRequest >) {
        Object.assign(this, init);
    }
}

/**
 * Request model for SaveAsTiff operation.
 * Converts a document in cloud storage to TIFF format using detailed conversion settings.
 */
export class SaveAsTiffRequest {
    /**
     * The filename of the input document.
     */
    public name: string;

    /**
     * Tiff save options.
     */
    public saveOptions: importedTiffSaveOptionsData.TiffSaveOptionsData;

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
     * The flag indicating whether to use antialiasing.
     */
    public useAntiAliasing: boolean;

    /**
     * The flag indicating whether to use high quality.
     */
    public useHighQualityRendering: boolean;

    /**
     * The level of brightness for the generated images.
     */
    public imageBrightness: number;

    /**
     * The color mode for the generated images.
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
     * The number of pages to render.
     */
    public pageCount: number;

    /**
     * The index of the page to start rendering.
     */
    public pageIndex: number;

    /**
     * The background image color.
     */
    public paperColor: string;

    /**
     * The pixel format of the generated images.
     */
    public pixelFormat: string;

    /**
     * The resolution of the generated images.
     */
    public resolution: number;

    /**
     * The zoom factor for the generated images.
     */
    public scale: number;

    /**
     * The compression tipe.
     */
    public tiffCompression: string;

    /**
     * The optional dml rendering mode. The default value is Fallback.
     */
    public dmlRenderingMode: string;

    /**
     * The optional dml effects rendering mode. The default value is Simplified.
     */
    public dmlEffectsRenderingMode: string;

    /**
     * The optional TIFF binarization method. Possible values are: FloydSteinbergDithering, Threshold.
     */
    public tiffBinarizationMethod: string;

    /**
     * The flag indicating whether to ZIP the output.
     */
    public zipOutput: boolean;

    /**
     * Folder in filestorage with custom fonts.
     */
    public fontsLocation: string;

    public constructor(init?: Partial< SaveAsTiffRequest >) {
        Object.assign(this, init);
    }
}

/**
 * Request model for SaveAsTiffOnline operation.
 * Converts a document in cloud storage to TIFF format using detailed conversion settings.
 */
export class SaveAsTiffOnlineRequest {
    /**
     * The document.
     */
    public document: Readable;

    /**
     * Tiff save options.
     */
    public saveOptions: importedTiffSaveOptionsData.TiffSaveOptionsData;

    /**
     * Encoding that will be used to load an HTML (or TXT) document if the encoding is not specified in HTML.
     */
    public loadEncoding: string;

    /**
     * Password for opening an encrypted document.
     */
    public password: string;

    /**
     * The flag indicating whether to use antialiasing.
     */
    public useAntiAliasing: boolean;

    /**
     * The flag indicating whether to use high quality.
     */
    public useHighQualityRendering: boolean;

    /**
     * The level of brightness for the generated images.
     */
    public imageBrightness: number;

    /**
     * The color mode for the generated images.
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
     * The number of pages to render.
     */
    public pageCount: number;

    /**
     * The index of the page to start rendering.
     */
    public pageIndex: number;

    /**
     * The background image color.
     */
    public paperColor: string;

    /**
     * The pixel format of the generated images.
     */
    public pixelFormat: string;

    /**
     * The resolution of the generated images.
     */
    public resolution: number;

    /**
     * The zoom factor for the generated images.
     */
    public scale: number;

    /**
     * The compression tipe.
     */
    public tiffCompression: string;

    /**
     * The optional dml rendering mode. The default value is Fallback.
     */
    public dmlRenderingMode: string;

    /**
     * The optional dml effects rendering mode. The default value is Simplified.
     */
    public dmlEffectsRenderingMode: string;

    /**
     * The optional TIFF binarization method. Possible values are: FloydSteinbergDithering, Threshold.
     */
    public tiffBinarizationMethod: string;

    /**
     * The flag indicating whether to ZIP the output.
     */
    public zipOutput: boolean;

    /**
     * Folder in filestorage with custom fonts.
     */
    public fontsLocation: string;

    public constructor(init?: Partial< SaveAsTiffOnlineRequest >) {
        Object.assign(this, init);
    }
}

/**
 * Request model for Search operation.
 * Searches text, specified by the regular expression, in the document.
 */
export class SearchRequest {
    /**
     * The filename of the input document.
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

    public constructor(init?: Partial< SearchRequest >) {
        Object.assign(this, init);
    }
}

/**
 * Request model for SearchOnline operation.
 * Searches text, specified by the regular expression, in the document.
 */
export class SearchOnlineRequest {
    /**
     * The document.
     */
    public document: Readable;

    /**
     * The regular expression used to find matches.
     */
    public pattern: string;

    /**
     * Encoding that will be used to load an HTML (or TXT) document if the encoding is not specified in HTML.
     */
    public loadEncoding: string;

    /**
     * Password for opening an encrypted document.
     */
    public password: string;

    public constructor(init?: Partial< SearchOnlineRequest >) {
        Object.assign(this, init);
    }
}

/**
 * Request model for SplitDocument operation.
 * Splits a document into parts and saves them in the specified format.
 */
export class SplitDocumentRequest {
    /**
     * The filename of the input document.
     */
    public name: string;

    /**
     * The format to split.
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
     * Result path of the document after the operation. If this parameter is omitted then result of the operation will be saved as the source document.
     */
    public destFileName: string;

    /**
     * The start page.
     */
    public from: number;

    /**
     * The end page.
     */
    public to: number;

    /**
     * The flag indicating whether to ZIP the output.
     */
    public zipOutput: boolean;

    /**
     * Folder in filestorage with custom fonts.
     */
    public fontsLocation: string;

    public constructor(init?: Partial< SplitDocumentRequest >) {
        Object.assign(this, init);
    }
}

/**
 * Request model for SplitDocumentOnline operation.
 * Splits a document into parts and saves them in the specified format.
 */
export class SplitDocumentOnlineRequest {
    /**
     * The document.
     */
    public document: Readable;

    /**
     * The format to split.
     */
    public format: string;

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
     * The start page.
     */
    public from: number;

    /**
     * The end page.
     */
    public to: number;

    /**
     * The flag indicating whether to ZIP the output.
     */
    public zipOutput: boolean;

    /**
     * Folder in filestorage with custom fonts.
     */
    public fontsLocation: string;

    public constructor(init?: Partial< SplitDocumentOnlineRequest >) {
        Object.assign(this, init);
    }
}

/**
 * Request model for UnprotectDocument operation.
 * Removes protection from the document.
 */
export class UnprotectDocumentRequest {
    /**
     * The filename of the input document.
     */
    public name: string;

    /**
     * Protection request.
     */
    public protectionRequest: importedProtectionRequest.ProtectionRequest;

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

    public constructor(init?: Partial< UnprotectDocumentRequest >) {
        Object.assign(this, init);
    }
}

/**
 * Request model for UnprotectDocumentOnline operation.
 * Removes protection from the document.
 */
export class UnprotectDocumentOnlineRequest {
    /**
     * The document.
     */
    public document: Readable;

    /**
     * Protection request.
     */
    public protectionRequest: importedProtectionRequest.ProtectionRequest;

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

    public constructor(init?: Partial< UnprotectDocumentOnlineRequest >) {
        Object.assign(this, init);
    }
}

/**
 * Request model for UpdateBookmark operation.
 * Updates a bookmark in the document.
 */
export class UpdateBookmarkRequest {
    /**
     * The filename of the input document.
     */
    public name: string;

    /**
     * The name of the bookmark.
     */
    public bookmarkName: string;

    /**
     * Bookmark data.
     */
    public bookmarkData: importedBookmarkData.BookmarkData;

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

    public constructor(init?: Partial< UpdateBookmarkRequest >) {
        Object.assign(this, init);
    }
}

/**
 * Request model for UpdateBookmarkOnline operation.
 * Updates a bookmark in the document.
 */
export class UpdateBookmarkOnlineRequest {
    /**
     * The document.
     */
    public document: Readable;

    /**
     * The name of the bookmark.
     */
    public bookmarkName: string;

    /**
     * Bookmark data.
     */
    public bookmarkData: importedBookmarkData.BookmarkData;

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

    public constructor(init?: Partial< UpdateBookmarkOnlineRequest >) {
        Object.assign(this, init);
    }
}

/**
 * Request model for UpdateBorder operation.
 * The 'nodePath' parameter should refer to a paragraph, a cell or a row.
 */
export class UpdateBorderRequest {
    /**
     * The filename of the input document.
     */
    public name: string;

    /**
     * Border type.
     */
    public borderType: string;

    /**
     * Border properties.
     */
    public borderProperties: importedBorder.Border;

    /**
     * The path to the node in the document tree.
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

    public constructor(init?: Partial< UpdateBorderRequest >) {
        Object.assign(this, init);
    }
}

/**
 * Request model for UpdateBorderOnline operation.
 * Updates a border in the document node.
 */
export class UpdateBorderOnlineRequest {
    /**
     * The document.
     */
    public document: Readable;

    /**
     * Border properties.
     */
    public borderProperties: importedBorder.Border;

    /**
     * Border type.
     */
    public borderType: string;

    /**
     * The path to the node in the document tree.
     */
    public nodePath: string;

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

    public constructor(init?: Partial< UpdateBorderOnlineRequest >) {
        Object.assign(this, init);
    }
}

/**
 * Request model for UpdateComment operation.
 * Updates a comment in the document.
 */
export class UpdateCommentRequest {
    /**
     * The filename of the input document.
     */
    public name: string;

    /**
     * The index of the comment.
     */
    public commentIndex: number;

    /**
     * Comment data.
     */
    public comment: importedCommentUpdate.CommentUpdate;

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

    public constructor(init?: Partial< UpdateCommentRequest >) {
        Object.assign(this, init);
    }
}

/**
 * Request model for UpdateCommentOnline operation.
 * Updates a comment in the document.
 */
export class UpdateCommentOnlineRequest {
    /**
     * The document.
     */
    public document: Readable;

    /**
     * The index of the comment.
     */
    public commentIndex: number;

    /**
     * Comment data.
     */
    public comment: importedCommentUpdate.CommentUpdate;

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

    public constructor(init?: Partial< UpdateCommentOnlineRequest >) {
        Object.assign(this, init);
    }
}

/**
 * Request model for UpdateDrawingObject operation.
 * Updates a DrawingObject in the document node.
 */
export class UpdateDrawingObjectRequest {
    /**
     * The filename of the input document.
     */
    public name: string;

    /**
     * Drawing object parameters.
     */
    public drawingObject: importedDrawingObjectUpdate.DrawingObjectUpdate;

    /**
     * File with image.
     */
    public imageFile: Readable;

    /**
     * Object index.
     */
    public index: number;

    /**
     * The path to the node in the document tree.
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

    public constructor(init?: Partial< UpdateDrawingObjectRequest >) {
        Object.assign(this, init);
    }
}

/**
 * Request model for UpdateDrawingObjectOnline operation.
 * Updates a DrawingObject in the document node.
 */
export class UpdateDrawingObjectOnlineRequest {
    /**
     * The document.
     */
    public document: Readable;

    /**
     * Drawing object parameters.
     */
    public drawingObject: importedDrawingObjectUpdate.DrawingObjectUpdate;

    /**
     * File with image.
     */
    public imageFile: Readable;

    /**
     * Object index.
     */
    public index: number;

    /**
     * The path to the node in the document tree.
     */
    public nodePath: string;

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

    public constructor(init?: Partial< UpdateDrawingObjectOnlineRequest >) {
        Object.assign(this, init);
    }
}

/**
 * Request model for UpdateField operation.
 * Updates a field in the document node.
 */
export class UpdateFieldRequest {
    /**
     * The filename of the input document.
     */
    public name: string;

    /**
     * Object index.
     */
    public index: number;

    /**
     * Field data.
     */
    public field: importedFieldUpdate.FieldUpdate;

    /**
     * The path to the node in the document tree.
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

    public constructor(init?: Partial< UpdateFieldRequest >) {
        Object.assign(this, init);
    }
}

/**
 * Request model for UpdateFieldOnline operation.
 * Updates a field in the document node.
 */
export class UpdateFieldOnlineRequest {
    /**
     * The document.
     */
    public document: Readable;

    /**
     * Field data.
     */
    public field: importedFieldUpdate.FieldUpdate;

    /**
     * Object index.
     */
    public index: number;

    /**
     * The path to the node in the document tree.
     */
    public nodePath: string;

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

    public constructor(init?: Partial< UpdateFieldOnlineRequest >) {
        Object.assign(this, init);
    }
}

/**
 * Request model for UpdateFields operation.
 * Reevaluates field values in the document.
 */
export class UpdateFieldsRequest {
    /**
     * The filename of the input document.
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

    public constructor(init?: Partial< UpdateFieldsRequest >) {
        Object.assign(this, init);
    }
}

/**
 * Request model for UpdateFieldsOnline operation.
 * Reevaluates field values in the document.
 */
export class UpdateFieldsOnlineRequest {
    /**
     * The document.
     */
    public document: Readable;

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

    public constructor(init?: Partial< UpdateFieldsOnlineRequest >) {
        Object.assign(this, init);
    }
}

/**
 * Request model for UpdateFootnote operation.
 * Updates a footnote in the document node.
 */
export class UpdateFootnoteRequest {
    /**
     * The filename of the input document.
     */
    public name: string;

    /**
     * Object index.
     */
    public index: number;

    /**
     * Footnote data.
     */
    public footnoteDto: importedFootnoteUpdate.FootnoteUpdate;

    /**
     * The path to the node in the document tree.
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

    public constructor(init?: Partial< UpdateFootnoteRequest >) {
        Object.assign(this, init);
    }
}

/**
 * Request model for UpdateFootnoteOnline operation.
 * Updates a footnote in the document node.
 */
export class UpdateFootnoteOnlineRequest {
    /**
     * The document.
     */
    public document: Readable;

    /**
     * Footnote data.
     */
    public footnoteDto: importedFootnoteUpdate.FootnoteUpdate;

    /**
     * Object index.
     */
    public index: number;

    /**
     * The path to the node in the document tree.
     */
    public nodePath: string;

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

    public constructor(init?: Partial< UpdateFootnoteOnlineRequest >) {
        Object.assign(this, init);
    }
}

/**
 * Request model for UpdateFormField operation.
 * Updates a form field in the document node.
 */
export class UpdateFormFieldRequest {
    /**
     * The filename of the input document.
     */
    public name: string;

    /**
     * Object index.
     */
    public index: number;

    /**
     * From field data.
     */
    public formField: importedFormField.FormField;

    /**
     * The path to the node in the document tree.
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

    public constructor(init?: Partial< UpdateFormFieldRequest >) {
        Object.assign(this, init);
    }
}

/**
 * Request model for UpdateFormFieldOnline operation.
 * Updates a form field in the document node.
 */
export class UpdateFormFieldOnlineRequest {
    /**
     * The document.
     */
    public document: Readable;

    /**
     * From field data.
     */
    public formField: importedFormField.FormField;

    /**
     * Object index.
     */
    public index: number;

    /**
     * The path to the node in the document tree.
     */
    public nodePath: string;

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

    public constructor(init?: Partial< UpdateFormFieldOnlineRequest >) {
        Object.assign(this, init);
    }
}

/**
 * Request model for UpdateList operation.
 * Updates a list in the document.
 */
export class UpdateListRequest {
    /**
     * The filename of the input document.
     */
    public name: string;

    /**
     * The list Id.
     */
    public listId: number;

    /**
     * List object.
     */
    public listUpdate: importedListUpdate.ListUpdate;

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

    public constructor(init?: Partial< UpdateListRequest >) {
        Object.assign(this, init);
    }
}

/**
 * Request model for UpdateListLevel operation.
 * Updates the level of a List element in the document.
 */
export class UpdateListLevelRequest {
    /**
     * The filename of the input document.
     */
    public name: string;

    /**
     * The list Id.
     */
    public listId: number;

    /**
     * The list level.
     */
    public listLevel: number;

    /**
     * List object.
     */
    public listUpdate: importedListLevelUpdate.ListLevelUpdate;

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

    public constructor(init?: Partial< UpdateListLevelRequest >) {
        Object.assign(this, init);
    }
}

/**
 * Request model for UpdateListLevelOnline operation.
 * Updates the level of a List element in the document.
 */
export class UpdateListLevelOnlineRequest {
    /**
     * The document.
     */
    public document: Readable;

    /**
     * The list Id.
     */
    public listId: number;

    /**
     * List object.
     */
    public listUpdate: importedListLevelUpdate.ListLevelUpdate;

    /**
     * The list level.
     */
    public listLevel: number;

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

    public constructor(init?: Partial< UpdateListLevelOnlineRequest >) {
        Object.assign(this, init);
    }
}

/**
 * Request model for UpdateListOnline operation.
 * Updates a list in the document.
 */
export class UpdateListOnlineRequest {
    /**
     * The document.
     */
    public document: Readable;

    /**
     * The list Id.
     */
    public listId: number;

    /**
     * List object.
     */
    public listUpdate: importedListUpdate.ListUpdate;

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

    public constructor(init?: Partial< UpdateListOnlineRequest >) {
        Object.assign(this, init);
    }
}

/**
 * Request model for UpdateParagraphFormat operation.
 * Updates the formatting properties of a paragraph in the document node.
 */
export class UpdateParagraphFormatRequest {
    /**
     * The filename of the input document.
     */
    public name: string;

    /**
     * Object index.
     */
    public index: number;

    /**
     * Dto for paragraph format update.
     */
    public paragraphFormatDto: importedParagraphFormatUpdate.ParagraphFormatUpdate;

    /**
     * The path to the node in the document tree.
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

    public constructor(init?: Partial< UpdateParagraphFormatRequest >) {
        Object.assign(this, init);
    }
}

/**
 * Request model for UpdateParagraphFormatOnline operation.
 * Updates the formatting properties of a paragraph in the document node.
 */
export class UpdateParagraphFormatOnlineRequest {
    /**
     * The document.
     */
    public document: Readable;

    /**
     * Dto for paragraph format update.
     */
    public paragraphFormatDto: importedParagraphFormatUpdate.ParagraphFormatUpdate;

    /**
     * Object index.
     */
    public index: number;

    /**
     * The path to the node in the document tree.
     */
    public nodePath: string;

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

    public constructor(init?: Partial< UpdateParagraphFormatOnlineRequest >) {
        Object.assign(this, init);
    }
}

/**
 * Request model for UpdateParagraphListFormat operation.
 * Updates the formatting properties of a paragraph list in the document node.
 */
export class UpdateParagraphListFormatRequest {
    /**
     * The filename of the input document.
     */
    public name: string;

    /**
     * Object index.
     */
    public index: number;

    /**
     * ListFormatUpdate dto.
     */
    public listFormatDto: importedListFormatUpdate.ListFormatUpdate;

    /**
     * The path to the node in the document tree.
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

    public constructor(init?: Partial< UpdateParagraphListFormatRequest >) {
        Object.assign(this, init);
    }
}

/**
 * Request model for UpdateParagraphListFormatOnline operation.
 * Updates the formatting properties of a paragraph list in the document node.
 */
export class UpdateParagraphListFormatOnlineRequest {
    /**
     * The document.
     */
    public document: Readable;

    /**
     * ListFormatUpdate dto.
     */
    public listFormatDto: importedListFormatUpdate.ListFormatUpdate;

    /**
     * Object index.
     */
    public index: number;

    /**
     * The path to the node in the document tree.
     */
    public nodePath: string;

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

    public constructor(init?: Partial< UpdateParagraphListFormatOnlineRequest >) {
        Object.assign(this, init);
    }
}

/**
 * Request model for UpdateRun operation.
 * Updates a Run object in the paragraph.
 */
export class UpdateRunRequest {
    /**
     * The filename of the input document.
     */
    public name: string;

    /**
     * The path to the paragraph in the document tree.
     */
    public paragraphPath: string;

    /**
     * Object index.
     */
    public index: number;

    /**
     * Run data.
     */
    public run: importedRunUpdate.RunUpdate;

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

    public constructor(init?: Partial< UpdateRunRequest >) {
        Object.assign(this, init);
    }
}

/**
 * Request model for UpdateRunFont operation.
 * Updates the font properties of a Run object in the paragraph.
 */
export class UpdateRunFontRequest {
    /**
     * The filename of the input document.
     */
    public name: string;

    /**
     * The path to the paragraph in the document tree.
     */
    public paragraphPath: string;

    /**
     * Object index.
     */
    public index: number;

    /**
     * Font dto object.
     */
    public fontDto: importedFont.Font;

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

    public constructor(init?: Partial< UpdateRunFontRequest >) {
        Object.assign(this, init);
    }
}

/**
 * Request model for UpdateRunFontOnline operation.
 * Updates the font properties of a Run object in the paragraph.
 */
export class UpdateRunFontOnlineRequest {
    /**
     * The document.
     */
    public document: Readable;

    /**
     * The path to the paragraph in the document tree.
     */
    public paragraphPath: string;

    /**
     * Font dto object.
     */
    public fontDto: importedFont.Font;

    /**
     * Object index.
     */
    public index: number;

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

    public constructor(init?: Partial< UpdateRunFontOnlineRequest >) {
        Object.assign(this, init);
    }
}

/**
 * Request model for UpdateRunOnline operation.
 * Updates a Run object in the paragraph.
 */
export class UpdateRunOnlineRequest {
    /**
     * The document.
     */
    public document: Readable;

    /**
     * The path to the paragraph in the document tree.
     */
    public paragraphPath: string;

    /**
     * Run data.
     */
    public run: importedRunUpdate.RunUpdate;

    /**
     * Object index.
     */
    public index: number;

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

    public constructor(init?: Partial< UpdateRunOnlineRequest >) {
        Object.assign(this, init);
    }
}

/**
 * Request model for UpdateSectionPageSetup operation.
 * Updates the page setup of a section in the document.
 */
export class UpdateSectionPageSetupRequest {
    /**
     * The filename of the input document.
     */
    public name: string;

    /**
     * The index of the section.
     */
    public sectionIndex: number;

    /**
     * Page setup properties dto.
     */
    public pageSetup: importedPageSetup.PageSetup;

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

    public constructor(init?: Partial< UpdateSectionPageSetupRequest >) {
        Object.assign(this, init);
    }
}

/**
 * Request model for UpdateSectionPageSetupOnline operation.
 * Updates the page setup of a section in the document.
 */
export class UpdateSectionPageSetupOnlineRequest {
    /**
     * The document.
     */
    public document: Readable;

    /**
     * The index of the section.
     */
    public sectionIndex: number;

    /**
     * Page setup properties dto.
     */
    public pageSetup: importedPageSetup.PageSetup;

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

    public constructor(init?: Partial< UpdateSectionPageSetupOnlineRequest >) {
        Object.assign(this, init);
    }
}

/**
 * Request model for UpdateStyle operation.
 * Updates a style in the document.
 */
export class UpdateStyleRequest {
    /**
     * The filename of the input document.
     */
    public name: string;

    /**
     * The name of the style.
     */
    public styleName: string;

    /**
     * Style properties to update.
     */
    public styleUpdate: importedStyleUpdate.StyleUpdate;

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

    public constructor(init?: Partial< UpdateStyleRequest >) {
        Object.assign(this, init);
    }
}

/**
 * Request model for UpdateStyleOnline operation.
 * Updates a style in the document.
 */
export class UpdateStyleOnlineRequest {
    /**
     * The document.
     */
    public document: Readable;

    /**
     * The name of the style.
     */
    public styleName: string;

    /**
     * Style properties to update.
     */
    public styleUpdate: importedStyleUpdate.StyleUpdate;

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

    public constructor(init?: Partial< UpdateStyleOnlineRequest >) {
        Object.assign(this, init);
    }
}

/**
 * Request model for UpdateTableCellFormat operation.
 * Updates the formatting properties of a cell in the table row.
 */
export class UpdateTableCellFormatRequest {
    /**
     * The filename of the input document.
     */
    public name: string;

    /**
     * The path to the table row in the document tree.
     */
    public tableRowPath: string;

    /**
     * Object index.
     */
    public index: number;

    /**
     * The properties.
     */
    public format: importedTableCellFormat.TableCellFormat;

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

    public constructor(init?: Partial< UpdateTableCellFormatRequest >) {
        Object.assign(this, init);
    }
}

/**
 * Request model for UpdateTableCellFormatOnline operation.
 * Updates the formatting properties of a cell in the table row.
 */
export class UpdateTableCellFormatOnlineRequest {
    /**
     * The document.
     */
    public document: Readable;

    /**
     * The path to the table row in the document tree.
     */
    public tableRowPath: string;

    /**
     * The properties.
     */
    public format: importedTableCellFormat.TableCellFormat;

    /**
     * Object index.
     */
    public index: number;

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

    public constructor(init?: Partial< UpdateTableCellFormatOnlineRequest >) {
        Object.assign(this, init);
    }
}

/**
 * Request model for UpdateTableProperties operation.
 * Updates properties of a table in the document node.
 */
export class UpdateTablePropertiesRequest {
    /**
     * The filename of the input document.
     */
    public name: string;

    /**
     * Object index.
     */
    public index: number;

    /**
     * The properties.
     */
    public properties: importedTableProperties.TableProperties;

    /**
     * The path to the node in the document tree.
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

    public constructor(init?: Partial< UpdateTablePropertiesRequest >) {
        Object.assign(this, init);
    }
}

/**
 * Request model for UpdateTablePropertiesOnline operation.
 * Updates properties of a table in the document node.
 */
export class UpdateTablePropertiesOnlineRequest {
    /**
     * The document.
     */
    public document: Readable;

    /**
     * The properties.
     */
    public properties: importedTableProperties.TableProperties;

    /**
     * Object index.
     */
    public index: number;

    /**
     * The path to the node in the document tree.
     */
    public nodePath: string;

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

    public constructor(init?: Partial< UpdateTablePropertiesOnlineRequest >) {
        Object.assign(this, init);
    }
}

/**
 * Request model for UpdateTableRowFormat operation.
 * Updates the formatting properties of a table row.
 */
export class UpdateTableRowFormatRequest {
    /**
     * The filename of the input document.
     */
    public name: string;

    /**
     * The path to the table in the document tree.
     */
    public tablePath: string;

    /**
     * Object index.
     */
    public index: number;

    /**
     * Table row format.
     */
    public format: importedTableRowFormat.TableRowFormat;

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

    public constructor(init?: Partial< UpdateTableRowFormatRequest >) {
        Object.assign(this, init);
    }
}

/**
 * Request model for UpdateTableRowFormatOnline operation.
 * Updates the formatting properties of a table row.
 */
export class UpdateTableRowFormatOnlineRequest {
    /**
     * The document.
     */
    public document: Readable;

    /**
     * The path to the table in the document tree.
     */
    public tablePath: string;

    /**
     * Table row format.
     */
    public format: importedTableRowFormat.TableRowFormat;

    /**
     * Object index.
     */
    public index: number;

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

    public constructor(init?: Partial< UpdateTableRowFormatOnlineRequest >) {
        Object.assign(this, init);
    }
}

/**
 * Request model for UploadFile operation.
 * Upload file.
 */
export class UploadFileRequest {
    /**
     * File to upload.
     */
    public fileContent: Readable;

    /**
     * Path where to upload including filename and extension e.g. /file.ext or /Folder 1/file.ext
     * If the content is multipart and path does not contains the file name it tries to get them from filename parameter
     * from Content-Disposition header.
     */
    public path: string;

    /**
     * Storage name.
     */
    public storageName: string;

    public constructor(init?: Partial< UploadFileRequest >) {
        Object.assign(this, init);
    }
}

/**
 * Response model for AcceptAllRevisionsOnline operation.
 * Accepts all revisions in the document.
 */
export class AcceptAllRevisionsOnlineResponse {
    /**
     * The response model.
     */
    public model: importedRevisionsModificationResponse.RevisionsModificationResponse;

    /**
     * The document after modification.
     */
    public document: Buffer;
}

/**
 * Response model for AppendDocumentOnline operation.
 * Appends documents to the original document.
 */
export class AppendDocumentOnlineResponse {
    /**
     * The response model.
     */
    public model: importedDocumentResponse.DocumentResponse;

    /**
     * The document after modification.
     */
    public document: Buffer;
}

/**
 * Response model for ApplyStyleToDocumentElementOnline operation.
 * Applies a style to the document node.
 */
export class ApplyStyleToDocumentElementOnlineResponse {
    /**
     * The response model.
     */
    public model: importedWordsResponse.WordsResponse;

    /**
     * The document after modification.
     */
    public document: Buffer;
}

/**
 * Response model for CompareDocumentOnline operation.
 * Compares two documents.
 */
export class CompareDocumentOnlineResponse {
    /**
     * The response model.
     */
    public model: importedDocumentResponse.DocumentResponse;

    /**
     * The document after modification.
     */
    public document: Buffer;
}

/**
 * Response model for CopyStyleOnline operation.
 * Makes a copy of the style in the document.
 */
export class CopyStyleOnlineResponse {
    /**
     * The response model.
     */
    public model: importedStyleResponse.StyleResponse;

    /**
     * The document after modification.
     */
    public document: Buffer;
}

/**
 * Response model for CreateOrUpdateDocumentPropertyOnline operation.
 * Adds a new or updates an existing document property.
 */
export class CreateOrUpdateDocumentPropertyOnlineResponse {
    /**
     * The response model.
     */
    public model: importedDocumentPropertyResponse.DocumentPropertyResponse;

    /**
     * The document after modification.
     */
    public document: Buffer;
}

/**
 * Response model for DeleteAllParagraphTabStopsOnline operation.
 * Removes paragraph tab stops from the document node.
 */
export class DeleteAllParagraphTabStopsOnlineResponse {
    /**
     * The response model.
     */
    public model: importedTabStopsResponse.TabStopsResponse;

    /**
     * The document after modification.
     */
    public document: Buffer;
}

/**
 * Response model for DeleteBorderOnline operation.
 * Removes a border from the document node.
 */
export class DeleteBorderOnlineResponse {
    /**
     * The response model.
     */
    public model: importedBorderResponse.BorderResponse;

    /**
     * The document after modification.
     */
    public document: Buffer;
}

/**
 * Response model for DeleteBordersOnline operation.
 * Removes borders from the document node.
 */
export class DeleteBordersOnlineResponse {
    /**
     * The response model.
     */
    public model: importedBordersResponse.BordersResponse;

    /**
     * The document after modification.
     */
    public document: Buffer;
}

/**
 * Response model for DeleteParagraphListFormatOnline operation.
 * Removes the formatting properties of a paragraph list from the document node.
 */
export class DeleteParagraphListFormatOnlineResponse {
    /**
     * The response model.
     */
    public model: importedParagraphListFormatResponse.ParagraphListFormatResponse;

    /**
     * The document after modification.
     */
    public document: Buffer;
}

/**
 * Response model for DeleteParagraphTabStopOnline operation.
 * Removes a paragraph tab stop from the document node.
 */
export class DeleteParagraphTabStopOnlineResponse {
    /**
     * The response model.
     */
    public model: importedTabStopsResponse.TabStopsResponse;

    /**
     * The document after modification.
     */
    public document: Buffer;
}

/**
 * Response model for DeleteWatermarkOnline operation.
 * Removes a watermark from the document.
 */
export class DeleteWatermarkOnlineResponse {
    /**
     * The response model.
     */
    public model: importedDocumentResponse.DocumentResponse;

    /**
     * The document after modification.
     */
    public document: Buffer;
}

/**
 * Response model for InsertCommentOnline operation.
 * Inserts a new comment to the document.
 */
export class InsertCommentOnlineResponse {
    /**
     * The response model.
     */
    public model: importedCommentResponse.CommentResponse;

    /**
     * The document after modification.
     */
    public document: Buffer;
}

/**
 * Response model for InsertDrawingObjectOnline operation.
 * Inserts a new DrawingObject to the document node.
 */
export class InsertDrawingObjectOnlineResponse {
    /**
     * The response model.
     */
    public model: importedDrawingObjectResponse.DrawingObjectResponse;

    /**
     * The document after modification.
     */
    public document: Buffer;
}

/**
 * Response model for InsertFieldOnline operation.
 * Inserts a new field to the document node.
 */
export class InsertFieldOnlineResponse {
    /**
     * The response model.
     */
    public model: importedFieldResponse.FieldResponse;

    /**
     * The document after modification.
     */
    public document: Buffer;
}

/**
 * Response model for InsertFootnoteOnline operation.
 * Inserts a new footnote to the document node.
 */
export class InsertFootnoteOnlineResponse {
    /**
     * The response model.
     */
    public model: importedFootnoteResponse.FootnoteResponse;

    /**
     * The document after modification.
     */
    public document: Buffer;
}

/**
 * Response model for InsertFormFieldOnline operation.
 * Inserts a new form field to the document node.
 */
export class InsertFormFieldOnlineResponse {
    /**
     * The response model.
     */
    public model: importedFormFieldResponse.FormFieldResponse;

    /**
     * The document after modification.
     */
    public document: Buffer;
}

/**
 * Response model for InsertHeaderFooterOnline operation.
 * Inserts a new HeaderFooter object to the document section.
 */
export class InsertHeaderFooterOnlineResponse {
    /**
     * The response model.
     */
    public model: importedHeaderFooterResponse.HeaderFooterResponse;

    /**
     * The document after modification.
     */
    public document: Buffer;
}

/**
 * Response model for InsertListOnline operation.
 * Inserts a new list to the document.
 */
export class InsertListOnlineResponse {
    /**
     * The response model.
     */
    public model: importedListResponse.ListResponse;

    /**
     * The document after modification.
     */
    public document: Buffer;
}

/**
 * Response model for InsertOrUpdateParagraphTabStopOnline operation.
 * Inserts a new or updates an existing paragraph tab stop in the document node.
 */
export class InsertOrUpdateParagraphTabStopOnlineResponse {
    /**
     * The response model.
     */
    public model: importedTabStopsResponse.TabStopsResponse;

    /**
     * The document after modification.
     */
    public document: Buffer;
}

/**
 * Response model for InsertPageNumbersOnline operation.
 * Inserts page numbers to the document.
 */
export class InsertPageNumbersOnlineResponse {
    /**
     * The response model.
     */
    public model: importedDocumentResponse.DocumentResponse;

    /**
     * The document after modification.
     */
    public document: Buffer;
}

/**
 * Response model for InsertParagraphOnline operation.
 * Inserts a new paragraph to the document node.
 */
export class InsertParagraphOnlineResponse {
    /**
     * The response model.
     */
    public model: importedParagraphResponse.ParagraphResponse;

    /**
     * The document after modification.
     */
    public document: Buffer;
}

/**
 * Response model for InsertRunOnline operation.
 * Inserts a new Run object to the paragraph.
 */
export class InsertRunOnlineResponse {
    /**
     * The response model.
     */
    public model: importedRunResponse.RunResponse;

    /**
     * The document after modification.
     */
    public document: Buffer;
}

/**
 * Response model for InsertStyleOnline operation.
 * Inserts a new style to the document.
 */
export class InsertStyleOnlineResponse {
    /**
     * The response model.
     */
    public model: importedStyleResponse.StyleResponse;

    /**
     * The document after modification.
     */
    public document: Buffer;
}

/**
 * Response model for InsertTableCellOnline operation.
 * Inserts a new cell to the table row.
 */
export class InsertTableCellOnlineResponse {
    /**
     * The response model.
     */
    public model: importedTableCellResponse.TableCellResponse;

    /**
     * The document after modification.
     */
    public document: Buffer;
}

/**
 * Response model for InsertTableOnline operation.
 * Inserts a new table to the document node.
 */
export class InsertTableOnlineResponse {
    /**
     * The response model.
     */
    public model: importedTableResponse.TableResponse;

    /**
     * The document after modification.
     */
    public document: Buffer;
}

/**
 * Response model for InsertTableRowOnline operation.
 * Inserts a new row to the table.
 */
export class InsertTableRowOnlineResponse {
    /**
     * The response model.
     */
    public model: importedTableRowResponse.TableRowResponse;

    /**
     * The document after modification.
     */
    public document: Buffer;
}

/**
 * Response model for InsertWatermarkImageOnline operation.
 * Inserts a new watermark image to the document.
 */
export class InsertWatermarkImageOnlineResponse {
    /**
     * The response model.
     */
    public model: importedDocumentResponse.DocumentResponse;

    /**
     * The document after modification.
     */
    public document: Buffer;
}

/**
 * Response model for InsertWatermarkTextOnline operation.
 * Inserts a new watermark text to the document.
 */
export class InsertWatermarkTextOnlineResponse {
    /**
     * The response model.
     */
    public model: importedDocumentResponse.DocumentResponse;

    /**
     * The document after modification.
     */
    public document: Buffer;
}

/**
 * Response model for ProtectDocumentOnline operation.
 * Adds protection to the document.
 */
export class ProtectDocumentOnlineResponse {
    /**
     * The response model.
     */
    public model: importedProtectionDataResponse.ProtectionDataResponse;

    /**
     * The document after modification.
     */
    public document: Buffer;
}

/**
 * Response model for RejectAllRevisionsOnline operation.
 * Rejects all revisions in the document.
 */
export class RejectAllRevisionsOnlineResponse {
    /**
     * The response model.
     */
    public model: importedRevisionsModificationResponse.RevisionsModificationResponse;

    /**
     * The document after modification.
     */
    public document: Buffer;
}

/**
 * Response model for RemoveRangeOnline operation.
 * Removes a range from the document.
 */
export class RemoveRangeOnlineResponse {
    /**
     * The response model.
     */
    public model: importedDocumentResponse.DocumentResponse;

    /**
     * The document after modification.
     */
    public document: Buffer;
}

/**
 * Response model for ReplaceTextOnline operation.
 * Replaces text in the document.
 */
export class ReplaceTextOnlineResponse {
    /**
     * The response model.
     */
    public model: importedReplaceTextResponse.ReplaceTextResponse;

    /**
     * The document after modification.
     */
    public document: Buffer;
}

/**
 * Response model for ReplaceWithTextOnline operation.
 * Replaces a range with text in the document.
 */
export class ReplaceWithTextOnlineResponse {
    /**
     * The response model.
     */
    public model: importedDocumentResponse.DocumentResponse;

    /**
     * The document after modification.
     */
    public document: Buffer;
}

/**
 * Response model for SaveAsOnline operation.
 * Converts a document in cloud storage to the specified format.
 */
export class SaveAsOnlineResponse {
    /**
     * The response model.
     */
    public model: importedSaveResponse.SaveResponse;

    /**
     * The document after modification.
     */
    public document: Buffer;
}

/**
 * Response model for SaveAsRangeOnline operation.
 * Saves a range as a new document.
 */
export class SaveAsRangeOnlineResponse {
    /**
     * The response model.
     */
    public model: importedDocumentResponse.DocumentResponse;

    /**
     * The document after modification.
     */
    public document: Buffer;
}

/**
 * Response model for SaveAsTiffOnline operation.
 * Converts a document in cloud storage to TIFF format using detailed conversion settings.
 */
export class SaveAsTiffOnlineResponse {
    /**
     * The response model.
     */
    public model: importedSaveResponse.SaveResponse;

    /**
     * The document after modification.
     */
    public document: Buffer;
}

/**
 * Response model for SplitDocumentOnline operation.
 * Splits a document into parts and saves them in the specified format.
 */
export class SplitDocumentOnlineResponse {
    /**
     * The response model.
     */
    public model: importedSplitDocumentResponse.SplitDocumentResponse;

    /**
     * The document after modification.
     */
    public document: Buffer;
}

/**
 * Response model for UnprotectDocumentOnline operation.
 * Removes protection from the document.
 */
export class UnprotectDocumentOnlineResponse {
    /**
     * The response model.
     */
    public model: importedProtectionDataResponse.ProtectionDataResponse;

    /**
     * The document after modification.
     */
    public document: Buffer;
}

/**
 * Response model for UpdateBookmarkOnline operation.
 * Updates a bookmark in the document.
 */
export class UpdateBookmarkOnlineResponse {
    /**
     * The response model.
     */
    public model: importedBookmarkResponse.BookmarkResponse;

    /**
     * The document after modification.
     */
    public document: Buffer;
}

/**
 * Response model for UpdateBorderOnline operation.
 * Updates a border in the document node.
 */
export class UpdateBorderOnlineResponse {
    /**
     * The response model.
     */
    public model: importedBorderResponse.BorderResponse;

    /**
     * The document after modification.
     */
    public document: Buffer;
}

/**
 * Response model for UpdateCommentOnline operation.
 * Updates a comment in the document.
 */
export class UpdateCommentOnlineResponse {
    /**
     * The response model.
     */
    public model: importedCommentResponse.CommentResponse;

    /**
     * The document after modification.
     */
    public document: Buffer;
}

/**
 * Response model for UpdateDrawingObjectOnline operation.
 * Updates a DrawingObject in the document node.
 */
export class UpdateDrawingObjectOnlineResponse {
    /**
     * The response model.
     */
    public model: importedDrawingObjectResponse.DrawingObjectResponse;

    /**
     * The document after modification.
     */
    public document: Buffer;
}

/**
 * Response model for UpdateFieldOnline operation.
 * Updates a field in the document node.
 */
export class UpdateFieldOnlineResponse {
    /**
     * The response model.
     */
    public model: importedFieldResponse.FieldResponse;

    /**
     * The document after modification.
     */
    public document: Buffer;
}

/**
 * Response model for UpdateFieldsOnline operation.
 * Reevaluates field values in the document.
 */
export class UpdateFieldsOnlineResponse {
    /**
     * The response model.
     */
    public model: importedDocumentResponse.DocumentResponse;

    /**
     * The document after modification.
     */
    public document: Buffer;
}

/**
 * Response model for UpdateFootnoteOnline operation.
 * Updates a footnote in the document node.
 */
export class UpdateFootnoteOnlineResponse {
    /**
     * The response model.
     */
    public model: importedFootnoteResponse.FootnoteResponse;

    /**
     * The document after modification.
     */
    public document: Buffer;
}

/**
 * Response model for UpdateFormFieldOnline operation.
 * Updates a form field in the document node.
 */
export class UpdateFormFieldOnlineResponse {
    /**
     * The response model.
     */
    public model: importedFormFieldResponse.FormFieldResponse;

    /**
     * The document after modification.
     */
    public document: Buffer;
}

/**
 * Response model for UpdateListLevelOnline operation.
 * Updates the level of a List element in the document.
 */
export class UpdateListLevelOnlineResponse {
    /**
     * The response model.
     */
    public model: importedListResponse.ListResponse;

    /**
     * The document after modification.
     */
    public document: Buffer;
}

/**
 * Response model for UpdateListOnline operation.
 * Updates a list in the document.
 */
export class UpdateListOnlineResponse {
    /**
     * The response model.
     */
    public model: importedListResponse.ListResponse;

    /**
     * The document after modification.
     */
    public document: Buffer;
}

/**
 * Response model for UpdateParagraphFormatOnline operation.
 * Updates the formatting properties of a paragraph in the document node.
 */
export class UpdateParagraphFormatOnlineResponse {
    /**
     * The response model.
     */
    public model: importedParagraphFormatResponse.ParagraphFormatResponse;

    /**
     * The document after modification.
     */
    public document: Buffer;
}

/**
 * Response model for UpdateParagraphListFormatOnline operation.
 * Updates the formatting properties of a paragraph list in the document node.
 */
export class UpdateParagraphListFormatOnlineResponse {
    /**
     * The response model.
     */
    public model: importedParagraphListFormatResponse.ParagraphListFormatResponse;

    /**
     * The document after modification.
     */
    public document: Buffer;
}

/**
 * Response model for UpdateRunFontOnline operation.
 * Updates the font properties of a Run object in the paragraph.
 */
export class UpdateRunFontOnlineResponse {
    /**
     * The response model.
     */
    public model: importedFontResponse.FontResponse;

    /**
     * The document after modification.
     */
    public document: Buffer;
}

/**
 * Response model for UpdateRunOnline operation.
 * Updates a Run object in the paragraph.
 */
export class UpdateRunOnlineResponse {
    /**
     * The response model.
     */
    public model: importedRunResponse.RunResponse;

    /**
     * The document after modification.
     */
    public document: Buffer;
}

/**
 * Response model for UpdateSectionPageSetupOnline operation.
 * Updates the page setup of a section in the document.
 */
export class UpdateSectionPageSetupOnlineResponse {
    /**
     * The response model.
     */
    public model: importedSectionPageSetupResponse.SectionPageSetupResponse;

    /**
     * The document after modification.
     */
    public document: Buffer;
}

/**
 * Response model for UpdateStyleOnline operation.
 * Updates a style in the document.
 */
export class UpdateStyleOnlineResponse {
    /**
     * The response model.
     */
    public model: importedStyleResponse.StyleResponse;

    /**
     * The document after modification.
     */
    public document: Buffer;
}

/**
 * Response model for UpdateTableCellFormatOnline operation.
 * Updates the formatting properties of a cell in the table row.
 */
export class UpdateTableCellFormatOnlineResponse {
    /**
     * The response model.
     */
    public model: importedTableCellFormatResponse.TableCellFormatResponse;

    /**
     * The document after modification.
     */
    public document: Buffer;
}

/**
 * Response model for UpdateTablePropertiesOnline operation.
 * Updates properties of a table in the document node.
 */
export class UpdateTablePropertiesOnlineResponse {
    /**
     * The response model.
     */
    public model: importedTablePropertiesResponse.TablePropertiesResponse;

    /**
     * The document after modification.
     */
    public document: Buffer;
}

/**
 * Response model for UpdateTableRowFormatOnline operation.
 * Updates the formatting properties of a table row.
 */
export class UpdateTableRowFormatOnlineResponse {
    /**
     * The response model.
     */
    public model: importedTableRowFormatResponse.TableRowFormatResponse;

    /**
     * The document after modification.
     */
    public document: Buffer;
}

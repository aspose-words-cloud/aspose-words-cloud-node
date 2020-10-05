/*
 * --------------------------------------------------------------------------------
 * <copyright company="Aspose" file="model.ts">
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

import { Readable } from "stream";
import { IncomingMessage } from 'http';
import request = require("request");
import { Configuration } from "../internal/configuration";
import { addQueryParameterToUrl } from "../internal/requestHelper";
import { ObjectSerializer } from "../internal/objectSerializer";
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
import * as importedRangeTextResponse from './rangeTextResponse';
import * as importedReplaceRange from './replaceRange';
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
import * as importedTableCellFormatResponse from './tableCellFormatResponse';
import * as importedTableCellInsert from './tableCellInsert';
import * as importedTableCellResponse from './tableCellResponse';
import * as importedTableInsert from './tableInsert';
import * as importedTableLink from './tableLink';
import * as importedTableLinkCollection from './tableLinkCollection';
import * as importedTableLinkCollectionResponse from './tableLinkCollectionResponse';
import * as importedTableProperties from './tableProperties';
import * as importedTablePropertiesResponse from './tablePropertiesResponse';
import * as importedTableResponse from './tableResponse';
import * as importedTableRow from './tableRow';
import * as importedTableRowFormat from './tableRowFormat';
import * as importedTableRowFormatResponse from './tableRowFormatResponse';
import * as importedTableRowInsert from './tableRowInsert';
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
export * from './rangeTextResponse';
export * from './replaceRange';
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
export * from './tableCellFormatResponse';
export * from './tableCellInsert';
export * from './tableCellResponse';
export * from './tableInsert';
export * from './tableLink';
export * from './tableLinkCollection';
export * from './tableLinkCollectionResponse';
export * from './tableProperties';
export * from './tablePropertiesResponse';
export * from './tableResponse';
export * from './tableRow';
export * from './tableRowFormat';
export * from './tableRowFormatResponse';
export * from './tableRowInsert';
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
    RangeTextResponse: importedRangeTextResponse.RangeTextResponse,
    ReplaceRange: importedReplaceRange.ReplaceRange,
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
    TableCellFormatResponse: importedTableCellFormatResponse.TableCellFormatResponse,
    TableCellInsert: importedTableCellInsert.TableCellInsert,
    TableCellResponse: importedTableCellResponse.TableCellResponse,
    TableInsert: importedTableInsert.TableInsert,
    TableLink: importedTableLink.TableLink,
    TableLinkCollection: importedTableLinkCollection.TableLinkCollection,
    TableLinkCollectionResponse: importedTableLinkCollectionResponse.TableLinkCollectionResponse,
    TableProperties: importedTableProperties.TableProperties,
    TablePropertiesResponse: importedTablePropertiesResponse.TablePropertiesResponse,
    TableResponse: importedTableResponse.TableResponse,
    TableRow: importedTableRow.TableRow,
    TableRowFormat: importedTableRowFormat.TableRowFormat,
    TableRowFormatResponse: importedTableRowFormatResponse.TableRowFormatResponse,
    TableRowInsert: importedTableRowInsert.TableRowInsert,
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

/**
 * Request interface.
 */
export interface RequestInterface {
	/**
	 * create the requst options for this request
	 * @param configuration a configuration for the request
	 */
	createRequestOptions(configuration: Configuration) : request.OptionsWithUri;

	/**
	 * get response type name
	 */
	getReturnType() : string;
}

export {enumsMap, typeMap};

/**
 * Request model for AcceptAllRevisions operation.
 * Accepts all revisions in document.
 */
export class AcceptAllRevisionsRequest implements RequestInterface {
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

    public constructor(init?: Partial< AcceptAllRevisionsRequest >) {
        Object.assign(this, init);
    }

	/**
	 * create the requst options for this request
	 * @param configuration a configuration for the request
	 */
	createRequestOptions(configuration: Configuration) : request.OptionsWithUri {
		let localVarPath = configuration.getApiBaseUrl() + "/words/{name}/revisions/acceptAll"
			.replace("/{" + "name" + "}", (this.name !== null && this.name !== undefined) ? "/" + String(this.name) : "")
			.replace("//", "/");
		const queryParameters: any = {};
		// verify required parameter 'name' is not undefined
		if (this.name === undefined) {
		    throw new Error('Required parameter "name" was undefined when calling acceptAllRevisions.');
		}

		// verify required parameter 'name' is not null
		if (this.name === null) {
		    throw new Error('Required parameter "name" was null when calling acceptAllRevisions.');
		}

		localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "folder", this.folder);
		localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "storage", this.storage);
		localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "loadEncoding", this.loadEncoding);
		localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "password", this.password);
		localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "destFileName", this.destFileName);

		const requestOptions: request.Options = {
			method: "PUT",
			qs: queryParameters,
			uri: localVarPath,
			json: true,
		};

		return requestOptions;
	}

	/**
	 * get response type name
	 */
	getReturnType() : string {
		return "RevisionsModificationResponse";
	}
}

/**
 * Request model for AppendDocument operation.
 * Appends documents to original document.
 */
export class AppendDocumentRequest implements RequestInterface {
    /**
     * Original document name.
     */
    public name: string;

    /**
     * DocumentEntryList with a list of documents to append.
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

	/**
	 * create the requst options for this request
	 * @param configuration a configuration for the request
	 */
	createRequestOptions(configuration: Configuration) : request.OptionsWithUri {
		let localVarPath = configuration.getApiBaseUrl() + "/words/{name}/appendDocument"
			.replace("/{" + "name" + "}", (this.name !== null && this.name !== undefined) ? "/" + String(this.name) : "")
			.replace("//", "/");
		const queryParameters: any = {};
		// verify required parameter 'name' is not undefined
		if (this.name === undefined) {
		    throw new Error('Required parameter "name" was undefined when calling appendDocument.');
		}

		// verify required parameter 'name' is not null
		if (this.name === null) {
		    throw new Error('Required parameter "name" was null when calling appendDocument.');
		}

		// verify required parameter 'documentList' is not undefined
		if (this.documentList === undefined) {
		    throw new Error('Required parameter "documentList" was undefined when calling appendDocument.');
		}

		// verify required parameter 'documentList' is not null
		if (this.documentList === null) {
		    throw new Error('Required parameter "documentList" was null when calling appendDocument.');
		}

		localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "folder", this.folder);
		localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "storage", this.storage);
		localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "loadEncoding", this.loadEncoding);
		localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "password", this.password);
		localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "destFileName", this.destFileName);
		localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "revisionAuthor", this.revisionAuthor);
		localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "revisionDateTime", this.revisionDateTime);

		const requestOptions: request.Options = {
			method: "PUT",
			qs: queryParameters,
			uri: localVarPath,
			json: true,
			body: ObjectSerializer.serialize(this.documentList, this.documentList.constructor.name === "Object" ? "importedDocumentEntryList.DocumentEntryList" : this.documentList.constructor.name),
		};

		return requestOptions;
	}

	/**
	 * get response type name
	 */
	getReturnType() : string {
		return "DocumentResponse";
	}
}

/**
 * Request model for ApplyStyleToDocumentElement operation.
 * Apply a style to the document node.
 */
export class ApplyStyleToDocumentElementRequest implements RequestInterface {
    /**
     * The document name.
     */
    public name: string;

    /**
     * Style to apply.
     */
    public styleApply: importedStyleApply.StyleApply;

    /**
     * The path to the node that supports a style. Supported node types: ParagraphFormat, List, ListLevel, Table.
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

	/**
	 * create the requst options for this request
	 * @param configuration a configuration for the request
	 */
	createRequestOptions(configuration: Configuration) : request.OptionsWithUri {
		let localVarPath = configuration.getApiBaseUrl() + "/words/{name}/{styledNodePath}/style"
			.replace("/{" + "name" + "}", (this.name !== null && this.name !== undefined) ? "/" + String(this.name) : "")
			.replace("/{" + "styledNodePath" + "}", (this.styledNodePath !== null && this.styledNodePath !== undefined) ? "/" + String(this.styledNodePath) : "")
			.replace("//", "/");
		const queryParameters: any = {};
		// verify required parameter 'name' is not undefined
		if (this.name === undefined) {
		    throw new Error('Required parameter "name" was undefined when calling applyStyleToDocumentElement.');
		}

		// verify required parameter 'name' is not null
		if (this.name === null) {
		    throw new Error('Required parameter "name" was null when calling applyStyleToDocumentElement.');
		}

		// verify required parameter 'styleApply' is not undefined
		if (this.styleApply === undefined) {
		    throw new Error('Required parameter "styleApply" was undefined when calling applyStyleToDocumentElement.');
		}

		// verify required parameter 'styleApply' is not null
		if (this.styleApply === null) {
		    throw new Error('Required parameter "styleApply" was null when calling applyStyleToDocumentElement.');
		}

		// verify required parameter 'styledNodePath' is not undefined
		if (this.styledNodePath === undefined) {
		    throw new Error('Required parameter "styledNodePath" was undefined when calling applyStyleToDocumentElement.');
		}

		// verify required parameter 'styledNodePath' is not null
		if (this.styledNodePath === null) {
		    throw new Error('Required parameter "styledNodePath" was null when calling applyStyleToDocumentElement.');
		}

		localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "folder", this.folder);
		localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "storage", this.storage);
		localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "loadEncoding", this.loadEncoding);
		localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "password", this.password);
		localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "destFileName", this.destFileName);
		localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "revisionAuthor", this.revisionAuthor);
		localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "revisionDateTime", this.revisionDateTime);

		const requestOptions: request.Options = {
			method: "PUT",
			qs: queryParameters,
			uri: localVarPath,
			json: true,
			body: ObjectSerializer.serialize(this.styleApply, this.styleApply.constructor.name === "Object" ? "importedStyleApply.StyleApply" : this.styleApply.constructor.name),
		};

		return requestOptions;
	}

	/**
	 * get response type name
	 */
	getReturnType() : string {
		return "WordsResponse";
	}
}

/**
 * Request model for BuildReport operation.
 * Executes document "build report" operation.
 */
export class BuildReportRequest implements RequestInterface {
    /**
     * The template name.
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
     * Result name of the document after the operation. If this parameter is omitted then result of the operation will be saved with autogenerated name.
     */
    public destFileName: string;

    public constructor(init?: Partial< BuildReportRequest >) {
        Object.assign(this, init);
    }

	/**
	 * create the requst options for this request
	 * @param configuration a configuration for the request
	 */
	createRequestOptions(configuration: Configuration) : request.OptionsWithUri {
		let localVarPath = configuration.getApiBaseUrl() + "/words/{name}/buildReport"
			.replace("/{" + "name" + "}", (this.name !== null && this.name !== undefined) ? "/" + String(this.name) : "")
			.replace("//", "/");
		const queryParameters: any = {};
		const formParams: any = {};
		// verify required parameter 'name' is not undefined
		if (this.name === undefined) {
		    throw new Error('Required parameter "name" was undefined when calling buildReport.');
		}

		// verify required parameter 'name' is not null
		if (this.name === null) {
		    throw new Error('Required parameter "name" was null when calling buildReport.');
		}

		// verify required parameter 'data' is not undefined
		if (this.data === undefined) {
		    throw new Error('Required parameter "data" was undefined when calling buildReport.');
		}

		// verify required parameter 'data' is not null
		if (this.data === null) {
		    throw new Error('Required parameter "data" was null when calling buildReport.');
		}

		// verify required parameter 'reportEngineSettings' is not undefined
		if (this.reportEngineSettings === undefined) {
		    throw new Error('Required parameter "reportEngineSettings" was undefined when calling buildReport.');
		}

		// verify required parameter 'reportEngineSettings' is not null
		if (this.reportEngineSettings === null) {
		    throw new Error('Required parameter "reportEngineSettings" was null when calling buildReport.');
		}

		localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "folder", this.folder);
		localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "storage", this.storage);
		localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "loadEncoding", this.loadEncoding);
		localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "password", this.password);
		localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "destFileName", this.destFileName);
		if (this.data !== undefined) {
		    formParams.Data = ObjectSerializer.serialize(this.data, "string");
		}
		if (this.reportEngineSettings !== undefined) {
		    formParams.ReportEngineSettings = JSON.stringify(this.reportEngineSettings);
		}

		const requestOptions: request.Options = {
			method: "PUT",
			qs: queryParameters,
			uri: localVarPath,
			json: true,
		};

		if (Object.keys(formParams).length > 0) {
			requestOptions.formData = formParams;
		}
		return requestOptions;
	}

	/**
	 * get response type name
	 */
	getReturnType() : string {
		return "DocumentResponse";
	}
}

/**
 * Request model for BuildReportOnline operation.
 * Executes document "build report" online operation.
 */
export class BuildReportOnlineRequest implements RequestInterface {
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
     * This file name will be used when resulting document has dynamic field for document file name {filename}. If it is not set, "template" will be used instead.
     */
    public documentFileName: string;

    public constructor(init?: Partial< BuildReportOnlineRequest >) {
        Object.assign(this, init);
    }

	/**
	 * create the requst options for this request
	 * @param configuration a configuration for the request
	 */
	createRequestOptions(configuration: Configuration) : request.OptionsWithUri {
		let localVarPath = configuration.getApiBaseUrl() + "/words/buildReport"
			.replace("//", "/");
		const queryParameters: any = {};
		const formParams: any = {};
		// verify required parameter 'template' is not undefined
		if (this.template === undefined) {
		    throw new Error('Required parameter "template" was undefined when calling buildReportOnline.');
		}

		// verify required parameter 'template' is not null
		if (this.template === null) {
		    throw new Error('Required parameter "template" was null when calling buildReportOnline.');
		}

		// verify required parameter 'data' is not undefined
		if (this.data === undefined) {
		    throw new Error('Required parameter "data" was undefined when calling buildReportOnline.');
		}

		// verify required parameter 'data' is not null
		if (this.data === null) {
		    throw new Error('Required parameter "data" was null when calling buildReportOnline.');
		}

		// verify required parameter 'reportEngineSettings' is not undefined
		if (this.reportEngineSettings === undefined) {
		    throw new Error('Required parameter "reportEngineSettings" was undefined when calling buildReportOnline.');
		}

		// verify required parameter 'reportEngineSettings' is not null
		if (this.reportEngineSettings === null) {
		    throw new Error('Required parameter "reportEngineSettings" was null when calling buildReportOnline.');
		}

		localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "documentFileName", this.documentFileName);
		if (this.template !== undefined) {
		    formParams.Template = this.template;
		}
		if (this.data !== undefined) {
		    formParams.Data = ObjectSerializer.serialize(this.data, "string");
		}
		if (this.reportEngineSettings !== undefined) {
		    formParams.ReportEngineSettings = JSON.stringify(this.reportEngineSettings);
		}

		const requestOptions: request.Options = {
			method: "PUT",
			qs: queryParameters,
			uri: localVarPath,
			encoding: null,
		};

		if (Object.keys(formParams).length > 0) {
			requestOptions.formData = formParams;
		}
		return requestOptions;
	}

	/**
	 * get response type name
	 */
	getReturnType() : string {
		return "Buffer";
	}
}

/**
 * Request model for Classify operation.
 * Classifies raw text.
 */
export class ClassifyRequest implements RequestInterface {
    /**
     * Text to classify.
     */
    public text: string;

    /**
     * Number of the best classes to return.
     */
    public bestClassesCount: string;

    public constructor(init?: Partial< ClassifyRequest >) {
        Object.assign(this, init);
    }

	/**
	 * create the requst options for this request
	 * @param configuration a configuration for the request
	 */
	createRequestOptions(configuration: Configuration) : request.OptionsWithUri {
		let localVarPath = configuration.getApiBaseUrl() + "/words/classify"
			.replace("//", "/");
		const queryParameters: any = {};
		// verify required parameter 'text' is not undefined
		if (this.text === undefined) {
		    throw new Error('Required parameter "text" was undefined when calling classify.');
		}

		// verify required parameter 'text' is not null
		if (this.text === null) {
		    throw new Error('Required parameter "text" was null when calling classify.');
		}

		localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "bestClassesCount", this.bestClassesCount);

		const requestOptions: request.Options = {
			method: "PUT",
			qs: queryParameters,
			uri: localVarPath,
			json: true,
			body: ObjectSerializer.serialize(this.text, this.text.constructor.name === "Object" ? "string" : this.text.constructor.name),
		};

		return requestOptions;
	}

	/**
	 * get response type name
	 */
	getReturnType() : string {
		return "ClassificationResponse";
	}
}

/**
 * Request model for ClassifyDocument operation.
 * Classifies document.
 */
export class ClassifyDocumentRequest implements RequestInterface {
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

    public constructor(init?: Partial< ClassifyDocumentRequest >) {
        Object.assign(this, init);
    }

	/**
	 * create the requst options for this request
	 * @param configuration a configuration for the request
	 */
	createRequestOptions(configuration: Configuration) : request.OptionsWithUri {
		let localVarPath = configuration.getApiBaseUrl() + "/words/{documentName}/classify"
			.replace("/{" + "documentName" + "}", (this.documentName !== null && this.documentName !== undefined) ? "/" + String(this.documentName) : "")
			.replace("//", "/");
		const queryParameters: any = {};
		// verify required parameter 'documentName' is not undefined
		if (this.documentName === undefined) {
		    throw new Error('Required parameter "documentName" was undefined when calling classifyDocument.');
		}

		// verify required parameter 'documentName' is not null
		if (this.documentName === null) {
		    throw new Error('Required parameter "documentName" was null when calling classifyDocument.');
		}

		localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "folder", this.folder);
		localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "storage", this.storage);
		localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "loadEncoding", this.loadEncoding);
		localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "password", this.password);
		localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "bestClassesCount", this.bestClassesCount);
		localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "taxonomy", this.taxonomy);

		const requestOptions: request.Options = {
			method: "GET",
			qs: queryParameters,
			uri: localVarPath,
			json: true,
		};

		return requestOptions;
	}

	/**
	 * get response type name
	 */
	getReturnType() : string {
		return "ClassificationResponse";
	}
}

/**
 * Request model for CompareDocument operation.
 * Compares document with original document.
 */
export class CompareDocumentRequest implements RequestInterface {
    /**
     * Original document name.
     */
    public name: string;

    /**
     * CompareData with a document to compare.
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

	/**
	 * create the requst options for this request
	 * @param configuration a configuration for the request
	 */
	createRequestOptions(configuration: Configuration) : request.OptionsWithUri {
		let localVarPath = configuration.getApiBaseUrl() + "/words/{name}/compareDocument"
			.replace("/{" + "name" + "}", (this.name !== null && this.name !== undefined) ? "/" + String(this.name) : "")
			.replace("//", "/");
		const queryParameters: any = {};
		// verify required parameter 'name' is not undefined
		if (this.name === undefined) {
		    throw new Error('Required parameter "name" was undefined when calling compareDocument.');
		}

		// verify required parameter 'name' is not null
		if (this.name === null) {
		    throw new Error('Required parameter "name" was null when calling compareDocument.');
		}

		// verify required parameter 'compareData' is not undefined
		if (this.compareData === undefined) {
		    throw new Error('Required parameter "compareData" was undefined when calling compareDocument.');
		}

		// verify required parameter 'compareData' is not null
		if (this.compareData === null) {
		    throw new Error('Required parameter "compareData" was null when calling compareDocument.');
		}

		localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "folder", this.folder);
		localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "storage", this.storage);
		localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "loadEncoding", this.loadEncoding);
		localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "password", this.password);
		localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "destFileName", this.destFileName);

		const requestOptions: request.Options = {
			method: "PUT",
			qs: queryParameters,
			uri: localVarPath,
			json: true,
			body: ObjectSerializer.serialize(this.compareData, this.compareData.constructor.name === "Object" ? "importedCompareData.CompareData" : this.compareData.constructor.name),
		};

		return requestOptions;
	}

	/**
	 * get response type name
	 */
	getReturnType() : string {
		return "DocumentResponse";
	}
}

/**
 * Request model for ConvertDocument operation.
 * Converts document from the request's content to the specified format.
 */
export class ConvertDocumentRequest implements RequestInterface {
    /**
     * Converting document.
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
     * This file name will be used when resulting document has dynamic field for document file name {filename}. If it is not set, "sourceFilename" will be used instead.
     */
    public fileNameFieldValue: string;

    /**
     * Folder in filestorage with custom fonts.
     */
    public fontsLocation: string;

    public constructor(init?: Partial< ConvertDocumentRequest >) {
        Object.assign(this, init);
    }

	/**
	 * create the requst options for this request
	 * @param configuration a configuration for the request
	 */
	createRequestOptions(configuration: Configuration) : request.OptionsWithUri {
		let localVarPath = configuration.getApiBaseUrl() + "/words/convert"
			.replace("//", "/");
		const queryParameters: any = {};
		const formParams: any = {};
		// verify required parameter 'document' is not undefined
		if (this.document === undefined) {
		    throw new Error('Required parameter "document" was undefined when calling convertDocument.');
		}

		// verify required parameter 'document' is not null
		if (this.document === null) {
		    throw new Error('Required parameter "document" was null when calling convertDocument.');
		}

		// verify required parameter 'format' is not undefined
		if (this.format === undefined) {
		    throw new Error('Required parameter "format" was undefined when calling convertDocument.');
		}

		// verify required parameter 'format' is not null
		if (this.format === null) {
		    throw new Error('Required parameter "format" was null when calling convertDocument.');
		}

		localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "format", this.format);
		localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "storage", this.storage);
		localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "outPath", this.outPath);
		localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "fileNameFieldValue", this.fileNameFieldValue);
		localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "fontsLocation", this.fontsLocation);
		if (this.document !== undefined) {
		    formParams.Document = this.document;
		}

		const requestOptions: request.Options = {
			method: "PUT",
			qs: queryParameters,
			uri: localVarPath,
			encoding: null,
		};

		if (Object.keys(formParams).length > 0) {
			requestOptions.formData = formParams;
		}
		return requestOptions;
	}

	/**
	 * get response type name
	 */
	getReturnType() : string {
		return "Buffer";
	}
}

/**
 * Request model for CopyFile operation.
 * Copy file.
 */
export class CopyFileRequest implements RequestInterface {
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

	/**
	 * create the requst options for this request
	 * @param configuration a configuration for the request
	 */
	createRequestOptions(configuration: Configuration) : request.OptionsWithUri {
		let localVarPath = configuration.getApiBaseUrl() + "/words/storage/file/copy/{srcPath}"
			.replace("/{" + "srcPath" + "}", (this.srcPath !== null && this.srcPath !== undefined) ? "/" + String(this.srcPath) : "")
			.replace("//", "/");
		const queryParameters: any = {};
		// verify required parameter 'destPath' is not undefined
		if (this.destPath === undefined) {
		    throw new Error('Required parameter "destPath" was undefined when calling copyFile.');
		}

		// verify required parameter 'srcPath' is not undefined
		if (this.srcPath === undefined) {
		    throw new Error('Required parameter "srcPath" was undefined when calling copyFile.');
		}

		// verify required parameter 'srcPath' is not null
		if (this.srcPath === null) {
		    throw new Error('Required parameter "srcPath" was null when calling copyFile.');
		}

		localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "destPath", this.destPath);
		localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "srcStorageName", this.srcStorageName);
		localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "destStorageName", this.destStorageName);
		localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "versionId", this.versionId);

		const requestOptions: request.Options = {
			method: "PUT",
			qs: queryParameters,
			uri: localVarPath,
			json: true,
		};

		return requestOptions;
	}

	/**
	 * get response type name
	 */
	getReturnType() : string {
		return "";
	}
}

/**
 * Request model for CopyFolder operation.
 * Copy folder.
 */
export class CopyFolderRequest implements RequestInterface {
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

	/**
	 * create the requst options for this request
	 * @param configuration a configuration for the request
	 */
	createRequestOptions(configuration: Configuration) : request.OptionsWithUri {
		let localVarPath = configuration.getApiBaseUrl() + "/words/storage/folder/copy/{srcPath}"
			.replace("/{" + "srcPath" + "}", (this.srcPath !== null && this.srcPath !== undefined) ? "/" + String(this.srcPath) : "")
			.replace("//", "/");
		const queryParameters: any = {};
		// verify required parameter 'destPath' is not undefined
		if (this.destPath === undefined) {
		    throw new Error('Required parameter "destPath" was undefined when calling copyFolder.');
		}

		// verify required parameter 'srcPath' is not undefined
		if (this.srcPath === undefined) {
		    throw new Error('Required parameter "srcPath" was undefined when calling copyFolder.');
		}

		// verify required parameter 'srcPath' is not null
		if (this.srcPath === null) {
		    throw new Error('Required parameter "srcPath" was null when calling copyFolder.');
		}

		localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "destPath", this.destPath);
		localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "srcStorageName", this.srcStorageName);
		localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "destStorageName", this.destStorageName);

		const requestOptions: request.Options = {
			method: "PUT",
			qs: queryParameters,
			uri: localVarPath,
			json: true,
		};

		return requestOptions;
	}

	/**
	 * get response type name
	 */
	getReturnType() : string {
		return "";
	}
}

/**
 * Request model for CopyStyle operation.
 * Copy and insert a new style to the document, returns a copied style.
 */
export class CopyStyleRequest implements RequestInterface {
    /**
     * The document name.
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

	/**
	 * create the requst options for this request
	 * @param configuration a configuration for the request
	 */
	createRequestOptions(configuration: Configuration) : request.OptionsWithUri {
		let localVarPath = configuration.getApiBaseUrl() + "/words/{name}/styles/copy"
			.replace("/{" + "name" + "}", (this.name !== null && this.name !== undefined) ? "/" + String(this.name) : "")
			.replace("//", "/");
		const queryParameters: any = {};
		// verify required parameter 'name' is not undefined
		if (this.name === undefined) {
		    throw new Error('Required parameter "name" was undefined when calling copyStyle.');
		}

		// verify required parameter 'name' is not null
		if (this.name === null) {
		    throw new Error('Required parameter "name" was null when calling copyStyle.');
		}

		// verify required parameter 'styleCopy' is not undefined
		if (this.styleCopy === undefined) {
		    throw new Error('Required parameter "styleCopy" was undefined when calling copyStyle.');
		}

		// verify required parameter 'styleCopy' is not null
		if (this.styleCopy === null) {
		    throw new Error('Required parameter "styleCopy" was null when calling copyStyle.');
		}

		localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "folder", this.folder);
		localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "storage", this.storage);
		localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "loadEncoding", this.loadEncoding);
		localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "password", this.password);
		localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "destFileName", this.destFileName);
		localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "revisionAuthor", this.revisionAuthor);
		localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "revisionDateTime", this.revisionDateTime);

		const requestOptions: request.Options = {
			method: "POST",
			qs: queryParameters,
			uri: localVarPath,
			json: true,
			body: ObjectSerializer.serialize(this.styleCopy, this.styleCopy.constructor.name === "Object" ? "importedStyleCopy.StyleCopy" : this.styleCopy.constructor.name),
		};

		return requestOptions;
	}

	/**
	 * get response type name
	 */
	getReturnType() : string {
		return "StyleResponse";
	}
}

/**
 * Request model for CreateDocument operation.
 * Creates new document.
 * Document is created with format which is recognized from file extensions.
 * Supported extensions: ".doc", ".docx", ".docm", ".dot", ".dotm", ".dotx", ".flatopc", ".fopc", ".flatopc_macro", ".fopc_macro", ".flatopc_template", ".fopc_template", ".flatopc_template_macro", ".fopc_template_macro", ".wordml", ".wml", ".rtf".
 */
export class CreateDocumentRequest implements RequestInterface {
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

    public constructor(init?: Partial< CreateDocumentRequest >) {
        Object.assign(this, init);
    }

	/**
	 * create the requst options for this request
	 * @param configuration a configuration for the request
	 */
	createRequestOptions(configuration: Configuration) : request.OptionsWithUri {
		let localVarPath = configuration.getApiBaseUrl() + "/words/create"
			.replace("//", "/");
		const queryParameters: any = {};
		localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "storage", this.storage);
		localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "fileName", this.fileName);
		localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "folder", this.folder);

		const requestOptions: request.Options = {
			method: "PUT",
			qs: queryParameters,
			uri: localVarPath,
			json: true,
		};

		return requestOptions;
	}

	/**
	 * get response type name
	 */
	getReturnType() : string {
		return "DocumentResponse";
	}
}

/**
 * Request model for CreateFolder operation.
 * Create the folder.
 */
export class CreateFolderRequest implements RequestInterface {
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

	/**
	 * create the requst options for this request
	 * @param configuration a configuration for the request
	 */
	createRequestOptions(configuration: Configuration) : request.OptionsWithUri {
		let localVarPath = configuration.getApiBaseUrl() + "/words/storage/folder/{path}"
			.replace("/{" + "path" + "}", (this.path !== null && this.path !== undefined) ? "/" + String(this.path) : "")
			.replace("//", "/");
		const queryParameters: any = {};
		// verify required parameter 'path' is not undefined
		if (this.path === undefined) {
		    throw new Error('Required parameter "path" was undefined when calling createFolder.');
		}

		// verify required parameter 'path' is not null
		if (this.path === null) {
		    throw new Error('Required parameter "path" was null when calling createFolder.');
		}

		localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "storageName", this.storageName);

		const requestOptions: request.Options = {
			method: "PUT",
			qs: queryParameters,
			uri: localVarPath,
			json: true,
		};

		return requestOptions;
	}

	/**
	 * get response type name
	 */
	getReturnType() : string {
		return "";
	}
}

/**
 * Request model for CreateOrUpdateDocumentProperty operation.
 * Adds new or update existing document property.
 */
export class CreateOrUpdateDocumentPropertyRequest implements RequestInterface {
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

	/**
	 * create the requst options for this request
	 * @param configuration a configuration for the request
	 */
	createRequestOptions(configuration: Configuration) : request.OptionsWithUri {
		let localVarPath = configuration.getApiBaseUrl() + "/words/{name}/documentProperties/{propertyName}"
			.replace("/{" + "name" + "}", (this.name !== null && this.name !== undefined) ? "/" + String(this.name) : "")
			.replace("/{" + "propertyName" + "}", (this.propertyName !== null && this.propertyName !== undefined) ? "/" + String(this.propertyName) : "")
			.replace("//", "/");
		const queryParameters: any = {};
		// verify required parameter 'name' is not undefined
		if (this.name === undefined) {
		    throw new Error('Required parameter "name" was undefined when calling createOrUpdateDocumentProperty.');
		}

		// verify required parameter 'name' is not null
		if (this.name === null) {
		    throw new Error('Required parameter "name" was null when calling createOrUpdateDocumentProperty.');
		}

		// verify required parameter 'propertyName' is not undefined
		if (this.propertyName === undefined) {
		    throw new Error('Required parameter "propertyName" was undefined when calling createOrUpdateDocumentProperty.');
		}

		// verify required parameter 'propertyName' is not null
		if (this.propertyName === null) {
		    throw new Error('Required parameter "propertyName" was null when calling createOrUpdateDocumentProperty.');
		}

		// verify required parameter 'property' is not undefined
		if (this.property === undefined) {
		    throw new Error('Required parameter "property" was undefined when calling createOrUpdateDocumentProperty.');
		}

		// verify required parameter 'property' is not null
		if (this.property === null) {
		    throw new Error('Required parameter "property" was null when calling createOrUpdateDocumentProperty.');
		}

		localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "folder", this.folder);
		localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "storage", this.storage);
		localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "loadEncoding", this.loadEncoding);
		localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "password", this.password);
		localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "destFileName", this.destFileName);
		localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "revisionAuthor", this.revisionAuthor);
		localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "revisionDateTime", this.revisionDateTime);

		const requestOptions: request.Options = {
			method: "PUT",
			qs: queryParameters,
			uri: localVarPath,
			json: true,
			body: ObjectSerializer.serialize(this.property, this.property.constructor.name === "Object" ? "importedDocumentPropertyCreateOrUpdate.DocumentPropertyCreateOrUpdate" : this.property.constructor.name),
		};

		return requestOptions;
	}

	/**
	 * get response type name
	 */
	getReturnType() : string {
		return "DocumentPropertyResponse";
	}
}

/**
 * Request model for DeleteAllParagraphTabStops operation.
 * Remove all tab stops.
 */
export class DeleteAllParagraphTabStopsRequest implements RequestInterface {
    /**
     * The document name.
     */
    public name: string;

    /**
     * Object index.
     */
    public index: number;

    /**
     * Path to the node which contains paragraph.
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

	/**
	 * create the requst options for this request
	 * @param configuration a configuration for the request
	 */
	createRequestOptions(configuration: Configuration) : request.OptionsWithUri {
		let localVarPath = configuration.getApiBaseUrl() + "/words/{name}/{nodePath}/paragraphs/{index}/tabstops"
			.replace("/{" + "name" + "}", (this.name !== null && this.name !== undefined) ? "/" + String(this.name) : "")
			.replace("/{" + "index" + "}", (this.index !== null && this.index !== undefined) ? "/" + String(this.index) : "")
			.replace("/{" + "nodePath" + "}", (this.nodePath !== null && this.nodePath !== undefined) ? "/" + String(this.nodePath) : "")
			.replace("//", "/");
		const queryParameters: any = {};
		// verify required parameter 'name' is not undefined
		if (this.name === undefined) {
		    throw new Error('Required parameter "name" was undefined when calling deleteAllParagraphTabStops.');
		}

		// verify required parameter 'name' is not null
		if (this.name === null) {
		    throw new Error('Required parameter "name" was null when calling deleteAllParagraphTabStops.');
		}

		// verify required parameter 'index' is not undefined
		if (this.index === undefined) {
		    throw new Error('Required parameter "index" was undefined when calling deleteAllParagraphTabStops.');
		}

		// verify required parameter 'index' is not null
		if (this.index === null) {
		    throw new Error('Required parameter "index" was null when calling deleteAllParagraphTabStops.');
		}

		localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "folder", this.folder);
		localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "storage", this.storage);
		localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "loadEncoding", this.loadEncoding);
		localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "password", this.password);
		localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "destFileName", this.destFileName);

		const requestOptions: request.Options = {
			method: "DELETE",
			qs: queryParameters,
			uri: localVarPath,
			json: true,
		};

		return requestOptions;
	}

	/**
	 * get response type name
	 */
	getReturnType() : string {
		return "TabStopsResponse";
	}
}

/**
 * Request model for DeleteBorder operation.
 * 'nodePath' should refer to paragraph, cell or row.
 */
export class DeleteBorderRequest implements RequestInterface {
    /**
     * The document name.
     */
    public name: string;

    /**
     * Border type.
     */
    public borderType: string;

    /**
     * Path to the node with border(node should be paragraph, cell or row).
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

	/**
	 * create the requst options for this request
	 * @param configuration a configuration for the request
	 */
	createRequestOptions(configuration: Configuration) : request.OptionsWithUri {
		let localVarPath = configuration.getApiBaseUrl() + "/words/{name}/{nodePath}/borders/{borderType}"
			.replace("/{" + "name" + "}", (this.name !== null && this.name !== undefined) ? "/" + String(this.name) : "")
			.replace("/{" + "borderType" + "}", (this.borderType !== null && this.borderType !== undefined) ? "/" + String(this.borderType) : "")
			.replace("/{" + "nodePath" + "}", (this.nodePath !== null && this.nodePath !== undefined) ? "/" + String(this.nodePath) : "")
			.replace("//", "/");
		const queryParameters: any = {};
		// verify required parameter 'name' is not undefined
		if (this.name === undefined) {
		    throw new Error('Required parameter "name" was undefined when calling deleteBorder.');
		}

		// verify required parameter 'name' is not null
		if (this.name === null) {
		    throw new Error('Required parameter "name" was null when calling deleteBorder.');
		}

		// verify required parameter 'borderType' is not undefined
		if (this.borderType === undefined) {
		    throw new Error('Required parameter "borderType" was undefined when calling deleteBorder.');
		}

		// verify required parameter 'borderType' is not null
		if (this.borderType === null) {
		    throw new Error('Required parameter "borderType" was null when calling deleteBorder.');
		}

		localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "folder", this.folder);
		localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "storage", this.storage);
		localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "loadEncoding", this.loadEncoding);
		localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "password", this.password);
		localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "destFileName", this.destFileName);
		localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "revisionAuthor", this.revisionAuthor);
		localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "revisionDateTime", this.revisionDateTime);

		const requestOptions: request.Options = {
			method: "DELETE",
			qs: queryParameters,
			uri: localVarPath,
			json: true,
		};

		return requestOptions;
	}

	/**
	 * get response type name
	 */
	getReturnType() : string {
		return "BorderResponse";
	}
}

/**
 * Request model for DeleteBorders operation.
 * 'nodePath' should refer to paragraph, cell or row.
 */
export class DeleteBordersRequest implements RequestInterface {
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

    public constructor(init?: Partial< DeleteBordersRequest >) {
        Object.assign(this, init);
    }

	/**
	 * create the requst options for this request
	 * @param configuration a configuration for the request
	 */
	createRequestOptions(configuration: Configuration) : request.OptionsWithUri {
		let localVarPath = configuration.getApiBaseUrl() + "/words/{name}/{nodePath}/borders"
			.replace("/{" + "name" + "}", (this.name !== null && this.name !== undefined) ? "/" + String(this.name) : "")
			.replace("/{" + "nodePath" + "}", (this.nodePath !== null && this.nodePath !== undefined) ? "/" + String(this.nodePath) : "")
			.replace("//", "/");
		const queryParameters: any = {};
		// verify required parameter 'name' is not undefined
		if (this.name === undefined) {
		    throw new Error('Required parameter "name" was undefined when calling deleteBorders.');
		}

		// verify required parameter 'name' is not null
		if (this.name === null) {
		    throw new Error('Required parameter "name" was null when calling deleteBorders.');
		}

		localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "folder", this.folder);
		localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "storage", this.storage);
		localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "loadEncoding", this.loadEncoding);
		localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "password", this.password);
		localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "destFileName", this.destFileName);
		localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "revisionAuthor", this.revisionAuthor);
		localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "revisionDateTime", this.revisionDateTime);

		const requestOptions: request.Options = {
			method: "DELETE",
			qs: queryParameters,
			uri: localVarPath,
			json: true,
		};

		return requestOptions;
	}

	/**
	 * get response type name
	 */
	getReturnType() : string {
		return "BordersResponse";
	}
}

/**
 * Request model for DeleteComment operation.
 * Removes comment from document.
 */
export class DeleteCommentRequest implements RequestInterface {
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

    public constructor(init?: Partial< DeleteCommentRequest >) {
        Object.assign(this, init);
    }

	/**
	 * create the requst options for this request
	 * @param configuration a configuration for the request
	 */
	createRequestOptions(configuration: Configuration) : request.OptionsWithUri {
		let localVarPath = configuration.getApiBaseUrl() + "/words/{name}/comments/{commentIndex}"
			.replace("/{" + "name" + "}", (this.name !== null && this.name !== undefined) ? "/" + String(this.name) : "")
			.replace("/{" + "commentIndex" + "}", (this.commentIndex !== null && this.commentIndex !== undefined) ? "/" + String(this.commentIndex) : "")
			.replace("//", "/");
		const queryParameters: any = {};
		// verify required parameter 'name' is not undefined
		if (this.name === undefined) {
		    throw new Error('Required parameter "name" was undefined when calling deleteComment.');
		}

		// verify required parameter 'name' is not null
		if (this.name === null) {
		    throw new Error('Required parameter "name" was null when calling deleteComment.');
		}

		// verify required parameter 'commentIndex' is not undefined
		if (this.commentIndex === undefined) {
		    throw new Error('Required parameter "commentIndex" was undefined when calling deleteComment.');
		}

		// verify required parameter 'commentIndex' is not null
		if (this.commentIndex === null) {
		    throw new Error('Required parameter "commentIndex" was null when calling deleteComment.');
		}

		localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "folder", this.folder);
		localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "storage", this.storage);
		localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "loadEncoding", this.loadEncoding);
		localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "password", this.password);
		localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "destFileName", this.destFileName);
		localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "revisionAuthor", this.revisionAuthor);
		localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "revisionDateTime", this.revisionDateTime);

		const requestOptions: request.Options = {
			method: "DELETE",
			qs: queryParameters,
			uri: localVarPath,
			json: true,
		};

		return requestOptions;
	}

	/**
	 * get response type name
	 */
	getReturnType() : string {
		return "";
	}
}

/**
 * Request model for DeleteDocumentProperty operation.
 * Deletes document property.
 */
export class DeleteDocumentPropertyRequest implements RequestInterface {
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

    public constructor(init?: Partial< DeleteDocumentPropertyRequest >) {
        Object.assign(this, init);
    }

	/**
	 * create the requst options for this request
	 * @param configuration a configuration for the request
	 */
	createRequestOptions(configuration: Configuration) : request.OptionsWithUri {
		let localVarPath = configuration.getApiBaseUrl() + "/words/{name}/documentProperties/{propertyName}"
			.replace("/{" + "name" + "}", (this.name !== null && this.name !== undefined) ? "/" + String(this.name) : "")
			.replace("/{" + "propertyName" + "}", (this.propertyName !== null && this.propertyName !== undefined) ? "/" + String(this.propertyName) : "")
			.replace("//", "/");
		const queryParameters: any = {};
		// verify required parameter 'name' is not undefined
		if (this.name === undefined) {
		    throw new Error('Required parameter "name" was undefined when calling deleteDocumentProperty.');
		}

		// verify required parameter 'name' is not null
		if (this.name === null) {
		    throw new Error('Required parameter "name" was null when calling deleteDocumentProperty.');
		}

		// verify required parameter 'propertyName' is not undefined
		if (this.propertyName === undefined) {
		    throw new Error('Required parameter "propertyName" was undefined when calling deleteDocumentProperty.');
		}

		// verify required parameter 'propertyName' is not null
		if (this.propertyName === null) {
		    throw new Error('Required parameter "propertyName" was null when calling deleteDocumentProperty.');
		}

		localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "folder", this.folder);
		localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "storage", this.storage);
		localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "loadEncoding", this.loadEncoding);
		localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "password", this.password);
		localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "destFileName", this.destFileName);
		localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "revisionAuthor", this.revisionAuthor);
		localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "revisionDateTime", this.revisionDateTime);

		const requestOptions: request.Options = {
			method: "DELETE",
			qs: queryParameters,
			uri: localVarPath,
			json: true,
		};

		return requestOptions;
	}

	/**
	 * get response type name
	 */
	getReturnType() : string {
		return "";
	}
}

/**
 * Request model for DeleteDrawingObject operation.
 * Removes drawing object from document.
 */
export class DeleteDrawingObjectRequest implements RequestInterface {
    /**
     * The document name.
     */
    public name: string;

    /**
     * Object index.
     */
    public index: number;

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

    public constructor(init?: Partial< DeleteDrawingObjectRequest >) {
        Object.assign(this, init);
    }

	/**
	 * create the requst options for this request
	 * @param configuration a configuration for the request
	 */
	createRequestOptions(configuration: Configuration) : request.OptionsWithUri {
		let localVarPath = configuration.getApiBaseUrl() + "/words/{name}/{nodePath}/drawingObjects/{index}"
			.replace("/{" + "name" + "}", (this.name !== null && this.name !== undefined) ? "/" + String(this.name) : "")
			.replace("/{" + "index" + "}", (this.index !== null && this.index !== undefined) ? "/" + String(this.index) : "")
			.replace("/{" + "nodePath" + "}", (this.nodePath !== null && this.nodePath !== undefined) ? "/" + String(this.nodePath) : "")
			.replace("//", "/");
		const queryParameters: any = {};
		// verify required parameter 'name' is not undefined
		if (this.name === undefined) {
		    throw new Error('Required parameter "name" was undefined when calling deleteDrawingObject.');
		}

		// verify required parameter 'name' is not null
		if (this.name === null) {
		    throw new Error('Required parameter "name" was null when calling deleteDrawingObject.');
		}

		// verify required parameter 'index' is not undefined
		if (this.index === undefined) {
		    throw new Error('Required parameter "index" was undefined when calling deleteDrawingObject.');
		}

		// verify required parameter 'index' is not null
		if (this.index === null) {
		    throw new Error('Required parameter "index" was null when calling deleteDrawingObject.');
		}

		localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "folder", this.folder);
		localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "storage", this.storage);
		localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "loadEncoding", this.loadEncoding);
		localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "password", this.password);
		localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "destFileName", this.destFileName);
		localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "revisionAuthor", this.revisionAuthor);
		localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "revisionDateTime", this.revisionDateTime);

		const requestOptions: request.Options = {
			method: "DELETE",
			qs: queryParameters,
			uri: localVarPath,
			json: true,
		};

		return requestOptions;
	}

	/**
	 * get response type name
	 */
	getReturnType() : string {
		return "";
	}
}

/**
 * Request model for DeleteField operation.
 * Deletes field from document.
 */
export class DeleteFieldRequest implements RequestInterface {
    /**
     * The document name.
     */
    public name: string;

    /**
     * Object index.
     */
    public index: number;

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

    public constructor(init?: Partial< DeleteFieldRequest >) {
        Object.assign(this, init);
    }

	/**
	 * create the requst options for this request
	 * @param configuration a configuration for the request
	 */
	createRequestOptions(configuration: Configuration) : request.OptionsWithUri {
		let localVarPath = configuration.getApiBaseUrl() + "/words/{name}/{nodePath}/fields/{index}"
			.replace("/{" + "name" + "}", (this.name !== null && this.name !== undefined) ? "/" + String(this.name) : "")
			.replace("/{" + "index" + "}", (this.index !== null && this.index !== undefined) ? "/" + String(this.index) : "")
			.replace("/{" + "nodePath" + "}", (this.nodePath !== null && this.nodePath !== undefined) ? "/" + String(this.nodePath) : "")
			.replace("//", "/");
		const queryParameters: any = {};
		// verify required parameter 'name' is not undefined
		if (this.name === undefined) {
		    throw new Error('Required parameter "name" was undefined when calling deleteField.');
		}

		// verify required parameter 'name' is not null
		if (this.name === null) {
		    throw new Error('Required parameter "name" was null when calling deleteField.');
		}

		// verify required parameter 'index' is not undefined
		if (this.index === undefined) {
		    throw new Error('Required parameter "index" was undefined when calling deleteField.');
		}

		// verify required parameter 'index' is not null
		if (this.index === null) {
		    throw new Error('Required parameter "index" was null when calling deleteField.');
		}

		localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "folder", this.folder);
		localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "storage", this.storage);
		localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "loadEncoding", this.loadEncoding);
		localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "password", this.password);
		localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "destFileName", this.destFileName);
		localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "revisionAuthor", this.revisionAuthor);
		localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "revisionDateTime", this.revisionDateTime);

		const requestOptions: request.Options = {
			method: "DELETE",
			qs: queryParameters,
			uri: localVarPath,
			json: true,
		};

		return requestOptions;
	}

	/**
	 * get response type name
	 */
	getReturnType() : string {
		return "";
	}
}

/**
 * Request model for DeleteFields operation.
 * Removes fields from section paragraph.
 */
export class DeleteFieldsRequest implements RequestInterface {
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

    public constructor(init?: Partial< DeleteFieldsRequest >) {
        Object.assign(this, init);
    }

	/**
	 * create the requst options for this request
	 * @param configuration a configuration for the request
	 */
	createRequestOptions(configuration: Configuration) : request.OptionsWithUri {
		let localVarPath = configuration.getApiBaseUrl() + "/words/{name}/{nodePath}/fields"
			.replace("/{" + "name" + "}", (this.name !== null && this.name !== undefined) ? "/" + String(this.name) : "")
			.replace("/{" + "nodePath" + "}", (this.nodePath !== null && this.nodePath !== undefined) ? "/" + String(this.nodePath) : "")
			.replace("//", "/");
		const queryParameters: any = {};
		// verify required parameter 'name' is not undefined
		if (this.name === undefined) {
		    throw new Error('Required parameter "name" was undefined when calling deleteFields.');
		}

		// verify required parameter 'name' is not null
		if (this.name === null) {
		    throw new Error('Required parameter "name" was null when calling deleteFields.');
		}

		localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "folder", this.folder);
		localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "storage", this.storage);
		localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "loadEncoding", this.loadEncoding);
		localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "password", this.password);
		localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "destFileName", this.destFileName);
		localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "revisionAuthor", this.revisionAuthor);
		localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "revisionDateTime", this.revisionDateTime);

		const requestOptions: request.Options = {
			method: "DELETE",
			qs: queryParameters,
			uri: localVarPath,
			json: true,
		};

		return requestOptions;
	}

	/**
	 * get response type name
	 */
	getReturnType() : string {
		return "";
	}
}

/**
 * Request model for DeleteFile operation.
 * Delete file.
 */
export class DeleteFileRequest implements RequestInterface {
    /**
     * Path of the file including file name and extension e.g. /Folder1/file.ext.
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

	/**
	 * create the requst options for this request
	 * @param configuration a configuration for the request
	 */
	createRequestOptions(configuration: Configuration) : request.OptionsWithUri {
		let localVarPath = configuration.getApiBaseUrl() + "/words/storage/file/{path}"
			.replace("/{" + "path" + "}", (this.path !== null && this.path !== undefined) ? "/" + String(this.path) : "")
			.replace("//", "/");
		const queryParameters: any = {};
		// verify required parameter 'path' is not undefined
		if (this.path === undefined) {
		    throw new Error('Required parameter "path" was undefined when calling deleteFile.');
		}

		// verify required parameter 'path' is not null
		if (this.path === null) {
		    throw new Error('Required parameter "path" was null when calling deleteFile.');
		}

		localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "storageName", this.storageName);
		localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "versionId", this.versionId);

		const requestOptions: request.Options = {
			method: "DELETE",
			qs: queryParameters,
			uri: localVarPath,
			json: true,
		};

		return requestOptions;
	}

	/**
	 * get response type name
	 */
	getReturnType() : string {
		return "";
	}
}

/**
 * Request model for DeleteFolder operation.
 * Delete folder.
 */
export class DeleteFolderRequest implements RequestInterface {
    /**
     * Folder path e.g. /Folder1s.
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

	/**
	 * create the requst options for this request
	 * @param configuration a configuration for the request
	 */
	createRequestOptions(configuration: Configuration) : request.OptionsWithUri {
		let localVarPath = configuration.getApiBaseUrl() + "/words/storage/folder/{path}"
			.replace("/{" + "path" + "}", (this.path !== null && this.path !== undefined) ? "/" + String(this.path) : "")
			.replace("//", "/");
		const queryParameters: any = {};
		// verify required parameter 'path' is not undefined
		if (this.path === undefined) {
		    throw new Error('Required parameter "path" was undefined when calling deleteFolder.');
		}

		// verify required parameter 'path' is not null
		if (this.path === null) {
		    throw new Error('Required parameter "path" was null when calling deleteFolder.');
		}

		localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "storageName", this.storageName);
		localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "recursive", this.recursive);

		const requestOptions: request.Options = {
			method: "DELETE",
			qs: queryParameters,
			uri: localVarPath,
			json: true,
		};

		return requestOptions;
	}

	/**
	 * get response type name
	 */
	getReturnType() : string {
		return "";
	}
}

/**
 * Request model for DeleteFootnote operation.
 * Removes footnote from document.
 */
export class DeleteFootnoteRequest implements RequestInterface {
    /**
     * The document name.
     */
    public name: string;

    /**
     * Object index.
     */
    public index: number;

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

    public constructor(init?: Partial< DeleteFootnoteRequest >) {
        Object.assign(this, init);
    }

	/**
	 * create the requst options for this request
	 * @param configuration a configuration for the request
	 */
	createRequestOptions(configuration: Configuration) : request.OptionsWithUri {
		let localVarPath = configuration.getApiBaseUrl() + "/words/{name}/{nodePath}/footnotes/{index}"
			.replace("/{" + "name" + "}", (this.name !== null && this.name !== undefined) ? "/" + String(this.name) : "")
			.replace("/{" + "index" + "}", (this.index !== null && this.index !== undefined) ? "/" + String(this.index) : "")
			.replace("/{" + "nodePath" + "}", (this.nodePath !== null && this.nodePath !== undefined) ? "/" + String(this.nodePath) : "")
			.replace("//", "/");
		const queryParameters: any = {};
		// verify required parameter 'name' is not undefined
		if (this.name === undefined) {
		    throw new Error('Required parameter "name" was undefined when calling deleteFootnote.');
		}

		// verify required parameter 'name' is not null
		if (this.name === null) {
		    throw new Error('Required parameter "name" was null when calling deleteFootnote.');
		}

		// verify required parameter 'index' is not undefined
		if (this.index === undefined) {
		    throw new Error('Required parameter "index" was undefined when calling deleteFootnote.');
		}

		// verify required parameter 'index' is not null
		if (this.index === null) {
		    throw new Error('Required parameter "index" was null when calling deleteFootnote.');
		}

		localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "folder", this.folder);
		localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "storage", this.storage);
		localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "loadEncoding", this.loadEncoding);
		localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "password", this.password);
		localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "destFileName", this.destFileName);
		localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "revisionAuthor", this.revisionAuthor);
		localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "revisionDateTime", this.revisionDateTime);

		const requestOptions: request.Options = {
			method: "DELETE",
			qs: queryParameters,
			uri: localVarPath,
			json: true,
		};

		return requestOptions;
	}

	/**
	 * get response type name
	 */
	getReturnType() : string {
		return "";
	}
}

/**
 * Request model for DeleteFormField operation.
 * Removes form field from document.
 */
export class DeleteFormFieldRequest implements RequestInterface {
    /**
     * The document name.
     */
    public name: string;

    /**
     * Object index.
     */
    public index: number;

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

    public constructor(init?: Partial< DeleteFormFieldRequest >) {
        Object.assign(this, init);
    }

	/**
	 * create the requst options for this request
	 * @param configuration a configuration for the request
	 */
	createRequestOptions(configuration: Configuration) : request.OptionsWithUri {
		let localVarPath = configuration.getApiBaseUrl() + "/words/{name}/{nodePath}/formfields/{index}"
			.replace("/{" + "name" + "}", (this.name !== null && this.name !== undefined) ? "/" + String(this.name) : "")
			.replace("/{" + "index" + "}", (this.index !== null && this.index !== undefined) ? "/" + String(this.index) : "")
			.replace("/{" + "nodePath" + "}", (this.nodePath !== null && this.nodePath !== undefined) ? "/" + String(this.nodePath) : "")
			.replace("//", "/");
		const queryParameters: any = {};
		// verify required parameter 'name' is not undefined
		if (this.name === undefined) {
		    throw new Error('Required parameter "name" was undefined when calling deleteFormField.');
		}

		// verify required parameter 'name' is not null
		if (this.name === null) {
		    throw new Error('Required parameter "name" was null when calling deleteFormField.');
		}

		// verify required parameter 'index' is not undefined
		if (this.index === undefined) {
		    throw new Error('Required parameter "index" was undefined when calling deleteFormField.');
		}

		// verify required parameter 'index' is not null
		if (this.index === null) {
		    throw new Error('Required parameter "index" was null when calling deleteFormField.');
		}

		localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "folder", this.folder);
		localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "storage", this.storage);
		localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "loadEncoding", this.loadEncoding);
		localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "password", this.password);
		localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "destFileName", this.destFileName);
		localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "revisionAuthor", this.revisionAuthor);
		localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "revisionDateTime", this.revisionDateTime);

		const requestOptions: request.Options = {
			method: "DELETE",
			qs: queryParameters,
			uri: localVarPath,
			json: true,
		};

		return requestOptions;
	}

	/**
	 * get response type name
	 */
	getReturnType() : string {
		return "";
	}
}

/**
 * Request model for DeleteHeaderFooter operation.
 * Deletes header/footer from document.
 */
export class DeleteHeaderFooterRequest implements RequestInterface {
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

    public constructor(init?: Partial< DeleteHeaderFooterRequest >) {
        Object.assign(this, init);
    }

	/**
	 * create the requst options for this request
	 * @param configuration a configuration for the request
	 */
	createRequestOptions(configuration: Configuration) : request.OptionsWithUri {
		let localVarPath = configuration.getApiBaseUrl() + "/words/{name}/{sectionPath}/headersfooters/{index}"
			.replace("/{" + "name" + "}", (this.name !== null && this.name !== undefined) ? "/" + String(this.name) : "")
			.replace("/{" + "sectionPath" + "}", (this.sectionPath !== null && this.sectionPath !== undefined) ? "/" + String(this.sectionPath) : "")
			.replace("/{" + "index" + "}", (this.index !== null && this.index !== undefined) ? "/" + String(this.index) : "")
			.replace("//", "/");
		const queryParameters: any = {};
		// verify required parameter 'name' is not undefined
		if (this.name === undefined) {
		    throw new Error('Required parameter "name" was undefined when calling deleteHeaderFooter.');
		}

		// verify required parameter 'name' is not null
		if (this.name === null) {
		    throw new Error('Required parameter "name" was null when calling deleteHeaderFooter.');
		}

		// verify required parameter 'sectionPath' is not undefined
		if (this.sectionPath === undefined) {
		    throw new Error('Required parameter "sectionPath" was undefined when calling deleteHeaderFooter.');
		}

		// verify required parameter 'index' is not undefined
		if (this.index === undefined) {
		    throw new Error('Required parameter "index" was undefined when calling deleteHeaderFooter.');
		}

		// verify required parameter 'index' is not null
		if (this.index === null) {
		    throw new Error('Required parameter "index" was null when calling deleteHeaderFooter.');
		}

		localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "folder", this.folder);
		localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "storage", this.storage);
		localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "loadEncoding", this.loadEncoding);
		localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "password", this.password);
		localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "destFileName", this.destFileName);
		localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "revisionAuthor", this.revisionAuthor);
		localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "revisionDateTime", this.revisionDateTime);

		const requestOptions: request.Options = {
			method: "DELETE",
			qs: queryParameters,
			uri: localVarPath,
			json: true,
		};

		return requestOptions;
	}

	/**
	 * get response type name
	 */
	getReturnType() : string {
		return "";
	}
}

/**
 * Request model for DeleteHeadersFooters operation.
 * Deletes document headers and footers.
 */
export class DeleteHeadersFootersRequest implements RequestInterface {
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

    public constructor(init?: Partial< DeleteHeadersFootersRequest >) {
        Object.assign(this, init);
    }

	/**
	 * create the requst options for this request
	 * @param configuration a configuration for the request
	 */
	createRequestOptions(configuration: Configuration) : request.OptionsWithUri {
		let localVarPath = configuration.getApiBaseUrl() + "/words/{name}/{sectionPath}/headersfooters"
			.replace("/{" + "name" + "}", (this.name !== null && this.name !== undefined) ? "/" + String(this.name) : "")
			.replace("/{" + "sectionPath" + "}", (this.sectionPath !== null && this.sectionPath !== undefined) ? "/" + String(this.sectionPath) : "")
			.replace("//", "/");
		const queryParameters: any = {};
		// verify required parameter 'name' is not undefined
		if (this.name === undefined) {
		    throw new Error('Required parameter "name" was undefined when calling deleteHeadersFooters.');
		}

		// verify required parameter 'name' is not null
		if (this.name === null) {
		    throw new Error('Required parameter "name" was null when calling deleteHeadersFooters.');
		}

		// verify required parameter 'sectionPath' is not undefined
		if (this.sectionPath === undefined) {
		    throw new Error('Required parameter "sectionPath" was undefined when calling deleteHeadersFooters.');
		}

		localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "folder", this.folder);
		localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "storage", this.storage);
		localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "loadEncoding", this.loadEncoding);
		localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "password", this.password);
		localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "destFileName", this.destFileName);
		localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "revisionAuthor", this.revisionAuthor);
		localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "revisionDateTime", this.revisionDateTime);
		localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "headersFootersTypes", this.headersFootersTypes);

		const requestOptions: request.Options = {
			method: "DELETE",
			qs: queryParameters,
			uri: localVarPath,
			json: true,
		};

		return requestOptions;
	}

	/**
	 * get response type name
	 */
	getReturnType() : string {
		return "";
	}
}

/**
 * Request model for DeleteMacros operation.
 * Removes macros from document.
 */
export class DeleteMacrosRequest implements RequestInterface {
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

    public constructor(init?: Partial< DeleteMacrosRequest >) {
        Object.assign(this, init);
    }

	/**
	 * create the requst options for this request
	 * @param configuration a configuration for the request
	 */
	createRequestOptions(configuration: Configuration) : request.OptionsWithUri {
		let localVarPath = configuration.getApiBaseUrl() + "/words/{name}/macros"
			.replace("/{" + "name" + "}", (this.name !== null && this.name !== undefined) ? "/" + String(this.name) : "")
			.replace("//", "/");
		const queryParameters: any = {};
		// verify required parameter 'name' is not undefined
		if (this.name === undefined) {
		    throw new Error('Required parameter "name" was undefined when calling deleteMacros.');
		}

		// verify required parameter 'name' is not null
		if (this.name === null) {
		    throw new Error('Required parameter "name" was null when calling deleteMacros.');
		}

		localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "folder", this.folder);
		localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "storage", this.storage);
		localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "loadEncoding", this.loadEncoding);
		localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "password", this.password);
		localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "destFileName", this.destFileName);
		localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "revisionAuthor", this.revisionAuthor);
		localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "revisionDateTime", this.revisionDateTime);

		const requestOptions: request.Options = {
			method: "DELETE",
			qs: queryParameters,
			uri: localVarPath,
			json: true,
		};

		return requestOptions;
	}

	/**
	 * get response type name
	 */
	getReturnType() : string {
		return "";
	}
}

/**
 * Request model for DeleteOfficeMathObject operation.
 * Removes OfficeMath object from document.
 */
export class DeleteOfficeMathObjectRequest implements RequestInterface {
    /**
     * The document name.
     */
    public name: string;

    /**
     * Object index.
     */
    public index: number;

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

	/**
	 * create the requst options for this request
	 * @param configuration a configuration for the request
	 */
	createRequestOptions(configuration: Configuration) : request.OptionsWithUri {
		let localVarPath = configuration.getApiBaseUrl() + "/words/{name}/{nodePath}/OfficeMathObjects/{index}"
			.replace("/{" + "name" + "}", (this.name !== null && this.name !== undefined) ? "/" + String(this.name) : "")
			.replace("/{" + "index" + "}", (this.index !== null && this.index !== undefined) ? "/" + String(this.index) : "")
			.replace("/{" + "nodePath" + "}", (this.nodePath !== null && this.nodePath !== undefined) ? "/" + String(this.nodePath) : "")
			.replace("//", "/");
		const queryParameters: any = {};
		// verify required parameter 'name' is not undefined
		if (this.name === undefined) {
		    throw new Error('Required parameter "name" was undefined when calling deleteOfficeMathObject.');
		}

		// verify required parameter 'name' is not null
		if (this.name === null) {
		    throw new Error('Required parameter "name" was null when calling deleteOfficeMathObject.');
		}

		// verify required parameter 'index' is not undefined
		if (this.index === undefined) {
		    throw new Error('Required parameter "index" was undefined when calling deleteOfficeMathObject.');
		}

		// verify required parameter 'index' is not null
		if (this.index === null) {
		    throw new Error('Required parameter "index" was null when calling deleteOfficeMathObject.');
		}

		localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "folder", this.folder);
		localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "storage", this.storage);
		localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "loadEncoding", this.loadEncoding);
		localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "password", this.password);
		localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "destFileName", this.destFileName);
		localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "revisionAuthor", this.revisionAuthor);
		localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "revisionDateTime", this.revisionDateTime);

		const requestOptions: request.Options = {
			method: "DELETE",
			qs: queryParameters,
			uri: localVarPath,
			json: true,
		};

		return requestOptions;
	}

	/**
	 * get response type name
	 */
	getReturnType() : string {
		return "";
	}
}

/**
 * Request model for DeleteParagraph operation.
 * Removes paragraph from section.
 */
export class DeleteParagraphRequest implements RequestInterface {
    /**
     * The file name.
     */
    public name: string;

    /**
     * Object index.
     */
    public index: number;

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

    public constructor(init?: Partial< DeleteParagraphRequest >) {
        Object.assign(this, init);
    }

	/**
	 * create the requst options for this request
	 * @param configuration a configuration for the request
	 */
	createRequestOptions(configuration: Configuration) : request.OptionsWithUri {
		let localVarPath = configuration.getApiBaseUrl() + "/words/{name}/{nodePath}/paragraphs/{index}"
			.replace("/{" + "name" + "}", (this.name !== null && this.name !== undefined) ? "/" + String(this.name) : "")
			.replace("/{" + "index" + "}", (this.index !== null && this.index !== undefined) ? "/" + String(this.index) : "")
			.replace("/{" + "nodePath" + "}", (this.nodePath !== null && this.nodePath !== undefined) ? "/" + String(this.nodePath) : "")
			.replace("//", "/");
		const queryParameters: any = {};
		// verify required parameter 'name' is not undefined
		if (this.name === undefined) {
		    throw new Error('Required parameter "name" was undefined when calling deleteParagraph.');
		}

		// verify required parameter 'name' is not null
		if (this.name === null) {
		    throw new Error('Required parameter "name" was null when calling deleteParagraph.');
		}

		// verify required parameter 'index' is not undefined
		if (this.index === undefined) {
		    throw new Error('Required parameter "index" was undefined when calling deleteParagraph.');
		}

		// verify required parameter 'index' is not null
		if (this.index === null) {
		    throw new Error('Required parameter "index" was null when calling deleteParagraph.');
		}

		localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "folder", this.folder);
		localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "storage", this.storage);
		localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "loadEncoding", this.loadEncoding);
		localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "password", this.password);
		localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "destFileName", this.destFileName);
		localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "revisionAuthor", this.revisionAuthor);
		localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "revisionDateTime", this.revisionDateTime);

		const requestOptions: request.Options = {
			method: "DELETE",
			qs: queryParameters,
			uri: localVarPath,
			json: true,
		};

		return requestOptions;
	}

	/**
	 * get response type name
	 */
	getReturnType() : string {
		return "";
	}
}

/**
 * Request model for DeleteParagraphListFormat operation.
 * Delete paragraph list format, returns updated list format properties.
 */
export class DeleteParagraphListFormatRequest implements RequestInterface {
    /**
     * The document name.
     */
    public name: string;

    /**
     * Object index.
     */
    public index: number;

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

    public constructor(init?: Partial< DeleteParagraphListFormatRequest >) {
        Object.assign(this, init);
    }

	/**
	 * create the requst options for this request
	 * @param configuration a configuration for the request
	 */
	createRequestOptions(configuration: Configuration) : request.OptionsWithUri {
		let localVarPath = configuration.getApiBaseUrl() + "/words/{name}/{nodePath}/paragraphs/{index}/listFormat"
			.replace("/{" + "name" + "}", (this.name !== null && this.name !== undefined) ? "/" + String(this.name) : "")
			.replace("/{" + "index" + "}", (this.index !== null && this.index !== undefined) ? "/" + String(this.index) : "")
			.replace("/{" + "nodePath" + "}", (this.nodePath !== null && this.nodePath !== undefined) ? "/" + String(this.nodePath) : "")
			.replace("//", "/");
		const queryParameters: any = {};
		// verify required parameter 'name' is not undefined
		if (this.name === undefined) {
		    throw new Error('Required parameter "name" was undefined when calling deleteParagraphListFormat.');
		}

		// verify required parameter 'name' is not null
		if (this.name === null) {
		    throw new Error('Required parameter "name" was null when calling deleteParagraphListFormat.');
		}

		// verify required parameter 'index' is not undefined
		if (this.index === undefined) {
		    throw new Error('Required parameter "index" was undefined when calling deleteParagraphListFormat.');
		}

		// verify required parameter 'index' is not null
		if (this.index === null) {
		    throw new Error('Required parameter "index" was null when calling deleteParagraphListFormat.');
		}

		localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "folder", this.folder);
		localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "storage", this.storage);
		localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "loadEncoding", this.loadEncoding);
		localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "password", this.password);
		localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "destFileName", this.destFileName);
		localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "revisionAuthor", this.revisionAuthor);
		localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "revisionDateTime", this.revisionDateTime);

		const requestOptions: request.Options = {
			method: "DELETE",
			qs: queryParameters,
			uri: localVarPath,
			json: true,
		};

		return requestOptions;
	}

	/**
	 * get response type name
	 */
	getReturnType() : string {
		return "ParagraphListFormatResponse";
	}
}

/**
 * Request model for DeleteParagraphTabStop operation.
 * Remove the i-th tab stop.
 */
export class DeleteParagraphTabStopRequest implements RequestInterface {
    /**
     * The document name.
     */
    public name: string;

    /**
     * a tab stop position to remove.
     */
    public position: number;

    /**
     * Object index.
     */
    public index: number;

    /**
     * Path to the node which contains paragraph.
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

	/**
	 * create the requst options for this request
	 * @param configuration a configuration for the request
	 */
	createRequestOptions(configuration: Configuration) : request.OptionsWithUri {
		let localVarPath = configuration.getApiBaseUrl() + "/words/{name}/{nodePath}/paragraphs/{index}/tabstop"
			.replace("/{" + "name" + "}", (this.name !== null && this.name !== undefined) ? "/" + String(this.name) : "")
			.replace("/{" + "index" + "}", (this.index !== null && this.index !== undefined) ? "/" + String(this.index) : "")
			.replace("/{" + "nodePath" + "}", (this.nodePath !== null && this.nodePath !== undefined) ? "/" + String(this.nodePath) : "")
			.replace("//", "/");
		const queryParameters: any = {};
		// verify required parameter 'name' is not undefined
		if (this.name === undefined) {
		    throw new Error('Required parameter "name" was undefined when calling deleteParagraphTabStop.');
		}

		// verify required parameter 'name' is not null
		if (this.name === null) {
		    throw new Error('Required parameter "name" was null when calling deleteParagraphTabStop.');
		}

		// verify required parameter 'position' is not undefined
		if (this.position === undefined) {
		    throw new Error('Required parameter "position" was undefined when calling deleteParagraphTabStop.');
		}

		// verify required parameter 'position' is not null
		if (this.position === null) {
		    throw new Error('Required parameter "position" was null when calling deleteParagraphTabStop.');
		}

		// verify required parameter 'index' is not undefined
		if (this.index === undefined) {
		    throw new Error('Required parameter "index" was undefined when calling deleteParagraphTabStop.');
		}

		// verify required parameter 'index' is not null
		if (this.index === null) {
		    throw new Error('Required parameter "index" was null when calling deleteParagraphTabStop.');
		}

		localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "position", this.position);
		localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "folder", this.folder);
		localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "storage", this.storage);
		localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "loadEncoding", this.loadEncoding);
		localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "password", this.password);
		localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "destFileName", this.destFileName);

		const requestOptions: request.Options = {
			method: "DELETE",
			qs: queryParameters,
			uri: localVarPath,
			json: true,
		};

		return requestOptions;
	}

	/**
	 * get response type name
	 */
	getReturnType() : string {
		return "TabStopsResponse";
	}
}

/**
 * Request model for DeleteRun operation.
 * Removes run from document.
 */
export class DeleteRunRequest implements RequestInterface {
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

    public constructor(init?: Partial< DeleteRunRequest >) {
        Object.assign(this, init);
    }

	/**
	 * create the requst options for this request
	 * @param configuration a configuration for the request
	 */
	createRequestOptions(configuration: Configuration) : request.OptionsWithUri {
		let localVarPath = configuration.getApiBaseUrl() + "/words/{name}/{paragraphPath}/runs/{index}"
			.replace("/{" + "name" + "}", (this.name !== null && this.name !== undefined) ? "/" + String(this.name) : "")
			.replace("/{" + "paragraphPath" + "}", (this.paragraphPath !== null && this.paragraphPath !== undefined) ? "/" + String(this.paragraphPath) : "")
			.replace("/{" + "index" + "}", (this.index !== null && this.index !== undefined) ? "/" + String(this.index) : "")
			.replace("//", "/");
		const queryParameters: any = {};
		// verify required parameter 'name' is not undefined
		if (this.name === undefined) {
		    throw new Error('Required parameter "name" was undefined when calling deleteRun.');
		}

		// verify required parameter 'name' is not null
		if (this.name === null) {
		    throw new Error('Required parameter "name" was null when calling deleteRun.');
		}

		// verify required parameter 'paragraphPath' is not undefined
		if (this.paragraphPath === undefined) {
		    throw new Error('Required parameter "paragraphPath" was undefined when calling deleteRun.');
		}

		// verify required parameter 'index' is not undefined
		if (this.index === undefined) {
		    throw new Error('Required parameter "index" was undefined when calling deleteRun.');
		}

		// verify required parameter 'index' is not null
		if (this.index === null) {
		    throw new Error('Required parameter "index" was null when calling deleteRun.');
		}

		localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "folder", this.folder);
		localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "storage", this.storage);
		localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "loadEncoding", this.loadEncoding);
		localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "password", this.password);
		localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "destFileName", this.destFileName);
		localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "revisionAuthor", this.revisionAuthor);
		localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "revisionDateTime", this.revisionDateTime);

		const requestOptions: request.Options = {
			method: "DELETE",
			qs: queryParameters,
			uri: localVarPath,
			json: true,
		};

		return requestOptions;
	}

	/**
	 * get response type name
	 */
	getReturnType() : string {
		return "";
	}
}

/**
 * Request model for DeleteSection operation.
 * Removes section from document.
 */
export class DeleteSectionRequest implements RequestInterface {
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

    public constructor(init?: Partial< DeleteSectionRequest >) {
        Object.assign(this, init);
    }

	/**
	 * create the requst options for this request
	 * @param configuration a configuration for the request
	 */
	createRequestOptions(configuration: Configuration) : request.OptionsWithUri {
		let localVarPath = configuration.getApiBaseUrl() + "/words/{name}/sections/{sectionIndex}"
			.replace("/{" + "name" + "}", (this.name !== null && this.name !== undefined) ? "/" + String(this.name) : "")
			.replace("/{" + "sectionIndex" + "}", (this.sectionIndex !== null && this.sectionIndex !== undefined) ? "/" + String(this.sectionIndex) : "")
			.replace("//", "/");
		const queryParameters: any = {};
		// verify required parameter 'name' is not undefined
		if (this.name === undefined) {
		    throw new Error('Required parameter "name" was undefined when calling deleteSection.');
		}

		// verify required parameter 'name' is not null
		if (this.name === null) {
		    throw new Error('Required parameter "name" was null when calling deleteSection.');
		}

		// verify required parameter 'sectionIndex' is not undefined
		if (this.sectionIndex === undefined) {
		    throw new Error('Required parameter "sectionIndex" was undefined when calling deleteSection.');
		}

		// verify required parameter 'sectionIndex' is not null
		if (this.sectionIndex === null) {
		    throw new Error('Required parameter "sectionIndex" was null when calling deleteSection.');
		}

		localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "folder", this.folder);
		localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "storage", this.storage);
		localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "loadEncoding", this.loadEncoding);
		localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "password", this.password);
		localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "destFileName", this.destFileName);
		localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "revisionAuthor", this.revisionAuthor);
		localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "revisionDateTime", this.revisionDateTime);

		const requestOptions: request.Options = {
			method: "DELETE",
			qs: queryParameters,
			uri: localVarPath,
			json: true,
		};

		return requestOptions;
	}

	/**
	 * get response type name
	 */
	getReturnType() : string {
		return "";
	}
}

/**
 * Request model for DeleteTable operation.
 * Deletes a table.
 */
export class DeleteTableRequest implements RequestInterface {
    /**
     * The document name.
     */
    public name: string;

    /**
     * Object index.
     */
    public index: number;

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

    public constructor(init?: Partial< DeleteTableRequest >) {
        Object.assign(this, init);
    }

	/**
	 * create the requst options for this request
	 * @param configuration a configuration for the request
	 */
	createRequestOptions(configuration: Configuration) : request.OptionsWithUri {
		let localVarPath = configuration.getApiBaseUrl() + "/words/{name}/{nodePath}/tables/{index}"
			.replace("/{" + "name" + "}", (this.name !== null && this.name !== undefined) ? "/" + String(this.name) : "")
			.replace("/{" + "index" + "}", (this.index !== null && this.index !== undefined) ? "/" + String(this.index) : "")
			.replace("/{" + "nodePath" + "}", (this.nodePath !== null && this.nodePath !== undefined) ? "/" + String(this.nodePath) : "")
			.replace("//", "/");
		const queryParameters: any = {};
		// verify required parameter 'name' is not undefined
		if (this.name === undefined) {
		    throw new Error('Required parameter "name" was undefined when calling deleteTable.');
		}

		// verify required parameter 'name' is not null
		if (this.name === null) {
		    throw new Error('Required parameter "name" was null when calling deleteTable.');
		}

		// verify required parameter 'index' is not undefined
		if (this.index === undefined) {
		    throw new Error('Required parameter "index" was undefined when calling deleteTable.');
		}

		// verify required parameter 'index' is not null
		if (this.index === null) {
		    throw new Error('Required parameter "index" was null when calling deleteTable.');
		}

		localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "folder", this.folder);
		localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "storage", this.storage);
		localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "loadEncoding", this.loadEncoding);
		localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "password", this.password);
		localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "destFileName", this.destFileName);
		localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "revisionAuthor", this.revisionAuthor);
		localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "revisionDateTime", this.revisionDateTime);

		const requestOptions: request.Options = {
			method: "DELETE",
			qs: queryParameters,
			uri: localVarPath,
			json: true,
		};

		return requestOptions;
	}

	/**
	 * get response type name
	 */
	getReturnType() : string {
		return "";
	}
}

/**
 * Request model for DeleteTableCell operation.
 * Deletes a table cell.
 */
export class DeleteTableCellRequest implements RequestInterface {
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

    public constructor(init?: Partial< DeleteTableCellRequest >) {
        Object.assign(this, init);
    }

	/**
	 * create the requst options for this request
	 * @param configuration a configuration for the request
	 */
	createRequestOptions(configuration: Configuration) : request.OptionsWithUri {
		let localVarPath = configuration.getApiBaseUrl() + "/words/{name}/{tableRowPath}/cells/{index}"
			.replace("/{" + "name" + "}", (this.name !== null && this.name !== undefined) ? "/" + String(this.name) : "")
			.replace("/{" + "tableRowPath" + "}", (this.tableRowPath !== null && this.tableRowPath !== undefined) ? "/" + String(this.tableRowPath) : "")
			.replace("/{" + "index" + "}", (this.index !== null && this.index !== undefined) ? "/" + String(this.index) : "")
			.replace("//", "/");
		const queryParameters: any = {};
		// verify required parameter 'name' is not undefined
		if (this.name === undefined) {
		    throw new Error('Required parameter "name" was undefined when calling deleteTableCell.');
		}

		// verify required parameter 'name' is not null
		if (this.name === null) {
		    throw new Error('Required parameter "name" was null when calling deleteTableCell.');
		}

		// verify required parameter 'tableRowPath' is not undefined
		if (this.tableRowPath === undefined) {
		    throw new Error('Required parameter "tableRowPath" was undefined when calling deleteTableCell.');
		}

		// verify required parameter 'index' is not undefined
		if (this.index === undefined) {
		    throw new Error('Required parameter "index" was undefined when calling deleteTableCell.');
		}

		// verify required parameter 'index' is not null
		if (this.index === null) {
		    throw new Error('Required parameter "index" was null when calling deleteTableCell.');
		}

		localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "folder", this.folder);
		localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "storage", this.storage);
		localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "loadEncoding", this.loadEncoding);
		localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "password", this.password);
		localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "destFileName", this.destFileName);
		localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "revisionAuthor", this.revisionAuthor);
		localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "revisionDateTime", this.revisionDateTime);

		const requestOptions: request.Options = {
			method: "DELETE",
			qs: queryParameters,
			uri: localVarPath,
			json: true,
		};

		return requestOptions;
	}

	/**
	 * get response type name
	 */
	getReturnType() : string {
		return "";
	}
}

/**
 * Request model for DeleteTableRow operation.
 * Deletes a table row.
 */
export class DeleteTableRowRequest implements RequestInterface {
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

    public constructor(init?: Partial< DeleteTableRowRequest >) {
        Object.assign(this, init);
    }

	/**
	 * create the requst options for this request
	 * @param configuration a configuration for the request
	 */
	createRequestOptions(configuration: Configuration) : request.OptionsWithUri {
		let localVarPath = configuration.getApiBaseUrl() + "/words/{name}/{tablePath}/rows/{index}"
			.replace("/{" + "name" + "}", (this.name !== null && this.name !== undefined) ? "/" + String(this.name) : "")
			.replace("/{" + "tablePath" + "}", (this.tablePath !== null && this.tablePath !== undefined) ? "/" + String(this.tablePath) : "")
			.replace("/{" + "index" + "}", (this.index !== null && this.index !== undefined) ? "/" + String(this.index) : "")
			.replace("//", "/");
		const queryParameters: any = {};
		// verify required parameter 'name' is not undefined
		if (this.name === undefined) {
		    throw new Error('Required parameter "name" was undefined when calling deleteTableRow.');
		}

		// verify required parameter 'name' is not null
		if (this.name === null) {
		    throw new Error('Required parameter "name" was null when calling deleteTableRow.');
		}

		// verify required parameter 'tablePath' is not undefined
		if (this.tablePath === undefined) {
		    throw new Error('Required parameter "tablePath" was undefined when calling deleteTableRow.');
		}

		// verify required parameter 'index' is not undefined
		if (this.index === undefined) {
		    throw new Error('Required parameter "index" was undefined when calling deleteTableRow.');
		}

		// verify required parameter 'index' is not null
		if (this.index === null) {
		    throw new Error('Required parameter "index" was null when calling deleteTableRow.');
		}

		localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "folder", this.folder);
		localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "storage", this.storage);
		localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "loadEncoding", this.loadEncoding);
		localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "password", this.password);
		localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "destFileName", this.destFileName);
		localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "revisionAuthor", this.revisionAuthor);
		localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "revisionDateTime", this.revisionDateTime);

		const requestOptions: request.Options = {
			method: "DELETE",
			qs: queryParameters,
			uri: localVarPath,
			json: true,
		};

		return requestOptions;
	}

	/**
	 * get response type name
	 */
	getReturnType() : string {
		return "";
	}
}

/**
 * Request model for DeleteWatermark operation.
 * Deletes watermark (for deleting last watermark from the document).
 */
export class DeleteWatermarkRequest implements RequestInterface {
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

    public constructor(init?: Partial< DeleteWatermarkRequest >) {
        Object.assign(this, init);
    }

	/**
	 * create the requst options for this request
	 * @param configuration a configuration for the request
	 */
	createRequestOptions(configuration: Configuration) : request.OptionsWithUri {
		let localVarPath = configuration.getApiBaseUrl() + "/words/{name}/watermarks/deleteLast"
			.replace("/{" + "name" + "}", (this.name !== null && this.name !== undefined) ? "/" + String(this.name) : "")
			.replace("//", "/");
		const queryParameters: any = {};
		// verify required parameter 'name' is not undefined
		if (this.name === undefined) {
		    throw new Error('Required parameter "name" was undefined when calling deleteWatermark.');
		}

		// verify required parameter 'name' is not null
		if (this.name === null) {
		    throw new Error('Required parameter "name" was null when calling deleteWatermark.');
		}

		localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "folder", this.folder);
		localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "storage", this.storage);
		localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "loadEncoding", this.loadEncoding);
		localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "password", this.password);
		localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "destFileName", this.destFileName);
		localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "revisionAuthor", this.revisionAuthor);
		localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "revisionDateTime", this.revisionDateTime);

		const requestOptions: request.Options = {
			method: "POST",
			qs: queryParameters,
			uri: localVarPath,
			json: true,
		};

		return requestOptions;
	}

	/**
	 * get response type name
	 */
	getReturnType() : string {
		return "DocumentResponse";
	}
}

/**
 * Request model for DownloadFile operation.
 * Download file.
 */
export class DownloadFileRequest implements RequestInterface {
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

	/**
	 * create the requst options for this request
	 * @param configuration a configuration for the request
	 */
	createRequestOptions(configuration: Configuration) : request.OptionsWithUri {
		let localVarPath = configuration.getApiBaseUrl() + "/words/storage/file/{path}"
			.replace("/{" + "path" + "}", (this.path !== null && this.path !== undefined) ? "/" + String(this.path) : "")
			.replace("//", "/");
		const queryParameters: any = {};
		// verify required parameter 'path' is not undefined
		if (this.path === undefined) {
		    throw new Error('Required parameter "path" was undefined when calling downloadFile.');
		}

		// verify required parameter 'path' is not null
		if (this.path === null) {
		    throw new Error('Required parameter "path" was null when calling downloadFile.');
		}

		localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "storageName", this.storageName);
		localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "versionId", this.versionId);

		const requestOptions: request.Options = {
			method: "GET",
			qs: queryParameters,
			uri: localVarPath,
			encoding: null,
		};

		return requestOptions;
	}

	/**
	 * get response type name
	 */
	getReturnType() : string {
		return "Buffer";
	}
}

/**
 * Request model for ExecuteMailMerge operation.
 * Executes document mail merge operation.
 */
export class ExecuteMailMergeRequest implements RequestInterface {
    /**
     * The template name.
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
     * With regions flag.
     */
    public withRegions: boolean;

    /**
     * Mail merge data file.
     */
    public mailMergeDataFile: string;

    /**
     * Clean up options.
     */
    public cleanup: string;

    /**
     * Gets or sets a value indicating whether paragraph with TableStart or.
     * TableEnd field should be fully included into mail merge region or particular range between TableStart and TableEnd fields.
     * The default value is true.
     */
    public useWholeParagraphAsRegion: boolean;

    /**
     * Result name of the document after the operation. If this parameter is omitted then result of the operation will be saved with autogenerated name.
     */
    public destFileName: string;

    public constructor(init?: Partial< ExecuteMailMergeRequest >) {
        Object.assign(this, init);
    }

	/**
	 * create the requst options for this request
	 * @param configuration a configuration for the request
	 */
	createRequestOptions(configuration: Configuration) : request.OptionsWithUri {
		let localVarPath = configuration.getApiBaseUrl() + "/words/{name}/MailMerge"
			.replace("/{" + "name" + "}", (this.name !== null && this.name !== undefined) ? "/" + String(this.name) : "")
			.replace("//", "/");
		const queryParameters: any = {};
		const formParams: any = {};
		// verify required parameter 'name' is not undefined
		if (this.name === undefined) {
		    throw new Error('Required parameter "name" was undefined when calling executeMailMerge.');
		}

		// verify required parameter 'name' is not null
		if (this.name === null) {
		    throw new Error('Required parameter "name" was null when calling executeMailMerge.');
		}

		localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "folder", this.folder);
		localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "storage", this.storage);
		localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "loadEncoding", this.loadEncoding);
		localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "password", this.password);
		localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "withRegions", this.withRegions);
		localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "mailMergeDataFile", this.mailMergeDataFile);
		localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "cleanup", this.cleanup);
		localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "useWholeParagraphAsRegion", this.useWholeParagraphAsRegion);
		localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "destFileName", this.destFileName);
		if (this.data !== undefined) {
		    formParams.Data = ObjectSerializer.serialize(this.data, "string");
		}

		const requestOptions: request.Options = {
			method: "PUT",
			qs: queryParameters,
			uri: localVarPath,
			json: true,
		};

		if (Object.keys(formParams).length > 0) {
			requestOptions.formData = formParams;
		}
		return requestOptions;
	}

	/**
	 * get response type name
	 */
	getReturnType() : string {
		return "DocumentResponse";
	}
}

/**
 * Request model for ExecuteMailMergeOnline operation.
 * Executes document mail merge online.
 */
export class ExecuteMailMergeOnlineRequest implements RequestInterface {
    /**
     * File with template.
     */
    public template: Readable;

    /**
     * File with mailmerge data.
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
     * This file name will be used when resulting document has dynamic field for document file name {filename}. If it is not set, "template" will be used instead.
     */
    public documentFileName: string;

    public constructor(init?: Partial< ExecuteMailMergeOnlineRequest >) {
        Object.assign(this, init);
    }

	/**
	 * create the requst options for this request
	 * @param configuration a configuration for the request
	 */
	createRequestOptions(configuration: Configuration) : request.OptionsWithUri {
		let localVarPath = configuration.getApiBaseUrl() + "/words/MailMerge"
			.replace("//", "/");
		const queryParameters: any = {};
		const formParams: any = {};
		// verify required parameter 'template' is not undefined
		if (this.template === undefined) {
		    throw new Error('Required parameter "template" was undefined when calling executeMailMergeOnline.');
		}

		// verify required parameter 'template' is not null
		if (this.template === null) {
		    throw new Error('Required parameter "template" was null when calling executeMailMergeOnline.');
		}

		// verify required parameter 'data' is not undefined
		if (this.data === undefined) {
		    throw new Error('Required parameter "data" was undefined when calling executeMailMergeOnline.');
		}

		// verify required parameter 'data' is not null
		if (this.data === null) {
		    throw new Error('Required parameter "data" was null when calling executeMailMergeOnline.');
		}

		localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "withRegions", this.withRegions);
		localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "cleanup", this.cleanup);
		localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "documentFileName", this.documentFileName);
		if (this.template !== undefined) {
		    formParams.Template = this.template;
		}
		if (this.data !== undefined) {
		    formParams.Data = this.data;
		}

		const requestOptions: request.Options = {
			method: "PUT",
			qs: queryParameters,
			uri: localVarPath,
			encoding: null,
		};

		if (Object.keys(formParams).length > 0) {
			requestOptions.formData = formParams;
		}
		return requestOptions;
	}

	/**
	 * get response type name
	 */
	getReturnType() : string {
		return "Buffer";
	}
}

/**
 * Request model for GetAvailableFonts operation.
 * Gets the list of fonts, available for document processing.
 */
export class GetAvailableFontsRequest implements RequestInterface {
    /**
     * Folder in filestorage with custom fonts.
     */
    public fontsLocation: string;

    public constructor(init?: Partial< GetAvailableFontsRequest >) {
        Object.assign(this, init);
    }

	/**
	 * create the requst options for this request
	 * @param configuration a configuration for the request
	 */
	createRequestOptions(configuration: Configuration) : request.OptionsWithUri {
		let localVarPath = configuration.getApiBaseUrl() + "/words/fonts/available"
			.replace("//", "/");
		const queryParameters: any = {};
		localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "fontsLocation", this.fontsLocation);

		const requestOptions: request.Options = {
			method: "GET",
			qs: queryParameters,
			uri: localVarPath,
			json: true,
		};

		return requestOptions;
	}

	/**
	 * get response type name
	 */
	getReturnType() : string {
		return "AvailableFontsResponse";
	}
}

/**
 * Request model for GetBookmarkByName operation.
 * Reads document bookmark data by its name.
 */
export class GetBookmarkByNameRequest implements RequestInterface {
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

    public constructor(init?: Partial< GetBookmarkByNameRequest >) {
        Object.assign(this, init);
    }

	/**
	 * create the requst options for this request
	 * @param configuration a configuration for the request
	 */
	createRequestOptions(configuration: Configuration) : request.OptionsWithUri {
		let localVarPath = configuration.getApiBaseUrl() + "/words/{name}/bookmarks/{bookmarkName}"
			.replace("/{" + "name" + "}", (this.name !== null && this.name !== undefined) ? "/" + String(this.name) : "")
			.replace("/{" + "bookmarkName" + "}", (this.bookmarkName !== null && this.bookmarkName !== undefined) ? "/" + String(this.bookmarkName) : "")
			.replace("//", "/");
		const queryParameters: any = {};
		// verify required parameter 'name' is not undefined
		if (this.name === undefined) {
		    throw new Error('Required parameter "name" was undefined when calling getBookmarkByName.');
		}

		// verify required parameter 'name' is not null
		if (this.name === null) {
		    throw new Error('Required parameter "name" was null when calling getBookmarkByName.');
		}

		// verify required parameter 'bookmarkName' is not undefined
		if (this.bookmarkName === undefined) {
		    throw new Error('Required parameter "bookmarkName" was undefined when calling getBookmarkByName.');
		}

		// verify required parameter 'bookmarkName' is not null
		if (this.bookmarkName === null) {
		    throw new Error('Required parameter "bookmarkName" was null when calling getBookmarkByName.');
		}

		localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "folder", this.folder);
		localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "storage", this.storage);
		localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "loadEncoding", this.loadEncoding);
		localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "password", this.password);

		const requestOptions: request.Options = {
			method: "GET",
			qs: queryParameters,
			uri: localVarPath,
			json: true,
		};

		return requestOptions;
	}

	/**
	 * get response type name
	 */
	getReturnType() : string {
		return "BookmarkResponse";
	}
}

/**
 * Request model for GetBookmarks operation.
 * Reads document bookmarks common info.
 */
export class GetBookmarksRequest implements RequestInterface {
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

    public constructor(init?: Partial< GetBookmarksRequest >) {
        Object.assign(this, init);
    }

	/**
	 * create the requst options for this request
	 * @param configuration a configuration for the request
	 */
	createRequestOptions(configuration: Configuration) : request.OptionsWithUri {
		let localVarPath = configuration.getApiBaseUrl() + "/words/{name}/bookmarks"
			.replace("/{" + "name" + "}", (this.name !== null && this.name !== undefined) ? "/" + String(this.name) : "")
			.replace("//", "/");
		const queryParameters: any = {};
		// verify required parameter 'name' is not undefined
		if (this.name === undefined) {
		    throw new Error('Required parameter "name" was undefined when calling getBookmarks.');
		}

		// verify required parameter 'name' is not null
		if (this.name === null) {
		    throw new Error('Required parameter "name" was null when calling getBookmarks.');
		}

		localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "folder", this.folder);
		localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "storage", this.storage);
		localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "loadEncoding", this.loadEncoding);
		localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "password", this.password);

		const requestOptions: request.Options = {
			method: "GET",
			qs: queryParameters,
			uri: localVarPath,
			json: true,
		};

		return requestOptions;
	}

	/**
	 * get response type name
	 */
	getReturnType() : string {
		return "BookmarksResponse";
	}
}

/**
 * Request model for GetBorder operation.
 * 'nodePath' should refer to paragraph, cell or row.
 */
export class GetBorderRequest implements RequestInterface {
    /**
     * The document name.
     */
    public name: string;

    /**
     * Border type.
     */
    public borderType: string;

    /**
     * Path to the node with border(node should be paragraph, cell or row).
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

	/**
	 * create the requst options for this request
	 * @param configuration a configuration for the request
	 */
	createRequestOptions(configuration: Configuration) : request.OptionsWithUri {
		let localVarPath = configuration.getApiBaseUrl() + "/words/{name}/{nodePath}/borders/{borderType}"
			.replace("/{" + "name" + "}", (this.name !== null && this.name !== undefined) ? "/" + String(this.name) : "")
			.replace("/{" + "borderType" + "}", (this.borderType !== null && this.borderType !== undefined) ? "/" + String(this.borderType) : "")
			.replace("/{" + "nodePath" + "}", (this.nodePath !== null && this.nodePath !== undefined) ? "/" + String(this.nodePath) : "")
			.replace("//", "/");
		const queryParameters: any = {};
		// verify required parameter 'name' is not undefined
		if (this.name === undefined) {
		    throw new Error('Required parameter "name" was undefined when calling getBorder.');
		}

		// verify required parameter 'name' is not null
		if (this.name === null) {
		    throw new Error('Required parameter "name" was null when calling getBorder.');
		}

		// verify required parameter 'borderType' is not undefined
		if (this.borderType === undefined) {
		    throw new Error('Required parameter "borderType" was undefined when calling getBorder.');
		}

		// verify required parameter 'borderType' is not null
		if (this.borderType === null) {
		    throw new Error('Required parameter "borderType" was null when calling getBorder.');
		}

		localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "folder", this.folder);
		localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "storage", this.storage);
		localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "loadEncoding", this.loadEncoding);
		localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "password", this.password);

		const requestOptions: request.Options = {
			method: "GET",
			qs: queryParameters,
			uri: localVarPath,
			json: true,
		};

		return requestOptions;
	}

	/**
	 * get response type name
	 */
	getReturnType() : string {
		return "BorderResponse";
	}
}

/**
 * Request model for GetBorders operation.
 * 'nodePath' should refer to paragraph, cell or row.
 */
export class GetBordersRequest implements RequestInterface {
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

    public constructor(init?: Partial< GetBordersRequest >) {
        Object.assign(this, init);
    }

	/**
	 * create the requst options for this request
	 * @param configuration a configuration for the request
	 */
	createRequestOptions(configuration: Configuration) : request.OptionsWithUri {
		let localVarPath = configuration.getApiBaseUrl() + "/words/{name}/{nodePath}/borders"
			.replace("/{" + "name" + "}", (this.name !== null && this.name !== undefined) ? "/" + String(this.name) : "")
			.replace("/{" + "nodePath" + "}", (this.nodePath !== null && this.nodePath !== undefined) ? "/" + String(this.nodePath) : "")
			.replace("//", "/");
		const queryParameters: any = {};
		// verify required parameter 'name' is not undefined
		if (this.name === undefined) {
		    throw new Error('Required parameter "name" was undefined when calling getBorders.');
		}

		// verify required parameter 'name' is not null
		if (this.name === null) {
		    throw new Error('Required parameter "name" was null when calling getBorders.');
		}

		localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "folder", this.folder);
		localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "storage", this.storage);
		localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "loadEncoding", this.loadEncoding);
		localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "password", this.password);

		const requestOptions: request.Options = {
			method: "GET",
			qs: queryParameters,
			uri: localVarPath,
			json: true,
		};

		return requestOptions;
	}

	/**
	 * get response type name
	 */
	getReturnType() : string {
		return "BordersResponse";
	}
}

/**
 * Request model for GetComment operation.
 * Gets comment from document.
 */
export class GetCommentRequest implements RequestInterface {
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

    public constructor(init?: Partial< GetCommentRequest >) {
        Object.assign(this, init);
    }

	/**
	 * create the requst options for this request
	 * @param configuration a configuration for the request
	 */
	createRequestOptions(configuration: Configuration) : request.OptionsWithUri {
		let localVarPath = configuration.getApiBaseUrl() + "/words/{name}/comments/{commentIndex}"
			.replace("/{" + "name" + "}", (this.name !== null && this.name !== undefined) ? "/" + String(this.name) : "")
			.replace("/{" + "commentIndex" + "}", (this.commentIndex !== null && this.commentIndex !== undefined) ? "/" + String(this.commentIndex) : "")
			.replace("//", "/");
		const queryParameters: any = {};
		// verify required parameter 'name' is not undefined
		if (this.name === undefined) {
		    throw new Error('Required parameter "name" was undefined when calling getComment.');
		}

		// verify required parameter 'name' is not null
		if (this.name === null) {
		    throw new Error('Required parameter "name" was null when calling getComment.');
		}

		// verify required parameter 'commentIndex' is not undefined
		if (this.commentIndex === undefined) {
		    throw new Error('Required parameter "commentIndex" was undefined when calling getComment.');
		}

		// verify required parameter 'commentIndex' is not null
		if (this.commentIndex === null) {
		    throw new Error('Required parameter "commentIndex" was null when calling getComment.');
		}

		localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "folder", this.folder);
		localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "storage", this.storage);
		localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "loadEncoding", this.loadEncoding);
		localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "password", this.password);

		const requestOptions: request.Options = {
			method: "GET",
			qs: queryParameters,
			uri: localVarPath,
			json: true,
		};

		return requestOptions;
	}

	/**
	 * get response type name
	 */
	getReturnType() : string {
		return "CommentResponse";
	}
}

/**
 * Request model for GetComments operation.
 * Gets comments from document.
 */
export class GetCommentsRequest implements RequestInterface {
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

    public constructor(init?: Partial< GetCommentsRequest >) {
        Object.assign(this, init);
    }

	/**
	 * create the requst options for this request
	 * @param configuration a configuration for the request
	 */
	createRequestOptions(configuration: Configuration) : request.OptionsWithUri {
		let localVarPath = configuration.getApiBaseUrl() + "/words/{name}/comments"
			.replace("/{" + "name" + "}", (this.name !== null && this.name !== undefined) ? "/" + String(this.name) : "")
			.replace("//", "/");
		const queryParameters: any = {};
		// verify required parameter 'name' is not undefined
		if (this.name === undefined) {
		    throw new Error('Required parameter "name" was undefined when calling getComments.');
		}

		// verify required parameter 'name' is not null
		if (this.name === null) {
		    throw new Error('Required parameter "name" was null when calling getComments.');
		}

		localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "folder", this.folder);
		localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "storage", this.storage);
		localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "loadEncoding", this.loadEncoding);
		localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "password", this.password);

		const requestOptions: request.Options = {
			method: "GET",
			qs: queryParameters,
			uri: localVarPath,
			json: true,
		};

		return requestOptions;
	}

	/**
	 * get response type name
	 */
	getReturnType() : string {
		return "CommentsResponse";
	}
}

/**
 * Request model for GetDocument operation.
 * Reads document common info.
 */
export class GetDocumentRequest implements RequestInterface {
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

    public constructor(init?: Partial< GetDocumentRequest >) {
        Object.assign(this, init);
    }

	/**
	 * create the requst options for this request
	 * @param configuration a configuration for the request
	 */
	createRequestOptions(configuration: Configuration) : request.OptionsWithUri {
		let localVarPath = configuration.getApiBaseUrl() + "/words/{documentName}"
			.replace("/{" + "documentName" + "}", (this.documentName !== null && this.documentName !== undefined) ? "/" + String(this.documentName) : "")
			.replace("//", "/");
		const queryParameters: any = {};
		// verify required parameter 'documentName' is not undefined
		if (this.documentName === undefined) {
		    throw new Error('Required parameter "documentName" was undefined when calling getDocument.');
		}

		// verify required parameter 'documentName' is not null
		if (this.documentName === null) {
		    throw new Error('Required parameter "documentName" was null when calling getDocument.');
		}

		localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "folder", this.folder);
		localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "storage", this.storage);
		localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "loadEncoding", this.loadEncoding);
		localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "password", this.password);

		const requestOptions: request.Options = {
			method: "GET",
			qs: queryParameters,
			uri: localVarPath,
			json: true,
		};

		return requestOptions;
	}

	/**
	 * get response type name
	 */
	getReturnType() : string {
		return "DocumentResponse";
	}
}

/**
 * Request model for GetDocumentDrawingObjectByIndex operation.
 * Reads document drawing object common info by its index or convert to format specified.
 */
export class GetDocumentDrawingObjectByIndexRequest implements RequestInterface {
    /**
     * The document name.
     */
    public name: string;

    /**
     * Object index.
     */
    public index: number;

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

    public constructor(init?: Partial< GetDocumentDrawingObjectByIndexRequest >) {
        Object.assign(this, init);
    }

	/**
	 * create the requst options for this request
	 * @param configuration a configuration for the request
	 */
	createRequestOptions(configuration: Configuration) : request.OptionsWithUri {
		let localVarPath = configuration.getApiBaseUrl() + "/words/{name}/{nodePath}/drawingObjects/{index}"
			.replace("/{" + "name" + "}", (this.name !== null && this.name !== undefined) ? "/" + String(this.name) : "")
			.replace("/{" + "index" + "}", (this.index !== null && this.index !== undefined) ? "/" + String(this.index) : "")
			.replace("/{" + "nodePath" + "}", (this.nodePath !== null && this.nodePath !== undefined) ? "/" + String(this.nodePath) : "")
			.replace("//", "/");
		const queryParameters: any = {};
		// verify required parameter 'name' is not undefined
		if (this.name === undefined) {
		    throw new Error('Required parameter "name" was undefined when calling getDocumentDrawingObjectByIndex.');
		}

		// verify required parameter 'name' is not null
		if (this.name === null) {
		    throw new Error('Required parameter "name" was null when calling getDocumentDrawingObjectByIndex.');
		}

		// verify required parameter 'index' is not undefined
		if (this.index === undefined) {
		    throw new Error('Required parameter "index" was undefined when calling getDocumentDrawingObjectByIndex.');
		}

		// verify required parameter 'index' is not null
		if (this.index === null) {
		    throw new Error('Required parameter "index" was null when calling getDocumentDrawingObjectByIndex.');
		}

		localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "folder", this.folder);
		localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "storage", this.storage);
		localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "loadEncoding", this.loadEncoding);
		localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "password", this.password);

		const requestOptions: request.Options = {
			method: "GET",
			qs: queryParameters,
			uri: localVarPath,
			json: true,
		};

		return requestOptions;
	}

	/**
	 * get response type name
	 */
	getReturnType() : string {
		return "DrawingObjectResponse";
	}
}

/**
 * Request model for GetDocumentDrawingObjectImageData operation.
 * Reads drawing object image data.
 */
export class GetDocumentDrawingObjectImageDataRequest implements RequestInterface {
    /**
     * The document name.
     */
    public name: string;

    /**
     * Object index.
     */
    public index: number;

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

    public constructor(init?: Partial< GetDocumentDrawingObjectImageDataRequest >) {
        Object.assign(this, init);
    }

	/**
	 * create the requst options for this request
	 * @param configuration a configuration for the request
	 */
	createRequestOptions(configuration: Configuration) : request.OptionsWithUri {
		let localVarPath = configuration.getApiBaseUrl() + "/words/{name}/{nodePath}/drawingObjects/{index}/imageData"
			.replace("/{" + "name" + "}", (this.name !== null && this.name !== undefined) ? "/" + String(this.name) : "")
			.replace("/{" + "index" + "}", (this.index !== null && this.index !== undefined) ? "/" + String(this.index) : "")
			.replace("/{" + "nodePath" + "}", (this.nodePath !== null && this.nodePath !== undefined) ? "/" + String(this.nodePath) : "")
			.replace("//", "/");
		const queryParameters: any = {};
		// verify required parameter 'name' is not undefined
		if (this.name === undefined) {
		    throw new Error('Required parameter "name" was undefined when calling getDocumentDrawingObjectImageData.');
		}

		// verify required parameter 'name' is not null
		if (this.name === null) {
		    throw new Error('Required parameter "name" was null when calling getDocumentDrawingObjectImageData.');
		}

		// verify required parameter 'index' is not undefined
		if (this.index === undefined) {
		    throw new Error('Required parameter "index" was undefined when calling getDocumentDrawingObjectImageData.');
		}

		// verify required parameter 'index' is not null
		if (this.index === null) {
		    throw new Error('Required parameter "index" was null when calling getDocumentDrawingObjectImageData.');
		}

		localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "folder", this.folder);
		localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "storage", this.storage);
		localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "loadEncoding", this.loadEncoding);
		localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "password", this.password);

		const requestOptions: request.Options = {
			method: "GET",
			qs: queryParameters,
			uri: localVarPath,
			encoding: null,
		};

		return requestOptions;
	}

	/**
	 * get response type name
	 */
	getReturnType() : string {
		return "Buffer";
	}
}

/**
 * Request model for GetDocumentDrawingObjectOleData operation.
 * Gets drawing object OLE data.
 */
export class GetDocumentDrawingObjectOleDataRequest implements RequestInterface {
    /**
     * The document name.
     */
    public name: string;

    /**
     * Object index.
     */
    public index: number;

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

    public constructor(init?: Partial< GetDocumentDrawingObjectOleDataRequest >) {
        Object.assign(this, init);
    }

	/**
	 * create the requst options for this request
	 * @param configuration a configuration for the request
	 */
	createRequestOptions(configuration: Configuration) : request.OptionsWithUri {
		let localVarPath = configuration.getApiBaseUrl() + "/words/{name}/{nodePath}/drawingObjects/{index}/oleData"
			.replace("/{" + "name" + "}", (this.name !== null && this.name !== undefined) ? "/" + String(this.name) : "")
			.replace("/{" + "index" + "}", (this.index !== null && this.index !== undefined) ? "/" + String(this.index) : "")
			.replace("/{" + "nodePath" + "}", (this.nodePath !== null && this.nodePath !== undefined) ? "/" + String(this.nodePath) : "")
			.replace("//", "/");
		const queryParameters: any = {};
		// verify required parameter 'name' is not undefined
		if (this.name === undefined) {
		    throw new Error('Required parameter "name" was undefined when calling getDocumentDrawingObjectOleData.');
		}

		// verify required parameter 'name' is not null
		if (this.name === null) {
		    throw new Error('Required parameter "name" was null when calling getDocumentDrawingObjectOleData.');
		}

		// verify required parameter 'index' is not undefined
		if (this.index === undefined) {
		    throw new Error('Required parameter "index" was undefined when calling getDocumentDrawingObjectOleData.');
		}

		// verify required parameter 'index' is not null
		if (this.index === null) {
		    throw new Error('Required parameter "index" was null when calling getDocumentDrawingObjectOleData.');
		}

		localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "folder", this.folder);
		localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "storage", this.storage);
		localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "loadEncoding", this.loadEncoding);
		localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "password", this.password);

		const requestOptions: request.Options = {
			method: "GET",
			qs: queryParameters,
			uri: localVarPath,
			encoding: null,
		};

		return requestOptions;
	}

	/**
	 * get response type name
	 */
	getReturnType() : string {
		return "Buffer";
	}
}

/**
 * Request model for GetDocumentDrawingObjects operation.
 * Reads document drawing objects common info.
 */
export class GetDocumentDrawingObjectsRequest implements RequestInterface {
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

    public constructor(init?: Partial< GetDocumentDrawingObjectsRequest >) {
        Object.assign(this, init);
    }

	/**
	 * create the requst options for this request
	 * @param configuration a configuration for the request
	 */
	createRequestOptions(configuration: Configuration) : request.OptionsWithUri {
		let localVarPath = configuration.getApiBaseUrl() + "/words/{name}/{nodePath}/drawingObjects"
			.replace("/{" + "name" + "}", (this.name !== null && this.name !== undefined) ? "/" + String(this.name) : "")
			.replace("/{" + "nodePath" + "}", (this.nodePath !== null && this.nodePath !== undefined) ? "/" + String(this.nodePath) : "")
			.replace("//", "/");
		const queryParameters: any = {};
		// verify required parameter 'name' is not undefined
		if (this.name === undefined) {
		    throw new Error('Required parameter "name" was undefined when calling getDocumentDrawingObjects.');
		}

		// verify required parameter 'name' is not null
		if (this.name === null) {
		    throw new Error('Required parameter "name" was null when calling getDocumentDrawingObjects.');
		}

		localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "folder", this.folder);
		localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "storage", this.storage);
		localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "loadEncoding", this.loadEncoding);
		localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "password", this.password);

		const requestOptions: request.Options = {
			method: "GET",
			qs: queryParameters,
			uri: localVarPath,
			json: true,
		};

		return requestOptions;
	}

	/**
	 * get response type name
	 */
	getReturnType() : string {
		return "DrawingObjectsResponse";
	}
}

/**
 * Request model for GetDocumentFieldNames operation.
 * Reads document field names.
 */
export class GetDocumentFieldNamesRequest implements RequestInterface {
    /**
     * The template name.
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
     * If true, result includes "mustache" field names.
     */
    public useNonMergeFields: boolean;

    public constructor(init?: Partial< GetDocumentFieldNamesRequest >) {
        Object.assign(this, init);
    }

	/**
	 * create the requst options for this request
	 * @param configuration a configuration for the request
	 */
	createRequestOptions(configuration: Configuration) : request.OptionsWithUri {
		let localVarPath = configuration.getApiBaseUrl() + "/words/{name}/mailMerge/FieldNames"
			.replace("/{" + "name" + "}", (this.name !== null && this.name !== undefined) ? "/" + String(this.name) : "")
			.replace("//", "/");
		const queryParameters: any = {};
		// verify required parameter 'name' is not undefined
		if (this.name === undefined) {
		    throw new Error('Required parameter "name" was undefined when calling getDocumentFieldNames.');
		}

		// verify required parameter 'name' is not null
		if (this.name === null) {
		    throw new Error('Required parameter "name" was null when calling getDocumentFieldNames.');
		}

		localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "folder", this.folder);
		localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "storage", this.storage);
		localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "loadEncoding", this.loadEncoding);
		localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "password", this.password);
		localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "useNonMergeFields", this.useNonMergeFields);

		const requestOptions: request.Options = {
			method: "GET",
			qs: queryParameters,
			uri: localVarPath,
			json: true,
		};

		return requestOptions;
	}

	/**
	 * get response type name
	 */
	getReturnType() : string {
		return "FieldNamesResponse";
	}
}

/**
 * Request model for GetDocumentFieldNamesOnline operation.
 * Reads document field names.
 */
export class GetDocumentFieldNamesOnlineRequest implements RequestInterface {
    /**
     * File with template.
     */
    public template: Readable;

    /**
     * Use non merge fields or not.
     */
    public useNonMergeFields: boolean;

    public constructor(init?: Partial< GetDocumentFieldNamesOnlineRequest >) {
        Object.assign(this, init);
    }

	/**
	 * create the requst options for this request
	 * @param configuration a configuration for the request
	 */
	createRequestOptions(configuration: Configuration) : request.OptionsWithUri {
		let localVarPath = configuration.getApiBaseUrl() + "/words/mailMerge/FieldNames"
			.replace("//", "/");
		const queryParameters: any = {};
		const formParams: any = {};
		// verify required parameter 'template' is not undefined
		if (this.template === undefined) {
		    throw new Error('Required parameter "template" was undefined when calling getDocumentFieldNamesOnline.');
		}

		// verify required parameter 'template' is not null
		if (this.template === null) {
		    throw new Error('Required parameter "template" was null when calling getDocumentFieldNamesOnline.');
		}

		localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "useNonMergeFields", this.useNonMergeFields);
		if (this.template !== undefined) {
		    formParams.Template = this.template;
		}

		const requestOptions: request.Options = {
			method: "PUT",
			qs: queryParameters,
			uri: localVarPath,
			json: true,
		};

		if (Object.keys(formParams).length > 0) {
			requestOptions.formData = formParams;
		}
		return requestOptions;
	}

	/**
	 * get response type name
	 */
	getReturnType() : string {
		return "FieldNamesResponse";
	}
}

/**
 * Request model for GetDocumentHyperlinkByIndex operation.
 * Reads document hyperlink by its index.
 */
export class GetDocumentHyperlinkByIndexRequest implements RequestInterface {
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

    public constructor(init?: Partial< GetDocumentHyperlinkByIndexRequest >) {
        Object.assign(this, init);
    }

	/**
	 * create the requst options for this request
	 * @param configuration a configuration for the request
	 */
	createRequestOptions(configuration: Configuration) : request.OptionsWithUri {
		let localVarPath = configuration.getApiBaseUrl() + "/words/{name}/hyperlinks/{hyperlinkIndex}"
			.replace("/{" + "name" + "}", (this.name !== null && this.name !== undefined) ? "/" + String(this.name) : "")
			.replace("/{" + "hyperlinkIndex" + "}", (this.hyperlinkIndex !== null && this.hyperlinkIndex !== undefined) ? "/" + String(this.hyperlinkIndex) : "")
			.replace("//", "/");
		const queryParameters: any = {};
		// verify required parameter 'name' is not undefined
		if (this.name === undefined) {
		    throw new Error('Required parameter "name" was undefined when calling getDocumentHyperlinkByIndex.');
		}

		// verify required parameter 'name' is not null
		if (this.name === null) {
		    throw new Error('Required parameter "name" was null when calling getDocumentHyperlinkByIndex.');
		}

		// verify required parameter 'hyperlinkIndex' is not undefined
		if (this.hyperlinkIndex === undefined) {
		    throw new Error('Required parameter "hyperlinkIndex" was undefined when calling getDocumentHyperlinkByIndex.');
		}

		// verify required parameter 'hyperlinkIndex' is not null
		if (this.hyperlinkIndex === null) {
		    throw new Error('Required parameter "hyperlinkIndex" was null when calling getDocumentHyperlinkByIndex.');
		}

		localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "folder", this.folder);
		localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "storage", this.storage);
		localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "loadEncoding", this.loadEncoding);
		localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "password", this.password);

		const requestOptions: request.Options = {
			method: "GET",
			qs: queryParameters,
			uri: localVarPath,
			json: true,
		};

		return requestOptions;
	}

	/**
	 * get response type name
	 */
	getReturnType() : string {
		return "HyperlinkResponse";
	}
}

/**
 * Request model for GetDocumentHyperlinks operation.
 * Reads document hyperlinks common info.
 */
export class GetDocumentHyperlinksRequest implements RequestInterface {
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

    public constructor(init?: Partial< GetDocumentHyperlinksRequest >) {
        Object.assign(this, init);
    }

	/**
	 * create the requst options for this request
	 * @param configuration a configuration for the request
	 */
	createRequestOptions(configuration: Configuration) : request.OptionsWithUri {
		let localVarPath = configuration.getApiBaseUrl() + "/words/{name}/hyperlinks"
			.replace("/{" + "name" + "}", (this.name !== null && this.name !== undefined) ? "/" + String(this.name) : "")
			.replace("//", "/");
		const queryParameters: any = {};
		// verify required parameter 'name' is not undefined
		if (this.name === undefined) {
		    throw new Error('Required parameter "name" was undefined when calling getDocumentHyperlinks.');
		}

		// verify required parameter 'name' is not null
		if (this.name === null) {
		    throw new Error('Required parameter "name" was null when calling getDocumentHyperlinks.');
		}

		localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "folder", this.folder);
		localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "storage", this.storage);
		localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "loadEncoding", this.loadEncoding);
		localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "password", this.password);

		const requestOptions: request.Options = {
			method: "GET",
			qs: queryParameters,
			uri: localVarPath,
			json: true,
		};

		return requestOptions;
	}

	/**
	 * get response type name
	 */
	getReturnType() : string {
		return "HyperlinksResponse";
	}
}

/**
 * Request model for GetDocumentProperties operation.
 * Reads document properties info.
 */
export class GetDocumentPropertiesRequest implements RequestInterface {
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

    public constructor(init?: Partial< GetDocumentPropertiesRequest >) {
        Object.assign(this, init);
    }

	/**
	 * create the requst options for this request
	 * @param configuration a configuration for the request
	 */
	createRequestOptions(configuration: Configuration) : request.OptionsWithUri {
		let localVarPath = configuration.getApiBaseUrl() + "/words/{name}/documentProperties"
			.replace("/{" + "name" + "}", (this.name !== null && this.name !== undefined) ? "/" + String(this.name) : "")
			.replace("//", "/");
		const queryParameters: any = {};
		// verify required parameter 'name' is not undefined
		if (this.name === undefined) {
		    throw new Error('Required parameter "name" was undefined when calling getDocumentProperties.');
		}

		// verify required parameter 'name' is not null
		if (this.name === null) {
		    throw new Error('Required parameter "name" was null when calling getDocumentProperties.');
		}

		localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "folder", this.folder);
		localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "storage", this.storage);
		localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "loadEncoding", this.loadEncoding);
		localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "password", this.password);

		const requestOptions: request.Options = {
			method: "GET",
			qs: queryParameters,
			uri: localVarPath,
			json: true,
		};

		return requestOptions;
	}

	/**
	 * get response type name
	 */
	getReturnType() : string {
		return "DocumentPropertiesResponse";
	}
}

/**
 * Request model for GetDocumentProperty operation.
 * Reads document property info by the property name.
 */
export class GetDocumentPropertyRequest implements RequestInterface {
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

    public constructor(init?: Partial< GetDocumentPropertyRequest >) {
        Object.assign(this, init);
    }

	/**
	 * create the requst options for this request
	 * @param configuration a configuration for the request
	 */
	createRequestOptions(configuration: Configuration) : request.OptionsWithUri {
		let localVarPath = configuration.getApiBaseUrl() + "/words/{name}/documentProperties/{propertyName}"
			.replace("/{" + "name" + "}", (this.name !== null && this.name !== undefined) ? "/" + String(this.name) : "")
			.replace("/{" + "propertyName" + "}", (this.propertyName !== null && this.propertyName !== undefined) ? "/" + String(this.propertyName) : "")
			.replace("//", "/");
		const queryParameters: any = {};
		// verify required parameter 'name' is not undefined
		if (this.name === undefined) {
		    throw new Error('Required parameter "name" was undefined when calling getDocumentProperty.');
		}

		// verify required parameter 'name' is not null
		if (this.name === null) {
		    throw new Error('Required parameter "name" was null when calling getDocumentProperty.');
		}

		// verify required parameter 'propertyName' is not undefined
		if (this.propertyName === undefined) {
		    throw new Error('Required parameter "propertyName" was undefined when calling getDocumentProperty.');
		}

		// verify required parameter 'propertyName' is not null
		if (this.propertyName === null) {
		    throw new Error('Required parameter "propertyName" was null when calling getDocumentProperty.');
		}

		localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "folder", this.folder);
		localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "storage", this.storage);
		localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "loadEncoding", this.loadEncoding);
		localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "password", this.password);

		const requestOptions: request.Options = {
			method: "GET",
			qs: queryParameters,
			uri: localVarPath,
			json: true,
		};

		return requestOptions;
	}

	/**
	 * get response type name
	 */
	getReturnType() : string {
		return "DocumentPropertyResponse";
	}
}

/**
 * Request model for GetDocumentProtection operation.
 * Reads document protection common info.
 */
export class GetDocumentProtectionRequest implements RequestInterface {
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

    public constructor(init?: Partial< GetDocumentProtectionRequest >) {
        Object.assign(this, init);
    }

	/**
	 * create the requst options for this request
	 * @param configuration a configuration for the request
	 */
	createRequestOptions(configuration: Configuration) : request.OptionsWithUri {
		let localVarPath = configuration.getApiBaseUrl() + "/words/{name}/protection"
			.replace("/{" + "name" + "}", (this.name !== null && this.name !== undefined) ? "/" + String(this.name) : "")
			.replace("//", "/");
		const queryParameters: any = {};
		// verify required parameter 'name' is not undefined
		if (this.name === undefined) {
		    throw new Error('Required parameter "name" was undefined when calling getDocumentProtection.');
		}

		// verify required parameter 'name' is not null
		if (this.name === null) {
		    throw new Error('Required parameter "name" was null when calling getDocumentProtection.');
		}

		localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "folder", this.folder);
		localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "storage", this.storage);
		localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "loadEncoding", this.loadEncoding);
		localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "password", this.password);

		const requestOptions: request.Options = {
			method: "GET",
			qs: queryParameters,
			uri: localVarPath,
			json: true,
		};

		return requestOptions;
	}

	/**
	 * get response type name
	 */
	getReturnType() : string {
		return "ProtectionDataResponse";
	}
}

/**
 * Request model for GetDocumentStatistics operation.
 * Reads document statistics.
 */
export class GetDocumentStatisticsRequest implements RequestInterface {
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
     * Support including/excluding comments from the WordCount. Default value is "false".
     */
    public includeComments: boolean;

    /**
     * Support including/excluding footnotes from the WordCount. Default value is "false".
     */
    public includeFootnotes: boolean;

    /**
     * Support including/excluding shape's text from the WordCount. Default value is "false".
     */
    public includeTextInShapes: boolean;

    public constructor(init?: Partial< GetDocumentStatisticsRequest >) {
        Object.assign(this, init);
    }

	/**
	 * create the requst options for this request
	 * @param configuration a configuration for the request
	 */
	createRequestOptions(configuration: Configuration) : request.OptionsWithUri {
		let localVarPath = configuration.getApiBaseUrl() + "/words/{name}/statistics"
			.replace("/{" + "name" + "}", (this.name !== null && this.name !== undefined) ? "/" + String(this.name) : "")
			.replace("//", "/");
		const queryParameters: any = {};
		// verify required parameter 'name' is not undefined
		if (this.name === undefined) {
		    throw new Error('Required parameter "name" was undefined when calling getDocumentStatistics.');
		}

		// verify required parameter 'name' is not null
		if (this.name === null) {
		    throw new Error('Required parameter "name" was null when calling getDocumentStatistics.');
		}

		localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "folder", this.folder);
		localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "storage", this.storage);
		localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "loadEncoding", this.loadEncoding);
		localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "password", this.password);
		localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "includeComments", this.includeComments);
		localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "includeFootnotes", this.includeFootnotes);
		localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "includeTextInShapes", this.includeTextInShapes);

		const requestOptions: request.Options = {
			method: "GET",
			qs: queryParameters,
			uri: localVarPath,
			json: true,
		};

		return requestOptions;
	}

	/**
	 * get response type name
	 */
	getReturnType() : string {
		return "StatDataResponse";
	}
}

/**
 * Request model for GetDocumentWithFormat operation.
 * Exports the document into the specified format.
 */
export class GetDocumentWithFormatRequest implements RequestInterface {
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

    public constructor(init?: Partial< GetDocumentWithFormatRequest >) {
        Object.assign(this, init);
    }

	/**
	 * create the requst options for this request
	 * @param configuration a configuration for the request
	 */
	createRequestOptions(configuration: Configuration) : request.OptionsWithUri {
		let localVarPath = configuration.getApiBaseUrl() + "/words/{name}"
			.replace("/{" + "name" + "}", (this.name !== null && this.name !== undefined) ? "/" + String(this.name) : "")
			.replace("//", "/");
		const queryParameters: any = {};
		// verify required parameter 'name' is not undefined
		if (this.name === undefined) {
		    throw new Error('Required parameter "name" was undefined when calling getDocumentWithFormat.');
		}

		// verify required parameter 'name' is not null
		if (this.name === null) {
		    throw new Error('Required parameter "name" was null when calling getDocumentWithFormat.');
		}

		// verify required parameter 'format' is not undefined
		if (this.format === undefined) {
		    throw new Error('Required parameter "format" was undefined when calling getDocumentWithFormat.');
		}

		// verify required parameter 'format' is not null
		if (this.format === null) {
		    throw new Error('Required parameter "format" was null when calling getDocumentWithFormat.');
		}

		localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "format", this.format);
		localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "folder", this.folder);
		localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "storage", this.storage);
		localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "loadEncoding", this.loadEncoding);
		localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "password", this.password);
		localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "outPath", this.outPath);
		localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "fontsLocation", this.fontsLocation);

		const requestOptions: request.Options = {
			method: "GET",
			qs: queryParameters,
			uri: localVarPath,
			encoding: null,
		};

		return requestOptions;
	}

	/**
	 * get response type name
	 */
	getReturnType() : string {
		return "Buffer";
	}
}

/**
 * Request model for GetField operation.
 * Gets field from document.
 */
export class GetFieldRequest implements RequestInterface {
    /**
     * The document name.
     */
    public name: string;

    /**
     * Object index.
     */
    public index: number;

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

    public constructor(init?: Partial< GetFieldRequest >) {
        Object.assign(this, init);
    }

	/**
	 * create the requst options for this request
	 * @param configuration a configuration for the request
	 */
	createRequestOptions(configuration: Configuration) : request.OptionsWithUri {
		let localVarPath = configuration.getApiBaseUrl() + "/words/{name}/{nodePath}/fields/{index}"
			.replace("/{" + "name" + "}", (this.name !== null && this.name !== undefined) ? "/" + String(this.name) : "")
			.replace("/{" + "index" + "}", (this.index !== null && this.index !== undefined) ? "/" + String(this.index) : "")
			.replace("/{" + "nodePath" + "}", (this.nodePath !== null && this.nodePath !== undefined) ? "/" + String(this.nodePath) : "")
			.replace("//", "/");
		const queryParameters: any = {};
		// verify required parameter 'name' is not undefined
		if (this.name === undefined) {
		    throw new Error('Required parameter "name" was undefined when calling getField.');
		}

		// verify required parameter 'name' is not null
		if (this.name === null) {
		    throw new Error('Required parameter "name" was null when calling getField.');
		}

		// verify required parameter 'index' is not undefined
		if (this.index === undefined) {
		    throw new Error('Required parameter "index" was undefined when calling getField.');
		}

		// verify required parameter 'index' is not null
		if (this.index === null) {
		    throw new Error('Required parameter "index" was null when calling getField.');
		}

		localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "folder", this.folder);
		localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "storage", this.storage);
		localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "loadEncoding", this.loadEncoding);
		localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "password", this.password);

		const requestOptions: request.Options = {
			method: "GET",
			qs: queryParameters,
			uri: localVarPath,
			json: true,
		};

		return requestOptions;
	}

	/**
	 * get response type name
	 */
	getReturnType() : string {
		return "FieldResponse";
	}
}

/**
 * Request model for GetFields operation.
 * Get fields from document.
 */
export class GetFieldsRequest implements RequestInterface {
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

    public constructor(init?: Partial< GetFieldsRequest >) {
        Object.assign(this, init);
    }

	/**
	 * create the requst options for this request
	 * @param configuration a configuration for the request
	 */
	createRequestOptions(configuration: Configuration) : request.OptionsWithUri {
		let localVarPath = configuration.getApiBaseUrl() + "/words/{name}/{nodePath}/fields"
			.replace("/{" + "name" + "}", (this.name !== null && this.name !== undefined) ? "/" + String(this.name) : "")
			.replace("/{" + "nodePath" + "}", (this.nodePath !== null && this.nodePath !== undefined) ? "/" + String(this.nodePath) : "")
			.replace("//", "/");
		const queryParameters: any = {};
		// verify required parameter 'name' is not undefined
		if (this.name === undefined) {
		    throw new Error('Required parameter "name" was undefined when calling getFields.');
		}

		// verify required parameter 'name' is not null
		if (this.name === null) {
		    throw new Error('Required parameter "name" was null when calling getFields.');
		}

		localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "folder", this.folder);
		localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "storage", this.storage);
		localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "loadEncoding", this.loadEncoding);
		localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "password", this.password);

		const requestOptions: request.Options = {
			method: "GET",
			qs: queryParameters,
			uri: localVarPath,
			json: true,
		};

		return requestOptions;
	}

	/**
	 * get response type name
	 */
	getReturnType() : string {
		return "FieldsResponse";
	}
}

/**
 * Request model for GetFilesList operation.
 * Get all files and folders within a folder.
 */
export class GetFilesListRequest implements RequestInterface {
    /**
     * Folder path e.g. /Folder1.
     */
    public path: string;

    /**
     * Storage name.
     */
    public storageName: string;

    public constructor(init?: Partial< GetFilesListRequest >) {
        Object.assign(this, init);
    }

	/**
	 * create the requst options for this request
	 * @param configuration a configuration for the request
	 */
	createRequestOptions(configuration: Configuration) : request.OptionsWithUri {
		let localVarPath = configuration.getApiBaseUrl() + "/words/storage/folder/{path}"
			.replace("/{" + "path" + "}", (this.path !== null && this.path !== undefined) ? "/" + String(this.path) : "")
			.replace("//", "/");
		const queryParameters: any = {};
		// verify required parameter 'path' is not undefined
		if (this.path === undefined) {
		    throw new Error('Required parameter "path" was undefined when calling getFilesList.');
		}

		// verify required parameter 'path' is not null
		if (this.path === null) {
		    throw new Error('Required parameter "path" was null when calling getFilesList.');
		}

		localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "storageName", this.storageName);

		const requestOptions: request.Options = {
			method: "GET",
			qs: queryParameters,
			uri: localVarPath,
			json: true,
		};

		return requestOptions;
	}

	/**
	 * get response type name
	 */
	getReturnType() : string {
		return "FilesList";
	}
}

/**
 * Request model for GetFootnote operation.
 * Reads footnote by index.
 */
export class GetFootnoteRequest implements RequestInterface {
    /**
     * The document name.
     */
    public name: string;

    /**
     * Object index.
     */
    public index: number;

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

    public constructor(init?: Partial< GetFootnoteRequest >) {
        Object.assign(this, init);
    }

	/**
	 * create the requst options for this request
	 * @param configuration a configuration for the request
	 */
	createRequestOptions(configuration: Configuration) : request.OptionsWithUri {
		let localVarPath = configuration.getApiBaseUrl() + "/words/{name}/{nodePath}/footnotes/{index}"
			.replace("/{" + "name" + "}", (this.name !== null && this.name !== undefined) ? "/" + String(this.name) : "")
			.replace("/{" + "index" + "}", (this.index !== null && this.index !== undefined) ? "/" + String(this.index) : "")
			.replace("/{" + "nodePath" + "}", (this.nodePath !== null && this.nodePath !== undefined) ? "/" + String(this.nodePath) : "")
			.replace("//", "/");
		const queryParameters: any = {};
		// verify required parameter 'name' is not undefined
		if (this.name === undefined) {
		    throw new Error('Required parameter "name" was undefined when calling getFootnote.');
		}

		// verify required parameter 'name' is not null
		if (this.name === null) {
		    throw new Error('Required parameter "name" was null when calling getFootnote.');
		}

		// verify required parameter 'index' is not undefined
		if (this.index === undefined) {
		    throw new Error('Required parameter "index" was undefined when calling getFootnote.');
		}

		// verify required parameter 'index' is not null
		if (this.index === null) {
		    throw new Error('Required parameter "index" was null when calling getFootnote.');
		}

		localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "folder", this.folder);
		localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "storage", this.storage);
		localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "loadEncoding", this.loadEncoding);
		localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "password", this.password);

		const requestOptions: request.Options = {
			method: "GET",
			qs: queryParameters,
			uri: localVarPath,
			json: true,
		};

		return requestOptions;
	}

	/**
	 * get response type name
	 */
	getReturnType() : string {
		return "FootnoteResponse";
	}
}

/**
 * Request model for GetFootnotes operation.
 * Gets footnotes from document.
 */
export class GetFootnotesRequest implements RequestInterface {
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

    public constructor(init?: Partial< GetFootnotesRequest >) {
        Object.assign(this, init);
    }

	/**
	 * create the requst options for this request
	 * @param configuration a configuration for the request
	 */
	createRequestOptions(configuration: Configuration) : request.OptionsWithUri {
		let localVarPath = configuration.getApiBaseUrl() + "/words/{name}/{nodePath}/footnotes"
			.replace("/{" + "name" + "}", (this.name !== null && this.name !== undefined) ? "/" + String(this.name) : "")
			.replace("/{" + "nodePath" + "}", (this.nodePath !== null && this.nodePath !== undefined) ? "/" + String(this.nodePath) : "")
			.replace("//", "/");
		const queryParameters: any = {};
		// verify required parameter 'name' is not undefined
		if (this.name === undefined) {
		    throw new Error('Required parameter "name" was undefined when calling getFootnotes.');
		}

		// verify required parameter 'name' is not null
		if (this.name === null) {
		    throw new Error('Required parameter "name" was null when calling getFootnotes.');
		}

		localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "folder", this.folder);
		localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "storage", this.storage);
		localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "loadEncoding", this.loadEncoding);
		localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "password", this.password);

		const requestOptions: request.Options = {
			method: "GET",
			qs: queryParameters,
			uri: localVarPath,
			json: true,
		};

		return requestOptions;
	}

	/**
	 * get response type name
	 */
	getReturnType() : string {
		return "FootnotesResponse";
	}
}

/**
 * Request model for GetFormField operation.
 * Returns representation of an one of the form field.
 */
export class GetFormFieldRequest implements RequestInterface {
    /**
     * The document name.
     */
    public name: string;

    /**
     * Object index.
     */
    public index: number;

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

    public constructor(init?: Partial< GetFormFieldRequest >) {
        Object.assign(this, init);
    }

	/**
	 * create the requst options for this request
	 * @param configuration a configuration for the request
	 */
	createRequestOptions(configuration: Configuration) : request.OptionsWithUri {
		let localVarPath = configuration.getApiBaseUrl() + "/words/{name}/{nodePath}/formfields/{index}"
			.replace("/{" + "name" + "}", (this.name !== null && this.name !== undefined) ? "/" + String(this.name) : "")
			.replace("/{" + "index" + "}", (this.index !== null && this.index !== undefined) ? "/" + String(this.index) : "")
			.replace("/{" + "nodePath" + "}", (this.nodePath !== null && this.nodePath !== undefined) ? "/" + String(this.nodePath) : "")
			.replace("//", "/");
		const queryParameters: any = {};
		// verify required parameter 'name' is not undefined
		if (this.name === undefined) {
		    throw new Error('Required parameter "name" was undefined when calling getFormField.');
		}

		// verify required parameter 'name' is not null
		if (this.name === null) {
		    throw new Error('Required parameter "name" was null when calling getFormField.');
		}

		// verify required parameter 'index' is not undefined
		if (this.index === undefined) {
		    throw new Error('Required parameter "index" was undefined when calling getFormField.');
		}

		// verify required parameter 'index' is not null
		if (this.index === null) {
		    throw new Error('Required parameter "index" was null when calling getFormField.');
		}

		localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "folder", this.folder);
		localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "storage", this.storage);
		localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "loadEncoding", this.loadEncoding);
		localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "password", this.password);

		const requestOptions: request.Options = {
			method: "GET",
			qs: queryParameters,
			uri: localVarPath,
			json: true,
		};

		return requestOptions;
	}

	/**
	 * get response type name
	 */
	getReturnType() : string {
		return "FormFieldResponse";
	}
}

/**
 * Request model for GetFormFields operation.
 * Gets form fields from document.
 */
export class GetFormFieldsRequest implements RequestInterface {
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

    public constructor(init?: Partial< GetFormFieldsRequest >) {
        Object.assign(this, init);
    }

	/**
	 * create the requst options for this request
	 * @param configuration a configuration for the request
	 */
	createRequestOptions(configuration: Configuration) : request.OptionsWithUri {
		let localVarPath = configuration.getApiBaseUrl() + "/words/{name}/{nodePath}/formfields"
			.replace("/{" + "name" + "}", (this.name !== null && this.name !== undefined) ? "/" + String(this.name) : "")
			.replace("/{" + "nodePath" + "}", (this.nodePath !== null && this.nodePath !== undefined) ? "/" + String(this.nodePath) : "")
			.replace("//", "/");
		const queryParameters: any = {};
		// verify required parameter 'name' is not undefined
		if (this.name === undefined) {
		    throw new Error('Required parameter "name" was undefined when calling getFormFields.');
		}

		// verify required parameter 'name' is not null
		if (this.name === null) {
		    throw new Error('Required parameter "name" was null when calling getFormFields.');
		}

		localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "folder", this.folder);
		localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "storage", this.storage);
		localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "loadEncoding", this.loadEncoding);
		localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "password", this.password);

		const requestOptions: request.Options = {
			method: "GET",
			qs: queryParameters,
			uri: localVarPath,
			json: true,
		};

		return requestOptions;
	}

	/**
	 * get response type name
	 */
	getReturnType() : string {
		return "FormFieldsResponse";
	}
}

/**
 * Request model for GetHeaderFooter operation.
 * Returns a header/footer from the document by index.
 */
export class GetHeaderFooterRequest implements RequestInterface {
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

    public constructor(init?: Partial< GetHeaderFooterRequest >) {
        Object.assign(this, init);
    }

	/**
	 * create the requst options for this request
	 * @param configuration a configuration for the request
	 */
	createRequestOptions(configuration: Configuration) : request.OptionsWithUri {
		let localVarPath = configuration.getApiBaseUrl() + "/words/{name}/headersfooters/{headerFooterIndex}"
			.replace("/{" + "name" + "}", (this.name !== null && this.name !== undefined) ? "/" + String(this.name) : "")
			.replace("/{" + "headerFooterIndex" + "}", (this.headerFooterIndex !== null && this.headerFooterIndex !== undefined) ? "/" + String(this.headerFooterIndex) : "")
			.replace("//", "/");
		const queryParameters: any = {};
		// verify required parameter 'name' is not undefined
		if (this.name === undefined) {
		    throw new Error('Required parameter "name" was undefined when calling getHeaderFooter.');
		}

		// verify required parameter 'name' is not null
		if (this.name === null) {
		    throw new Error('Required parameter "name" was null when calling getHeaderFooter.');
		}

		// verify required parameter 'headerFooterIndex' is not undefined
		if (this.headerFooterIndex === undefined) {
		    throw new Error('Required parameter "headerFooterIndex" was undefined when calling getHeaderFooter.');
		}

		// verify required parameter 'headerFooterIndex' is not null
		if (this.headerFooterIndex === null) {
		    throw new Error('Required parameter "headerFooterIndex" was null when calling getHeaderFooter.');
		}

		localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "folder", this.folder);
		localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "storage", this.storage);
		localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "loadEncoding", this.loadEncoding);
		localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "password", this.password);
		localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "filterByType", this.filterByType);

		const requestOptions: request.Options = {
			method: "GET",
			qs: queryParameters,
			uri: localVarPath,
			json: true,
		};

		return requestOptions;
	}

	/**
	 * get response type name
	 */
	getReturnType() : string {
		return "HeaderFooterResponse";
	}
}

/**
 * Request model for GetHeaderFooterOfSection operation.
 * Returns a header/footer from the document section.
 */
export class GetHeaderFooterOfSectionRequest implements RequestInterface {
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

    public constructor(init?: Partial< GetHeaderFooterOfSectionRequest >) {
        Object.assign(this, init);
    }

	/**
	 * create the requst options for this request
	 * @param configuration a configuration for the request
	 */
	createRequestOptions(configuration: Configuration) : request.OptionsWithUri {
		let localVarPath = configuration.getApiBaseUrl() + "/words/{name}/sections/{sectionIndex}/headersfooters/{headerFooterIndex}"
			.replace("/{" + "name" + "}", (this.name !== null && this.name !== undefined) ? "/" + String(this.name) : "")
			.replace("/{" + "headerFooterIndex" + "}", (this.headerFooterIndex !== null && this.headerFooterIndex !== undefined) ? "/" + String(this.headerFooterIndex) : "")
			.replace("/{" + "sectionIndex" + "}", (this.sectionIndex !== null && this.sectionIndex !== undefined) ? "/" + String(this.sectionIndex) : "")
			.replace("//", "/");
		const queryParameters: any = {};
		// verify required parameter 'name' is not undefined
		if (this.name === undefined) {
		    throw new Error('Required parameter "name" was undefined when calling getHeaderFooterOfSection.');
		}

		// verify required parameter 'name' is not null
		if (this.name === null) {
		    throw new Error('Required parameter "name" was null when calling getHeaderFooterOfSection.');
		}

		// verify required parameter 'headerFooterIndex' is not undefined
		if (this.headerFooterIndex === undefined) {
		    throw new Error('Required parameter "headerFooterIndex" was undefined when calling getHeaderFooterOfSection.');
		}

		// verify required parameter 'headerFooterIndex' is not null
		if (this.headerFooterIndex === null) {
		    throw new Error('Required parameter "headerFooterIndex" was null when calling getHeaderFooterOfSection.');
		}

		// verify required parameter 'sectionIndex' is not undefined
		if (this.sectionIndex === undefined) {
		    throw new Error('Required parameter "sectionIndex" was undefined when calling getHeaderFooterOfSection.');
		}

		// verify required parameter 'sectionIndex' is not null
		if (this.sectionIndex === null) {
		    throw new Error('Required parameter "sectionIndex" was null when calling getHeaderFooterOfSection.');
		}

		localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "folder", this.folder);
		localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "storage", this.storage);
		localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "loadEncoding", this.loadEncoding);
		localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "password", this.password);
		localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "filterByType", this.filterByType);

		const requestOptions: request.Options = {
			method: "GET",
			qs: queryParameters,
			uri: localVarPath,
			json: true,
		};

		return requestOptions;
	}

	/**
	 * get response type name
	 */
	getReturnType() : string {
		return "HeaderFooterResponse";
	}
}

/**
 * Request model for GetHeaderFooters operation.
 * Returns a list of header/footers from the document.
 */
export class GetHeaderFootersRequest implements RequestInterface {
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

    public constructor(init?: Partial< GetHeaderFootersRequest >) {
        Object.assign(this, init);
    }

	/**
	 * create the requst options for this request
	 * @param configuration a configuration for the request
	 */
	createRequestOptions(configuration: Configuration) : request.OptionsWithUri {
		let localVarPath = configuration.getApiBaseUrl() + "/words/{name}/{sectionPath}/headersfooters"
			.replace("/{" + "name" + "}", (this.name !== null && this.name !== undefined) ? "/" + String(this.name) : "")
			.replace("/{" + "sectionPath" + "}", (this.sectionPath !== null && this.sectionPath !== undefined) ? "/" + String(this.sectionPath) : "")
			.replace("//", "/");
		const queryParameters: any = {};
		// verify required parameter 'name' is not undefined
		if (this.name === undefined) {
		    throw new Error('Required parameter "name" was undefined when calling getHeaderFooters.');
		}

		// verify required parameter 'name' is not null
		if (this.name === null) {
		    throw new Error('Required parameter "name" was null when calling getHeaderFooters.');
		}

		// verify required parameter 'sectionPath' is not undefined
		if (this.sectionPath === undefined) {
		    throw new Error('Required parameter "sectionPath" was undefined when calling getHeaderFooters.');
		}

		localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "folder", this.folder);
		localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "storage", this.storage);
		localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "loadEncoding", this.loadEncoding);
		localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "password", this.password);
		localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "filterByType", this.filterByType);

		const requestOptions: request.Options = {
			method: "GET",
			qs: queryParameters,
			uri: localVarPath,
			json: true,
		};

		return requestOptions;
	}

	/**
	 * get response type name
	 */
	getReturnType() : string {
		return "HeaderFootersResponse";
	}
}

/**
 * Request model for GetList operation.
 * This resource represents one of the lists contained in the document.
 */
export class GetListRequest implements RequestInterface {
    /**
     * The document name.
     */
    public name: string;

    /**
     * List unique identifier.
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

	/**
	 * create the requst options for this request
	 * @param configuration a configuration for the request
	 */
	createRequestOptions(configuration: Configuration) : request.OptionsWithUri {
		let localVarPath = configuration.getApiBaseUrl() + "/words/{name}/lists/{listId}"
			.replace("/{" + "name" + "}", (this.name !== null && this.name !== undefined) ? "/" + String(this.name) : "")
			.replace("/{" + "listId" + "}", (this.listId !== null && this.listId !== undefined) ? "/" + String(this.listId) : "")
			.replace("//", "/");
		const queryParameters: any = {};
		// verify required parameter 'name' is not undefined
		if (this.name === undefined) {
		    throw new Error('Required parameter "name" was undefined when calling getList.');
		}

		// verify required parameter 'name' is not null
		if (this.name === null) {
		    throw new Error('Required parameter "name" was null when calling getList.');
		}

		// verify required parameter 'listId' is not undefined
		if (this.listId === undefined) {
		    throw new Error('Required parameter "listId" was undefined when calling getList.');
		}

		// verify required parameter 'listId' is not null
		if (this.listId === null) {
		    throw new Error('Required parameter "listId" was null when calling getList.');
		}

		localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "folder", this.folder);
		localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "storage", this.storage);
		localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "loadEncoding", this.loadEncoding);
		localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "password", this.password);

		const requestOptions: request.Options = {
			method: "GET",
			qs: queryParameters,
			uri: localVarPath,
			json: true,
		};

		return requestOptions;
	}

	/**
	 * get response type name
	 */
	getReturnType() : string {
		return "ListResponse";
	}
}

/**
 * Request model for GetLists operation.
 * Returns a list of lists that are contained in the document.
 */
export class GetListsRequest implements RequestInterface {
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

    public constructor(init?: Partial< GetListsRequest >) {
        Object.assign(this, init);
    }

	/**
	 * create the requst options for this request
	 * @param configuration a configuration for the request
	 */
	createRequestOptions(configuration: Configuration) : request.OptionsWithUri {
		let localVarPath = configuration.getApiBaseUrl() + "/words/{name}/lists"
			.replace("/{" + "name" + "}", (this.name !== null && this.name !== undefined) ? "/" + String(this.name) : "")
			.replace("//", "/");
		const queryParameters: any = {};
		// verify required parameter 'name' is not undefined
		if (this.name === undefined) {
		    throw new Error('Required parameter "name" was undefined when calling getLists.');
		}

		// verify required parameter 'name' is not null
		if (this.name === null) {
		    throw new Error('Required parameter "name" was null when calling getLists.');
		}

		localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "folder", this.folder);
		localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "storage", this.storage);
		localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "loadEncoding", this.loadEncoding);
		localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "password", this.password);

		const requestOptions: request.Options = {
			method: "GET",
			qs: queryParameters,
			uri: localVarPath,
			json: true,
		};

		return requestOptions;
	}

	/**
	 * get response type name
	 */
	getReturnType() : string {
		return "ListsResponse";
	}
}

/**
 * Request model for GetOfficeMathObject operation.
 * Reads OfficeMath object by index.
 */
export class GetOfficeMathObjectRequest implements RequestInterface {
    /**
     * The document name.
     */
    public name: string;

    /**
     * Object index.
     */
    public index: number;

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

    public constructor(init?: Partial< GetOfficeMathObjectRequest >) {
        Object.assign(this, init);
    }

	/**
	 * create the requst options for this request
	 * @param configuration a configuration for the request
	 */
	createRequestOptions(configuration: Configuration) : request.OptionsWithUri {
		let localVarPath = configuration.getApiBaseUrl() + "/words/{name}/{nodePath}/OfficeMathObjects/{index}"
			.replace("/{" + "name" + "}", (this.name !== null && this.name !== undefined) ? "/" + String(this.name) : "")
			.replace("/{" + "index" + "}", (this.index !== null && this.index !== undefined) ? "/" + String(this.index) : "")
			.replace("/{" + "nodePath" + "}", (this.nodePath !== null && this.nodePath !== undefined) ? "/" + String(this.nodePath) : "")
			.replace("//", "/");
		const queryParameters: any = {};
		// verify required parameter 'name' is not undefined
		if (this.name === undefined) {
		    throw new Error('Required parameter "name" was undefined when calling getOfficeMathObject.');
		}

		// verify required parameter 'name' is not null
		if (this.name === null) {
		    throw new Error('Required parameter "name" was null when calling getOfficeMathObject.');
		}

		// verify required parameter 'index' is not undefined
		if (this.index === undefined) {
		    throw new Error('Required parameter "index" was undefined when calling getOfficeMathObject.');
		}

		// verify required parameter 'index' is not null
		if (this.index === null) {
		    throw new Error('Required parameter "index" was null when calling getOfficeMathObject.');
		}

		localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "folder", this.folder);
		localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "storage", this.storage);
		localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "loadEncoding", this.loadEncoding);
		localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "password", this.password);

		const requestOptions: request.Options = {
			method: "GET",
			qs: queryParameters,
			uri: localVarPath,
			json: true,
		};

		return requestOptions;
	}

	/**
	 * get response type name
	 */
	getReturnType() : string {
		return "OfficeMathObjectResponse";
	}
}

/**
 * Request model for GetOfficeMathObjects operation.
 * Gets OfficeMath objects from document.
 */
export class GetOfficeMathObjectsRequest implements RequestInterface {
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

    public constructor(init?: Partial< GetOfficeMathObjectsRequest >) {
        Object.assign(this, init);
    }

	/**
	 * create the requst options for this request
	 * @param configuration a configuration for the request
	 */
	createRequestOptions(configuration: Configuration) : request.OptionsWithUri {
		let localVarPath = configuration.getApiBaseUrl() + "/words/{name}/{nodePath}/OfficeMathObjects"
			.replace("/{" + "name" + "}", (this.name !== null && this.name !== undefined) ? "/" + String(this.name) : "")
			.replace("/{" + "nodePath" + "}", (this.nodePath !== null && this.nodePath !== undefined) ? "/" + String(this.nodePath) : "")
			.replace("//", "/");
		const queryParameters: any = {};
		// verify required parameter 'name' is not undefined
		if (this.name === undefined) {
		    throw new Error('Required parameter "name" was undefined when calling getOfficeMathObjects.');
		}

		// verify required parameter 'name' is not null
		if (this.name === null) {
		    throw new Error('Required parameter "name" was null when calling getOfficeMathObjects.');
		}

		localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "folder", this.folder);
		localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "storage", this.storage);
		localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "loadEncoding", this.loadEncoding);
		localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "password", this.password);

		const requestOptions: request.Options = {
			method: "GET",
			qs: queryParameters,
			uri: localVarPath,
			json: true,
		};

		return requestOptions;
	}

	/**
	 * get response type name
	 */
	getReturnType() : string {
		return "OfficeMathObjectsResponse";
	}
}

/**
 * Request model for GetParagraph operation.
 * This resource represents one of the paragraphs contained in the document.
 */
export class GetParagraphRequest implements RequestInterface {
    /**
     * The document name.
     */
    public name: string;

    /**
     * Object index.
     */
    public index: number;

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

    public constructor(init?: Partial< GetParagraphRequest >) {
        Object.assign(this, init);
    }

	/**
	 * create the requst options for this request
	 * @param configuration a configuration for the request
	 */
	createRequestOptions(configuration: Configuration) : request.OptionsWithUri {
		let localVarPath = configuration.getApiBaseUrl() + "/words/{name}/{nodePath}/paragraphs/{index}"
			.replace("/{" + "name" + "}", (this.name !== null && this.name !== undefined) ? "/" + String(this.name) : "")
			.replace("/{" + "index" + "}", (this.index !== null && this.index !== undefined) ? "/" + String(this.index) : "")
			.replace("/{" + "nodePath" + "}", (this.nodePath !== null && this.nodePath !== undefined) ? "/" + String(this.nodePath) : "")
			.replace("//", "/");
		const queryParameters: any = {};
		// verify required parameter 'name' is not undefined
		if (this.name === undefined) {
		    throw new Error('Required parameter "name" was undefined when calling getParagraph.');
		}

		// verify required parameter 'name' is not null
		if (this.name === null) {
		    throw new Error('Required parameter "name" was null when calling getParagraph.');
		}

		// verify required parameter 'index' is not undefined
		if (this.index === undefined) {
		    throw new Error('Required parameter "index" was undefined when calling getParagraph.');
		}

		// verify required parameter 'index' is not null
		if (this.index === null) {
		    throw new Error('Required parameter "index" was null when calling getParagraph.');
		}

		localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "folder", this.folder);
		localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "storage", this.storage);
		localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "loadEncoding", this.loadEncoding);
		localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "password", this.password);

		const requestOptions: request.Options = {
			method: "GET",
			qs: queryParameters,
			uri: localVarPath,
			json: true,
		};

		return requestOptions;
	}

	/**
	 * get response type name
	 */
	getReturnType() : string {
		return "ParagraphResponse";
	}
}

/**
 * Request model for GetParagraphFormat operation.
 * Represents all the formatting for a paragraph.
 */
export class GetParagraphFormatRequest implements RequestInterface {
    /**
     * The document name.
     */
    public name: string;

    /**
     * Object index.
     */
    public index: number;

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

    public constructor(init?: Partial< GetParagraphFormatRequest >) {
        Object.assign(this, init);
    }

	/**
	 * create the requst options for this request
	 * @param configuration a configuration for the request
	 */
	createRequestOptions(configuration: Configuration) : request.OptionsWithUri {
		let localVarPath = configuration.getApiBaseUrl() + "/words/{name}/{nodePath}/paragraphs/{index}/format"
			.replace("/{" + "name" + "}", (this.name !== null && this.name !== undefined) ? "/" + String(this.name) : "")
			.replace("/{" + "index" + "}", (this.index !== null && this.index !== undefined) ? "/" + String(this.index) : "")
			.replace("/{" + "nodePath" + "}", (this.nodePath !== null && this.nodePath !== undefined) ? "/" + String(this.nodePath) : "")
			.replace("//", "/");
		const queryParameters: any = {};
		// verify required parameter 'name' is not undefined
		if (this.name === undefined) {
		    throw new Error('Required parameter "name" was undefined when calling getParagraphFormat.');
		}

		// verify required parameter 'name' is not null
		if (this.name === null) {
		    throw new Error('Required parameter "name" was null when calling getParagraphFormat.');
		}

		// verify required parameter 'index' is not undefined
		if (this.index === undefined) {
		    throw new Error('Required parameter "index" was undefined when calling getParagraphFormat.');
		}

		// verify required parameter 'index' is not null
		if (this.index === null) {
		    throw new Error('Required parameter "index" was null when calling getParagraphFormat.');
		}

		localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "folder", this.folder);
		localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "storage", this.storage);
		localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "loadEncoding", this.loadEncoding);
		localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "password", this.password);

		const requestOptions: request.Options = {
			method: "GET",
			qs: queryParameters,
			uri: localVarPath,
			json: true,
		};

		return requestOptions;
	}

	/**
	 * get response type name
	 */
	getReturnType() : string {
		return "ParagraphFormatResponse";
	}
}

/**
 * Request model for GetParagraphListFormat operation.
 * Represents list format for a paragraph.
 */
export class GetParagraphListFormatRequest implements RequestInterface {
    /**
     * The document name.
     */
    public name: string;

    /**
     * Object index.
     */
    public index: number;

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

    public constructor(init?: Partial< GetParagraphListFormatRequest >) {
        Object.assign(this, init);
    }

	/**
	 * create the requst options for this request
	 * @param configuration a configuration for the request
	 */
	createRequestOptions(configuration: Configuration) : request.OptionsWithUri {
		let localVarPath = configuration.getApiBaseUrl() + "/words/{name}/{nodePath}/paragraphs/{index}/listFormat"
			.replace("/{" + "name" + "}", (this.name !== null && this.name !== undefined) ? "/" + String(this.name) : "")
			.replace("/{" + "index" + "}", (this.index !== null && this.index !== undefined) ? "/" + String(this.index) : "")
			.replace("/{" + "nodePath" + "}", (this.nodePath !== null && this.nodePath !== undefined) ? "/" + String(this.nodePath) : "")
			.replace("//", "/");
		const queryParameters: any = {};
		// verify required parameter 'name' is not undefined
		if (this.name === undefined) {
		    throw new Error('Required parameter "name" was undefined when calling getParagraphListFormat.');
		}

		// verify required parameter 'name' is not null
		if (this.name === null) {
		    throw new Error('Required parameter "name" was null when calling getParagraphListFormat.');
		}

		// verify required parameter 'index' is not undefined
		if (this.index === undefined) {
		    throw new Error('Required parameter "index" was undefined when calling getParagraphListFormat.');
		}

		// verify required parameter 'index' is not null
		if (this.index === null) {
		    throw new Error('Required parameter "index" was null when calling getParagraphListFormat.');
		}

		localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "folder", this.folder);
		localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "storage", this.storage);
		localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "loadEncoding", this.loadEncoding);
		localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "password", this.password);

		const requestOptions: request.Options = {
			method: "GET",
			qs: queryParameters,
			uri: localVarPath,
			json: true,
		};

		return requestOptions;
	}

	/**
	 * get response type name
	 */
	getReturnType() : string {
		return "ParagraphListFormatResponse";
	}
}

/**
 * Request model for GetParagraphs operation.
 * Returns a list of paragraphs that are contained in the document.
 */
export class GetParagraphsRequest implements RequestInterface {
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

    public constructor(init?: Partial< GetParagraphsRequest >) {
        Object.assign(this, init);
    }

	/**
	 * create the requst options for this request
	 * @param configuration a configuration for the request
	 */
	createRequestOptions(configuration: Configuration) : request.OptionsWithUri {
		let localVarPath = configuration.getApiBaseUrl() + "/words/{name}/{nodePath}/paragraphs"
			.replace("/{" + "name" + "}", (this.name !== null && this.name !== undefined) ? "/" + String(this.name) : "")
			.replace("/{" + "nodePath" + "}", (this.nodePath !== null && this.nodePath !== undefined) ? "/" + String(this.nodePath) : "")
			.replace("//", "/");
		const queryParameters: any = {};
		// verify required parameter 'name' is not undefined
		if (this.name === undefined) {
		    throw new Error('Required parameter "name" was undefined when calling getParagraphs.');
		}

		// verify required parameter 'name' is not null
		if (this.name === null) {
		    throw new Error('Required parameter "name" was null when calling getParagraphs.');
		}

		localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "folder", this.folder);
		localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "storage", this.storage);
		localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "loadEncoding", this.loadEncoding);
		localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "password", this.password);

		const requestOptions: request.Options = {
			method: "GET",
			qs: queryParameters,
			uri: localVarPath,
			json: true,
		};

		return requestOptions;
	}

	/**
	 * get response type name
	 */
	getReturnType() : string {
		return "ParagraphLinkCollectionResponse";
	}
}

/**
 * Request model for GetParagraphTabStops operation.
 * Get all tab stops for the paragraph.
 */
export class GetParagraphTabStopsRequest implements RequestInterface {
    /**
     * The document name.
     */
    public name: string;

    /**
     * Object index.
     */
    public index: number;

    /**
     * Path to the node which contains paragraph.
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

	/**
	 * create the requst options for this request
	 * @param configuration a configuration for the request
	 */
	createRequestOptions(configuration: Configuration) : request.OptionsWithUri {
		let localVarPath = configuration.getApiBaseUrl() + "/words/{name}/{nodePath}/paragraphs/{index}/tabstops"
			.replace("/{" + "name" + "}", (this.name !== null && this.name !== undefined) ? "/" + String(this.name) : "")
			.replace("/{" + "index" + "}", (this.index !== null && this.index !== undefined) ? "/" + String(this.index) : "")
			.replace("/{" + "nodePath" + "}", (this.nodePath !== null && this.nodePath !== undefined) ? "/" + String(this.nodePath) : "")
			.replace("//", "/");
		const queryParameters: any = {};
		// verify required parameter 'name' is not undefined
		if (this.name === undefined) {
		    throw new Error('Required parameter "name" was undefined when calling getParagraphTabStops.');
		}

		// verify required parameter 'name' is not null
		if (this.name === null) {
		    throw new Error('Required parameter "name" was null when calling getParagraphTabStops.');
		}

		// verify required parameter 'index' is not undefined
		if (this.index === undefined) {
		    throw new Error('Required parameter "index" was undefined when calling getParagraphTabStops.');
		}

		// verify required parameter 'index' is not null
		if (this.index === null) {
		    throw new Error('Required parameter "index" was null when calling getParagraphTabStops.');
		}

		localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "folder", this.folder);
		localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "storage", this.storage);
		localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "loadEncoding", this.loadEncoding);
		localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "password", this.password);

		const requestOptions: request.Options = {
			method: "GET",
			qs: queryParameters,
			uri: localVarPath,
			json: true,
		};

		return requestOptions;
	}

	/**
	 * get response type name
	 */
	getReturnType() : string {
		return "TabStopsResponse";
	}
}

/**
 * Request model for GetRangeText operation.
 * Gets the text from the range.
 */
export class GetRangeTextRequest implements RequestInterface {
    /**
     * The document.
     */
    public name: string;

    /**
     * The range start identifier.
     * Identifier is the value of the "nodeId" field, which every document node has, extended with the prefix "id".
     * It looks like "id0.0.7". Also values like "image5" and "table3" can be used as an identifier for images and tables, where the number is an index of the image/table.
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

	/**
	 * create the requst options for this request
	 * @param configuration a configuration for the request
	 */
	createRequestOptions(configuration: Configuration) : request.OptionsWithUri {
		let localVarPath = configuration.getApiBaseUrl() + "/words/{name}/range/{rangeStartIdentifier}/{rangeEndIdentifier}"
			.replace("/{" + "name" + "}", (this.name !== null && this.name !== undefined) ? "/" + String(this.name) : "")
			.replace("/{" + "rangeStartIdentifier" + "}", (this.rangeStartIdentifier !== null && this.rangeStartIdentifier !== undefined) ? "/" + String(this.rangeStartIdentifier) : "")
			.replace("/{" + "rangeEndIdentifier" + "}", (this.rangeEndIdentifier !== null && this.rangeEndIdentifier !== undefined) ? "/" + String(this.rangeEndIdentifier) : "")
			.replace("//", "/");
		const queryParameters: any = {};
		// verify required parameter 'name' is not undefined
		if (this.name === undefined) {
		    throw new Error('Required parameter "name" was undefined when calling getRangeText.');
		}

		// verify required parameter 'name' is not null
		if (this.name === null) {
		    throw new Error('Required parameter "name" was null when calling getRangeText.');
		}

		// verify required parameter 'rangeStartIdentifier' is not undefined
		if (this.rangeStartIdentifier === undefined) {
		    throw new Error('Required parameter "rangeStartIdentifier" was undefined when calling getRangeText.');
		}

		// verify required parameter 'rangeStartIdentifier' is not null
		if (this.rangeStartIdentifier === null) {
		    throw new Error('Required parameter "rangeStartIdentifier" was null when calling getRangeText.');
		}

		localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "folder", this.folder);
		localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "storage", this.storage);
		localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "loadEncoding", this.loadEncoding);
		localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "password", this.password);

		const requestOptions: request.Options = {
			method: "GET",
			qs: queryParameters,
			uri: localVarPath,
			json: true,
		};

		return requestOptions;
	}

	/**
	 * get response type name
	 */
	getReturnType() : string {
		return "RangeTextResponse";
	}
}

/**
 * Request model for GetRun operation.
 * This resource represents run of text contained in the document.
 */
export class GetRunRequest implements RequestInterface {
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

    public constructor(init?: Partial< GetRunRequest >) {
        Object.assign(this, init);
    }

	/**
	 * create the requst options for this request
	 * @param configuration a configuration for the request
	 */
	createRequestOptions(configuration: Configuration) : request.OptionsWithUri {
		let localVarPath = configuration.getApiBaseUrl() + "/words/{name}/{paragraphPath}/runs/{index}"
			.replace("/{" + "name" + "}", (this.name !== null && this.name !== undefined) ? "/" + String(this.name) : "")
			.replace("/{" + "paragraphPath" + "}", (this.paragraphPath !== null && this.paragraphPath !== undefined) ? "/" + String(this.paragraphPath) : "")
			.replace("/{" + "index" + "}", (this.index !== null && this.index !== undefined) ? "/" + String(this.index) : "")
			.replace("//", "/");
		const queryParameters: any = {};
		// verify required parameter 'name' is not undefined
		if (this.name === undefined) {
		    throw new Error('Required parameter "name" was undefined when calling getRun.');
		}

		// verify required parameter 'name' is not null
		if (this.name === null) {
		    throw new Error('Required parameter "name" was null when calling getRun.');
		}

		// verify required parameter 'paragraphPath' is not undefined
		if (this.paragraphPath === undefined) {
		    throw new Error('Required parameter "paragraphPath" was undefined when calling getRun.');
		}

		// verify required parameter 'index' is not undefined
		if (this.index === undefined) {
		    throw new Error('Required parameter "index" was undefined when calling getRun.');
		}

		// verify required parameter 'index' is not null
		if (this.index === null) {
		    throw new Error('Required parameter "index" was null when calling getRun.');
		}

		localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "folder", this.folder);
		localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "storage", this.storage);
		localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "loadEncoding", this.loadEncoding);
		localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "password", this.password);

		const requestOptions: request.Options = {
			method: "GET",
			qs: queryParameters,
			uri: localVarPath,
			json: true,
		};

		return requestOptions;
	}

	/**
	 * get response type name
	 */
	getReturnType() : string {
		return "RunResponse";
	}
}

/**
 * Request model for GetRunFont operation.
 * This resource represents font of run.
 */
export class GetRunFontRequest implements RequestInterface {
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

    public constructor(init?: Partial< GetRunFontRequest >) {
        Object.assign(this, init);
    }

	/**
	 * create the requst options for this request
	 * @param configuration a configuration for the request
	 */
	createRequestOptions(configuration: Configuration) : request.OptionsWithUri {
		let localVarPath = configuration.getApiBaseUrl() + "/words/{name}/{paragraphPath}/runs/{index}/font"
			.replace("/{" + "name" + "}", (this.name !== null && this.name !== undefined) ? "/" + String(this.name) : "")
			.replace("/{" + "paragraphPath" + "}", (this.paragraphPath !== null && this.paragraphPath !== undefined) ? "/" + String(this.paragraphPath) : "")
			.replace("/{" + "index" + "}", (this.index !== null && this.index !== undefined) ? "/" + String(this.index) : "")
			.replace("//", "/");
		const queryParameters: any = {};
		// verify required parameter 'name' is not undefined
		if (this.name === undefined) {
		    throw new Error('Required parameter "name" was undefined when calling getRunFont.');
		}

		// verify required parameter 'name' is not null
		if (this.name === null) {
		    throw new Error('Required parameter "name" was null when calling getRunFont.');
		}

		// verify required parameter 'paragraphPath' is not undefined
		if (this.paragraphPath === undefined) {
		    throw new Error('Required parameter "paragraphPath" was undefined when calling getRunFont.');
		}

		// verify required parameter 'index' is not undefined
		if (this.index === undefined) {
		    throw new Error('Required parameter "index" was undefined when calling getRunFont.');
		}

		// verify required parameter 'index' is not null
		if (this.index === null) {
		    throw new Error('Required parameter "index" was null when calling getRunFont.');
		}

		localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "folder", this.folder);
		localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "storage", this.storage);
		localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "loadEncoding", this.loadEncoding);
		localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "password", this.password);

		const requestOptions: request.Options = {
			method: "GET",
			qs: queryParameters,
			uri: localVarPath,
			json: true,
		};

		return requestOptions;
	}

	/**
	 * get response type name
	 */
	getReturnType() : string {
		return "FontResponse";
	}
}

/**
 * Request model for GetRuns operation.
 * This resource represents collection of runs in the paragraph.
 */
export class GetRunsRequest implements RequestInterface {
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

    public constructor(init?: Partial< GetRunsRequest >) {
        Object.assign(this, init);
    }

	/**
	 * create the requst options for this request
	 * @param configuration a configuration for the request
	 */
	createRequestOptions(configuration: Configuration) : request.OptionsWithUri {
		let localVarPath = configuration.getApiBaseUrl() + "/words/{name}/{paragraphPath}/runs"
			.replace("/{" + "name" + "}", (this.name !== null && this.name !== undefined) ? "/" + String(this.name) : "")
			.replace("/{" + "paragraphPath" + "}", (this.paragraphPath !== null && this.paragraphPath !== undefined) ? "/" + String(this.paragraphPath) : "")
			.replace("//", "/");
		const queryParameters: any = {};
		// verify required parameter 'name' is not undefined
		if (this.name === undefined) {
		    throw new Error('Required parameter "name" was undefined when calling getRuns.');
		}

		// verify required parameter 'name' is not null
		if (this.name === null) {
		    throw new Error('Required parameter "name" was null when calling getRuns.');
		}

		// verify required parameter 'paragraphPath' is not undefined
		if (this.paragraphPath === undefined) {
		    throw new Error('Required parameter "paragraphPath" was undefined when calling getRuns.');
		}

		localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "folder", this.folder);
		localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "storage", this.storage);
		localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "loadEncoding", this.loadEncoding);
		localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "password", this.password);

		const requestOptions: request.Options = {
			method: "GET",
			qs: queryParameters,
			uri: localVarPath,
			json: true,
		};

		return requestOptions;
	}

	/**
	 * get response type name
	 */
	getReturnType() : string {
		return "RunsResponse";
	}
}

/**
 * Request model for GetSection operation.
 * Gets document section by index.
 */
export class GetSectionRequest implements RequestInterface {
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

    public constructor(init?: Partial< GetSectionRequest >) {
        Object.assign(this, init);
    }

	/**
	 * create the requst options for this request
	 * @param configuration a configuration for the request
	 */
	createRequestOptions(configuration: Configuration) : request.OptionsWithUri {
		let localVarPath = configuration.getApiBaseUrl() + "/words/{name}/sections/{sectionIndex}"
			.replace("/{" + "name" + "}", (this.name !== null && this.name !== undefined) ? "/" + String(this.name) : "")
			.replace("/{" + "sectionIndex" + "}", (this.sectionIndex !== null && this.sectionIndex !== undefined) ? "/" + String(this.sectionIndex) : "")
			.replace("//", "/");
		const queryParameters: any = {};
		// verify required parameter 'name' is not undefined
		if (this.name === undefined) {
		    throw new Error('Required parameter "name" was undefined when calling getSection.');
		}

		// verify required parameter 'name' is not null
		if (this.name === null) {
		    throw new Error('Required parameter "name" was null when calling getSection.');
		}

		// verify required parameter 'sectionIndex' is not undefined
		if (this.sectionIndex === undefined) {
		    throw new Error('Required parameter "sectionIndex" was undefined when calling getSection.');
		}

		// verify required parameter 'sectionIndex' is not null
		if (this.sectionIndex === null) {
		    throw new Error('Required parameter "sectionIndex" was null when calling getSection.');
		}

		localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "folder", this.folder);
		localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "storage", this.storage);
		localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "loadEncoding", this.loadEncoding);
		localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "password", this.password);

		const requestOptions: request.Options = {
			method: "GET",
			qs: queryParameters,
			uri: localVarPath,
			json: true,
		};

		return requestOptions;
	}

	/**
	 * get response type name
	 */
	getReturnType() : string {
		return "SectionResponse";
	}
}

/**
 * Request model for GetSectionPageSetup operation.
 * Gets page setup of section.
 */
export class GetSectionPageSetupRequest implements RequestInterface {
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

    public constructor(init?: Partial< GetSectionPageSetupRequest >) {
        Object.assign(this, init);
    }

	/**
	 * create the requst options for this request
	 * @param configuration a configuration for the request
	 */
	createRequestOptions(configuration: Configuration) : request.OptionsWithUri {
		let localVarPath = configuration.getApiBaseUrl() + "/words/{name}/sections/{sectionIndex}/pageSetup"
			.replace("/{" + "name" + "}", (this.name !== null && this.name !== undefined) ? "/" + String(this.name) : "")
			.replace("/{" + "sectionIndex" + "}", (this.sectionIndex !== null && this.sectionIndex !== undefined) ? "/" + String(this.sectionIndex) : "")
			.replace("//", "/");
		const queryParameters: any = {};
		// verify required parameter 'name' is not undefined
		if (this.name === undefined) {
		    throw new Error('Required parameter "name" was undefined when calling getSectionPageSetup.');
		}

		// verify required parameter 'name' is not null
		if (this.name === null) {
		    throw new Error('Required parameter "name" was null when calling getSectionPageSetup.');
		}

		// verify required parameter 'sectionIndex' is not undefined
		if (this.sectionIndex === undefined) {
		    throw new Error('Required parameter "sectionIndex" was undefined when calling getSectionPageSetup.');
		}

		// verify required parameter 'sectionIndex' is not null
		if (this.sectionIndex === null) {
		    throw new Error('Required parameter "sectionIndex" was null when calling getSectionPageSetup.');
		}

		localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "folder", this.folder);
		localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "storage", this.storage);
		localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "loadEncoding", this.loadEncoding);
		localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "password", this.password);

		const requestOptions: request.Options = {
			method: "GET",
			qs: queryParameters,
			uri: localVarPath,
			json: true,
		};

		return requestOptions;
	}

	/**
	 * get response type name
	 */
	getReturnType() : string {
		return "SectionPageSetupResponse";
	}
}

/**
 * Request model for GetSections operation.
 * Returns a list of sections that are contained in the document.
 */
export class GetSectionsRequest implements RequestInterface {
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

    public constructor(init?: Partial< GetSectionsRequest >) {
        Object.assign(this, init);
    }

	/**
	 * create the requst options for this request
	 * @param configuration a configuration for the request
	 */
	createRequestOptions(configuration: Configuration) : request.OptionsWithUri {
		let localVarPath = configuration.getApiBaseUrl() + "/words/{name}/sections"
			.replace("/{" + "name" + "}", (this.name !== null && this.name !== undefined) ? "/" + String(this.name) : "")
			.replace("//", "/");
		const queryParameters: any = {};
		// verify required parameter 'name' is not undefined
		if (this.name === undefined) {
		    throw new Error('Required parameter "name" was undefined when calling getSections.');
		}

		// verify required parameter 'name' is not null
		if (this.name === null) {
		    throw new Error('Required parameter "name" was null when calling getSections.');
		}

		localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "folder", this.folder);
		localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "storage", this.storage);
		localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "loadEncoding", this.loadEncoding);
		localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "password", this.password);

		const requestOptions: request.Options = {
			method: "GET",
			qs: queryParameters,
			uri: localVarPath,
			json: true,
		};

		return requestOptions;
	}

	/**
	 * get response type name
	 */
	getReturnType() : string {
		return "SectionLinkCollectionResponse";
	}
}

/**
 * Request model for GetStyle operation.
 * This resource represents one of the styles contained in the document.
 */
export class GetStyleRequest implements RequestInterface {
    /**
     * The document name.
     */
    public name: string;

    /**
     * Style name.
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

	/**
	 * create the requst options for this request
	 * @param configuration a configuration for the request
	 */
	createRequestOptions(configuration: Configuration) : request.OptionsWithUri {
		let localVarPath = configuration.getApiBaseUrl() + "/words/{name}/styles/{styleName}"
			.replace("/{" + "name" + "}", (this.name !== null && this.name !== undefined) ? "/" + String(this.name) : "")
			.replace("/{" + "styleName" + "}", (this.styleName !== null && this.styleName !== undefined) ? "/" + String(this.styleName) : "")
			.replace("//", "/");
		const queryParameters: any = {};
		// verify required parameter 'name' is not undefined
		if (this.name === undefined) {
		    throw new Error('Required parameter "name" was undefined when calling getStyle.');
		}

		// verify required parameter 'name' is not null
		if (this.name === null) {
		    throw new Error('Required parameter "name" was null when calling getStyle.');
		}

		// verify required parameter 'styleName' is not undefined
		if (this.styleName === undefined) {
		    throw new Error('Required parameter "styleName" was undefined when calling getStyle.');
		}

		// verify required parameter 'styleName' is not null
		if (this.styleName === null) {
		    throw new Error('Required parameter "styleName" was null when calling getStyle.');
		}

		localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "folder", this.folder);
		localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "storage", this.storage);
		localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "loadEncoding", this.loadEncoding);
		localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "password", this.password);

		const requestOptions: request.Options = {
			method: "GET",
			qs: queryParameters,
			uri: localVarPath,
			json: true,
		};

		return requestOptions;
	}

	/**
	 * get response type name
	 */
	getReturnType() : string {
		return "StyleResponse";
	}
}

/**
 * Request model for GetStyleFromDocumentElement operation.
 * Gets a style from the document node.
 */
export class GetStyleFromDocumentElementRequest implements RequestInterface {
    /**
     * The document name.
     */
    public name: string;

    /**
     * The path to the node that supports a style. Supported node types: ParagraphFormat, List, ListLevel, Table.
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

	/**
	 * create the requst options for this request
	 * @param configuration a configuration for the request
	 */
	createRequestOptions(configuration: Configuration) : request.OptionsWithUri {
		let localVarPath = configuration.getApiBaseUrl() + "/words/{name}/{styledNodePath}/style"
			.replace("/{" + "name" + "}", (this.name !== null && this.name !== undefined) ? "/" + String(this.name) : "")
			.replace("/{" + "styledNodePath" + "}", (this.styledNodePath !== null && this.styledNodePath !== undefined) ? "/" + String(this.styledNodePath) : "")
			.replace("//", "/");
		const queryParameters: any = {};
		// verify required parameter 'name' is not undefined
		if (this.name === undefined) {
		    throw new Error('Required parameter "name" was undefined when calling getStyleFromDocumentElement.');
		}

		// verify required parameter 'name' is not null
		if (this.name === null) {
		    throw new Error('Required parameter "name" was null when calling getStyleFromDocumentElement.');
		}

		// verify required parameter 'styledNodePath' is not undefined
		if (this.styledNodePath === undefined) {
		    throw new Error('Required parameter "styledNodePath" was undefined when calling getStyleFromDocumentElement.');
		}

		// verify required parameter 'styledNodePath' is not null
		if (this.styledNodePath === null) {
		    throw new Error('Required parameter "styledNodePath" was null when calling getStyleFromDocumentElement.');
		}

		localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "folder", this.folder);
		localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "storage", this.storage);
		localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "loadEncoding", this.loadEncoding);
		localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "password", this.password);

		const requestOptions: request.Options = {
			method: "GET",
			qs: queryParameters,
			uri: localVarPath,
			json: true,
		};

		return requestOptions;
	}

	/**
	 * get response type name
	 */
	getReturnType() : string {
		return "StyleResponse";
	}
}

/**
 * Request model for GetStyles operation.
 * Returns a list of styles contained in the document.
 */
export class GetStylesRequest implements RequestInterface {
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

    public constructor(init?: Partial< GetStylesRequest >) {
        Object.assign(this, init);
    }

	/**
	 * create the requst options for this request
	 * @param configuration a configuration for the request
	 */
	createRequestOptions(configuration: Configuration) : request.OptionsWithUri {
		let localVarPath = configuration.getApiBaseUrl() + "/words/{name}/styles"
			.replace("/{" + "name" + "}", (this.name !== null && this.name !== undefined) ? "/" + String(this.name) : "")
			.replace("//", "/");
		const queryParameters: any = {};
		// verify required parameter 'name' is not undefined
		if (this.name === undefined) {
		    throw new Error('Required parameter "name" was undefined when calling getStyles.');
		}

		// verify required parameter 'name' is not null
		if (this.name === null) {
		    throw new Error('Required parameter "name" was null when calling getStyles.');
		}

		localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "folder", this.folder);
		localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "storage", this.storage);
		localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "loadEncoding", this.loadEncoding);
		localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "password", this.password);

		const requestOptions: request.Options = {
			method: "GET",
			qs: queryParameters,
			uri: localVarPath,
			json: true,
		};

		return requestOptions;
	}

	/**
	 * get response type name
	 */
	getReturnType() : string {
		return "StylesResponse";
	}
}

/**
 * Request model for GetTable operation.
 * Returns a table.
 */
export class GetTableRequest implements RequestInterface {
    /**
     * The document name.
     */
    public name: string;

    /**
     * Object index.
     */
    public index: number;

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

    public constructor(init?: Partial< GetTableRequest >) {
        Object.assign(this, init);
    }

	/**
	 * create the requst options for this request
	 * @param configuration a configuration for the request
	 */
	createRequestOptions(configuration: Configuration) : request.OptionsWithUri {
		let localVarPath = configuration.getApiBaseUrl() + "/words/{name}/{nodePath}/tables/{index}"
			.replace("/{" + "name" + "}", (this.name !== null && this.name !== undefined) ? "/" + String(this.name) : "")
			.replace("/{" + "index" + "}", (this.index !== null && this.index !== undefined) ? "/" + String(this.index) : "")
			.replace("/{" + "nodePath" + "}", (this.nodePath !== null && this.nodePath !== undefined) ? "/" + String(this.nodePath) : "")
			.replace("//", "/");
		const queryParameters: any = {};
		// verify required parameter 'name' is not undefined
		if (this.name === undefined) {
		    throw new Error('Required parameter "name" was undefined when calling getTable.');
		}

		// verify required parameter 'name' is not null
		if (this.name === null) {
		    throw new Error('Required parameter "name" was null when calling getTable.');
		}

		// verify required parameter 'index' is not undefined
		if (this.index === undefined) {
		    throw new Error('Required parameter "index" was undefined when calling getTable.');
		}

		// verify required parameter 'index' is not null
		if (this.index === null) {
		    throw new Error('Required parameter "index" was null when calling getTable.');
		}

		localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "folder", this.folder);
		localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "storage", this.storage);
		localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "loadEncoding", this.loadEncoding);
		localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "password", this.password);

		const requestOptions: request.Options = {
			method: "GET",
			qs: queryParameters,
			uri: localVarPath,
			json: true,
		};

		return requestOptions;
	}

	/**
	 * get response type name
	 */
	getReturnType() : string {
		return "TableResponse";
	}
}

/**
 * Request model for GetTableCell operation.
 * Returns a table cell.
 */
export class GetTableCellRequest implements RequestInterface {
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

    public constructor(init?: Partial< GetTableCellRequest >) {
        Object.assign(this, init);
    }

	/**
	 * create the requst options for this request
	 * @param configuration a configuration for the request
	 */
	createRequestOptions(configuration: Configuration) : request.OptionsWithUri {
		let localVarPath = configuration.getApiBaseUrl() + "/words/{name}/{tableRowPath}/cells/{index}"
			.replace("/{" + "name" + "}", (this.name !== null && this.name !== undefined) ? "/" + String(this.name) : "")
			.replace("/{" + "tableRowPath" + "}", (this.tableRowPath !== null && this.tableRowPath !== undefined) ? "/" + String(this.tableRowPath) : "")
			.replace("/{" + "index" + "}", (this.index !== null && this.index !== undefined) ? "/" + String(this.index) : "")
			.replace("//", "/");
		const queryParameters: any = {};
		// verify required parameter 'name' is not undefined
		if (this.name === undefined) {
		    throw new Error('Required parameter "name" was undefined when calling getTableCell.');
		}

		// verify required parameter 'name' is not null
		if (this.name === null) {
		    throw new Error('Required parameter "name" was null when calling getTableCell.');
		}

		// verify required parameter 'tableRowPath' is not undefined
		if (this.tableRowPath === undefined) {
		    throw new Error('Required parameter "tableRowPath" was undefined when calling getTableCell.');
		}

		// verify required parameter 'index' is not undefined
		if (this.index === undefined) {
		    throw new Error('Required parameter "index" was undefined when calling getTableCell.');
		}

		// verify required parameter 'index' is not null
		if (this.index === null) {
		    throw new Error('Required parameter "index" was null when calling getTableCell.');
		}

		localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "folder", this.folder);
		localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "storage", this.storage);
		localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "loadEncoding", this.loadEncoding);
		localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "password", this.password);

		const requestOptions: request.Options = {
			method: "GET",
			qs: queryParameters,
			uri: localVarPath,
			json: true,
		};

		return requestOptions;
	}

	/**
	 * get response type name
	 */
	getReturnType() : string {
		return "TableCellResponse";
	}
}

/**
 * Request model for GetTableCellFormat operation.
 * Returns a table cell format.
 */
export class GetTableCellFormatRequest implements RequestInterface {
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

    public constructor(init?: Partial< GetTableCellFormatRequest >) {
        Object.assign(this, init);
    }

	/**
	 * create the requst options for this request
	 * @param configuration a configuration for the request
	 */
	createRequestOptions(configuration: Configuration) : request.OptionsWithUri {
		let localVarPath = configuration.getApiBaseUrl() + "/words/{name}/{tableRowPath}/cells/{index}/cellformat"
			.replace("/{" + "name" + "}", (this.name !== null && this.name !== undefined) ? "/" + String(this.name) : "")
			.replace("/{" + "tableRowPath" + "}", (this.tableRowPath !== null && this.tableRowPath !== undefined) ? "/" + String(this.tableRowPath) : "")
			.replace("/{" + "index" + "}", (this.index !== null && this.index !== undefined) ? "/" + String(this.index) : "")
			.replace("//", "/");
		const queryParameters: any = {};
		// verify required parameter 'name' is not undefined
		if (this.name === undefined) {
		    throw new Error('Required parameter "name" was undefined when calling getTableCellFormat.');
		}

		// verify required parameter 'name' is not null
		if (this.name === null) {
		    throw new Error('Required parameter "name" was null when calling getTableCellFormat.');
		}

		// verify required parameter 'tableRowPath' is not undefined
		if (this.tableRowPath === undefined) {
		    throw new Error('Required parameter "tableRowPath" was undefined when calling getTableCellFormat.');
		}

		// verify required parameter 'index' is not undefined
		if (this.index === undefined) {
		    throw new Error('Required parameter "index" was undefined when calling getTableCellFormat.');
		}

		// verify required parameter 'index' is not null
		if (this.index === null) {
		    throw new Error('Required parameter "index" was null when calling getTableCellFormat.');
		}

		localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "folder", this.folder);
		localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "storage", this.storage);
		localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "loadEncoding", this.loadEncoding);
		localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "password", this.password);

		const requestOptions: request.Options = {
			method: "GET",
			qs: queryParameters,
			uri: localVarPath,
			json: true,
		};

		return requestOptions;
	}

	/**
	 * get response type name
	 */
	getReturnType() : string {
		return "TableCellFormatResponse";
	}
}

/**
 * Request model for GetTableProperties operation.
 * Returns a table properties.
 */
export class GetTablePropertiesRequest implements RequestInterface {
    /**
     * The document name.
     */
    public name: string;

    /**
     * Object index.
     */
    public index: number;

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

    public constructor(init?: Partial< GetTablePropertiesRequest >) {
        Object.assign(this, init);
    }

	/**
	 * create the requst options for this request
	 * @param configuration a configuration for the request
	 */
	createRequestOptions(configuration: Configuration) : request.OptionsWithUri {
		let localVarPath = configuration.getApiBaseUrl() + "/words/{name}/{nodePath}/tables/{index}/properties"
			.replace("/{" + "name" + "}", (this.name !== null && this.name !== undefined) ? "/" + String(this.name) : "")
			.replace("/{" + "index" + "}", (this.index !== null && this.index !== undefined) ? "/" + String(this.index) : "")
			.replace("/{" + "nodePath" + "}", (this.nodePath !== null && this.nodePath !== undefined) ? "/" + String(this.nodePath) : "")
			.replace("//", "/");
		const queryParameters: any = {};
		// verify required parameter 'name' is not undefined
		if (this.name === undefined) {
		    throw new Error('Required parameter "name" was undefined when calling getTableProperties.');
		}

		// verify required parameter 'name' is not null
		if (this.name === null) {
		    throw new Error('Required parameter "name" was null when calling getTableProperties.');
		}

		// verify required parameter 'index' is not undefined
		if (this.index === undefined) {
		    throw new Error('Required parameter "index" was undefined when calling getTableProperties.');
		}

		// verify required parameter 'index' is not null
		if (this.index === null) {
		    throw new Error('Required parameter "index" was null when calling getTableProperties.');
		}

		localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "folder", this.folder);
		localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "storage", this.storage);
		localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "loadEncoding", this.loadEncoding);
		localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "password", this.password);

		const requestOptions: request.Options = {
			method: "GET",
			qs: queryParameters,
			uri: localVarPath,
			json: true,
		};

		return requestOptions;
	}

	/**
	 * get response type name
	 */
	getReturnType() : string {
		return "TablePropertiesResponse";
	}
}

/**
 * Request model for GetTableRow operation.
 * Returns a table row.
 */
export class GetTableRowRequest implements RequestInterface {
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

    public constructor(init?: Partial< GetTableRowRequest >) {
        Object.assign(this, init);
    }

	/**
	 * create the requst options for this request
	 * @param configuration a configuration for the request
	 */
	createRequestOptions(configuration: Configuration) : request.OptionsWithUri {
		let localVarPath = configuration.getApiBaseUrl() + "/words/{name}/{tablePath}/rows/{index}"
			.replace("/{" + "name" + "}", (this.name !== null && this.name !== undefined) ? "/" + String(this.name) : "")
			.replace("/{" + "tablePath" + "}", (this.tablePath !== null && this.tablePath !== undefined) ? "/" + String(this.tablePath) : "")
			.replace("/{" + "index" + "}", (this.index !== null && this.index !== undefined) ? "/" + String(this.index) : "")
			.replace("//", "/");
		const queryParameters: any = {};
		// verify required parameter 'name' is not undefined
		if (this.name === undefined) {
		    throw new Error('Required parameter "name" was undefined when calling getTableRow.');
		}

		// verify required parameter 'name' is not null
		if (this.name === null) {
		    throw new Error('Required parameter "name" was null when calling getTableRow.');
		}

		// verify required parameter 'tablePath' is not undefined
		if (this.tablePath === undefined) {
		    throw new Error('Required parameter "tablePath" was undefined when calling getTableRow.');
		}

		// verify required parameter 'index' is not undefined
		if (this.index === undefined) {
		    throw new Error('Required parameter "index" was undefined when calling getTableRow.');
		}

		// verify required parameter 'index' is not null
		if (this.index === null) {
		    throw new Error('Required parameter "index" was null when calling getTableRow.');
		}

		localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "folder", this.folder);
		localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "storage", this.storage);
		localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "loadEncoding", this.loadEncoding);
		localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "password", this.password);

		const requestOptions: request.Options = {
			method: "GET",
			qs: queryParameters,
			uri: localVarPath,
			json: true,
		};

		return requestOptions;
	}

	/**
	 * get response type name
	 */
	getReturnType() : string {
		return "TableRowResponse";
	}
}

/**
 * Request model for GetTableRowFormat operation.
 * Returns a table row format.
 */
export class GetTableRowFormatRequest implements RequestInterface {
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

    public constructor(init?: Partial< GetTableRowFormatRequest >) {
        Object.assign(this, init);
    }

	/**
	 * create the requst options for this request
	 * @param configuration a configuration for the request
	 */
	createRequestOptions(configuration: Configuration) : request.OptionsWithUri {
		let localVarPath = configuration.getApiBaseUrl() + "/words/{name}/{tablePath}/rows/{index}/rowformat"
			.replace("/{" + "name" + "}", (this.name !== null && this.name !== undefined) ? "/" + String(this.name) : "")
			.replace("/{" + "tablePath" + "}", (this.tablePath !== null && this.tablePath !== undefined) ? "/" + String(this.tablePath) : "")
			.replace("/{" + "index" + "}", (this.index !== null && this.index !== undefined) ? "/" + String(this.index) : "")
			.replace("//", "/");
		const queryParameters: any = {};
		// verify required parameter 'name' is not undefined
		if (this.name === undefined) {
		    throw new Error('Required parameter "name" was undefined when calling getTableRowFormat.');
		}

		// verify required parameter 'name' is not null
		if (this.name === null) {
		    throw new Error('Required parameter "name" was null when calling getTableRowFormat.');
		}

		// verify required parameter 'tablePath' is not undefined
		if (this.tablePath === undefined) {
		    throw new Error('Required parameter "tablePath" was undefined when calling getTableRowFormat.');
		}

		// verify required parameter 'index' is not undefined
		if (this.index === undefined) {
		    throw new Error('Required parameter "index" was undefined when calling getTableRowFormat.');
		}

		// verify required parameter 'index' is not null
		if (this.index === null) {
		    throw new Error('Required parameter "index" was null when calling getTableRowFormat.');
		}

		localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "folder", this.folder);
		localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "storage", this.storage);
		localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "loadEncoding", this.loadEncoding);
		localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "password", this.password);

		const requestOptions: request.Options = {
			method: "GET",
			qs: queryParameters,
			uri: localVarPath,
			json: true,
		};

		return requestOptions;
	}

	/**
	 * get response type name
	 */
	getReturnType() : string {
		return "TableRowFormatResponse";
	}
}

/**
 * Request model for GetTables operation.
 * Returns a list of tables that are contained in the document.
 */
export class GetTablesRequest implements RequestInterface {
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

    public constructor(init?: Partial< GetTablesRequest >) {
        Object.assign(this, init);
    }

	/**
	 * create the requst options for this request
	 * @param configuration a configuration for the request
	 */
	createRequestOptions(configuration: Configuration) : request.OptionsWithUri {
		let localVarPath = configuration.getApiBaseUrl() + "/words/{name}/{nodePath}/tables"
			.replace("/{" + "name" + "}", (this.name !== null && this.name !== undefined) ? "/" + String(this.name) : "")
			.replace("/{" + "nodePath" + "}", (this.nodePath !== null && this.nodePath !== undefined) ? "/" + String(this.nodePath) : "")
			.replace("//", "/");
		const queryParameters: any = {};
		// verify required parameter 'name' is not undefined
		if (this.name === undefined) {
		    throw new Error('Required parameter "name" was undefined when calling getTables.');
		}

		// verify required parameter 'name' is not null
		if (this.name === null) {
		    throw new Error('Required parameter "name" was null when calling getTables.');
		}

		localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "folder", this.folder);
		localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "storage", this.storage);
		localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "loadEncoding", this.loadEncoding);
		localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "password", this.password);

		const requestOptions: request.Options = {
			method: "GET",
			qs: queryParameters,
			uri: localVarPath,
			json: true,
		};

		return requestOptions;
	}

	/**
	 * get response type name
	 */
	getReturnType() : string {
		return "TableLinkCollectionResponse";
	}
}

/**
 * Request model for InsertComment operation.
 * Adds comment to document, returns inserted comment data.
 */
export class InsertCommentRequest implements RequestInterface {
    /**
     * The document name.
     */
    public name: string;

    /**
     * The comment data.
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

	/**
	 * create the requst options for this request
	 * @param configuration a configuration for the request
	 */
	createRequestOptions(configuration: Configuration) : request.OptionsWithUri {
		let localVarPath = configuration.getApiBaseUrl() + "/words/{name}/comments"
			.replace("/{" + "name" + "}", (this.name !== null && this.name !== undefined) ? "/" + String(this.name) : "")
			.replace("//", "/");
		const queryParameters: any = {};
		// verify required parameter 'name' is not undefined
		if (this.name === undefined) {
		    throw new Error('Required parameter "name" was undefined when calling insertComment.');
		}

		// verify required parameter 'name' is not null
		if (this.name === null) {
		    throw new Error('Required parameter "name" was null when calling insertComment.');
		}

		// verify required parameter 'comment' is not undefined
		if (this.comment === undefined) {
		    throw new Error('Required parameter "comment" was undefined when calling insertComment.');
		}

		// verify required parameter 'comment' is not null
		if (this.comment === null) {
		    throw new Error('Required parameter "comment" was null when calling insertComment.');
		}

		localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "folder", this.folder);
		localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "storage", this.storage);
		localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "loadEncoding", this.loadEncoding);
		localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "password", this.password);
		localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "destFileName", this.destFileName);
		localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "revisionAuthor", this.revisionAuthor);
		localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "revisionDateTime", this.revisionDateTime);

		const requestOptions: request.Options = {
			method: "POST",
			qs: queryParameters,
			uri: localVarPath,
			json: true,
			body: ObjectSerializer.serialize(this.comment, this.comment.constructor.name === "Object" ? "importedCommentInsert.CommentInsert" : this.comment.constructor.name),
		};

		return requestOptions;
	}

	/**
	 * get response type name
	 */
	getReturnType() : string {
		return "CommentResponse";
	}
}

/**
 * Request model for InsertDrawingObject operation.
 * Adds drawing object to document, returns added  drawing object's data.
 */
export class InsertDrawingObjectRequest implements RequestInterface {
    /**
     * The document name.
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

    public constructor(init?: Partial< InsertDrawingObjectRequest >) {
        Object.assign(this, init);
    }

	/**
	 * create the requst options for this request
	 * @param configuration a configuration for the request
	 */
	createRequestOptions(configuration: Configuration) : request.OptionsWithUri {
		let localVarPath = configuration.getApiBaseUrl() + "/words/{name}/{nodePath}/drawingObjects"
			.replace("/{" + "name" + "}", (this.name !== null && this.name !== undefined) ? "/" + String(this.name) : "")
			.replace("/{" + "nodePath" + "}", (this.nodePath !== null && this.nodePath !== undefined) ? "/" + String(this.nodePath) : "")
			.replace("//", "/");
		const queryParameters: any = {};
		const formParams: any = {};
		// verify required parameter 'name' is not undefined
		if (this.name === undefined) {
		    throw new Error('Required parameter "name" was undefined when calling insertDrawingObject.');
		}

		// verify required parameter 'name' is not null
		if (this.name === null) {
		    throw new Error('Required parameter "name" was null when calling insertDrawingObject.');
		}

		// verify required parameter 'drawingObject' is not undefined
		if (this.drawingObject === undefined) {
		    throw new Error('Required parameter "drawingObject" was undefined when calling insertDrawingObject.');
		}

		// verify required parameter 'drawingObject' is not null
		if (this.drawingObject === null) {
		    throw new Error('Required parameter "drawingObject" was null when calling insertDrawingObject.');
		}

		// verify required parameter 'imageFile' is not undefined
		if (this.imageFile === undefined) {
		    throw new Error('Required parameter "imageFile" was undefined when calling insertDrawingObject.');
		}

		// verify required parameter 'imageFile' is not null
		if (this.imageFile === null) {
		    throw new Error('Required parameter "imageFile" was null when calling insertDrawingObject.');
		}

		localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "folder", this.folder);
		localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "storage", this.storage);
		localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "loadEncoding", this.loadEncoding);
		localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "password", this.password);
		localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "destFileName", this.destFileName);
		localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "revisionAuthor", this.revisionAuthor);
		localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "revisionDateTime", this.revisionDateTime);
		if (this.drawingObject !== undefined) {
		    formParams.DrawingObject = JSON.stringify(this.drawingObject);
		}
		if (this.imageFile !== undefined) {
		    formParams.ImageFile = this.imageFile;
		}

		const requestOptions: request.Options = {
			method: "POST",
			qs: queryParameters,
			uri: localVarPath,
			json: true,
		};

		if (Object.keys(formParams).length > 0) {
			requestOptions.formData = formParams;
		}
		return requestOptions;
	}

	/**
	 * get response type name
	 */
	getReturnType() : string {
		return "DrawingObjectResponse";
	}
}

/**
 * Request model for InsertField operation.
 * Adds field to document, returns inserted field's data.
 */
export class InsertFieldRequest implements RequestInterface {
    /**
     * The document name.
     */
    public name: string;

    /**
     * Field data.
     */
    public field: importedFieldInsert.FieldInsert;

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
     * Field will be inserted before node with id="nodeId".
     */
    public insertBeforeNode: string;

    public constructor(init?: Partial< InsertFieldRequest >) {
        Object.assign(this, init);
    }

	/**
	 * create the requst options for this request
	 * @param configuration a configuration for the request
	 */
	createRequestOptions(configuration: Configuration) : request.OptionsWithUri {
		let localVarPath = configuration.getApiBaseUrl() + "/words/{name}/{nodePath}/fields"
			.replace("/{" + "name" + "}", (this.name !== null && this.name !== undefined) ? "/" + String(this.name) : "")
			.replace("/{" + "nodePath" + "}", (this.nodePath !== null && this.nodePath !== undefined) ? "/" + String(this.nodePath) : "")
			.replace("//", "/");
		const queryParameters: any = {};
		// verify required parameter 'name' is not undefined
		if (this.name === undefined) {
		    throw new Error('Required parameter "name" was undefined when calling insertField.');
		}

		// verify required parameter 'name' is not null
		if (this.name === null) {
		    throw new Error('Required parameter "name" was null when calling insertField.');
		}

		// verify required parameter 'field' is not undefined
		if (this.field === undefined) {
		    throw new Error('Required parameter "field" was undefined when calling insertField.');
		}

		// verify required parameter 'field' is not null
		if (this.field === null) {
		    throw new Error('Required parameter "field" was null when calling insertField.');
		}

		localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "folder", this.folder);
		localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "storage", this.storage);
		localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "loadEncoding", this.loadEncoding);
		localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "password", this.password);
		localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "destFileName", this.destFileName);
		localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "revisionAuthor", this.revisionAuthor);
		localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "revisionDateTime", this.revisionDateTime);
		localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "insertBeforeNode", this.insertBeforeNode);

		const requestOptions: request.Options = {
			method: "POST",
			qs: queryParameters,
			uri: localVarPath,
			json: true,
			body: ObjectSerializer.serialize(this.field, this.field.constructor.name === "Object" ? "importedFieldInsert.FieldInsert" : this.field.constructor.name),
		};

		return requestOptions;
	}

	/**
	 * get response type name
	 */
	getReturnType() : string {
		return "FieldResponse";
	}
}

/**
 * Request model for InsertFootnote operation.
 * Adds footnote to document, returns added footnote's data.
 */
export class InsertFootnoteRequest implements RequestInterface {
    /**
     * The document name.
     */
    public name: string;

    /**
     * Footnote data.
     */
    public footnoteDto: importedFootnoteInsert.FootnoteInsert;

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

    public constructor(init?: Partial< InsertFootnoteRequest >) {
        Object.assign(this, init);
    }

	/**
	 * create the requst options for this request
	 * @param configuration a configuration for the request
	 */
	createRequestOptions(configuration: Configuration) : request.OptionsWithUri {
		let localVarPath = configuration.getApiBaseUrl() + "/words/{name}/{nodePath}/footnotes"
			.replace("/{" + "name" + "}", (this.name !== null && this.name !== undefined) ? "/" + String(this.name) : "")
			.replace("/{" + "nodePath" + "}", (this.nodePath !== null && this.nodePath !== undefined) ? "/" + String(this.nodePath) : "")
			.replace("//", "/");
		const queryParameters: any = {};
		// verify required parameter 'name' is not undefined
		if (this.name === undefined) {
		    throw new Error('Required parameter "name" was undefined when calling insertFootnote.');
		}

		// verify required parameter 'name' is not null
		if (this.name === null) {
		    throw new Error('Required parameter "name" was null when calling insertFootnote.');
		}

		// verify required parameter 'footnoteDto' is not undefined
		if (this.footnoteDto === undefined) {
		    throw new Error('Required parameter "footnoteDto" was undefined when calling insertFootnote.');
		}

		// verify required parameter 'footnoteDto' is not null
		if (this.footnoteDto === null) {
		    throw new Error('Required parameter "footnoteDto" was null when calling insertFootnote.');
		}

		localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "folder", this.folder);
		localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "storage", this.storage);
		localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "loadEncoding", this.loadEncoding);
		localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "password", this.password);
		localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "destFileName", this.destFileName);
		localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "revisionAuthor", this.revisionAuthor);
		localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "revisionDateTime", this.revisionDateTime);

		const requestOptions: request.Options = {
			method: "POST",
			qs: queryParameters,
			uri: localVarPath,
			json: true,
			body: ObjectSerializer.serialize(this.footnoteDto, this.footnoteDto.constructor.name === "Object" ? "importedFootnoteInsert.FootnoteInsert" : this.footnoteDto.constructor.name),
		};

		return requestOptions;
	}

	/**
	 * get response type name
	 */
	getReturnType() : string {
		return "FootnoteResponse";
	}
}

/**
 * Request model for InsertFormField operation.
 * Adds form field to paragraph, returns added form field's data.
 */
export class InsertFormFieldRequest implements RequestInterface {
    /**
     * The document name.
     */
    public name: string;

    /**
     * From field data.
     */
    public formField: importedFormField.FormField;

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

    public constructor(init?: Partial< InsertFormFieldRequest >) {
        Object.assign(this, init);
    }

	/**
	 * create the requst options for this request
	 * @param configuration a configuration for the request
	 */
	createRequestOptions(configuration: Configuration) : request.OptionsWithUri {
		let localVarPath = configuration.getApiBaseUrl() + "/words/{name}/{nodePath}/formfields"
			.replace("/{" + "name" + "}", (this.name !== null && this.name !== undefined) ? "/" + String(this.name) : "")
			.replace("/{" + "nodePath" + "}", (this.nodePath !== null && this.nodePath !== undefined) ? "/" + String(this.nodePath) : "")
			.replace("//", "/");
		const queryParameters: any = {};
		// verify required parameter 'name' is not undefined
		if (this.name === undefined) {
		    throw new Error('Required parameter "name" was undefined when calling insertFormField.');
		}

		// verify required parameter 'name' is not null
		if (this.name === null) {
		    throw new Error('Required parameter "name" was null when calling insertFormField.');
		}

		// verify required parameter 'formField' is not undefined
		if (this.formField === undefined) {
		    throw new Error('Required parameter "formField" was undefined when calling insertFormField.');
		}

		// verify required parameter 'formField' is not null
		if (this.formField === null) {
		    throw new Error('Required parameter "formField" was null when calling insertFormField.');
		}

		localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "folder", this.folder);
		localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "storage", this.storage);
		localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "loadEncoding", this.loadEncoding);
		localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "password", this.password);
		localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "destFileName", this.destFileName);
		localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "revisionAuthor", this.revisionAuthor);
		localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "revisionDateTime", this.revisionDateTime);
		localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "insertBeforeNode", this.insertBeforeNode);

		const requestOptions: request.Options = {
			method: "POST",
			qs: queryParameters,
			uri: localVarPath,
			json: true,
			body: ObjectSerializer.serialize(this.formField, this.formField.constructor.name === "Object" ? "importedFormField.FormField" : this.formField.constructor.name),
		};

		return requestOptions;
	}

	/**
	 * get response type name
	 */
	getReturnType() : string {
		return "FormFieldResponse";
	}
}

/**
 * Request model for InsertHeaderFooter operation.
 * Inserts to document header or footer.
 */
export class InsertHeaderFooterRequest implements RequestInterface {
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

    public constructor(init?: Partial< InsertHeaderFooterRequest >) {
        Object.assign(this, init);
    }

	/**
	 * create the requst options for this request
	 * @param configuration a configuration for the request
	 */
	createRequestOptions(configuration: Configuration) : request.OptionsWithUri {
		let localVarPath = configuration.getApiBaseUrl() + "/words/{name}/{sectionPath}/headersfooters"
			.replace("/{" + "name" + "}", (this.name !== null && this.name !== undefined) ? "/" + String(this.name) : "")
			.replace("/{" + "sectionPath" + "}", (this.sectionPath !== null && this.sectionPath !== undefined) ? "/" + String(this.sectionPath) : "")
			.replace("//", "/");
		const queryParameters: any = {};
		// verify required parameter 'name' is not undefined
		if (this.name === undefined) {
		    throw new Error('Required parameter "name" was undefined when calling insertHeaderFooter.');
		}

		// verify required parameter 'name' is not null
		if (this.name === null) {
		    throw new Error('Required parameter "name" was null when calling insertHeaderFooter.');
		}

		// verify required parameter 'headerFooterType' is not undefined
		if (this.headerFooterType === undefined) {
		    throw new Error('Required parameter "headerFooterType" was undefined when calling insertHeaderFooter.');
		}

		// verify required parameter 'headerFooterType' is not null
		if (this.headerFooterType === null) {
		    throw new Error('Required parameter "headerFooterType" was null when calling insertHeaderFooter.');
		}

		// verify required parameter 'sectionPath' is not undefined
		if (this.sectionPath === undefined) {
		    throw new Error('Required parameter "sectionPath" was undefined when calling insertHeaderFooter.');
		}

		localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "folder", this.folder);
		localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "storage", this.storage);
		localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "loadEncoding", this.loadEncoding);
		localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "password", this.password);
		localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "destFileName", this.destFileName);
		localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "revisionAuthor", this.revisionAuthor);
		localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "revisionDateTime", this.revisionDateTime);

		const requestOptions: request.Options = {
			method: "PUT",
			qs: queryParameters,
			uri: localVarPath,
			json: true,
			body: ObjectSerializer.serialize(this.headerFooterType, this.headerFooterType.constructor.name === "Object" ? "string" : this.headerFooterType.constructor.name),
		};

		return requestOptions;
	}

	/**
	 * get response type name
	 */
	getReturnType() : string {
		return "HeaderFooterResponse";
	}
}

/**
 * Request model for InsertList operation.
 * Adds list to document, returns added list's data.
 */
export class InsertListRequest implements RequestInterface {
    /**
     * The document name.
     */
    public name: string;

    /**
     * List to insert.
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

	/**
	 * create the requst options for this request
	 * @param configuration a configuration for the request
	 */
	createRequestOptions(configuration: Configuration) : request.OptionsWithUri {
		let localVarPath = configuration.getApiBaseUrl() + "/words/{name}/lists"
			.replace("/{" + "name" + "}", (this.name !== null && this.name !== undefined) ? "/" + String(this.name) : "")
			.replace("//", "/");
		const queryParameters: any = {};
		// verify required parameter 'name' is not undefined
		if (this.name === undefined) {
		    throw new Error('Required parameter "name" was undefined when calling insertList.');
		}

		// verify required parameter 'name' is not null
		if (this.name === null) {
		    throw new Error('Required parameter "name" was null when calling insertList.');
		}

		// verify required parameter 'listInsert' is not undefined
		if (this.listInsert === undefined) {
		    throw new Error('Required parameter "listInsert" was undefined when calling insertList.');
		}

		// verify required parameter 'listInsert' is not null
		if (this.listInsert === null) {
		    throw new Error('Required parameter "listInsert" was null when calling insertList.');
		}

		localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "folder", this.folder);
		localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "storage", this.storage);
		localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "loadEncoding", this.loadEncoding);
		localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "password", this.password);
		localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "destFileName", this.destFileName);
		localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "revisionAuthor", this.revisionAuthor);
		localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "revisionDateTime", this.revisionDateTime);

		const requestOptions: request.Options = {
			method: "POST",
			qs: queryParameters,
			uri: localVarPath,
			json: true,
			body: ObjectSerializer.serialize(this.listInsert, this.listInsert.constructor.name === "Object" ? "importedListInsert.ListInsert" : this.listInsert.constructor.name),
		};

		return requestOptions;
	}

	/**
	 * get response type name
	 */
	getReturnType() : string {
		return "ListResponse";
	}
}

/**
 * Request model for InsertOrUpdateParagraphTabStop operation.
 * Insert or resplace tab stop if a tab stop with the position exists.
 */
export class InsertOrUpdateParagraphTabStopRequest implements RequestInterface {
    /**
     * The document name.
     */
    public name: string;

    /**
     * Paragraph tab stop.
     */
    public dto: importedTabStopInsert.TabStopInsert;

    /**
     * Object index.
     */
    public index: number;

    /**
     * Path to the node which contains paragraph.
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

	/**
	 * create the requst options for this request
	 * @param configuration a configuration for the request
	 */
	createRequestOptions(configuration: Configuration) : request.OptionsWithUri {
		let localVarPath = configuration.getApiBaseUrl() + "/words/{name}/{nodePath}/paragraphs/{index}/tabstops"
			.replace("/{" + "name" + "}", (this.name !== null && this.name !== undefined) ? "/" + String(this.name) : "")
			.replace("/{" + "index" + "}", (this.index !== null && this.index !== undefined) ? "/" + String(this.index) : "")
			.replace("/{" + "nodePath" + "}", (this.nodePath !== null && this.nodePath !== undefined) ? "/" + String(this.nodePath) : "")
			.replace("//", "/");
		const queryParameters: any = {};
		// verify required parameter 'name' is not undefined
		if (this.name === undefined) {
		    throw new Error('Required parameter "name" was undefined when calling insertOrUpdateParagraphTabStop.');
		}

		// verify required parameter 'name' is not null
		if (this.name === null) {
		    throw new Error('Required parameter "name" was null when calling insertOrUpdateParagraphTabStop.');
		}

		// verify required parameter 'dto' is not undefined
		if (this.dto === undefined) {
		    throw new Error('Required parameter "dto" was undefined when calling insertOrUpdateParagraphTabStop.');
		}

		// verify required parameter 'dto' is not null
		if (this.dto === null) {
		    throw new Error('Required parameter "dto" was null when calling insertOrUpdateParagraphTabStop.');
		}

		// verify required parameter 'index' is not undefined
		if (this.index === undefined) {
		    throw new Error('Required parameter "index" was undefined when calling insertOrUpdateParagraphTabStop.');
		}

		// verify required parameter 'index' is not null
		if (this.index === null) {
		    throw new Error('Required parameter "index" was null when calling insertOrUpdateParagraphTabStop.');
		}

		localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "folder", this.folder);
		localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "storage", this.storage);
		localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "loadEncoding", this.loadEncoding);
		localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "password", this.password);
		localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "destFileName", this.destFileName);

		const requestOptions: request.Options = {
			method: "POST",
			qs: queryParameters,
			uri: localVarPath,
			json: true,
			body: ObjectSerializer.serialize(this.dto, this.dto.constructor.name === "Object" ? "importedTabStopInsert.TabStopInsert" : this.dto.constructor.name),
		};

		return requestOptions;
	}

	/**
	 * get response type name
	 */
	getReturnType() : string {
		return "TabStopsResponse";
	}
}

/**
 * Request model for InsertPageNumbers operation.
 * Inserts document page numbers.
 */
export class InsertPageNumbersRequest implements RequestInterface {
    /**
     * A document name.
     */
    public name: string;

    /**
     * PageNumber with the page numbers settings.
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

	/**
	 * create the requst options for this request
	 * @param configuration a configuration for the request
	 */
	createRequestOptions(configuration: Configuration) : request.OptionsWithUri {
		let localVarPath = configuration.getApiBaseUrl() + "/words/{name}/PageNumbers"
			.replace("/{" + "name" + "}", (this.name !== null && this.name !== undefined) ? "/" + String(this.name) : "")
			.replace("//", "/");
		const queryParameters: any = {};
		// verify required parameter 'name' is not undefined
		if (this.name === undefined) {
		    throw new Error('Required parameter "name" was undefined when calling insertPageNumbers.');
		}

		// verify required parameter 'name' is not null
		if (this.name === null) {
		    throw new Error('Required parameter "name" was null when calling insertPageNumbers.');
		}

		// verify required parameter 'pageNumber' is not undefined
		if (this.pageNumber === undefined) {
		    throw new Error('Required parameter "pageNumber" was undefined when calling insertPageNumbers.');
		}

		// verify required parameter 'pageNumber' is not null
		if (this.pageNumber === null) {
		    throw new Error('Required parameter "pageNumber" was null when calling insertPageNumbers.');
		}

		localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "folder", this.folder);
		localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "storage", this.storage);
		localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "loadEncoding", this.loadEncoding);
		localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "password", this.password);
		localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "destFileName", this.destFileName);
		localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "revisionAuthor", this.revisionAuthor);
		localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "revisionDateTime", this.revisionDateTime);

		const requestOptions: request.Options = {
			method: "PUT",
			qs: queryParameters,
			uri: localVarPath,
			json: true,
			body: ObjectSerializer.serialize(this.pageNumber, this.pageNumber.constructor.name === "Object" ? "importedPageNumber.PageNumber" : this.pageNumber.constructor.name),
		};

		return requestOptions;
	}

	/**
	 * get response type name
	 */
	getReturnType() : string {
		return "DocumentResponse";
	}
}

/**
 * Request model for InsertParagraph operation.
 * Adds paragraph to document, returns added paragraph's data.
 */
export class InsertParagraphRequest implements RequestInterface {
    /**
     * The document name.
     */
    public name: string;

    /**
     * Paragraph data.
     */
    public paragraph: importedParagraphInsert.ParagraphInsert;

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

    public constructor(init?: Partial< InsertParagraphRequest >) {
        Object.assign(this, init);
    }

	/**
	 * create the requst options for this request
	 * @param configuration a configuration for the request
	 */
	createRequestOptions(configuration: Configuration) : request.OptionsWithUri {
		let localVarPath = configuration.getApiBaseUrl() + "/words/{name}/{nodePath}/paragraphs"
			.replace("/{" + "name" + "}", (this.name !== null && this.name !== undefined) ? "/" + String(this.name) : "")
			.replace("/{" + "nodePath" + "}", (this.nodePath !== null && this.nodePath !== undefined) ? "/" + String(this.nodePath) : "")
			.replace("//", "/");
		const queryParameters: any = {};
		// verify required parameter 'name' is not undefined
		if (this.name === undefined) {
		    throw new Error('Required parameter "name" was undefined when calling insertParagraph.');
		}

		// verify required parameter 'name' is not null
		if (this.name === null) {
		    throw new Error('Required parameter "name" was null when calling insertParagraph.');
		}

		// verify required parameter 'paragraph' is not undefined
		if (this.paragraph === undefined) {
		    throw new Error('Required parameter "paragraph" was undefined when calling insertParagraph.');
		}

		// verify required parameter 'paragraph' is not null
		if (this.paragraph === null) {
		    throw new Error('Required parameter "paragraph" was null when calling insertParagraph.');
		}

		localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "folder", this.folder);
		localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "storage", this.storage);
		localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "loadEncoding", this.loadEncoding);
		localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "password", this.password);
		localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "destFileName", this.destFileName);
		localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "revisionAuthor", this.revisionAuthor);
		localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "revisionDateTime", this.revisionDateTime);
		localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "insertBeforeNode", this.insertBeforeNode);

		const requestOptions: request.Options = {
			method: "POST",
			qs: queryParameters,
			uri: localVarPath,
			json: true,
			body: ObjectSerializer.serialize(this.paragraph, this.paragraph.constructor.name === "Object" ? "importedParagraphInsert.ParagraphInsert" : this.paragraph.constructor.name),
		};

		return requestOptions;
	}

	/**
	 * get response type name
	 */
	getReturnType() : string {
		return "ParagraphResponse";
	}
}

/**
 * Request model for InsertRun operation.
 * Adds run to document, returns added paragraph's data.
 */
export class InsertRunRequest implements RequestInterface {
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
     * Paragraph will be inserted before node with index.
     */
    public insertBeforeNode: string;

    public constructor(init?: Partial< InsertRunRequest >) {
        Object.assign(this, init);
    }

	/**
	 * create the requst options for this request
	 * @param configuration a configuration for the request
	 */
	createRequestOptions(configuration: Configuration) : request.OptionsWithUri {
		let localVarPath = configuration.getApiBaseUrl() + "/words/{name}/{paragraphPath}/runs"
			.replace("/{" + "name" + "}", (this.name !== null && this.name !== undefined) ? "/" + String(this.name) : "")
			.replace("/{" + "paragraphPath" + "}", (this.paragraphPath !== null && this.paragraphPath !== undefined) ? "/" + String(this.paragraphPath) : "")
			.replace("//", "/");
		const queryParameters: any = {};
		// verify required parameter 'name' is not undefined
		if (this.name === undefined) {
		    throw new Error('Required parameter "name" was undefined when calling insertRun.');
		}

		// verify required parameter 'name' is not null
		if (this.name === null) {
		    throw new Error('Required parameter "name" was null when calling insertRun.');
		}

		// verify required parameter 'paragraphPath' is not undefined
		if (this.paragraphPath === undefined) {
		    throw new Error('Required parameter "paragraphPath" was undefined when calling insertRun.');
		}

		// verify required parameter 'run' is not undefined
		if (this.run === undefined) {
		    throw new Error('Required parameter "run" was undefined when calling insertRun.');
		}

		// verify required parameter 'run' is not null
		if (this.run === null) {
		    throw new Error('Required parameter "run" was null when calling insertRun.');
		}

		localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "folder", this.folder);
		localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "storage", this.storage);
		localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "loadEncoding", this.loadEncoding);
		localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "password", this.password);
		localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "destFileName", this.destFileName);
		localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "revisionAuthor", this.revisionAuthor);
		localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "revisionDateTime", this.revisionDateTime);
		localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "insertBeforeNode", this.insertBeforeNode);

		const requestOptions: request.Options = {
			method: "POST",
			qs: queryParameters,
			uri: localVarPath,
			json: true,
			body: ObjectSerializer.serialize(this.run, this.run.constructor.name === "Object" ? "importedRunInsert.RunInsert" : this.run.constructor.name),
		};

		return requestOptions;
	}

	/**
	 * get response type name
	 */
	getReturnType() : string {
		return "RunResponse";
	}
}

/**
 * Request model for InsertStyle operation.
 * Adds a style to the document, returns an added style.
 */
export class InsertStyleRequest implements RequestInterface {
    /**
     * The document name.
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

	/**
	 * create the requst options for this request
	 * @param configuration a configuration for the request
	 */
	createRequestOptions(configuration: Configuration) : request.OptionsWithUri {
		let localVarPath = configuration.getApiBaseUrl() + "/words/{name}/styles/insert"
			.replace("/{" + "name" + "}", (this.name !== null && this.name !== undefined) ? "/" + String(this.name) : "")
			.replace("//", "/");
		const queryParameters: any = {};
		// verify required parameter 'name' is not undefined
		if (this.name === undefined) {
		    throw new Error('Required parameter "name" was undefined when calling insertStyle.');
		}

		// verify required parameter 'name' is not null
		if (this.name === null) {
		    throw new Error('Required parameter "name" was null when calling insertStyle.');
		}

		// verify required parameter 'styleInsert' is not undefined
		if (this.styleInsert === undefined) {
		    throw new Error('Required parameter "styleInsert" was undefined when calling insertStyle.');
		}

		// verify required parameter 'styleInsert' is not null
		if (this.styleInsert === null) {
		    throw new Error('Required parameter "styleInsert" was null when calling insertStyle.');
		}

		localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "folder", this.folder);
		localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "storage", this.storage);
		localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "loadEncoding", this.loadEncoding);
		localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "password", this.password);
		localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "destFileName", this.destFileName);
		localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "revisionAuthor", this.revisionAuthor);
		localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "revisionDateTime", this.revisionDateTime);

		const requestOptions: request.Options = {
			method: "POST",
			qs: queryParameters,
			uri: localVarPath,
			json: true,
			body: ObjectSerializer.serialize(this.styleInsert, this.styleInsert.constructor.name === "Object" ? "importedStyleInsert.StyleInsert" : this.styleInsert.constructor.name),
		};

		return requestOptions;
	}

	/**
	 * get response type name
	 */
	getReturnType() : string {
		return "StyleResponse";
	}
}

/**
 * Request model for InsertTable operation.
 * Adds table to document, returns added table's data.
 */
export class InsertTableRequest implements RequestInterface {
    /**
     * The document name.
     */
    public name: string;

    /**
     * Table parameters/.
     */
    public table: importedTableInsert.TableInsert;

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

    public constructor(init?: Partial< InsertTableRequest >) {
        Object.assign(this, init);
    }

	/**
	 * create the requst options for this request
	 * @param configuration a configuration for the request
	 */
	createRequestOptions(configuration: Configuration) : request.OptionsWithUri {
		let localVarPath = configuration.getApiBaseUrl() + "/words/{name}/{nodePath}/tables"
			.replace("/{" + "name" + "}", (this.name !== null && this.name !== undefined) ? "/" + String(this.name) : "")
			.replace("/{" + "nodePath" + "}", (this.nodePath !== null && this.nodePath !== undefined) ? "/" + String(this.nodePath) : "")
			.replace("//", "/");
		const queryParameters: any = {};
		// verify required parameter 'name' is not undefined
		if (this.name === undefined) {
		    throw new Error('Required parameter "name" was undefined when calling insertTable.');
		}

		// verify required parameter 'name' is not null
		if (this.name === null) {
		    throw new Error('Required parameter "name" was null when calling insertTable.');
		}

		// verify required parameter 'table' is not undefined
		if (this.table === undefined) {
		    throw new Error('Required parameter "table" was undefined when calling insertTable.');
		}

		// verify required parameter 'table' is not null
		if (this.table === null) {
		    throw new Error('Required parameter "table" was null when calling insertTable.');
		}

		localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "folder", this.folder);
		localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "storage", this.storage);
		localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "loadEncoding", this.loadEncoding);
		localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "password", this.password);
		localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "destFileName", this.destFileName);
		localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "revisionAuthor", this.revisionAuthor);
		localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "revisionDateTime", this.revisionDateTime);

		const requestOptions: request.Options = {
			method: "POST",
			qs: queryParameters,
			uri: localVarPath,
			json: true,
			body: ObjectSerializer.serialize(this.table, this.table.constructor.name === "Object" ? "importedTableInsert.TableInsert" : this.table.constructor.name),
		};

		return requestOptions;
	}

	/**
	 * get response type name
	 */
	getReturnType() : string {
		return "TableResponse";
	}
}

/**
 * Request model for InsertTableCell operation.
 * Adds table cell to table, returns added cell's data.
 */
export class InsertTableCellRequest implements RequestInterface {
    /**
     * The document name.
     */
    public name: string;

    /**
     * Table cell parameters/.
     */
    public cell: importedTableCellInsert.TableCellInsert;

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

    public constructor(init?: Partial< InsertTableCellRequest >) {
        Object.assign(this, init);
    }

	/**
	 * create the requst options for this request
	 * @param configuration a configuration for the request
	 */
	createRequestOptions(configuration: Configuration) : request.OptionsWithUri {
		let localVarPath = configuration.getApiBaseUrl() + "/words/{name}/{tableRowPath}/cells"
			.replace("/{" + "name" + "}", (this.name !== null && this.name !== undefined) ? "/" + String(this.name) : "")
			.replace("/{" + "tableRowPath" + "}", (this.tableRowPath !== null && this.tableRowPath !== undefined) ? "/" + String(this.tableRowPath) : "")
			.replace("//", "/");
		const queryParameters: any = {};
		// verify required parameter 'name' is not undefined
		if (this.name === undefined) {
		    throw new Error('Required parameter "name" was undefined when calling insertTableCell.');
		}

		// verify required parameter 'name' is not null
		if (this.name === null) {
		    throw new Error('Required parameter "name" was null when calling insertTableCell.');
		}

		// verify required parameter 'cell' is not undefined
		if (this.cell === undefined) {
		    throw new Error('Required parameter "cell" was undefined when calling insertTableCell.');
		}

		// verify required parameter 'cell' is not null
		if (this.cell === null) {
		    throw new Error('Required parameter "cell" was null when calling insertTableCell.');
		}

		// verify required parameter 'tableRowPath' is not undefined
		if (this.tableRowPath === undefined) {
		    throw new Error('Required parameter "tableRowPath" was undefined when calling insertTableCell.');
		}

		localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "folder", this.folder);
		localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "storage", this.storage);
		localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "loadEncoding", this.loadEncoding);
		localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "password", this.password);
		localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "destFileName", this.destFileName);
		localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "revisionAuthor", this.revisionAuthor);
		localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "revisionDateTime", this.revisionDateTime);

		const requestOptions: request.Options = {
			method: "POST",
			qs: queryParameters,
			uri: localVarPath,
			json: true,
			body: ObjectSerializer.serialize(this.cell, this.cell.constructor.name === "Object" ? "importedTableCellInsert.TableCellInsert" : this.cell.constructor.name),
		};

		return requestOptions;
	}

	/**
	 * get response type name
	 */
	getReturnType() : string {
		return "TableCellResponse";
	}
}

/**
 * Request model for InsertTableRow operation.
 * Adds table row to table, returns added row's data.
 */
export class InsertTableRowRequest implements RequestInterface {
    /**
     * The document name.
     */
    public name: string;

    /**
     * Table row parameters/.
     */
    public row: importedTableRowInsert.TableRowInsert;

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

    public constructor(init?: Partial< InsertTableRowRequest >) {
        Object.assign(this, init);
    }

	/**
	 * create the requst options for this request
	 * @param configuration a configuration for the request
	 */
	createRequestOptions(configuration: Configuration) : request.OptionsWithUri {
		let localVarPath = configuration.getApiBaseUrl() + "/words/{name}/{tablePath}/rows"
			.replace("/{" + "name" + "}", (this.name !== null && this.name !== undefined) ? "/" + String(this.name) : "")
			.replace("/{" + "tablePath" + "}", (this.tablePath !== null && this.tablePath !== undefined) ? "/" + String(this.tablePath) : "")
			.replace("//", "/");
		const queryParameters: any = {};
		// verify required parameter 'name' is not undefined
		if (this.name === undefined) {
		    throw new Error('Required parameter "name" was undefined when calling insertTableRow.');
		}

		// verify required parameter 'name' is not null
		if (this.name === null) {
		    throw new Error('Required parameter "name" was null when calling insertTableRow.');
		}

		// verify required parameter 'row' is not undefined
		if (this.row === undefined) {
		    throw new Error('Required parameter "row" was undefined when calling insertTableRow.');
		}

		// verify required parameter 'row' is not null
		if (this.row === null) {
		    throw new Error('Required parameter "row" was null when calling insertTableRow.');
		}

		// verify required parameter 'tablePath' is not undefined
		if (this.tablePath === undefined) {
		    throw new Error('Required parameter "tablePath" was undefined when calling insertTableRow.');
		}

		localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "folder", this.folder);
		localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "storage", this.storage);
		localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "loadEncoding", this.loadEncoding);
		localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "password", this.password);
		localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "destFileName", this.destFileName);
		localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "revisionAuthor", this.revisionAuthor);
		localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "revisionDateTime", this.revisionDateTime);

		const requestOptions: request.Options = {
			method: "POST",
			qs: queryParameters,
			uri: localVarPath,
			json: true,
			body: ObjectSerializer.serialize(this.row, this.row.constructor.name === "Object" ? "importedTableRowInsert.TableRowInsert" : this.row.constructor.name),
		};

		return requestOptions;
	}

	/**
	 * get response type name
	 */
	getReturnType() : string {
		return "TableRowResponse";
	}
}

/**
 * Request model for InsertWatermarkImage operation.
 * Inserts document watermark image.
 */
export class InsertWatermarkImageRequest implements RequestInterface {
    /**
     * The document name.
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
     * The watermark rotation angle.
     */
    public rotationAngle: number;

    /**
     * The image file server full name. If the name is empty the image is expected in request content.
     */
    public image: string;

    public constructor(init?: Partial< InsertWatermarkImageRequest >) {
        Object.assign(this, init);
    }

	/**
	 * create the requst options for this request
	 * @param configuration a configuration for the request
	 */
	createRequestOptions(configuration: Configuration) : request.OptionsWithUri {
		let localVarPath = configuration.getApiBaseUrl() + "/words/{name}/watermarks/images"
			.replace("/{" + "name" + "}", (this.name !== null && this.name !== undefined) ? "/" + String(this.name) : "")
			.replace("//", "/");
		const queryParameters: any = {};
		const formParams: any = {};
		// verify required parameter 'name' is not undefined
		if (this.name === undefined) {
		    throw new Error('Required parameter "name" was undefined when calling insertWatermarkImage.');
		}

		// verify required parameter 'name' is not null
		if (this.name === null) {
		    throw new Error('Required parameter "name" was null when calling insertWatermarkImage.');
		}

		localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "folder", this.folder);
		localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "storage", this.storage);
		localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "loadEncoding", this.loadEncoding);
		localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "password", this.password);
		localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "destFileName", this.destFileName);
		localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "revisionAuthor", this.revisionAuthor);
		localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "revisionDateTime", this.revisionDateTime);
		localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "rotationAngle", this.rotationAngle);
		localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "image", this.image);
		if (this.imageFile !== undefined) {
		    formParams.ImageFile = this.imageFile;
		}

		const requestOptions: request.Options = {
			method: "POST",
			qs: queryParameters,
			uri: localVarPath,
			json: true,
		};

		if (Object.keys(formParams).length > 0) {
			requestOptions.formData = formParams;
		}
		return requestOptions;
	}

	/**
	 * get response type name
	 */
	getReturnType() : string {
		return "DocumentResponse";
	}
}

/**
 * Request model for InsertWatermarkText operation.
 * Inserts document watermark text.
 */
export class InsertWatermarkTextRequest implements RequestInterface {
    /**
     * The document name.
     */
    public name: string;

    /**
     * WatermarkText with the watermark data.
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

	/**
	 * create the requst options for this request
	 * @param configuration a configuration for the request
	 */
	createRequestOptions(configuration: Configuration) : request.OptionsWithUri {
		let localVarPath = configuration.getApiBaseUrl() + "/words/{name}/watermarks/texts"
			.replace("/{" + "name" + "}", (this.name !== null && this.name !== undefined) ? "/" + String(this.name) : "")
			.replace("//", "/");
		const queryParameters: any = {};
		// verify required parameter 'name' is not undefined
		if (this.name === undefined) {
		    throw new Error('Required parameter "name" was undefined when calling insertWatermarkText.');
		}

		// verify required parameter 'name' is not null
		if (this.name === null) {
		    throw new Error('Required parameter "name" was null when calling insertWatermarkText.');
		}

		// verify required parameter 'watermarkText' is not undefined
		if (this.watermarkText === undefined) {
		    throw new Error('Required parameter "watermarkText" was undefined when calling insertWatermarkText.');
		}

		// verify required parameter 'watermarkText' is not null
		if (this.watermarkText === null) {
		    throw new Error('Required parameter "watermarkText" was null when calling insertWatermarkText.');
		}

		localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "folder", this.folder);
		localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "storage", this.storage);
		localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "loadEncoding", this.loadEncoding);
		localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "password", this.password);
		localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "destFileName", this.destFileName);
		localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "revisionAuthor", this.revisionAuthor);
		localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "revisionDateTime", this.revisionDateTime);

		const requestOptions: request.Options = {
			method: "POST",
			qs: queryParameters,
			uri: localVarPath,
			json: true,
			body: ObjectSerializer.serialize(this.watermarkText, this.watermarkText.constructor.name === "Object" ? "importedWatermarkText.WatermarkText" : this.watermarkText.constructor.name),
		};

		return requestOptions;
	}

	/**
	 * get response type name
	 */
	getReturnType() : string {
		return "DocumentResponse";
	}
}

/**
 * Request model for LoadWebDocument operation.
 * Loads new document from web into the file with any supported format of data.
 */
export class LoadWebDocumentRequest implements RequestInterface {
    /**
     * Parameters of loading.
     */
    public data: importedLoadWebDocumentData.LoadWebDocumentData;

    /**
     * Original document storage.
     */
    public storage: string;

    public constructor(init?: Partial< LoadWebDocumentRequest >) {
        Object.assign(this, init);
    }

	/**
	 * create the requst options for this request
	 * @param configuration a configuration for the request
	 */
	createRequestOptions(configuration: Configuration) : request.OptionsWithUri {
		let localVarPath = configuration.getApiBaseUrl() + "/words/loadWebDocument"
			.replace("//", "/");
		const queryParameters: any = {};
		// verify required parameter 'data' is not undefined
		if (this.data === undefined) {
		    throw new Error('Required parameter "data" was undefined when calling loadWebDocument.');
		}

		// verify required parameter 'data' is not null
		if (this.data === null) {
		    throw new Error('Required parameter "data" was null when calling loadWebDocument.');
		}

		localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "storage", this.storage);

		const requestOptions: request.Options = {
			method: "PUT",
			qs: queryParameters,
			uri: localVarPath,
			json: true,
			body: ObjectSerializer.serialize(this.data, this.data.constructor.name === "Object" ? "importedLoadWebDocumentData.LoadWebDocumentData" : this.data.constructor.name),
		};

		return requestOptions;
	}

	/**
	 * get response type name
	 */
	getReturnType() : string {
		return "SaveResponse";
	}
}

/**
 * Request model for MoveFile operation.
 * Move file.
 */
export class MoveFileRequest implements RequestInterface {
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

	/**
	 * create the requst options for this request
	 * @param configuration a configuration for the request
	 */
	createRequestOptions(configuration: Configuration) : request.OptionsWithUri {
		let localVarPath = configuration.getApiBaseUrl() + "/words/storage/file/move/{srcPath}"
			.replace("/{" + "srcPath" + "}", (this.srcPath !== null && this.srcPath !== undefined) ? "/" + String(this.srcPath) : "")
			.replace("//", "/");
		const queryParameters: any = {};
		// verify required parameter 'destPath' is not undefined
		if (this.destPath === undefined) {
		    throw new Error('Required parameter "destPath" was undefined when calling moveFile.');
		}

		// verify required parameter 'srcPath' is not undefined
		if (this.srcPath === undefined) {
		    throw new Error('Required parameter "srcPath" was undefined when calling moveFile.');
		}

		// verify required parameter 'srcPath' is not null
		if (this.srcPath === null) {
		    throw new Error('Required parameter "srcPath" was null when calling moveFile.');
		}

		localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "destPath", this.destPath);
		localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "srcStorageName", this.srcStorageName);
		localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "destStorageName", this.destStorageName);
		localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "versionId", this.versionId);

		const requestOptions: request.Options = {
			method: "PUT",
			qs: queryParameters,
			uri: localVarPath,
			json: true,
		};

		return requestOptions;
	}

	/**
	 * get response type name
	 */
	getReturnType() : string {
		return "";
	}
}

/**
 * Request model for MoveFolder operation.
 * Move folder.
 */
export class MoveFolderRequest implements RequestInterface {
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

	/**
	 * create the requst options for this request
	 * @param configuration a configuration for the request
	 */
	createRequestOptions(configuration: Configuration) : request.OptionsWithUri {
		let localVarPath = configuration.getApiBaseUrl() + "/words/storage/folder/move/{srcPath}"
			.replace("/{" + "srcPath" + "}", (this.srcPath !== null && this.srcPath !== undefined) ? "/" + String(this.srcPath) : "")
			.replace("//", "/");
		const queryParameters: any = {};
		// verify required parameter 'destPath' is not undefined
		if (this.destPath === undefined) {
		    throw new Error('Required parameter "destPath" was undefined when calling moveFolder.');
		}

		// verify required parameter 'srcPath' is not undefined
		if (this.srcPath === undefined) {
		    throw new Error('Required parameter "srcPath" was undefined when calling moveFolder.');
		}

		// verify required parameter 'srcPath' is not null
		if (this.srcPath === null) {
		    throw new Error('Required parameter "srcPath" was null when calling moveFolder.');
		}

		localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "destPath", this.destPath);
		localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "srcStorageName", this.srcStorageName);
		localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "destStorageName", this.destStorageName);

		const requestOptions: request.Options = {
			method: "PUT",
			qs: queryParameters,
			uri: localVarPath,
			json: true,
		};

		return requestOptions;
	}

	/**
	 * get response type name
	 */
	getReturnType() : string {
		return "";
	}
}

/**
 * Request model for OptimizeDocument operation.
 * Allows to optimize the document contents as well as default Aspose.Words behavior to a particular versions of MS Word.
 */
export class OptimizeDocumentRequest implements RequestInterface {
    /**
     * The document name.
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

	/**
	 * create the requst options for this request
	 * @param configuration a configuration for the request
	 */
	createRequestOptions(configuration: Configuration) : request.OptionsWithUri {
		let localVarPath = configuration.getApiBaseUrl() + "/words/{name}/compatibility/optimize"
			.replace("/{" + "name" + "}", (this.name !== null && this.name !== undefined) ? "/" + String(this.name) : "")
			.replace("//", "/");
		const queryParameters: any = {};
		// verify required parameter 'name' is not undefined
		if (this.name === undefined) {
		    throw new Error('Required parameter "name" was undefined when calling optimizeDocument.');
		}

		// verify required parameter 'name' is not null
		if (this.name === null) {
		    throw new Error('Required parameter "name" was null when calling optimizeDocument.');
		}

		// verify required parameter 'options' is not undefined
		if (this.options === undefined) {
		    throw new Error('Required parameter "options" was undefined when calling optimizeDocument.');
		}

		// verify required parameter 'options' is not null
		if (this.options === null) {
		    throw new Error('Required parameter "options" was null when calling optimizeDocument.');
		}

		localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "folder", this.folder);
		localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "storage", this.storage);
		localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "loadEncoding", this.loadEncoding);
		localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "password", this.password);
		localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "destFileName", this.destFileName);
		localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "revisionAuthor", this.revisionAuthor);
		localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "revisionDateTime", this.revisionDateTime);

		const requestOptions: request.Options = {
			method: "PUT",
			qs: queryParameters,
			uri: localVarPath,
			json: true,
			body: ObjectSerializer.serialize(this.options, this.options.constructor.name === "Object" ? "importedOptimizationOptions.OptimizationOptions" : this.options.constructor.name),
		};

		return requestOptions;
	}

	/**
	 * get response type name
	 */
	getReturnType() : string {
		return "";
	}
}

/**
 * Request model for ProtectDocument operation.
 * Protects document.
 */
export class ProtectDocumentRequest implements RequestInterface {
    /**
     * The document name.
     */
    public name: string;

    /**
     * ProtectionRequest with protection settings.
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

	/**
	 * create the requst options for this request
	 * @param configuration a configuration for the request
	 */
	createRequestOptions(configuration: Configuration) : request.OptionsWithUri {
		let localVarPath = configuration.getApiBaseUrl() + "/words/{name}/protection"
			.replace("/{" + "name" + "}", (this.name !== null && this.name !== undefined) ? "/" + String(this.name) : "")
			.replace("//", "/");
		const queryParameters: any = {};
		// verify required parameter 'name' is not undefined
		if (this.name === undefined) {
		    throw new Error('Required parameter "name" was undefined when calling protectDocument.');
		}

		// verify required parameter 'name' is not null
		if (this.name === null) {
		    throw new Error('Required parameter "name" was null when calling protectDocument.');
		}

		// verify required parameter 'protectionRequest' is not undefined
		if (this.protectionRequest === undefined) {
		    throw new Error('Required parameter "protectionRequest" was undefined when calling protectDocument.');
		}

		// verify required parameter 'protectionRequest' is not null
		if (this.protectionRequest === null) {
		    throw new Error('Required parameter "protectionRequest" was null when calling protectDocument.');
		}

		localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "folder", this.folder);
		localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "storage", this.storage);
		localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "loadEncoding", this.loadEncoding);
		localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "password", this.password);
		localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "destFileName", this.destFileName);

		const requestOptions: request.Options = {
			method: "PUT",
			qs: queryParameters,
			uri: localVarPath,
			json: true,
			body: ObjectSerializer.serialize(this.protectionRequest, this.protectionRequest.constructor.name === "Object" ? "importedProtectionRequest.ProtectionRequest" : this.protectionRequest.constructor.name),
		};

		return requestOptions;
	}

	/**
	 * get response type name
	 */
	getReturnType() : string {
		return "ProtectionDataResponse";
	}
}

/**
 * Request model for RejectAllRevisions operation.
 * Rejects all revisions in document.
 */
export class RejectAllRevisionsRequest implements RequestInterface {
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

    public constructor(init?: Partial< RejectAllRevisionsRequest >) {
        Object.assign(this, init);
    }

	/**
	 * create the requst options for this request
	 * @param configuration a configuration for the request
	 */
	createRequestOptions(configuration: Configuration) : request.OptionsWithUri {
		let localVarPath = configuration.getApiBaseUrl() + "/words/{name}/revisions/rejectAll"
			.replace("/{" + "name" + "}", (this.name !== null && this.name !== undefined) ? "/" + String(this.name) : "")
			.replace("//", "/");
		const queryParameters: any = {};
		// verify required parameter 'name' is not undefined
		if (this.name === undefined) {
		    throw new Error('Required parameter "name" was undefined when calling rejectAllRevisions.');
		}

		// verify required parameter 'name' is not null
		if (this.name === null) {
		    throw new Error('Required parameter "name" was null when calling rejectAllRevisions.');
		}

		localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "folder", this.folder);
		localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "storage", this.storage);
		localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "loadEncoding", this.loadEncoding);
		localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "password", this.password);
		localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "destFileName", this.destFileName);

		const requestOptions: request.Options = {
			method: "PUT",
			qs: queryParameters,
			uri: localVarPath,
			json: true,
		};

		return requestOptions;
	}

	/**
	 * get response type name
	 */
	getReturnType() : string {
		return "RevisionsModificationResponse";
	}
}

/**
 * Request model for RemoveRange operation.
 * Removes the range from the document.
 */
export class RemoveRangeRequest implements RequestInterface {
    /**
     * The document.
     */
    public name: string;

    /**
     * The range start identifier.
     * Identifier is the value of the "nodeId" field, which every document node has, extended with the prefix "id".
     * It looks like "id0.0.7". Also values like "image5" and "table3" can be used as an identifier for images and tables, where the number is an index of the image/table.
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

	/**
	 * create the requst options for this request
	 * @param configuration a configuration for the request
	 */
	createRequestOptions(configuration: Configuration) : request.OptionsWithUri {
		let localVarPath = configuration.getApiBaseUrl() + "/words/{name}/range/{rangeStartIdentifier}/{rangeEndIdentifier}"
			.replace("/{" + "name" + "}", (this.name !== null && this.name !== undefined) ? "/" + String(this.name) : "")
			.replace("/{" + "rangeStartIdentifier" + "}", (this.rangeStartIdentifier !== null && this.rangeStartIdentifier !== undefined) ? "/" + String(this.rangeStartIdentifier) : "")
			.replace("/{" + "rangeEndIdentifier" + "}", (this.rangeEndIdentifier !== null && this.rangeEndIdentifier !== undefined) ? "/" + String(this.rangeEndIdentifier) : "")
			.replace("//", "/");
		const queryParameters: any = {};
		// verify required parameter 'name' is not undefined
		if (this.name === undefined) {
		    throw new Error('Required parameter "name" was undefined when calling removeRange.');
		}

		// verify required parameter 'name' is not null
		if (this.name === null) {
		    throw new Error('Required parameter "name" was null when calling removeRange.');
		}

		// verify required parameter 'rangeStartIdentifier' is not undefined
		if (this.rangeStartIdentifier === undefined) {
		    throw new Error('Required parameter "rangeStartIdentifier" was undefined when calling removeRange.');
		}

		// verify required parameter 'rangeStartIdentifier' is not null
		if (this.rangeStartIdentifier === null) {
		    throw new Error('Required parameter "rangeStartIdentifier" was null when calling removeRange.');
		}

		localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "folder", this.folder);
		localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "storage", this.storage);
		localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "loadEncoding", this.loadEncoding);
		localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "password", this.password);
		localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "destFileName", this.destFileName);

		const requestOptions: request.Options = {
			method: "DELETE",
			qs: queryParameters,
			uri: localVarPath,
			json: true,
		};

		return requestOptions;
	}

	/**
	 * get response type name
	 */
	getReturnType() : string {
		return "DocumentResponse";
	}
}

/**
 * Request model for RenderDrawingObject operation.
 * Renders drawing object to specified format.
 */
export class RenderDrawingObjectRequest implements RequestInterface {
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
     * Path to the node, which contains drawing objects.
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
     * Folder in filestorage with custom fonts.
     */
    public fontsLocation: string;

    public constructor(init?: Partial< RenderDrawingObjectRequest >) {
        Object.assign(this, init);
    }

	/**
	 * create the requst options for this request
	 * @param configuration a configuration for the request
	 */
	createRequestOptions(configuration: Configuration) : request.OptionsWithUri {
		let localVarPath = configuration.getApiBaseUrl() + "/words/{name}/{nodePath}/drawingObjects/{index}/render"
			.replace("/{" + "name" + "}", (this.name !== null && this.name !== undefined) ? "/" + String(this.name) : "")
			.replace("/{" + "index" + "}", (this.index !== null && this.index !== undefined) ? "/" + String(this.index) : "")
			.replace("/{" + "nodePath" + "}", (this.nodePath !== null && this.nodePath !== undefined) ? "/" + String(this.nodePath) : "")
			.replace("//", "/");
		const queryParameters: any = {};
		// verify required parameter 'name' is not undefined
		if (this.name === undefined) {
		    throw new Error('Required parameter "name" was undefined when calling renderDrawingObject.');
		}

		// verify required parameter 'name' is not null
		if (this.name === null) {
		    throw new Error('Required parameter "name" was null when calling renderDrawingObject.');
		}

		// verify required parameter 'format' is not undefined
		if (this.format === undefined) {
		    throw new Error('Required parameter "format" was undefined when calling renderDrawingObject.');
		}

		// verify required parameter 'format' is not null
		if (this.format === null) {
		    throw new Error('Required parameter "format" was null when calling renderDrawingObject.');
		}

		// verify required parameter 'index' is not undefined
		if (this.index === undefined) {
		    throw new Error('Required parameter "index" was undefined when calling renderDrawingObject.');
		}

		// verify required parameter 'index' is not null
		if (this.index === null) {
		    throw new Error('Required parameter "index" was null when calling renderDrawingObject.');
		}

		localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "format", this.format);
		localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "folder", this.folder);
		localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "storage", this.storage);
		localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "loadEncoding", this.loadEncoding);
		localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "password", this.password);
		localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "fontsLocation", this.fontsLocation);

		const requestOptions: request.Options = {
			method: "GET",
			qs: queryParameters,
			uri: localVarPath,
			encoding: null,
		};

		return requestOptions;
	}

	/**
	 * get response type name
	 */
	getReturnType() : string {
		return "Buffer";
	}
}

/**
 * Request model for RenderMathObject operation.
 * Renders math object to specified format.
 */
export class RenderMathObjectRequest implements RequestInterface {
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
     * Path to the node, which contains office math objects.
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
     * Folder in filestorage with custom fonts.
     */
    public fontsLocation: string;

    public constructor(init?: Partial< RenderMathObjectRequest >) {
        Object.assign(this, init);
    }

	/**
	 * create the requst options for this request
	 * @param configuration a configuration for the request
	 */
	createRequestOptions(configuration: Configuration) : request.OptionsWithUri {
		let localVarPath = configuration.getApiBaseUrl() + "/words/{name}/{nodePath}/OfficeMathObjects/{index}/render"
			.replace("/{" + "name" + "}", (this.name !== null && this.name !== undefined) ? "/" + String(this.name) : "")
			.replace("/{" + "index" + "}", (this.index !== null && this.index !== undefined) ? "/" + String(this.index) : "")
			.replace("/{" + "nodePath" + "}", (this.nodePath !== null && this.nodePath !== undefined) ? "/" + String(this.nodePath) : "")
			.replace("//", "/");
		const queryParameters: any = {};
		// verify required parameter 'name' is not undefined
		if (this.name === undefined) {
		    throw new Error('Required parameter "name" was undefined when calling renderMathObject.');
		}

		// verify required parameter 'name' is not null
		if (this.name === null) {
		    throw new Error('Required parameter "name" was null when calling renderMathObject.');
		}

		// verify required parameter 'format' is not undefined
		if (this.format === undefined) {
		    throw new Error('Required parameter "format" was undefined when calling renderMathObject.');
		}

		// verify required parameter 'format' is not null
		if (this.format === null) {
		    throw new Error('Required parameter "format" was null when calling renderMathObject.');
		}

		// verify required parameter 'index' is not undefined
		if (this.index === undefined) {
		    throw new Error('Required parameter "index" was undefined when calling renderMathObject.');
		}

		// verify required parameter 'index' is not null
		if (this.index === null) {
		    throw new Error('Required parameter "index" was null when calling renderMathObject.');
		}

		localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "format", this.format);
		localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "folder", this.folder);
		localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "storage", this.storage);
		localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "loadEncoding", this.loadEncoding);
		localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "password", this.password);
		localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "fontsLocation", this.fontsLocation);

		const requestOptions: request.Options = {
			method: "GET",
			qs: queryParameters,
			uri: localVarPath,
			encoding: null,
		};

		return requestOptions;
	}

	/**
	 * get response type name
	 */
	getReturnType() : string {
		return "Buffer";
	}
}

/**
 * Request model for RenderPage operation.
 * Renders page to specified format.
 */
export class RenderPageRequest implements RequestInterface {
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

    public constructor(init?: Partial< RenderPageRequest >) {
        Object.assign(this, init);
    }

	/**
	 * create the requst options for this request
	 * @param configuration a configuration for the request
	 */
	createRequestOptions(configuration: Configuration) : request.OptionsWithUri {
		let localVarPath = configuration.getApiBaseUrl() + "/words/{name}/pages/{pageIndex}/render"
			.replace("/{" + "name" + "}", (this.name !== null && this.name !== undefined) ? "/" + String(this.name) : "")
			.replace("/{" + "pageIndex" + "}", (this.pageIndex !== null && this.pageIndex !== undefined) ? "/" + String(this.pageIndex) : "")
			.replace("//", "/");
		const queryParameters: any = {};
		// verify required parameter 'name' is not undefined
		if (this.name === undefined) {
		    throw new Error('Required parameter "name" was undefined when calling renderPage.');
		}

		// verify required parameter 'name' is not null
		if (this.name === null) {
		    throw new Error('Required parameter "name" was null when calling renderPage.');
		}

		// verify required parameter 'pageIndex' is not undefined
		if (this.pageIndex === undefined) {
		    throw new Error('Required parameter "pageIndex" was undefined when calling renderPage.');
		}

		// verify required parameter 'pageIndex' is not null
		if (this.pageIndex === null) {
		    throw new Error('Required parameter "pageIndex" was null when calling renderPage.');
		}

		// verify required parameter 'format' is not undefined
		if (this.format === undefined) {
		    throw new Error('Required parameter "format" was undefined when calling renderPage.');
		}

		// verify required parameter 'format' is not null
		if (this.format === null) {
		    throw new Error('Required parameter "format" was null when calling renderPage.');
		}

		localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "format", this.format);
		localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "folder", this.folder);
		localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "storage", this.storage);
		localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "loadEncoding", this.loadEncoding);
		localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "password", this.password);
		localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "fontsLocation", this.fontsLocation);

		const requestOptions: request.Options = {
			method: "GET",
			qs: queryParameters,
			uri: localVarPath,
			encoding: null,
		};

		return requestOptions;
	}

	/**
	 * get response type name
	 */
	getReturnType() : string {
		return "Buffer";
	}
}

/**
 * Request model for RenderParagraph operation.
 * Renders paragraph to specified format.
 */
export class RenderParagraphRequest implements RequestInterface {
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
     * Path to the node, which contains paragraphs.
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
     * Folder in filestorage with custom fonts.
     */
    public fontsLocation: string;

    public constructor(init?: Partial< RenderParagraphRequest >) {
        Object.assign(this, init);
    }

	/**
	 * create the requst options for this request
	 * @param configuration a configuration for the request
	 */
	createRequestOptions(configuration: Configuration) : request.OptionsWithUri {
		let localVarPath = configuration.getApiBaseUrl() + "/words/{name}/{nodePath}/paragraphs/{index}/render"
			.replace("/{" + "name" + "}", (this.name !== null && this.name !== undefined) ? "/" + String(this.name) : "")
			.replace("/{" + "index" + "}", (this.index !== null && this.index !== undefined) ? "/" + String(this.index) : "")
			.replace("/{" + "nodePath" + "}", (this.nodePath !== null && this.nodePath !== undefined) ? "/" + String(this.nodePath) : "")
			.replace("//", "/");
		const queryParameters: any = {};
		// verify required parameter 'name' is not undefined
		if (this.name === undefined) {
		    throw new Error('Required parameter "name" was undefined when calling renderParagraph.');
		}

		// verify required parameter 'name' is not null
		if (this.name === null) {
		    throw new Error('Required parameter "name" was null when calling renderParagraph.');
		}

		// verify required parameter 'format' is not undefined
		if (this.format === undefined) {
		    throw new Error('Required parameter "format" was undefined when calling renderParagraph.');
		}

		// verify required parameter 'format' is not null
		if (this.format === null) {
		    throw new Error('Required parameter "format" was null when calling renderParagraph.');
		}

		// verify required parameter 'index' is not undefined
		if (this.index === undefined) {
		    throw new Error('Required parameter "index" was undefined when calling renderParagraph.');
		}

		// verify required parameter 'index' is not null
		if (this.index === null) {
		    throw new Error('Required parameter "index" was null when calling renderParagraph.');
		}

		localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "format", this.format);
		localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "folder", this.folder);
		localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "storage", this.storage);
		localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "loadEncoding", this.loadEncoding);
		localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "password", this.password);
		localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "fontsLocation", this.fontsLocation);

		const requestOptions: request.Options = {
			method: "GET",
			qs: queryParameters,
			uri: localVarPath,
			encoding: null,
		};

		return requestOptions;
	}

	/**
	 * get response type name
	 */
	getReturnType() : string {
		return "Buffer";
	}
}

/**
 * Request model for RenderTable operation.
 * Renders table to specified format.
 */
export class RenderTableRequest implements RequestInterface {
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
     * Folder in filestorage with custom fonts.
     */
    public fontsLocation: string;

    public constructor(init?: Partial< RenderTableRequest >) {
        Object.assign(this, init);
    }

	/**
	 * create the requst options for this request
	 * @param configuration a configuration for the request
	 */
	createRequestOptions(configuration: Configuration) : request.OptionsWithUri {
		let localVarPath = configuration.getApiBaseUrl() + "/words/{name}/{nodePath}/tables/{index}/render"
			.replace("/{" + "name" + "}", (this.name !== null && this.name !== undefined) ? "/" + String(this.name) : "")
			.replace("/{" + "index" + "}", (this.index !== null && this.index !== undefined) ? "/" + String(this.index) : "")
			.replace("/{" + "nodePath" + "}", (this.nodePath !== null && this.nodePath !== undefined) ? "/" + String(this.nodePath) : "")
			.replace("//", "/");
		const queryParameters: any = {};
		// verify required parameter 'name' is not undefined
		if (this.name === undefined) {
		    throw new Error('Required parameter "name" was undefined when calling renderTable.');
		}

		// verify required parameter 'name' is not null
		if (this.name === null) {
		    throw new Error('Required parameter "name" was null when calling renderTable.');
		}

		// verify required parameter 'format' is not undefined
		if (this.format === undefined) {
		    throw new Error('Required parameter "format" was undefined when calling renderTable.');
		}

		// verify required parameter 'format' is not null
		if (this.format === null) {
		    throw new Error('Required parameter "format" was null when calling renderTable.');
		}

		// verify required parameter 'index' is not undefined
		if (this.index === undefined) {
		    throw new Error('Required parameter "index" was undefined when calling renderTable.');
		}

		// verify required parameter 'index' is not null
		if (this.index === null) {
		    throw new Error('Required parameter "index" was null when calling renderTable.');
		}

		localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "format", this.format);
		localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "folder", this.folder);
		localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "storage", this.storage);
		localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "loadEncoding", this.loadEncoding);
		localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "password", this.password);
		localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "fontsLocation", this.fontsLocation);

		const requestOptions: request.Options = {
			method: "GET",
			qs: queryParameters,
			uri: localVarPath,
			encoding: null,
		};

		return requestOptions;
	}

	/**
	 * get response type name
	 */
	getReturnType() : string {
		return "Buffer";
	}
}

/**
 * Request model for ReplaceText operation.
 * Replaces document text.
 */
export class ReplaceTextRequest implements RequestInterface {
    /**
     * The document name.
     */
    public name: string;

    /**
     * ReplaceTextResponse with the replace operation settings.
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

	/**
	 * create the requst options for this request
	 * @param configuration a configuration for the request
	 */
	createRequestOptions(configuration: Configuration) : request.OptionsWithUri {
		let localVarPath = configuration.getApiBaseUrl() + "/words/{name}/replaceText"
			.replace("/{" + "name" + "}", (this.name !== null && this.name !== undefined) ? "/" + String(this.name) : "")
			.replace("//", "/");
		const queryParameters: any = {};
		// verify required parameter 'name' is not undefined
		if (this.name === undefined) {
		    throw new Error('Required parameter "name" was undefined when calling replaceText.');
		}

		// verify required parameter 'name' is not null
		if (this.name === null) {
		    throw new Error('Required parameter "name" was null when calling replaceText.');
		}

		// verify required parameter 'replaceText' is not undefined
		if (this.replaceText === undefined) {
		    throw new Error('Required parameter "replaceText" was undefined when calling replaceText.');
		}

		// verify required parameter 'replaceText' is not null
		if (this.replaceText === null) {
		    throw new Error('Required parameter "replaceText" was null when calling replaceText.');
		}

		localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "folder", this.folder);
		localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "storage", this.storage);
		localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "loadEncoding", this.loadEncoding);
		localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "password", this.password);
		localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "destFileName", this.destFileName);
		localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "revisionAuthor", this.revisionAuthor);
		localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "revisionDateTime", this.revisionDateTime);

		const requestOptions: request.Options = {
			method: "PUT",
			qs: queryParameters,
			uri: localVarPath,
			json: true,
			body: ObjectSerializer.serialize(this.replaceText, this.replaceText.constructor.name === "Object" ? "importedReplaceTextParameters.ReplaceTextParameters" : this.replaceText.constructor.name),
		};

		return requestOptions;
	}

	/**
	 * get response type name
	 */
	getReturnType() : string {
		return "ReplaceTextResponse";
	}
}

/**
 * Request model for ReplaceWithText operation.
 * Replaces the content in the range.
 */
export class ReplaceWithTextRequest implements RequestInterface {
    /**
     * The document.
     */
    public name: string;

    /**
     * The range start identifier.
     * Identifier is the value of the "nodeId" field, which every document node has, extended with the prefix "id".
     * It looks like "id0.0.7". Also values like "image5" and "table3" can be used as an identifier for images and tables, where the number is an index of the image/table.
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

	/**
	 * create the requst options for this request
	 * @param configuration a configuration for the request
	 */
	createRequestOptions(configuration: Configuration) : request.OptionsWithUri {
		let localVarPath = configuration.getApiBaseUrl() + "/words/{name}/range/{rangeStartIdentifier}/{rangeEndIdentifier}"
			.replace("/{" + "name" + "}", (this.name !== null && this.name !== undefined) ? "/" + String(this.name) : "")
			.replace("/{" + "rangeStartIdentifier" + "}", (this.rangeStartIdentifier !== null && this.rangeStartIdentifier !== undefined) ? "/" + String(this.rangeStartIdentifier) : "")
			.replace("/{" + "rangeEndIdentifier" + "}", (this.rangeEndIdentifier !== null && this.rangeEndIdentifier !== undefined) ? "/" + String(this.rangeEndIdentifier) : "")
			.replace("//", "/");
		const queryParameters: any = {};
		// verify required parameter 'name' is not undefined
		if (this.name === undefined) {
		    throw new Error('Required parameter "name" was undefined when calling replaceWithText.');
		}

		// verify required parameter 'name' is not null
		if (this.name === null) {
		    throw new Error('Required parameter "name" was null when calling replaceWithText.');
		}

		// verify required parameter 'rangeStartIdentifier' is not undefined
		if (this.rangeStartIdentifier === undefined) {
		    throw new Error('Required parameter "rangeStartIdentifier" was undefined when calling replaceWithText.');
		}

		// verify required parameter 'rangeStartIdentifier' is not null
		if (this.rangeStartIdentifier === null) {
		    throw new Error('Required parameter "rangeStartIdentifier" was null when calling replaceWithText.');
		}

		// verify required parameter 'rangeText' is not undefined
		if (this.rangeText === undefined) {
		    throw new Error('Required parameter "rangeText" was undefined when calling replaceWithText.');
		}

		// verify required parameter 'rangeText' is not null
		if (this.rangeText === null) {
		    throw new Error('Required parameter "rangeText" was null when calling replaceWithText.');
		}

		localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "folder", this.folder);
		localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "storage", this.storage);
		localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "loadEncoding", this.loadEncoding);
		localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "password", this.password);
		localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "destFileName", this.destFileName);

		const requestOptions: request.Options = {
			method: "POST",
			qs: queryParameters,
			uri: localVarPath,
			json: true,
			body: ObjectSerializer.serialize(this.rangeText, this.rangeText.constructor.name === "Object" ? "importedReplaceRange.ReplaceRange" : this.rangeText.constructor.name),
		};

		return requestOptions;
	}

	/**
	 * get response type name
	 */
	getReturnType() : string {
		return "DocumentResponse";
	}
}

/**
 * Request model for ResetCache operation.
 * Resets font's cache.
 */
export class ResetCacheRequest implements RequestInterface {

    public constructor(init?: Partial< ResetCacheRequest >) {
        Object.assign(this, init);
    }

	/**
	 * create the requst options for this request
	 * @param configuration a configuration for the request
	 */
	createRequestOptions(configuration: Configuration) : request.OptionsWithUri {
		const localVarPath = configuration.getApiBaseUrl() + "/words/fonts/cache"
			.replace("//", "/");
		const queryParameters: any = {};

		const requestOptions: request.Options = {
			method: "DELETE",
			qs: queryParameters,
			uri: localVarPath,
			json: true,
		};

		return requestOptions;
	}

	/**
	 * get response type name
	 */
	getReturnType() : string {
		return "";
	}
}

/**
 * Request model for SaveAs operation.
 * Converts document to destination format with detailed settings and saves result to storage.
 */
export class SaveAsRequest implements RequestInterface {
    /**
     * The document name.
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

	/**
	 * create the requst options for this request
	 * @param configuration a configuration for the request
	 */
	createRequestOptions(configuration: Configuration) : request.OptionsWithUri {
		let localVarPath = configuration.getApiBaseUrl() + "/words/{name}/saveAs"
			.replace("/{" + "name" + "}", (this.name !== null && this.name !== undefined) ? "/" + String(this.name) : "")
			.replace("//", "/");
		const queryParameters: any = {};
		// verify required parameter 'name' is not undefined
		if (this.name === undefined) {
		    throw new Error('Required parameter "name" was undefined when calling saveAs.');
		}

		// verify required parameter 'name' is not null
		if (this.name === null) {
		    throw new Error('Required parameter "name" was null when calling saveAs.');
		}

		// verify required parameter 'saveOptionsData' is not undefined
		if (this.saveOptionsData === undefined) {
		    throw new Error('Required parameter "saveOptionsData" was undefined when calling saveAs.');
		}

		// verify required parameter 'saveOptionsData' is not null
		if (this.saveOptionsData === null) {
		    throw new Error('Required parameter "saveOptionsData" was null when calling saveAs.');
		}

		localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "folder", this.folder);
		localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "storage", this.storage);
		localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "loadEncoding", this.loadEncoding);
		localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "password", this.password);
		localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "fontsLocation", this.fontsLocation);

		const requestOptions: request.Options = {
			method: "PUT",
			qs: queryParameters,
			uri: localVarPath,
			json: true,
			body: ObjectSerializer.serialize(this.saveOptionsData, this.saveOptionsData.constructor.name === "Object" ? "importedSaveOptionsData.SaveOptionsData" : this.saveOptionsData.constructor.name),
		};

		return requestOptions;
	}

	/**
	 * get response type name
	 */
	getReturnType() : string {
		return "SaveResponse";
	}
}

/**
 * Request model for SaveAsRange operation.
 * Saves the selected range as a new document.
 */
export class SaveAsRangeRequest implements RequestInterface {
    /**
     * The document.
     */
    public name: string;

    /**
     * The range start identifier.
     * Identifier is the value of the "nodeId" field, which every document node has, extended with the prefix "id".
     * It looks like "id0.0.7". Also values like "image5" and "table3" can be used as an identifier for images and tables, where the number is an index of the image/table.
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

	/**
	 * create the requst options for this request
	 * @param configuration a configuration for the request
	 */
	createRequestOptions(configuration: Configuration) : request.OptionsWithUri {
		let localVarPath = configuration.getApiBaseUrl() + "/words/{name}/range/{rangeStartIdentifier}/{rangeEndIdentifier}/SaveAs"
			.replace("/{" + "name" + "}", (this.name !== null && this.name !== undefined) ? "/" + String(this.name) : "")
			.replace("/{" + "rangeStartIdentifier" + "}", (this.rangeStartIdentifier !== null && this.rangeStartIdentifier !== undefined) ? "/" + String(this.rangeStartIdentifier) : "")
			.replace("/{" + "rangeEndIdentifier" + "}", (this.rangeEndIdentifier !== null && this.rangeEndIdentifier !== undefined) ? "/" + String(this.rangeEndIdentifier) : "")
			.replace("//", "/");
		const queryParameters: any = {};
		// verify required parameter 'name' is not undefined
		if (this.name === undefined) {
		    throw new Error('Required parameter "name" was undefined when calling saveAsRange.');
		}

		// verify required parameter 'name' is not null
		if (this.name === null) {
		    throw new Error('Required parameter "name" was null when calling saveAsRange.');
		}

		// verify required parameter 'rangeStartIdentifier' is not undefined
		if (this.rangeStartIdentifier === undefined) {
		    throw new Error('Required parameter "rangeStartIdentifier" was undefined when calling saveAsRange.');
		}

		// verify required parameter 'rangeStartIdentifier' is not null
		if (this.rangeStartIdentifier === null) {
		    throw new Error('Required parameter "rangeStartIdentifier" was null when calling saveAsRange.');
		}

		// verify required parameter 'documentParameters' is not undefined
		if (this.documentParameters === undefined) {
		    throw new Error('Required parameter "documentParameters" was undefined when calling saveAsRange.');
		}

		// verify required parameter 'documentParameters' is not null
		if (this.documentParameters === null) {
		    throw new Error('Required parameter "documentParameters" was null when calling saveAsRange.');
		}

		localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "folder", this.folder);
		localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "storage", this.storage);
		localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "loadEncoding", this.loadEncoding);
		localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "password", this.password);

		const requestOptions: request.Options = {
			method: "POST",
			qs: queryParameters,
			uri: localVarPath,
			json: true,
			body: ObjectSerializer.serialize(this.documentParameters, this.documentParameters.constructor.name === "Object" ? "importedRangeDocument.RangeDocument" : this.documentParameters.constructor.name),
		};

		return requestOptions;
	}

	/**
	 * get response type name
	 */
	getReturnType() : string {
		return "DocumentResponse";
	}
}

/**
 * Request model for SaveAsTiff operation.
 * Converts document to tiff with detailed settings and saves result to storage.
 */
export class SaveAsTiffRequest implements RequestInterface {
    /**
     * The document name.
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

    public constructor(init?: Partial< SaveAsTiffRequest >) {
        Object.assign(this, init);
    }

	/**
	 * create the requst options for this request
	 * @param configuration a configuration for the request
	 */
	createRequestOptions(configuration: Configuration) : request.OptionsWithUri {
		let localVarPath = configuration.getApiBaseUrl() + "/words/{name}/saveAs/tiff"
			.replace("/{" + "name" + "}", (this.name !== null && this.name !== undefined) ? "/" + String(this.name) : "")
			.replace("//", "/");
		const queryParameters: any = {};
		// verify required parameter 'name' is not undefined
		if (this.name === undefined) {
		    throw new Error('Required parameter "name" was undefined when calling saveAsTiff.');
		}

		// verify required parameter 'name' is not null
		if (this.name === null) {
		    throw new Error('Required parameter "name" was null when calling saveAsTiff.');
		}

		// verify required parameter 'saveOptions' is not undefined
		if (this.saveOptions === undefined) {
		    throw new Error('Required parameter "saveOptions" was undefined when calling saveAsTiff.');
		}

		// verify required parameter 'saveOptions' is not null
		if (this.saveOptions === null) {
		    throw new Error('Required parameter "saveOptions" was null when calling saveAsTiff.');
		}

		localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "folder", this.folder);
		localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "storage", this.storage);
		localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "loadEncoding", this.loadEncoding);
		localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "password", this.password);
		localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "useAntiAliasing", this.useAntiAliasing);
		localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "useHighQualityRendering", this.useHighQualityRendering);
		localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "imageBrightness", this.imageBrightness);
		localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "imageColorMode", this.imageColorMode);
		localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "imageContrast", this.imageContrast);
		localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "numeralFormat", this.numeralFormat);
		localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "pageCount", this.pageCount);
		localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "pageIndex", this.pageIndex);
		localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "paperColor", this.paperColor);
		localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "pixelFormat", this.pixelFormat);
		localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "resolution", this.resolution);
		localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "scale", this.scale);
		localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "tiffCompression", this.tiffCompression);
		localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "dmlRenderingMode", this.dmlRenderingMode);
		localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "dmlEffectsRenderingMode", this.dmlEffectsRenderingMode);
		localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "tiffBinarizationMethod", this.tiffBinarizationMethod);
		localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "zipOutput", this.zipOutput);
		localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "fontsLocation", this.fontsLocation);

		const requestOptions: request.Options = {
			method: "PUT",
			qs: queryParameters,
			uri: localVarPath,
			json: true,
			body: ObjectSerializer.serialize(this.saveOptions, this.saveOptions.constructor.name === "Object" ? "importedTiffSaveOptionsData.TiffSaveOptionsData" : this.saveOptions.constructor.name),
		};

		return requestOptions;
	}

	/**
	 * get response type name
	 */
	getReturnType() : string {
		return "SaveResponse";
	}
}

/**
 * Request model for Search operation.
 * Searches text in document.
 */
export class SearchRequest implements RequestInterface {
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

    public constructor(init?: Partial< SearchRequest >) {
        Object.assign(this, init);
    }

	/**
	 * create the requst options for this request
	 * @param configuration a configuration for the request
	 */
	createRequestOptions(configuration: Configuration) : request.OptionsWithUri {
		let localVarPath = configuration.getApiBaseUrl() + "/words/{name}/search"
			.replace("/{" + "name" + "}", (this.name !== null && this.name !== undefined) ? "/" + String(this.name) : "")
			.replace("//", "/");
		const queryParameters: any = {};
		// verify required parameter 'name' is not undefined
		if (this.name === undefined) {
		    throw new Error('Required parameter "name" was undefined when calling search.');
		}

		// verify required parameter 'name' is not null
		if (this.name === null) {
		    throw new Error('Required parameter "name" was null when calling search.');
		}

		// verify required parameter 'pattern' is not undefined
		if (this.pattern === undefined) {
		    throw new Error('Required parameter "pattern" was undefined when calling search.');
		}

		localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "pattern", this.pattern);
		localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "folder", this.folder);
		localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "storage", this.storage);
		localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "loadEncoding", this.loadEncoding);
		localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "password", this.password);

		const requestOptions: request.Options = {
			method: "GET",
			qs: queryParameters,
			uri: localVarPath,
			json: true,
		};

		return requestOptions;
	}

	/**
	 * get response type name
	 */
	getReturnType() : string {
		return "SearchResponse";
	}
}

/**
 * Request model for SplitDocument operation.
 * Splits document.
 */
export class SplitDocumentRequest implements RequestInterface {
    /**
     * Original document name.
     */
    public name: string;

    /**
     * Format to split.
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

    public constructor(init?: Partial< SplitDocumentRequest >) {
        Object.assign(this, init);
    }

	/**
	 * create the requst options for this request
	 * @param configuration a configuration for the request
	 */
	createRequestOptions(configuration: Configuration) : request.OptionsWithUri {
		let localVarPath = configuration.getApiBaseUrl() + "/words/{name}/split"
			.replace("/{" + "name" + "}", (this.name !== null && this.name !== undefined) ? "/" + String(this.name) : "")
			.replace("//", "/");
		const queryParameters: any = {};
		// verify required parameter 'name' is not undefined
		if (this.name === undefined) {
		    throw new Error('Required parameter "name" was undefined when calling splitDocument.');
		}

		// verify required parameter 'name' is not null
		if (this.name === null) {
		    throw new Error('Required parameter "name" was null when calling splitDocument.');
		}

		// verify required parameter 'format' is not undefined
		if (this.format === undefined) {
		    throw new Error('Required parameter "format" was undefined when calling splitDocument.');
		}

		// verify required parameter 'format' is not null
		if (this.format === null) {
		    throw new Error('Required parameter "format" was null when calling splitDocument.');
		}

		localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "format", this.format);
		localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "folder", this.folder);
		localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "storage", this.storage);
		localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "loadEncoding", this.loadEncoding);
		localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "password", this.password);
		localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "destFileName", this.destFileName);
		localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "from", this.from);
		localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "to", this.to);
		localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "zipOutput", this.zipOutput);
		localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "fontsLocation", this.fontsLocation);

		const requestOptions: request.Options = {
			method: "PUT",
			qs: queryParameters,
			uri: localVarPath,
			json: true,
		};

		return requestOptions;
	}

	/**
	 * get response type name
	 */
	getReturnType() : string {
		return "SplitDocumentResponse";
	}
}

/**
 * Request model for UnprotectDocument operation.
 * Unprotects document.
 */
export class UnprotectDocumentRequest implements RequestInterface {
    /**
     * The document name.
     */
    public name: string;

    /**
     * ProtectionRequest with protection settings.
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

	/**
	 * create the requst options for this request
	 * @param configuration a configuration for the request
	 */
	createRequestOptions(configuration: Configuration) : request.OptionsWithUri {
		let localVarPath = configuration.getApiBaseUrl() + "/words/{name}/protection"
			.replace("/{" + "name" + "}", (this.name !== null && this.name !== undefined) ? "/" + String(this.name) : "")
			.replace("//", "/");
		const queryParameters: any = {};
		// verify required parameter 'name' is not undefined
		if (this.name === undefined) {
		    throw new Error('Required parameter "name" was undefined when calling unprotectDocument.');
		}

		// verify required parameter 'name' is not null
		if (this.name === null) {
		    throw new Error('Required parameter "name" was null when calling unprotectDocument.');
		}

		// verify required parameter 'protectionRequest' is not undefined
		if (this.protectionRequest === undefined) {
		    throw new Error('Required parameter "protectionRequest" was undefined when calling unprotectDocument.');
		}

		// verify required parameter 'protectionRequest' is not null
		if (this.protectionRequest === null) {
		    throw new Error('Required parameter "protectionRequest" was null when calling unprotectDocument.');
		}

		localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "folder", this.folder);
		localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "storage", this.storage);
		localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "loadEncoding", this.loadEncoding);
		localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "password", this.password);
		localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "destFileName", this.destFileName);

		const requestOptions: request.Options = {
			method: "DELETE",
			qs: queryParameters,
			uri: localVarPath,
			json: true,
			body: ObjectSerializer.serialize(this.protectionRequest, this.protectionRequest.constructor.name === "Object" ? "importedProtectionRequest.ProtectionRequest" : this.protectionRequest.constructor.name),
		};

		return requestOptions;
	}

	/**
	 * get response type name
	 */
	getReturnType() : string {
		return "ProtectionDataResponse";
	}
}

/**
 * Request model for UpdateBookmark operation.
 * Updates document bookmark.
 */
export class UpdateBookmarkRequest implements RequestInterface {
    /**
     * The document name.
     */
    public name: string;

    /**
     * BookmarkData with new bookmark data.
     */
    public bookmarkData: importedBookmarkData.BookmarkData;

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

    public constructor(init?: Partial< UpdateBookmarkRequest >) {
        Object.assign(this, init);
    }

	/**
	 * create the requst options for this request
	 * @param configuration a configuration for the request
	 */
	createRequestOptions(configuration: Configuration) : request.OptionsWithUri {
		let localVarPath = configuration.getApiBaseUrl() + "/words/{name}/bookmarks/{bookmarkName}"
			.replace("/{" + "name" + "}", (this.name !== null && this.name !== undefined) ? "/" + String(this.name) : "")
			.replace("/{" + "bookmarkName" + "}", (this.bookmarkName !== null && this.bookmarkName !== undefined) ? "/" + String(this.bookmarkName) : "")
			.replace("//", "/");
		const queryParameters: any = {};
		// verify required parameter 'name' is not undefined
		if (this.name === undefined) {
		    throw new Error('Required parameter "name" was undefined when calling updateBookmark.');
		}

		// verify required parameter 'name' is not null
		if (this.name === null) {
		    throw new Error('Required parameter "name" was null when calling updateBookmark.');
		}

		// verify required parameter 'bookmarkData' is not undefined
		if (this.bookmarkData === undefined) {
		    throw new Error('Required parameter "bookmarkData" was undefined when calling updateBookmark.');
		}

		// verify required parameter 'bookmarkData' is not null
		if (this.bookmarkData === null) {
		    throw new Error('Required parameter "bookmarkData" was null when calling updateBookmark.');
		}

		// verify required parameter 'bookmarkName' is not undefined
		if (this.bookmarkName === undefined) {
		    throw new Error('Required parameter "bookmarkName" was undefined when calling updateBookmark.');
		}

		// verify required parameter 'bookmarkName' is not null
		if (this.bookmarkName === null) {
		    throw new Error('Required parameter "bookmarkName" was null when calling updateBookmark.');
		}

		localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "folder", this.folder);
		localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "storage", this.storage);
		localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "loadEncoding", this.loadEncoding);
		localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "password", this.password);
		localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "destFileName", this.destFileName);
		localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "revisionAuthor", this.revisionAuthor);
		localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "revisionDateTime", this.revisionDateTime);

		const requestOptions: request.Options = {
			method: "PUT",
			qs: queryParameters,
			uri: localVarPath,
			json: true,
			body: ObjectSerializer.serialize(this.bookmarkData, this.bookmarkData.constructor.name === "Object" ? "importedBookmarkData.BookmarkData" : this.bookmarkData.constructor.name),
		};

		return requestOptions;
	}

	/**
	 * get response type name
	 */
	getReturnType() : string {
		return "BookmarkResponse";
	}
}

/**
 * Request model for UpdateBorder operation.
 * 'nodePath' should refer to paragraph, cell or row.
 */
export class UpdateBorderRequest implements RequestInterface {
    /**
     * The document name.
     */
    public name: string;

    /**
     * Border properties.
     */
    public borderProperties: importedBorder.Border;

    /**
     * Border type.
     */
    public borderType: string;

    /**
     * Path to the node with border(node should be paragraph, cell or row).
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

	/**
	 * create the requst options for this request
	 * @param configuration a configuration for the request
	 */
	createRequestOptions(configuration: Configuration) : request.OptionsWithUri {
		let localVarPath = configuration.getApiBaseUrl() + "/words/{name}/{nodePath}/borders/{borderType}"
			.replace("/{" + "name" + "}", (this.name !== null && this.name !== undefined) ? "/" + String(this.name) : "")
			.replace("/{" + "borderType" + "}", (this.borderType !== null && this.borderType !== undefined) ? "/" + String(this.borderType) : "")
			.replace("/{" + "nodePath" + "}", (this.nodePath !== null && this.nodePath !== undefined) ? "/" + String(this.nodePath) : "")
			.replace("//", "/");
		const queryParameters: any = {};
		// verify required parameter 'name' is not undefined
		if (this.name === undefined) {
		    throw new Error('Required parameter "name" was undefined when calling updateBorder.');
		}

		// verify required parameter 'name' is not null
		if (this.name === null) {
		    throw new Error('Required parameter "name" was null when calling updateBorder.');
		}

		// verify required parameter 'borderProperties' is not undefined
		if (this.borderProperties === undefined) {
		    throw new Error('Required parameter "borderProperties" was undefined when calling updateBorder.');
		}

		// verify required parameter 'borderProperties' is not null
		if (this.borderProperties === null) {
		    throw new Error('Required parameter "borderProperties" was null when calling updateBorder.');
		}

		// verify required parameter 'borderType' is not undefined
		if (this.borderType === undefined) {
		    throw new Error('Required parameter "borderType" was undefined when calling updateBorder.');
		}

		// verify required parameter 'borderType' is not null
		if (this.borderType === null) {
		    throw new Error('Required parameter "borderType" was null when calling updateBorder.');
		}

		localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "folder", this.folder);
		localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "storage", this.storage);
		localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "loadEncoding", this.loadEncoding);
		localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "password", this.password);
		localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "destFileName", this.destFileName);
		localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "revisionAuthor", this.revisionAuthor);
		localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "revisionDateTime", this.revisionDateTime);

		const requestOptions: request.Options = {
			method: "PUT",
			qs: queryParameters,
			uri: localVarPath,
			json: true,
			body: ObjectSerializer.serialize(this.borderProperties, this.borderProperties.constructor.name === "Object" ? "importedBorder.Border" : this.borderProperties.constructor.name),
		};

		return requestOptions;
	}

	/**
	 * get response type name
	 */
	getReturnType() : string {
		return "BorderResponse";
	}
}

/**
 * Request model for UpdateComment operation.
 * Updates the comment, returns updated comment data.
 */
export class UpdateCommentRequest implements RequestInterface {
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

	/**
	 * create the requst options for this request
	 * @param configuration a configuration for the request
	 */
	createRequestOptions(configuration: Configuration) : request.OptionsWithUri {
		let localVarPath = configuration.getApiBaseUrl() + "/words/{name}/comments/{commentIndex}"
			.replace("/{" + "name" + "}", (this.name !== null && this.name !== undefined) ? "/" + String(this.name) : "")
			.replace("/{" + "commentIndex" + "}", (this.commentIndex !== null && this.commentIndex !== undefined) ? "/" + String(this.commentIndex) : "")
			.replace("//", "/");
		const queryParameters: any = {};
		// verify required parameter 'name' is not undefined
		if (this.name === undefined) {
		    throw new Error('Required parameter "name" was undefined when calling updateComment.');
		}

		// verify required parameter 'name' is not null
		if (this.name === null) {
		    throw new Error('Required parameter "name" was null when calling updateComment.');
		}

		// verify required parameter 'commentIndex' is not undefined
		if (this.commentIndex === undefined) {
		    throw new Error('Required parameter "commentIndex" was undefined when calling updateComment.');
		}

		// verify required parameter 'commentIndex' is not null
		if (this.commentIndex === null) {
		    throw new Error('Required parameter "commentIndex" was null when calling updateComment.');
		}

		// verify required parameter 'comment' is not undefined
		if (this.comment === undefined) {
		    throw new Error('Required parameter "comment" was undefined when calling updateComment.');
		}

		// verify required parameter 'comment' is not null
		if (this.comment === null) {
		    throw new Error('Required parameter "comment" was null when calling updateComment.');
		}

		localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "folder", this.folder);
		localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "storage", this.storage);
		localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "loadEncoding", this.loadEncoding);
		localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "password", this.password);
		localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "destFileName", this.destFileName);
		localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "revisionAuthor", this.revisionAuthor);
		localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "revisionDateTime", this.revisionDateTime);

		const requestOptions: request.Options = {
			method: "PUT",
			qs: queryParameters,
			uri: localVarPath,
			json: true,
			body: ObjectSerializer.serialize(this.comment, this.comment.constructor.name === "Object" ? "importedCommentUpdate.CommentUpdate" : this.comment.constructor.name),
		};

		return requestOptions;
	}

	/**
	 * get response type name
	 */
	getReturnType() : string {
		return "CommentResponse";
	}
}

/**
 * Request model for UpdateDrawingObject operation.
 * Updates drawing object, returns updated  drawing object's data.
 */
export class UpdateDrawingObjectRequest implements RequestInterface {
    /**
     * The document name.
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

    public constructor(init?: Partial< UpdateDrawingObjectRequest >) {
        Object.assign(this, init);
    }

	/**
	 * create the requst options for this request
	 * @param configuration a configuration for the request
	 */
	createRequestOptions(configuration: Configuration) : request.OptionsWithUri {
		let localVarPath = configuration.getApiBaseUrl() + "/words/{name}/{nodePath}/drawingObjects/{index}"
			.replace("/{" + "name" + "}", (this.name !== null && this.name !== undefined) ? "/" + String(this.name) : "")
			.replace("/{" + "index" + "}", (this.index !== null && this.index !== undefined) ? "/" + String(this.index) : "")
			.replace("/{" + "nodePath" + "}", (this.nodePath !== null && this.nodePath !== undefined) ? "/" + String(this.nodePath) : "")
			.replace("//", "/");
		const queryParameters: any = {};
		const formParams: any = {};
		// verify required parameter 'name' is not undefined
		if (this.name === undefined) {
		    throw new Error('Required parameter "name" was undefined when calling updateDrawingObject.');
		}

		// verify required parameter 'name' is not null
		if (this.name === null) {
		    throw new Error('Required parameter "name" was null when calling updateDrawingObject.');
		}

		// verify required parameter 'drawingObject' is not undefined
		if (this.drawingObject === undefined) {
		    throw new Error('Required parameter "drawingObject" was undefined when calling updateDrawingObject.');
		}

		// verify required parameter 'drawingObject' is not null
		if (this.drawingObject === null) {
		    throw new Error('Required parameter "drawingObject" was null when calling updateDrawingObject.');
		}

		// verify required parameter 'imageFile' is not undefined
		if (this.imageFile === undefined) {
		    throw new Error('Required parameter "imageFile" was undefined when calling updateDrawingObject.');
		}

		// verify required parameter 'imageFile' is not null
		if (this.imageFile === null) {
		    throw new Error('Required parameter "imageFile" was null when calling updateDrawingObject.');
		}

		// verify required parameter 'index' is not undefined
		if (this.index === undefined) {
		    throw new Error('Required parameter "index" was undefined when calling updateDrawingObject.');
		}

		// verify required parameter 'index' is not null
		if (this.index === null) {
		    throw new Error('Required parameter "index" was null when calling updateDrawingObject.');
		}

		localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "folder", this.folder);
		localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "storage", this.storage);
		localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "loadEncoding", this.loadEncoding);
		localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "password", this.password);
		localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "destFileName", this.destFileName);
		localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "revisionAuthor", this.revisionAuthor);
		localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "revisionDateTime", this.revisionDateTime);
		if (this.drawingObject !== undefined) {
		    formParams.DrawingObject = JSON.stringify(this.drawingObject);
		}
		if (this.imageFile !== undefined) {
		    formParams.ImageFile = this.imageFile;
		}

		const requestOptions: request.Options = {
			method: "PUT",
			qs: queryParameters,
			uri: localVarPath,
			json: true,
		};

		if (Object.keys(formParams).length > 0) {
			requestOptions.formData = formParams;
		}
		return requestOptions;
	}

	/**
	 * get response type name
	 */
	getReturnType() : string {
		return "DrawingObjectResponse";
	}
}

/**
 * Request model for UpdateField operation.
 * Updates field's properties, returns updated field's data.
 */
export class UpdateFieldRequest implements RequestInterface {
    /**
     * The document name.
     */
    public name: string;

    /**
     * Field data.
     */
    public field: importedFieldUpdate.FieldUpdate;

    /**
     * Object index.
     */
    public index: number;

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

    public constructor(init?: Partial< UpdateFieldRequest >) {
        Object.assign(this, init);
    }

	/**
	 * create the requst options for this request
	 * @param configuration a configuration for the request
	 */
	createRequestOptions(configuration: Configuration) : request.OptionsWithUri {
		let localVarPath = configuration.getApiBaseUrl() + "/words/{name}/{nodePath}/fields/{index}"
			.replace("/{" + "name" + "}", (this.name !== null && this.name !== undefined) ? "/" + String(this.name) : "")
			.replace("/{" + "index" + "}", (this.index !== null && this.index !== undefined) ? "/" + String(this.index) : "")
			.replace("/{" + "nodePath" + "}", (this.nodePath !== null && this.nodePath !== undefined) ? "/" + String(this.nodePath) : "")
			.replace("//", "/");
		const queryParameters: any = {};
		// verify required parameter 'name' is not undefined
		if (this.name === undefined) {
		    throw new Error('Required parameter "name" was undefined when calling updateField.');
		}

		// verify required parameter 'name' is not null
		if (this.name === null) {
		    throw new Error('Required parameter "name" was null when calling updateField.');
		}

		// verify required parameter 'field' is not undefined
		if (this.field === undefined) {
		    throw new Error('Required parameter "field" was undefined when calling updateField.');
		}

		// verify required parameter 'field' is not null
		if (this.field === null) {
		    throw new Error('Required parameter "field" was null when calling updateField.');
		}

		// verify required parameter 'index' is not undefined
		if (this.index === undefined) {
		    throw new Error('Required parameter "index" was undefined when calling updateField.');
		}

		// verify required parameter 'index' is not null
		if (this.index === null) {
		    throw new Error('Required parameter "index" was null when calling updateField.');
		}

		localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "folder", this.folder);
		localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "storage", this.storage);
		localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "loadEncoding", this.loadEncoding);
		localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "password", this.password);
		localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "destFileName", this.destFileName);
		localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "revisionAuthor", this.revisionAuthor);
		localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "revisionDateTime", this.revisionDateTime);

		const requestOptions: request.Options = {
			method: "PUT",
			qs: queryParameters,
			uri: localVarPath,
			json: true,
			body: ObjectSerializer.serialize(this.field, this.field.constructor.name === "Object" ? "importedFieldUpdate.FieldUpdate" : this.field.constructor.name),
		};

		return requestOptions;
	}

	/**
	 * get response type name
	 */
	getReturnType() : string {
		return "FieldResponse";
	}
}

/**
 * Request model for UpdateFields operation.
 * Updates (reevaluate) fields in document.
 */
export class UpdateFieldsRequest implements RequestInterface {
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

    public constructor(init?: Partial< UpdateFieldsRequest >) {
        Object.assign(this, init);
    }

	/**
	 * create the requst options for this request
	 * @param configuration a configuration for the request
	 */
	createRequestOptions(configuration: Configuration) : request.OptionsWithUri {
		let localVarPath = configuration.getApiBaseUrl() + "/words/{name}/updateFields"
			.replace("/{" + "name" + "}", (this.name !== null && this.name !== undefined) ? "/" + String(this.name) : "")
			.replace("//", "/");
		const queryParameters: any = {};
		// verify required parameter 'name' is not undefined
		if (this.name === undefined) {
		    throw new Error('Required parameter "name" was undefined when calling updateFields.');
		}

		// verify required parameter 'name' is not null
		if (this.name === null) {
		    throw new Error('Required parameter "name" was null when calling updateFields.');
		}

		localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "folder", this.folder);
		localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "storage", this.storage);
		localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "loadEncoding", this.loadEncoding);
		localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "password", this.password);
		localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "destFileName", this.destFileName);

		const requestOptions: request.Options = {
			method: "PUT",
			qs: queryParameters,
			uri: localVarPath,
			json: true,
		};

		return requestOptions;
	}

	/**
	 * get response type name
	 */
	getReturnType() : string {
		return "DocumentResponse";
	}
}

/**
 * Request model for UpdateFootnote operation.
 * Updates footnote's properties, returns updated run's data.
 */
export class UpdateFootnoteRequest implements RequestInterface {
    /**
     * The document name.
     */
    public name: string;

    /**
     * Footnote data.
     */
    public footnoteDto: importedFootnoteUpdate.FootnoteUpdate;

    /**
     * Object index.
     */
    public index: number;

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

    public constructor(init?: Partial< UpdateFootnoteRequest >) {
        Object.assign(this, init);
    }

	/**
	 * create the requst options for this request
	 * @param configuration a configuration for the request
	 */
	createRequestOptions(configuration: Configuration) : request.OptionsWithUri {
		let localVarPath = configuration.getApiBaseUrl() + "/words/{name}/{nodePath}/footnotes/{index}"
			.replace("/{" + "name" + "}", (this.name !== null && this.name !== undefined) ? "/" + String(this.name) : "")
			.replace("/{" + "index" + "}", (this.index !== null && this.index !== undefined) ? "/" + String(this.index) : "")
			.replace("/{" + "nodePath" + "}", (this.nodePath !== null && this.nodePath !== undefined) ? "/" + String(this.nodePath) : "")
			.replace("//", "/");
		const queryParameters: any = {};
		// verify required parameter 'name' is not undefined
		if (this.name === undefined) {
		    throw new Error('Required parameter "name" was undefined when calling updateFootnote.');
		}

		// verify required parameter 'name' is not null
		if (this.name === null) {
		    throw new Error('Required parameter "name" was null when calling updateFootnote.');
		}

		// verify required parameter 'footnoteDto' is not undefined
		if (this.footnoteDto === undefined) {
		    throw new Error('Required parameter "footnoteDto" was undefined when calling updateFootnote.');
		}

		// verify required parameter 'footnoteDto' is not null
		if (this.footnoteDto === null) {
		    throw new Error('Required parameter "footnoteDto" was null when calling updateFootnote.');
		}

		// verify required parameter 'index' is not undefined
		if (this.index === undefined) {
		    throw new Error('Required parameter "index" was undefined when calling updateFootnote.');
		}

		// verify required parameter 'index' is not null
		if (this.index === null) {
		    throw new Error('Required parameter "index" was null when calling updateFootnote.');
		}

		localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "folder", this.folder);
		localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "storage", this.storage);
		localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "loadEncoding", this.loadEncoding);
		localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "password", this.password);
		localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "destFileName", this.destFileName);
		localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "revisionAuthor", this.revisionAuthor);
		localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "revisionDateTime", this.revisionDateTime);

		const requestOptions: request.Options = {
			method: "PUT",
			qs: queryParameters,
			uri: localVarPath,
			json: true,
			body: ObjectSerializer.serialize(this.footnoteDto, this.footnoteDto.constructor.name === "Object" ? "importedFootnoteUpdate.FootnoteUpdate" : this.footnoteDto.constructor.name),
		};

		return requestOptions;
	}

	/**
	 * get response type name
	 */
	getReturnType() : string {
		return "FootnoteResponse";
	}
}

/**
 * Request model for UpdateFormField operation.
 * Updates properties of form field, returns updated form field.
 */
export class UpdateFormFieldRequest implements RequestInterface {
    /**
     * The document name.
     */
    public name: string;

    /**
     * From field data.
     */
    public formField: importedFormField.FormField;

    /**
     * Object index.
     */
    public index: number;

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

    public constructor(init?: Partial< UpdateFormFieldRequest >) {
        Object.assign(this, init);
    }

	/**
	 * create the requst options for this request
	 * @param configuration a configuration for the request
	 */
	createRequestOptions(configuration: Configuration) : request.OptionsWithUri {
		let localVarPath = configuration.getApiBaseUrl() + "/words/{name}/{nodePath}/formfields/{index}"
			.replace("/{" + "name" + "}", (this.name !== null && this.name !== undefined) ? "/" + String(this.name) : "")
			.replace("/{" + "index" + "}", (this.index !== null && this.index !== undefined) ? "/" + String(this.index) : "")
			.replace("/{" + "nodePath" + "}", (this.nodePath !== null && this.nodePath !== undefined) ? "/" + String(this.nodePath) : "")
			.replace("//", "/");
		const queryParameters: any = {};
		// verify required parameter 'name' is not undefined
		if (this.name === undefined) {
		    throw new Error('Required parameter "name" was undefined when calling updateFormField.');
		}

		// verify required parameter 'name' is not null
		if (this.name === null) {
		    throw new Error('Required parameter "name" was null when calling updateFormField.');
		}

		// verify required parameter 'formField' is not undefined
		if (this.formField === undefined) {
		    throw new Error('Required parameter "formField" was undefined when calling updateFormField.');
		}

		// verify required parameter 'formField' is not null
		if (this.formField === null) {
		    throw new Error('Required parameter "formField" was null when calling updateFormField.');
		}

		// verify required parameter 'index' is not undefined
		if (this.index === undefined) {
		    throw new Error('Required parameter "index" was undefined when calling updateFormField.');
		}

		// verify required parameter 'index' is not null
		if (this.index === null) {
		    throw new Error('Required parameter "index" was null when calling updateFormField.');
		}

		localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "folder", this.folder);
		localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "storage", this.storage);
		localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "loadEncoding", this.loadEncoding);
		localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "password", this.password);
		localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "destFileName", this.destFileName);
		localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "revisionAuthor", this.revisionAuthor);
		localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "revisionDateTime", this.revisionDateTime);

		const requestOptions: request.Options = {
			method: "PUT",
			qs: queryParameters,
			uri: localVarPath,
			json: true,
			body: ObjectSerializer.serialize(this.formField, this.formField.constructor.name === "Object" ? "importedFormField.FormField" : this.formField.constructor.name),
		};

		return requestOptions;
	}

	/**
	 * get response type name
	 */
	getReturnType() : string {
		return "FormFieldResponse";
	}
}

/**
 * Request model for UpdateList operation.
 * Updates list properties, returns updated list.
 */
export class UpdateListRequest implements RequestInterface {
    /**
     * The document name.
     */
    public name: string;

    /**
     * List object.
     */
    public listUpdate: importedListUpdate.ListUpdate;

    /**
     * List unique identifier.
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

	/**
	 * create the requst options for this request
	 * @param configuration a configuration for the request
	 */
	createRequestOptions(configuration: Configuration) : request.OptionsWithUri {
		let localVarPath = configuration.getApiBaseUrl() + "/words/{name}/lists/{listId}"
			.replace("/{" + "name" + "}", (this.name !== null && this.name !== undefined) ? "/" + String(this.name) : "")
			.replace("/{" + "listId" + "}", (this.listId !== null && this.listId !== undefined) ? "/" + String(this.listId) : "")
			.replace("//", "/");
		const queryParameters: any = {};
		// verify required parameter 'name' is not undefined
		if (this.name === undefined) {
		    throw new Error('Required parameter "name" was undefined when calling updateList.');
		}

		// verify required parameter 'name' is not null
		if (this.name === null) {
		    throw new Error('Required parameter "name" was null when calling updateList.');
		}

		// verify required parameter 'listUpdate' is not undefined
		if (this.listUpdate === undefined) {
		    throw new Error('Required parameter "listUpdate" was undefined when calling updateList.');
		}

		// verify required parameter 'listUpdate' is not null
		if (this.listUpdate === null) {
		    throw new Error('Required parameter "listUpdate" was null when calling updateList.');
		}

		// verify required parameter 'listId' is not undefined
		if (this.listId === undefined) {
		    throw new Error('Required parameter "listId" was undefined when calling updateList.');
		}

		// verify required parameter 'listId' is not null
		if (this.listId === null) {
		    throw new Error('Required parameter "listId" was null when calling updateList.');
		}

		localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "folder", this.folder);
		localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "storage", this.storage);
		localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "loadEncoding", this.loadEncoding);
		localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "password", this.password);
		localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "destFileName", this.destFileName);
		localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "revisionAuthor", this.revisionAuthor);
		localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "revisionDateTime", this.revisionDateTime);

		const requestOptions: request.Options = {
			method: "PUT",
			qs: queryParameters,
			uri: localVarPath,
			json: true,
			body: ObjectSerializer.serialize(this.listUpdate, this.listUpdate.constructor.name === "Object" ? "importedListUpdate.ListUpdate" : this.listUpdate.constructor.name),
		};

		return requestOptions;
	}

	/**
	 * get response type name
	 */
	getReturnType() : string {
		return "ListResponse";
	}
}

/**
 * Request model for UpdateListLevel operation.
 * Updates list level in document list, returns updated list.
 */
export class UpdateListLevelRequest implements RequestInterface {
    /**
     * The document name.
     */
    public name: string;

    /**
     * List object.
     */
    public listUpdate: importedListLevelUpdate.ListLevelUpdate;

    /**
     * List unique identifier.
     */
    public listId: number;

    /**
     * List level identifier.
     */
    public listLevel: number;

    /**
     * Original document folder.
     */
    public folder: string;

    /**
     * Original document storage.
     */
    public storage: string;

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

	/**
	 * create the requst options for this request
	 * @param configuration a configuration for the request
	 */
	createRequestOptions(configuration: Configuration) : request.OptionsWithUri {
		let localVarPath = configuration.getApiBaseUrl() + "/words/{name}/lists/{listId}/listLevels/{listLevel}"
			.replace("/{" + "name" + "}", (this.name !== null && this.name !== undefined) ? "/" + String(this.name) : "")
			.replace("/{" + "listId" + "}", (this.listId !== null && this.listId !== undefined) ? "/" + String(this.listId) : "")
			.replace("/{" + "listLevel" + "}", (this.listLevel !== null && this.listLevel !== undefined) ? "/" + String(this.listLevel) : "")
			.replace("//", "/");
		const queryParameters: any = {};
		// verify required parameter 'name' is not undefined
		if (this.name === undefined) {
		    throw new Error('Required parameter "name" was undefined when calling updateListLevel.');
		}

		// verify required parameter 'name' is not null
		if (this.name === null) {
		    throw new Error('Required parameter "name" was null when calling updateListLevel.');
		}

		// verify required parameter 'listUpdate' is not undefined
		if (this.listUpdate === undefined) {
		    throw new Error('Required parameter "listUpdate" was undefined when calling updateListLevel.');
		}

		// verify required parameter 'listUpdate' is not null
		if (this.listUpdate === null) {
		    throw new Error('Required parameter "listUpdate" was null when calling updateListLevel.');
		}

		// verify required parameter 'listId' is not undefined
		if (this.listId === undefined) {
		    throw new Error('Required parameter "listId" was undefined when calling updateListLevel.');
		}

		// verify required parameter 'listId' is not null
		if (this.listId === null) {
		    throw new Error('Required parameter "listId" was null when calling updateListLevel.');
		}

		// verify required parameter 'listLevel' is not undefined
		if (this.listLevel === undefined) {
		    throw new Error('Required parameter "listLevel" was undefined when calling updateListLevel.');
		}

		// verify required parameter 'listLevel' is not null
		if (this.listLevel === null) {
		    throw new Error('Required parameter "listLevel" was null when calling updateListLevel.');
		}

		localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "folder", this.folder);
		localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "storage", this.storage);
		localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "loadEncoding", this.loadEncoding);
		localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "password", this.password);
		localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "destFileName", this.destFileName);
		localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "revisionAuthor", this.revisionAuthor);
		localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "revisionDateTime", this.revisionDateTime);

		const requestOptions: request.Options = {
			method: "PUT",
			qs: queryParameters,
			uri: localVarPath,
			json: true,
			body: ObjectSerializer.serialize(this.listUpdate, this.listUpdate.constructor.name === "Object" ? "importedListLevelUpdate.ListLevelUpdate" : this.listUpdate.constructor.name),
		};

		return requestOptions;
	}

	/**
	 * get response type name
	 */
	getReturnType() : string {
		return "ListResponse";
	}
}

/**
 * Request model for UpdateParagraphFormat operation.
 * Updates paragraph format properties, returns updated format properties.
 */
export class UpdateParagraphFormatRequest implements RequestInterface {
    /**
     * The document name.
     */
    public name: string;

    /**
     * Paragraph format object.
     */
    public dto: importedParagraphFormatUpdate.ParagraphFormatUpdate;

    /**
     * Object index.
     */
    public index: number;

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

    public constructor(init?: Partial< UpdateParagraphFormatRequest >) {
        Object.assign(this, init);
    }

	/**
	 * create the requst options for this request
	 * @param configuration a configuration for the request
	 */
	createRequestOptions(configuration: Configuration) : request.OptionsWithUri {
		let localVarPath = configuration.getApiBaseUrl() + "/words/{name}/{nodePath}/paragraphs/{index}/format"
			.replace("/{" + "name" + "}", (this.name !== null && this.name !== undefined) ? "/" + String(this.name) : "")
			.replace("/{" + "index" + "}", (this.index !== null && this.index !== undefined) ? "/" + String(this.index) : "")
			.replace("/{" + "nodePath" + "}", (this.nodePath !== null && this.nodePath !== undefined) ? "/" + String(this.nodePath) : "")
			.replace("//", "/");
		const queryParameters: any = {};
		// verify required parameter 'name' is not undefined
		if (this.name === undefined) {
		    throw new Error('Required parameter "name" was undefined when calling updateParagraphFormat.');
		}

		// verify required parameter 'name' is not null
		if (this.name === null) {
		    throw new Error('Required parameter "name" was null when calling updateParagraphFormat.');
		}

		// verify required parameter 'dto' is not undefined
		if (this.dto === undefined) {
		    throw new Error('Required parameter "dto" was undefined when calling updateParagraphFormat.');
		}

		// verify required parameter 'dto' is not null
		if (this.dto === null) {
		    throw new Error('Required parameter "dto" was null when calling updateParagraphFormat.');
		}

		// verify required parameter 'index' is not undefined
		if (this.index === undefined) {
		    throw new Error('Required parameter "index" was undefined when calling updateParagraphFormat.');
		}

		// verify required parameter 'index' is not null
		if (this.index === null) {
		    throw new Error('Required parameter "index" was null when calling updateParagraphFormat.');
		}

		localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "folder", this.folder);
		localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "storage", this.storage);
		localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "loadEncoding", this.loadEncoding);
		localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "password", this.password);
		localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "destFileName", this.destFileName);
		localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "revisionAuthor", this.revisionAuthor);
		localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "revisionDateTime", this.revisionDateTime);

		const requestOptions: request.Options = {
			method: "PUT",
			qs: queryParameters,
			uri: localVarPath,
			json: true,
			body: ObjectSerializer.serialize(this.dto, this.dto.constructor.name === "Object" ? "importedParagraphFormatUpdate.ParagraphFormatUpdate" : this.dto.constructor.name),
		};

		return requestOptions;
	}

	/**
	 * get response type name
	 */
	getReturnType() : string {
		return "ParagraphFormatResponse";
	}
}

/**
 * Request model for UpdateParagraphListFormat operation.
 * Updates paragraph list format properties, returns updated list format properties.
 */
export class UpdateParagraphListFormatRequest implements RequestInterface {
    /**
     * The document name.
     */
    public name: string;

    /**
     * Paragraph format object.
     */
    public dto: importedListFormatUpdate.ListFormatUpdate;

    /**
     * Object index.
     */
    public index: number;

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

    public constructor(init?: Partial< UpdateParagraphListFormatRequest >) {
        Object.assign(this, init);
    }

	/**
	 * create the requst options for this request
	 * @param configuration a configuration for the request
	 */
	createRequestOptions(configuration: Configuration) : request.OptionsWithUri {
		let localVarPath = configuration.getApiBaseUrl() + "/words/{name}/{nodePath}/paragraphs/{index}/listFormat"
			.replace("/{" + "name" + "}", (this.name !== null && this.name !== undefined) ? "/" + String(this.name) : "")
			.replace("/{" + "index" + "}", (this.index !== null && this.index !== undefined) ? "/" + String(this.index) : "")
			.replace("/{" + "nodePath" + "}", (this.nodePath !== null && this.nodePath !== undefined) ? "/" + String(this.nodePath) : "")
			.replace("//", "/");
		const queryParameters: any = {};
		// verify required parameter 'name' is not undefined
		if (this.name === undefined) {
		    throw new Error('Required parameter "name" was undefined when calling updateParagraphListFormat.');
		}

		// verify required parameter 'name' is not null
		if (this.name === null) {
		    throw new Error('Required parameter "name" was null when calling updateParagraphListFormat.');
		}

		// verify required parameter 'dto' is not undefined
		if (this.dto === undefined) {
		    throw new Error('Required parameter "dto" was undefined when calling updateParagraphListFormat.');
		}

		// verify required parameter 'dto' is not null
		if (this.dto === null) {
		    throw new Error('Required parameter "dto" was null when calling updateParagraphListFormat.');
		}

		// verify required parameter 'index' is not undefined
		if (this.index === undefined) {
		    throw new Error('Required parameter "index" was undefined when calling updateParagraphListFormat.');
		}

		// verify required parameter 'index' is not null
		if (this.index === null) {
		    throw new Error('Required parameter "index" was null when calling updateParagraphListFormat.');
		}

		localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "folder", this.folder);
		localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "storage", this.storage);
		localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "loadEncoding", this.loadEncoding);
		localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "password", this.password);
		localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "destFileName", this.destFileName);
		localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "revisionAuthor", this.revisionAuthor);
		localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "revisionDateTime", this.revisionDateTime);

		const requestOptions: request.Options = {
			method: "PUT",
			qs: queryParameters,
			uri: localVarPath,
			json: true,
			body: ObjectSerializer.serialize(this.dto, this.dto.constructor.name === "Object" ? "importedListFormatUpdate.ListFormatUpdate" : this.dto.constructor.name),
		};

		return requestOptions;
	}

	/**
	 * get response type name
	 */
	getReturnType() : string {
		return "ParagraphListFormatResponse";
	}
}

/**
 * Request model for UpdateRun operation.
 * Updates run's properties, returns updated run's data.
 */
export class UpdateRunRequest implements RequestInterface {
    /**
     * The document name.
     */
    public name: string;

    /**
     * Run data.
     */
    public run: importedRunUpdate.RunUpdate;

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

    public constructor(init?: Partial< UpdateRunRequest >) {
        Object.assign(this, init);
    }

	/**
	 * create the requst options for this request
	 * @param configuration a configuration for the request
	 */
	createRequestOptions(configuration: Configuration) : request.OptionsWithUri {
		let localVarPath = configuration.getApiBaseUrl() + "/words/{name}/{paragraphPath}/runs/{index}"
			.replace("/{" + "name" + "}", (this.name !== null && this.name !== undefined) ? "/" + String(this.name) : "")
			.replace("/{" + "paragraphPath" + "}", (this.paragraphPath !== null && this.paragraphPath !== undefined) ? "/" + String(this.paragraphPath) : "")
			.replace("/{" + "index" + "}", (this.index !== null && this.index !== undefined) ? "/" + String(this.index) : "")
			.replace("//", "/");
		const queryParameters: any = {};
		// verify required parameter 'name' is not undefined
		if (this.name === undefined) {
		    throw new Error('Required parameter "name" was undefined when calling updateRun.');
		}

		// verify required parameter 'name' is not null
		if (this.name === null) {
		    throw new Error('Required parameter "name" was null when calling updateRun.');
		}

		// verify required parameter 'run' is not undefined
		if (this.run === undefined) {
		    throw new Error('Required parameter "run" was undefined when calling updateRun.');
		}

		// verify required parameter 'run' is not null
		if (this.run === null) {
		    throw new Error('Required parameter "run" was null when calling updateRun.');
		}

		// verify required parameter 'paragraphPath' is not undefined
		if (this.paragraphPath === undefined) {
		    throw new Error('Required parameter "paragraphPath" was undefined when calling updateRun.');
		}

		// verify required parameter 'index' is not undefined
		if (this.index === undefined) {
		    throw new Error('Required parameter "index" was undefined when calling updateRun.');
		}

		// verify required parameter 'index' is not null
		if (this.index === null) {
		    throw new Error('Required parameter "index" was null when calling updateRun.');
		}

		localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "folder", this.folder);
		localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "storage", this.storage);
		localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "loadEncoding", this.loadEncoding);
		localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "password", this.password);
		localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "destFileName", this.destFileName);
		localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "revisionAuthor", this.revisionAuthor);
		localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "revisionDateTime", this.revisionDateTime);

		const requestOptions: request.Options = {
			method: "PUT",
			qs: queryParameters,
			uri: localVarPath,
			json: true,
			body: ObjectSerializer.serialize(this.run, this.run.constructor.name === "Object" ? "importedRunUpdate.RunUpdate" : this.run.constructor.name),
		};

		return requestOptions;
	}

	/**
	 * get response type name
	 */
	getReturnType() : string {
		return "RunResponse";
	}
}

/**
 * Request model for UpdateRunFont operation.
 * Updates font properties, returns updated font data.
 */
export class UpdateRunFontRequest implements RequestInterface {
    /**
     * The document name.
     */
    public name: string;

    /**
     * Font dto object.
     */
    public fontDto: importedFont.Font;

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

    public constructor(init?: Partial< UpdateRunFontRequest >) {
        Object.assign(this, init);
    }

	/**
	 * create the requst options for this request
	 * @param configuration a configuration for the request
	 */
	createRequestOptions(configuration: Configuration) : request.OptionsWithUri {
		let localVarPath = configuration.getApiBaseUrl() + "/words/{name}/{paragraphPath}/runs/{index}/font"
			.replace("/{" + "name" + "}", (this.name !== null && this.name !== undefined) ? "/" + String(this.name) : "")
			.replace("/{" + "paragraphPath" + "}", (this.paragraphPath !== null && this.paragraphPath !== undefined) ? "/" + String(this.paragraphPath) : "")
			.replace("/{" + "index" + "}", (this.index !== null && this.index !== undefined) ? "/" + String(this.index) : "")
			.replace("//", "/");
		const queryParameters: any = {};
		// verify required parameter 'name' is not undefined
		if (this.name === undefined) {
		    throw new Error('Required parameter "name" was undefined when calling updateRunFont.');
		}

		// verify required parameter 'name' is not null
		if (this.name === null) {
		    throw new Error('Required parameter "name" was null when calling updateRunFont.');
		}

		// verify required parameter 'fontDto' is not undefined
		if (this.fontDto === undefined) {
		    throw new Error('Required parameter "fontDto" was undefined when calling updateRunFont.');
		}

		// verify required parameter 'fontDto' is not null
		if (this.fontDto === null) {
		    throw new Error('Required parameter "fontDto" was null when calling updateRunFont.');
		}

		// verify required parameter 'paragraphPath' is not undefined
		if (this.paragraphPath === undefined) {
		    throw new Error('Required parameter "paragraphPath" was undefined when calling updateRunFont.');
		}

		// verify required parameter 'index' is not undefined
		if (this.index === undefined) {
		    throw new Error('Required parameter "index" was undefined when calling updateRunFont.');
		}

		// verify required parameter 'index' is not null
		if (this.index === null) {
		    throw new Error('Required parameter "index" was null when calling updateRunFont.');
		}

		localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "folder", this.folder);
		localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "storage", this.storage);
		localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "loadEncoding", this.loadEncoding);
		localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "password", this.password);
		localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "destFileName", this.destFileName);
		localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "revisionAuthor", this.revisionAuthor);
		localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "revisionDateTime", this.revisionDateTime);

		const requestOptions: request.Options = {
			method: "PUT",
			qs: queryParameters,
			uri: localVarPath,
			json: true,
			body: ObjectSerializer.serialize(this.fontDto, this.fontDto.constructor.name === "Object" ? "importedFont.Font" : this.fontDto.constructor.name),
		};

		return requestOptions;
	}

	/**
	 * get response type name
	 */
	getReturnType() : string {
		return "FontResponse";
	}
}

/**
 * Request model for UpdateSectionPageSetup operation.
 * Updates page setup of section.
 */
export class UpdateSectionPageSetupRequest implements RequestInterface {
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

	/**
	 * create the requst options for this request
	 * @param configuration a configuration for the request
	 */
	createRequestOptions(configuration: Configuration) : request.OptionsWithUri {
		let localVarPath = configuration.getApiBaseUrl() + "/words/{name}/sections/{sectionIndex}/pageSetup"
			.replace("/{" + "name" + "}", (this.name !== null && this.name !== undefined) ? "/" + String(this.name) : "")
			.replace("/{" + "sectionIndex" + "}", (this.sectionIndex !== null && this.sectionIndex !== undefined) ? "/" + String(this.sectionIndex) : "")
			.replace("//", "/");
		const queryParameters: any = {};
		// verify required parameter 'name' is not undefined
		if (this.name === undefined) {
		    throw new Error('Required parameter "name" was undefined when calling updateSectionPageSetup.');
		}

		// verify required parameter 'name' is not null
		if (this.name === null) {
		    throw new Error('Required parameter "name" was null when calling updateSectionPageSetup.');
		}

		// verify required parameter 'sectionIndex' is not undefined
		if (this.sectionIndex === undefined) {
		    throw new Error('Required parameter "sectionIndex" was undefined when calling updateSectionPageSetup.');
		}

		// verify required parameter 'sectionIndex' is not null
		if (this.sectionIndex === null) {
		    throw new Error('Required parameter "sectionIndex" was null when calling updateSectionPageSetup.');
		}

		// verify required parameter 'pageSetup' is not undefined
		if (this.pageSetup === undefined) {
		    throw new Error('Required parameter "pageSetup" was undefined when calling updateSectionPageSetup.');
		}

		// verify required parameter 'pageSetup' is not null
		if (this.pageSetup === null) {
		    throw new Error('Required parameter "pageSetup" was null when calling updateSectionPageSetup.');
		}

		localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "folder", this.folder);
		localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "storage", this.storage);
		localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "loadEncoding", this.loadEncoding);
		localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "password", this.password);
		localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "destFileName", this.destFileName);
		localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "revisionAuthor", this.revisionAuthor);
		localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "revisionDateTime", this.revisionDateTime);

		const requestOptions: request.Options = {
			method: "PUT",
			qs: queryParameters,
			uri: localVarPath,
			json: true,
			body: ObjectSerializer.serialize(this.pageSetup, this.pageSetup.constructor.name === "Object" ? "importedPageSetup.PageSetup" : this.pageSetup.constructor.name),
		};

		return requestOptions;
	}

	/**
	 * get response type name
	 */
	getReturnType() : string {
		return "SectionPageSetupResponse";
	}
}

/**
 * Request model for UpdateStyle operation.
 * Updates style properties, returns an updated style.
 */
export class UpdateStyleRequest implements RequestInterface {
    /**
     * The document name.
     */
    public name: string;

    /**
     * Style properties to update.
     */
    public styleUpdate: importedStyleUpdate.StyleUpdate;

    /**
     * Style name.
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

	/**
	 * create the requst options for this request
	 * @param configuration a configuration for the request
	 */
	createRequestOptions(configuration: Configuration) : request.OptionsWithUri {
		let localVarPath = configuration.getApiBaseUrl() + "/words/{name}/styles/{styleName}/update"
			.replace("/{" + "name" + "}", (this.name !== null && this.name !== undefined) ? "/" + String(this.name) : "")
			.replace("/{" + "styleName" + "}", (this.styleName !== null && this.styleName !== undefined) ? "/" + String(this.styleName) : "")
			.replace("//", "/");
		const queryParameters: any = {};
		// verify required parameter 'name' is not undefined
		if (this.name === undefined) {
		    throw new Error('Required parameter "name" was undefined when calling updateStyle.');
		}

		// verify required parameter 'name' is not null
		if (this.name === null) {
		    throw new Error('Required parameter "name" was null when calling updateStyle.');
		}

		// verify required parameter 'styleUpdate' is not undefined
		if (this.styleUpdate === undefined) {
		    throw new Error('Required parameter "styleUpdate" was undefined when calling updateStyle.');
		}

		// verify required parameter 'styleUpdate' is not null
		if (this.styleUpdate === null) {
		    throw new Error('Required parameter "styleUpdate" was null when calling updateStyle.');
		}

		// verify required parameter 'styleName' is not undefined
		if (this.styleName === undefined) {
		    throw new Error('Required parameter "styleName" was undefined when calling updateStyle.');
		}

		// verify required parameter 'styleName' is not null
		if (this.styleName === null) {
		    throw new Error('Required parameter "styleName" was null when calling updateStyle.');
		}

		localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "folder", this.folder);
		localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "storage", this.storage);
		localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "loadEncoding", this.loadEncoding);
		localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "password", this.password);
		localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "destFileName", this.destFileName);
		localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "revisionAuthor", this.revisionAuthor);
		localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "revisionDateTime", this.revisionDateTime);

		const requestOptions: request.Options = {
			method: "PUT",
			qs: queryParameters,
			uri: localVarPath,
			json: true,
			body: ObjectSerializer.serialize(this.styleUpdate, this.styleUpdate.constructor.name === "Object" ? "importedStyleUpdate.StyleUpdate" : this.styleUpdate.constructor.name),
		};

		return requestOptions;
	}

	/**
	 * get response type name
	 */
	getReturnType() : string {
		return "StyleResponse";
	}
}

/**
 * Request model for UpdateTableCellFormat operation.
 * Updates a table cell format.
 */
export class UpdateTableCellFormatRequest implements RequestInterface {
    /**
     * The document name.
     */
    public name: string;

    /**
     * The properties.
     */
    public format: importedTableCellFormat.TableCellFormat;

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

    public constructor(init?: Partial< UpdateTableCellFormatRequest >) {
        Object.assign(this, init);
    }

	/**
	 * create the requst options for this request
	 * @param configuration a configuration for the request
	 */
	createRequestOptions(configuration: Configuration) : request.OptionsWithUri {
		let localVarPath = configuration.getApiBaseUrl() + "/words/{name}/{tableRowPath}/cells/{index}/cellformat"
			.replace("/{" + "name" + "}", (this.name !== null && this.name !== undefined) ? "/" + String(this.name) : "")
			.replace("/{" + "tableRowPath" + "}", (this.tableRowPath !== null && this.tableRowPath !== undefined) ? "/" + String(this.tableRowPath) : "")
			.replace("/{" + "index" + "}", (this.index !== null && this.index !== undefined) ? "/" + String(this.index) : "")
			.replace("//", "/");
		const queryParameters: any = {};
		// verify required parameter 'name' is not undefined
		if (this.name === undefined) {
		    throw new Error('Required parameter "name" was undefined when calling updateTableCellFormat.');
		}

		// verify required parameter 'name' is not null
		if (this.name === null) {
		    throw new Error('Required parameter "name" was null when calling updateTableCellFormat.');
		}

		// verify required parameter 'format' is not undefined
		if (this.format === undefined) {
		    throw new Error('Required parameter "format" was undefined when calling updateTableCellFormat.');
		}

		// verify required parameter 'format' is not null
		if (this.format === null) {
		    throw new Error('Required parameter "format" was null when calling updateTableCellFormat.');
		}

		// verify required parameter 'tableRowPath' is not undefined
		if (this.tableRowPath === undefined) {
		    throw new Error('Required parameter "tableRowPath" was undefined when calling updateTableCellFormat.');
		}

		// verify required parameter 'index' is not undefined
		if (this.index === undefined) {
		    throw new Error('Required parameter "index" was undefined when calling updateTableCellFormat.');
		}

		// verify required parameter 'index' is not null
		if (this.index === null) {
		    throw new Error('Required parameter "index" was null when calling updateTableCellFormat.');
		}

		localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "folder", this.folder);
		localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "storage", this.storage);
		localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "loadEncoding", this.loadEncoding);
		localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "password", this.password);
		localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "destFileName", this.destFileName);
		localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "revisionAuthor", this.revisionAuthor);
		localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "revisionDateTime", this.revisionDateTime);

		const requestOptions: request.Options = {
			method: "PUT",
			qs: queryParameters,
			uri: localVarPath,
			json: true,
			body: ObjectSerializer.serialize(this.format, this.format.constructor.name === "Object" ? "importedTableCellFormat.TableCellFormat" : this.format.constructor.name),
		};

		return requestOptions;
	}

	/**
	 * get response type name
	 */
	getReturnType() : string {
		return "TableCellFormatResponse";
	}
}

/**
 * Request model for UpdateTableProperties operation.
 * Updates a table properties.
 */
export class UpdateTablePropertiesRequest implements RequestInterface {
    /**
     * The document name.
     */
    public name: string;

    /**
     * The properties.
     */
    public properties: importedTableProperties.TableProperties;

    /**
     * Object index.
     */
    public index: number;

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

    public constructor(init?: Partial< UpdateTablePropertiesRequest >) {
        Object.assign(this, init);
    }

	/**
	 * create the requst options for this request
	 * @param configuration a configuration for the request
	 */
	createRequestOptions(configuration: Configuration) : request.OptionsWithUri {
		let localVarPath = configuration.getApiBaseUrl() + "/words/{name}/{nodePath}/tables/{index}/properties"
			.replace("/{" + "name" + "}", (this.name !== null && this.name !== undefined) ? "/" + String(this.name) : "")
			.replace("/{" + "index" + "}", (this.index !== null && this.index !== undefined) ? "/" + String(this.index) : "")
			.replace("/{" + "nodePath" + "}", (this.nodePath !== null && this.nodePath !== undefined) ? "/" + String(this.nodePath) : "")
			.replace("//", "/");
		const queryParameters: any = {};
		// verify required parameter 'name' is not undefined
		if (this.name === undefined) {
		    throw new Error('Required parameter "name" was undefined when calling updateTableProperties.');
		}

		// verify required parameter 'name' is not null
		if (this.name === null) {
		    throw new Error('Required parameter "name" was null when calling updateTableProperties.');
		}

		// verify required parameter 'properties' is not undefined
		if (this.properties === undefined) {
		    throw new Error('Required parameter "properties" was undefined when calling updateTableProperties.');
		}

		// verify required parameter 'properties' is not null
		if (this.properties === null) {
		    throw new Error('Required parameter "properties" was null when calling updateTableProperties.');
		}

		// verify required parameter 'index' is not undefined
		if (this.index === undefined) {
		    throw new Error('Required parameter "index" was undefined when calling updateTableProperties.');
		}

		// verify required parameter 'index' is not null
		if (this.index === null) {
		    throw new Error('Required parameter "index" was null when calling updateTableProperties.');
		}

		localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "folder", this.folder);
		localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "storage", this.storage);
		localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "loadEncoding", this.loadEncoding);
		localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "password", this.password);
		localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "destFileName", this.destFileName);
		localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "revisionAuthor", this.revisionAuthor);
		localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "revisionDateTime", this.revisionDateTime);

		const requestOptions: request.Options = {
			method: "PUT",
			qs: queryParameters,
			uri: localVarPath,
			json: true,
			body: ObjectSerializer.serialize(this.properties, this.properties.constructor.name === "Object" ? "importedTableProperties.TableProperties" : this.properties.constructor.name),
		};

		return requestOptions;
	}

	/**
	 * get response type name
	 */
	getReturnType() : string {
		return "TablePropertiesResponse";
	}
}

/**
 * Request model for UpdateTableRowFormat operation.
 * Updates a table row format.
 */
export class UpdateTableRowFormatRequest implements RequestInterface {
    /**
     * The document name.
     */
    public name: string;

    /**
     * Table row format.
     */
    public format: importedTableRowFormat.TableRowFormat;

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

    public constructor(init?: Partial< UpdateTableRowFormatRequest >) {
        Object.assign(this, init);
    }

	/**
	 * create the requst options for this request
	 * @param configuration a configuration for the request
	 */
	createRequestOptions(configuration: Configuration) : request.OptionsWithUri {
		let localVarPath = configuration.getApiBaseUrl() + "/words/{name}/{tablePath}/rows/{index}/rowformat"
			.replace("/{" + "name" + "}", (this.name !== null && this.name !== undefined) ? "/" + String(this.name) : "")
			.replace("/{" + "tablePath" + "}", (this.tablePath !== null && this.tablePath !== undefined) ? "/" + String(this.tablePath) : "")
			.replace("/{" + "index" + "}", (this.index !== null && this.index !== undefined) ? "/" + String(this.index) : "")
			.replace("//", "/");
		const queryParameters: any = {};
		// verify required parameter 'name' is not undefined
		if (this.name === undefined) {
		    throw new Error('Required parameter "name" was undefined when calling updateTableRowFormat.');
		}

		// verify required parameter 'name' is not null
		if (this.name === null) {
		    throw new Error('Required parameter "name" was null when calling updateTableRowFormat.');
		}

		// verify required parameter 'format' is not undefined
		if (this.format === undefined) {
		    throw new Error('Required parameter "format" was undefined when calling updateTableRowFormat.');
		}

		// verify required parameter 'format' is not null
		if (this.format === null) {
		    throw new Error('Required parameter "format" was null when calling updateTableRowFormat.');
		}

		// verify required parameter 'tablePath' is not undefined
		if (this.tablePath === undefined) {
		    throw new Error('Required parameter "tablePath" was undefined when calling updateTableRowFormat.');
		}

		// verify required parameter 'index' is not undefined
		if (this.index === undefined) {
		    throw new Error('Required parameter "index" was undefined when calling updateTableRowFormat.');
		}

		// verify required parameter 'index' is not null
		if (this.index === null) {
		    throw new Error('Required parameter "index" was null when calling updateTableRowFormat.');
		}

		localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "folder", this.folder);
		localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "storage", this.storage);
		localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "loadEncoding", this.loadEncoding);
		localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "password", this.password);
		localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "destFileName", this.destFileName);
		localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "revisionAuthor", this.revisionAuthor);
		localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "revisionDateTime", this.revisionDateTime);

		const requestOptions: request.Options = {
			method: "PUT",
			qs: queryParameters,
			uri: localVarPath,
			json: true,
			body: ObjectSerializer.serialize(this.format, this.format.constructor.name === "Object" ? "importedTableRowFormat.TableRowFormat" : this.format.constructor.name),
		};

		return requestOptions;
	}

	/**
	 * get response type name
	 */
	getReturnType() : string {
		return "TableRowFormatResponse";
	}
}

/**
 * Request model for UploadFile operation.
 * Upload file.
 */
export class UploadFileRequest implements RequestInterface {
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

	/**
	 * create the requst options for this request
	 * @param configuration a configuration for the request
	 */
	createRequestOptions(configuration: Configuration) : request.OptionsWithUri {
		let localVarPath = configuration.getApiBaseUrl() + "/words/storage/file/{path}"
			.replace("/{" + "path" + "}", (this.path !== null && this.path !== undefined) ? "/" + String(this.path) : "")
			.replace("//", "/");
		const queryParameters: any = {};
		const formParams: any = {};
		// verify required parameter 'fileContent' is not undefined
		if (this.fileContent === undefined) {
		    throw new Error('Required parameter "fileContent" was undefined when calling uploadFile.');
		}

		// verify required parameter 'fileContent' is not null
		if (this.fileContent === null) {
		    throw new Error('Required parameter "fileContent" was null when calling uploadFile.');
		}

		// verify required parameter 'path' is not undefined
		if (this.path === undefined) {
		    throw new Error('Required parameter "path" was undefined when calling uploadFile.');
		}

		// verify required parameter 'path' is not null
		if (this.path === null) {
		    throw new Error('Required parameter "path" was null when calling uploadFile.');
		}

		localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "storageName", this.storageName);
		if (this.fileContent !== undefined) {
		    formParams.FileContent = this.fileContent;
		}

		const requestOptions: request.Options = {
			method: "PUT",
			qs: queryParameters,
			uri: localVarPath,
			json: true,
		};

		if (Object.keys(formParams).length > 0) {
			requestOptions.formData = formParams;
		}
		return requestOptions;
	}

	/**
	 * get response type name
	 */
	getReturnType() : string {
		return "FilesUploadResult";
	}
}

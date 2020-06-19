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

export {enumsMap, typeMap};

/**
 * Request model for AcceptAllRevisions operation.
 * Accepts all revisions in document.
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

    public constructor(init?: Partial< AcceptAllRevisionsRequest >) {
        Object.assign(this, init);
    }
}

/**
 * Request model for AppendDocument operation.
 * Appends documents to original document.
 */
export class AppendDocumentRequest {
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
}

/**
 * Request model for ApplyStyleToDocumentElement operation.
 * Apply a style to the document node.
 */
export class ApplyStyleToDocumentElementRequest {
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
}

/**
 * Request model for BuildReport operation.
 * Executes document "build report" operation.
 */
export class BuildReportRequest {
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
}

/**
 * Request model for BuildReportOnline operation.
 * Executes document "build report" online operation.
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
     * This file name will be used when resulting document has dynamic field for document file name {filename}. If it is not set, "template" will be used instead.
     */
    public documentFileName: string;

    public constructor(init?: Partial< BuildReportOnlineRequest >) {
        Object.assign(this, init);
    }
}

/**
 * Request model for Classify operation.
 * Classifies raw text.
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

    public constructor(init?: Partial< ClassifyRequest >) {
        Object.assign(this, init);
    }
}

/**
 * Request model for ClassifyDocument operation.
 * Classifies document.
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

    public constructor(init?: Partial< ClassifyDocumentRequest >) {
        Object.assign(this, init);
    }
}

/**
 * Request model for CompareDocument operation.
 * Compares document with original document.
 */
export class CompareDocumentRequest {
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
}

/**
 * Request model for ConvertDocument operation.
 * Converts document from the request's content to the specified format.
 */
export class ConvertDocumentRequest {
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
 * Copy and insert a new style to the document, returns a copied style.
 */
export class CopyStyleRequest {
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
}

/**
 * Request model for CreateDocument operation.
 * Creates new document.
 * Document is created with format which is recognized from file extensions.
 * Supported extensions: ".doc", ".docx", ".docm", ".dot", ".dotm", ".dotx", ".flatopc", ".fopc", ".flatopc_macro", ".fopc_macro", ".flatopc_template", ".fopc_template", ".flatopc_template_macro", ".fopc_template_macro", ".wordml", ".wml", ".rtf".
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
 * Adds new or update existing document property.
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
 * Request model for DeleteAllParagraphTabStops operation.
 * Remove all tab stops.
 */
export class DeleteAllParagraphTabStopsRequest {
    /**
     * The document name.
     */
    public name: string;

    /**
     * Path to the node which contains paragraph.
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

    public constructor(init?: Partial< DeleteAllParagraphTabStopsRequest >) {
        Object.assign(this, init);
    }
}

/**
 * Request model for DeleteAllParagraphTabStopsWithoutNodePath operation.
 * Remove all tab stops.
 */
export class DeleteAllParagraphTabStopsWithoutNodePathRequest {
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

    public constructor(init?: Partial< DeleteAllParagraphTabStopsWithoutNodePathRequest >) {
        Object.assign(this, init);
    }
}

/**
 * Request model for DeleteBorder operation.
 * 'nodePath' should refer to paragraph, cell or row.
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
    public borderType: string;

    /**
     * Original document folder.
     */
    public folder: string;

    /**
     * Original document storage.
     */
    public storage: string;

    /**
     * Encoding that will be used to load an HTML (or TXT) document if the encoding is not specified in HTML.
     */
    public loadEncoding: string;

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
 * Request model for DeleteBorders operation.
 * 'nodePath' should refer to paragraph, cell or row.
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

    public constructor(init?: Partial< DeleteBordersRequest >) {
        Object.assign(this, init);
    }
}

/**
 * Request model for DeleteComment operation.
 * Removes comment from document.
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

    public constructor(init?: Partial< DeleteCommentRequest >) {
        Object.assign(this, init);
    }
}

/**
 * Request model for DeleteDocumentProperty operation.
 * Deletes document property.
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

    public constructor(init?: Partial< DeleteDocumentPropertyRequest >) {
        Object.assign(this, init);
    }
}

/**
 * Request model for DeleteDrawingObject operation.
 * Removes drawing object from document.
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

    public constructor(init?: Partial< DeleteDrawingObjectRequest >) {
        Object.assign(this, init);
    }
}

/**
 * Request model for DeleteDrawingObjectWithoutNodePath operation.
 * Removes drawing object from document.
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

    public constructor(init?: Partial< DeleteDrawingObjectWithoutNodePathRequest >) {
        Object.assign(this, init);
    }
}

/**
 * Request model for DeleteField operation.
 * Deletes field from document.
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

    public constructor(init?: Partial< DeleteFieldRequest >) {
        Object.assign(this, init);
    }
}

/**
 * Request model for DeleteFields operation.
 * Removes fields from section paragraph.
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

    public constructor(init?: Partial< DeleteFieldsRequest >) {
        Object.assign(this, init);
    }
}

/**
 * Request model for DeleteFieldsWithoutNodePath operation.
 * Removes fields from section paragraph.
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

    public constructor(init?: Partial< DeleteFieldsWithoutNodePathRequest >) {
        Object.assign(this, init);
    }
}

/**
 * Request model for DeleteFieldWithoutNodePath operation.
 * Deletes field from document.
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

    public constructor(init?: Partial< DeleteFieldWithoutNodePathRequest >) {
        Object.assign(this, init);
    }
}

/**
 * Request model for DeleteFile operation.
 * Delete file.
 */
export class DeleteFileRequest {
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
}

/**
 * Request model for DeleteFolder operation.
 * Delete folder.
 */
export class DeleteFolderRequest {
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
}

/**
 * Request model for DeleteFootnote operation.
 * Removes footnote from document.
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

    public constructor(init?: Partial< DeleteFootnoteRequest >) {
        Object.assign(this, init);
    }
}

/**
 * Request model for DeleteFootnoteWithoutNodePath operation.
 * Removes footnote from document.
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

    public constructor(init?: Partial< DeleteFootnoteWithoutNodePathRequest >) {
        Object.assign(this, init);
    }
}

/**
 * Request model for DeleteFormField operation.
 * Removes form field from document.
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

    public constructor(init?: Partial< DeleteFormFieldRequest >) {
        Object.assign(this, init);
    }
}

/**
 * Request model for DeleteFormFieldWithoutNodePath operation.
 * Removes form field from document.
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

    public constructor(init?: Partial< DeleteFormFieldWithoutNodePathRequest >) {
        Object.assign(this, init);
    }
}

/**
 * Request model for DeleteHeaderFooter operation.
 * Deletes header/footer from document.
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

    public constructor(init?: Partial< DeleteHeaderFooterRequest >) {
        Object.assign(this, init);
    }
}

/**
 * Request model for DeleteHeadersFooters operation.
 * Deletes document headers and footers.
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

    public constructor(init?: Partial< DeleteHeadersFootersRequest >) {
        Object.assign(this, init);
    }
}

/**
 * Request model for DeleteMacros operation.
 * Removes macros from document.
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

    public constructor(init?: Partial< DeleteMacrosRequest >) {
        Object.assign(this, init);
    }
}

/**
 * Request model for DeleteOfficeMathObject operation.
 * Removes OfficeMath object from document.
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

    public constructor(init?: Partial< DeleteOfficeMathObjectRequest >) {
        Object.assign(this, init);
    }
}

/**
 * Request model for DeleteOfficeMathObjectWithoutNodePath operation.
 * Removes OfficeMath object from document.
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

    public constructor(init?: Partial< DeleteOfficeMathObjectWithoutNodePathRequest >) {
        Object.assign(this, init);
    }
}

/**
 * Request model for DeleteParagraph operation.
 * Removes paragraph from section.
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

    public constructor(init?: Partial< DeleteParagraphRequest >) {
        Object.assign(this, init);
    }
}

/**
 * Request model for DeleteParagraphListFormat operation.
 * Delete paragraph list format, returns updated list format properties.
 */
export class DeleteParagraphListFormatRequest {
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
 * Request model for DeleteParagraphListFormatWithoutNodePath operation.
 * Delete paragraph list format, returns updated list format properties.
 */
export class DeleteParagraphListFormatWithoutNodePathRequest {
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

    public constructor(init?: Partial< DeleteParagraphListFormatWithoutNodePathRequest >) {
        Object.assign(this, init);
    }
}

/**
 * Request model for DeleteParagraphTabStop operation.
 * Remove the i-th tab stop.
 */
export class DeleteParagraphTabStopRequest {
    /**
     * The document name.
     */
    public name: string;

    /**
     * a tab stop position to remove.
     */
    public position: number;

    /**
     * Path to the node which contains paragraph.
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

    public constructor(init?: Partial< DeleteParagraphTabStopRequest >) {
        Object.assign(this, init);
    }
}

/**
 * Request model for DeleteParagraphTabStopWithoutNodePath operation.
 * Remove the i-th tab stop.
 */
export class DeleteParagraphTabStopWithoutNodePathRequest {
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
     * Original document folder.
     */
    public folder: string;

    /**
     * Original document storage.
     */
    public storage: string;

    /**
     * Encoding that will be used to load an HTML (or TXT) document if the encoding is not specified in HTML.
     */
    public loadEncoding: string;

    /**
     * Password for opening an encrypted document.
     */
    public password: string;

    /**
     * Result path of the document after the operation. If this parameter is omitted then result of the operation will be saved as the source document.
     */
    public destFileName: string;

    public constructor(init?: Partial< DeleteParagraphTabStopWithoutNodePathRequest >) {
        Object.assign(this, init);
    }
}

/**
 * Request model for DeleteParagraphWithoutNodePath operation.
 * Removes paragraph from section.
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

    public constructor(init?: Partial< DeleteParagraphWithoutNodePathRequest >) {
        Object.assign(this, init);
    }
}

/**
 * Request model for DeleteRun operation.
 * Removes run from document.
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

    public constructor(init?: Partial< DeleteRunRequest >) {
        Object.assign(this, init);
    }
}

/**
 * Request model for DeleteSection operation.
 * Removes section from document.
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

    public constructor(init?: Partial< DeleteSectionRequest >) {
        Object.assign(this, init);
    }
}

/**
 * Request model for DeleteTable operation.
 * Deletes a table.
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

    public constructor(init?: Partial< DeleteTableRequest >) {
        Object.assign(this, init);
    }
}

/**
 * Request model for DeleteTableCell operation.
 * Deletes a table cell.
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

    public constructor(init?: Partial< DeleteTableCellRequest >) {
        Object.assign(this, init);
    }
}

/**
 * Request model for DeleteTableRow operation.
 * Deletes a table row.
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

    public constructor(init?: Partial< DeleteTableRowRequest >) {
        Object.assign(this, init);
    }
}

/**
 * Request model for DeleteTableWithoutNodePath operation.
 * Deletes a table.
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

    public constructor(init?: Partial< DeleteTableWithoutNodePathRequest >) {
        Object.assign(this, init);
    }
}

/**
 * Request model for DeleteWatermark operation.
 * Deletes watermark (for deleting last watermark from the document).
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

    public constructor(init?: Partial< DeleteWatermarkRequest >) {
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
 * Executes document mail merge operation.
 */
export class ExecuteMailMergeRequest {
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
}

/**
 * Request model for ExecuteMailMergeOnline operation.
 * Executes document mail merge online.
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
}

/**
 * Request model for GetAvailableFonts operation.
 * Gets the list of fonts, available for document processing.
 */
export class GetAvailableFontsRequest {
    /**
     * Folder in filestorage with custom fonts.
     */
    public fontsLocation: string;

    public constructor(init?: Partial< GetAvailableFontsRequest >) {
        Object.assign(this, init);
    }
}

/**
 * Request model for GetBookmarkByName operation.
 * Reads document bookmark data by its name.
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

    public constructor(init?: Partial< GetBookmarkByNameRequest >) {
        Object.assign(this, init);
    }
}

/**
 * Request model for GetBookmarks operation.
 * Reads document bookmarks common info.
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

    public constructor(init?: Partial< GetBookmarksRequest >) {
        Object.assign(this, init);
    }
}

/**
 * Request model for GetBorder operation.
 * 'nodePath' should refer to paragraph, cell or row.
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
    public borderType: string;

    /**
     * Original document folder.
     */
    public folder: string;

    /**
     * Original document storage.
     */
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
 * Request model for GetBorders operation.
 * 'nodePath' should refer to paragraph, cell or row.
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

    public constructor(init?: Partial< GetBordersRequest >) {
        Object.assign(this, init);
    }
}

/**
 * Request model for GetComment operation.
 * Gets comment from document.
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

    public constructor(init?: Partial< GetCommentRequest >) {
        Object.assign(this, init);
    }
}

/**
 * Request model for GetComments operation.
 * Gets comments from document.
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

    public constructor(init?: Partial< GetCommentsRequest >) {
        Object.assign(this, init);
    }
}

/**
 * Request model for GetDocument operation.
 * Reads document common info.
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

    public constructor(init?: Partial< GetDocumentRequest >) {
        Object.assign(this, init);
    }
}

/**
 * Request model for GetDocumentDrawingObjectByIndex operation.
 * Reads document drawing object common info by its index or convert to format specified.
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

    public constructor(init?: Partial< GetDocumentDrawingObjectByIndexRequest >) {
        Object.assign(this, init);
    }
}

/**
 * Request model for GetDocumentDrawingObjectByIndexWithoutNodePath operation.
 * Reads document drawing object common info by its index or convert to format specified.
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

    public constructor(init?: Partial< GetDocumentDrawingObjectByIndexWithoutNodePathRequest >) {
        Object.assign(this, init);
    }
}

/**
 * Request model for GetDocumentDrawingObjectImageData operation.
 * Reads drawing object image data.
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

    public constructor(init?: Partial< GetDocumentDrawingObjectImageDataRequest >) {
        Object.assign(this, init);
    }
}

/**
 * Request model for GetDocumentDrawingObjectImageDataWithoutNodePath operation.
 * Reads drawing object image data.
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

    public constructor(init?: Partial< GetDocumentDrawingObjectImageDataWithoutNodePathRequest >) {
        Object.assign(this, init);
    }
}

/**
 * Request model for GetDocumentDrawingObjectOleData operation.
 * Gets drawing object OLE data.
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

    public constructor(init?: Partial< GetDocumentDrawingObjectOleDataRequest >) {
        Object.assign(this, init);
    }
}

/**
 * Request model for GetDocumentDrawingObjectOleDataWithoutNodePath operation.
 * Gets drawing object OLE data.
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

    public constructor(init?: Partial< GetDocumentDrawingObjectOleDataWithoutNodePathRequest >) {
        Object.assign(this, init);
    }
}

/**
 * Request model for GetDocumentDrawingObjects operation.
 * Reads document drawing objects common info.
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

    public constructor(init?: Partial< GetDocumentDrawingObjectsRequest >) {
        Object.assign(this, init);
    }
}

/**
 * Request model for GetDocumentDrawingObjectsWithoutNodePath operation.
 * Reads document drawing objects common info.
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

    public constructor(init?: Partial< GetDocumentDrawingObjectsWithoutNodePathRequest >) {
        Object.assign(this, init);
    }
}

/**
 * Request model for GetDocumentFieldNames operation.
 * Reads document field names.
 */
export class GetDocumentFieldNamesRequest {
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
}

/**
 * Request model for GetDocumentFieldNamesOnline operation.
 * Reads document field names.
 */
export class GetDocumentFieldNamesOnlineRequest {
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
}

/**
 * Request model for GetDocumentHyperlinkByIndex operation.
 * Reads document hyperlink by its index.
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

    public constructor(init?: Partial< GetDocumentHyperlinkByIndexRequest >) {
        Object.assign(this, init);
    }
}

/**
 * Request model for GetDocumentHyperlinks operation.
 * Reads document hyperlinks common info.
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

    public constructor(init?: Partial< GetDocumentHyperlinksRequest >) {
        Object.assign(this, init);
    }
}

/**
 * Request model for GetDocumentProperties operation.
 * Reads document properties info.
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

    public constructor(init?: Partial< GetDocumentPropertiesRequest >) {
        Object.assign(this, init);
    }
}

/**
 * Request model for GetDocumentProperty operation.
 * Reads document property info by the property name.
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

    public constructor(init?: Partial< GetDocumentPropertyRequest >) {
        Object.assign(this, init);
    }
}

/**
 * Request model for GetDocumentProtection operation.
 * Reads document protection common info.
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

    public constructor(init?: Partial< GetDocumentProtectionRequest >) {
        Object.assign(this, init);
    }
}

/**
 * Request model for GetDocumentStatistics operation.
 * Reads document statistics.
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
}

/**
 * Request model for GetDocumentWithFormat operation.
 * Exports the document into the specified format.
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

    public constructor(init?: Partial< GetDocumentWithFormatRequest >) {
        Object.assign(this, init);
    }
}

/**
 * Request model for GetField operation.
 * Gets field from document.
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

    public constructor(init?: Partial< GetFieldRequest >) {
        Object.assign(this, init);
    }
}

/**
 * Request model for GetFields operation.
 * Get fields from document.
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

    public constructor(init?: Partial< GetFieldsRequest >) {
        Object.assign(this, init);
    }
}

/**
 * Request model for GetFieldsWithoutNodePath operation.
 * Get fields from document.
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

    public constructor(init?: Partial< GetFieldsWithoutNodePathRequest >) {
        Object.assign(this, init);
    }
}

/**
 * Request model for GetFieldWithoutNodePath operation.
 * Gets field from document.
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

    public constructor(init?: Partial< GetFieldWithoutNodePathRequest >) {
        Object.assign(this, init);
    }
}

/**
 * Request model for GetFilesList operation.
 * Get all files and folders within a folder.
 */
export class GetFilesListRequest {
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
}

/**
 * Request model for GetFootnote operation.
 * Reads footnote by index.
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

    public constructor(init?: Partial< GetFootnoteRequest >) {
        Object.assign(this, init);
    }
}

/**
 * Request model for GetFootnotes operation.
 * Gets footnotes from document.
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

    public constructor(init?: Partial< GetFootnotesRequest >) {
        Object.assign(this, init);
    }
}

/**
 * Request model for GetFootnotesWithoutNodePath operation.
 * Gets footnotes from document.
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

    public constructor(init?: Partial< GetFootnotesWithoutNodePathRequest >) {
        Object.assign(this, init);
    }
}

/**
 * Request model for GetFootnoteWithoutNodePath operation.
 * Reads footnote by index.
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

    public constructor(init?: Partial< GetFootnoteWithoutNodePathRequest >) {
        Object.assign(this, init);
    }
}

/**
 * Request model for GetFormField operation.
 * Returns representation of an one of the form field.
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

    public constructor(init?: Partial< GetFormFieldRequest >) {
        Object.assign(this, init);
    }
}

/**
 * Request model for GetFormFields operation.
 * Gets form fields from document.
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

    public constructor(init?: Partial< GetFormFieldsRequest >) {
        Object.assign(this, init);
    }
}

/**
 * Request model for GetFormFieldsWithoutNodePath operation.
 * Gets form fields from document.
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

    public constructor(init?: Partial< GetFormFieldsWithoutNodePathRequest >) {
        Object.assign(this, init);
    }
}

/**
 * Request model for GetFormFieldWithoutNodePath operation.
 * Returns representation of an one of the form field.
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

    public constructor(init?: Partial< GetFormFieldWithoutNodePathRequest >) {
        Object.assign(this, init);
    }
}

/**
 * Request model for GetHeaderFooter operation.
 * Returns a header/footer from the document by index.
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

    public constructor(init?: Partial< GetHeaderFooterRequest >) {
        Object.assign(this, init);
    }
}

/**
 * Request model for GetHeaderFooterOfSection operation.
 * Returns a header/footer from the document section.
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

    public constructor(init?: Partial< GetHeaderFooterOfSectionRequest >) {
        Object.assign(this, init);
    }
}

/**
 * Request model for GetHeaderFooters operation.
 * Returns a list of header/footers from the document.
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

    public constructor(init?: Partial< GetHeaderFootersRequest >) {
        Object.assign(this, init);
    }
}

/**
 * Request model for GetList operation.
 * This resource represents one of the lists contained in the document.
 */
export class GetListRequest {
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
}

/**
 * Request model for GetLists operation.
 * Returns a list of lists that are contained in the document.
 */
export class GetListsRequest {
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
}

/**
 * Request model for GetOfficeMathObject operation.
 * Reads OfficeMath object by index.
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

    public constructor(init?: Partial< GetOfficeMathObjectRequest >) {
        Object.assign(this, init);
    }
}

/**
 * Request model for GetOfficeMathObjects operation.
 * Gets OfficeMath objects from document.
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

    public constructor(init?: Partial< GetOfficeMathObjectsRequest >) {
        Object.assign(this, init);
    }
}

/**
 * Request model for GetOfficeMathObjectsWithoutNodePath operation.
 * Gets OfficeMath objects from document.
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

    public constructor(init?: Partial< GetOfficeMathObjectsWithoutNodePathRequest >) {
        Object.assign(this, init);
    }
}

/**
 * Request model for GetOfficeMathObjectWithoutNodePath operation.
 * Reads OfficeMath object by index.
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

    public constructor(init?: Partial< GetOfficeMathObjectWithoutNodePathRequest >) {
        Object.assign(this, init);
    }
}

/**
 * Request model for GetParagraph operation.
 * This resource represents one of the paragraphs contained in the document.
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

    public constructor(init?: Partial< GetParagraphRequest >) {
        Object.assign(this, init);
    }
}

/**
 * Request model for GetParagraphFormat operation.
 * Represents all the formatting for a paragraph.
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

    public constructor(init?: Partial< GetParagraphFormatRequest >) {
        Object.assign(this, init);
    }
}

/**
 * Request model for GetParagraphFormatWithoutNodePath operation.
 * Represents all the formatting for a paragraph.
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

    public constructor(init?: Partial< GetParagraphFormatWithoutNodePathRequest >) {
        Object.assign(this, init);
    }
}

/**
 * Request model for GetParagraphListFormat operation.
 * Represents list format for a paragraph.
 */
export class GetParagraphListFormatRequest {
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

    public constructor(init?: Partial< GetParagraphListFormatRequest >) {
        Object.assign(this, init);
    }
}

/**
 * Request model for GetParagraphListFormatWithoutNodePath operation.
 * Represents list format for a paragraph.
 */
export class GetParagraphListFormatWithoutNodePathRequest {
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

    public constructor(init?: Partial< GetParagraphListFormatWithoutNodePathRequest >) {
        Object.assign(this, init);
    }
}

/**
 * Request model for GetParagraphs operation.
 * Returns a list of paragraphs that are contained in the document.
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

    public constructor(init?: Partial< GetParagraphsRequest >) {
        Object.assign(this, init);
    }
}

/**
 * Request model for GetParagraphsWithoutNodePath operation.
 * Returns a list of paragraphs that are contained in the document.
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

    public constructor(init?: Partial< GetParagraphsWithoutNodePathRequest >) {
        Object.assign(this, init);
    }
}

/**
 * Request model for GetParagraphTabStops operation.
 * Get all tab stops for the paragraph.
 */
export class GetParagraphTabStopsRequest {
    /**
     * The document name.
     */
    public name: string;

    /**
     * Path to the node which contains paragraph.
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

    public constructor(init?: Partial< GetParagraphTabStopsRequest >) {
        Object.assign(this, init);
    }
}

/**
 * Request model for GetParagraphTabStopsWithoutNodePath operation.
 * Get all tab stops for the paragraph.
 */
export class GetParagraphTabStopsWithoutNodePathRequest {
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

    public constructor(init?: Partial< GetParagraphTabStopsWithoutNodePathRequest >) {
        Object.assign(this, init);
    }
}

/**
 * Request model for GetParagraphWithoutNodePath operation.
 * This resource represents one of the paragraphs contained in the document.
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

    public constructor(init?: Partial< GetParagraphWithoutNodePathRequest >) {
        Object.assign(this, init);
    }
}

/**
 * Request model for GetRangeText operation.
 * Gets the text from the range.
 */
export class GetRangeTextRequest {
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
}

/**
 * Request model for GetRun operation.
 * This resource represents run of text contained in the document.
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

    public constructor(init?: Partial< GetRunRequest >) {
        Object.assign(this, init);
    }
}

/**
 * Request model for GetRunFont operation.
 * This resource represents font of run.
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

    public constructor(init?: Partial< GetRunFontRequest >) {
        Object.assign(this, init);
    }
}

/**
 * Request model for GetRuns operation.
 * This resource represents collection of runs in the paragraph.
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

    public constructor(init?: Partial< GetRunsRequest >) {
        Object.assign(this, init);
    }
}

/**
 * Request model for GetSection operation.
 * Gets document section by index.
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

    public constructor(init?: Partial< GetSectionRequest >) {
        Object.assign(this, init);
    }
}

/**
 * Request model for GetSectionPageSetup operation.
 * Gets page setup of section.
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

    public constructor(init?: Partial< GetSectionPageSetupRequest >) {
        Object.assign(this, init);
    }
}

/**
 * Request model for GetSections operation.
 * Returns a list of sections that are contained in the document.
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

    public constructor(init?: Partial< GetSectionsRequest >) {
        Object.assign(this, init);
    }
}

/**
 * Request model for GetStyle operation.
 * This resource represents one of the styles contained in the document.
 */
export class GetStyleRequest {
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
}

/**
 * Request model for GetStyleFromDocumentElement operation.
 * Gets a style from the document node.
 */
export class GetStyleFromDocumentElementRequest {
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
}

/**
 * Request model for GetStyles operation.
 * Returns a list of styles contained in the document.
 */
export class GetStylesRequest {
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
}

/**
 * Request model for GetTable operation.
 * Returns a table.
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

    public constructor(init?: Partial< GetTableRequest >) {
        Object.assign(this, init);
    }
}

/**
 * Request model for GetTableCell operation.
 * Returns a table cell.
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

    public constructor(init?: Partial< GetTableCellRequest >) {
        Object.assign(this, init);
    }
}

/**
 * Request model for GetTableCellFormat operation.
 * Returns a table cell format.
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

    public constructor(init?: Partial< GetTableCellFormatRequest >) {
        Object.assign(this, init);
    }
}

/**
 * Request model for GetTableProperties operation.
 * Returns a table properties.
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

    public constructor(init?: Partial< GetTablePropertiesRequest >) {
        Object.assign(this, init);
    }
}

/**
 * Request model for GetTablePropertiesWithoutNodePath operation.
 * Returns a table properties.
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

    public constructor(init?: Partial< GetTablePropertiesWithoutNodePathRequest >) {
        Object.assign(this, init);
    }
}

/**
 * Request model for GetTableRow operation.
 * Returns a table row.
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

    public constructor(init?: Partial< GetTableRowRequest >) {
        Object.assign(this, init);
    }
}

/**
 * Request model for GetTableRowFormat operation.
 * Returns a table row format.
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

    public constructor(init?: Partial< GetTableRowFormatRequest >) {
        Object.assign(this, init);
    }
}

/**
 * Request model for GetTables operation.
 * Returns a list of tables that are contained in the document.
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

    public constructor(init?: Partial< GetTablesRequest >) {
        Object.assign(this, init);
    }
}

/**
 * Request model for GetTablesWithoutNodePath operation.
 * Returns a list of tables that are contained in the document.
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

    public constructor(init?: Partial< GetTablesWithoutNodePathRequest >) {
        Object.assign(this, init);
    }
}

/**
 * Request model for GetTableWithoutNodePath operation.
 * Returns a table.
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

    public constructor(init?: Partial< GetTableWithoutNodePathRequest >) {
        Object.assign(this, init);
    }
}

/**
 * Request model for InsertComment operation.
 * Adds comment to document, returns inserted comment data.
 */
export class InsertCommentRequest {
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
}

/**
 * Request model for InsertDrawingObject operation.
 * Adds drawing object to document, returns added  drawing object's data.
 */
export class InsertDrawingObjectRequest {
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
}

/**
 * Request model for InsertDrawingObjectWithoutNodePath operation.
 * Adds drawing object to document, returns added  drawing object's data.
 */
export class InsertDrawingObjectWithoutNodePathRequest {
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
     * Original document folder.
     */
    public folder: string;

    /**
     * Original document storage.
     */
    public storage: string;

    /**
     * Encoding that will be used to load an HTML (or TXT) document if the encoding is not specified in HTML.
     */
    public loadEncoding: string;

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

    public constructor(init?: Partial< InsertDrawingObjectWithoutNodePathRequest >) {
        Object.assign(this, init);
    }
}

/**
 * Request model for InsertField operation.
 * Adds field to document, returns inserted field's data.
 */
export class InsertFieldRequest {
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
}

/**
 * Request model for InsertFieldWithoutNodePath operation.
 * Adds field to document, returns inserted field's data.
 */
export class InsertFieldWithoutNodePathRequest {
    /**
     * The document name.
     */
    public name: string;

    /**
     * Field data.
     */
    public field: importedFieldInsert.FieldInsert;

    /**
     * Original document folder.
     */
    public folder: string;

    /**
     * Original document storage.
     */
    public storage: string;

    /**
     * Encoding that will be used to load an HTML (or TXT) document if the encoding is not specified in HTML.
     */
    public loadEncoding: string;

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

    public constructor(init?: Partial< InsertFieldWithoutNodePathRequest >) {
        Object.assign(this, init);
    }
}

/**
 * Request model for InsertFootnote operation.
 * Adds footnote to document, returns added footnote's data.
 */
export class InsertFootnoteRequest {
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
}

/**
 * Request model for InsertFootnoteWithoutNodePath operation.
 * Adds footnote to document, returns added footnote's data.
 */
export class InsertFootnoteWithoutNodePathRequest {
    /**
     * The document name.
     */
    public name: string;

    /**
     * Footnote data.
     */
    public footnoteDto: importedFootnoteInsert.FootnoteInsert;

    /**
     * Original document folder.
     */
    public folder: string;

    /**
     * Original document storage.
     */
    public storage: string;

    /**
     * Encoding that will be used to load an HTML (or TXT) document if the encoding is not specified in HTML.
     */
    public loadEncoding: string;

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

    public constructor(init?: Partial< InsertFootnoteWithoutNodePathRequest >) {
        Object.assign(this, init);
    }
}

/**
 * Request model for InsertFormField operation.
 * Adds form field to paragraph, returns added form field's data.
 */
export class InsertFormFieldRequest {
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
}

/**
 * Request model for InsertFormFieldWithoutNodePath operation.
 * Adds form field to paragraph, returns added form field's data.
 */
export class InsertFormFieldWithoutNodePathRequest {
    /**
     * The document name.
     */
    public name: string;

    /**
     * From field data.
     */
    public formField: importedFormField.FormField;

    /**
     * Original document folder.
     */
    public folder: string;

    /**
     * Original document storage.
     */
    public storage: string;

    /**
     * Encoding that will be used to load an HTML (or TXT) document if the encoding is not specified in HTML.
     */
    public loadEncoding: string;

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

    public constructor(init?: Partial< InsertFormFieldWithoutNodePathRequest >) {
        Object.assign(this, init);
    }
}

/**
 * Request model for InsertHeaderFooter operation.
 * Inserts to document header or footer.
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

    public constructor(init?: Partial< InsertHeaderFooterRequest >) {
        Object.assign(this, init);
    }
}

/**
 * Request model for InsertList operation.
 * Adds list to document, returns added list's data.
 */
export class InsertListRequest {
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
}

/**
 * Request model for InsertOrUpdateParagraphTabStop operation.
 * Insert or resplace tab stop if a tab stop with the position exists.
 */
export class InsertOrUpdateParagraphTabStopRequest {
    /**
     * The document name.
     */
    public name: string;

    /**
     * Paragraph tab stop.
     */
    public dto: importedTabStopInsert.TabStopInsert;

    /**
     * Path to the node which contains paragraph.
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

    public constructor(init?: Partial< InsertOrUpdateParagraphTabStopRequest >) {
        Object.assign(this, init);
    }
}

/**
 * Request model for InsertOrUpdateParagraphTabStopWithoutNodePath operation.
 * Insert or resplace tab stop if a tab stop with the position exists.
 */
export class InsertOrUpdateParagraphTabStopWithoutNodePathRequest {
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
     * Original document folder.
     */
    public folder: string;

    /**
     * Original document storage.
     */
    public storage: string;

    /**
     * Encoding that will be used to load an HTML (or TXT) document if the encoding is not specified in HTML.
     */
    public loadEncoding: string;

    /**
     * Password for opening an encrypted document.
     */
    public password: string;

    /**
     * Result path of the document after the operation. If this parameter is omitted then result of the operation will be saved as the source document.
     */
    public destFileName: string;

    public constructor(init?: Partial< InsertOrUpdateParagraphTabStopWithoutNodePathRequest >) {
        Object.assign(this, init);
    }
}

/**
 * Request model for InsertPageNumbers operation.
 * Inserts document page numbers.
 */
export class InsertPageNumbersRequest {
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
}

/**
 * Request model for InsertParagraph operation.
 * Adds paragraph to document, returns added paragraph's data.
 */
export class InsertParagraphRequest {
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
}

/**
 * Request model for InsertParagraphWithoutNodePath operation.
 * Adds paragraph to document, returns added paragraph's data.
 */
export class InsertParagraphWithoutNodePathRequest {
    /**
     * The document name.
     */
    public name: string;

    /**
     * Paragraph data.
     */
    public paragraph: importedParagraphInsert.ParagraphInsert;

    /**
     * Original document folder.
     */
    public folder: string;

    /**
     * Original document storage.
     */
    public storage: string;

    /**
     * Encoding that will be used to load an HTML (or TXT) document if the encoding is not specified in HTML.
     */
    public loadEncoding: string;

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

    public constructor(init?: Partial< InsertParagraphWithoutNodePathRequest >) {
        Object.assign(this, init);
    }
}

/**
 * Request model for InsertRun operation.
 * Adds run to document, returns added paragraph's data.
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
}

/**
 * Request model for InsertStyle operation.
 * Adds a style to the document, returns an added style.
 */
export class InsertStyleRequest {
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
}

/**
 * Request model for InsertTable operation.
 * Adds table to document, returns added table's data.
 */
export class InsertTableRequest {
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
}

/**
 * Request model for InsertTableCell operation.
 * Adds table cell to table, returns added cell's data.
 */
export class InsertTableCellRequest {
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
}

/**
 * Request model for InsertTableRow operation.
 * Adds table row to table, returns added row's data.
 */
export class InsertTableRowRequest {
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
}

/**
 * Request model for InsertTableWithoutNodePath operation.
 * Adds table to document, returns added table's data.
 */
export class InsertTableWithoutNodePathRequest {
    /**
     * The document name.
     */
    public name: string;

    /**
     * Table parameters/.
     */
    public table: importedTableInsert.TableInsert;

    /**
     * Original document folder.
     */
    public folder: string;

    /**
     * Original document storage.
     */
    public storage: string;

    /**
     * Encoding that will be used to load an HTML (or TXT) document if the encoding is not specified in HTML.
     */
    public loadEncoding: string;

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

    public constructor(init?: Partial< InsertTableWithoutNodePathRequest >) {
        Object.assign(this, init);
    }
}

/**
 * Request model for InsertWatermarkImage operation.
 * Inserts document watermark image.
 */
export class InsertWatermarkImageRequest {
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
}

/**
 * Request model for InsertWatermarkText operation.
 * Inserts document watermark text.
 */
export class InsertWatermarkTextRequest {
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
}

/**
 * Request model for LoadWebDocument operation.
 * Loads new document from web into the file with any supported format of data.
 */
export class LoadWebDocumentRequest {
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
 * Request model for ProtectDocument operation.
 * Protects document.
 */
export class ProtectDocumentRequest {
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
}

/**
 * Request model for RejectAllRevisions operation.
 * Rejects all revisions in document.
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

    public constructor(init?: Partial< RejectAllRevisionsRequest >) {
        Object.assign(this, init);
    }
}

/**
 * Request model for RemoveRange operation.
 * Removes the range from the document.
 */
export class RemoveRangeRequest {
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
}

/**
 * Request model for RenderDrawingObject operation.
 * Renders drawing object to specified format.
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

    public constructor(init?: Partial< RenderDrawingObjectRequest >) {
        Object.assign(this, init);
    }
}

/**
 * Request model for RenderDrawingObjectWithoutNodePath operation.
 * Renders drawing object to specified format.
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

    public constructor(init?: Partial< RenderDrawingObjectWithoutNodePathRequest >) {
        Object.assign(this, init);
    }
}

/**
 * Request model for RenderMathObject operation.
 * Renders math object to specified format.
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

    public constructor(init?: Partial< RenderMathObjectRequest >) {
        Object.assign(this, init);
    }
}

/**
 * Request model for RenderMathObjectWithoutNodePath operation.
 * Renders math object to specified format.
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

    public constructor(init?: Partial< RenderMathObjectWithoutNodePathRequest >) {
        Object.assign(this, init);
    }
}

/**
 * Request model for RenderPage operation.
 * Renders page to specified format.
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

    public constructor(init?: Partial< RenderPageRequest >) {
        Object.assign(this, init);
    }
}

/**
 * Request model for RenderParagraph operation.
 * Renders paragraph to specified format.
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

    public constructor(init?: Partial< RenderParagraphRequest >) {
        Object.assign(this, init);
    }
}

/**
 * Request model for RenderParagraphWithoutNodePath operation.
 * Renders paragraph to specified format.
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

    public constructor(init?: Partial< RenderParagraphWithoutNodePathRequest >) {
        Object.assign(this, init);
    }
}

/**
 * Request model for RenderTable operation.
 * Renders table to specified format.
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

    public constructor(init?: Partial< RenderTableRequest >) {
        Object.assign(this, init);
    }
}

/**
 * Request model for RenderTableWithoutNodePath operation.
 * Renders table to specified format.
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

    public constructor(init?: Partial< RenderTableWithoutNodePathRequest >) {
        Object.assign(this, init);
    }
}

/**
 * Request model for ReplaceText operation.
 * Replaces document text.
 */
export class ReplaceTextRequest {
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
}

/**
 * Request model for ReplaceWithText operation.
 * Replaces the content in the range.
 */
export class ReplaceWithTextRequest {
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
}

/**
 * Request model for ResetCache operation.
 * Resets font's cache.
 */
export class ResetCacheRequest {

    public constructor(init?: Partial< ResetCacheRequest >) {
        Object.assign(this, init);
    }
}

/**
 * Request model for SaveAs operation.
 * Converts document to destination format with detailed settings and saves result to storage.
 */
export class SaveAsRequest {
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
}

/**
 * Request model for SaveAsRange operation.
 * Saves the selected range as a new document.
 */
export class SaveAsRangeRequest {
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
}

/**
 * Request model for SaveAsTiff operation.
 * Converts document to tiff with detailed settings and saves result to storage.
 */
export class SaveAsTiffRequest {
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
}

/**
 * Request model for Search operation.
 * Searches text in document.
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

    public constructor(init?: Partial< SearchRequest >) {
        Object.assign(this, init);
    }
}

/**
 * Request model for SplitDocument operation.
 * Splits document.
 */
export class SplitDocumentRequest {
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
}

/**
 * Request model for UnprotectDocument operation.
 * Unprotects document.
 */
export class UnprotectDocumentRequest {
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
}

/**
 * Request model for UpdateBookmark operation.
 * Updates document bookmark.
 */
export class UpdateBookmarkRequest {
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
}

/**
 * Request model for UpdateBorder operation.
 * 'nodePath' should refer to paragraph, cell or row.
 */
export class UpdateBorderRequest {
    /**
     * The document name.
     */
    public name: string;

    /**
     * Border properties.
     */
    public borderProperties: importedBorder.Border;

    /**
     * Path to the node with border(node should be paragraph, cell or row).
     */
    public nodePath: string;

    /**
     * Border type.
     */
    public borderType: string;

    /**
     * Original document folder.
     */
    public folder: string;

    /**
     * Original document storage.
     */
    public storage: string;

    /**
     * Encoding that will be used to load an HTML (or TXT) document if the encoding is not specified in HTML.
     */
    public loadEncoding: string;

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
 * Request model for UpdateComment operation.
 * Updates the comment, returns updated comment data.
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
 * Request model for UpdateDrawingObject operation.
 * Updates drawing object, returns updated  drawing object's data.
 */
export class UpdateDrawingObjectRequest {
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

    public constructor(init?: Partial< UpdateDrawingObjectRequest >) {
        Object.assign(this, init);
    }
}

/**
 * Request model for UpdateDrawingObjectWithoutNodePath operation.
 * Updates drawing object, returns updated  drawing object's data.
 */
export class UpdateDrawingObjectWithoutNodePathRequest {
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
     * Original document folder.
     */
    public folder: string;

    /**
     * Original document storage.
     */
    public storage: string;

    /**
     * Encoding that will be used to load an HTML (or TXT) document if the encoding is not specified in HTML.
     */
    public loadEncoding: string;

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

    public constructor(init?: Partial< UpdateDrawingObjectWithoutNodePathRequest >) {
        Object.assign(this, init);
    }
}

/**
 * Request model for UpdateField operation.
 * Updates field's properties, returns updated field's data.
 */
export class UpdateFieldRequest {
    /**
     * The document name.
     */
    public name: string;

    /**
     * Field data.
     */
    public field: importedFieldUpdate.FieldUpdate;

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

    public constructor(init?: Partial< UpdateFieldRequest >) {
        Object.assign(this, init);
    }
}

/**
 * Request model for UpdateFields operation.
 * Updates (reevaluate) fields in document.
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

    public constructor(init?: Partial< UpdateFieldsRequest >) {
        Object.assign(this, init);
    }
}

/**
 * Request model for UpdateFootnote operation.
 * Updates footnote's properties, returns updated run's data.
 */
export class UpdateFootnoteRequest {
    /**
     * The document name.
     */
    public name: string;

    /**
     * Footnote data.
     */
    public footnoteDto: importedFootnoteUpdate.FootnoteUpdate;

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

    public constructor(init?: Partial< UpdateFootnoteRequest >) {
        Object.assign(this, init);
    }
}

/**
 * Request model for UpdateFootnoteWithoutNodePath operation.
 * Updates footnote's properties, returns updated run's data.
 */
export class UpdateFootnoteWithoutNodePathRequest {
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
     * Original document folder.
     */
    public folder: string;

    /**
     * Original document storage.
     */
    public storage: string;

    /**
     * Encoding that will be used to load an HTML (or TXT) document if the encoding is not specified in HTML.
     */
    public loadEncoding: string;

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

    public constructor(init?: Partial< UpdateFootnoteWithoutNodePathRequest >) {
        Object.assign(this, init);
    }
}

/**
 * Request model for UpdateFormField operation.
 * Updates properties of form field, returns updated form field.
 */
export class UpdateFormFieldRequest {
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

    public constructor(init?: Partial< UpdateFormFieldRequest >) {
        Object.assign(this, init);
    }
}

/**
 * Request model for UpdateFormFieldWithoutNodePath operation.
 * Updates properties of form field, returns updated form field.
 */
export class UpdateFormFieldWithoutNodePathRequest {
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
     * Original document folder.
     */
    public folder: string;

    /**
     * Original document storage.
     */
    public storage: string;

    /**
     * Encoding that will be used to load an HTML (or TXT) document if the encoding is not specified in HTML.
     */
    public loadEncoding: string;

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

    public constructor(init?: Partial< UpdateFormFieldWithoutNodePathRequest >) {
        Object.assign(this, init);
    }
}

/**
 * Request model for UpdateList operation.
 * Updates list properties, returns updated list.
 */
export class UpdateListRequest {
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
}

/**
 * Request model for UpdateListLevel operation.
 * Updates list level in document list, returns updated list.
 */
export class UpdateListLevelRequest {
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
}

/**
 * Request model for UpdateParagraphFormat operation.
 * Updates paragraph format properties, returns updated format properties.
 */
export class UpdateParagraphFormatRequest {
    /**
     * The document name.
     */
    public name: string;

    /**
     * Paragraph format object.
     */
    public dto: importedParagraphFormatUpdate.ParagraphFormatUpdate;

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

    public constructor(init?: Partial< UpdateParagraphFormatRequest >) {
        Object.assign(this, init);
    }
}

/**
 * Request model for UpdateParagraphListFormat operation.
 * Updates paragraph list format properties, returns updated list format properties.
 */
export class UpdateParagraphListFormatRequest {
    /**
     * The document name.
     */
    public name: string;

    /**
     * Paragraph format object.
     */
    public dto: importedListFormatUpdate.ListFormatUpdate;

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

    public constructor(init?: Partial< UpdateParagraphListFormatRequest >) {
        Object.assign(this, init);
    }
}

/**
 * Request model for UpdateParagraphListFormatWithoutNodePath operation.
 * Updates paragraph list format properties, returns updated list format properties.
 */
export class UpdateParagraphListFormatWithoutNodePathRequest {
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
     * Original document folder.
     */
    public folder: string;

    /**
     * Original document storage.
     */
    public storage: string;

    /**
     * Encoding that will be used to load an HTML (or TXT) document if the encoding is not specified in HTML.
     */
    public loadEncoding: string;

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

    public constructor(init?: Partial< UpdateParagraphListFormatWithoutNodePathRequest >) {
        Object.assign(this, init);
    }
}

/**
 * Request model for UpdateRun operation.
 * Updates run's properties, returns updated run's data.
 */
export class UpdateRunRequest {
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
}

/**
 * Request model for UpdateRunFont operation.
 * Updates font properties, returns updated font data.
 */
export class UpdateRunFontRequest {
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
}

/**
 * Request model for UpdateSectionPageSetup operation.
 * Updates page setup of section.
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
 * Request model for UpdateStyle operation.
 * Updates style properties, returns an updated style.
 */
export class UpdateStyleRequest {
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
}

/**
 * Request model for UpdateTableCellFormat operation.
 * Updates a table cell format.
 */
export class UpdateTableCellFormatRequest {
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
}

/**
 * Request model for UpdateTableProperties operation.
 * Updates a table properties.
 */
export class UpdateTablePropertiesRequest {
    /**
     * The document name.
     */
    public name: string;

    /**
     * The properties.
     */
    public properties: importedTableProperties.TableProperties;

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

    public constructor(init?: Partial< UpdateTablePropertiesRequest >) {
        Object.assign(this, init);
    }
}

/**
 * Request model for UpdateTablePropertiesWithoutNodePath operation.
 * Updates a table properties.
 */
export class UpdateTablePropertiesWithoutNodePathRequest {
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
     * Original document folder.
     */
    public folder: string;

    /**
     * Original document storage.
     */
    public storage: string;

    /**
     * Encoding that will be used to load an HTML (or TXT) document if the encoding is not specified in HTML.
     */
    public loadEncoding: string;

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

    public constructor(init?: Partial< UpdateTablePropertiesWithoutNodePathRequest >) {
        Object.assign(this, init);
    }
}

/**
 * Request model for UpdateTableRowFormat operation.
 * Updates a table row format.
 */
export class UpdateTableRowFormatRequest {
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

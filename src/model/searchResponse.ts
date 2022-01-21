/*
 * --------------------------------------------------------------------------------
 * <copyright company="Aspose" file="searchResponse.ts">
 *   Copyright (c) 2022 Aspose.Words for Cloud
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
import { SearchResultsCollection } from './searchResultsCollection';
import { WordsResponse } from './wordsResponse';

export const importsMapSearchResponse = {
    SearchResultsCollection,
    WordsResponse,
};

/**
 * The REST response with a regular expression pattern and a collection of search results.
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
        }
    ];

    /**
     * Returns attribute type map
     */
    public static getAttributeTypeMap() {
        return super.getAttributeTypeMap().concat(SearchResponse.attributeTypeMap);
    }

    /**
     * Gets or sets the regular expression pattern used to find matches.
     */
    protected _searchingPattern: string;

    /**
     * Gets or sets the regular expression pattern used to find matches.
     */
    public get searchingPattern(): string {
        return this._searchingPattern;
    }

    /**
     * Gets or sets the regular expression pattern used to find matches.
     */
    public set searchingPattern(value: string) {
        this._searchingPattern = value;
    }


    /**
     * Gets or sets the collection of search results.
     */
    protected _searchResults: SearchResultsCollection;

    /**
     * Gets or sets the collection of search results.
     */
    public get searchResults(): SearchResultsCollection {
        return this._searchResults;
    }

    /**
     * Gets or sets the collection of search results.
     */
    public set searchResults(value: SearchResultsCollection) {
        this._searchResults = value;
    }


    public constructor(init?: Partial< SearchResponse >) {
        super(init);
        Object.assign(this, init);
    }
}


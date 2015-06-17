import IProvider = require("../../modules/uv-shared-module/IProvider");
import Page = require("./Page");
import SearchResult = require("./SearchResult");

interface ISeadragonProvider extends IProvider{
    getAutoCompleteService(): string;
    getAutoCompleteUri(): string;
    getConfinedImageUri(canvas: any, width: number, height?: number): string;
    getCroppedImageUri(asset: any, viewer: any, download?: boolean, relativeUri?: boolean): string;
    getEmbedScript(canvasIndex: number, zoom: string, width: number, height: number, rotation: number, embedTemplate: string): string;
    getImageUri(canvas: any): string;
    getPages(): JQueryDeferred<any>;
    getSearchResultByCanvasIndex(canvasIndex: number): SearchResult;
    getSearchWithinService(): string;
    getSearchWithinServiceUri(): string;
    isSearchWithinEnabled(): boolean;
    pages: Page[];
    parseSearchWithinResults(results: any);
    searchResults: SearchResult[];
    searchWithin(terms: string, callback: (results: any) => void): void;
}

export = ISeadragonProvider;
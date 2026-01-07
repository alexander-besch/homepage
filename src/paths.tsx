// Copyright 2025 Christopher Besch
// This file is published under the MIT license:

// Permission is hereby granted, free of charge, to any person obtaining a copy
// of this software and associated documentation files (the "Software"), to deal
// in the Software without restriction, including without limitation the rights
// to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
// copies of the Software, and to permit persons to whom the Software is
// furnished to do so, subject to the following conditions:

// The above copyright notice and this permission notice shall be included in all
// copies or substantial portions of the Software.

// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
// IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
// FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
// AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
// LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
// OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
// SOFTWARE.

import * as fs from "fs";
import path from "path";

export function ensureDirExists(dir: string): void {
    if (!fs.existsSync(dir)) {
        fs.mkdirSync(dir, { recursive: true });
    }
}


export const modelPath = `./models`;
const cachePath = `./cache`;
export function getImmichPortfolioPath(): string {
    ensureDirExists(cachePath);
    return path.join(cachePath, "immich_download.json");
}
export function getSentenceEmbeddingCachePath(): string {
    ensureDirExists(cachePath);
    return path.join(cachePath, "sentence_embeddings.json");
}
export function getImageEmbeddingCachePath(): string {
    ensureDirExists(cachePath);
    return path.join(cachePath, "image_embeddings.json");
}
export function getImmichCachePath(name: string): string {
    ensureDirExists(cachePath);
    return path.join(cachePath, name);
}

// assets //
export const loadPicturePath = `/picture`;
export function getAssetRoute(id: string): string {
    return path.join(loadPicturePath, id);
}

// tags //
export function getTagRoute(tag: string): string {
    const [group, value] = tag.split(":");
    return `/tag/${group}/${value}`;
}

// years //
export function getYearRoute(year: string): string {
    return `/year/${year}/`;
}
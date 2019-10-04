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

import { Buffer } from "buffer";
import { expect } from "chai";
import { Then } from "cucumber";

Then(/^document is returned as an attachment$/, function() {
    expect(this.response.body).to.is.instanceof(Buffer);
    expect(this.response.body.byteLength).to.greaterThan(0);
});

Then(/^attachment's format is (.*)$/, function(format) {
    expect(this.response.body).to.is.instanceof(Buffer);

    const buffer = this.response.body as Buffer;
    if (format !== "pdf") {
        expect(buffer.byteLength).to.greaterThan(0);
        return;
    }
    
    const strBuffer = buffer.toString("utf-8");
    const actualArray = [strBuffer[0], strBuffer[1], strBuffer[2], strBuffer[3]];
    const exptectedArray = ["%", "P", "D", "F" ];

    expect(actualArray).to.have.members(exptectedArray);
});

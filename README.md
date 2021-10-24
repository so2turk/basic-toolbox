# basic-toolbox
Collection of basic tools for JS.

This is a work in progress. New features will be available soon. Feel free to contribute.

INSTALL

$ npm i basic-toolbox

FEATURES

So far there are four methods to help for basic problems;
    arrEqual: compares two arrays whether they are equal or not
        arrEqual([1, [2, 3]], [1, [2, 3]] returns false
        arrEqual([1, 2, undefined], [1, 2, undefined]) returns true
        arrEqual('string', ['string']) throws TypeError

    arrSort: sorts array according to given sort type
        arrSort([3, 575, 33], 'a') returns [3, 33, 575]
        arrSort([3, 575, 33], 'd') returns [575, 33, 3]
        arrSort([3, 99, 1, 43, 766, 11, 1001], 'Mm') returns [1001, 1, 766, 3, 99, 11, 43]

    randomInt: gives random integer within given range (inclusive)
        randomInt(1, 3) returns an integer within the [1 - 3]
        arrSort(1.3, 3.5) throw 'Arguments must be integer' error
        
    round: rounds number with given precision
        round(1.54567, 3) returns 1.546
        round(1.54567, 2) returns 1.55
        round(1.54567, 1) returns 1.5

LICENSE

MIT License

Copyright (c) 2021 Serhat Ozturk (so2turk@yahoo.com)

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.


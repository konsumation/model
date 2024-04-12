[![npm](https://img.shields.io/npm/v/@konsumation/model.svg)](https://www.npmjs.com/package/@konsumation/model)
[![License](https://img.shields.io/badge/License-BSD%203--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)
[![Typed with TypeScript](https://flat.badgen.net/badge/icon/Typed?icon=typescript\&label\&labelColor=blue\&color=555555)](https://typescriptlang.org)
[![bundlejs](https://deno.bundlejs.com/?q=@konsumation/model\&badge=detailed)](https://bundlejs.com/?q=@konsumation/model)
[![downloads](http://img.shields.io/npm/dm/@konsumation/model.svg?style=flat-square)](https://npmjs.org/package/@konsumation/model)
[![Build Status](https://img.shields.io/endpoint.svg?url=https%3A%2F%2Factions-badge.atrox.dev%2Fkonsumation%2Fmodel%2Fbadge\&style=flat)](https://actions-badge.atrox.dev/konsumation/model/goto)
[![Styled with prettier](https://img.shields.io/badge/styled_with-prettier-ff69b4.svg)](https://github.com/prettier/prettier)
[![Commitizen friendly](https://img.shields.io/badge/commitizen-friendly-brightgreen.svg)](http://commitizen.github.io/cz-cli/)
[![Known Vulnerabilities](https://snyk.io/test/github/konsumation/model/badge.svg)](https://snyk.io/test/github/konsumation/model)

# @konsumation/model

Data model of the konsumation apps

# API

<!-- Generated by documentation.js. Update this documentation by updating the source code. -->

### Table of Contents

*   [AttributeDefinition](#attributedefinition)
    *   [Properties](#properties)
*   [description](#description)
*   [name](#name)
*   [id](#id)
*   [unit](#unit)
*   [unit](#unit-1)
*   [schemaVersion](#schemaversion)
*   [serial](#serial)
*   [validFrom](#validfrom)
*   [fractionalDigits](#fractionaldigits)
*   [fractionalDigits](#fractionaldigits-1)
*   [order](#order)
*   [Base](#base)
    *   [attributeNames](#attributenames)
    *   [getAttributes](#getattributes)
    *   [setAttributes](#setattributes)
        *   [Parameters](#parameters)
    *   [type](#type)
    *   [attributes](#attributes)
    *   [attributeNameMapping](#attributenamemapping)
    *   [attributeNames](#attributenames-1)
*   [Category](#category)
    *   [Parameters](#parameters-1)
    *   [name](#name-1)
    *   [description](#description-1)
    *   [fractionalDigits](#fractionaldigits-2)
    *   [unit](#unit-2)
    *   [order](#order-1)
    *   [write](#write)
        *   [Parameters](#parameters-2)
    *   [delete](#delete)
        *   [Parameters](#parameters-3)
    *   [meters](#meters)
        *   [Parameters](#parameters-4)
    *   [meter](#meter)
        *   [Parameters](#parameters-5)
    *   [activeMeter](#activemeter)
        *   [Parameters](#parameters-6)
    *   [addMeter](#addmeter)
        *   [Parameters](#parameters-7)
    *   [notes](#notes)
        *   [Parameters](#parameters-8)
    *   [values](#values)
        *   [Parameters](#parameters-9)
    *   [latestValue](#latestvalue)
        *   [Parameters](#parameters-10)
    *   [writeValue](#writevalue)
        *   [Parameters](#parameters-11)
    *   [deleteValue](#deletevalue)
        *   [Parameters](#parameters-12)
    *   [text](#text)
        *   [Parameters](#parameters-13)
    *   [type](#type-1)
*   [SCHEMA\_VERSION\_2](#schema_version_2)
*   [SCHEMA\_VERSION\_3](#schema_version_3)
*   [SCHEMA\_VERSION\_CURRENT](#schema_version_current)
*   [Master](#master)
    *   [Parameters](#parameters-14)
    *   [Properties](#properties-1)
    *   [write](#write-1)
        *   [Parameters](#parameters-15)
    *   [close](#close)
    *   [addCategory](#addcategory)
        *   [Parameters](#parameters-16)
    *   [categories](#categories)
    *   [category](#category-1)
        *   [Parameters](#parameters-17)
    *   [text](#text-1)
    *   [initialize](#initialize)
        *   [Parameters](#parameters-18)
*   [Meter](#meter-1)
    *   [Parameters](#parameters-19)
    *   [name](#name-2)
    *   [category](#category-2)
    *   [description](#description-2)
    *   [serial](#serial-1)
    *   [validFrom](#validfrom-1)
    *   [write](#write-2)
        *   [Parameters](#parameters-20)
    *   [delete](#delete-1)
        *   [Parameters](#parameters-21)
    *   [values](#values-1)
        *   [Parameters](#parameters-22)
    *   [writeValue](#writevalue-1)
        *   [Parameters](#parameters-23)
    *   [deleteValue](#deletevalue-1)
        *   [Parameters](#parameters-24)
    *   [latestValue](#latestvalue-1)
        *   [Parameters](#parameters-25)
    *   [notes](#notes-1)
        *   [Parameters](#parameters-26)
    *   [addNote](#addnote)
        *   [Parameters](#parameters-27)
    *   [text](#text-2)
        *   [Parameters](#parameters-28)
    *   [type](#type-2)
*   [Note](#note)
    *   [Parameters](#parameters-29)
    *   [name](#name-3)
    *   [description](#description-3)
    *   [meter](#meter-2)
    *   [write](#write-3)
        *   [Parameters](#parameters-30)
    *   [delete](#delete-2)
        *   [Parameters](#parameters-31)
    *   [text](#text-3)
        *   [Parameters](#parameters-32)
    *   [type](#type-3)
*   [toText](#totext)
    *   [Parameters](#parameters-33)

## AttributeDefinition

Type: [Object](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Object)

### Properties

*   `type` **[string](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String)**&#x20;
*   `isKey` **[boolean](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Boolean)**&#x20;
*   `writable` **[boolean](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Boolean)**&#x20;
*   `mandatory` **[boolean](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Boolean)**&#x20;
*   `default` **any?** the default value

## description

Type: [AttributeDefinition](#attributedefinition)

## name

Type: [AttributeDefinition](#attributedefinition)

## id

Type: [AttributeDefinition](#attributedefinition)

## unit

Type: [AttributeDefinition](#attributedefinition)

Returns **[string](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String)**&#x20;

## unit

Type: [string](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String)?

## schemaVersion

Type: [AttributeDefinition](#attributedefinition)

## serial

Type: [AttributeDefinition](#attributedefinition)

## validFrom

Type: [AttributeDefinition](#attributedefinition)

## fractionalDigits

Type: [AttributeDefinition](#attributedefinition)

## fractionalDigits

Type: [number](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Number)?

## order

Type: [AttributeDefinition](#attributedefinition)

## Base

### attributeNames

Attribute names on the javascript side.

Returns **[Array](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Array)<[string](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String)>**&#x20;

### getAttributes

Object keys are the mapped external attribute names.

Returns **[Object](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Object)**&#x20;

### setAttributes

Sets values with external attribute names.

#### Parameters

*   `values` **[Object](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Object)**&#x20;

### type

Returns **[string](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String)**&#x20;

### attributes

Attribute definitions.

Returns **[Object](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Object)**&#x20;

### attributeNameMapping

Maping of attribute names from internal (javascript) to external (database).

Returns **[Object](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Object)**&#x20;

### attributeNames

Attribute names on the javascript side.

Returns **[Array](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Array)<[string](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String)>**&#x20;

## Category

**Extends Base**

Value Category.

### Parameters

*   `values` **[Object](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Object)**&#x20;

### name

Type: [string](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String)

### description

Type: [string](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String)?

### fractionalDigits

Type: [number](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Number)?

### unit

Type: [string](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String)?

### order

Type: [string](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String)?

### write

Write into store.

#### Parameters

*   `context` **any**&#x20;

### delete

Delete Category from store.

#### Parameters

*   `context` **any**&#x20;

### meters

List assigned meters.

#### Parameters

*   `context` **any**&#x20;
*   `options` **[Object](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Object)?**&#x20;

    *   `options.gte` **[string](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String)?** from name
    *   `options.lte` **[string](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String)?** up to name
    *   `options.reverse` **[boolean](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Boolean)?** order

Returns **AsyncIterable<[Meter](#meter)>**&#x20;

### meter

Deliver Meter for a given name.

#### Parameters

*   `context` **any**&#x20;
*   `name` **[string](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String)**&#x20;

Returns **[Promise](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)<([Meter](#meter) | [undefined](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/undefined))>**&#x20;

### activeMeter

Currently active Meter.

#### Parameters

*   `context` **any**&#x20;

Returns **[Promise](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)<([Meter](#meter) | [undefined](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/undefined))>**&#x20;

### addMeter

Add a meter to the category;

#### Parameters

*   `values` **[Object](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Object)**  (optional, default `{}`)

Returns **[Promise](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)<[Meter](#meter)>**&#x20;

### notes

All notes from all meters.

#### Parameters

*   `context` **any**&#x20;

Returns **AsyncIterable<[Note](#note)>**&#x20;

### values

All values from all meters.

#### Parameters

*   `context` **any**&#x20;

Returns **AsyncIterable<{date: [Date](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Date), value: [number](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Number)}>**&#x20;

### latestValue

Get the latest value.

#### Parameters

*   `context` **any**&#x20;

Returns **[Promise](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)<({date: [Date](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Date), value: [number](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Number)} | [undefined](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/undefined))>**&#x20;

### writeValue

Add a value to the active meter.

#### Parameters

*   `context` **any**&#x20;
*   `time` **[Date](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Date)**&#x20;
*   `value` **[number](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Number)**&#x20;

Returns **[Promise](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<any>**&#x20;

### deleteValue

Delete a value from the active meter.

#### Parameters

*   `context` **any**&#x20;
*   `time` **[Date](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Date)**&#x20;

Returns **[Promise](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<any>**&#x20;

### text

Text representation.

#### Parameters

*   `context` **any**&#x20;

Returns **AsyncIterable<[string](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String)>**&#x20;

### type

Name of the type in text dump

Returns **[string](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String)**&#x20;

## SCHEMA\_VERSION\_2

Schema with type + name

Type: [string](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String)

## SCHEMA\_VERSION\_3

Values are attached to the meter.
Value dates may be given as iso date.

Type: [string](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String)

## SCHEMA\_VERSION\_CURRENT

Schema version for newly created databases

## Master

**Extends Base**

### Parameters

*   `values` &#x20;

### Properties

*   `schemaVersion` **[string](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String)**&#x20;

### write

Write attributes store.

#### Parameters

*   `context` **any**&#x20;

### close

### addCategory

Add a category.

#### Parameters

*   `values` **[Object](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Object)**&#x20;

Returns **[Promise](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)<[Category](#category)>**&#x20;

### categories

Returns **AsyncIterable<[Category](#category)>**&#x20;

### category

#### Parameters

*   `name` **[string](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String)**&#x20;

Returns **[Promise](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)<([Category](#category) | [undefined](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/undefined))>**&#x20;

### text

Create text representation

Returns **AsyncIterable<[string](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String)>**&#x20;

### initialize

#### Parameters

*   `values` **([Object](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Object) | [string](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String))**&#x20;

Returns **[Promise](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)<[Master](#master)>**&#x20;

## Meter

**Extends Base**

### Parameters

*   `values` **[Object](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Object)**&#x20;

### name

Type: [string](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String)

### category

Type: [Category](#category)

### description

Type: [string](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String)?

### serial

Type: [string](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String)?

### validFrom

Type: [Date](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Date)?

### write

#### Parameters

*   `context` **any**&#x20;

### delete

#### Parameters

*   `context` **any**&#x20;

### values

#### Parameters

*   `context` **any**&#x20;

Returns **AsyncIterable<{date: [Date](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Date), value: [number](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Number)}>**&#x20;

### writeValue

Write new value.

#### Parameters

*   `context` **any**&#x20;
*   `time` **[Date](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Date)**&#x20;
*   `value` **[number](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Number)**&#x20;

### deleteValue

Delete a value.

#### Parameters

*   `context` **any**&#x20;
*   `time` **[Date](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Date)**&#x20;

### latestValue

Get the latest value.

#### Parameters

*   `context` **any**&#x20;

Returns **[Promise](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)<({date: [Date](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Date), value: [number](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Number)} | [undefined](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/undefined))>**&#x20;

### notes

List assigned Notes.

#### Parameters

*   `context` **any**&#x20;
*   `options` **[Object](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Object)?**&#x20;

Returns **AsyncIterable<[Note](#note)>**&#x20;

### addNote

Add a note to the meter;

#### Parameters

*   `values` **[Object](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Object)**  (optional, default `{}`)

Returns **[Promise](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)<[Note](#note)>**&#x20;

### text

Text representation.

#### Parameters

*   `context` **any**&#x20;

Returns **AsyncIterable<[string](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String)>**&#x20;

### type

Name of the type in text dump

Returns **[string](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String)**&#x20;

## Note

**Extends Base**

### Parameters

*   `values` **[Object](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Object)**&#x20;

### name

Type: [string](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String)

### description

Type: [string](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String)?

### meter

Type: [Meter](#meter)

### write

Write into store.

#### Parameters

*   `context` **any**&#x20;

### delete

Delete from store.

#### Parameters

*   `context` **any**&#x20;

### text

Text representation.

#### Parameters

*   `context` **any**&#x20;

Returns **AsyncIterable<[string](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String)>**&#x20;

### type

Name of the type in text dump

Returns **[string](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String)**&#x20;

## toText

Text representation.

### Parameters

*   `context` **any**&#x20;
*   `object` **[Base](#base)**&#x20;
*   `key` **[string](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String)**&#x20;
*   `iterators` **...any**&#x20;

Returns **AsyncIterable<[string](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String)>**&#x20;

# install

With [npm](http://npmjs.org) do:

```shell
npm install @konsumation/model
```

# license

BSD-2-Clause

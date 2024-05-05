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
*   [value](#value)
*   [date](#date)
*   [Base](#base)
    *   [isDefinedAttribute](#isdefinedattribute)
        *   [Parameters](#parameters)
    *   [\_getAttributes](#_getattributes)
        *   [Parameters](#parameters-1)
    *   [getLocalAttributes](#getlocalattributes)
        *   [Parameters](#parameters-2)
    *   [setAttributes](#setattributes)
        *   [Parameters](#parameters-3)
    *   [type](#type)
    *   [attributes](#attributes)
    *   [attributeNameMapping](#attributenamemapping)
*   [Category](#category)
    *   [Parameters](#parameters-4)
    *   [name](#name-1)
    *   [description](#description-1)
    *   [fractionalDigits](#fractionaldigits-2)
    *   [unit](#unit-2)
    *   [order](#order-1)
    *   [write](#write)
        *   [Parameters](#parameters-5)
    *   [delete](#delete)
        *   [Parameters](#parameters-6)
    *   [meters](#meters)
        *   [Parameters](#parameters-7)
    *   [meter](#meter)
        *   [Parameters](#parameters-8)
    *   [activeMeter](#activemeter)
        *   [Parameters](#parameters-9)
    *   [addMeter](#addmeter)
        *   [Parameters](#parameters-10)
    *   [deleteMeter](#deletemeter)
        *   [Parameters](#parameters-11)
    *   [notes](#notes)
        *   [Parameters](#parameters-12)
    *   [note](#note)
        *   [Parameters](#parameters-13)
    *   [values](#values)
        *   [Parameters](#parameters-14)
    *   [value](#value-1)
        *   [Parameters](#parameters-15)
    *   [latestValue](#latestvalue)
        *   [Parameters](#parameters-16)
    *   [addValue](#addvalue)
        *   [Parameters](#parameters-17)
    *   [deleteValue](#deletevalue)
        *   [Parameters](#parameters-18)
    *   [text](#text)
        *   [Parameters](#parameters-19)
    *   [type](#type-1)
*   [SCHEMA\_VERSION\_2](#schema_version_2)
*   [SCHEMA\_VERSION\_3](#schema_version_3)
*   [SCHEMA\_VERSION\_CURRENT](#schema_version_current)
*   [Master](#master)
    *   [Parameters](#parameters-20)
    *   [Properties](#properties-1)
    *   [write](#write-1)
        *   [Parameters](#parameters-21)
    *   [close](#close)
    *   [addCategory](#addcategory)
        *   [Parameters](#parameters-22)
    *   [categories](#categories)
        *   [Parameters](#parameters-23)
    *   [category](#category-1)
        *   [Parameters](#parameters-24)
    *   [text](#text-1)
        *   [Parameters](#parameters-25)
    *   [fromText](#fromtext)
        *   [Parameters](#parameters-26)
    *   [initialize](#initialize)
        *   [Parameters](#parameters-27)
*   [Meter](#meter-1)
    *   [Parameters](#parameters-28)
    *   [name](#name-2)
    *   [category](#category-2)
    *   [description](#description-2)
    *   [serial](#serial-1)
    *   [validFrom](#validfrom-1)
    *   [write](#write-2)
        *   [Parameters](#parameters-29)
    *   [delete](#delete-1)
        *   [Parameters](#parameters-30)
    *   [values](#values-1)
        *   [Parameters](#parameters-31)
    *   [value](#value-2)
        *   [Parameters](#parameters-32)
    *   [addValue](#addvalue-1)
        *   [Parameters](#parameters-33)
    *   [deleteValue](#deletevalue-1)
        *   [Parameters](#parameters-34)
    *   [latestValue](#latestvalue-1)
        *   [Parameters](#parameters-35)
    *   [notes](#notes-1)
        *   [Parameters](#parameters-36)
    *   [note](#note-1)
        *   [Parameters](#parameters-37)
    *   [addNote](#addnote)
        *   [Parameters](#parameters-38)
    *   [deleteNote](#deletenote)
        *   [Parameters](#parameters-39)
    *   [text](#text-2)
        *   [Parameters](#parameters-40)
    *   [type](#type-2)
    *   [parentType](#parenttype)
*   [Note](#note-2)
    *   [Parameters](#parameters-41)
    *   [name](#name-3)
    *   [description](#description-3)
    *   [meter](#meter-2)
    *   [write](#write-3)
        *   [Parameters](#parameters-42)
    *   [delete](#delete-2)
        *   [Parameters](#parameters-43)
    *   [text](#text-3)
        *   [Parameters](#parameters-44)
    *   [type](#type-3)
    *   [parentType](#parenttype-1)
*   [toText](#totext)
    *   [Parameters](#parameters-45)
*   [Value](#value-3)
    *   [Parameters](#parameters-46)
    *   [meter](#meter-3)
    *   [date](#date-1)
    *   [value](#value-4)
    *   [write](#write-4)
        *   [Parameters](#parameters-47)
    *   [delete](#delete-3)
        *   [Parameters](#parameters-48)
    *   [text](#text-4)
        *   [Parameters](#parameters-49)
    *   [type](#type-4)
    *   [parentType](#parenttype-2)

## AttributeDefinition

Type: [Object](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Object)

### Properties

*   `type` **[string](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String)**&#x20;
*   `isKey` **[boolean](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Boolean)**&#x20;
*   `isForeign` **[boolean](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Boolean)** do we represent a foreign entity
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

## value

Type: [AttributeDefinition](#attributedefinition)

## date

Type: [AttributeDefinition](#attributedefinition)

## Base

### isDefinedAttribute

Is the given attribute defined in the target.
Some attributes are inherited from parent object and therfore not defined in the target.

#### Parameters

*   `name` **[string](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String)**&#x20;

Returns **[boolean](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Boolean)**&#x20;

### \_getAttributes

Object keys are the mapped external attribute names.

#### Parameters

*   `mapping` &#x20;

Returns **[Object](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Object)**&#x20;

### getLocalAttributes

Object keys are the mapped external attribute names but only for local (not isForeign) ones.

#### Parameters

*   `mapping` &#x20;

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

## Category

**Extends Base**

Value Category.

### Parameters

*   `attributes` **[Object](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Object)**&#x20;

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

*   `context` **any**&#x20;
*   `attributes` **[Object](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Object)**&#x20;

    *   `attributes.name` **[string](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String)**&#x20;
    *   `attributes.category` **[Category](#category)?**&#x20;
    *   `attributes.validFrom` **[Date](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Date)**&#x20;
    *   `attributes.description` **[string](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String)?**&#x20;
    *   `attributes.serial` **[string](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String)?**&#x20;
    *   `attributes.fractionalDigits` **[number](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Number)?**&#x20;
    *   `attributes.unit` **[string](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String)?**&#x20;

Returns **[Meter](#meter)**&#x20;

### deleteMeter

Delete a meter.

#### Parameters

*   `context` **any**&#x20;
*   `name` **[string](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String)**&#x20;

Returns **[Promise](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<any>**&#x20;

### notes

All notes from all meters.

#### Parameters

*   `context` **any**&#x20;

Returns **AsyncIterable<[Note](#note)>**&#x20;

### note

Deliver Value for a given date.

#### Parameters

*   `context` **any**&#x20;
*   `name` **[string](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String)**&#x20;

Returns **[Promise](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)<([Note](#note) | [undefined](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/undefined))>**&#x20;

### values

All values from all meters.

#### Parameters

*   `context` **any**&#x20;

Returns **AsyncIterable<[Value](#value)>**&#x20;

### value

Deliver Value for a given date.

#### Parameters

*   `context` **any**&#x20;
*   `date` **[Date](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Date)**&#x20;

Returns **[Promise](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)<([Value](#value) | [undefined](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/undefined))>**&#x20;

### latestValue

Get the latest value.

#### Parameters

*   `context` **any**&#x20;

Returns **[Promise](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)<({date: [Date](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Date), value: [number](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Number)} | [undefined](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/undefined))>**&#x20;

### addValue

Add a value to the active meter.

#### Parameters

*   `context` **any**&#x20;
*   `attributes` **[Object](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Object)**&#x20;

    *   `attributes.date` **[Date](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Date)**&#x20;
    *   `attributes.value` **[number](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Number)**&#x20;

Returns **[Promise](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<any>**&#x20;

### deleteValue

Delete a value from the active meter.

#### Parameters

*   `context` **any**&#x20;
*   `date` **[Date](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Date)**&#x20;

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

*   `context` **any**&#x20;
*   `attributes` **[Object](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Object)**&#x20;

    *   `attributes.name` **[string](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String)**&#x20;
    *   `attributes.description` **[string](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String)?**&#x20;
    *   `attributes.fractionalDigits` **[number](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Number)?**&#x20;
    *   `attributes.unit` **[string](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String)?**&#x20;

Returns **[Category](#category)**&#x20;

### categories

#### Parameters

*   `context` **any**&#x20;

Returns **AsyncIterable<[Category](#category)>**&#x20;

### category

#### Parameters

*   `context` **any**&#x20;
*   `name` **[string](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String)**&#x20;

Returns **[Promise](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)<([Category](#category) | [undefined](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/undefined))>**&#x20;

### text

Create text representation

#### Parameters

*   `context`   (optional, default `this.context`)

Returns **AsyncIterable<[string](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String)>**&#x20;

### fromText

#### Parameters

*   `input` **AsyncIterable<[Uint8Array](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Uint8Array)>**&#x20;

Returns **[Promise](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)<[Object](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Object)>**&#x20;

### initialize

#### Parameters

*   `values` **([Object](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Object) | [string](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String))**&#x20;

Returns **[Promise](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)<[Master](#master)>**&#x20;

## Meter

**Extends Base**

### Parameters

*   `attributes` **[Object](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Object)**&#x20;

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

Returns **AsyncIterable<[Value](#value)>**&#x20;

### value

Deliver value for a given date.

#### Parameters

*   `context` **any**&#x20;
*   `date` **[Date](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Date)**&#x20;

Returns **[Promise](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)<([Value](#value) | [undefined](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/undefined))>**&#x20;

### addValue

Add a new value.

#### Parameters

*   `context` **any**&#x20;
*   `attributes` **[Object](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Object)**&#x20;

    *   `attributes.date` **[Date](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Date)**&#x20;
    *   `attributes.value` **[number](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Number)**&#x20;

Returns **[Promise](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)<[Value](#value)>**&#x20;

### deleteValue

Delete a value.

#### Parameters

*   `context` **any**&#x20;
*   `date` **[Date](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Date)**&#x20;

Returns **[Promise](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<void>**&#x20;

### latestValue

Get the latest value.

#### Parameters

*   `context` **any**&#x20;

Returns **[Promise](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)<([Value](#value) | [undefined](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/undefined))>**&#x20;

### notes

List assigned Notes.

#### Parameters

*   `context` **any**&#x20;
*   `options` **[Object](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Object)?**&#x20;

Returns **AsyncIterable<[Note](#note)>**&#x20;

### note

Deliver Note for a given name.

#### Parameters

*   `context` **any**&#x20;
*   `name` **[string](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String)**&#x20;

Returns **[Promise](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)<([Note](#note) | [undefined](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/undefined))>**&#x20;

### addNote

Add a note to the meter;

#### Parameters

*   `context` **any**&#x20;
*   `attributes` **[Object](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Object)**&#x20;

    *   `attributes.name` **[string](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String)**&#x20;
    *   `attributes.meter` **[Meter](#meter)**&#x20;
    *   `attributes.description` **[string](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String)?**&#x20;

Returns **[Note](#note)**&#x20;

### deleteNote

delete a note.

#### Parameters

*   `context` **any**&#x20;
*   `name` **[string](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String)**&#x20;

Returns **[Promise](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<void>**&#x20;

### text

Text representation.

#### Parameters

*   `context` **any**&#x20;

Returns **AsyncIterable<[string](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String)>**&#x20;

### type

Name of the type in text dump.

Returns **[string](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String)**&#x20;

### parentType

Name of the parents type.

Returns **[string](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String)**&#x20;

## Note

**Extends Base**

### Parameters

*   `attributes` **[Object](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Object)**&#x20;

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

Name of the type in text dump.

Returns **[string](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String)**&#x20;

### parentType

Name of the parents type.

Returns **[string](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String)**&#x20;

## toText

Text representation.

### Parameters

*   `context` **any**&#x20;
*   `object` **[Base](#base)**&#x20;
*   `key` **[string](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String)?**&#x20;
*   `iterators` **...any**&#x20;

Returns **AsyncIterable<[string](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String)>**&#x20;

## Value

**Extends Base**

### Parameters

*   `attributes` **[Object](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Object)**&#x20;

### meter

Type: [Meter](#meter)

### date

Type: [Date](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Date)

### value

Type: [number](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Number)

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

### parentType

Name of the parents type.

Returns **[string](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String)**&#x20;

# install

With [npm](http://npmjs.org) do:

```shell
npm install @konsumation/model
```

# license

BSD-2-Clause

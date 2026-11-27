---
layout: page
title: Conventions for showing and drawing contractual controls on a map
---

A contractual control affects an area of land.  This may or may not be the same area as one or more whole title extents (or any other government captured labeled geographic space).  It could be, or include, co-extensive with part of a registered title extent, or unregistered land.

When someone views a contractual control on a map, or adds one to a map, the service should clearly show the area of land affected without confusing it with established title plan conventions.

[Conventions used on HM Land Registry title plans](conventions-used-on-hm-land-registry-title-plans)


## Recommended map treatment

Show the area subject to a contractual control using:

- a purple boundary
- light purple diagonal hatching at a 45-degree angle
- no opaque fill

The map key should label this as:

**Area subject to the contractual control**

The purple boundary and diagonal hatching should be used together. The service must not rely on colour alone to communicate meaning.

## Why purple is recommended

Red, brown, blue and green already have established meanings on HM Land Registry title plans.

These include:

| Colour | Established use |
| --- | --- |
| Red | The extent of a registered title |
| Brown | A beneficial right of way |
| Blue | Land subject to a right of way and, in some cases, floor levels |
| Green | Land removed from or excluded from a registered title |
| Purple | Proposed treatment for an area subject to a contractual control |

Using purple reduces the risk that someone will mistake the contractual control for an existing title plan reference.

Hatching is also an established way of identifying areas of land affected by entries in the register.

## Do not rely on colour alone

Colour should not be the only way of identifying the area.

Use a combination of:

- a purple boundary
- diagonal hatching
- a clear label in the map key

This will help people recognise the area when:

- they have a colour vision deficiency
- the map is printed in greyscale
- colours reproduce poorly
- the underlying map is visually busy
- several mapped references overlap

The treatment must be tested against the Ordnance Survey base map and any other references that may appear at the same time.

## While the user is drawing the area

While the polygon is being drawn, show:

- a clearly visible purple line
- visible points or handles at each selected location
- a clear indication of the first point, which will close the polygon

Do not apply heavy hatching while the polygon is unfinished. At this stage, the user needs to see the underlying map clearly so they can define the affected area accurately.

Suggested instruction:

## Draw the area of land subject to the contractual control

Click the map to add points around the area. Select the first point when you have finished.

## After the user completes the area

When the polygon is closed, immediately show:

- a purple boundary
- light purple diagonal hatching
- the underlying map features through the hatching
- a corresponding item in the map key

Suggested map key:

**Area subject to the contractual control**

Shown with purple hatching.

Avoid using a solid purple fill. People need to see roads, buildings, property features and other information beneath the polygon so they can check that the correct area has been selected.

## Describe the affected area, not a legal boundary

Do not describe the purple line as the ‘boundary of the contractual control’.

Use:

**Area subject to the contractual control**

This makes clear that the user is identifying the land affected by the contractual control. They are not being asked to define a new legal boundary.

## Suggested visual specification

As a starting point for prototyping and testing:

- use a purple similar to `#6F2C91`
- use a boundary between 2 and 3 pixels wide on screen
- use a lighter or partially transparent 45-degree diagonal hatch
- do not use an opaque area fill
- keep the underlying map visible
- include the same hatch pattern in the map key

The exact colour, line weight, transparency and hatch spacing should not be treated as an HM Land Registry standard until they have been tested.

Testing should include:

- accessibility and colour vision deficiency testing
- greyscale printing
- use over different Ordnance Survey map features
- areas containing dense map detail
- small and irregular polygons
- overlapping mapped references
- different screen sizes and zoom levels

## Editing and published map conventions

The map treatment used while someone creates or edits the contractual control does not necessarily need to be identical to the convention used in an official or published map.

The editing interface should help the user:

- select the correct land accurately
- understand the area they have selected
- correct mistakes easily
- see the map evidence beneath the selected area

The published treatment should help the reader:

- identify the affected area
- distinguish it from other title plan references
- understand the accompanying register information
- reproduce the map clearly in digital and printed formats

The service should therefore treat these as 2 related but separate design decisions:

1. the map-editing design language
2. the official or published mapping convention

Both treatments should communicate the same meaning, but they do not have to be visually identical.


## STATUS - guidance status

Initial draft:

* Ai assisted draft based on queries on publically available information about the colours and shading on HM Land Regsitry held property title plans
*Draft: v1.  Andy Porter and Claude.ai, 26 October 2026*

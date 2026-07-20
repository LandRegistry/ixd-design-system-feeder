---
layout: page
title: Font stack for services not hosted on GOV.UK
---


Use the GOV.UK font stack for services that are not hosted on GOV.UK.

```css
font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;
```

This stack uses fonts that are already installed on users' devices. It does not download web fonts, making it reliable, performant and suitable for government services.

## How the font stack works

Browsers work through the list from left to right and use the first available font.

Different operating systems include different fonts by default, so users will not all see exactly the same typeface.

| Platform | Font typically used                                                           |
| -------- | ----------------------------------------------------------------------------- |
| macOS    | Helvetica Neue                                                                |
| iOS      | Helvetica (or Helvetica Neue on older versions)                               |
| Windows  | Arial                                                                         |
| Android  | Roboto (via the generic `sans-serif` family)                                  |
| Linux    | Distribution-specific sans-serif font, such as Liberation Sans or DejaVu Sans |

This means that Apple users will usually see Helvetica, Windows users will usually see Arial, and Android users will usually see Roboto.

## Why use this font stack

### It does not download fonts

The font stack uses fonts that are already installed on the user's device.

This helps to:

* reduce page load times
* avoid delays while fonts are downloaded
* work well on restricted government networks
* reduce dependencies on external font services

### It uses familiar platform fonts

Users see fonts that are commonly used by their operating system.

This helps create a familiar reading experience without requiring additional software or downloads.

### It works reliably across browsers

The font stack is supported by all modern browsers and continues to work in older browsers commonly found in government organisations.

## Accessibility

The choice of font does not affect how assistive technologies interpret a page.

Screen readers, including JAWS, NVDA, VoiceOver and TalkBack, use the page's semantic HTML and accessibility information rather than its visual styling.

To make content accessible, focus on:

* using semantic HTML
* meeting colour contrast requirements
* supporting text resizing and browser zoom
* allowing text to reflow without loss of content or functionality
* providing appropriate line spacing and font sizes
* avoiding text embedded in images

## Design considerations

### Font appearance varies between platforms

The service will not look identical on every device because different operating systems use different fonts.

These fonts vary in:

* letter width
* character spacing
* line height
* overall appearance

This is expected and should not be considered a defect.

### Text may wrap differently

Because fonts have different character widths, text may occupy different amounts of space on different platforms.

For example:

* a heading may fit on one line on macOS but wrap onto two lines on Windows
* a button label may become two lines on Android
* navigation items or breadcrumbs may wrap earlier than expected

Design layouts that can accommodate these differences.

### Helvetica is not available on every platform

Helvetica is licensed software and is not included with Windows by default.

Windows users will normally see Arial instead.

Android devices do not typically include Helvetica or Arial and usually display the platform's default sans-serif font.

## Development considerations

When implementing interfaces:

* test layouts on macOS, Windows and mobile devices
* check that headings, buttons and navigation still work when text wraps
* avoid layouts that depend on text fitting onto a single line
* allow components to grow vertically when needed
* use responsive layouts rather than fixed heights or widths

Designs should remain usable even when different fonts produce slightly different text measurements.


## STATUS - guidance status

Initial draft:

* Ai assisted draft based on a query asking about the font family and its impact on users, to be written like a design system page
* decide the audience for this page, we have currently assumed desingers and developers (solution engineering, maybe this should include specific infor for testers?)
* Author - Andy Porter (IxD lead)

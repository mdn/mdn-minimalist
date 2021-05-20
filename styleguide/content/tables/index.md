---
title: Tables - MDN Minimalist
keywords: tables, table element, mdn minimalist, mdn, sass, library
description: The MDN Web Docs table element styles
---

# Tables

## Standard table

This is the most commonly used table style across MDN Web Docs. It is achieved by adding the `standard-table` class to the `table` element.

> Note: Notice the use of the `thead` element as well as the `scope` attribute on the `th` elements. This is critical to set correctly to ensure our table data is exposed correctly to assistive technologies.

<table class="standard-table">
<caption>Standard table</caption>
 <thead>
  <tr>
   <th scope="col">Attribute</th>
   <th scope="col">Description</th>
  </tr>
 </thead>
 <tbody>
  <tr>
   <td><code><a href="#autocorrect">autocorrect</a></code></td>
   <td>A string indicating whether or not autocorrect is <code>on</code> or <code>off</code>. <strong>Safari only.</strong></td>
  </tr>
  <tr>
   <td><code><a href="#incremental">incremental</a></code></td>
   <td>Whether or not to send repeated <a href="/en-US/docs/Web/API/HTMLInputElement/search_event" title="search"><code>search</code></a> events to allow updating live search results while the user is still editing the value of the field. <strong>WebKit and Blink only (Safari, Chrome, Opera, etc.).</strong></td>
  </tr>
  <tr>
   <td><code><a href="#webkitdirectory">webkitdirectory</a></code></td>
   <td>A Boolean indicating whether or not to only allow the user to choose a directory (or directories, if <code><a href="#multiple">multiple</a></code> is also present)</td>
  </tr>
 </tbody>
</table>

### Code

```html
<table class="standard-table">
  <thead>
    <tr>
      <th scope="col">Attribute</th>
      <th scope="col">Description</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>
        <code><a href="#autocorrect">autocorrect</a></code>
      </td>
      <td>
        A string indicating whether or not autocorrect is <code>on</code> or
        <code>off</code>. <strong>Safari only.</strong>
      </td>
    </tr>
    <tr>
      <td>
        <code><a href="#incremental">incremental</a></code>
      </td>
      <td>
        Whether or not to send repeated
        <a
          href="/en-US/docs/Web/API/HTMLInputElement/search_event"
          title="search"
          ><code>search</code></a
        >
        events to allow updating live search results while the user is still
        editing the value of the field.
        <strong>WebKit and Blink only (Safari, Chrome, Opera, etc.).</strong>
      </td>
    </tr>
  </tbody>
</table>
```

## Properties table

Property tables is most commonly used for technical summaries such as [the table seen here](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/video#technical_summary). The style is achieved by adding the class `properties` to the `table` element.

> Note: Notice the use of the `th` elements in each row as well as the `scope` attribute. This is critical to set correctly to ensure our table data is exposed correctly to assistive technologies.

<table class="properties">
    <tbody>
        <tr>
            <th scope="row"><a href="/en-US/docs/Web/Guide/HTML/Content_categories"
                    data-flaw="link5">Content categories</a></th>
            <td><a href="/en-US/docs/Web/Guide/HTML/Content_categories#Flow_content"
                    data-flaw="link6">Flow content</a>, phrasing content, embedded
                content. If it has a <a
                    href="/en-US/docs/Web/HTML/Element/video#attr-controls"><code>controls</code></a>
                attribute: interactive content and palpable content.</td>
        </tr>
        <tr>
            <th scope="row">Permitted content</th>
            <td>
                <p>If the element has a <a
                        href="/en-US/docs/Web/HTML/Element/video#attr-src"><code>src</code></a>
                    attribute: zero or more <a
                        href="/en-US/docs/Web/HTML/Element/track"><code>&lt;track&gt;</code></a>
                    elements, followed by transparent content that contains no media
                    elements–that is no <a
                        href="/en-US/docs/Web/HTML/Element/audio"><code>&lt;audio&gt;</code></a>
                    or <a
                        href="/en-US/docs/Web/HTML/Element/video"><code>&lt;video&gt;</code></a>
                </p>
                <p>Else: zero or more <a
                        href="/en-US/docs/Web/HTML/Element/source"><code>&lt;source&gt;</code></a>
                    elements, followed by zero or more <a
                        href="/en-US/docs/Web/HTML/Element/track"><code>&lt;track&gt;</code></a>
                    elements, followed by transparent content that contains no media
                    elements–that is no <a
                        href="/en-US/docs/Web/HTML/Element/audio"><code>&lt;audio&gt;</code></a>
                    or <a
                        href="/en-US/docs/Web/HTML/Element/video"><code>&lt;video&gt;</code></a>.
                </p>
            </td>
        </tr>
        <tr>
            <th scope="row">Tag omission</th>
            <td>None, both the starting and ending tag are mandatory.</td>
        </tr>
        <tr>
            <th scope="row">Permitted parents</th>
            <td>Any element that accepts embedded content.</td>
        </tr>
        <tr>
            <th scope="row">Implicit ARIA role</th>
            <td><a href="https://www.w3.org/TR/html-aria/#dfn-no-corresponding-role">No
                    corresponding role</a></td>
        </tr>
        <tr>
            <th scope="row">Permitted ARIA roles</th>
            <td><code><a href="https://w3c.github.io/aria/#application" class="external">application</a></code>
            </td>
        </tr>
        <tr>
            <th scope="row">DOM interface</th>
            <td><a
                    href="/en-US/docs/Web/API/HTMLVideoElement"><code>HTMLVideoElement</code></a>
            </td>
        </tr>
    </tbody>
</table>

### Code

```html
<table class="properties">
  <tbody>
    <tr>
      <th scope="row">
        <a
          href="/en-US/docs/Web/Guide/HTML/Content_categories"
          data-flaw="link5"
          >Content categories</a
        >
      </th>
      <td>
        <a
          href="/en-US/docs/Web/Guide/HTML/Content_categories#Flow_content"
          data-flaw="link6"
          >Flow content</a
        >, phrasing content, embedded content. If it has a
        <a href="/en-US/docs/Web/HTML/Element/video#attr-controls"
          ><code>controls</code></a
        >
        attribute: interactive content and palpable content.
      </td>
    </tr>
    <tr>
      <th scope="row">Tag omission</th>
      <td>None, both the starting and ending tag are mandatory.</td>
    </tr>
    <tr>
      <th scope="row">Permitted parents</th>
      <td>Any element that accepts embedded content.</td>
    </tr>
  </tbody>
</table>
```

---
title: Forms - Legend - MDN Minimalist
keywords: forms, legend, mdn minimalist, mdn, sass, library
description: The MDN Web Docs legend element styles
---

# Legend

## Default `legend`

### Example

<fieldset class="bordered">
    <legend>Default <code>legend</code></legend>
    <p>No additional styling is added to <code>legend</code> elements by default.</p>
</fieldset>

### Code

```html
<fieldset class="bordered">
  <legend>Default <code>legend</code></legend>
  <p>
    No additional styling is added to <code>legend</code> elements by default.
  </p>
</fieldset>
```

## Legend Variants

### Example: Highlighted `legend`

<fieldset class="bordered">
    <legend class="highlighted">Highlighted <code>legend</code></legend>
    <p>For highlighted <code>legend</code> elements, use the <code>highlighted</code>
        class on the <code>legend</code> element.</p>
</fieldset>

### Code

```html
<fieldset class="bordered">
  <legend class="highlighted">Highlighted <code>legend</code></legend>
  <p>
    For highlighted <code>legend</code> elements, use the
    <code>highlighted</code> class on the <code>legend</code> element.
  </p>
</fieldset>
```

### Example: Emphasized `legend`

<fieldset class="bordered">
    <legend class="emphasized">Emphasized <code>legend</code></legend>
    <p>For a non-highlighted but emphasized <code>legend</code> use the
        <code>emphasized</code> class on the <code>legend</code> element.</p>
</fieldset>

### Code

```html
<fieldset class="bordered">
  <legend class="emphasized">Emphasized <code>legend</code></legend>
  <p>
    For a non-highlighted but emphasized <code>legend</code> use the
    <code>emphasized</code> class on the <code>legend</code> element.
  </p>
</fieldset>
```

### Example: Highlighted `legend` with default `fieldset`

<fieldset>
    <legend class="highlighted">Highlighted <code>legend</code></legend>
    <p>You can use all <code>legend</code> styles with, or without, a bordered
        <code>fieldset</code></p>
</fieldset>

#### Code

```html
<fieldset>
  <legend class="highlighted">Highlighted <code>legend</code></legend>
  <p>
    You can use all <code>legend</code> styles with, or without, a bordered
    <code>fieldset</code>
  </p>
</fieldset>
```

### Example: Visually hidden `legend`

In some instances one might, from a design perspective, wish to not visually show the legend. In those instances it is best to visually hide it so that it still available to screen reader users.

<fieldset class="bordered">
    <legend class="visually-hidden">Visually hidden legend element</legend>
    <p>To hide a <code>legend</code>, but not negatively impact accessibility, use the
        <code>visually-hidden</code> utility class on the <code>legend</code> element.
        For example, this <code>fieldset</code> contains a <code>legend</code> with the
        text content of, "Visually hidden legend element"</p>
</fieldset>

#### Code

```html
<fieldset class="bordered">
  <legend class="visually-hidden">Visually hidden legend element</legend>
  <p>
    To hide a <code>legend</code>, but not negatively impact accessibility, use
    the <code>visually-hidden</code> utility class on the
    <code>legend</code> element. For example, this
    <code>fieldset</code> contains a <code>legend</code> with the text content
    of, "Visually hidden legend element"
  </p>
</fieldset>
```

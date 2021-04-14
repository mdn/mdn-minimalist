---
title: Forms - Input - MDN Minimalist
keywords: forms, input elements, mdn minimalist, mdn, sass, library
description: The MDN Web Docs input element styles
---

# Input fields

With input fields, note that the `label` element is _always_ associated with its `input` element via the `for` attribute.

## Example

<fieldset>
    <label for="name">A text input field</label>
    <input type="text" id="name" name="name" />
    <label for="password">A password field</label>
    <input type="password" id="password" name="password" />
    <label for="email">An email input field in invalid state</label>
    <input type="email" id="email" name="email" placeholder="me@example.com" />
</fieldset>

## Code

```html
<label for="name">A text input field</label>
<input type="text" id="name" name="name" />

<label for="password">A password field</label>
<input type="password" id="password" name="password" />

<label for="email">An email input field in invalid state</label>
<input type="email" id="email" name="email" placeholder="me@example.com" />
```

---
title: Forms - Label - MDN Minimalist
keywords: forms, label, mdn minimalist, mdn, sass, library
description: The MDN Web Docs label element styles
---

# Input field states

## Invalid state

When a field is in an invalid state, we can visually indicate this by adding the `invalid` class to the element.

### Example

<fieldset>
    <label for="email">An email input field in invalid state</label>
    <input type="email" id="email" name="email" class="invalid"
        placeholder="me@example.com" />
</fieldset>

#### Code

```html
<label for="email">An email input field in invalid state</label>
<input
  type="email"
  id="email"
  name="email"
  class="invalid"
  placeholder="me@example.com"
/>
```

### Valid state

To indicate that a field is in a valid state, we can visually indicate this by adding the `valid` class to the element.

#### Example

<fieldset>
    <label for="url">An url input field in a valid state</label>
    <input type="url" id="url" name="url" class="valid" pattern="http[s]?://.*"
        placeholder="https://www.duckduckgo.com" />
</fieldset>

#### Code

```html
<label for="url">An url input field in a valid state</label>
<input
  type="url"
  id="url"
  name="url"
  class="valid"
  pattern="http[s]?://.*"
  placeholder="https://www.duckduckgo.com"
/>
```

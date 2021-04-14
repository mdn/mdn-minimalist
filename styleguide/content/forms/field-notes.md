---
title: Forms - Field notes - MDN Minimalist
keywords: forms, field note, mdn minimalist, mdn, sass, library
description: The MDN Web Docs field note styles
---

# Field notes

Field notes as used when you need to provide additional information to a user about a specific form field.

## Example

<form name="tester" action="" method="post">
    <fieldset>
        <div class="field-group">
            <label for="website">Website</label>
            <input type="url" id="website" name="website" />
            <p class="field-note">Please enter your company website url</p>
        </div>
    </fieldset>
</form>

## Code

```html
<form name="tester" action="" method="post">
  <fieldset>
    <div class="field-group">
      <label for="website">Website</label>
      <input type="url" id="website" name="website" />
      <p class="field-note">Please enter your company website url</p>
    </div>
  </fieldset>
</form>
```

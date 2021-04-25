---
title: Forms - MDN Minimalist
keywords: forms, form elements, mdn minimalist, mdn, sass, library
description: The MDN Web Docs form element styles
---

# Forms

- [Fieldset](fieldset/)
- [Legend](legend/)
- [Label](label/)
- [Input fields](input/)
- [Textarea](textarea/)
- [Radio buttons](radio-buttons/)
- [Check boxes](checkboxes/)
- [Select](select/)
- [Input field states](states/)
- [Field notes](field-notes/)
- [Field groups](field-groups/)

## Example form layout

<form name="tester" action="" method="post">
    <fieldset>
        <div class="field-group">
            <label for="name">Name</label>
            <input type="text" id="name" name="name" />
        </div>
        <div class="field-group">
            <label for="website">Website</label>
            <input type="url" id="website" name="website" />
            <p class="field-note">Please enter your company website url</p>
        </div>
        <div class="field-group inline">
            <label for="username">Username</label>
            <input type="text" id="username" name="username" />
        </div>
        <div class="field-group inline">
            <label for="email">Email</label>
            <input type="text" id="email" name="email" />
        </div>
        <label for="newsletter">
            <input type="checkbox" id="newsletter" name="subscribe" />
            Subscribe to our newsletter
        </label>
        <button type="submit" class="button positive">Save</button>
    </fieldset>
</form>

### Code

```html
<form name="tester" action="" method="post">
  <fieldset>
    <div class="field-group">
      <label for="name">Name</label>
      <input type="text" id="name" name="name" />
    </div>
    <div class="field-group">
      <label for="website">Website</label>
      <input type="url" id="website" name="website" />
      <p class="field-note">Please enter your company website url</p>
    </div>
    <div class="field-group inline">
      <label for="username">Username</label>
      <input type="text" id="username" name="username" />
    </div>
    <div class="field-group inline">
      <label for="email">Email</label>
      <input type="text" id="email" name="email" />
    </div>
    <label for="newsletter">
      <input type="checkbox" id="newsletter" name="subscribe" />
      Subscribe to our newsletter
    </label>
    <button type="submit" class="button positive">Save</button>
  </fieldset>
</form>
```

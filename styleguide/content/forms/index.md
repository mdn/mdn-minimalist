---
title: Forms - MDN Minimalist
keywords: forms, form elements, mdn minimalist, mdn, sass, library
description: The MDN Web Docs form element styles
---

# Forms

## Fieldset

### Example

<fieldset>
    <legend>Default fieldset</legend>
    <p>Fieldsets on MDN are displayed without a border by default. The
        <code>fieldset</code> element is mainly used to group related form fields.</p>
</fieldset>

### Code

```html
<fieldset>
  <legend>Default fieldset</legend>
  <p>
    Fieldsets on MDN are displayed without a border by default. The
    <code>fieldset</code> element is mainly used to group related form fields.
  </p>
</fieldset>
```

## Bordered Fieldset

### Example

<fieldset class="bordered">
    <legend>Bordered fieldset</legend>
    <p>If you require a bordered <code>fieldset</code>, add the class
        <code>bordered</code> to the <code>fieldset</code> element.</p>
</fieldset>

### Code

```html
<fieldset class="bordered">
  <legend>Bordered fieldset</legend>
  <p>
    If you require a bordered <code>fieldset</code>, add the class
    <code>bordered</code> to the <code>fieldset</code> element.
  </p>
</fieldset>
```

## Legend

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

### Example: Highlighted Legend

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

### Example: Emphasized Legend

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

### Example: Highlighted Legend with default fieldset

<fieldset>
    <legend class="highlighted">Highlighted <code>legend</code></legend>
    <p>You can use all <code>legend</code> styles with, or without, a bordered
        <code>fieldset</code></p>
</fieldset>

### Code

```html
<fieldset>
  <legend class="highlighted">Highlighted <code>legend</code></legend>
  <p>
    You can use all <code>legend</code> styles with, or without, a bordered
    <code>fieldset</code>
  </p>
</fieldset>
```

### Example: Visually hidden legend

In some instances one might, from a design perspective, wish to not visually show the legend. In those instances it is best to visually hide it so that it still available to screen reader users.

<fieldset class="bordered">
    <legend class="visually-hidden">Visually hidden legend element</legend>
    <p>To hide a <code>legend</code>, but not negatively impact accessibility, use the
        <code>visually-hidden</code> utility class on the <code>legend</code> element.
        For example, this <code>fieldset</code> contains a <code>legend</code> with the
        text content of, "Visually hidden legend element"</p>
</fieldset>

### Code

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

## Label

<p><code>label</code> elements on MDN Web Docs are displayed as block level
    elements by default.</p>

### Code

```html
<label>Default label</label>
```

## Inline Labels

<p>If you require an inline <code>label</code> element, add the
    <code>inline</code> class to the relevant <code>label</code> element</p>

### Code

```html
<label class="inline">Inline label</label>
```

## Input fields

With input fields, note that the `label` element is _always_ associated with its `input` element via the `for` attribute.

### Example

<fieldset>
    <label for="name">A text input field</label>
    <input type="text" id="name" name="name" />
    <label for="password">A password field</label>
    <input type="password" id="password" name="password" />
    <label for="email">An email input field in invalid state</label>
    <input type="email" id="email" name="email" placeholder="me@example.com" />
</fieldset>

### Code

```html
<label for="name">A text input field</label>
<input type="text" id="name" name="name" />

<label for="password">A password field</label>
<input type="password" id="password" name="password" />

<label for="email">An email input field in invalid state</label>
<input type="email" id="email" name="email" placeholder="me@example.com" />
```

### Invalid state

When a field is in an invalid state, we can visually indicate this by adding the `invalid` class to the element.

#### Example

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

## Textarea

### Example

<fieldset>
    <label for="comment">A <code>textarea</code> for comments</label>
    <textarea id="comment"></textarea>
</fieldset>

### Code

```html
<label for="comment">A <code>textarea</code> for comments</label>
<textarea id="comment"></textarea>
```

## Radio buttons

### Example

<fieldset>
    <label for="yes">
        <input type="radio" id="yes" name="subscribe" value="yup" checked />
        Yup
    </label>
    <label for="no">
        <input type="radio" id="no" name="subscribe" value="nope" />
        Nope
    </label>
</fieldset>

### Code

```html
<label for="yes">
  <input type="radio" id="yes" name="subscribe" value="yup" checked />
  Yup
</label>
```

## Checkboxes

**Note:** While we wrap the `input` element with the `label` element for checkboxes, we still explicitly associated the label with it associated `input` element.

### Example

<fieldset>
    <label for="subscribe">
        <input type="checkbox" id="subscribe" name="subscribe" />
        Subscribe to our newsletter
    </label>
</fieldset>

### Code

```html
<label for="subscribe">
  <input type="checkbox" id="subscribe" name="subscribe" />
  Subscribe to our newsletter
</label>
```

## Select element

### Example

<fieldset>
    <label for="fruits">Fruits</label>
    <select name="fruit" id="fruits">
        <option value="apple">Apple</option>
        <option value="strawberry" selected>Strawberry</option>
        <option value="grapes">Grapes</option>
    </select>
</fieldset>

### Code

```html
<label for="fruits">Fruits</label>
<select name="fruit" id="fruits">
  <option value="apple">Apple</option>
  <option value="strawberry" selected>Strawberry</option>
  <option value="grapes">Grapes</option>
</select>
```

## Field notes

Field notes as used when you need to provide additional information to a user about a specific form field.

### Example

<form name="tester" action="" method="post">
    <fieldset>
        <div class="field-group">
            <label for="website">Website</label>
            <input type="url" id="website" name="website" />
            <p class="field-note">Please enter your company website url</p>
        </div>
    </fieldset>
</form>

### Code

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

## Form layout ~ Bringing it all together

### Example

<form name="tester" action="" method="post">
    <p>A set of <code>label</code> and <code>input</code> fields are wrapped with a
        <code>div</code> element with the class <code>field-group</code></p>
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
        <p>To have two field groups line up horizontally, add the class
            <code>inline</code> to the field group <code>div</code> element.</p>
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
  <p>
    A set of <code>label</code> and <code>input</code> fields are wrapped with a
    <code>div</code> element with the class <code>field-group</code>
  </p>
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
    <p>
      To have two field groups line up horizontally, add the class
      <code>inline</code> to the field group <code>div</code> element.
    </p>
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

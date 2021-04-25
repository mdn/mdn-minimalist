---
title: Buttons - Button variants - MDN Minimalist
keywords: buttons, button styles, mdn minimalist, mdn, sass, library
description: Available button variants
---

# Variants

All buttons can recieve the `outline` class to render the button as an outlined button as opposed to a solid button.

## Example

<button class="button outline">Primary Outline Button</button>

### Code

```html
<button class="button outline">Primary Outline Button</button>
```

A button is not always the correct element to use. Sometimes you have a link element but still need it to look like a button stylistically. The same classes used in the examples above can be applied to an anchor element to achieve this result.

Always remember, "buttons do things and links take you somewhere". Choose your elements wisely 😀

## Example

<a href="#" class="button danger">Danger Link</a>

<a href="#" class="button danger outline">Danger Outline Link</a>

### Code

```html
<a href="#" class="button danger">Danger Link</a>
<a href="#" class="button danger outline">Danger Outline Link</a>
```

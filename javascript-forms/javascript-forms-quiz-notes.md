# javascript-forms-quiz-notes

## Quiz Questions

After completing this exercise, you should be able to discuss or answer the following questions:

- What event is fired when a user places their cursor in a form control?
  -the focus event will be fired
- What event is fired when a user's cursor leaves a form control?
  -mouseout/mouseleave
- What event is fired as a user changes the value of a form control?
  -the input type will be fired
- What event is fired when a user clicks the `"submit"` button within a `<form>`?
  -the subit event will be fired
- What does the `event.preventDefault()` method do?
  -prevents the form field/s from submitting so when u refresh the page it does not restart/submit the form
- What does submitting a form without `event.preventDefault()` do?
  -Not having a preventdefault will make the form field along with the name attribute which is optional will send to the 'server'
- What property of a form element object contains all of the form's controls.
  -.labels
- What property of a form control object gets and sets its value?
  -.value
- What is one risk of writing a lot of code without checking to see if it works so far?
  -the risk with that will be not being able to stop and identify ur mistake if an error occurs with the js or any other code
- What is an advantage of having your console open when writing a JavaScript program?
  -Can visually see ur outcomes by using the .log method on the js console object

## Notes

All student notes should be written here.

How to write `Code Examples` in markdown

for JS:

```javascript
const data = 'Howdy';
```

for HTML:

```html
<div>
  <p>This is text content</p>
</div>
```

for CSS:

```css
div {
  width: 100%;
}
```

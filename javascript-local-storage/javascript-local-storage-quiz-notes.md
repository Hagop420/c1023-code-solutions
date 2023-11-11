# javascript-local-storage-quiz-notes

## Quiz Questions

After completing this exercise, you should be able to discuss or answer the following questions:

- How do you store data in `localStorage`?
  -You are able to store data with localStorage with by calling the localStirege object and chaining the method setItem() witch takes 2 parameters 1 being the name you wanna store the string in and the second parameter being the actual string you are going to have saved in the chrome's built in localStorage.
- How do you retrieve data from `localStorage`?
  -You can recieve data from localStorage by calling the getItem method on the localStorage object
- What data type can `localStorage` save in the browser?
  -The localStorage object can only take and save string datatypes but other datatypes are possible to be converted and saved into a localStorage by conveting
- When does the `'beforeunload'` event fire on the `window` object?
  -The addeventlistner's event beforeunload event fires when the user refreshes the page, you can prevent this event from calling by calling the preventDefault() method on the current event

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

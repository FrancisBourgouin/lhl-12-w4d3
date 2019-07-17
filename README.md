# W4D3 Lecture

## AJAX

- Microsoft added a little-known function call named XMLHttpRequest to IE5
- Originated from Microst ActiveX, a component base software technology
- Took off after the publication [Ajax: A New Approach to Web Applications](https://adaptivepath.org/ideas/ajax-new-approach-web-applications/) in 2005
- AJAX is a technique allowing the user interface to updates itself without reloading the whole web page.
- AJAX will communicate with the server, get data from the server, update UI on the basis of that data without reloading the whole web page.
- Before 2005, this could only be accomplished with Flash or Java Applets

## Why use jQuery for AJAX

Doing AJAX requests with jQuery are simpler and easier to read, see for yourself..!

- With jQuery

```javascript

$.get('http://jsonplaceholder.typicode.com/posts')
  .then(response => console.log(response))
  .fail(error => console.error(error))

```

- With vanilla Javascript

```javascript
const xhr = new XMLHttpRequest();

xhr.open('GET', 'http://jsonplaceholder.typicode.com/posts', false);
xhr.send(null);

if ((xhr.status >= 200 && xhr.status < 300) || xhr.status === 304) {
  console.log(xhr.responseText);
} else {
  console.log('Some problem ' + xhr.status);
}
```

## AJAX & jQuery demo

In the demo we played with $.get and $.ajax and looked at the differences between the two. Using different events, we were able to add content on load, on the click of a button and when we reached the end of the page.

## AJAX questions

### What about browser history

When using AJAX, it's important to be aware that the user won't have access to a back button (not easily). So making sure that if they accidently go outside the page, it won't be too long to find again what they were looking at.

### Should we AJAX all the things

It's useful to fetch content dynamically using AJAX, however, everything that is static is not interesting to fetch after page load, and also it's a little bit harder to generate the content, so ideally we use AJAX only on the dynamic parts like a tweet list, loading more posts after the initial ones, etc.

### Is the answer always JSON

No, it's not always JSON, even if most of the time it will. Besides JSON, you'll see responses like XML, text, HTML in the most popular cases.
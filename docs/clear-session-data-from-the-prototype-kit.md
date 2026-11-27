---
layout: page
title: Clear session data from the prototype kit
---

Easy way to clear your session data on a prototype anyone? Don't forget yall...
 
1). If you create a file named 'clear-data-link.js' and paste this into it: 

```
window.addEventListener('load', function() {
    const myList = document.querySelector('body > .govuk-footer').querySelector('.govuk-footer__inline-list');
 
    // Create the hyperlink
    const link = document.createElement('a');
    link.href = '#';
    link.textContent = 'Clear data (popup)';
    link.classList.add('govuk-footer__link', 'govuk-footer__link', 'govuk-!-display-inline-block', 'govuk-!-margin-right-1', 'govuk-!-padding-top-1', 'govuk-!-padding-bottom-1');
    link.addEventListener("click", function() {// Open the popup window
        window.open('/manage-prototype/clear-data', 'targetWindow', `toolbar=no,location=no,status=no,menubar=no,scrollbars=yes,resizable=yes,width=350,height=450`);
    });
 
    // Create the list item
    const listItem = document.createElement('li');
    listItem.classList.add('govuk-footer__inline-list-item');        
    listItem.appendChild(link);
 
    // Append the list item to the existing footer list
    myList.appendChild(listItem);
});
```
 
2). and then save it to your 'app/assets/javascripts' directory
 
3). and then call the file from your prototype pages by adding this script link anywhere at the foot of a page (ideally in your footer), like this...

```
&lt;script type=&quot;text/javascript&quot; src=&quot;/public/javascripts/clear-data-link.js&quot;&gt;&lt;/script&gt;
```
 
You'll then have an easy way to clear the session data of any prototype. Simply select the 'clear data' link (on any page except the main index page) which now appears in the page footer, select the 'Clear the data' big green button from within the popup window, close it and then refresh your page.


## STATUS - guidance status

Initial draft:  tried and tested by Darren

*Draft: v1.  Darren, October 2026*

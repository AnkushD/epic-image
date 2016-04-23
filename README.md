# epic-image
This is a image directive to handle broken images (image broken link).

Depending on what options you provide, broken image
 - will be removed
 - will be replaced with default image

If the image is not broken and width / height is specified, even then above actions can be taken.
<br />
<br />

##Installation
<ol>
  <li>
    Include the directive in your code
    <ol>
     <li>Use bower <code>bower install epic-image</code> <em>or</em></li>
     <li>Install from npm <code>npm install epic-image</code></li>
    </ol>
  </li>
  <li>If your JavaScript file is not generated from dependencies,<br /> then you must include it in your HTML <code>&lt;script src='epic-image.js'&gt;&lt;/script&gt;</code> </li>
  <li>Add to app dependencies:</li>
</ol>
```javascript
 var app = angular.module("app", ["epic-image"]);
```
<br />


## Usage:
### Image as a background
    As block element (e.g <div>)
    @params
    actual-image    - external image url (NOT IN {{ }});
    default-image   - image to show when actual-image url not working 
                      if not specified then element will be removed from DOM;
    min-image-width - if not specified then will allow any size image
                      value should be without 'px';

    HTML Syntax:
    <div checkbackground default-image="static_link" actual-image="dynamic_link" min-image-width="100"></div>
    
    
### Image as src 
    As image tag (e.g <img src=''>)
    @params
    actual-image    - external image url (NOT IN {{ }});
    default-image   - image to show when actual-image url not working 
                      if not specified then element will be removed from DOM;
    min-image-width - if not specified then will allow any size image
                      value should be without 'px';

    How to use:
    <img checksrc default-image="static_link" actual-image="dynamic_link" min-image-width="100" />
  


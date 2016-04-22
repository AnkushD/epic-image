# epic-imge
Image directive to show image or hide image or replace image with other image depending on width / height specified. 


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
  


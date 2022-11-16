/**
 *
 * Cookies with the SameSite attribute.
 * SameSite can be Lax, Strict or None
 *
 * @package jscookies
 * @version 1.0.0
 * @author Ian Neal Higginson
 *
 */

/**
 ** The function sc() `Set Cookie`
 * @param {*} cname
 * @param {*} cvalue
 * @param {*} exdays
 */

function sc(cname, cvalue, exdays, cpath, csamesite) {

 'use strict';

 //~ Cookie name.
 var cookieData = `${cname}=${cvalue}`;

 //~ Cookie Expiry Date.
 var d = new Date();
 d.setTime(d.getTime() + exdays * 24 * 60 * 60 * 1000);
 var expiryDate = `expires=${d.toUTCString()};`;

 //~ Cookie Path.
 var path = '';
 if (cpath !== '') {
  path = `path=${cpath}`;
 } else {
  path = 'path=/';
 }

 //~ Cookie SameSite Attribute.
 var SameSite = '';
 if (csamesite === '') {
  SameSite = `SameSite=None`;
 } else {
  SameSite = `SameSite=${csamesite}`;
 }

 //~ Set Cookie.
 document.cookie = `${cookieData}; ${expiryDate}; ${path}; ${SameSite}; Secure`;

 console.info(document.cookie);

}

function gc(cname) {
 'use strict';
 var name = cname + '=';
 var ca = document.cookie.split(';');
 for (var i = 0; i < ca.length; i++) {
  var c = ca[i];
  while (c.charAt(0) === ' ') {
   c = c.substring(1);
   if (c.indexOf(name) !== -1) {
    return c.substring(name.length, c.length);
   }
  }
 }
 return '';
}

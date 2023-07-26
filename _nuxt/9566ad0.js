(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{108:function(t,e,l){"use strict";l.r(e);var r=l(131),o=l(196),n=l(198),c={name:"Footer",components:{Copyright:r.default,FooterMenu:o.default,FooterContact:n.default}},d=l(11),component=Object(d.a)(c,(function(){var t=this,e=t._self._c;return e("footer",{staticClass:"bg-gray-50",attrs:{"aria-labelledby":"footer-heading"}},[e("h2",{staticClass:"sr-only",attrs:{id:"footer-heading"}},[t._v("Footer")]),t._v(" "),e("div",{staticClass:"max-w-md mx-auto pt-12 px-4 sm:max-w-7xl sm:px-6 lg:pt-16 lg:px-8"},[e("div",{staticClass:"xl:grid xl:grid-cols-3 xl:gap-8"},[e("FooterContact"),t._v(" "),e("FooterMenu")],1),t._v(" "),e("Copyright")],1)])}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{Copyright:l(131).default,Footer:l(108).default})},130:function(t,e,l){"use strict";l.r(e);var r={name:"Header",components:{Logo:l(58).default},data:function(){return{logo_color:"#ffffff",scrollY:0,isOpen:!1,menus:[{id:1,text:"Bio",page:"bio"},{id:2,text:"Research",page:"research"},{id:3,text:"Publications",page:"publications"},{id:4,text:"Team",page:"team"},{id:5,text:"Contact",page:"contact"}]}},computed:{isSticky:function(){return this.scrollY>10},headerClassList:function(){return this.isSticky?"shadow":""},navActionClassList:function(){return this.isSticky?"text-white":"text-gray-900"},navContentClassList:function(){var t=(this.isSticky,"bg-gray-100");return this.isOpen||(t+=" hidden"),t}},methods:{onClick:function(){this.isOpen=!1},onScroll:function(){this.scrollY=window.scrollY},onToggleClick:function(){this.isOpen=!this.isOpen}},mounted:function(){this.scrollY=window.scrollY,document.addEventListener("click",this.onClick),document.addEventListener("scroll",this.onScroll)},beforeDestroy:function(){document.removeEventListener("click",this.onClick,!0),document.removeEventListener("scroll",this.onScroll,!0)}},o=l(11),component=Object(o.a)(r,(function(){var t=this,e=t._self._c;return e("header",{staticClass:"sticky h-16 top-0 w-full bg-gray-900 z-50 flex justify-center",class:t.headerClassList},[e("div",{staticClass:"flex-1 flex w-full justify-between px-6 items-center lg:p-0"},[e("NuxtLink",{staticClass:"md:px-20",attrs:{to:"/"}},[e("Logo",{attrs:{color:t.logo_color}})],1),t._v(" "),e("nav",{staticClass:"w-full md:px-20 flex flex-auto flex-col items-end lg:w-1/2 lg:flex-row lg:items-center lg:h-full border-white"},[e("button",{staticClass:"flex items-center text-white mt-1 lg:hidden",attrs:{"aria-label":"Menu"},on:{click:function(e){return e.preventDefault(),e.stopPropagation(),t.onToggleClick.apply(null,arguments)}}},[e("svg",{staticClass:"fill-current h-6 w-6",attrs:{viewBox:"0 0 20 20",xmlns:"http://www.w3.org/2000/svg","aria-hidden":"true"}},[e("path",{attrs:{d:"M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"}})])]),t._v(" "),e("ul",{staticClass:"px-6 absolute bg-gray-900 w-full top-16 left-0 right-0 list-reset lg:flex lg:static lg:justify-end lg:px-0 lg:h-full",class:t.navContentClassList},t._l(t.menus,(function(l){return e("li",{key:l.id,staticClass:"tracking-wider w-full lg:w-auto lg:ml-5 lg:h-full lg:flex lg:items-center"},[e("NuxtLink",{staticClass:"text-base text-right font-medium text-white hover:border-white hover:text-gray-200",attrs:{to:"/"+l.page}},[t._v(t._s(l.text))])],1)})),0)])],1)])}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{Logo:l(58).default,Header:l(130).default})},131:function(t,e,l){"use strict";l.r(e);var r=(new Date).getFullYear(),o={name:"CopyRight",data:function(){return{year:r}}},n=l(11),component=Object(n.a)(o,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"mt-12 border-t border-gray-200 py-8"},[e("p",{staticClass:"text-base text-gray-400 xl:text-center"},[t._v("\n    © 2018 - "+t._s(t.year)+" FeLab. All rights reserved.\n    ")])])}),[],!1,null,null,null);e.default=component.exports},195:function(t,e,l){"use strict";var header=l(130),footer=l(108),r={components:{cheader:header.default,cfooter:footer.default}},o=l(11),component=Object(o.a)(r,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"relative overflow-hidden"},[e("cheader"),t._v(" "),e("Nuxt"),t._v(" "),e("cfooter")],1)}),[],!1,null,null,null);e.a=component.exports},196:function(t,e,l){"use strict";l.r(e);var r={name:"FooterMenu",components:{FooterMenuSection:l(197).default},data:function(){return{about:{classLst:"",name:"About",items:[{id:1,text:"Bio",url:"/bio"},{id:2,text:"Research",url:"/research"},{id:3,text:"Publications",url:"/publications"},{id:4,text:"Contact",url:"/contact"}]},team:{classLst:"mt-12 md:mt-0",name:"People",items:[{id:1,text:"Team",url:"/team"},{id:2,text:"Collaborations",url:"/collaborations"}]}}}},o=l(11),component=Object(o.a)(r,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"mt-12 grid grid-cols-2 gap-8 xl:mt-0 xl:col-span-2"},[e("div",{staticClass:"md:grid md:grid-cols-2 md:gap-8"},[e("FooterMenuSection",t._b({},"FooterMenuSection",t.about,!1)),t._v(" "),e("FooterMenuSection",t._b({},"FooterMenuSection",t.team,!1))],1)])}),[],!1,null,null,null);e.default=component.exports},197:function(t,e,l){"use strict";l.r(e);l(27);var r={name:"FooterMenuSection",props:{classLst:{type:String,required:!0},name:{type:String,required:!0},items:{type:Array,required:!0,default:function(){return[{id:0,url:"",text:""}]}}}},o=l(11),component=Object(o.a)(r,(function(){var t=this,e=t._self._c;return e("div",{class:t.classLst},[e("h3",{staticClass:"text-sm font-semibold text-gray-400 tracking-wider uppercase"},[t._v("\n        "+t._s(t.name)+"\n    ")]),t._v(" "),e("ul",{staticClass:"mt-4 space-y-4",attrs:{role:"list"}},t._l(t.items,(function(l){return e("li",{key:l.id},[e("a",{staticClass:"text-base text-gray-500 hover:text-gray-900",attrs:{href:l.url}},[t._v("\n                "+t._s(l.text)+"\n            ")])])})),0)])}),[],!1,null,null,null);e.default=component.exports},198:function(t,e,l){"use strict";l.r(e);var r={name:"FooterContact",components:{Logo:l(58).default},data:function(){return{tagline:"Science to eradicate tropical diseases",social_network:{facebook:"http://facebook.com/laranjeiralab",instagram:"https://instagram.com/laranjeiralab",twitter:"https://twitter.com/LabMfls"},logo_color:"#d4d4d8"}}},o=l(11),component=Object(o.a)(r,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"space-y-8 xl:col-span-1"},[e("NuxtLink",{attrs:{to:"/"}},[e("Logo",{attrs:{color:t.logo_color}})],1),t._v(" "),e("p",{staticClass:"text-gray-500 text-base"},[t._v(t._s(t.tagline))]),t._v(" "),e("div",{staticClass:"flex space-x-6"},[e("a",{staticClass:"text-gray-400 hover:text-gray-500",attrs:{href:t.social_network.facebook,target:"_blank",rel:"noopener"}},[e("span",{staticClass:"sr-only"},[t._v("Facebook")]),t._v(" "),e("svg",{staticClass:"h-6 w-6",attrs:{fill:"currentColor",viewBox:"0 0 24 24","aria-hidden":"true"}},[e("path",{attrs:{"fill-rule":"evenodd",d:"M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z","clip-rule":"evenodd"}})])]),t._v(" "),e("a",{staticClass:"text-gray-400 hover:text-gray-500",attrs:{href:t.social_network.instagram,target:"_blank",rel:"noopener"}},[e("span",{staticClass:"sr-only"},[t._v("Instagram")]),t._v(" "),e("svg",{staticClass:"h-6 w-6",attrs:{fill:"currentColor",viewBox:"0 0 24 24","aria-hidden":"true"}},[e("path",{attrs:{"fill-rule":"evenodd",d:"M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z","clip-rule":"evenodd"}})])]),t._v(" "),e("a",{staticClass:"text-gray-400 hover:text-gray-500",attrs:{href:t.social_network.twitter,target:"_blank",rel:"noopener"}},[e("span",{staticClass:"sr-only"},[t._v("Twitter")]),t._v(" "),e("svg",{staticClass:"h-6 w-6",attrs:{fill:"currentColor",viewBox:"0 0 24 24","aria-hidden":"true"}},[e("path",{attrs:{d:"M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84"}})])])])],1)}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{Logo:l(58).default})},199:function(t,e,l){l(200),t.exports=l(201)},58:function(t,e,l){"use strict";l.r(e);var r={name:"Logo",props:{color:{type:String,required:!0}}},o=l(11),component=Object(o.a)(r,(function(){var t=this._self._c;return t("svg",{staticClass:"h-10",attrs:{fill:this.color,xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",version:"1.1",x:"0px",y:"0px",viewBox:"0 0 100 125","xml:space":"preserve"}},[t("path",{attrs:{d:"M78.831,66.331C82.733,60.156,85,52.845,85,45C85,22.909,67.091,5,45,5S5,22.909,5,45s17.909,40,40,40  c7.845,0,15.156-2.267,21.331-6.169l13.58,13.58C81.569,94.069,83.817,95,86.161,95h0C91.043,95,95,91.043,95,86.161  c0-2.344-0.931-4.592-2.589-6.25L78.831,66.331z M59.997,73.819c0-0.023,0.003-0.046,0.003-0.069c0-5.078-2.174-9.692-5.696-12.786  c-1.538,1.068-3.251,1.899-5.096,2.459c1.258,0.716,2.353,1.683,3.246,2.827H41.058c-1.568,1.21-2.716,2.968-3.239,5h16.922  C54.905,72.059,55,72.893,55,73.75c0,0.756-0.075,1.504-0.21,2.24c-3.091,0.979-6.38,1.51-9.79,1.51s-6.699-0.531-9.79-1.51  C35.075,75.254,35,74.506,35,73.75c0-5.44,3.465-10.125,8.427-11.393l4.385-1.121C54.987,59.403,60,52.727,60,45  c0-5.078-2.174-9.692-5.696-12.786c-1.538,1.068-3.251,1.899-5.096,2.459c1.258,0.716,2.353,1.683,3.246,2.827H41.058  c-1.568,1.21-2.716,2.968-3.239,5h16.922C54.905,43.309,55,44.143,55,45c0,5.44-3.465,10.125-8.427,11.393l-4.385,1.121  C35.013,59.347,30,66.023,30,73.75c0,0.023,0.003,0.046,0.003,0.069c-0.044-0.023-0.089-0.045-0.134-0.069  c-0.792-0.418-1.563-0.87-2.314-1.35C18.513,66.622,12.5,56.503,12.5,45c0-12.513,7.112-23.389,17.503-28.819  c0,0.023-0.003,0.046-0.003,0.069c0,5.078,2.174,9.692,5.696,12.786c1.538-1.068,3.251-1.899,5.096-2.459  c-1.258-0.716-2.353-1.683-3.246-2.827h11.397c1.568-1.21,2.716-2.968,3.239-5H35.259C35.095,17.941,35,17.107,35,16.25  c0-0.756,0.075-1.504,0.21-2.24c3.091-0.979,6.38-1.51,9.79-1.51s6.699,0.531,9.79,1.51c0.134,0.736,0.21,1.484,0.21,2.24  c0,5.44-3.465,10.125-8.427,11.393l-4.385,1.121C35.013,30.597,30,37.273,30,45c0,5.078,2.174,9.692,5.696,12.786  c1.538-1.068,3.251-1.899,5.096-2.459c-1.258-0.716-2.353-1.683-3.246-2.827h11.397c1.568-1.21,2.716-2.968,3.239-5H35.259  C35.095,46.691,35,45.857,35,45c0-5.44,3.465-10.125,8.427-11.393l4.385-1.121C54.987,30.653,60,23.977,60,16.25  c0-0.023-0.003-0.046-0.003-0.069c0.044,0.023,0.089,0.045,0.134,0.069c0.792,0.418,1.563,0.87,2.314,1.35  C71.487,23.378,77.5,33.497,77.5,45C77.5,57.513,70.388,68.389,59.997,73.819z M86.161,90c-1.025,0-1.989-0.399-2.714-1.124  L70.44,75.869c1.978-1.632,3.797-3.451,5.429-5.429l13.007,13.007C89.601,84.172,90,85.136,90,86.161C90,88.278,88.278,90,86.161,90  z"}})])}),[],!1,null,null,null);e.default=component.exports}},[[199,21,1,22]]]);
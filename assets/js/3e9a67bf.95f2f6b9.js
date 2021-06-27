(self.webpackChunk=self.webpackChunk||[]).push([[2978],{3905:(e,t,n)=>{"use strict";n.d(t,{Zo:()=>p,kt:()=>h});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=r.createContext({}),c=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},p=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),u=c(n),h=o,m=u["".concat(l,".").concat(h)]||u[h]||d[h]||a;return n?r.createElement(m,s(s({ref:t},p),{},{components:n})):r.createElement(m,s({ref:t},p))}));function h(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,s=new Array(a);s[0]=u;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:o,s[1]=i;for(var c=2;c<a;c++)s[c]=n[c];return r.createElement.apply(null,s)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},5537:(e,t,n)=>{"use strict";n.r(t),n.d(t,{frontMatter:()=>i,metadata:()=>l,toc:()=>c,default:()=>d});var r=n(2122),o=n(9756),a=(n(7294),n(3905)),s=["components"],i={id:"scenes",title:"Create Scenes"},l={unversionedId:"create/scenes",id:"create/scenes",isDocsHomePage:!1,title:"Create Scenes",description:"This workflow is mostly for testing purposes because it will change in the future to become more streamlined, especially for artists.",source:"@site/../docs/create/scene.md",sourceDirName:"create",slug:"/create/scenes",permalink:"/docs/create/scenes",version:"current",lastUpdatedBy:"jin",lastUpdatedAt:1624817267,formattedLastUpdatedAt:"6/27/2021",frontMatter:{id:"scenes",title:"Create Scenes"},sidebar:"guides",previous:{title:"HTML NFTs",permalink:"/docs/create/mint-html"},next:{title:"Submission Guide",permalink:"/docs/create/guidelines"}},c=[{value:"Local Development",id:"local-development",children:[{value:"Manifest.json",id:"manifestjson",children:[]},{value:"Scene files",id:"scene-files",children:[]},{value:"Constants.js",id:"constantsjs",children:[]}]}],p={toc:c};function d(e){var t=e.components,i=(0,o.Z)(e,s);return(0,a.kt)("wrapper",(0,r.Z)({},p,i,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"This workflow is mostly for testing purposes because it will change in the future to become more streamlined, especially for artists.")),(0,a.kt)("p",null,(0,a.kt)("img",{src:n(2158).Z})),(0,a.kt)("p",null,"This guide is to teach you how to setup a custom scene to test the Webaverse app locally with. Included in the example is a mirror and floor portals (floortals!) that can link to other worlds seamlessly."),(0,a.kt)("h2",{id:"local-development"},"Local Development"),(0,a.kt)("p",null,"First need to download and install the app repo locally from: ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/webaverse/app"},"https://github.com/webaverse/app")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"$ git clone https://github.com/webaverse/app.git\n$ cd app/\n$ npm run install\n$ node index\n")),(0,a.kt)("p",null,"Once you've tested the local app to be working, we'll construct a custom home world to launch into. We'll build a sample project from scratch to understand each component. Download these two  repos into the root folder of the Webaverse app directory:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"$ git clone https://github.com/madjin/desert.git\n$ git clone https://github.com/webaverse/party.git\n")),(0,a.kt)("p",null,"First go into the desert folder. Inside you will see the .glb 3D model file, the ",(0,a.kt)("inlineCode",{parentName:"p"},"manifest.json")," which describes the model, and ",(0,a.kt)("inlineCode",{parentName:"p"},"desert.scn")," which describes the world."),(0,a.kt)("h3",{id:"manifestjson"},"Manifest.json"),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"physics: true")," line inside the ",(0,a.kt)("inlineCode",{parentName:"p"},"manifest.json")," file instructs the app to bake the physics mesh at load time, enabling collisions. There's also a manual method that is documented here: ",(0,a.kt)("a",{parentName:"p",href:"https://docs.webaverse.com/docs/create/bake-physics"},"https://docs.webaverse.com/docs/create/bake-physics"),"."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'{\n  "name": "desert",\n  "description": "Desert XRPackage",\n  "start_url": "desert.glb",\n  "physics": true\n}\n')),(0,a.kt)("h3",{id:"scene-files"},"Scene files"),(0,a.kt)("p",null,"The other important file in there is ",(0,a.kt)("inlineCode",{parentName:"p"},"desert.scn")," which is a JSON file describing the world and basic positioning info of apps being loaded into it."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'{\n  "objects": [\n    {\n      "position": [\n        0,\n        0,\n        0\n      ],\n      "start_url": "http://webaverse.github.io/skybox/index.js"\n    },\n    {\n      "position": [\n        6,\n        0.1,\n        -4\n      ],\n      "quaternion": [\n        0,\n        0,\n        0,\n        1\n      ],\n      "start_url": "http://localhost:3000/party/party.url"\n    },\n    {\n      "position": [\n        0,\n        0,\n        0\n      ],\n      "start_url": "http://localhost:3000/desert/manifest.json"\n    },  \n    {\n      "position": [\n        0,\n        0,\n        -2\n      ],\n      "start_url": "https://webaverse.github.io/mirror/index.js"\n    }\n  ]\n}\n')),(0,a.kt)("p",null,"In one of those lines is ",(0,a.kt)("inlineCode",{parentName:"p"},"party.url"),", which refers to the portal that can take you to other worlds. Lets take a look at the party directory located at the root of the Webaverse app project. Open ",(0,a.kt)("inlineCode",{parentName:"p"},"party.url")," by drag and dropping it into your favorite text editor. If you change this line to point to another .scn file, you can target a different world to teleport to in-game."),(0,a.kt)("h3",{id:"constantsjs"},"Constants.js"),(0,a.kt)("p",null,"Return back to the root directory of the Webaverse app project and open ",(0,a.kt)("inlineCode",{parentName:"p"},"constants.js"),". On line 43 you can change to a relative or hosted link to a .scn file to open the app with. For example:"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},'export const homeScnUrl = "./desert/desert.scn";')),(0,a.kt)("p",null,"Now refresh the browser page at http://localhost3000 and you should see the desert with the mirror and floortal in front of you. Walk over to the floortal and press ",(0,a.kt)("inlineCode",{parentName:"p"},"E")," to test it. You can hit backspace to return to the previous scene."),(0,a.kt)("p",null,"That's it, happy testing!"))}d.isMDXComponent=!0},2158:(e,t,n)=>{"use strict";n.d(t,{Z:()=>r});const r=n.p+"assets/images/desert_world-398fcbe0474fc982976155b2ddea94bc.jpg"}}]);
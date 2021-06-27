(self.webpackChunk=self.webpackChunk||[]).push([[1430],{3905:(e,t,r)=>{"use strict";r.d(t,{Zo:()=>p,kt:()=>f});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var c=n.createContext({}),l=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},p=function(e){var t=l(e.components);return n.createElement(c.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),u=l(r),f=a,m=u["".concat(c,".").concat(f)]||u[f]||d[f]||o;return r?n.createElement(m,s(s({ref:t},p),{},{components:r})):n.createElement(m,s({ref:t},p))}));function f(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,s=new Array(o);s[0]=u;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"==typeof e?e:a,s[1]=i;for(var l=2;l<o;l++)s[l]=r[l];return n.createElement.apply(null,s)}return n.createElement.apply(null,r)}u.displayName="MDXCreateElement"},2526:(e,t,r)=>{"use strict";r.r(t),r.d(t,{frontMatter:()=>i,metadata:()=>c,toc:()=>l,default:()=>d});var n=r(2122),a=r(9756),o=(r(7294),r(3905)),s=["components"],i={id:"sword",title:"Swords"},c={unversionedId:"create/sword",id:"create/sword",isDocsHomePage:!1,title:"Swords",description:"Swords are currently one-handed weilded items that you can use to damage objects and NPCs in the world.",source:"@site/../docs/create/sword.md",sourceDirName:"create",slug:"/create/sword",permalink:"/docs/create/sword",version:"current",lastUpdatedBy:"jin",lastUpdatedAt:1623542556,formattedLastUpdatedAt:"6/12/2021",frontMatter:{id:"sword",title:"Swords"},sidebar:"guides",previous:{title:"Mint Avatar Wearables",permalink:"/docs/create/wearables"},next:{title:"Pickaxe",permalink:"/docs/create/pickaxe"}},l=[{value:"Metaverse File",id:"metaverse-file",children:[]}],p={toc:l};function d(e){var t=e.components,i=(0,a.Z)(e,s);return(0,o.kt)("wrapper",(0,n.Z)({},p,i,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Swords are currently one-handed weilded items that you can use to damage objects and NPCs in the world."),(0,o.kt)("h2",{id:"metaverse-file"},"Metaverse File"),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},".metaversefile")," goes in the directory with the GLB file in order to create the XRpackage."),(0,o.kt)("p",null,"This configuration is for wearing it on your avatar's back."),(0,o.kt)("p",null,(0,o.kt)("img",{src:r(1706).Z})),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'{\n  "name": "buster-sword",\n  "description": "Buster Sword XRPackage",\n  "xr_type": "webxr-site@0.0.1",\n  "start_url": "buster-sword.glb",\n  "components": [\n    {\n      "type": "wear",\n      "position": [0, 0, 0]\n    }\n  ]\n}\n')),(0,o.kt)("p",null,"Here's the configuration for holding a sword and being able to slash attack."),(0,o.kt)("p",null,(0,o.kt)("img",{src:r(1018).Z})),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'{\n  "name": "lightsaber",\n  "description": "Lightsaber XRPackage",\n  "xr_type": "webxr-site@0.0.1",\n  "start_url": "index.js",\n  "components": [\n    {\n      "type": "use",\n      "subtype": "swing",\n      "useAnimation": "slash"\n    }\n  ]\n}\n')))}d.isMDXComponent=!0},1706:(e,t,r)=>{"use strict";r.d(t,{Z:()=>n});const n=r.p+"assets/images/sword-b042148c497596d09382aa04e41c5f7e.jpg"},1018:(e,t,r)=>{"use strict";r.d(t,{Z:()=>n});const n=r.p+"assets/images/sword2-b4104c7dd72ffe39ec831485f858c60d.jpg"}}]);
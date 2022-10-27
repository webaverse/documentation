(self.webpackChunk=self.webpackChunk||[]).push([[52],{3905:(e,t,n)=>{"use strict";n.d(t,{Zo:()=>h,kt:()=>p});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),l=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},h=function(e){var t=l(e.components);return r.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,c=e.parentName,h=s(e,["components","mdxType","originalType","parentName"]),d=l(n),p=a,k=d["".concat(c,".").concat(p)]||d[p]||u[p]||i;return n?r.createElement(k,o(o({ref:t},h),{},{components:n})):r.createElement(k,o({ref:t},h))}));function p(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=d;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:a,o[1]=s;for(var l=2;l<i;l++)o[l]=n[l];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},9729:(e,t,n)=>{"use strict";n.r(t),n.d(t,{frontMatter:()=>s,metadata:()=>c,toc:()=>l,default:()=>u});var r=n(2122),a=n(9756),i=(n(7294),n(3905)),o=["components"],s={id:"ethereum-backend-quickstart",title:"Ethereum Backend Quick Start Guide"},c={unversionedId:"engineering/api-backend/ethereum-backend-quickstart",id:"engineering/api-backend/ethereum-backend-quickstart",isDocsHomePage:!1,title:"Ethereum Backend - Quick Start Guide",description:"Introduction",source:"@site/../docs/engineering/api-backend/ethereum-backend-quickstart.md",sourceDirName:"engineering/api-backend",slug:"/engineering/api-backend/ethereum-backend-quickstart",permalink:"/docs/engineering/api-backend/ethereum-backend-quickstart",version:"current",frontMatter:{id:"ethereum-backend-quickstart",title:"Ethereum Backend Quick Start Guide"},sidebar:"docs",previous:{title:"PhysX WASM Workflow",permalink:"/docs/engineering/app/physx-workflow"},next:{title:"NFT Voucher Library",permalink:"/docs/engineering/blockchain/nft-voucher-library"}},l=[{value:"Introduction",id:"introduction",children:[]},{value:"Quick Start Basics",id:"quick-start-basics",children:[{value:"Directory Structure",id:"directory-structure",children:[]}]},{value:"Commands",id:"commands",children:[]},{value:"Blockchains",id:"blockchains",children:[]},{value:"Contracts",id:"contracts",children:[]},{value:"Note: Atomic saves",id:"note-atomic-saves",children:[]},{value:"Restarting geth Servers",id:"restarting-geth-servers",children:[]},{value:"How Transfers Work",id:"how-transfers-work",children:[{value:"Common Case",id:"common-case",children:[]},{value:"Reversal",id:"reversal",children:[]}]}],h={toc:l};function u(e){var t=e.components,n=(0,a.Z)(e,o);return(0,i.kt)("wrapper",(0,r.Z)({},h,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"introduction"},"Introduction"),(0,i.kt)("p",null,"The Webaverse Ethereum backend consists of a side chain that we mine using Proof-of-Stake."),(0,i.kt)("p",null,"To start a mining node, you must use an authorized miner address with a certificate installed in the  ",(0,i.kt)("inlineCode",{parentName:"p"},"geth"),"  data directory -- ask ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/avaer"},"Avaer")," for the keys."),(0,i.kt)("p",null,"To validate/replicate/sync you don't need any keys."),(0,i.kt)("hr",null),(0,i.kt)("h2",{id:"quick-start-basics"},(0,i.kt)("a",{parentName:"h2",href:"../quick-start-basics"},"Quick Start Basics")),(0,i.kt)("h3",{id:"directory-structure"},"Directory Structure"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"\n**Root**\n\n\u251c\u2500\u2500\u2500    index.js <--- Main Application Logic Resides Here\n\n")),(0,i.kt)("hr",null),(0,i.kt)("h2",{id:"commands"},"Commands"),(0,i.kt)("p",null,"Here is how to bootstrap a mainnet validation node:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"\ngeth --datadir mainnet init genesis-mainnet.json\n\ncp ./static-nodes-mainnet.json ./mainnet/static-nodes.json\n\ncp account-mainnet.json ./mainnet/keystore/UTC--2021-02-17T10-32-36.272770958Z--bb0827ee9b0b459e1b5dd6dbea0f55bf578dbbd2\n\ngeth --datadir mainnet --http --http.addr 172.31.2.5 --http.corsdomain '*' --syncmode full --networkid 1338\n\n")),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"static-nodes-mainnet.json"),' has some bootstrap nodes listed so you should be able to start syncing from those. Your chain will be "reorganized" a lot while you sync up, which is normal.'),(0,i.kt)("hr",null),(0,i.kt)("h2",{id:"blockchains"},"Blockchains"),(0,i.kt)("p",null,"There are currently 4 chains that we use:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"mainnet")," (ETH mainnet)"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"mainnetsidechain")," (our Geth nodes)"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"rinkeby")," (ETH Rinkeby)"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"rinkebysidechain")," (our Geth nodes)")),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"mainnetsidechain"),": ",(0,i.kt)("a",{parentName:"p",href:"http://ethereum1.exokit.org:8545"},"http://ethereum1.exokit.org:8545")," chainId 1338\n",(0,i.kt)("inlineCode",{parentName:"p"},"rinkebysidechain"),": ",(0,i.kt)("a",{parentName:"p",href:"http://ethereum1.exokit.org:8546"},"http://ethereum1.exokit.org:8546")," chainId 1337"),(0,i.kt)("p",null,"You can put these details into MetaMask directly to interact with the chains. There are no gas fees."),(0,i.kt)("p",null,"These networks also have HTTPS proxy support for secure frontend development:"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://mainnetsidechain.exokit.org"},"https://mainnetsidechain.exokit.org"),"\n",(0,i.kt)("a",{parentName:"p",href:"https://rinkebysidechain.exokit.org"},"https://rinkebysidechain.exokit.org")),(0,i.kt)("p",null,"Note that the port on these is the standard HTTPS port, ",(0,i.kt)("inlineCode",{parentName:"p"},"443"),"."),(0,i.kt)("hr",null),(0,i.kt)("h2",{id:"contracts"},"Contracts"),(0,i.kt)("p",null,"The contracts we deploy onto all chains are available at ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/webaverse/contracts"},"https://github.com/webaverse/contracts"),"."),(0,i.kt)("hr",null),(0,i.kt)("h2",{id:"note-atomic-saves"},"Note: Atomic saves"),(0,i.kt)("p",null,"Replication is accomplished by having multiple nodes mine on that address at the same time."),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"geth")," does ",(0,i.kt)("em",{parentName:"p"},"not")," stream blocks to disk eagerly. A system crash will lose blocks on that node, though other miners will not be affected."),(0,i.kt)("hr",null),(0,i.kt)("h2",{id:"restarting-geth-servers"},"Restarting geth Servers"),(0,i.kt)("p",null,"Therefore it is important that any restart of these nodes follows the correct order:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"for (i in [2, 3, 1]) { // order matters\n1. shut down node i with SIGTERM\n2. make sure node i saved its state in the logs\n3. start node i again\n4. ensure node i is replicating and synced and do not proceed unless it is\n")),(0,i.kt)("hr",null),(0,i.kt)("h2",{id:"how-transfers-work"},"How Transfers Work"),(0,i.kt)("p",null,"There are two parallel blockchains for each Ethereum source of truth. There are two sources of truth (mainnet and rinkeby) and they do not interact. Therefore there are (2 blockchains x 2 sources of truth) 4 chains."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"mainnet\nmainnetsidechain\nrinkeby\nrinkebysidechain\n")),(0,i.kt)("h3",{id:"common-case"},"Common Case"),(0,i.kt)("p",null,"The common case is ",(0,i.kt)("inlineCode",{parentName:"p"},"mainnet")," (ETH) and ",(0,i.kt)("inlineCode",{parentName:"p"},"mainnetsidechain")," (our ",(0,i.kt)("inlineCode",{parentName:"p"},"geth"),")."),(0,i.kt)("p",null,"They talk to each other via a signature scheme enforced in the contracts. Basically, each contract is deployed twice, once on each chain. We mint on the side chain usually (enforced by constructor arguments). Transfers occur via assignment of the token away from the user to the contract's address, logging a deposit event on the sidechain. The client then asks the signing server to read the sidechain, and sign off on the fact that this deposit ocurred. If successful the signature is sent back to the client. The client then takes that signature and submits it in a mainnet transaction. This must be confirmed by the user in metamask."),(0,i.kt)("h4",{id:"user-accepts"},"User Accepts"),(0,i.kt)("p",null,"If the user accepts, the mainnet should accept the signature and assign ownership of the token to the user on mainnet."),(0,i.kt)("hr",null),(0,i.kt)("h4",{id:"user-rejects"},"User Rejects"),(0,i.kt)("p",null,"If the user does not accept then the token is stuck in between. The way to fix this is to continue the transfer from the part where you ask the signing server for the signature."),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"reversal"},"Reversal"),(0,i.kt)("p",null,"The way back from mainnet to mainnetsidechain is the same procedure, except with contracts switched. You would first write to the mainnet to move the mainnet token to the mainnet contract (requires user confirmation). Once this succeeds you can ask the signing server for the signature (uses a differnt endpoint than last time). Then that signature can be written to the sidechain to have the contract give you back the token that you initially deposited. At this point we are back where we started and the procedure could be repeated."),(0,i.kt)("hr",null))}u.isMDXComponent=!0}}]);
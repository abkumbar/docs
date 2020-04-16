(window.webpackJsonp=window.webpackJsonp||[]).push([[50],{322:function(e,t,a){"use strict";a.r(t);var r=a(32),s=Object(r.a)({},(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("h1",{attrs:{id:"using-providers"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#using-providers"}},[e._v("#")]),e._v(" Using providers")]),e._v(" "),a("p",[e._v("As explained previously, the 0xcert Framework tends to be platform-agnostic, meaning that it is not created for merely one blockchain or one specific platform. It aims to provide a consistently optimal developing experience, regardless of the platform you employ.")]),e._v(" "),a("p",[e._v("Each provider operates on the same principles, but can also have its own distinctive characteristics. The current version of the Framework supports the Ethereum and the Wanchain blockchain. Soon, more platforms will be added.")]),e._v(" "),a("p",[e._v("Even within the same blockchain, multiple providers are available depending on your needs. If you would like to communicate with blockchain on the front-end, you would use "),a("RouterLink",{attrs:{to:"/api/ethereum.html#metamask-provider"}},[e._v("MetamaskProvider")]),e._v(", while for communication on the back-end you would use "),a("RouterLink",{attrs:{to:"/api/ethereum.html#http-provider"}},[e._v("HttpProvider")]),e._v(". For more information about other providers for Ethereum such as Bitski, please click "),a("RouterLink",{attrs:{to:"/api/ethereum.html#api-ethereum"}},[e._v("here")]),e._v(", and to learn more about providers for Wanchain, please click "),a("RouterLink",{attrs:{to:"/api/wanchain.html#api-wanchain"}},[e._v("here")]),e._v(".")],1),e._v(" "),a("div",{staticClass:"card custom-block"},[a("p",{staticClass:"custom-block-title"},[e._v("Learn by example")]),e._v(" "),a("p",[e._v("Click "),a("a",{attrs:{href:"https://stackblitz.com/edit/using-providers-example",target:"_self",rel:"noopener noreferrer alternate"}},[e._v("here")]),e._v(" to check the live example for this section.")])]),e._v(" "),a("h2",{attrs:{id:"installation-process"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#installation-process"}},[e._v("#")]),e._v(" Installation process")]),e._v(" "),a("p",[e._v("The 0xcert Framework supports multiple providers that enable the communication with platforms. However, in this guide, we will employ an example on the most common and straightforward blockchain provider called "),a("a",{attrs:{href:"https://metamask.io/",target:"_self",rel:"noopener noreferrer alternate"}},[e._v("MetaMask")]),e._v(", which allows for communication with the Ethereum network in the browser.")]),e._v(" "),a("p",[a("a",{attrs:{href:"https://metamask.io/",target:"_self",rel:"noopener noreferrer alternate"}},[e._v("MetaMask")]),e._v(" is a popular plug-in that allows you to create and store the private keys for your Ethereum account inside your browser or mobile device. It works as a bridge between your browser and the Ethereum blockchain through its own infrastructure. MetaMask can also be paired with hardware wallets such as "),a("a",{attrs:{href:"https://www.ledger.com/",target:"_self",rel:"noopener noreferrer alternate"}},[e._v("Ledger")]),e._v(" or "),a("a",{attrs:{href:"https://trezor.io/",target:"_self",rel:"noopener noreferrer alternate"}},[e._v("Trezor")]),e._v(".")]),e._v(" "),a("p",[e._v("We recommend you employ the provider module as an NPM package in your application.")]),e._v(" "),a("div",{staticClass:"language-shell extra-class"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[e._v("$ "),a("span",{pre:!0,attrs:{class:"token function"}},[e._v("npm")]),e._v(" i --save @0xcert/ethereum-metamask-provider\n")])])]),a("p",[e._v("On our official "),a("a",{attrs:{href:"https://github.com/0xcert/framework",target:"_self",rel:"noopener noreferrer alternate"}},[e._v("GitHub repository")]),e._v(", we also host a compiled and minimized JavaScript file that can be directly implemented in your website. Please refer to the "),a("RouterLink",{attrs:{to:"/api/ethereum.html"}},[e._v("API")]),e._v(" section to learn more about other providers.")],1),e._v(" "),a("h2",{attrs:{id:"usage-overview"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#usage-overview"}},[e._v("#")]),e._v(" Usage overview")]),e._v(" "),a("p",[e._v("To start developing the application, we have to first instantiate the "),a("RouterLink",{attrs:{to:"/api/ethereum.html#metamask-provider"}},[e._v("MetamaskProvider")]),e._v(" provider class. This is usually only needed once within the application.")],1),e._v(" "),a("div",{staticClass:"language-ts extra-class"},[a("pre",{pre:!0,attrs:{class:"language-ts"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("import")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("{")]),e._v(" MetamaskProvider "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("}")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("from")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[e._v("'@0xcert/ethereum-metamask-provider'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(";")]),e._v("\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("const")]),e._v(" provider "),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("new")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[e._v("MetamaskProvider")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(";")]),e._v("\n")])])]),a("p",[e._v("MetaMask needs to be authorized and unlocked to be used on the website. This is specific to this provider. Therefore, before you start interacting with the Ethereum node, you should check whether the MetaMask account has been enabled. If not, you have to enable it, as shown in the example below.")]),e._v(" "),a("div",{staticClass:"language-ts extra-class"},[a("pre",{pre:!0,attrs:{class:"language-ts"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("if")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("!")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("await")]),e._v(" provider"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[e._v("isEnabled")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("{")]),e._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("await")]),e._v(" provider"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[e._v("enable")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(";")]),e._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("}")]),e._v("\n")])])]),a("p",[e._v("Now that we're connected to the Ethereum blockchain, we can begin performing "),a("code",[e._v("query")]),e._v(" and "),a("code",[e._v("mutation")]),e._v(" requests.")]),e._v(" "),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[e._v("TIP")]),e._v(" "),a("p",[e._v("When you connect to MetaMask, "),a("code",[e._v("provider.accountId")]),e._v(" represents your selected account.")])]),e._v(" "),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[e._v("TIP")]),e._v(" "),a("p",[e._v("Make sure your MetaMask is connected to the Ethereum Ropsten network.")])]),e._v(" "),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[e._v("TIP")]),e._v(" "),a("p",[e._v("To perform this deployment step, you'll need to pay some gas on the Ethereum network. You can get free Ether into your wallet on the Ropsten network via "),a("a",{attrs:{href:"https://faucet.ropsten.be/",target:"_self",rel:"noopener noreferrer alternate"}},[e._v("this link")]),e._v(".")])]),e._v(" "),a("hr"),e._v(" "),a("p",[e._v("Our connection to the blockchain is now successfully established. Next off, we will learn about "),a("RouterLink",{attrs:{to:"/guide/about-assets.html#assets-are-non-fungible"}},[e._v("assets and how to use them")]),e._v(" within our framework.")],1)])}),[],!1,null,null,null);t.default=s.exports}}]);
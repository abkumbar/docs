/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "0xcert-framework.svg",
    "revision": "82d69102af8178f89d620d53a8dd46e1"
  },
  {
    "url": "0xcert-logo.svg",
    "revision": "780242d9a166ea4703aa89253b275583"
  },
  {
    "url": "api-icon.svg",
    "revision": "df67661118113e7c8d05ffbb9cd882e1"
  },
  {
    "url": "api/api/certification.html",
    "revision": "451f55734e014b4520cafb043f163529"
  },
  {
    "url": "api/api/client.html",
    "revision": "8bad6152a3f22b6974efb63adb36bce7"
  },
  {
    "url": "api/api/rest.html",
    "revision": "bde07058683eb29e3e529c8a5b486219"
  },
  {
    "url": "api/guides/additional-scenarios.html",
    "revision": "b986e46ad591c7cd6dc1dd619ad4467e"
  },
  {
    "url": "api/guides/approve-asset-transfer.html",
    "revision": "f69fb9a8fedc7499ec924cda2fda4b30"
  },
  {
    "url": "api/guides/asset-ledger-deployment.html",
    "revision": "7bd71652662d21471a7046526a0edbe8"
  },
  {
    "url": "api/guides/atomic-operations.html",
    "revision": "fefeaa7e18efa429f74cfc467de0e219"
  },
  {
    "url": "api/guides/certification.html",
    "revision": "c860eb3a1eadcc83e0949eeeb8ef7c24"
  },
  {
    "url": "api/guides/dashboard.html",
    "revision": "33b011c880231fe4489db8826bfb9a90"
  },
  {
    "url": "api/guides/destroy-asset.html",
    "revision": "488b47309ab286d197dd8e189b435691"
  },
  {
    "url": "api/guides/fungible-values.html",
    "revision": "ebcea9607059bd00b267365e333fb0d3"
  },
  {
    "url": "api/guides/get-credits.html",
    "revision": "ff1b2fcde52d0741b20f62db796950b0"
  },
  {
    "url": "api/guides/installation.html",
    "revision": "f428b220a5d24494c3b3e51518970a4a"
  },
  {
    "url": "api/guides/issue-asset.html",
    "revision": "b7b92209a281f0e5c30747491121b140"
  },
  {
    "url": "api/guides/non-fungible-assets.html",
    "revision": "d701a587f1fe082e2ac7b7e409c9f4f9"
  },
  {
    "url": "api/guides/providers.html",
    "revision": "dd114ef4be4cac987e794b9132e56fc2"
  },
  {
    "url": "api/guides/set-asset-ledger-abilities.html",
    "revision": "79c0f0031c58cf598a7e99665757cc88"
  },
  {
    "url": "api/guides/transfer-asset.html",
    "revision": "88f054035c5f7fdf5c6063ed4218ea89"
  },
  {
    "url": "api/guides/transfer-value.html",
    "revision": "94360edb366956e5a2c51423f80284fa"
  },
  {
    "url": "api/guides/update-asset-imprint.html",
    "revision": "77ecdbb04f05d97b5b3bbc5c91ed8437"
  },
  {
    "url": "api/guides/use-cases.html",
    "revision": "d3125d35ef34e8798a11714de8715c4c"
  },
  {
    "url": "api/index.html",
    "revision": "7d19295444a077dd092faeb9f2321bea"
  },
  {
    "url": "api/schemas/86-base-asset-schema.html",
    "revision": "e0909fb0087c4863fc2c72ff438238e0"
  },
  {
    "url": "api/schemas/87-asset-evidence-schema.html",
    "revision": "b8538fc1dd23d1785deda6ca4a37de08"
  },
  {
    "url": "api/schemas/88-crypto-collectible-schema.html",
    "revision": "356501eda7c2fa0b59ab8f393f903460"
  },
  {
    "url": "api/schemas/xcert-schema.html",
    "revision": "f98b8fb2ac2fbbd39c8c04acd81aa961"
  },
  {
    "url": "assets/css/0.styles.d7956b4c.css",
    "revision": "71002a256a855627eae711e3964bf41c"
  },
  {
    "url": "assets/img/atomic-swap.33e9e009.svg",
    "revision": "33e9e009fd08bc8d33037e7612c718bf"
  },
  {
    "url": "assets/img/block_balance.76df9697.svg",
    "revision": "76df969771b008e4c91ecba8efc7c865"
  },
  {
    "url": "assets/img/certification.31c7b71d.svg",
    "revision": "31c7b71d4c8fd6a766c108d2ff494226"
  },
  {
    "url": "assets/img/conflicts-explained.c37f02a2.svg",
    "revision": "c37f02a29cb1699937146a8acb6fdce4"
  },
  {
    "url": "assets/img/dashboard.16371e3e.svg",
    "revision": "16371e3ebd00b65330840c8ac581ed64"
  },
  {
    "url": "assets/img/deposit-options.5d6d1f98.png",
    "revision": "5d6d1f98ad1757646a2d42b0db7cdbbf"
  },
  {
    "url": "assets/img/exposed-part.5e486307.svg",
    "revision": "5e48630774daf3592db57d1454aa3b08"
  },
  {
    "url": "assets/img/login.73da2ce5.svg",
    "revision": "73da2ce51e6a0a75f6e8b1f1823b07fc"
  },
  {
    "url": "assets/img/no-conflicting-proogs.a3213736.svg",
    "revision": "a32137363710f3ee693cbd9c072ae3a4"
  },
  {
    "url": "assets/img/notarized.e62f8d82.svg",
    "revision": "e62f8d828e030c82db405054e14d705f"
  },
  {
    "url": "assets/img/part-proved.c1187f5f.svg",
    "revision": "c1187f5f1951d21e14a64ee515e22217"
  },
  {
    "url": "assets/img/request-details.cabc2414.svg",
    "revision": "cabc24145895fe13025c229bddea9cca"
  },
  {
    "url": "assets/img/scheme_1.4b756bc1.svg",
    "revision": "4b756bc1575b7bdb18b62f706659a2a9"
  },
  {
    "url": "assets/img/scheme_1.4e83c37f.svg",
    "revision": "4e83c37fa32170bfa902024b974ce4a4"
  },
  {
    "url": "assets/img/scheme_2.1806743d.svg",
    "revision": "1806743d3971430f0c0c5bd6b2641fd2"
  },
  {
    "url": "assets/img/scheme_3.6fecffe4.svg",
    "revision": "6fecffe4ee3161e49c44902379f6691f"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/img/zero-info.eab30f82.svg",
    "revision": "eab30f82996642dc34cfefcc90e61222"
  },
  {
    "url": "assets/js/10.c66955e5.js",
    "revision": "e603c4da4aad1c8cef9601de218b9883"
  },
  {
    "url": "assets/js/11.55341847.js",
    "revision": "51f5e36d602544296afd750b9b10a142"
  },
  {
    "url": "assets/js/12.ce9bef93.js",
    "revision": "df879996d1d0bac2622cf4400b7169e5"
  },
  {
    "url": "assets/js/13.fb7313b2.js",
    "revision": "3debb0bebc75f5e667b8972118774498"
  },
  {
    "url": "assets/js/14.75e0fe85.js",
    "revision": "5e590c3d076fcedd755acc0afad39736"
  },
  {
    "url": "assets/js/15.b74cb165.js",
    "revision": "b008c840f14e9108485b6ce3a4ba2e0a"
  },
  {
    "url": "assets/js/16.e9d2426e.js",
    "revision": "46be11839b74569a808f3d38c62d64d4"
  },
  {
    "url": "assets/js/17.a7459db7.js",
    "revision": "7e98e64057982e16260cf87f7db05a43"
  },
  {
    "url": "assets/js/18.811d9380.js",
    "revision": "08925d8a59f1dabf59ae8cb7a5e6b7d6"
  },
  {
    "url": "assets/js/19.364ff44b.js",
    "revision": "01bf6e3530038c0271d9ad97191f0b36"
  },
  {
    "url": "assets/js/2.f199345b.js",
    "revision": "f460a2af23f1cfbbd52e0bf9967e82b4"
  },
  {
    "url": "assets/js/20.ab90b2b5.js",
    "revision": "470df872a40cfbc77ff475e0907d8bd1"
  },
  {
    "url": "assets/js/21.dd4c139a.js",
    "revision": "861c6434fb18a3e948c89692bdc076bc"
  },
  {
    "url": "assets/js/22.cac6d59f.js",
    "revision": "df6dbfc5a23c4c107588ba1481a1c2b4"
  },
  {
    "url": "assets/js/23.9f964b50.js",
    "revision": "c2e899de6ca4503f5b8136ccca3eba01"
  },
  {
    "url": "assets/js/24.dff646fb.js",
    "revision": "fc5c11fbeba2ee5b82e72e90fe6e3f55"
  },
  {
    "url": "assets/js/25.c760f19f.js",
    "revision": "c92b9f48855bfd8786824f1797fe754c"
  },
  {
    "url": "assets/js/26.3d9562ab.js",
    "revision": "91f2a151c88c9a30775882ceefe08be9"
  },
  {
    "url": "assets/js/27.4f0b9081.js",
    "revision": "3b3c4614a99d3ccc70f68789a9966169"
  },
  {
    "url": "assets/js/28.dcd67674.js",
    "revision": "cf4d2a61aa2ea4183184c0a0dd1854eb"
  },
  {
    "url": "assets/js/29.174568a7.js",
    "revision": "72f88d1fdfd3eb7854ef32ab5594a88c"
  },
  {
    "url": "assets/js/3.4f6b0ef7.js",
    "revision": "e44abb1c20a541f2de48cfa614ff44f0"
  },
  {
    "url": "assets/js/30.7175d751.js",
    "revision": "05843b913b63fb09361389bcc22798c1"
  },
  {
    "url": "assets/js/31.1790c975.js",
    "revision": "71d08d3b0d1efbb23c145c9ef078fe2c"
  },
  {
    "url": "assets/js/32.a70de6ce.js",
    "revision": "6cf716065984cd21b78c31f38f17339c"
  },
  {
    "url": "assets/js/33.436b2dec.js",
    "revision": "5b544368c151145f5c6105238806ca72"
  },
  {
    "url": "assets/js/34.a753fcd3.js",
    "revision": "dccbe5ac41ac45f309ac9897a60f2a4a"
  },
  {
    "url": "assets/js/35.56cdf595.js",
    "revision": "22430f116978033493e68894f0b1661b"
  },
  {
    "url": "assets/js/36.a2b4312b.js",
    "revision": "81a59456f308f68d673c9e0f21e9eb53"
  },
  {
    "url": "assets/js/37.a2aa47e7.js",
    "revision": "72ecbe27dbcffc46f60b560dd45e9947"
  },
  {
    "url": "assets/js/38.97e4f0d4.js",
    "revision": "58c2f2a2e39157f21cd3bd6d287128a6"
  },
  {
    "url": "assets/js/39.27a56882.js",
    "revision": "ee42e6363f9af33eb9a139fa328a6c91"
  },
  {
    "url": "assets/js/4.737f5e48.js",
    "revision": "2ef680d886600d54e858e2b854d9e870"
  },
  {
    "url": "assets/js/40.96a70146.js",
    "revision": "9feee378a176c6b1fede44db4aa129af"
  },
  {
    "url": "assets/js/41.edb3cc79.js",
    "revision": "ba7dc72af7b3a762a46e19fd3dd8f5c4"
  },
  {
    "url": "assets/js/42.0ff844dd.js",
    "revision": "a4d4b420d3bfa4ec41c843e6795b3949"
  },
  {
    "url": "assets/js/43.04f1eefc.js",
    "revision": "31aa4d4855fe694c08478771436bc9c9"
  },
  {
    "url": "assets/js/44.4820b37b.js",
    "revision": "43c32acd2009342f950718e54d7ca171"
  },
  {
    "url": "assets/js/45.baca3d5d.js",
    "revision": "e23d042f2af5388dc00929c904be00fe"
  },
  {
    "url": "assets/js/46.1c3ae08a.js",
    "revision": "2826a9e4530d6fce2ff3e96539f881e0"
  },
  {
    "url": "assets/js/47.3a3ee223.js",
    "revision": "d6b21b6dc6b7fc71d16d50592e5de21f"
  },
  {
    "url": "assets/js/48.59696877.js",
    "revision": "96de16e41883cec2b178377e5e9b50ad"
  },
  {
    "url": "assets/js/49.71759e03.js",
    "revision": "9e558809e6b8abeead36009b3257156c"
  },
  {
    "url": "assets/js/5.36f6fd2c.js",
    "revision": "417868d46de9b7ff9fda1f28e4e344e3"
  },
  {
    "url": "assets/js/50.6cdd92e1.js",
    "revision": "031be86f2eb2fd5b576e4cd6994c459d"
  },
  {
    "url": "assets/js/51.8fe14ed7.js",
    "revision": "f5b3a4ff82f556118b28dd3824aa6484"
  },
  {
    "url": "assets/js/52.e95386ab.js",
    "revision": "b3f6f84142d3b9ab36352d91922c0112"
  },
  {
    "url": "assets/js/53.5e2d4e2e.js",
    "revision": "ea4626408b64ec9c274a669974bf8518"
  },
  {
    "url": "assets/js/54.269247c8.js",
    "revision": "e2fbc0484a695e1753222e459609fbf3"
  },
  {
    "url": "assets/js/55.014d05cd.js",
    "revision": "a2a0a76cfbbc69564696ea562ad8f4e6"
  },
  {
    "url": "assets/js/56.b556e10d.js",
    "revision": "25ce1847cc29637fd43d122f31f7d6b8"
  },
  {
    "url": "assets/js/57.b48fe0f3.js",
    "revision": "a6ecb580974886615bbd419b3074596a"
  },
  {
    "url": "assets/js/58.44fb3f5b.js",
    "revision": "d0b36614f6336328d483af3a463b9b67"
  },
  {
    "url": "assets/js/59.7d0a324f.js",
    "revision": "f0c3bd97dc00bbe1efc6df4595d20a30"
  },
  {
    "url": "assets/js/6.6e3b4cb8.js",
    "revision": "d9a499579ef4dc04a167276e982dd0a7"
  },
  {
    "url": "assets/js/60.aa807d25.js",
    "revision": "da9c7b23743f4be6791c044ef147a039"
  },
  {
    "url": "assets/js/61.f0466c96.js",
    "revision": "fbce384c329f774e81193b352601bb31"
  },
  {
    "url": "assets/js/62.b43822ad.js",
    "revision": "36d15a81436738fcc52d8feff0464b2c"
  },
  {
    "url": "assets/js/63.7d791beb.js",
    "revision": "86a4c8031e9199a3c0866c9e5fcd7cc8"
  },
  {
    "url": "assets/js/64.48e9cc98.js",
    "revision": "e9dabc5dbddab1a065154106cf80dbe5"
  },
  {
    "url": "assets/js/65.c9709bc2.js",
    "revision": "8a6ed017ddcc0e2e8c117ad55eb73954"
  },
  {
    "url": "assets/js/66.fc44a20b.js",
    "revision": "fa808be947f98998fac8f607e34da9e9"
  },
  {
    "url": "assets/js/67.4aeb1f1a.js",
    "revision": "87573318c4581216c179b38cde8f2ff4"
  },
  {
    "url": "assets/js/68.37bcef0a.js",
    "revision": "cfaced2719b9b7da8d314706ff1cf55e"
  },
  {
    "url": "assets/js/69.e3d69270.js",
    "revision": "8df4727984d9ecf34674d5e24bae7dc6"
  },
  {
    "url": "assets/js/7.ac8cad6a.js",
    "revision": "55514baaebb9cbe4924fc46edebf2fef"
  },
  {
    "url": "assets/js/70.5efa6433.js",
    "revision": "1419eb9e33823e6bd036f1367f17947f"
  },
  {
    "url": "assets/js/71.0740b18c.js",
    "revision": "b192785b493207d1a366895780aa2c14"
  },
  {
    "url": "assets/js/72.8a12cec4.js",
    "revision": "72e5153efb0a6f0a7524945b53d81538"
  },
  {
    "url": "assets/js/73.e0eb7500.js",
    "revision": "10afe4907991ab92d74b2cddad9ac33e"
  },
  {
    "url": "assets/js/74.26c13b61.js",
    "revision": "81d45018883bb1550beef951570be75e"
  },
  {
    "url": "assets/js/75.2319e331.js",
    "revision": "a2d2805be4cd6db0760fe8939263ec5b"
  },
  {
    "url": "assets/js/76.ac15d63e.js",
    "revision": "b58446e6b6dba51a7fc538933a2ff891"
  },
  {
    "url": "assets/js/77.a338de77.js",
    "revision": "2e2925a85bff5b54a3321d47c5e573f1"
  },
  {
    "url": "assets/js/78.c7b994ac.js",
    "revision": "5cfee6bb34b1d5d569bab8bf58b909c5"
  },
  {
    "url": "assets/js/79.06acbcc7.js",
    "revision": "b5a031fa9a309eb5c1c8364a06277b1b"
  },
  {
    "url": "assets/js/8.ece7f58f.js",
    "revision": "0bc50210e3e08842c9674d9008dd1d4e"
  },
  {
    "url": "assets/js/9.feeb36fc.js",
    "revision": "d52ba1fd8b802213b2bb6c93fd48d17e"
  },
  {
    "url": "assets/js/app.beb59d9e.js",
    "revision": "67eb0ff4e285d0329bdf18e1b35c3603"
  },
  {
    "url": "background.svg",
    "revision": "5dfa0b3c79465dfa2a64827a18d32db0"
  },
  {
    "url": "CONTRIBUTING.html",
    "revision": "9509a6c7274d4da7bd7ebfecfecb4203"
  },
  {
    "url": "ethereum.png",
    "revision": "e87ef377b6298693af14e868e7bd9d54"
  },
  {
    "url": "favicon.png",
    "revision": "95a4dd7b4970ca0eb015e3a10c3e6394"
  },
  {
    "url": "framework-icon.svg",
    "revision": "238a8eda04c75c7ca680da3cfacbb6b8"
  },
  {
    "url": "framework/v1/api/core.html",
    "revision": "cc3660fe744a2290a0b66d2aaf85ace9"
  },
  {
    "url": "framework/v1/api/ethereum.html",
    "revision": "e2c315429273206b3dbdaba5ab7fec95"
  },
  {
    "url": "framework/v1/api/wanchain.html",
    "revision": "6a146d99033e83e4ed53cd393b25060a"
  },
  {
    "url": "framework/v1/guide/about-assets.html",
    "revision": "75901667fb4e76e936ae30f3b2d21c4d"
  },
  {
    "url": "framework/v1/guide/about-cryptocurrency.html",
    "revision": "6b0196e68adb196da76a7c647199d39d"
  },
  {
    "url": "framework/v1/guide/asset-management.html",
    "revision": "9b74f910ccc0b0bd36a2b242de8824b6"
  },
  {
    "url": "framework/v1/guide/atomic-orders.html",
    "revision": "178fe18d871b6c1e431bdbeab20612b1"
  },
  {
    "url": "framework/v1/guide/certification.html",
    "revision": "3a9a1a351260b998047c48e18c6c7941"
  },
  {
    "url": "framework/v1/guide/communication.html",
    "revision": "6fbea1ed7c43f7e562e81d0c429f5194"
  },
  {
    "url": "framework/v1/guide/getting-started.html",
    "revision": "9216871e5d0372abd5b0dda25bb0de2a"
  },
  {
    "url": "framework/v1/guide/introduction.html",
    "revision": "d22ff1abf3e77528836747796e0ef32d"
  },
  {
    "url": "framework/v1/guide/threat-models.html",
    "revision": "1d6c4b3e7faf5279eeb71d3a7eeb81aa"
  },
  {
    "url": "framework/v1/guide/using-providers.html",
    "revision": "d457c8a2af1bc9dd3d1af821619a06c8"
  },
  {
    "url": "framework/v1/guide/value-management.html",
    "revision": "67ffd59f0ababa2ee496ed377b9e8228"
  },
  {
    "url": "framework/v1/index.html",
    "revision": "44f504144ecfc6776148783f5eae96f4"
  },
  {
    "url": "framework/v1/plugins/vuejs.html",
    "revision": "ec5aa2c0985b5ec3cf868249dbf70eeb"
  },
  {
    "url": "framework/v2/api/0xcertapi-client.html",
    "revision": "f6a3a07a2fb27b3f0a9b5fe7ddbd5dbf"
  },
  {
    "url": "framework/v2/api/certification.html",
    "revision": "2472db25cf6562d61e2e3b44631452f5"
  },
  {
    "url": "framework/v2/api/ethereum-connectors.html",
    "revision": "6e79993d23dc1e8a8c7b4a51961cc73d"
  },
  {
    "url": "framework/v2/api/vuejs-plugin.html",
    "revision": "56fd6eb4b2cd72bb73fac842e61e8cfd"
  },
  {
    "url": "framework/v2/api/wanchain-connectors.html",
    "revision": "e92306d319ca79f5d5ef0de0bc5f361c"
  },
  {
    "url": "framework/v2/guides/asset-management.html",
    "revision": "cbb48b99492c4de55a72b93536cf861a"
  },
  {
    "url": "framework/v2/guides/atomic-actions.html",
    "revision": "82c879bd0cd76a33ef858b45cb60bfd7"
  },
  {
    "url": "framework/v2/guides/atomic-approval.html",
    "revision": "06ddc82d1e1a81a5e1af102144c8fa09"
  },
  {
    "url": "framework/v2/guides/atomic-deployments.html",
    "revision": "644c6885ad497b2d5ee43f850fbb80ec"
  },
  {
    "url": "framework/v2/guides/certification.html",
    "revision": "84121e535db670ddc1e12796d5c18955"
  },
  {
    "url": "framework/v2/guides/communication.html",
    "revision": "2525973d49bb7487f831da132201cd3f"
  },
  {
    "url": "framework/v2/guides/providers.html",
    "revision": "a17d3668947d8dbacc6a5dbca848f36d"
  },
  {
    "url": "framework/v2/guides/value-management.html",
    "revision": "d4bee39a43b8c9d0457ad9ee4b244197"
  },
  {
    "url": "framework/v2/index.html",
    "revision": "c7b66095861529bdbf53c392f1d48f37"
  },
  {
    "url": "framework/v2/introduction/0xcert-tokens.html",
    "revision": "13319876ebf4c142e07445f314f0d068"
  },
  {
    "url": "framework/v2/introduction/atomic-transactions.html",
    "revision": "5a0b52c3dbbc8978a62db06b7fc2cac7"
  },
  {
    "url": "framework/v2/introduction/authenticity.html",
    "revision": "4a78b26b7a740b81229b3713db3b1263"
  },
  {
    "url": "framework/v2/introduction/fungible-values.html",
    "revision": "95456ad506704eef74d49704f19ce865"
  },
  {
    "url": "framework/v2/introduction/getting-started.html",
    "revision": "52a565157f0d7ebf488a8bb499814f37"
  },
  {
    "url": "framework/v2/introduction/interoperability.html",
    "revision": "c8e258e1367e7d8f4e77fade0f47bc56"
  },
  {
    "url": "framework/v2/introduction/non-fungible-assets.html",
    "revision": "05400191db5bc8cfbce5836411e84224"
  },
  {
    "url": "framework/v2/introduction/threat-models.html",
    "revision": "d93bfb99ae731d9f6f7099507d4165f5"
  },
  {
    "url": "framework/v2/schemas/86-base-asset-schema.html",
    "revision": "50eebbadde378905bc98a88ca945446f"
  },
  {
    "url": "framework/v2/schemas/87-asset-evidence-schema.html",
    "revision": "d6023037f23378776001abd50625b93c"
  },
  {
    "url": "framework/v2/schemas/88-crypto-collectible-schema.html",
    "revision": "84723886b6760c56af6f7a546e1bfb1e"
  },
  {
    "url": "framework/v2/schemas/xcert-schema.html",
    "revision": "ad0b8bba46398bd32cd9616a53dee12c"
  },
  {
    "url": "hero-image.svg",
    "revision": "7a23f7cc21f915a46ce92c59b8984d3b"
  },
  {
    "url": "index.html",
    "revision": "c8adcf3e90d078503ba1cc5dc19da846"
  },
  {
    "url": "LICENSE.html",
    "revision": "a3f568517404b9478dd727f14524308a"
  },
  {
    "url": "logo_0xcert.svg",
    "revision": "1b51dc3973753349a7c9c72a4c37fb3a"
  },
  {
    "url": "logo_alliance.svg",
    "revision": "077c3f0fc6e4955815f8e9d7d4d53e61"
  },
  {
    "url": "logo_swapmarket.svg",
    "revision": "c14ff3d5b6d2ccb8bbcbcb63dbed8d15"
  },
  {
    "url": "logo_validator.svg",
    "revision": "f6b907c537d8075d30fc24a49d9dcf66"
  },
  {
    "url": "logo-bitski.svg",
    "revision": "6bf34f5872caea823c755a950675ccb1"
  },
  {
    "url": "logo-metamask.svg",
    "revision": "fa7b829817860f80d7733f08efd3e4fe"
  },
  {
    "url": "wanchain.png",
    "revision": "c3256bc210ca559021a431d950d3fb3b"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
addEventListener('message', event => {
  const replyPort = event.ports[0]
  const message = event.data
  if (replyPort && message && message.type === 'skip-waiting') {
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        error => replyPort.postMessage({ error })
      )
    )
  }
})

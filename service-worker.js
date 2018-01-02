/**
 * Copyright 2016 Google Inc. All rights reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
*/

// DO NOT EDIT THIS GENERATED OUTPUT DIRECTLY!
// This file should be overwritten as part of your build process.
// If you need to extend the behavior of the generated service worker, the best approach is to write
// additional code and include it using the importScripts option:
//   https://github.com/GoogleChrome/sw-precache#importscripts-arraystring
//
// Alternatively, it's possible to make changes to the underlying template file and then use that as the
// new base for generating output, via the templateFilePath option:
//   https://github.com/GoogleChrome/sw-precache#templatefilepath-string
//
// If you go that route, make sure that whenever you update your sw-precache dependency, you reconcile any
// changes made to this original template file with your modified copy.

// This generated service worker JavaScript will precache your site's resources.
// The code needs to be saved in a .js file at the top-level of your site, and registered
// from your pages in order to be used. See
// https://github.com/googlechrome/sw-precache/blob/master/demo/app/js/service-worker-registration.js
// for an example of how you can register this script and handle various service worker events.

/* eslint-env worker, serviceworker */
/* eslint-disable indent, no-unused-vars, no-multiple-empty-lines, max-nested-callbacks, space-before-function-paren, quotes, comma-spacing */
'use strict';

var precacheConfig = [["/404.html","1acba5c849bf9c06d27ff9925c228ce8"],["/about/index.html","b791d07acb6c98490fa122157d552b4b"],["/apple-touch-icon.png","19585a67aedb1bdbd18aaee6bf724b2b"],["/favicon-16x16.png","d97b9255585ce39e2242a19063928e0f"],["/favicon-32x32.png","1ea5ad69095f3cd37ec038d3123e359e"],["/hymns/a-new-commandment/index.html","0cae34d7fbaf9bf61dc989a8dc83c809"],["/hymns/a-spotless-rose-is-blowing/index.html","ddc3b935275e59cc22c0eef7c921fd39"],["/hymns/a-tender-shoot-has-started-up/index.html","2c99c92ebe4246beb5f03758b692f9a4"],["/hymns/abide-with-me/index.html","2558eba655e4a2a347a849eb630e27d6"],["/hymns/accept-almighty-father/index.html","1ef3bba6118040b84a80e9659d1d1697"],["/hymns/adam-lay-ybounden/index.html","29d5120110f0b6aa94cdb6091dd79673"],["/hymns/all-over-the-world/index.html","b9cb579158254908b3e90593fada04f9"],["/hymns/all-peoples-of-the-universe/index.html","1f5b7f4890ce92dbaf4742a16ea309fb"],["/hymns/all-that-i-am/index.html","41658c8d95818fb52745c0a6d28066c8"],["/hymns/all-the-ends-of-the-earth/index.html","6b77767a17f2f3716e7d1e1b9a503423"],["/hymns/all-the-way-my-saviour-leads-me/index.html","d026920f16c814b2db2666bf1df61c9a"],["/hymns/all-to-jesus-i-surrender/index.html","691dff0cdd911c2ec2bf653fcab992a3"],["/hymns/all-you-children-of-peace/index.html","2b151b44c453fc318cfb0843e8b199f3"],["/hymns/amazing-grace/index.html","770e525e17f1d15b1c2423b2466e4466"],["/hymns/angels-we-have-heard-on-high/index.html","a54c998a40627d364d0d8f18721780b8"],["/hymns/as-i-kneel-before-you/index.html","0cc745f6097cc76348040c8d82847d26"],["/hymns/as-the-deer/index.html","494618a2440f3cda1a101cd0fde0923a"],["/hymns/as-we-gather-may-your-spirit-work-within-us/index.html","ad17b8fb4d5dd00c9acec42d08d0e1ce"],["/hymns/at-the-cross-her-station-keeping/index.html","9354fac5881d65a033156b101b17887f"],["/hymns/at-the-name-of-jesus/index.html","906dc7168146c8ee18c41a76ad63bae1"],["/hymns/at-this-time-of-giving/index.html","a0540964f511c62ddc85670aa345118e"],["/hymns/away-in-a-manger/index.html","d886979b20434f238db2736ae140240b"],["/hymns/be-exalted/index.html","c29ffb76932943b9c7ad0cc7c2b74a34"],["/hymns/be-not-afraid-i-go-before-you-always/index.html","5d2a44a4c24cc50f8f869b4234d0fc9f"],["/hymns/be-still-and-know/index.html","5e3ce97d727e8d02b66d84ae87cec835"],["/hymns/be-still-for-the-presence-of-the-lord/index.html","2e31f0bb79498c8b5b52b5e290f88e12"],["/hymns/be-thou-my-vision/index.html","928c1599970e5c93fbd9c99dc1dd6ed3"],["/hymns/beginning-today/index.html","09c80f03a0f2d083b6f4e9dd521e6885"],["/hymns/bestir-thy-power/index.html","a6f55e12baca58df71dcb02f03fb0eb7"],["/hymns/bind-us-together/index.html","06018ed014fea3c0b8933688893ca2b9"],["/hymns/blessed-are-they-who-are-poor-in-spirit/index.html","cbd47df6fb0b4b41e6271e1b165e4620"],["/hymns/blessed-assurance/index.html","3477e2cfd4abd0f27c2f3bf58d0a1322"],["/hymns/blest-are-they/index.html","944508ad87adbd4abe30469c69b0b9f0"],["/hymns/blest-are-you-lord/index.html","6fb10c17021c9cd5922246ffbd903dea"],["/hymns/bread-that-was-sown/index.html","f2636bdb86b6bbe85109c3a874284a2a"],["/hymns/cause-me-to-come/index.html","e7722c145eb87204616893adb3fc0893"],["/hymns/celebrate-god/index.html","1b6c3301b88c80d55394907400376dd8"],["/hymns/christ-be-our-light/index.html","dbe6237e43122aba2ab6856d6bc27aaf"],["/hymns/colours-of-day/index.html","a4aced7d4abe08e79f420cc4e11ce4a3"],["/hymns/come-back-to-me/index.html","228356e2ea2f0c5410d27d48447f532e"],["/hymns/come-come-emmanuel/index.html","30714bf1b4ab6e2c0aeb1022946b5fac"],["/hymns/come-holy-ghost/index.html","69547a82d240402e877b94ea1b4dbbfb"],["/hymns/come-in-pilgrim/index.html","1dd667c26052c7f3df765ae186effc75"],["/hymns/come-into-his-presence/index.html","7754813eeeabc637f2f0b55225139f0c"],["/hymns/come-thou-long-expected-jesus/index.html","2a4e1d45a91fb5dc3fe660e7319ae58f"],["/hymns/come-to-us/index.html","0acf7afe6c44b554303fa2d3c4d267b8"],["/hymns/comfort-comfort-my-people/index.html","383400a33ae5d9541bf91aa15f7c6981"],["/hymns/count-your-blessings/index.html","d233821e447dacd5fa4178a634129018"],["/hymns/daily-daily-sing-to-mary/index.html","5faba6a37363b4e9d385dda17eec0301"],["/hymns/deep-calls-to-deep/index.html","5745a41a36c701e5559b95a4a216c9eb"],["/hymns/ding-dong-merrily-on-high/index.html","de14e8aad10c3cbb9fcd0a3a5f790173"],["/hymns/do-this-in-memory-of-me/index.html","f9ece37befb67af73ce4b366441cb511"],["/hymns/enter-his-gates/index.html","42fae8292dd753794b69d37d6da59408"],["/hymns/every-morning/index.html","79d6800aa158c0ae7f147c00449aed5d"],["/hymns/father-we-adore-you/index.html","a90ae895e190377bed547b4c461afd53"],["/hymns/find-us-ready/index.html","5952a22ba19c3b1bf239369dca88b3b7"],["/hymns/from-the-depths/index.html","40bd6220334e3b2bf2558e7667114a81"],["/hymns/give-me-oil-in-my-lamp/index.html","0c4d8725da7b632a3cbcc1dbdf2d2f25"],["/hymns/give-thanks/index.html","903c5863ebb8ee98fd490347b8e6cad1"],["/hymns/glory-and-praise-to-our-god/index.html","db76d7bfc5f394ca798c7afbf8523332"],["/hymns/go-go-into-the-world/index.html","1b9074aec06b691c7c4d64f5bce1b010"],["/hymns/go-the-mass-is-ended/index.html","cde67a56843cc4567fe70062d1b5684a"],["/hymns/god-is-good-to-me/index.html","dd7c7d36d84fa63ba98b7058a1babfbc"],["/hymns/god-is-so-good/index.html","c5bbb7c7033dca31866e4bf0fee86de4"],["/hymns/god-rest-ye-merry-gentlemen/index.html","5cb5e61c137cdb8619d44489a09a644b"],["/hymns/great-indeed-are-your-works/index.html","be5eedf3c13269fbe341a2b13e034830"],["/hymns/great-things-happen/index.html","d45f3774e7ef0ac756a1504b5e1e47c5"],["/hymns/greater-love-and-friendship/index.html","9978bfabefd314151e45550cba844eea"],["/hymns/hail-holy-joseph-hail/index.html","3b26f24675f2f0fb33873a6e71d8b2cc"],["/hymns/hail-mary-full-of-grace/index.html","91626135e16b6871f524607e0a6752d6"],["/hymns/hail-to-thee-true-body-sprung/index.html","bfe61a35ff1df50f2fee4fb96d5f84d6"],["/hymns/he-is-lord/index.html","1ccfd18f85539c49c448492eea28c1a2"],["/hymns/hide-me-in-the-hollow-of-your-loving-hand/index.html","8f977004726a5be40649973756e4ad50"],["/hymns/his-name-is-higher/index.html","07521c64a7cd7f2bf8bdd5e4b70cabd9"],["/hymns/holy-god-we-praise-thy-name/index.html","5341cbc1b48db6fdaf7605cc3cc69f07"],["/hymns/holy-holy-holy-lord-god-almighty/index.html","2983c2f2eaf846ce9a4a9a770dc57f54"],["/hymns/holy-virgin/index.html","2008af63359fb6b404cc4c542e64f670"],["/hymns/how-i-rejoiced-when-i-heard-them-say/index.html","446c1484f77bb42d093e9dfbc416f283"],["/hymns/how-lovely-is-your-dwelling-place-o-lord/index.html","d106a283e8d5e81cabdce3a7267b0edf"],["/hymns/i-am-the-bread-of-life/index.html","c086cd3fbbeda56b418b8154528c1361"],["/hymns/i-am-the-light/index.html","4bb24895f8e2003f917c6609922986ec"],["/hymns/i-dare-not-sing/index.html","416ef3c1bcfd8c3dc04202659ec66933"],["/hymns/i-give-my-hands/index.html","23cb50dd7bcee5b149bb80a672b04201"],["/hymns/i-have-decided/index.html","d97e6ecda6de9eec47a7066f30ea8f32"],["/hymns/i-now-no-longer-live/index.html","be69248dc5d5e9cc5ba52f6c1859d037"],["/hymns/i-rejoiced-when-i-heard/index.html","fd82f7dfa95c84a93558816992d2d5b1"],["/hymns/i-will-play/index.html","a670c1fa32817c6ca096c4e051d59066"],["/hymns/i-will-sing-of-the-mercies/index.html","dd86e4f755df59e36a67cc95256d6297"],["/hymns/if-you-wish-to-be-my-disciple/index.html","f0f5cd445f82a6e63fd31956ba6aba2a"],["/hymns/ill-turn-my-steps/index.html","22b74405e7cdc720f6310e93c3ff6c73"],["/hymns/in-bread-we-bring-you-lord/index.html","dfab8c69a1120eafb4d46256bb26ba68"],["/hymns/in-his-time/index.html","690cb86924fa8ed5e3a8db35e82a396d"],["/hymns/in-the-bleak-mid-winter/index.html","5d23af34797b9d511e6edf253bf56ed1"],["/hymns/in-the-lord-is-my-hope/index.html","5c4cee086ceef9306341f771523955d1"],["/hymns/into-your-hands-we-commend-our-spirit/index.html","300b722f948d09908a7f8f5230fa8026"],["/hymns/it-came-upon-the-midnight-clear/index.html","5783ead12f39cb3d770914fa0d8e25e9"],["/hymns/it-was-six-days-before-the-passover/index.html","174137e9d32d574e47a66b547d23b29b"],["/hymns/ive-wandered-far-away-from-god/index.html","a6fedd58126b158025e91ee869ea6515"],["/hymns/jesus-always-loved-his-own/index.html","cbfc9f300c762fbf248ba20b102aef13"],["/hymns/jesus-come-jesus-come/index.html","dd85b7f29b6d0ae9e14cba1f4adeac13"],["/hymns/jesus-is-the-joy-of-living/index.html","29d322c25fbbaeef8d844f0fc8670cfe"],["/hymns/jesus-my-lord-my-god-my-all/index.html","96cc7f1e055553e6402a1c3b0a758f2b"],["/hymns/jesus-you-are-my-salvation/index.html","d412ccc77e1b79fac639bbea3f020b0d"],["/hymns/jesus-youre-the-sweetest-name-of-all/index.html","3080c7f0462bc827a1f0d048f1745c95"],["/hymns/just-like-a-child/index.html","35d6311df42b9d1af5f3d9bfea498ad6"],["/hymns/just-to-fix-our-eyes-on-jesus/index.html","a03706c4f15f33104adf3b3e845b9b62"],["/hymns/lay-your-hands/index.html","3a815a4ed79f698e05209bcf37c3ae0c"],["/hymns/let-it-be-done/index.html","dc8e64f775344a8e35670cc5c7ab3936"],["/hymns/let-there-be-glory-and-honour-to-mary/index.html","a40a344c0e2cf6c068ddf140828f02d7"],["/hymns/let-us-bow-in-adoration/index.html","1d921ba760eabdadf532c4594188e522"],["/hymns/lets-sing-to-our-mother/index.html","60d9b2a7ddad69e391ed268c6b0abe58"],["/hymns/listen-to-your-people/index.html","099f3f43ae0999977617c19f13d84e34"],["/hymns/living-waters-flow-on/index.html","a3c61ceac5d8ba8812e65ee421ee2644"],["/hymns/lord-make-me-like-you/index.html","15da275ae5ca6a16394dd8ee443c168a"],["/hymns/lord-you-are-my-everything/index.html","7c93097470aeea7548712a66a7fb7695"],["/hymns/lord-you-have-touched-my-heart/index.html","b15deee35a85aedef27bce3c2d230136"],["/hymns/lose-yourself-in-me/index.html","56eabe9f8c84eac4dbcca9ff4c79fdca"],["/hymns/love-has-captured-the-night/index.html","733b3c72b2f91aabe5718db899da303b"],["/hymns/make-me-a-servant/index.html","414958e06493a70e8117caea0343b7e5"],["/hymns/make-me-an-instrument/index.html","8816d47f32692b246481a08624ab0b01"],["/hymns/maranatha-maranatha-maranatha/index.html","01955552dc155789750bff01888312f4"],["/hymns/mary-from-thy-sacred-image/index.html","66ecf97bed87259ed2d1246f18077faa"],["/hymns/mother-dear-o-pray-for-me/index.html","6718fbf76ef48b68dde748ecc0f8bc43"],["/hymns/mother-dearest-mother-fairest/index.html","eb53263206046b44cf6070ea00b15c10"],["/hymns/mother-of-god-plead-with-your-son/index.html","d0d9db63c6382cd23c06af6f589568cf"],["/hymns/my-hearts-like-a-flute/index.html","431bef1ff80bdc13eb5e6d5cdfc130d0"],["/hymns/my-lord-he-died-for-a-kingdom/index.html","66981cf4bfa2cbadf7050b643d15dd4f"],["/hymns/my-soul-rejoices/index.html","18d3c817774783ede8c11d7e50e3d28c"],["/hymns/nearer-my-god-to-thee/index.html","a040954e9da9cbc5c5ee3a1a60645ded"],["/hymns/no-one-can-give-to-me-that-peace/index.html","9e281e7a39976a7b3a048cd1413f4f7b"],["/hymns/o-cross-erected/index.html","34108d0a1b2dd03158ff8a944143d2c9"],["/hymns/o-let-the-son-of-god-enfold-you/index.html","5ae2221aa9dc69825b7398a536bfad94"],["/hymns/o-lord-furnace-of-love/index.html","9473dd868f77d2de8c164a7167b8be1d"],["/hymns/o-maiden-will-you-be/index.html","f9fc79977fba37c8269a8746e6bccbc8"],["/hymns/o-sacrament-most-holy/index.html","bf22938bef33e009172618ec1bbe12fa"],["/hymns/on-a-hill-far-away/index.html","1485f0c819caae168a42ba7e74120642"],["/hymns/once-in-royal-davids-city/index.html","6130a36c5bbd1938d8562872ec90215f"],["/hymns/our-hearts-were-made-for-you-lord/index.html","f9da2a34c81aceea3d5ce95a75bd626c"],["/hymns/praise-him-praise-him/index.html","c69cf33572433884f01183547435b024"],["/hymns/ready-the-way/index.html","90bce9a7c509e718ee0231188f9821f0"],["/hymns/rejoice-evermore/index.html","16b93e3454c10b6dc8b8d319e17965ae"],["/hymns/shepherd-of-my-soul/index.html","e985f3434061e93c7698e24f6e3d9144"],["/hymns/sing-life-sing-love-sing-jesus/index.html","e077b72538042cde1745cb59fdc9266a"],["/hymns/sing-my-tongue/index.html","882864f33717e35e76f52ada46381729"],["/hymns/sons-of-god-hear-his-holy-word/index.html","00ef27ea8d51ab68cd428397720f0f56"],["/hymns/soul-of-my-saviour/index.html","95e66e73c2a44a9b07d0a0cf8dd6851e"],["/hymns/sweet-heart-of-jesus/index.html","164bab23f6a601727ff920d70dc89090"],["/hymns/sweet-sacrament-divine/index.html","abc765779746f77202b4a2c065f7deb0"],["/hymns/take-our-bread/index.html","f1fc4056b8ddba76246b806d5b51e6b2"],["/hymns/thank-you-lord-for-all-youve-done/index.html","f52887c7eb9826e6520ddfabda8a5d74"],["/hymns/thank-you-o-lord-your-love-is-boundless/index.html","a337bd36b1ee8dbd24ea57926e10a1da"],["/hymns/thanks-be-to-god/index.html","169e77f254fa2f49e20d836136e2e14d"],["/hymns/the-angel-gabriel-from-heaven-came/index.html","1a0b937695db43272df9df15b7370d49"],["/hymns/the-cup-of-blessing-that-we-raise/index.html","779b702a713970052261f642c101ca56"],["/hymns/the-lord-is-my-shepherd/index.html","89ac19712926dc3510d19b93c624a79d"],["/hymns/the-more-we-hear/index.html","47d8d626e47e4bfe72862d9324d41c80"],["/hymns/the-saviour-is-waiting/index.html","f716820ba794037725d5865fe71c118a"],["/hymns/the-steadfast-love/index.html","a5519c53aa192d3daa73d8ae8dc0a853"],["/hymns/then-sings-my-soul/index.html","7dbe1e36cf1ef0dd4f810b412cef8c92"],["/hymns/these-forty-days/index.html","2b2a0aa3f2a3801f7ef5a4fabb13ca35"],["/hymns/this-is-the-truth-sent-from-above/index.html","cbbb88b507a05667b857cadf0d0fb8ce"],["/hymns/though-the-mountains-may-fall/index.html","1d2ff934c35bfa25412b7367e01dcbf7"],["/hymns/walk-with-me-o-my-lord/index.html","10250720b39f7d157feb5c5cd5bfd01c"],["/hymns/water-water-and-the-spirit/index.html","973ae1a377d3e19df3919d7fcfae23ec"],["/hymns/we-offer-you-o-lord-divine/index.html","bc728275cfdc83df03d01e274a166466"],["/hymns/we-see-the-troubles-in-our-lives/index.html","ba88ad21effddd95da5a2dea19987635"],["/hymns/we-want-to-give-you-thanks-lord/index.html","a7274dd24b9b2b949683c3ec1e8a3f90"],["/hymns/what-sweeter-music-can-we-bring/index.html","6117d35b3957b8485fcc4baccdb17ff9"],["/hymns/whatsoever-you-do-to-the-least-of-my-people/index.html","0832ad568d8c14b0ad95b5bbfb877b93"],["/index.html","fd5576aeabdaab61a2b523118e8b3cf5"],["/launcher-icon-2x.png","cca0ab0996bddc2c0cc0e49729f7052c"],["/launcher-icon-3x.png","dcb209d58dc0df6f8092e0923caccc4e"],["/launcher-icon-4x.png","0f4d10f49de1df7e97c5dad8fe75486a"],["/mstile-150x150.png","47587bdf5a2aaa855b4c630ff1221cdf"],["/order-of-mass/index.html","ea4fcd3c78acc21f4ac8d0809bb23266"],["/public/css/lanyon.css","695bf0024f2c0135ecd2e28e3f8b648b"],["/public/css/poole.css","873c679adf2c9f354d10fcbfd3453cde"],["/public/css/site.css","c4aa4cf37ab37e5afd5924820efe82e1"],["/public/css/syntax.css","0d3adf5d678394205b2209489843b41e"],["/safari-pinned-tab.svg","297bbaf116ce5fdcf09d3953077e18d5"],["/service-worker-registration.js","a32718ebced9b80580b3fe5fc6495789"]];
var cacheName = 'sw-precache-v3--' + (self.registration ? self.registration.scope : '');


var ignoreUrlParametersMatching = [/^utm_/];



var addDirectoryIndex = function (originalUrl, index) {
    var url = new URL(originalUrl);
    if (url.pathname.slice(-1) === '/') {
      url.pathname += index;
    }
    return url.toString();
  };

var cleanResponse = function (originalResponse) {
    // If this is not a redirected response, then we don't have to do anything.
    if (!originalResponse.redirected) {
      return Promise.resolve(originalResponse);
    }

    // Firefox 50 and below doesn't support the Response.body stream, so we may
    // need to read the entire body to memory as a Blob.
    var bodyPromise = 'body' in originalResponse ?
      Promise.resolve(originalResponse.body) :
      originalResponse.blob();

    return bodyPromise.then(function(body) {
      // new Response() is happy when passed either a stream or a Blob.
      return new Response(body, {
        headers: originalResponse.headers,
        status: originalResponse.status,
        statusText: originalResponse.statusText
      });
    });
  };

var createCacheKey = function (originalUrl, paramName, paramValue,
                           dontCacheBustUrlsMatching) {
    // Create a new URL object to avoid modifying originalUrl.
    var url = new URL(originalUrl);

    // If dontCacheBustUrlsMatching is not set, or if we don't have a match,
    // then add in the extra cache-busting URL parameter.
    if (!dontCacheBustUrlsMatching ||
        !(url.pathname.match(dontCacheBustUrlsMatching))) {
      url.search += (url.search ? '&' : '') +
        encodeURIComponent(paramName) + '=' + encodeURIComponent(paramValue);
    }

    return url.toString();
  };

var isPathWhitelisted = function (whitelist, absoluteUrlString) {
    // If the whitelist is empty, then consider all URLs to be whitelisted.
    if (whitelist.length === 0) {
      return true;
    }

    // Otherwise compare each path regex to the path of the URL passed in.
    var path = (new URL(absoluteUrlString)).pathname;
    return whitelist.some(function(whitelistedPathRegex) {
      return path.match(whitelistedPathRegex);
    });
  };

var stripIgnoredUrlParameters = function (originalUrl,
    ignoreUrlParametersMatching) {
    var url = new URL(originalUrl);
    // Remove the hash; see https://github.com/GoogleChrome/sw-precache/issues/290
    url.hash = '';

    url.search = url.search.slice(1) // Exclude initial '?'
      .split('&') // Split into an array of 'key=value' strings
      .map(function(kv) {
        return kv.split('='); // Split each 'key=value' string into a [key, value] array
      })
      .filter(function(kv) {
        return ignoreUrlParametersMatching.every(function(ignoredRegex) {
          return !ignoredRegex.test(kv[0]); // Return true iff the key doesn't match any of the regexes.
        });
      })
      .map(function(kv) {
        return kv.join('='); // Join each [key, value] array into a 'key=value' string
      })
      .join('&'); // Join the array of 'key=value' strings into a string with '&' in between each

    return url.toString();
  };


var hashParamName = '_sw-precache';
var urlsToCacheKeys = new Map(
  precacheConfig.map(function(item) {
    var relativeUrl = item[0];
    var hash = item[1];
    var absoluteUrl = new URL(relativeUrl, self.location);
    var cacheKey = createCacheKey(absoluteUrl, hashParamName, hash, false);
    return [absoluteUrl.toString(), cacheKey];
  })
);

function setOfCachedUrls(cache) {
  return cache.keys().then(function(requests) {
    return requests.map(function(request) {
      return request.url;
    });
  }).then(function(urls) {
    return new Set(urls);
  });
}

self.addEventListener('install', function(event) {
  event.waitUntil(
    caches.open(cacheName).then(function(cache) {
      return setOfCachedUrls(cache).then(function(cachedUrls) {
        return Promise.all(
          Array.from(urlsToCacheKeys.values()).map(function(cacheKey) {
            // If we don't have a key matching url in the cache already, add it.
            if (!cachedUrls.has(cacheKey)) {
              var request = new Request(cacheKey, {credentials: 'same-origin'});
              return fetch(request).then(function(response) {
                // Bail out of installation unless we get back a 200 OK for
                // every request.
                if (!response.ok) {
                  throw new Error('Request for ' + cacheKey + ' returned a ' +
                    'response with status ' + response.status);
                }

                return cleanResponse(response).then(function(responseToCache) {
                  return cache.put(cacheKey, responseToCache);
                });
              });
            }
          })
        );
      });
    }).then(function() {
      
      // Force the SW to transition from installing -> active state
      return self.skipWaiting();
      
    })
  );
});

self.addEventListener('activate', function(event) {
  var setOfExpectedUrls = new Set(urlsToCacheKeys.values());

  event.waitUntil(
    caches.open(cacheName).then(function(cache) {
      return cache.keys().then(function(existingRequests) {
        return Promise.all(
          existingRequests.map(function(existingRequest) {
            if (!setOfExpectedUrls.has(existingRequest.url)) {
              return cache.delete(existingRequest);
            }
          })
        );
      });
    }).then(function() {
      
      return self.clients.claim();
      
    })
  );
});


self.addEventListener('fetch', function(event) {
  if (event.request.method === 'GET') {
    // Should we call event.respondWith() inside this fetch event handler?
    // This needs to be determined synchronously, which will give other fetch
    // handlers a chance to handle the request if need be.
    var shouldRespond;

    // First, remove all the ignored parameters and hash fragment, and see if we
    // have that URL in our cache. If so, great! shouldRespond will be true.
    var url = stripIgnoredUrlParameters(event.request.url, ignoreUrlParametersMatching);
    shouldRespond = urlsToCacheKeys.has(url);

    // If shouldRespond is false, check again, this time with 'index.html'
    // (or whatever the directoryIndex option is set to) at the end.
    var directoryIndex = 'index.html';
    if (!shouldRespond && directoryIndex) {
      url = addDirectoryIndex(url, directoryIndex);
      shouldRespond = urlsToCacheKeys.has(url);
    }

    // If shouldRespond is still false, check to see if this is a navigation
    // request, and if so, whether the URL matches navigateFallbackWhitelist.
    var navigateFallback = '/';
    if (!shouldRespond &&
        navigateFallback &&
        (event.request.mode === 'navigate') &&
        isPathWhitelisted([], event.request.url)) {
      url = new URL(navigateFallback, self.location).toString();
      shouldRespond = urlsToCacheKeys.has(url);
    }

    // If shouldRespond was set to true at any point, then call
    // event.respondWith(), using the appropriate cache key.
    if (shouldRespond) {
      event.respondWith(
        caches.open(cacheName).then(function(cache) {
          return cache.match(urlsToCacheKeys.get(url)).then(function(response) {
            if (response) {
              return response;
            }
            throw Error('The cached response that was expected is missing.');
          });
        }).catch(function(e) {
          // Fall back to just fetch()ing the request if some unexpected error
          // prevented the cached response from being valid.
          console.warn('Couldn\'t serve response for "%s" from cache: %O', event.request.url, e);
          return fetch(event.request);
        })
      );
    }
  }
});








import {
  testOgImage,
  testPageLoad,
  testVisualRegression,
} from '#tests/e2e/utils/tests'

const PAGE_PATH = '/docs/legal/privacy'

testPageLoad(PAGE_PATH)
testOgImage({
  dynamic: {
    de: 'a_VIBETYPEs+Logo.,c_Default.takumi,description_~RmluZGUgVmVyYW5zdGFsdHVuZ2VuLCBHw6RzdGUgdW5kIEZyZXVuZGUg8J-SmeKdpO-4j~Cfkpo,title_~RGF0ZW5zY2h1dHplcmtsw6RydW5n,p_Ii9kZS9kb2NzL2xlZ2FsL3ByaXZhY3ki.png',
    en: `a_VIBETYPE's+logo.,c_Default.takumi,description_~RmluZCBldmVudHMsIGd1ZXN0cyBhbmQgZnJpZW5kcyDwn5KZ4p2k77iP8J-Smg,title_Privacy+Policy,p_Ii9kb2NzL2xlZ2FsL3ByaXZhY3ki.png`,
  },
})
testVisualRegression(PAGE_PATH)

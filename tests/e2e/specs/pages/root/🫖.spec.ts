import {
  testOgImage,
  testPageLoad,
  testVisualRegression,
} from '#tests/e2e/utils/tests'

const PAGE_PATH = '/%F0%9F%AB%96'

testOgImage({
  dynamic: {
    de: 'a_VIBETYPEs+Logo.,c_Default.takumi,description_~RmluZGUgVmVyYW5zdGFsdHVuZ2VuLCBHw6RzdGUgdW5kIEZyZXVuZGUg8J-SmeKdpO-4j~Cfkpo,title_Ich+bin+eine+Teekanne,p_Ii9kZS8lRjAlOUYlQUIlOTYi.png',
    en: `a_VIBETYPE's+logo.,c_Default.takumi,description_~RmluZCBldmVudHMsIGd1ZXN0cyBhbmQgZnJpZW5kcyDwn5KZ4p2k77iP8J-Smg,title_I'm+a+teapot,p_Ii8lRjAlOUYlQUIlOTYi.png`,
  },
})
testPageLoad(PAGE_PATH, 418)
testVisualRegression(PAGE_PATH)

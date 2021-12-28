export const state = () => ({
  languages: {
    'hk': ['en', 'zh-cn']
  },
  lang: 'zh-cn',
  region: 'hk'
})
export const mutations = {
  SET_LANG(state, lang) {
    if (state.languages[state.region].indexOf(lang) !== -1) {
      state.lang = lang
    }
  },
  SET_REGION(state, region) {
    if (typeof (state.languages[region]) !== 'undefined') {
      state.region = region
    }
  }
}

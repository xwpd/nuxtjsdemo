/*
 * 1. sets i18n.locale and state.locale if possible
 * 2. redirects if not with locale
 */
export default function ({
                           isHMR, app, store, route, params, error, redirect
                         }) {
  // based on directory structure _lang/xxxx, en/about has params.lang as "en"
  const lang = params.lang || store.state.lang;
  const region = params.region || store.state.region;

  if (isHMR) { // ignore if called from hot module replacement
    return;
  } // if url does not have language, redirect to english
  else if (!params.region) {
    let uri = '/' + region + '/' + lang + route.fullPath;
    uri = uri.replace(/\/\/$/g, '/')
    return redirect(uri);
  } else if (!params.lang) {
    let uri = route.fullPath.replace('/' + region, '')
    uri = '/' + region + '/' + lang + '/' + uri
    uri = uri.replace(/\/\/$/g, '/')
    return redirect(uri);
  } else if (route.fullPath === '/' + region + '/' + lang) {
    return redirect('/' + region + '/' + lang + '/');
  }

  store.commit('SET_REGION', region); // set store
  store.commit('SET_LANG', lang); // set store
  app.i18n.locale = store.state.lang;
}

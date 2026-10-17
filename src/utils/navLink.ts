// 홈이 아닌 페이지에서는 '#work' 같은 앵커를 '/#work'로 바꿔줌 (#contact는 그대로)
export const resolveNavHref = (url: string, isHome: boolean) =>
  !isHome && url.startsWith('#') && url.length > 1 && url !== '#contact' ? `/${url}` : url;

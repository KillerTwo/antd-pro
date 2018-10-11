// use localStorage to store the authority info, which might be sent from server in actual project.
// 获取用户拥有的权限，如果传递参数，则将参数做为权限，否则从localStorage中获取权限
export function getAuthority(str) {
  // return localStorage.getItem('antd-pro-authority') || ['admin', 'user'];

  // 从localStorage中取出形如['admin']这样的数据
  const authorityString =
    typeof str === 'undefined' ? localStorage.getItem('antd-pro-authority') : str;
  // authorityString could be admin, "admin", ["admin"]
  let authority;
  try {
    // json字符串转换为js对象（数组或对象）
    authority = JSON.parse(authorityString);
  } catch (e) {
    authority = authorityString;
  }
  if (typeof authority === 'string') {
    return [authority];
  }
  // 在该方法中需要返回形如['admin']这样的数据。
  return authority || ['admin'];
}
// 将登录后用户的权限设置到localStorage中
export function setAuthority(authority) {
  const proAuthority = typeof authority === 'string' ? [authority] : authority;
  // 将形如['admin']这样的数据存入到localStorage
  return localStorage.setItem('antd-pro-authority', JSON.stringify(proAuthority));
}

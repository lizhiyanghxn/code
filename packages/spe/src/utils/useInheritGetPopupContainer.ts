import { useContext } from 'react';
import { ConfigProvider } from 'antd';

/** 获取组件上层最近的antd的ConfigProvider的getPopupContainer方法 */
function useInheritGetPopupContainer() {
  const antdConfigContext = useContext(ConfigProvider.ConfigContext);
  const inheritGetPopupContainer = antdConfigContext.getPopupContainer || (() => document.body);
  return inheritGetPopupContainer;
}

export default useInheritGetPopupContainer;

export type HeightMotionType = {
  visible: boolean; // 显示与隐藏
  children?: any; // 子元素
  motionConfig?: object; // 自定义 motion 的配置
  removeOnLeave?: boolean; // 隐藏时是否删除元素
};

---
title: 文案提示组件 CommonTip
group:
  title: 基础业务组件
  path: /components
nav:
  path: /spe
  title: SPE 组件
---

## CommonTip

CommonTip 是 SPE 风格的通用文案提示组件

### 基本使用

<code src="./demos/basic.tsx" />

### API

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| text | 提示文字 | `string` | '' |
| placement | 气泡框位置，可选 top left right bottom topLeft topRight bottomLeft bottomRight leftTop leftBottom rightTop rightBottom | `string` | 'top' |
| type | icon 类型，1：问号 2：感叹号 3：更多 | `string` | '1' |
| fontSize | icon 字体大小 | number | 14 |
| style | icon 的样式 | `ElementCSSInlineStyle` | {} |

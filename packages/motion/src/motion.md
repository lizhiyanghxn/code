---
title: HeightMotion - 展开动画
order: 1
group:
  path: /
nav:
  title: 组件
  path: /components
---

# HeightMotion

提供展开和收起动画。

## 代码演示

```javascript
import HeightMotion from '@dcp-fe/dcp-motion';

export default function Demo() {

  const [visible, setVisible] = useState(false);

  return (
    <HeightMotion visible={visible}>
      <div>内容区</div>
    </HeightMotion>;
  )
}

```

### 基础用法

<code src="./demos/heightMotion.tsx" background="#f0f2f5" />

## API

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| visible | 显示和隐藏 | `boolean` | false |
| removeOnLeave | 隐藏时是否删除元素 | `boolean` | false |
| motionConfig | 自定义 motion 的配置（见 [rc-motion](https://www.npmjs.com/package/rc-motion)） | `object` | {} |

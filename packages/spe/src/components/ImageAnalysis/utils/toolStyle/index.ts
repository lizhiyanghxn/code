import _ from 'lodash';

export const NULL_COLOR = 'rgba(204, 204, 204, 1)';
/**
 * @index0 紫：rgba(153, 51, 255, 1)
 * @index4 绿：rgba(51, 254, 51, 1)
 * @index1 粉：rgba(255, 51, 255, 1)
 * @index5 浅绿：rgba(204, 255, 51, 1)
 * @index2 蓝：rgba(51, 153, 255, 1)
 * @index6 橙：rgba(255, 153, 51, 1)
 * @index3 浅蓝：rgba(51, 255, 238, 1)
 * @index7 黄：rgba(255, 221, 51, 1)
 */
export const COLORS_ARRAY = [
  'rgba(153, 51, 255, 1)',
  'rgba(51, 254, 51, 1)',
  'rgba(255, 51, 255, 1)',
  'rgba(204, 255, 51, 1)',
  'rgba(51, 153, 255, 1)',
  'rgba(255, 153, 51, 1)',
  'rgba(51, 255, 238, 1)',
  'rgba(255, 221, 51, 1)',
];

export const DEFAULT_COLOR = {
  valid: {
    stroke: 'rgba(102, 111, 255, 0.6)',
    fill: 'rgba(102, 111, 255, 0.3)',
  },
  invalid: {
    stroke: 'rgba(255, 153, 102,1)',
    fill: 'rgba(255, 153, 102, 0.5)',
  },
  validSelected: {
    stroke: 'rgba(0, 15, 255, 0.8)',
    fill: 'rgba(0, 15, 255, 0.4)',
  },
  invalidSelected: {
    stroke: 'rgba(255, 0, 0, 0.6)',
    fill: 'rgba(255, 0, 0, 0.3)',
  },
  validHover: {
    stroke: 'rgba(0, 15, 255, 1)',
    fill: 'rgba(0, 15, 255, 0.5)',
  },

  invalidHover: {
    stroke: 'rgba(255, 0, 0, 1)',
    fill: 'rgba(255, 0, 0, 0.5)',
  },
};

export const CHANGE_COLOR = {
  1: {
    valid: 'rgba(0, 0, 255, 0.5)',
    select: {
      stroke: 'rgba(0, 15, 255, 1)',
      fill: 'rgba(0,15,255, 1)',
    },
    hover: 'rgba(0, 15, 255, 0.8)',
    line: 'rgba(102, 111, 255, 1 )',
  },
  3: {
    valid: 'rgba(0, 255, 255, 0.5)',
    select: {
      stroke: 'rgba(0, 212, 255,  1)',
      fill: 'rgba(0,212,255, 1)',
    },
    hover: 'rgba(0, 212, 255, 0.8)',
    line: 'rgba(102, 230, 255, 1)',
  },
  5: {
    valid: 'rgba(0, 255, 0, 0.5)',
    select: {
      stroke: 'rgba(149, 255, 1)',
      fill: 'rgba(149,255,0, 1)',
    },
    hover: 'rgba(149, 255, 0, 0.8)',
    line: 'rgba(191, 255, 102, 1)',
  },
  7: {
    valid: 'rgba(255, 255, 0, 0.5)',
    select: {
      stroke: 'rgba(255, 230, 102, 1)',
      fill: 'rgba(255,213,0, 1)',
    },
    hover: 'rgba(255, 230, 102, 0.8)',
    line: 'rgba(255, 230, 102, 1)',
  },
  9: {
    valid: 'rgba(255, 0, 255, 0.5)',
    select: {
      stroke: 'rgba(230, 102, 255, 1)',
      fill: 'rgba(213,0,255, 1)',
    },
    hover: 'rgba(230, 102, 255, 0.8)',
    line: 'rgba(230, 102, 255, 1)',
  },
};

const FILL_OPACITY = 0.8;
export const changeOpacity = {
  1: 0.2,
  3: 0.4,
  5: 0.6,
  7: 0.8,
  9: 1.0,
};

// 计算透明度
const computeOpacity = (opacity: number, color: string) => {
  const firstOpacity = color
    .split(' ')
    .join('')
    .match(/,[0-9]+([.]{1}[0-9]+){0,1}\)/)![0]
    .match(/[0-9]+([.]{1}[0-9]+){0,1}/)![0];
  return changeOpacity[opacity] * Number(firstOpacity);
};

export const colorSplit = (color: string, opacity: number) =>
  color
    .split(' ')
    .join('')
    .replace(/,[0-9]+([.]{1}[0-9]+){0,1}\)/, `,${opacity.toFixed(2)})`);

export const getToolColors = (opacity = 9) => {
  const toolColor = _.cloneDeep(CHANGE_COLOR);
  Object.keys(CHANGE_COLOR).forEach((color) => {
    const showColor = _.cloneDeep(DEFAULT_COLOR);
    showColor.valid.stroke = colorSplit(
      CHANGE_COLOR[color].valid,
      computeOpacity(opacity, CHANGE_COLOR[color].valid),
    );
    showColor.valid.fill = colorSplit(
      CHANGE_COLOR[color].valid,
      computeOpacity(opacity, CHANGE_COLOR[color].valid) * FILL_OPACITY,
    );
    showColor.validSelected.stroke = colorSplit(
      CHANGE_COLOR[color].select.stroke,
      computeOpacity(opacity, CHANGE_COLOR[color].select.stroke),
    );
    showColor.validSelected.fill = colorSplit(
      CHANGE_COLOR[color].select.fill,
      computeOpacity(opacity, CHANGE_COLOR[color].select.fill) * FILL_OPACITY,
    );
    showColor.validHover.stroke = colorSplit(
      CHANGE_COLOR[color].hover,
      computeOpacity(opacity, CHANGE_COLOR[color].hover),
    );
    showColor.validHover.fill = colorSplit(
      CHANGE_COLOR[color].hover,
      computeOpacity(opacity, CHANGE_COLOR[color].hover) * FILL_OPACITY,
    );

    // 无效的比例是一样的
    showColor.invalid.stroke = colorSplit(
      showColor.invalid.stroke,
      computeOpacity(opacity, showColor.invalid.stroke),
    );
    showColor.invalid.fill = colorSplit(
      showColor.invalid.stroke,
      computeOpacity(opacity, showColor.invalid.stroke) * FILL_OPACITY,
    );
    showColor.invalidSelected.stroke = colorSplit(
      showColor.invalidSelected.stroke,
      computeOpacity(opacity, showColor.invalidSelected.stroke),
    );
    showColor.invalidSelected.fill = colorSplit(
      showColor.invalidSelected.fill,
      computeOpacity(opacity, showColor.invalidSelected.fill) * FILL_OPACITY,
    );
    showColor.invalidHover.stroke = colorSplit(
      showColor.invalidHover.stroke,
      computeOpacity(opacity, showColor.invalidHover.fill),
    );
    showColor.invalidHover.fill = colorSplit(
      showColor.invalidHover.fill,
      computeOpacity(opacity, showColor.invalidHover.fill) * FILL_OPACITY,
    );
    toolColor[color] = showColor;
  });
  return toolColor;
};

export const getAttributeColors = (opacity = 9) => {
  let AttributeColorList = _.cloneDeep(COLORS_ARRAY);
  AttributeColorList.unshift(NULL_COLOR);
  AttributeColorList = AttributeColorList.map((item) => {
    const showColor = JSON.parse(JSON.stringify(DEFAULT_COLOR));
    showColor.valid.stroke = colorSplit(item, computeOpacity(opacity, item));
    showColor.valid.fill = colorSplit(item, computeOpacity(opacity, item) * FILL_OPACITY * 0.5);
    showColor.validSelected.stroke = colorSplit(item, computeOpacity(opacity, item));
    showColor.validSelected.fill = colorSplit(item, computeOpacity(opacity, item) * FILL_OPACITY);
    showColor.validHover.stroke = colorSplit(item, computeOpacity(opacity, item));
    showColor.validHover.fill = colorSplit(item, computeOpacity(opacity, item) * FILL_OPACITY);
    showColor.invalid.stroke = colorSplit(showColor.invalid.stroke, computeOpacity(opacity, item));
    showColor.invalid.fill = colorSplit(
      showColor.invalid.fill,
      computeOpacity(opacity, item) * FILL_OPACITY * 0.5,
    );
    showColor.invalidSelected.stroke = colorSplit(
      showColor.invalidSelected.stroke,
      computeOpacity(opacity, item),
    );
    showColor.invalidSelected.fill = colorSplit(
      showColor.invalidSelected.fill,
      computeOpacity(opacity, item) * FILL_OPACITY,
    );
    showColor.invalidHover.stroke = colorSplit(
      showColor.invalidHover.stroke,
      computeOpacity(opacity, item),
    );
    showColor.invalidHover.fill = colorSplit(
      showColor.invalidHover.fill,
      computeOpacity(opacity, item) * FILL_OPACITY,
    );
    return showColor;
  });
  return AttributeColorList;
};

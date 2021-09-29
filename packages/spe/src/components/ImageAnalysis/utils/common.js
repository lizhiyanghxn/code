import _ from 'lodash';
import colorPalette from './tool-style/colorPalette';

export const jsonParser = (content, defaultValue = {}) => {
  try {
    if (typeof content === 'string') {
      return JSON.parse(content);
    }
    return content || defaultValue;
  } catch (e) {
    return defaultValue;
  }
};

export function swapArr(arr, i, j) {
  const temp = arr[i];
  arr[i] = arr[j];
  arr[j] = temp;
}

/** Arr1中将存在于arr2的元素换到末尾 */
export function setArrBack(arr1 = [], arr2 = [], valKey = '') {
  let index = 0;
  for (let i = 0; i < arr1.length; i++) {
    if (!arr2.includes(arr1[i]) && !arr2.includes(arr1[i][valKey])) {
      swapArr(arr1, i, index);
      index++;
    }
  }
}

// export const withinRange = (value, range) => {
//   const min = Math.min(...range)
//   const max = Math.max(...range)
//   if (value > max) {
//     return max
//   }
//   if (value < min) {
//     return min
//   }
//   return value
// }

/**
 * 射线法判断点是否在多边形内部
 *
 * @param {Object} p 待判断的点，格式：{ x: X坐标, y: Y坐标 }或者"170 21"
 * @param {Array} poly 多边形顶点，数组成员的格式同p[]
 * @returns {Boolean} 点 p 和多边形 poly 的几何关系
 */
export function isPointInPolygon(p, poly) {
  if (typeof p === 'string') {
    p = {
      x: p.split(' ')[0],
      y: p.split(' ')[1],
    };
  }
  const px = p.x;
  const py = p.y;
  let flag = false;

  for (let i = 0, l = poly.length, j = l - 1; i < l; j = i, i++) {
    if (typeof poly[i] === 'string') {
      poly[i] = {
        x: poly[i].split(' ')[0],
        y: poly[i].split(' ')[1],
      };
    }
    const sx = poly[i].x;
    const sy = poly[i].y;
    const tx = poly[j].x;
    const ty = poly[j].y;

    // 点与多边形顶点重合
    if ((sx === px && sy === py) || (tx === px && ty === py)) {
      return true;
    }

    // 判断线段两端点是否在射线两侧
    if ((sy < py && ty >= py) || (sy >= py && ty < py)) {
      // 线段上与射线 Y 坐标相同的点的 X 坐标
      const x = sx + ((py - sy) * (tx - sx)) / (ty - sy);
      // 点在多边形的边上
      if (x === px) {
        return true;
      }
      // 射线穿过多边形的边界
      if (x > px) {
        flag = !flag;
      }
    }
  }

  // 射线穿过多边形边界的次数为奇数时点在多边形内
  return flag;
}

/** Base64图片计算标签 */
export function getLabels(modelTagsList, base64) {
  return new Promise((resolve) => {
    const canvas = document.createElement('canvas');
    const image = new Image();
    const result = [];
    image.onload = () => {
      canvas.width = image.width;
      canvas.height = image.height;
      const ctx = canvas.getContext('2d');
      ctx.drawImage(image, 0, 0);
      const imgData = ctx.getImageData(0, 0, canvas.width, canvas.height).data;
      for (let i = 0; i < imgData.length; i++) {
        if ((i + 1) % 4 !== 0) {
          result.push(imgData[i]);
        }
      }
      const uniqeKeys = [...new Set(result)];
      const classList = uniqeKeys?.map((key) => modelTagsList[key])?.filter((item) => !!item);
      resolve(classList);
    };
    image.src = `data:image/png;base64,${base64}`;
  });
}

/** Mask图加颜色和透明度 */
export function drawAlphaMask(dataUrl) {
  return new Promise((resolve) => {
    const image = new Image();
    const canvas = document.createElement('canvas');

    image.onload = () => {
      canvas.width = image.width;
      canvas.height = image.height;
      const ctx = canvas.getContext('2d');
      ctx.drawImage(image, 0, 0, image.width, image.height);
      const imgData = ctx.getImageData(0, 0, canvas.width, canvas.height);
      for (let i = 0; i < imgData.data.length; i += 4) {
        const val = imgData.data[i];
        const rgbColor = colorPalette[val] || [val, val, val];
        imgData.data[i] = rgbColor[0];
        imgData.data[i + 1] = rgbColor[1];
        imgData.data[i + 2] = rgbColor[2];
        imgData.data[i + 3] = 70;
      }
      ctx.putImageData(imgData, 0, 0); // 将获取的图片数据放回去。
      resolve(canvas.toDataURL());
    };
    image.src = dataUrl;
  });
}

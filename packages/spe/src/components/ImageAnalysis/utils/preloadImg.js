const DEFAULT_PRELOAD_SIZE = 10;
const DEFAULT_PRELOAD_CACHE = 3;
// interface IFileList {
//   id: number;
//   path: string;
//   url: string;
//   result: string;
//   auditStatus: number;
//   processedUrl: string;
//   preAnnotationJsonUrl: string; // 预标注数据的文件路径
//   preResult?: string; // 预标注数据
//   auditResults?: any[];
// }

/* 使用url获取图片的base64 */
const getImageBase64 = (url, callback) => {
  const xhr = new XMLHttpRequest();
  xhr.onload = () => {
    const reader = new FileReader();
    reader.onloadend = () => {
      callback(reader?.result);
    };
    reader.readAsDataURL(xhr.response);
  };
  xhr.open('GET', url);
  xhr.responseType = 'blob';
  xhr.send();
  xhr.onerror = () => {
    console.error('Load image error', url);
  };
  // const img = new Image()
  // img.onload = () => {
  //   const canvas = document.createElement('canvas')
  //   canvas.height = img.height
  //   canvas.width = img.width
  //   const ctx = canvas.getContext('2d')
  //   ctx.drawImage(img, 0, 0)
  //   console.log(canvas.toDataURL()) // 输出 Data URI
  //   callback(canvas.toDataURL())
  //   document.removeChild(canvas)
  // }
  // img.src = url
  // img.setAttribute('crossOrigin', 'Anonymous')
};

export const createImageElement = (url = '') =>
  new Promise((resolve, reject) => {
    const image = new Image();
    image.src = url;
    image.onload = () => {
      resolve(image);
    };
    image.onerror = () => {
      // 无返回则默认为空
      reject();
    };
  });
/**
 * 图片缓存管理
 *
 * @param：cachesize 缓存图片的范围, 如:index = 1, 范围为 [index - cacheSize, index + cacheSize]
 */
class ImageManager {
  static imgListMap = new Map();

  static empty() {
    ImageManager.imgListMap = new Map();
  }

  static getImageNode(imgList, imgIndex) {
    const imageUrl = ImageManager.getUrl(imgList, imgIndex);
    // 暂时不要图片base64缓存（有跨域问题）
    // ImageManager.updateCache(imgList, imgIndex)
    // if (ImageManager.hadPreload(imgList, imgIndex)) {
    //   return createImageElement(ImageManager.imgListMap.get(imageUrl) || imageUrl)
    // }
    return createImageElement(imageUrl);
  }

  static getUrl(imgList, imgIndex) {
    try {
      return imgList[imgIndex].url;
    } catch (e) {
      return '';
    }
  }

  static updateCache(imgList, imgIndex) {
    if (ImageManager.checkNeedPreLoad(imgList, imgIndex)) {
      ImageManager.addToMap(imgList, imgIndex);
    }
  }

  static addToMap(imgList, imgIndex) {
    const { page, size } = ImageManager.getPageSize(imgList, imgIndex);
    const cacheList = imgList.slice(page * size, page * size + DEFAULT_PRELOAD_SIZE);
    cacheList.forEach((item) => {
      getImageBase64(item.url, (base64) => {
        ImageManager.imgListMap.set(item.url, base64);
      });
    });
  }

  static getPageSize = (imgList, imgIndex) => {
    let page = parseInt(imgIndex / DEFAULT_PRELOAD_SIZE, 10);
    if (
      ImageManager.needLateLoad(imgList, imgIndex) &&
      ImageManager.hadPreload(imgList, imgIndex)
    ) {
      page++;
    } else if (
      ImageManager.needPreLoad(imgList, imgIndex) &&
      ImageManager.hadPreload(imgList, imgIndex)
    ) {
      page--;
    }
    return {
      page,
      size: DEFAULT_PRELOAD_SIZE,
    };
  };

  static hadPreload = (imgList, imgIndex) => {
    const imageUrl = ImageManager.getUrl(imgList, imgIndex);
    return ImageManager.imgListMap.get(imageUrl);
  };

  static needPreLoad = (imgList, imgIndex) => {
    const imageUrl = ImageManager.getUrl(imgList, imgIndex - DEFAULT_PRELOAD_CACHE || 0);
    return !ImageManager.imgListMap.get(imageUrl);
  };

  static needLateLoad = (imgList, imgIndex) => {
    const imageUrl = ImageManager.getUrl(imgList, imgIndex + DEFAULT_PRELOAD_CACHE);
    return !ImageManager.imgListMap.get(imageUrl);
  };

  static checkNeedPreLoad = (imgList, imgIndex) =>
    ImageManager.needPreLoad(imgList, imgIndex) || ImageManager.needLateLoad(imgList, imgIndex);
}

export default ImageManager;

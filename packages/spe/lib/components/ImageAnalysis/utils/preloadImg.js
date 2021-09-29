"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.createImageElement = void 0;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var DEFAULT_PRELOAD_SIZE = 10;
var DEFAULT_PRELOAD_CACHE = 3; // interface IFileList {
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

var getImageBase64 = function getImageBase64(url, callback) {
  var xhr = new XMLHttpRequest();

  xhr.onload = function () {
    var reader = new FileReader();

    reader.onloadend = function () {
      callback(reader === null || reader === void 0 ? void 0 : reader.result);
    };

    reader.readAsDataURL(xhr.response);
  };

  xhr.open('GET', url);
  xhr.responseType = 'blob';
  xhr.send();

  xhr.onerror = function () {
    console.error('Load image error', url);
  }; // const img = new Image()
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

var createImageElement = function createImageElement() {
  var url = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
  return new Promise(function (resolve, reject) {
    var image = new Image();
    image.src = url;

    image.onload = function () {
      resolve(image);
    };

    image.onerror = function () {
      // 无返回则默认为空
      reject();
    };
  });
};
/**
 * 图片缓存管理
 *
 * @param：cachesize 缓存图片的范围, 如:index = 1, 范围为 [index - cacheSize, index + cacheSize]
 */


exports.createImageElement = createImageElement;

var ImageManager = /*#__PURE__*/function () {
  function ImageManager() {
    _classCallCheck(this, ImageManager);
  }

  _createClass(ImageManager, null, [{
    key: "empty",
    value: function empty() {
      ImageManager.imgListMap = new Map();
    }
  }, {
    key: "getImageNode",
    value: function getImageNode(imgList, imgIndex) {
      var imageUrl = ImageManager.getUrl(imgList, imgIndex); // 暂时不要图片base64缓存（有跨域问题）
      // ImageManager.updateCache(imgList, imgIndex)
      // if (ImageManager.hadPreload(imgList, imgIndex)) {
      //   return createImageElement(ImageManager.imgListMap.get(imageUrl) || imageUrl)
      // }

      return createImageElement(imageUrl);
    }
  }, {
    key: "getUrl",
    value: function getUrl(imgList, imgIndex) {
      try {
        return imgList[imgIndex].url;
      } catch (e) {
        return '';
      }
    }
  }, {
    key: "updateCache",
    value: function updateCache(imgList, imgIndex) {
      if (ImageManager.checkNeedPreLoad(imgList, imgIndex)) {
        ImageManager.addToMap(imgList, imgIndex);
      }
    }
  }, {
    key: "addToMap",
    value: function addToMap(imgList, imgIndex) {
      var _ImageManager$getPage = ImageManager.getPageSize(imgList, imgIndex),
          page = _ImageManager$getPage.page,
          size = _ImageManager$getPage.size;

      var cacheList = imgList.slice(page * size, page * size + DEFAULT_PRELOAD_SIZE);
      cacheList.forEach(function (item) {
        getImageBase64(item.url, function (base64) {
          ImageManager.imgListMap.set(item.url, base64);
        });
      });
    }
  }]);

  return ImageManager;
}();

ImageManager.imgListMap = new Map();

ImageManager.getPageSize = function (imgList, imgIndex) {
  var page = parseInt(imgIndex / DEFAULT_PRELOAD_SIZE, 10);

  if (ImageManager.needLateLoad(imgList, imgIndex) && ImageManager.hadPreload(imgList, imgIndex)) {
    page++;
  } else if (ImageManager.needPreLoad(imgList, imgIndex) && ImageManager.hadPreload(imgList, imgIndex)) {
    page--;
  }

  return {
    page: page,
    size: DEFAULT_PRELOAD_SIZE
  };
};

ImageManager.hadPreload = function (imgList, imgIndex) {
  var imageUrl = ImageManager.getUrl(imgList, imgIndex);
  return ImageManager.imgListMap.get(imageUrl);
};

ImageManager.needPreLoad = function (imgList, imgIndex) {
  var imageUrl = ImageManager.getUrl(imgList, imgIndex - DEFAULT_PRELOAD_CACHE || 0);
  return !ImageManager.imgListMap.get(imageUrl);
};

ImageManager.needLateLoad = function (imgList, imgIndex) {
  var imageUrl = ImageManager.getUrl(imgList, imgIndex + DEFAULT_PRELOAD_CACHE);
  return !ImageManager.imgListMap.get(imageUrl);
};

ImageManager.checkNeedPreLoad = function (imgList, imgIndex) {
  return ImageManager.needPreLoad(imgList, imgIndex) || ImageManager.needLateLoad(imgList, imgIndex);
};

var _default = ImageManager;
exports.default = _default;
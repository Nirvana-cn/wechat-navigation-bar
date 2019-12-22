const app = getApp();
const DEFAULT_ANDROID_HEIGHT = '48';
const DEFAULT_APPLE_HEIGHT = '44';

Component({

  /**
   * 组件的属性列表
   */
  properties: {
    title: {
      type: String,
      value: '标题'
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    desc: '用户中心',
    statusBarHeight: '',
    titleHeight: '',
    totalHeight: ''
  },

  /**
   * 组件的方法列表
   */
  methods: {

    /**
     * 判断是否为iPhone
     */
    isApplePhone: function(model) {
      return model.includes('iPhone');
    },

    /**
     * 判断当前路由栈是否只有一个页面
     */
    onlyOnePage: function(pages) {
      if (pages.length === 1) {
        return true;
      } else {
        return false;
      }
    },

    /**
     * 点击个人中心进行跳转
     */
    openUserCenter: function() {
      
    }
  },

  lifetimes: {
    attached: function() {
      let systemInfo = wx.getSystemInfoSync();
      let statusBarHeight = systemInfo.statusBarHeight;
      let titleHeight = DEFAULT_ANDROID_HEIGHT;
      if (this.isApplePhone(systemInfo.model)) {
        titleHeight = DEFAULT_APPLE_HEIGHT;
      }
      this.setData({
        statusBarHeight,
        titleHeight,
        totalHeight: Number.parseInt(statusBarHeight) + Number.parseInt(titleHeight)
      });
    }
  }
});
export default class Browser {
   static getDeviceType() {
      this.device = {
        mobile:
          /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
            navigator.userAgent
          ),
      }

      if (this.device.mobile) return 'mobile';

      return 'desktop';
   }
}

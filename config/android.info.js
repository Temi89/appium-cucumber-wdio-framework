class AndroidInfo {
    static deviceName() {
        return 'EMULATOR32X1X12X0'; // pass the udid or devicename : adb shell getprop ro.serialno
    }

    static platFormVersion() {
        return '14.0'; // pass the platform version
    }

    static appName() {
        return 'wikipedia.apk'; // pass the apk name
    }
}

module.exports = AndroidInfo;

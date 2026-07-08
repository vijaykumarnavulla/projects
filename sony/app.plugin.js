// app.plugin.js
module.exports = (config) => {
  return {
    ...config,
    ios: {
      ...config.ios,
      infoPlist: {
        ...config.ios?.infoPlist,
        NSLocalNetworkUsageDescription: 'Needs local network access for device discovery'
      }
    },
    android: {
      ...config.android,
      permissions: [
        ...(config.android?.permissions || []),
        'android.permission.ACCESS_NETWORK_STATE',
        'android.permission.ACCESS_WIFI_STATE',
        'android.permission.CHANGE_WIFI_MULTICAST_STATE'
      ]
    }
  };
};
/*global cordova, module*/

module.exports = {
    message: function (name, successCallback, errorCallback) {
        cordova.exec(successCallback, errorCallback, "Hello", "message", [name]);
    }
};

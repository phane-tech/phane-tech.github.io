// importing the notifications library
import Notify from "simple-notify";

// Options hard coded from the app
let themeOptions = {
    effect:"slide",
    speed: 400,
    showIcon: true,
    showCloseButton: true,
    autoclose: true,
    autotimeout: 8000,
    notificationsGap: 10,
    notificationsPadding: 16,
    type: 'outline',
    position: 'right top',
};
// To show the toast message and we can override the above options
export function showNotification(additionalProps){
    new Notify({
        // default options provided
        ...themeOptions,
        // Additional options provided
        ...(additionalProps || {})
    })
}
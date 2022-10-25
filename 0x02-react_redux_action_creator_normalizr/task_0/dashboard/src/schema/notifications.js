import notifications from 'dashboard/src/schema/notifications';

const data = require('./notification.json');

const getAllNotificationsByUser = (userId) => {
    const userNotifications = notification.filter((notification) => notification.authorId === userId);
}
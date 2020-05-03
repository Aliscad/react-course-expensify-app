// import moment from 'moment'; //not gotta work
const moment = require.requireActual('moment');

export default (timestamp = 0) => {
    return moment(timestamp);
}
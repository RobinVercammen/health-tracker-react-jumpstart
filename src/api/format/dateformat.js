import moment from 'moment';

const dateFormat = 'YYYY-MM-DD';

const formatDateForServer = (date) => {
    return moment(date).format(dateFormat);
}

export default formatDateForServer;

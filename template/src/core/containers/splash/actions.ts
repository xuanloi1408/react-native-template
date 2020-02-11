import _ from 'lodash';
import Navigator from 'src/navigation/actions';



export const _init = () => {
    return (dispatch, getState) => {
        _.delay(()=> dispatch(Navigator.dashboard_home), 1500)
    };
};



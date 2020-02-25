import { Dispatch } from 'react';
import Navigator from 'src/navigation/actions';

export const BaseDispatchToProps = {
    back: () => (dispatch: Dispatch<any>) => dispatch(Navigator.back),
};

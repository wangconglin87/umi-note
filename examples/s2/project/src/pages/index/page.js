import { connect } from 'dva';

import { Spin } from 'antd';


 function Example ( {dispatch, count, loading} ) {

    function handleAdd() {
        dispatch({
            type: 'count/add',
        });
    }

    function handleMinus() {
        dispatch({
            type: 'count/minus',
        });
    }

    function waitAdd() {
        dispatch({
            type: 'count/addAfter1Second',
        });
    }

    return (
        <div>

            <div>{ count }</div>
            <button onClick={handleAdd}> + </button>
            <button onClick={handleMinus}> - </button>
            <button onClick={waitAdd}> 异步 + </button>
            <Spin spinning={loading}/>
        </div>
    );
}


function mapStateToProps(state) {
    const count = state.count;
    return {
        count,
        loading: state.loading.models.count,
    };
}
export default connect(mapStateToProps)(Example);
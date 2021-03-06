import { connect } from 'dva';


// function Example ( {dispatch, count} ) {
function Example(props) {

    console.log("page props");
    console.log(props);

    function handleAdd() {
        // dispatch({
        props.dispatch({
            type: 'count/add',
        });
    }

    function handleMinus() {
        // dispatch({
        props.dispatch({
            type: 'count/minus',
        });
    }

    return (
        <div>
            {/*<div>{ count }</div>*/}
            <div>{ props.count }</div>
            <button onClick={handleAdd}> + </button>
            <button onClick={handleMinus}> - </button>
        </div>
    );
}

// 不是强制用这个函数名，名字只是描述功能
function mapStateToProps(state) {
    // Umi会自动注册model， 具体规则请看 https://umijs.org/guide/with-dva.html#model-%E6%B3%A8%E5%86%8C

    console.log("mapStateToProps");
    console.log(state);

    const count = state.count;

    return { count };
}

// connect会将mapStateToProps的返回值和dispatch方法注入到Example的props里面。
export default connect(mapStateToProps)(Example);
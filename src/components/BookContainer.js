import React from 'react'
import {connect} from 'react-redux'
import {buyBook} from '../redux/index'

 function BookContainer(props) {
    return (
        <div>
        <h1>number of book{props.numberofBook}</h1>

        <button onClick={props.buyBook}>click</button>
            
        </div>
    )
}

const mapStateToProps=(state) => {
    return {
        numberofBook:state.numberofBook
    }
}

const mapDispatchToProps=(dispatch) => {
    return{
        buyBook:function(){
            dispatch(buyBook());
        }
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(BookContainer);
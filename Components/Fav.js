import React from 'react';
import ReactDOM from 'react-dom';
import {useState, useEffect} from 'react';
import { createRoot } from 'react-dom/client';
import { getRequest, postRequest } from './config';
import { connect, useSelector } from 'react-redux';

import "../dist/styles/fav.scss";

import {Provider} from 'react-redux';

// import {store, actionCreators} from './redux'
import store from './redux-rtk/store'
import {addFood, setFood} from './redux-rtk/Slices/foodSlice';
import {useGetAllFoodsQuery} from './redux-rtk/Slices/foodSlice'

import {useDispatch} from 'react-redux';
import Fav from '../models/favourites';
import {useFetch} from './customHooks';


const FavPage = function (props) {
    const [userInputFood, setUserInputFood] = useState([]);
    const dispatch = useDispatch();
    const totalFoods = useSelector(state => state.food.num);
    // const [allfoods, setallfoods] = useState([]);
    // const disp = useDispatch(); //delete
    const submitFood = function(e) {
        e.preventDefault();
        const url = '/submitfood';
        const body = {userInputFood}
        setUserInputFood('');
        postRequest(url, body).then((res) => {
            // store.dispatch(actionCreators.addFood());
            // props.addFood(); // this will be used if connect() is used
            dispatch(addFood()); // using redux-rtk
            console.log(res);
        });
    }

    //*********************    Normal Implementation 
    // useEffect(() => {
    //     const url = '/getfoods';
    //     getRequest(url).then(res => {
    //         setallfoods(res.foods);
            
    //         // props.setFoodAsync({
    //         //     num: res.foods.length
    //         // })

    //         props.setFood({
    //             num: res.foods.length
    //         })
    //     });
    //     // props.addFood()
    // }, []);
    //*********************    End of Normal Implementation 

    //*********************    Custom Hook Implementation
    const url = '/getfoods';
    // const {data, isError, isLoading} = useFetch(url)
    const { data, error, isLoading } = useGetAllFoodsQuery()
    const allfoods = data && data.foods ? data.foods : [];
    //*********************    End of Custom Hook Implementation


    
    return (
        <div id="mainFav">
            <form onSubmit={(e)=>submitFood(e)}>
                <label id="lab1">Enter your favourite food</label><br/>
                <input id="inp1" val={userInputFood} onChange={(e)=>setFood(e.target.value)}></input>
                <button type="submit">Submit</button>
            </form>

            <div id="favlist">
                <div>Your Favourite Foods Are
                    <span id="arrow">v</span>
                </div>
                <div>
                    <ul>
                        {allfoods.length && allfoods.map((v,i) => {
                            return (
                                <li id="foodItem">
                                    {v}
                                </li>
                            )
                        })}
                    </ul>
                </div>    
                {/* <div>Total favourite foods = {props.num}</div>             */}
                <div>Total favourite foods = {totalFoods}</div>
                {/* <div>Total favourite foods = {allfoods.length}</div>     */}
            </div>
        </div>
    )
}

const root = createRoot(document.getElementById("root-fav"));


// const mapStateToProps = state => {
//     return {
//         num: state.num
//     }
// }
// const mapDispatchToProps = dispatch => {
//     return {
//         addFood: () => dispatch(actionCreators.addFood()),
//         setFood: (payload) => dispatch(actionCreators.setFood(payload)),
//         setFoodAsync: (payload) => dispatch(actionCreators.setFoodAsync(payload)),
//     }
// }

// const ReduxFav = connect(mapStateToProps, mapDispatchToProps)(FavPage);

// root.render (
//     <Provider store={store} >
//         <ReduxFav />
//     </Provider>
// )


root.render (
    <Provider store={store} >
        <FavPage />
    </Provider>
)


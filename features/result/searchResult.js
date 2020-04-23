import React, { Component } from 'react'
import {  View, TextInput, Button } from 'react-native';
import PropsTypes from 'prop-types'
import { connect } from 'react-redux';
import Search from './../counter/counterSlice'
import DiaplayCard from '../displayCard/DiaplayCard';
import DiaplayCardTRUE from '../displayCard/DisplayCardTRUE';
import Axios from 'axios';

class SearchResult extends Component {
    constructor(props){
        super(props);
        this.state = {
          search : '',
          data : this.props.data,
          searchfromhere : false
        }
        this.onChange = this.onChange.bind(this);
        this.search = this.search.bind(this);
    }
  
    onChange (e){
        this.setState({search : e})
    }
  
    search () {
        console.log(this.props)
        let url = 'http://www.omdbapi.com/?i=tt3896198&apikey=55fc3f1e&t='+this.state.search;
        Axios.post(url)
            .then(res => {
                this.setState({data : res.data ,searchfromhere :true})
            })

    }

    render() {
        return (
            <View>
                <View style ={{display : "flex" , flexDirection:"row" , padding: "5%"}}>
                    <TextInput 
                        onChangeText = {this.onChange}
                        style={{ height: 40, borderColor: 'gray', borderWidth: 1 , padding: '1%' , width: "80%"}}
                        placeholder = 'Search a movie by name'
                    />
                    <View style ={{marginLeft : 5 , height: 50}}>
                        <Button
                            title = 'Search'
                            onPress = {this.search}
                        />
                    </View>
                
                </View>
                {this.state.searchfromhere ? <DiaplayCardTRUE data = {this.state.data}/>  : <DiaplayCard data = {this.state.data}/>}
            </View>
        )
    }
}

// SearchResult.PropsTypes = {
//     Search : PropsTypes.func.isRequired,
//     counter : PropsTypes.object.isRequired,
//   }
  
  
  
//   const mapStateToProps = (state) => ({
//     info : state.counter,
//   })

export default  (SearchResult);
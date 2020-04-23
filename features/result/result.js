import React, { Component } from 'react'
import { Platform, StyleSheet, Text, View, TextInput, Button } from 'react-native';
import SearchResult from './searchResult';
import PropsTypes from 'prop-types'
import { connect } from 'react-redux';
import Search from './../counter/counterSlice'
import DisplayCard from './../displayCard/DiaplayCard'
class Result extends Component {
    render() {
        
        return (
            <View>
                <SearchResult data = {this.props}/>
                {/* <DisplayCard data = {this.props} /> */}
            </View>
        )
    }
}

Result.PropsTypes = {
    Search : PropsTypes.func.isRequired,
    counter : PropsTypes.object.isRequired,
  }
  
  
  
  const mapStateToProps = (state) => ({
    info : state.counter,
  })
  
  
  export default connect(mapStateToProps , {Search})(Result)
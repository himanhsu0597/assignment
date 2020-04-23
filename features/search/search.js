import * as React from 'react';
import { Platform, StyleSheet, Text, View, TextInput, Button } from 'react-native';
import Axios from 'axios';
import PropsTypes from 'prop-types'
import { connect } from 'react-redux';
import { Search } from '../counter/counterSlice';

class SearchData extends React.Component {

    constructor(props){
      super(props);
      this.state = {
        search : ''
      }
      this.onChange = this.onChange.bind(this);
      this.search = this.search.bind(this);
    }

    onChange (e){
       this.setState({search : e})
    }

    search () {
      this.props.Search(this.state.search ,this.props)
    }

    render () {
      return (
          
          <View style = {styles.containerOutter}>
            <Text style = {styles.Heading}>Search movie by name</Text>
            <View style = {styles.container}>
                <TextInput 
                  onChangeText = {this.onChange}
                  style={{ height: 40, borderColor: 'gray', borderWidth: 1 , padding: '1%' , width : '80%'}}
                  placeholder = 'Search a movie by name'
                />
                <Button
                  title = 'Search'
                  onPress = {this.search}
                />
            </View>
        </View>

      );
    }
}

const styles = StyleSheet.create({
  container: {
    display : 'flex',
    flexDirection:'row',
    // flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  containerOutter: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
  Heading : {
    fontSize : 30,
    position : "relative",
    top : -15
  }
});

SearchData.PropsTypes = {
  Search : PropsTypes.func.isRequired,
  counter : PropsTypes.object.isRequired,
}



const mapStateToProps = (state) => ({
  info : state.counter,
})


export default connect(mapStateToProps , {Search})(SearchData)
import React, { Component } from 'react'
import { Text ,View  , ActivityIndicator ,Image} from 'react-native'
import { Card ,ListItem} from 'native-base';

export default class DiaplayCard extends Component {
    render() {
        console.log(this.props)
        const data =this.props.data.info.data;
        
        return (
            <Card style = {{padding : "5%"}}>
                <View style ={{display : "flex" , flexDirection:"row" }}>
                    <Image
                        source={{ uri: data.Poster }}
                        style={{ width: 150, height: 250 }}
                        PlaceholderContent={<ActivityIndicator />}
                    />
                    <View style = {{ width :'70%'}}>
                        <Text style ={{border : 'solid 1px black' , padding : '5%'}}>
                            <Text h2>Title</Text> : {data.Title}
                        </Text>
                        <Text style ={{border : 'solid 1px black' , padding : '5%'}}>
                            Cast : {data.Actors}
                        </Text>
                        <Text style ={{border : 'solid 1px black' , padding : '5%'}}>
                            Year : {data.Year}
                        </Text>
                        <Text style ={{border : 'solid 1px black' , padding : '5%'}}>
                            IDMB Rating : {data.imdbRating}
                        </Text>
                        
                    </View>
                </View>                
            </Card>
        )
    }
}

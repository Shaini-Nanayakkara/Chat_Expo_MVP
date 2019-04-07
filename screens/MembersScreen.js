import React, { Component } from 'react';
import { View, Platform, StyleSheet, FlatList, Button, TouchableHighlight, Image, Text } from 'react-native';

class MembersScreen extends Component {
  static navigationOptions = {
    title: 'My Group'
  };

  constructor(props) {
    super(props);
    this.state = {
      list:[
        {key:'1', img:'https://www.b7web.com.br/avatar1.png', name:'Pravinda Perera', msg:'Status 1'},
        {key:'2', img:'https://www.b7web.com.br/avatar2.png', name:'Shaini Nanayakkara', msg:'Status 2'},
        {key:'3', img:'https://www.b7web.com.br/avatar3.png', name:'Mahela Jey', msg:'Status 3'},
        {key:'4', img:'https://www.b7web.com.br/avatar2.png', name:'Kumar Sangakkara', msg:'Status 4'},
        {key:'5', img:'https://www.b7web.com.br/avatar3.png', name:'Aravinda De Silva', msg:'Status 5'},
        {key:'6', img:'https://www.b7web.com.br/avatar1.png', name:'Roshan Mahanama', msg:'Status 6'}
      ]
    };
  }

  onItemPress = item => {
    this.props.navigation.navigate("RemoveMemberScreen", { key:item.key, name: item.name, img:item.img, msg:item.msg })
  };

  renderListItem(item, params) {
    return (
      <TouchableHighlight onPress={() => this.onItemPress(item)} underlayColor="#CCCCCC">
        <View style={ListItemStyles.item}>
          <Image source={{uri:item.img}} style={ListItemStyles.imagem} />
          <View style={ListItemStyles.info}>
            <Text numberOfLines={1} style={ListItemStyles.nome}>{item.name}</Text>
            <Text numberOfLines={1} style={ListItemStyles.msg}>{item.msg}</Text>
          </View>
        </View>
      </TouchableHighlight>
    );
  }

  render() {
    const { params } = this.props.navigation.state;
    return (
      <View style={styles.container}>
        <FlatList
          data={this.state.list}
          renderItem={({item})=> this.renderListItem(item, params)}
        />
        <Button
          title="Add To Group"
          onPress={() => this.props.navigation.navigate("ContactsScreen")}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container:{
    flex:1,
    marginTop: Platform.OS === 'android' ? 80 : 0
  }
});

const ListItemStyles = StyleSheet.create({
  item:{
    height:60,
    marginLeft:10,
    marginRight:10,
    borderBottomWidth:1,
    borderColor:'#CCCCCC',
    flex:1,
    flexDirection:'row'
  },
  imagem:{
    width:40,
    height:40,
    marginTop:10,
    borderRadius:20
  },
  info:{
    flex:1,
    flexDirection:'column',
    justifyContent:'center',
    marginLeft:10
  },
  nome:{
    fontSize:15,
    fontWeight:'bold'
  }
});

export default MembersScreen;
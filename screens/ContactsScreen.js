import React, { Component } from 'react';
import { View, Platform, StyleSheet, FlatList, TouchableHighlight, Image, Text } from 'react-native';
import { noop } from 'lodash';

class ContactsScreen extends Component {
  static navigationOptions = {
    title: 'All Contacts'
  };

  constructor(props) {
    super(props);
    this.state = {
      list:[
        {key:'1', img:'https://www.b7web.com.br/avatar1.png', name:'Contact 1', msg:'Status 1'},
        {key:'2', img:'https://www.b7web.com.br/avatar2.png', name:'Contact 2', msg:'Status 2'},
        {key:'3', img:'https://www.b7web.com.br/avatar3.png', name:'Contact 3', msg:'Status 3'},
        {key:'4', img:'https://www.b7web.com.br/avatar2.png', name:'Contact 4', msg:'Status 4'},
        {key:'5', img:'https://www.b7web.com.br/avatar3.png', name:'Contact 5', msg:'Status 5'},
        {key:'6', img:'https://www.b7web.com.br/avatar1.png', name:'Contact 6', msg:'Status 6'},
        {key:'7', img:'https://www.b7web.com.br/avatar2.png', name:'Contact 7', msg:'Status 7'},
        {key:'8', img:'https://www.b7web.com.br/avatar3.png', name:'Contact 8', msg:'Status 8'},
        {key:'9', img:'https://www.b7web.com.br/avatar1.png', name:'Contact 9', msg:'Status 9'},
        {key:'10', img:'https://www.b7web.com.br/avatar2.png', name:'Contact 10', msg:'Status 10'},
        {key:'11', img:'https://www.b7web.com.br/avatar3.png', name:'Contact 11', msg:'Status 11'},
        {key:'12', img:'https://www.b7web.com.br/avatar1.png', name:'Contact 12', msg:'Status 12'}
      ]
    };
  }

  renderListItem(item) {
    return (
      <TouchableHighlight onPress={noop} underlayColor="#CCCCCC">
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
    return (
      <View style={styles.container}>
        <FlatList
          data={this.state.list}
          renderItem={({item})=> this.renderListItem(item)}
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

export default ContactsScreen;
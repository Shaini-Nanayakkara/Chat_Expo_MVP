import React, { Component } from 'react';
import { View, Platform, StyleSheet, Text, Button, TouchableHighlight, Image, FlatList } from 'react-native';
import { noop } from 'lodash';
import { NavigationActions } from 'react-navigation';

class RemoveMemberScreen extends Component {

  static navigationOptions = {
    title: 'Group Settings Screen'
  };

  constructor(props) {
    super(props);
  }

  renderItem(item) {
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
    const { params } = this.props.navigation.state;
    return (
      <View style={styles.container}>
        <FlatList
          data={[{key:params.key, img:params.img, name:params.name, msg:params.msg}]}
          renderItem={({item})=> this.renderItem(item)}
        />
        <Button
          onPress={() => this.props.navigation.dispatch(NavigationActions.back())}
          title="Delete From Group"
        />
      </View>
    );
  }

}

const styles = StyleSheet.create({
  container:{
    // flex:1,
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

export default RemoveMemberScreen;
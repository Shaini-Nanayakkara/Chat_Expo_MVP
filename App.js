import React from 'react';

import { StackNavigator } from 'react-navigation'
import MembersScreen from './screens/MembersScreen';
import RemoveMemberScreen from './screens/RemoveMemberScreen';
import ContactsScreen from './screens/ContactsScreen';

const Navigation = StackNavigator({
  MembersScreen: { screen: MembersScreen },
  RemoveMemberScreen: { screen: RemoveMemberScreen },
  ContactsScreen: { screen: ContactsScreen }
});

export default Navigation;

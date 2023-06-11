import React from 'react';
import { View, FlatList, StyleSheet, TouchableOpacity } from 'react-native';
import { getAuth, signOut } from 'firebase/auth';
import { IconButton } from 'react-native-paper';

import ListItemSeparator from '../../components/Lists/ListItemSeparator';
import Screen from '../../components/Screen';
import Header from '../../components/Header';
import colors from '../../config/colors';
import ListItem from '../../components/Lists/ListItem';
import useAuth from '../../hooks/useAuth';
import routes from '../../navigation/routes';

const menuItems = [
  {
    title: 'To Dos',
    icon: {
      name: 'format-list-bulleted',
      backgroundColor: colors.primary,
    },
    targetScreen: 'MyListings',
  },
  {
    title: 'Notes',
    icon: {
      name: 'note-text-outline',
      backgroundColor: colors.secondary,
    },
    targetScreen: 'Messages',
  },
  {
    title: 'Calendar',
    icon: {
      name: 'calendar-month',
      backgroundColor: colors.medium,
    },
    targetScreen: 'Messages',
  },
];

const AccountScreen = ({ navigation }) => {
  const auth = getAuth();
  const user = useAuth();

  const handleLogout = () => {
    signOut(auth)
      .then(() => console.log('User signed out!'))
      .catch((error) => console.log('Failed to sign out:', error));
  };

  return (
    <Screen>
      <Header title='Account' iconName='account-circle-outline' iconSize={50} />

      <View style={styles.profileContainer}>
        {user && (
          <ListItem
            title={user.displayName}
            subTitle={user.email}
            image={require('../../assets/headshot.jpeg')}
            onPress={() => navigation.navigate(routes.EDITPROFILE)}
          />
        )}
      </View>

      <View style={styles.menuContainer}>
        <FlatList
          data={menuItems}
          keyExtractor={(menuItem) => menuItem.title}
          ItemSeparatorComponent={ListItemSeparator}
          renderItem={({ item }) => (
            <ListItem
              // onPress={() => navigation.navigate(item.targetScreen)}
              title={item.title}
              IconComponent={
                <IconButton
                  icon={item.icon.name}
                  iconColor={colors.white}
                  backgroundColor={item.icon.backgroundColor}
                />
              }
            />
          )}
        />
      </View>
      <ListItem
        onPress={handleLogout}
        title='Log Out'
        IconComponent={
          <IconButton
            icon='logout'
            iconColor='white'
            backgroundColor={colors.dark}
          />
        }
      />
      <ListItem
        title='Delete Account'
        IconComponent={
          <IconButton
            icon='account-remove'
            iconColor='white'
            backgroundColor={colors.danger}
          />
        }
      />
    </Screen>
  );
};

const styles = StyleSheet.create({
  profileContainer: {
    marginBottom: 20,
  },
  menuContainer: {
    marginBottom: 20,
  },
});

export default AccountScreen;

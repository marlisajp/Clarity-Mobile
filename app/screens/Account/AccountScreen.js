import React from 'react';

import Screen from '../../components/Screen';
import Header from '../../components/Header';
import colors from '../../config/colors';

const AccountScreen = () => {
  return (
    <Screen>
      <Header
        title='Account'
        iconName='account-circle-outline'
        iconColor={colors.primary}
        iconSize={50}
      />
    </Screen>
  );
};

export default AccountScreen;

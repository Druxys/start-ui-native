import React from 'react';

import { useNavigation } from '@react-navigation/native';
import { ActivityIndicator, TouchableOpacity } from 'react-native';
import { Text, Div, Avatar } from 'react-native-magnus';

import { useAccount } from '@/account/account.service';
import { primaryColor } from '@/theme';

const Home = () => {
  const navigation = useNavigation();
  const {
    account,
    isLoading: isRetrievingUserAccount,
    isError: hasErrorRetrievingUserAccount,
  } = useAccount();

  if (isRetrievingUserAccount) {
    return (
      <Div h="100%" justifyContent="center" alignItems="center">
        <Text fontSize="6xl" color="text" mt="lg">
          📦
        </Text>
        <ActivityIndicator size="large" color={primaryColor} />
      </Div>
    );
  }

  if (hasErrorRetrievingUserAccount || !account) {
    return <Text>Erreur</Text>;
  }

  const handleOpenAccount = () => navigation.navigate('Account');

  return (
    <Div bg="body" h="100%" p="xl">
      <TouchableOpacity onPress={handleOpenAccount}>
        <Avatar bg="green800" size={50} fontSize="4xl" color="white">
          {account.email.charAt(0).toUpperCase()}
        </Avatar>
      </TouchableOpacity>
      <Text fontSize="6xl" color="text" mt="lg">
        📦 Bienvenue
      </Text>
    </Div>
  );
};

export default Home;

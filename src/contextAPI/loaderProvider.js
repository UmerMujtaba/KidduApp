import React, {useState, createContext, useContext} from 'react';
import {ActivityIndicator, Modal, Text, View} from 'react-native';
import {colors} from '../constants/colors';

const LoaderContext = createContext();

export const LoaderProvider = ({children}) => {
  const [loader, setLoader] = useState(false);

  return (
    <LoaderContext.Provider
      value={{
        loader,
        setLoader,
      }}>
      <View>
        <Modal transparent={true} onRequestClose={() => null} visible={loader}>
          <View
            style={{
              flex: 1,
              backgroundColor: colors.backgroundClr,
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            <View
              style={{
                borderRadius: 15,
                backgroundColor: colors.ashWhite,
                padding: 25,
              }}>
              <ActivityIndicator size="large" color={colors.darkOrange} />
              <Text
                style={{
                  fontSize: 14,
                  fontWeight: '200',
                  color: colors.blackishOrange,
                  opacity: 1,
                }}>
                {'Loading'}
              </Text>
            </View>
          </View>
        </Modal>
      </View>
      {children}
    </LoaderContext.Provider>
  );
};

export const useLoaderProvider = () => useContext(LoaderContext);

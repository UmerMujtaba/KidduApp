import React, { forwardRef } from 'react';
import {
    TextInput,
    StyleSheet,
    View,
    Text,
    TouchableOpacity,
    Image,
} from 'react-native';
import { colors } from '../../constants/colors';
import { rfs, rhp, rwp } from '../../constants/dimensions';

export default CustomInputField = forwardRef(
    (
        {
            placeholder,
            value,
            onChangeText,
            keyboardType,
            secureTextEntry,
            style,
            showSoftInputOnFocus,
            autoFocus,
            returnKeyType,
            autoCorrect,
            onSubmitEditing,
            maxLength,
            inputText,
            heading,
            iconSource,
            rightIcon,
            iconPress,
            suffixIconStyle,
            iconStyle
        },
        ref,
    ) => {
        return (
            <View style={[styles.container, style]}>
                <Text style={styles.heading}>
                    {heading} <Text style={styles.required}>*</Text>
                </Text>
                <View style={styles.iconContainer}>
                    <TextInput
                        ref={ref}
                        placeholder={placeholder}
                        placeholderTextColor={colors.grey}
                        onChangeText={onChangeText}
                        value={value}
                        keyboardType={keyboardType}
                        secureTextEntry={secureTextEntry}
                        style={[styles.inputStyle, inputText]}
                        showSoftInputOnFocus={showSoftInputOnFocus}
                        autoFocus={autoFocus}
                        returnKeyType={returnKeyType}
                        onSubmitEditing={onSubmitEditing}
                        autoCorrect={autoCorrect}
                        maxLength={maxLength}
                    />
                    {rightIcon && (
                        <TouchableOpacity onPress={iconPress} style={iconStyle}>
                            <Image
                                style={[styles.icon, suffixIconStyle]}
                                resizeMode="contain"
                                source={iconSource}
                            />
                        </TouchableOpacity>
                    )}
                </View>
            </View>
        );
    },
);

const styles = StyleSheet.create({
    container: {
        flexDirection: 'column',
        borderWidth: 1,
        borderRadius: 12,
        borderColor: 'black',
        marginBottom: rhp(20),
        paddingHorizontal: rhp(10),
        paddingTop: 5,
    },
    heading: {
        fontSize: rfs(10),
        color: colors.grey,
    },
    required: {
        color: 'red',
    },
    inputStyle: {
        flex: 1,
        color: colors.blacK,
        fontSize: rfs(14),
    },
    iconContainer: {
        flexDirection: 'row',
        justifyContent: "space-between",
        // alignItems: 'center'
    },
    icon: {
        height: rhp(25),
        width: rwp(25),
    },
});


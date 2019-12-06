import React from 'react';
import {View, Text, TextInput, Picker, StyleSheet} from 'react-native';
import RNPickerSelect from 'react-native-picker-select';

const Top = () => {
  const textInputPlaceholder = '燃料';

  const [fuelValue, setFuelValue] = React.useState(textInputPlaceholder);
  const [jobLabel, setJobLabel] = React.useState();

  const jobSelector = [
    {
      label: 'アプリ開発',
      value: 1,
    },
    {
      label: 'インフラ構築',
      value: 2,
    },
    {
      label: 'メディア運営',
      value: 3,
    },
    {
      label: 'Webデザイン',
      value: 4,
    },
  ];

  const handleChangePicker = selectId => {
    if (selectId) {
      const v = jobSelector.find(v => v.value === selectId);
      setJobLabel(v.label);
    } else {
      setJobLabel('');
    }
  };

  return (
    <View>
      <TextInput
        style={{height: 40, borderColor: 'gray', borderWidth: 1}}
        keyboardType="numeric"
        onChangeText={text => setFuelValue(text)}
        value={fuelValue}
        clearTextOnFocus={true}
      />

      <RNPickerSelect
        style={pickerSelectStyles}
        placeholder={{
          label: '----',
          value: null,
        }}
        onValueChange={handleChangePicker}
        items={jobSelector}
        useNativeAndroidPickerStyle={false}
      />

      <Text>入れた燃料: {typeof fuelValue === 'number' && fuelValue}ℓ</Text>
      <Text>選択したJOB: {jobLabel}</Text>
    </View>
  );
};

export default Top;

const pickerSelectStyles = StyleSheet.create({
  inputIOS: {
    fontSize: 16,
    paddingVertical: 12,
    paddingHorizontal: 10,
    borderWidth: 1,
    borderColor: 'gray',
    borderRadius: 4,
    color: 'black',
    paddingRight: 30,
  },
  inputAndroid: {
    fontSize: 16,
    paddingHorizontal: 10,
    paddingVertical: 8,
    borderWidth: 1,
    borderColor: 'gray',
    borderRadius: 4,
    color: 'black',
    paddingRight: 30,
  },
});

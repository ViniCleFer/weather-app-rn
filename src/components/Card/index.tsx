import React, { useCallback } from 'react';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';

import { CustomText } from '../CustomText';

import {
  Container,
  ContainerGraus,
  ContainerTemps,
  ContainerDate,
  ContainerHumidity,
  Icon,
} from './styles';

import { fonts } from '../../styles';
import { formatDegraus } from '../../utils/formatToCelsius';
import { toCapitalize } from '../../utils/capitalize';
import { IWeather } from '../../store/modules/weather/types';
import { useTheme } from '../../hooks/useTheme';
import { dayOfWeek, unixToDate } from '../../utils/formatDate';

type StackParamList = {
  Home: undefined;
  Details: IWeather;
};

type StackProps = StackNavigationProp<StackParamList, 'Details'>;

type CardProps = {
  infos: IWeather;
};

export const Card = ({ infos }: CardProps) => {
  const navigation = useNavigation<StackProps>();
  const { theme } = useTheme();

  const handlePress = useCallback(
    (weather: IWeather) => {
      navigation.navigate('Details', weather);
    },
    [navigation],
  );

  return (
    <Container
      style={{ backgroundColor: theme.GREEN_LIGHT }}
      onPress={() => handlePress(infos)}
    >
      <ContainerTemps>
        <ContainerGraus>
          <CustomText fontFamily={fonts.BOLD} fontSize={50} color={theme.BLACK}>
            {formatDegraus(infos?.main?.temp)}
          </CustomText>
          <CustomText fontFamily={fonts.BOLD} fontSize={30} color={theme.GREEN}>
            &deg;
          </CustomText>
          <CustomText fontFamily={fonts.BOLD} fontSize={23} color={theme.GREEN}>
            C
          </CustomText>
        </ContainerGraus>
        <CustomText
          fontFamily={fonts.BOLD}
          fontSize={10}
          color={theme.GREEN_DARK}
          style={{ width: 100 }}
        >
          {toCapitalize(infos.weather[0].description)}
        </CustomText>
        <CustomText fontFamily={fonts.BOLD} fontSize={10} color={theme.GREEN}>
          {`${infos.name}, ${infos.sys.country}`}
        </CustomText>
      </ContainerTemps>
      {infos?.weather?.length > 0 && (
        <Icon
          width={50}
          height={50}
          source={{
            uri: `http://openweathermap.org/img/wn/${infos.weather[0].icon}@2x.png`,
          }}
        />
      )}
      <ContainerDate>
        <ContainerHumidity style={{ backgroundColor: theme.GREEN_DARK }}>
          <MaterialCommunityIcons name="water" size={20} color={theme.WHITE} />
          <CustomText fontFamily={fonts.BOLD} fontSize={10} color={theme.WHITE}>
            {`${infos.main.humidity}`}
          </CustomText>
          <CustomText fontFamily={fonts.BOLD} fontSize={10} color={theme.WHITE}>
            %
          </CustomText>
        </ContainerHumidity>
        <ContainerTemps>
          <CustomText
            fontFamily={fonts.BOLD}
            fontSize={30}
            color={theme.GREEN_MEDIUM}
          >
            {unixToDate(infos.dt)}
          </CustomText>
          <CustomText
            fontFamily={fonts.BOLD}
            fontSize={15}
            color={theme.GREEN_DARKEN}
            style={{ marginTop: -2, paddingLeft: 5 }}
          >
            {dayOfWeek()}
          </CustomText>
        </ContainerTemps>
      </ContainerDate>
    </Container>
  );
};

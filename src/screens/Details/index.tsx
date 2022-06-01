import React, { useState, useEffect } from 'react';
import { useRoute, useNavigation } from '@react-navigation/native';
import { AntDesign } from '@expo/vector-icons';

import {
  Container,
  Header,
  HeaderItem,
  ContentInfos,
  Icon,
  ContainerGraus,
  ArrowBack,
} from './styles';
import { CustomText } from '../../components/CustomText';
import { fonts } from '../../styles';
import { formatDegraus } from '../../utils/formatToCelsius';
import { Line } from './components/Line';
import { toCapitalize } from '../../utils/capitalize';
import { toDate, toHour } from '../../utils/formatDate';
import { IWeather } from '../../store/modules/weather/types';
import { useTheme } from '../../hooks/useTheme';

function Details() {
  const route = useRoute();
  const { goBack } = useNavigation();
  const { theme } = useTheme();

  const weatherParams = route.params as IWeather;

  const [myLocation, setMyLocation] = useState<IWeather | null>(null);

  useEffect(() => {
    if (weatherParams) {
      setMyLocation(weatherParams);
    }
  }, [weatherParams]);

  return (
    <Container style={{ backgroundColor: theme.GREEN_LIGHT }}>
      <ArrowBack
        style={{ backgroundColor: theme.DARK }}
        onPress={() => goBack()}
      >
        <AntDesign name="arrowleft" size={24} color={theme.GREEN_LIGHT} />
      </ArrowBack>
      {myLocation && (
        <>
          <CustomText
            color={theme.DARK}
            fontSize={28}
            fontFamily={fonts.BOLD}
            style={{ alignSelf: 'center' }}
          >
            {`${myLocation.name}, ${myLocation.sys.country}`}
          </CustomText>
          <Header>
            <HeaderItem>
              <AntDesign name="calendar" size={24} color="black" />
              <CustomText
                color={theme.DARK}
                fontSize={16}
                fontFamily={fonts.BOLD}
                style={{ marginLeft: 5 }}
              >
                {`${toDate(new Date())}`}
              </CustomText>
            </HeaderItem>
            <HeaderItem>
              <AntDesign name="clockcircleo" size={24} color="black" />
              <CustomText
                color={theme.DARK}
                fontSize={16}
                fontFamily={fonts.BOLD}
                style={{ marginLeft: 5 }}
              >
                {`${toHour(new Date())}`}
              </CustomText>
            </HeaderItem>
          </Header>

          <ContainerGraus>
            <CustomText
              fontFamily={fonts.BOLD}
              fontSize={80}
              color={theme.BLACK}
            >
              {formatDegraus(myLocation?.main?.temp)}
            </CustomText>
            <CustomText
              fontFamily={fonts.BOLD}
              fontSize={50}
              color={theme.BLACK}
              style={{ marginTop: 10 }}
            >
              &deg;
            </CustomText>

            <Icon
              width={50}
              height={50}
              source={{
                uri: `http://openweathermap.org/img/wn/${myLocation.weather[0].icon}@2x.png`,
              }}
            />
          </ContainerGraus>

          <ContentInfos>
            <Line
              label="Clima"
              value={`${toCapitalize(myLocation.weather[0]?.description)}`}
            />
            <Line label="Umidade" value={`${myLocation.main.humidity}%`} />
            <Line label="Vento" value={`${myLocation.wind.speed} km`} />
            <Line
              label="Temp. Mínima"
              value={`${formatDegraus(myLocation.main.temp_min)}°`}
            />
            <Line
              label="Temp. Máxima"
              value={`${formatDegraus(myLocation.main.temp_max)}°`}
            />
            <Line
              label="Sensação Térmica"
              value={`${formatDegraus(myLocation.main.feels_like)}°`}
            />
            <Line label="Pressão" value={`${myLocation.main.pressure} hPa`} />
            <Line label="Latitude" value={`${myLocation.coord.lat}`} />
            <Line label="Longitude" value={`${myLocation.coord.lon}`} />
          </ContentInfos>
        </>
      )}
    </Container>
  );
}

export default Details;

import React, { useState, useEffect } from 'react';
import * as Location from 'expo-location';
import { Alert } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';

import { Container, Content, List, Loading } from './styles';

import { Card } from '../../components/Card';
import { Header } from '../../components/Header';
import { StatusBar } from '../../components/StatusBar';
import { IWeather } from '../../store/modules/weather/types';
import { StoreState } from '../../store';
import {
  getWeatherByLatLongRequest,
  getWeatherRequest,
} from '../../store/modules/weather/actions';

import { useTheme } from '../../hooks/useTheme';

const Home = () => {
  const dispatch = useDispatch();
  const { theme } = useTheme();

  const weathersReducer = useSelector(
    (state: StoreState) => state.weather.weathers,
  );
  const weatherReducer = useSelector(
    (state: StoreState) => state.weather.weather,
  );
  const loading = useSelector((state: StoreState) => state.weather.loading);

  const [weathers, setWeathers] = useState<IWeather[]>([]);

  const [myLocation, setMyLocation] = useState<IWeather | null>(null);

  useEffect(() => {
    dispatch(getWeatherRequest());
  }, [dispatch]);

  useEffect(() => {
    if (weathersReducer.length > 0) {
      setWeathers(weathersReducer);
    }
  }, [weathersReducer]);

  useEffect(() => {
    (async () => {
      const { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== 'granted') {
        Alert.alert(
          'Atenção!, A permissão para acessar a Localização foi negada',
        );
        return;
      }

      const newLocation = await Location.getCurrentPositionAsync({});
      dispatch(
        getWeatherByLatLongRequest(
          newLocation.coords.latitude,
          newLocation.coords.longitude,
        ),
      );
    })();
  }, [dispatch]);

  useEffect(() => {
    if (weatherReducer && Object.keys(weatherReducer).length > 0) {
      setMyLocation(weatherReducer);
    }
  }, [weatherReducer]);

  if (loading) {
    return (
      <Container style={{ backgroundColor: theme.GREEN }}>
        <Loading color={theme.BLACK} size="large" />
      </Container>
    );
  }

  return (
    <Container
      style={{
        backgroundColor: theme.WHITE,
      }}
    >
      <StatusBar />
      <Content
        style={{
          backgroundColor: theme.WHITE,
        }}
      >
        <Header />
        {myLocation && <Card infos={myLocation} />}
        <List
          showsVerticalScrollIndicator={false}
          data={weathers}
          keyExtractor={(item: IWeather) => String(item.id)}
          renderItem={({ item }) => <Card infos={item as IWeather} />}
        />
      </Content>
    </Container>
  );
};

export default Home;

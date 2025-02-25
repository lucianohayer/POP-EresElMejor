import React from 'react';
import { View, Alert } from 'react-native';
import { HomeWelcome } from '../../widgets/home/HomeWelcome/HomeWelcome';
import { HomeBackground } from '../../widgets/home/HomeBackground/HomeBackground';

import Container from '../../widgets/shared/Container/Container';
import CustomButton from '../../widgets/shared/Button/CustomButton';
import LastChallengeCard from '../../widgets/home/LastChallengeCard/LastChallengeCard';
import RocketSvg from '../../../assets/rocket.svg';

import { homeStyles } from './HomeStyles';

const Home = props => {
	const navigateToChallengeList = () => {
		props.navigation.navigate('Retos');
	};

	return (
		<Container negativeSpacing={true}>
			<View style={homeStyles.screenContainer}>
				<View style={homeStyles.wellcomeBlock}>
					<HomeBackground />
					<View style={homeStyles.wellcomeMessage}>
						<HomeWelcome />
					</View>
				</View>
				<View style={homeStyles.lastChallengeBlock}>
					<LastChallengeCard />
					<CustomButton
						title={'Ver todos tus retos'}
						action={navigateToChallengeList}
					>
						<RocketSvg width="16" height="16" fill="#FFF" />
					</CustomButton>
				</View>
			</View>
		</Container>
	);
};

export default Home;

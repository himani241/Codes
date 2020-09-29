*Screen1.js

import React,{Component} from 'react';
import { Button, View,Text } from 'react-native';

export default class Screen1 extends Component
{
	Show=()=>
	{
		this.props.navigation.navigate('S2');
	}
	render()
	{
	    return(
		<View>
			<Text style={{textAlign:'center',fontsize:30}}>Screen1</Text>
			<Button title = "Show" onPress={this.Show}></Button>
		</View>
	    );
	}
}


===============================================

* Screen2.js

import React,{Component} from 'react';
import { Button, View,Text } from 'react-native';

export default class Screen2 extends Component
{
	Show=()=>
	{
		this.props.navigation.navigate('S1');
	}
	render()
	{
	    return(
		<View>
			<Text style={{textAlign:'center',fontsize:30}}>Screen2</Text>
			<Button title = "Show" onPress={this.Show}></Button>
		</View>
	    );
	}
}

===================================================

*App.js

import React,{Component} from 'react';
import {createAppContainer} from 'react-navigation ';
import { createStackNavigator} from 'react-navigation-stack';

import S1 from './Screen1';
import S2 from './Screen2';

const App=createStackNavigator(
	{
		S1:{screen:S1},
		S2:{screen:S2},
	}
);
export default createAppContainer(App);

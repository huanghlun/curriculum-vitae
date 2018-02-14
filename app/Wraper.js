// Greeter.js
import React, {Component} from 'react';
import Info from './component/Info';
import Header from './component/Header';
import Section from './component/Section';
import Footer from './component/Footer';
import Skill from './component/Skill';
import Honor from './component/Honor';
import styles from './main.css';
import experience from './component/Experience.json';
import project from './component/Project.json';
import skill from './component/Skill.json';
import honor from './component/Honor.json';

class Wraper extends Component {

	constructor(props) {
		super(props);
	}

	render() {
		return (
			<div id={styles.wraper}>
				<Header />
				<Info/>
				<Section section={project}/>
				<Section section={experience}/>
				<Skill skill={skill} />
				<Honor honor={honor} />
				<Footer />
			</div>
		);
	}
}

export default Wraper
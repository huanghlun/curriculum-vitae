import React, {Component} from 'react';
import styles from './section.css';
import flexs from '../main.css';

class SectionExtra extends Component {

	constructor(props) {
		super(props);
	}

	render() {
		return (
			<div className={flexs.flex+" "+flexs.flexAlignCenter+" "+styles.sectionExtra}>
				<p className={flexs.flex1}>{this.props.section.time}</p>
				<p className={flexs.flex1}>{this.props.section.company}</p>
				<p className={flexs.flex1}>{this.props.section.job}</p>
			</div>
		)
	}
}

export default SectionExtra
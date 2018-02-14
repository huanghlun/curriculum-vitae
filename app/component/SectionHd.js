import React, {Component} from 'react';
import styles from './section.css';

// var imgUrl = require('./images/avatar.jpg');

class SectionHd extends Component {

	constructor(props) {
		super(props);
	}

	render() {
		return (
			<div className={styles.sectionHd}>
				<h3>{this.props.section.title_CN}</h3>
				<h3>{this.props.section.title_EN}</h3>
			</div>
		)
	}
}

export default SectionHd
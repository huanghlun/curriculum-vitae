import React, {Component} from 'react';
import styles from '../main.css';

// var imgUrl = require('./images/avatar.jpg');

class Footer extends Component {

	constructor(props) {
		super(props);
	}

	render() {
		return (
			<div className={styles.footer}></div>
		)
	}
}

export default Footer
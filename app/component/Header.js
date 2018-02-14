import React, {Component} from 'react';
import styles from '../main.css';

class Header extends Component {

	constructor(props) {
		super(props);
	}

	render() {
		return (
			<div className={styles.header}>
				<img src={require('../images/header.jpg')} />
			</div>
		)
	}
}

export default Header
import React, {Component} from 'react';
import User from './Info.json';
import Avatar from './Avatar';
import Name from './Name';
import Detail from './Detail';
import styles from './info.css';
import flexs from '../main.css';

// var imgUrl = require('./images/avatar.jpg');

class Info extends Component {

	constructor(props) {
		super(props);
	}

	render() {
		return (
			<div className={styles.info}>
				<Avatar />
				<Name user={User}/>
				<Detail user={User} />
			</div>
		)
	}
}

export default Info
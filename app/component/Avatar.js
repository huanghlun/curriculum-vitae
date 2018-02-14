import React, {Component} from 'react';
import styles from './Avatar.css';
import containers from './name.css'
import flexs from '../main.css';

class Avatar extends Component {

	constructor(props) {
		super(props);

		this.state = {
			opacity: 0,
			top: 30
		}
	}

	componentDidMount() {
		setTimeout(()=>this.setState({
			top: 0,
			opacity: 1
		}), 500)
	}

	render() {
		return (
			<div className={styles.avatar} style={{opacity: this.state.opacity, top: this.state.top+"px"}}></div>
		);
	}
}

export default Avatar
import React, {Component} from 'react';
import styles from './name.css';
import flexs from '../main.css';
import fas from '../font-awesome-4.7.0/css/font-awesome.css';

class Name extends Component {

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
		}), 1000)
	}

	render() {
		return (
			<div className={styles.name} style={{opacity: this.state.opacity, top: this.state.top+"px"}}>
				<h3><i className={fas.fa + " " + fas.faUser}></i><span>{this.props.user.name}</span></h3>
				<p><i className={fas.fa + " " + fas.faUniversity}></i><span>毕业学校：{this.props.user.university}</span></p>
				<p><i className={fas.fa + " " + fas.faUniversalAccess}></i><span>学院专业：{this.props.user.school}</span></p>
			</div>
		);
	}
}

export default Name
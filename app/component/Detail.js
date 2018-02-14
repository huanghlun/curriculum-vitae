import React, {Component} from 'react';
import styles from './name.css'
import flexs from '../main.css';
import fas from '../font-awesome-4.7.0/css/font-awesome.css';

class Detail extends Component {

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
		}), 1500)
	}

	render() {
		return (
			<div className={styles.detail} style={{opacity: this.state.opacity, top: this.state.top+"px"}}>
				<p><i className={fas.fa + " " + fas.faBirthdayCake}></i><span>出生年月：{this.props.user.birth}</span></p>
				<p><i className={fas.fa + " " + fas.faMars}></i><span>性别：{this.props.user.sex}</span></p>
				<p><i className={fas.fa + " " + fas.faMobile}></i><span>联系方式：{this.props.user.phone}</span></p>
				<p><i className={fas.fa + " " + fas.faHome}></i><span>居住地址：{this.props.user.home}</span></p>
				<p><i className={fas.fa + " " + fas.faEnvelope}></i><span>邮箱：{this.props.user.email}</span></p>
				<p><i className={fas.fa + " " + fas.faGithub}></i><span>github：<a target="_blank" href={this.props.user.github}>{this.props.user.github}</a></span></p>
				<p><i className={fas.fa + " " + fas.faGithubAlt}></i><span>gitee：<a target="_blank" href={this.props.user.gitee}>{this.props.user.gitee}</a></span></p>
				<p><i className={fas.fa + " " + fas.faRss}></i><span>个人博客：<a target="_blank" href={this.props.user.blog}>{this.props.user.blog}</a></span></p>
			</div>
		);
	}
}

export default Detail
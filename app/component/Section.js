import React, {Component} from 'react';
import SectionHd from './SectionHd';
import SectionExtra from './SectionExtra';
import SectionContent from './SectionContent';
import styles from './section.css';

// var imgUrl = require('./images/avatar.jpg');

class Section extends Component {

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
		}), 2000)
	}

	render() {
		return (
			<div className={styles.section} style={{opacity: this.state.opacity, top: this.state.top+"px"}}>
				<SectionHd section={this.props.section.title} />
				{this.props.section.extra && <SectionExtra section={this.props.section.extra} />}
				<SectionContent section={this.props.section.content} />
			</div>
		)
	}
}

export default Section
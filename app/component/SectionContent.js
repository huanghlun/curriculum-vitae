import React, {Component} from 'react';
import styles from './section.css';

// var imgUrl = require('./images/avatar.jpg');

class SectionContent extends Component {

	constructor(props) {
		super(props);
	}

	render() {
		return (
			this.props.section.map((val, index)=>(
				<div className={styles.sectionContent} key={index.toString()}>
					<p><a href={val.link} target="_blank">{val.title}</a></p>
					<ul>
						{val.work.map(function(value, index){
							return <li key={value.toString()}>{value}</li>
						})}
					</ul>
				</div>
			))
		)
	}
}

export default SectionContent
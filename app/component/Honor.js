import React, {Component} from 'react';
import styles from './section.css';
import SectionHd from './SectionHd';

// var imgUrl = require('./images/avatar.jpg');

class Honor extends Component {

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
				<SectionHd section={this.props.honor.title} />
				<div className={styles.sectionContent}>
				{
					this.props.honor.items.map((val, index)=>(
						<p key={index.toString()}>
							<span style={{marginRight: '20px'}}>{val.period}</span>
							<span>{val.honor}</span>
						</p>
					))
				}
				</div>
			</div>
		)
	}
}

export default Honor
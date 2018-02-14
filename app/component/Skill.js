import React, {Component} from 'react';
import SectionHd from './SectionHd';
import styles from './section.css';
import skillStyle from './skill.css';
import flexs from '../main.css';

class Skill extends Component {

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
				<SectionHd section={this.props.skill.title} />
				<div className={styles.sectionContent+" "+flexs.flex+" "+flexs.flexAlignStart+" "+flexs.flexWrap}>
					<div className={flexs.flex1+" "+skillStyle.skillSection} style={{flexBasis: "130px"}}>
						<p>精通</p>
						<ul>
							{this.props.skill.master.map((val, index)=>(
								<li key={index.toString()}>{val}</li>
							))}
						</ul>
					</div>
					<div className={flexs.flex1+" "+skillStyle.skillSection} style={{flexBasis: "120px"}}>
						<p>熟悉</p>
						<ul>
							{this.props.skill.familiar.map((val, index)=>(
								<li key={index.toString()}>{val}</li>
							))}
						</ul>
					</div>
					<div className={flexs.flex1+" "+skillStyle.skillSection} style={{flexBasis: "120px"}}>
						<p>了解</p>
						<ul>
							{this.props.skill.know.map((val, index)=>(
								<li key={index.toString()}>{val}</li>
							))}
						</ul>
					</div>
				</div>
			</div>
		)
	}
}

export default Skill
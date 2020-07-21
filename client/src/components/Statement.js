import React from 'react';
import like from '../svgs/like.svg';
import dislike from '../svgs/dislike.svg';
import seen from '../svgs/seen.svg';

const statement = {
	title: 'Ремонт ультразвуковой мойки Ultrasonic Cleaner HB-4818T',
	type: 'Ремонт',
	image:
		'https://w7.pngwing.com/pngs/447/1016/png-transparent-drawing-anime-art-manga-mouse-trap-black-hair-monochrome-human.png',
	description:
		'Принесли на ремонт ультразвуковую мойку Ultrasonic Cleaner HB-4818T. Вскрыв корпус я обнаружил следы ремонта и характерный запах горелого. Вскрыв корпус я обнаружил следы ремонта и характерный запах горелого. Мойка состоит из двух блоков, силового и блока управления. Первым делом был извлечён из корпуса блок управления...',
	content:
		'<p><br /><img src="https://pm1.narvii.com/6550/9cf477f0c141edd10d4b2d1ff2a988407d08cae1_hq.jpg" alt="" width="60%" />&nbsp; &nbsp;<img src="https://writercenter.ru/uploads/images/00/20/23/2013/05/09/26cb04-big.jpg" alt="" height="351" /><br />Type your text here</p>',
	date: 'Today',
};

class Statement extends React.Component {
	render() {
		return (
			<div className="statement single">
				<p className="statement-title">{statement.title}</p>
				<p className="statement-type">{statement.type}</p>
				<img className="statement-image-full" alt="" src={statement.image} />
				<p className="statement-description">{statement.description}</p>
				<div
					className="statement-content"
					dangerouslySetInnerHTML={{
						__html: statement.content ? statement.content : '',
					}}></div>
				<div className="statement-footer">
					<p className="statement-date">{statement.date}</p>
					<div className="footer-element">
						<img src={like} alt="" />
						<p>123</p>
					</div>
					<div className="footer-element">
						<img src={dislike} alt="" />
						<p>432</p>
					</div>
					<div className="footer-element">
						<img src={seen} alt="" />
						<p>12343</p>
					</div>
				</div>
			</div>
		);
	}
}

export default Statement;

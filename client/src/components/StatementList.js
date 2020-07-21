import React from 'react';
import Left from './Left.js';
import Pagination from './Pagination.js';
import NarrowStatement from './NarrowStatement.js';
import WideStatement from './WideStatement.js';

const statements = [
	{
		title: 'Ремонт ультразвуковой мойки Ultrasonic Cleaner HB-4818T',
		type: 'Ремонт',
		image:
			'https://images.wallpapersden.com/image/download/sung-jin-woo-anime-art_67920_3840x2160.jpg',
		description:
			'Принесли на ремонт ультразвуковую мойку Ultrasonic Cleaner HB-4818T. Вскрыв корпус я обнаружил следы ремонта и характерный запах горелого. Вскрыв корпус я обнаружил следы ремонта и характерный запах горелого. Мойка состоит из двух блоков, силового и блока управления. Первым делом был извлечён из корпуса блок управления...',
		date: 'Today',
	},
	{
		title: 'Ремонт ультразвуковой мойки Ultrasonic Cleaner HB-4818T',
		type: 'Ремонт',
		image:
			'https://w7.pngwing.com/pngs/447/1016/png-transparent-drawing-anime-art-manga-mouse-trap-black-hair-monochrome-human.png',
		description:
			'Принесли на ремонт ультразвуковую мойку Ultrasonic Cleaner HB-4818T. Вскрыв корпус я обнаружил следы ремонта и характерный запах горелого. Вскрыв корпус я обнаружил следы ремонта и характерный запах горелого. Мойка состоит из двух блоков, силового и блока управления. Первым делом был извлечён из корпуса блок управления...',
		date: 'Today',
	},
	{
		title: 'Ремонт ультразвуковой мойки Ultrasonic Cleaner HB-4818T',
		type: 'Ремонт',
		image: 'https://avatarko.ru/img/kartinka/32/vampir_anime_31566.jpg',
		description:
			'Принесли на ремонт ультразвуковую мойку Ultrasonic Cleaner HB-4818T. Вскрыв корпус я обнаружил следы ремонта и характерный запах горелого. Вскрыв корпус я обнаружил следы ремонта и характерный запах горелого. Мойка состоит из двух блоков, силового и блока управления. Первым делом был извлечён из корпуса блок управления...',
		date: 'Today',
	},
	{
		title: 'Ремонт ультразвуковой мойки Ultrasonic Cleaner HB-4818T',
		type: 'Ремонт',
		image:
			'https://w7.pngwing.com/pngs/447/1016/png-transparent-drawing-anime-art-manga-mouse-trap-black-hair-monochrome-human.png',
		description:
			'Принесли на ремонт ультразвуковую мойку Ultrasonic Cleaner HB-4818T. Вскрыв корпус я обнаружил следы ремонта и характерный запах горелого. Вскрыв корпус я обнаружил следы ремонта и характерный запах горелого. Мойка состоит из двух блоков, силового и блока управления. Первым делом был извлечён из корпуса блок управления...',
		date: 'Today',
	},
];

class StatementList extends React.Component {
	render() {
		return (
			<div className="container">
				<div className="right-container">
					<WideStatement statement={statements[0]} />
				</div>
				<Left />
				<NarrowStatement statement={statements[0]} />
				<NarrowStatement statement={statements[1]} />
				<NarrowStatement statement={statements[2]} />
				<NarrowStatement statement={statements[3]} />
				<Pagination />
			</div>
		);
	}
}

export default StatementList;

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
	content: `<p><p><br /><img src="https://pm1.narvii.com/6550/9cf477f0c141edd10d4b2d1ff2a988407d08cae1_hq.jpg" alt="" width="60%" />&nbsp; &nbsp;<img src="https://writercenter.ru/uploads/images/00/20/23/2013/05/09/26cb04-big.jpg" alt="" height="351" /><br />Type your text here</p><p>Принесли на ремонт ультразвуковую мойку&nbsp;Ultrasonic Cleaner HB-4818T. Вскрыв корпус я обнаружил следы ремонта и характерный запах горелого.</p>
		< p > <a title="" href="https://vip-cxema.org/images/multithumb_thumbs/2962471778.jpg" target="_blank" rel="lightbox[page] noopener"><img class="multithumb" src="https://vip-cxema.org/images/multithumb_thumbs/2396219185.jpg" alt="Ремонт ультразвуковой мойки Ultrasonic Cleaner HB-4818T" width="400" height="357" /></a><a title="" href="https://vip-cxema.org/images/multithumb_thumbs/4147364274.jpg" target="_blank" rel="lightbox[page] noopener"><img class="cke-resize cke-resize cke-resize cke-resize cke-resize cke-resize cke-resize multithumb" src="https://vip-cxema.org/images/multithumb_thumbs/3379764705.jpg" alt="Ремонт ультразвуковой мойки Ultrasonic Cleaner HB-4818T" width="400" height="357" /></a></p>
	<p><a title="" href="https://vip-cxema.org/images/multithumb_thumbs/3394496514.jpg" target="_blank" rel="lightbox[page] noopener"><img class="multithumb" src="https://vip-cxema.org/images/multithumb_thumbs/4094899281.jpg" alt="Ремонт ультразвуковой мойки Ultrasonic Cleaner HB-4818T" width="400" height="357" /></a></p>
	<p>Вскрыв корпус я обнаружил следы ремонта и характерный запах горелого. Мойка состоит из двух блоков, силового&nbsp;и блока управления. Первым делом был извлечён из корпуса блок управления. Он построен на микроконтроллере&nbsp;<strong>MC80F0604B/D</strong>. Быстро нашёл на этот контроллер даташит, выяснил выводы питания и необходимое напряжение. Подав питание, плата не подала признаков жизни, и при этом сильно нагрелся микроконтроллер. Ну тут всё ясно, контроллер сгоревший.&nbsp;</p>
	<p>Было решено изготовить блок с применением широко распространённого микроконтроллера, выбор пал на&nbsp;<strong>PIC16F628A</strong>. Быстро накидал схему, развёл плату с размерами и размещением кнопок, индикатора и отверстий для крепления&nbsp;максимально приближенными к оригинальной плате.</p>
	<p><a title="" href="https://vip-cxema.org/images/multithumb_thumbs/2628533967.gif" target="_blank" rel="lightbox[page] noopener"><img class="cke-resize cke-resize cke-resize cke-resize cke-resize cke-resize cke-resize multithumb" src="https://vip-cxema.org/images/multithumb_thumbs/2733433500.gif" alt="Ремонт ультразвуковой мойки Ultrasonic Cleaner HB-4818T, схема блока управления" width="400" height="413" /></a></p>
	<p>Схема очень простая, все детали, кроме микроконтроллера, взяты со старой платы.</p>
	<p><a title="" href="https://vip-cxema.org/images/multithumb_thumbs/1158880674.jpg" target="_blank" rel="lightbox[page] noopener"><img class="multithumb" src="https://vip-cxema.org/images/multithumb_thumbs/2069086705.jpg" alt="Ремонт ультразвуковой мойки Ultrasonic Cleaner HB-4818T, новый блок управления" width="400" height="225" /></a><a title="" href="https://vip-cxema.org/images/multithumb_thumbs/45311858.jpg" target="_blank" rel="lightbox[page] noopener"><img class="cke-resize cke-resize cke-resize cke-resize cke-resize cke-resize cke-resize multithumb" src="https://vip-cxema.org/images/multithumb_thumbs/1022606113.jpg" alt="Ремонт ультразвуковой мойки Ultrasonic Cleaner HB-4818T" width="400" height="225" /></a></p>
	<p>Подключение&nbsp;микроконтроллера было&nbsp;скорректировано&nbsp;под удобство разводки печатной платы. Определившись с&nbsp;выводами контроллера, написал программу для него.</p>
	<p>&nbsp;</p>
	<div class="avPlayerWrapper avVideo">
		<div class="avPlayerContainer">
			<div id="AVPlayerID_0_f8ee2208fd7cf42debb8842158d7e2ed" class="avPlayerBlock"><iframe title="JoomlaWorks AllVideos Player" src="https://www.youtube.com/embed/0Fse3OQAevg?rel=0&amp;fs=1&amp;wmode=transparent" width="400" height="300" frameborder="0" scrolling="no" allowfullscreen="allowfullscreen" data-mce-fragment="1"></iframe></div>
		</div>
	</div>
	<p>&nbsp;</p>
	<p>Отладив блок управления, приступил к ремонту силового блока. Беглый осмотр выявил отгоревший 5 вывод ШИМ контроллера LNK306PN. На этот вывод подаётся выпрямленное сетевое напряжение. Восстановил соединение, блок питания запустился. На выходе появилось напряжение питания около 15В, 5В на блок управления отсутствует. 5В формируется линейным стабилизатором LM7805. Заменил микросхему, питание +5В появилось.</p>
	<p><a title="" href="https://vip-cxema.org/images/multithumb_thumbs/1070812866.jpg" target="_blank" rel="lightbox[page] noopener"><img class="multithumb" src="https://vip-cxema.org/images/multithumb_thumbs/26448529.jpg" alt="Ремонт ультразвуковой мойки Ultrasonic Cleaner HB-4818T, внутренняя начинка, силовой блок" width="400" height="225" /></a><a title="" href="https://vip-cxema.org/images/multithumb_thumbs/3179534611.jpg" target="_blank" rel="lightbox[page] noopener"><img class="cke-resize cke-resize cke-resize cke-resize cke-resize cke-resize cke-resize multithumb" src="https://vip-cxema.org/images/multithumb_thumbs/2210596160.jpg" alt="Ремонт ультразвуковой мойки Ultrasonic Cleaner HB-4818T, ультразвуковой генератор" width="400" height="225" /></a></p>
	<p>Дальнейший осмотр выявил обрывы в катушках обоих реле и пробитые транзисторы, включающие эти реле.&nbsp;Заменил сгоревшие детали, собрал всё воедино.</p>
	<p><a title="" href="https://vip-cxema.org/images/multithumb_thumbs/1185890679.jpg" target="_blank" rel="lightbox[page] noopener"><img class="cke-resize cke-resize cke-resize cke-resize cke-resize cke-resize cke-resize multithumb" src="https://vip-cxema.org/images/multithumb_thumbs/2028969252.jpg" alt="Ремонт ультразвуковой мойки Ultrasonic Cleaner HB-4818T, плата управления" width="400" height="225" /></a><a title="" href="https://vip-cxema.org/images/multithumb_thumbs/2077190343.jpg" target="_blank" rel="lightbox[page] noopener"><img class="multithumb" src="https://vip-cxema.org/images/multithumb_thumbs/1167045780.jpg" alt="Ремонт ультразвуковой мойки Ultrasonic Cleaner HB-4818T, плата управления в корпусе" width="400" height="225" /></a></p>
	<p>Подал питание.&nbsp;Мойка заработала.</p>
	<p><a title="" href="https://vip-cxema.org/images/multithumb_thumbs/1013912087.jpg" target="_blank" rel="lightbox[page] noopener"><img class="cke-resize cke-resize cke-resize cke-resize cke-resize cke-resize cke-resize multithumb" src="https://vip-cxema.org/images/multithumb_thumbs/36687428.jpg" alt="Ремонт ультразвуковой мойки Ultrasonic Cleaner HB-4818T, новый блок управления в работе" width="400" height="225" /></a></p>
	<p>В заводской прошивке всего 5&nbsp;режимов работы мойки: 90, 180, 280, 380 и 480 секунд. Программа стартует со второго режима (180 секунд). В новом блоке управления предусмотрено 11 предустановок времени, от 90 до 990 секунд с шагом 90 секунд. Выбранное время запоминается в энергонезависимой памяти и при дальнейшем включении программа стартует с ранее выбранной предустановкой.</p>
	<p>Нагреватель можно включить только во время работы ультразвуковой чистки, он автоматически выключается по окончании выдержки времени.</p>
	<p>Более подробно можно посмотреть на видео</p>
	<p>&nbsp;</p>
	<div class="avPlayerWrapper avVideo">
		<div class="avPlayerContainer">
			<div id="AVPlayerID_1_93cd307b988649969746dd3587cc0982" class="avPlayerBlock"><iframe title="JoomlaWorks AllVideos Player" src="https://www.youtube.com/embed/NzyLBx01AaY?rel=0&amp;fs=1&amp;wmode=transparent" width="400" height="300" frameborder="0" scrolling="no" allowfullscreen="allowfullscreen" data-mce-fragment="1"></iframe></div>
		</div>
	</div>
	<p>&nbsp;</p></p>`,
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

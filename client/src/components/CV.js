import React from 'react';
import { Link } from 'react-router-dom';

const CV = () => {
	return (
		<div className="post single cv">
			<div className="cv-left">
				<img src="https://i.imgur.com/2ygbpyf.jpeg" alt="" />
				<h3>Особисті дані</h3>
				<hr />
				<h4>Номер телефону</h4>
				<p>+380957515531</p>
				<h4>Електронна скринька</h4>
				<p>Leflylll@gmail.com</p>
				<h4>Телеграм</h4>
				<p>@Leflyll</p>
				<h3>Інтереси</h3>
				<hr />
				<h4>Програмування</h4>
				<h4>ПК-желізо</h4>
				<h4>Музика</h4>
				<h4>Радіоелектроніка</h4>
				<h3>Мови</h3>
				<hr />
				<h4>Українська</h4>
				<p>Рідна мова</p>
				<h4>Російська</h4>
				<h4>Англійська</h4>
				<p>На рівні читання документації</p>
			</div>
			<div className="cv-right">
				<h1>Рабешко Олексій</h1>
				<p>
					Студент Факультету інформаційно обчислювальної техніки КПІ 4й курс.
				</p>
				<h3>Приклади робіт:</h3>
				<hr />
				<ul>
					<li>
						<a href="https://dubrmed.rv.ua/">Сайт місцевої лікарні</a>
						<p>
							NodeJS(Express), React, React Router, Redux, MySQL(Sequelize),
							Semantic UI.
						</p>
						<p>GitHub - приватний</p>
					</li>
					<li>
						<Link to="/">
							Особистий блог, сайт для зберігання читлистів та корисної
							інформації.
						</Link>
						<p>
							NodeJS(Express), React, React Router, Redux, MySQL(Sequelize).
						</p>
						<a href="https://github.com/AlioshaRabeshko/devblog">
							GitHub: DevBlog
						</a>
					</li>
					<li>
						<p>
							Програма лікаря УЗД для зберігання пацієнтів та зручного створення
							документу заключення.
						</p>
						<p>
							NodeJS(Electron), React, React Router, SQLite(Sequelize), AWS S3.
						</p>
						<a href="https://github.com/AlioshaRabeshko/UDapp.js">
							GitHub: UDapp.js
						</a>
					</li>
				</ul>
				<h3>Професіональні навики:</h3>
				<hr />
				<ul>
					<li>Знання HTML, CSS, SASS.</li>
					<li>Знання JS, ES6+, NodeJS, AJAX.</li>
					<li>
						Практика роботи з фронтенд бібліотеками React, Redux, React Router.
						Розробка SPA інтерфейсу.
					</li>
					<li>Практика роботи в бекенд розробці на NodeJS, Express.</li>
					<li>Практика розробки інтерфейсу авторизації за допомогою jwt.</li>
					<li>Практика використання MySQL, MongoDB(mongoose), SQLite.</li>
					<li>
						Практика розробки десктопних там мобільних додатків на Electron,
						ReactNative.
					</li>
					<li>Практика використання aws ec2, s3.</li>
					<li>Розуміння ООП.</li>
				</ul>
				<hr />
				<p>Якщо я вас зацікавив - пишить на пошту або в телеграм.</p>
			</div>
		</div>
	);
};

export default CV;

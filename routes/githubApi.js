'use strict';

const express = require('express');
const request = require('request');
const router = express.Router();

router.get('/', (req, response) => {
	request(
		{
			url: 'https://api.github.com/users/aliosharabeshko',
			headers: {
				'User-Agent': 'request',
			},
		},
		(error, res) => {
			const {
				login: userName,
				avatar_url: image,
				html_url: url,
				followers,
				following,
			} = JSON.parse(res.toJSON().body);
			request(
				{
					url: 'https://api.github.com/users/aliosharabeshko/repos',
					headers: {
						'User-Agent': 'request',
					},
				},
				(error, res2) => {
					const repos = JSON.parse(res2.toJSON().body).map((el) => {
						const { name, html_url } = el;
						return { name, repoUrl: html_url };
					});
					response.send({
						userName,
						image,
						url,
						followers,
						following,
						repos,
					});
				}
			);
		}
	);
});

module.exports = router;

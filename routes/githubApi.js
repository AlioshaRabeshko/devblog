'use strict';

const express = require('express');
const request = require('request');
const router = express.Router();

let obj = null;

setInterval(() => {
	request(
		{
			url: 'https://api.github.com/users/aliosharabeshko',
			headers: {
				'User-Agent': 'request',
			},
		},
		(error, res) => {
			if (error) {
				console.log('error: ', error);
				return response.status(404);
			}
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
					try {
						const repos = JSON.parse(res2.toJSON().body).map((el) => {
							const { name, html_url } = el;
							return { name, repoUrl: html_url };
						});
						obj = {
							userName,
							image,
							url,
							followers,
							following,
							repos,
						};
					} catch (error) {
						console.log('error: ', error);
					}
				}
			);
		}
	);
}, 360000);

router.get('/', (req, response) => {
	if (!obj) {
		return response.status(404).send(null);
	}
	response.send(obj);
});

module.exports = router;

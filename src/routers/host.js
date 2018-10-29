const SpotifyWebApi = require('spotify-web-api-node');
const randomWords = require('random-words');
const bodyParser = require('body-parser');
const express = require('express');

const scopes = ['user-read-private',
                'user-read-email',
                'playlist-modify-private',
                'playlist-modify-public',
                'user-modify-playback-state',
                'streaming',
                'user-read-birthdate'];
const state = 'state';

module.exports = router;

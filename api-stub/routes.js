module.exports = function(server) {

  // Create an API namespace, so that the root does not
  // have to be repeated for each end point.
  server.namespace('/api', function() {

    // Return fixture data for '/api/posts/:id'
    server.get('/users', function(req, res) {
      var users = [
      {
        "id": 1011334,
        "name": "3-D Man",
        "description": "",
        "modified": "2014-04-29T14:18:17-0400",
        "thumbnail": {
          "path": "http://i.annihil.us/u/prod/marvel/i/mg/c/e0/535fecbbb9784",
          "extension": "jpg"
        },
        "resourceURI": "http://gateway.marvel.com/v1/public/characters/1011334",
        "urls": [
        {
          "type": "detail",
          "url": "http://marvel.com/characters/74/3-d_man?utm_campaign=apiRef&utm_source=3ab6eb8b6ef6df9d9ca15990bde84a7f"
        },
        {
          "type": "wiki",
          "url": "http://marvel.com/universe/3-D_Man_(Chandler)?utm_campaign=apiRef&utm_source=3ab6eb8b6ef6df9d9ca15990bde84a7f"
        },
        {
          "type": "comiclink",
          "url": "http://marvel.com/comics/characters/1011334/3-d_man?utm_campaign=apiRef&utm_source=3ab6eb8b6ef6df9d9ca15990bde84a7f"
        }
        ]
      },
      {
        "id": 1017100,
        "name": "A-Bomb (HAS)",
        "description": "Rick Jones has been Hulk's best bud since day one, but now he's more than a friend...he's a teammate! Transformed by a Gamma energy explosion, A-Bomb's thick, armored skin is just as strong and powerful as it is blue. And when he curls into action, he uses it like a giant bowling ball of destruction! ",
        "modified": "2013-09-18T15:54:04-0400",
        "thumbnail": {
          "path": "http://i.annihil.us/u/prod/marvel/i/mg/3/20/5232158de5b16",
          "extension": "jpg"
        },
        "resourceURI": "http://gateway.marvel.com/v1/public/characters/1017100",
        "urls": [
        {
          "type": "detail",
          "url": "http://marvel.com/characters/76/a-bomb?utm_campaign=apiRef&utm_source=3ab6eb8b6ef6df9d9ca15990bde84a7f"
        },
        {
          "type": "comiclink",
          "url": "http://marvel.com/comics/characters/1017100/a-bomb_has?utm_campaign=apiRef&utm_source=3ab6eb8b6ef6df9d9ca15990bde84a7f"
        }
        ]
      },
      {
        "id": 1009144,
        "name": "A.I.M.",
        "description": "AIM is a terrorist organization bent on destroying the world.",
        "modified": "2013-10-17T14:41:30-0400",
        "thumbnail": {
          "path": "http://i.annihil.us/u/prod/marvel/i/mg/6/20/52602f21f29ec",
          "extension": "jpg"
        },
        "resourceURI": "http://gateway.marvel.com/v1/public/characters/1009144",
        "urls": [
        {
          "type": "detail",
          "url": "http://marvel.com/characters/77/aim.?utm_campaign=apiRef&utm_source=3ab6eb8b6ef6df9d9ca15990bde84a7f"
        },
        {
          "type": "wiki",
          "url": "http://marvel.com/universe/A.I.M.?utm_campaign=apiRef&utm_source=3ab6eb8b6ef6df9d9ca15990bde84a7f"
        },
        {
          "type": "comiclink",
          "url": "http://marvel.com/comics/characters/1009144/aim.?utm_campaign=apiRef&utm_source=3ab6eb8b6ef6df9d9ca15990bde84a7f"
        }
        ]
      },
      {
        "id": 1010699,
        "name": "Aaron Stack",
        "description": "",
        "modified": "1969-12-31T19:00:00-0500",
        "thumbnail": {
          "path": "http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available",
          "extension": "jpg"
        },
        "resourceURI": "http://gateway.marvel.com/v1/public/characters/1010699",
        "urls": [
        {
          "type": "detail",
          "url": "http://marvel.com/characters/2809/aaron_stack?utm_campaign=apiRef&utm_source=3ab6eb8b6ef6df9d9ca15990bde84a7f"
        },
        {
          "type": "comiclink",
          "url": "http://marvel.com/comics/characters/1010699/aaron_stack?utm_campaign=apiRef&utm_source=3ab6eb8b6ef6df9d9ca15990bde84a7f"
        }
        ]
      },
      {
        "id": 1009146,
        "name": "Abomination (Emil Blonsky)",
        "description": "Formerly known as Emil Blonsky, a spy of Soviet Yugoslavian origin working for the KGB, the Abomination gained his powers after receiving a dose of gamma radiation similar to that which transformed Bruce Banner into the incredible Hulk.",
        "modified": "2012-03-20T12:32:12-0400",
        "thumbnail": {
          "path": "http://i.annihil.us/u/prod/marvel/i/mg/9/50/4ce18691cbf04",
          "extension": "jpg"
        },
        "resourceURI": "http://gateway.marvel.com/v1/public/characters/1009146",
        "urls": [
        {
          "type": "detail",
          "url": "http://marvel.com/characters/81/abomination?utm_campaign=apiRef&utm_source=3ab6eb8b6ef6df9d9ca15990bde84a7f"
        },
        {
          "type": "wiki",
          "url": "http://marvel.com/universe/Abomination?utm_campaign=apiRef&utm_source=3ab6eb8b6ef6df9d9ca15990bde84a7f"
        },
        {
          "type": "comiclink",
          "url": "http://marvel.com/comics/characters/1009146/abomination_emil_blonsky?utm_campaign=apiRef&utm_source=3ab6eb8b6ef6df9d9ca15990bde84a7f"
        }
        ]
      },
      {
        "id": 1016823,
        "name": "Abomination (Ultimate)",
        "description": "",
        "modified": "2012-07-10T19:11:52-0400",
        "thumbnail": {
          "path": "http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available",
          "extension": "jpg"
        },
        "resourceURI": "http://gateway.marvel.com/v1/public/characters/1016823",
        "urls": [
        {
          "type": "detail",
          "url": "http://marvel.com/characters/81/abomination?utm_campaign=apiRef&utm_source=3ab6eb8b6ef6df9d9ca15990bde84a7f"
        },
        {
          "type": "comiclink",
          "url": "http://marvel.com/comics/characters/1016823/abomination_ultimate?utm_campaign=apiRef&utm_source=3ab6eb8b6ef6df9d9ca15990bde84a7f"
        }
        ]
      },
      {
        "id": 1009148,
        "name": "Absorbing Man",
        "description": "",
        "modified": "2013-10-24T14:32:08-0400",
        "thumbnail": {
          "path": "http://i.annihil.us/u/prod/marvel/i/mg/1/b0/5269678709fb7",
          "extension": "jpg"
        },
        "resourceURI": "http://gateway.marvel.com/v1/public/characters/1009148",
        "urls": [
        {
          "type": "detail",
          "url": "http://marvel.com/characters/84/absorbing_man?utm_campaign=apiRef&utm_source=3ab6eb8b6ef6df9d9ca15990bde84a7f"
        },
        {
          "type": "wiki",
          "url": "http://marvel.com/universe/Absorbing_Man?utm_campaign=apiRef&utm_source=3ab6eb8b6ef6df9d9ca15990bde84a7f"
        },
        {
          "type": "comiclink",
          "url": "http://marvel.com/comics/characters/1009148/absorbing_man?utm_campaign=apiRef&utm_source=3ab6eb8b6ef6df9d9ca15990bde84a7f"
        }
        ]
      },
      {
        "id": 1009149,
        "name": "Abyss",
        "description": "",
        "modified": "2014-04-29T14:10:43-0400",
        "thumbnail": {
          "path": "http://i.annihil.us/u/prod/marvel/i/mg/9/30/535feab462a64",
          "extension": "jpg"
        },
        "resourceURI": "http://gateway.marvel.com/v1/public/characters/1009149",
        "urls": [
        {
          "type": "detail",
          "url": "http://marvel.com/characters/85/abyss?utm_campaign=apiRef&utm_source=3ab6eb8b6ef6df9d9ca15990bde84a7f"
        },
        {
          "type": "wiki",
          "url": "http://marvel.com/universe/Abyss_(alien)?utm_campaign=apiRef&utm_source=3ab6eb8b6ef6df9d9ca15990bde84a7f"
        },
        {
          "type": "comiclink",
          "url": "http://marvel.com/comics/characters/1009149/abyss?utm_campaign=apiRef&utm_source=3ab6eb8b6ef6df9d9ca15990bde84a7f"
        }
        ]
      },
      {
        "id": 1010903,
        "name": "Abyss (Age of Apocalypse)",
        "description": "",
        "modified": "1969-12-31T19:00:00-0500",
        "thumbnail": {
          "path": "http://i.annihil.us/u/prod/marvel/i/mg/3/80/4c00358ec7548",
          "extension": "jpg"
        },
        "resourceURI": "http://gateway.marvel.com/v1/public/characters/1010903",
        "urls": [
        {
          "type": "detail",
          "url": "http://marvel.com/characters/85/abyss?utm_campaign=apiRef&utm_source=3ab6eb8b6ef6df9d9ca15990bde84a7f"
        },
        {
          "type": "wiki",
          "url": "http://marvel.com/universe/Abyss_(Age_of_Apocalypse)?utm_campaign=apiRef&utm_source=3ab6eb8b6ef6df9d9ca15990bde84a7f"
        },
        {
          "type": "comiclink",
          "url": "http://marvel.com/comics/characters/1010903/abyss_age_of_apocalypse?utm_campaign=apiRef&utm_source=3ab6eb8b6ef6df9d9ca15990bde84a7f"
        }
        ]
      },
      {
        "id": 1011266,
        "name": "Adam Destine",
        "description": "",
        "modified": "1969-12-31T19:00:00-0500",
        "thumbnail": {
          "path": "http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available",
          "extension": "jpg"
        },
        "resourceURI": "http://gateway.marvel.com/v1/public/characters/1011266",
        "urls": [
        {
          "type": "detail",
          "url": "http://marvel.com/characters/2902/adam_destine?utm_campaign=apiRef&utm_source=3ab6eb8b6ef6df9d9ca15990bde84a7f"
        },
        {
          "type": "wiki",
          "url": "http://marvel.com/universe/Destine,_Adam?utm_campaign=apiRef&utm_source=3ab6eb8b6ef6df9d9ca15990bde84a7f"
        },
        {
          "type": "comiclink",
          "url": "http://marvel.com/comics/characters/1011266/adam_destine?utm_campaign=apiRef&utm_source=3ab6eb8b6ef6df9d9ca15990bde84a7f"
        }
        ]
      }
      ]
      res.send(users);
    });
});
};

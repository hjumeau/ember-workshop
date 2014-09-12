module.exports = function(server) {

  // Create an API namespace, so that the root does not
  // have to be repeated for each end point.
  server.namespace('/api', function() {

    // Return fixture data for '/api/posts/:id'
    server.get('/users', function(req, res) {
      var users = [
      {
        "id": 1010744,
        "name": "Rocket Raccoon",
        "description": "A genetically-engineered alien with a knack for big guns and fast ships, Rocket serves as the backbone of the Guardians of the Galaxy!",
        "modified": "2014-07-17T17:32:43-0400",
        "thumbnail": {
          "path": "http://i.annihil.us/u/prod/marvel/i/mg/9/b0/50fec1e49298a",
          "extension": "jpg"
        },
        "resourceURI": "http://gateway.marvel.com/v1/public/characters/1010744",
        "urls": [
          {
            "type": "detail",
            "url": "http://marvel.com/comics/characters/1010744/rocket_raccoon?utm_campaign=apiRef&utm_source=3ab6eb8b6ef6df9d9ca15990bde84a7f"
          },
          {
            "type": "wiki",
            "url": "http://marvel.com/universe/Rocket_Raccoon?utm_campaign=apiRef&utm_source=3ab6eb8b6ef6df9d9ca15990bde84a7f"
          },
          {
            "type": "comiclink",
            "url": "http://marvel.com/comics/characters/1010744/rocket_raccoon?utm_campaign=apiRef&utm_source=3ab6eb8b6ef6df9d9ca15990bde84a7f"
          }
        ]
      },
      {
        "id": 1009351,
        "name": "Hulk",
        "description": "Caught in a gamma bomb explosion while trying to save the life of a teenager, Dr. Bruce Banner was transformed into the incredibly powerful creature called the Hulk. An all too often misunderstood hero, the angrier the Hulk gets, the stronger the Hulk gets.",
        "modified": "2014-06-10T16:12:58-0400",
        "thumbnail": {
          "path": "http://i.annihil.us/u/prod/marvel/i/mg/5/a0/538615ca33ab0",
          "extension": "jpg"
        },
        "resourceURI": "http://gateway.marvel.com/v1/public/characters/1009351",
        "urls": [
          {
            "type": "detail",
            "url": "http://marvel.com/characters/25/hulk?utm_campaign=apiRef&utm_source=3ab6eb8b6ef6df9d9ca15990bde84a7f"
          },
          {
            "type": "wiki",
            "url": "http://marvel.com/universe/Hulk_(Bruce_Banner)?utm_campaign=apiRef&utm_source=3ab6eb8b6ef6df9d9ca15990bde84a7f"
          },
          {
            "type": "comiclink",
            "url": "http://marvel.com/comics/characters/1009351/hulk?utm_campaign=apiRef&utm_source=3ab6eb8b6ef6df9d9ca15990bde84a7f"
          }
        ]
      },
      {
        "id": 1009356,
        "name": "Human Torch",
        "description": "",
        "modified": "2013-10-18T17:31:30-0400",
        "thumbnail": {
          "path": "http://i.annihil.us/u/prod/marvel/i/mg/3/70/5261a7f7b0917",
          "extension": "jpg"
        },
        "resourceURI": "http://gateway.marvel.com/v1/public/characters/1009356",
        "urls": [
          {
            "type": "detail",
            "url": "http://marvel.com/characters/26/human_torch?utm_campaign=apiRef&utm_source=3ab6eb8b6ef6df9d9ca15990bde84a7f"
          },
          {
            "type": "wiki",
            "url": "http://marvel.com/universe/Human_Torch_%28Johnny_Storm%29?utm_campaign=apiRef&utm_source=3ab6eb8b6ef6df9d9ca15990bde84a7f"
          },
          {
            "type": "comiclink",
            "url": "http://marvel.com/comics/characters/1009356/human_torch?utm_campaign=apiRef&utm_source=3ab6eb8b6ef6df9d9ca15990bde84a7f"
          }
        ]
      },
      {
        "id": 1009718,
        "name": "Wolverine",
        "description": "Born with super-human senses and the power to heal from almost any wound, Wolverine was captured by a secret Canadian organization and given an unbreakable skeleton and claws. Treated like an animal, it took years for him to control himself. Now, he's a premiere member of both the X-Men and the Avengers.",
        "modified": "2014-06-10T16:13:25-0400",
        "thumbnail": {
          "path": "http://i.annihil.us/u/prod/marvel/i/mg/2/60/537bcaef0f6cf",
          "extension": "jpg"
        },
        "resourceURI": "http://gateway.marvel.com/v1/public/characters/1009718",
        "urls": [
          {
            "type": "detail",
            "url": "http://marvel.com/characters/66/wolverine?utm_campaign=apiRef&utm_source=3ab6eb8b6ef6df9d9ca15990bde84a7f"
          },
          {
            "type": "wiki",
            "url": "http://marvel.com/universe/Wolverine_(James_Howlett)?utm_campaign=apiRef&utm_source=3ab6eb8b6ef6df9d9ca15990bde84a7f"
          },
          {
            "type": "comiclink",
            "url": "http://marvel.com/comics/characters/1009718/wolverine?utm_campaign=apiRef&utm_source=3ab6eb8b6ef6df9d9ca15990bde84a7f"
          }
        ]
      },
      {
        "id": 1009610,
        "name": "Spider-Man",
        "description": "Bitten by a radioactive spider, high school student Peter Parker gained the speed, strength and powers of a spider. Adopting the name Spider-Man, Peter hoped to start a career using his new abilities. Taught that with great power comes great responsibility, Spidey has vowed to use his powers to help people.",
        "modified": "2014-06-02T12:35:16-0400",
        "thumbnail": {
          "path": "http://i.annihil.us/u/prod/marvel/i/mg/3/50/526548a343e4b",
          "extension": "jpg"
        },
        "resourceURI": "http://gateway.marvel.com/v1/public/characters/1009610",
        "urls": [
        {
          "type": "detail",
          "url": "http://marvel.com/characters/54/spider-man?utm_campaign=apiRef&utm_source=3ab6eb8b6ef6df9d9ca15990bde84a7f"
        },
        {
          "type": "wiki",
          "url": "http://marvel.com/universe/Spider-Man_(Peter_Parker)?utm_campaign=apiRef&utm_source=3ab6eb8b6ef6df9d9ca15990bde84a7f"
        },
        {
          "type": "comiclink",
          "url": "http://marvel.com/comics/characters/1009610/spider-man?utm_campaign=apiRef&utm_source=3ab6eb8b6ef6df9d9ca15990bde84a7f"
        }
        ]
      }
      ,
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
      }
      ]
      res.send(users);
    });
});
};

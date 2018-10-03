# algolia-backend

>

## Index an app

Request

    POST /api/1/apps
    {
      "name": "A Comic Book Title",
      "image": "http://a5.mzstatic.com/us/r1000/107/Purple/d7/fa/dd/mzl.podmmzdq.175x175-75.jpg",
      "link": "http://itunes.apple.com/us/app/disney-comics/id422295758?mt=8",
      "category": "Books",
      "rank": 36
    }

Response

    {
      "id": "166077071"
    }

## Remove an app index

    DELETE /api/1/apps/166077071

Response

    {
      "id": "166077071"
    }

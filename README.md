## Setup
Note: This assumes you have cloned the repo, you have nodejs installed, you are in the root directory of the app,
and that you currently have [cow-api](https://github.com/joewang704/cow-api) set up and running.

1) Run `npm install`

2) Open a terminal tab/window and run `npm run watch`

3) App should now be accessible at localhost:8080

## Other commands

`npm run lint` - lints code

## Store

Our global store object:

```javascript
{
  sidebar: Map({
    currentGroup: Number
  })
  entities: Map({
    items: Map({
      id (String): {
        id: Number,
        text: String,
        startTime: String (format hh:mm(am|pm)),
        endTime: String (format hh:mm(am|pm)),
        day: String (format yyyy-mm-dd),
        checkable: Boolean,
        group: Number,
        position: Number, // used for intersecting events
        blockId: Number // used for intersecting events
      }
    }),
    groups: Map({
      id (String): {
        id: Number,
        name: String,
        color: String,
        items: List([itemId (Number)])
      }
    }),
    blocks: Map({
      id (String): {
        id: Number,
        items: List([itemId (Number)])
      }
      nextBlockId: Number
    })
  }),
  // TODO: make events, todos, groups use the same data structure
  events: Set([id (String)])
  todos: OrderedSet([id (String)])
  groups: List([id (String)])
  calendar: Map({
    eventMarker: Map({
      startTime: String,
      endTime: String,
      day: String
    })
  })
  notification: {
    isActive: Boolean,
    message: String,
    action: String,
    key: Number
  }
}
```

UML Diagram
![UML Diagram of Store]
(https://s3.amazonaws.com/prod_object_assets/assets/148342521645441/Cow_UML_07262016.png?AWSAccessKeyId=AKIAIXM6FRIC5QVSA63Q&Expires=1466992819&Signature=lPFUqJPZmdVkdSNXqlf1rdhZncE%3D#_=_)

## Troubleshooting

If you see `undefined`, check that you currently have the [cow-api](https://github.com/joewang704/cow-api) up and running.

## Setup
Note: This assumes you have cloned the repo, you have nodejs installed, you are in the root directory of the app,
and that you currently have [cow-api](https://github.com/joewang704/cow-api) set up and running.

1) Run `npm install`

2) Open a terminal tab/window and run `npm run dev`

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
      id (String): Map({
        id: Number,
        text: String,
        startTime: String (format hh:mm(am|pm)),
        endTime: String (format hh:mm(am|pm)),
        day: String (format yyyy-mm-dd),
        checkable: Boolean,
        group: Number,
        position: Number, // used for intersecting events
        blockId: Number // used for intersecting events
      })
    }),
    groups: Map({ // used for intersecting events
      id (String): Map({
        id: Number,
        name: String,
        color: String,
        items: List([itemId (Number)])
      })
    }),
    blocks: Map({
      id (String): Map({
        id: Number,
        items: List([itemId (Number)])
        size: Number, // size of items list
      })
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
(http://jdevanathan3.github.io/Cow_UML_Current.png)

## Troubleshooting

If you see `undefined`, check that you currently have the [cow-api](https://github.com/joewang704/cow-api) up and running.

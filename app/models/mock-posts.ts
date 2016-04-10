import {Post} from './post'

export var POSTS:Post[] = [
    {
        "post_id": 1,
        "parent_id": 0,
        "level": 0,
        "time": 1097007463,
        "name": "Koze",
        "email": "Something",
        "title": "Thread title 1",
        "text": "Test 123",
        "origmessage": "Test123",
        "rate_anz": 0,
        "rate_value": 0,
        "inreplyto": null
    },
    {
        "post_id": 10,
        "parent_id": 1,
        "level": 1,
        "time": 1097007463,
        "name": "Drummer",
        "email": "Something",
        "title": "RE: Thread title 1",
        "text": "Test 123 reply",
        "origmessage": "Test123 reply",
        "rate_anz": 0,
        "rate_value": 0,
        "inreplyto": null
    },
    {
        "post_id": 2,
        "parent_id": 0,
        "level": 0,
        "time": 1097007463,
        "name": "Koze",
        "email": "Something",
        "title": "Thread title 2",
        "text": "Test 345",
        "origmessage": "Test345",
        "rate_anz": 0,
        "rate_value": 0,
        "inreplyto": null
    },
    {
        "post_id": 20,
        "parent_id": 2,
        "level": 1,
        "time": 1097007463,
        "name": "Drummer",
        "email": "Something",
        "title": "RE: Thread title 2",
        "text": "Test 345 reply",
        "origmessage": "Test345 reply",
        "rate_anz": 0,
        "rate_value": 0,
        "inreplyto": null
    }
]

export class InMemoryDataService {
    createDb() {
        let threads = [
            {
                "post_id": 1,
                "last_post": 10,
                "last_post_time": 0,
                "name": "Koze",
                "answers": 10,
                "creator": "Koze",
                "premium": false,
                "id_category": 1
            },
            {
                "post_id": 2,
                "last_post": 20,
                "last_post_time": 0,
                "name": "Drummer",
                "answers": 10,
                "creator": "Drummer",
                "premium": true,
                "id_category": 2
            }]

        let posts = [
            {
                "id": 1,
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
                "inreplyto": null,
                "thread_id": 1
            },
            {
                "id": 10,
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
                "inreplyto": null,
                "thread_id": 1
            },
            {
                "id": 2,
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
                "inreplyto": null,
                "thread_id": 2
            },
            {
                "id": 20,
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
                "inreplyto": null,
                "thread_id": 2
            }
        ]
        return {threads, posts};
    }
}
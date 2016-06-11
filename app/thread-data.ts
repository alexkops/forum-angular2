export class ThreadData {
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
        return {threads};
    }
}
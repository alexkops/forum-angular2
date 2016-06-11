import {Thread} from './thread';
describe('Thread', () => {
    it('has name', () => {
        let thread:Thread = {
            answers: 0, creator: "", id_category: 0, last_post: 0, last_post_time: 0,
            name: "test thread", post_id: 0, premium: false
        }
        expect(thread.name).toEqual('test thread');
    });
});
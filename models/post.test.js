var Post = require('./post');

describe('Post model', function(){
  test('the all method should return all the records.', function(){
    expect(Post.all().length).toBe(3);
  });

  test('the findOne method gives us the correct post.', function(){
    var post = Post.findOne(1);
    expect(post.id).toBe(1);
    expect(post.title).toBe('MVC for modern web frameworks');
  });
});

const { Post } = require('../models');

const postdata = [
  {
    id: 1,
    title: 'Consectetur adipiscing elit!',
    post_content: 'Lorem ipsum dolor sit amet sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    user_id: 1 
  },
  {
    id: 2,
    title: 'Interdum varius sit amet mattis.',
    post_content: 'Sem integer vitae justo eget magna fermentum iaculis eu non. Ornare suspendisse sed nisi lacus sed. Odio eu feugiat pretium nibh ipsum consequat nisl vel.',
    user_id: 1 
  },
  {
    id: 3,
    title: 'Egestas congue.',
    post_content: 'Aliquam sem et tortor consequat id porta nibh venenatis. In hac habitasse platea dictumst vestibulum rhoncus est pellentesque elit.',
    user_id: 1
  },
  {
    id: 4,
    title: 'Viverra tellus in hac.',
    post_content: 'Faucibus in ornare quam viverra orci sagittis eu volutpat odio. Ut eu sem integer vitae justo eget magna. Nec ullamcorper sit amet risus nullam eget felis eget nunc.',
    user_id: 1 
  },
  {
    id: 5,
    title: 'Sit amet facilisis.',
    post_content: 'Molestie nunc non blandit massa enim nec dui.',
    user_id: 2 
  },
  {
    id: 6,
    title: 'Lorem ipsum dolor.',
    post_content: 'Pellentesque massa placerat duis ultricies lacus sed. Id aliquet lectus proin nibh nisl condimentum id venenatis. Elementum sagittis vitae et leo duis ut diam quam nulla. Lobortis elementum nibh tellus molestie nunc non blandit. Justo eget magna fermentum iaculis eu non.',
    user_id: 2 
  }
];

const seedPosts = () => Post.bulkCreate(postdata);

module.exports = seedPosts;

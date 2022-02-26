const { Post } = require('../models');

const postdata = [
  {
    title: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    post_content: 'https://buzzfeed.com/in/imperdiet/et/commodo/vulputate.png',
    user_id: 10
  },
  {
    title: 'Interdum varius sit amet mattis vulputate enim.',
    post_content: 'https://nasa.gov/donec.json',
    user_id: 8
  },
  {
    title: 'Egestas congue quisque egestas diam.',
    post_content: 'https://europa.eu/parturient/montes/nascetur/ridiculus/mus/etiam/vel.aspx',
    user_id: 1
  },
  {
    title: 'Viverra tellus in hac habitasse platea dictumst vestibulum.',
    post_content: 'http://desdev.cn/enim/blandit/mi.jpg',
    user_id: 4
  },
  {
    title: 'Sit amet facilisis magna etiam.',
    post_content: 'http://google.ca/nam/nulla/integer.aspx',
    user_id: 7
  },
  {
    title: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit.',
    post_content: 'https://stanford.edu/consequat.png',
    user_id: 4
  },
  {
    title: 'Turpis egestas sed tempus urna et.',
    post_content: 'http://edublogs.org/non/ligula/pellentesque.js',
    user_id: 1
  },
  {
    title: 'Morbi non quam nec dui luctus rutrum.',
    post_content: 'http://ucla.edu/consequat/nulla.html',
    user_id: 1
  },
  {
    title: 'Turpis egestas sed tempus urna et pharetra pharetra massa massa.',
    post_content: 'http://theguardian.com/dui/vel/nisl/duis/ac/nibh.aspx',
    user_id: 9
  },
  {
    title: 'Posuere ac ut consequat semper viverra nam libero justo.',
    post_content: 'https://reverbnation.com/ligula/sit.jpg',
    user_id: 5
  },
  {
    title: 'Eros donec ac odio tempor orci dapibus ultrices in iaculis.',
    post_content: 'http://china.com.cn/lectus/vestibulum.json',
    user_id: 3
  },
  {
    title: 'Dictumst vestibulum rhoncus est pellentesque elit ullamcorper dignissim cras.',
    post_content: 'http://networksolutions.com/nam/ultrices/libero/non/mattis/pulvinar.json',
    user_id: 10
  },
  {
    title: 'Vulputate eu scelerisque felis imperdiet proin fermentum.',
    post_content: 'https://instagram.com/ac/neque/duis/bibendum/morbi/non.xml',
    user_id: 8
  },
  {
    title: 'Quam quisque id diam vel quam elementum pulvinar etiam. Nunc eget lorem dolor sed.',
    post_content: 'https://lycos.com/natoque/penatibus/et.html',
    user_id: 3
  },
  {
    title: 'Cras semper auctor neque vitae tempus quam pellentesque nec nam.',
    post_content: 'https://gmpg.org/lorem.jpg',
    user_id: 3
  },
  {
    title:
      'Turpis egestas integer eget aliquet nibh praesent tristique magna sit.',
    post_content: 'https://paginegialle.it/mattis/egestas.jsp',
    user_id: 7
  },
  {
    title: 'Interdum velit euismod in pellentesque massa placerat duis.',
    post_content: 'http://wikia.com/turpis/eget.jpg',
    user_id: 6
  },
  {
    title: 'Facilisis volutpat est velit egestas dui id ornare.',
    post_content: 'https://shareasale.com/quis.json',
    user_id: 4
  },
  {
    title: 'Diam maecenas ultricies mi eget mauris pharetra et ultrices neque.',
    post_content: 'http://java.com/diam/neque/vestibulum/eget/vulputate/ut/ultrices.png',
    user_id: 6
  },
  {
    title: 'Massa tempor nec feugiat nisl pretium fusce id velit ut.',
    post_content: 'https://java.com/at/nibh/in.png',
    user_id: 7
  }
];

const seedPosts = () => Post.bulkCreate(postdata);

module.exports = seedPosts;

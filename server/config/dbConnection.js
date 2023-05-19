const mongoose = require('mongoose');
const conn_str =
  'mongodb+srv://tanujprajapati2000:D0ZvWX9zR7piPwhI@cluster0.mpp75wh.mongodb.net/myFirstDatabase?retryWrites=true&w=majority';
mongoose
  .connect(conn_str, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(res => {
    console.log('DB connection established');
    // const Cat = mongoose.model('Cat', {name: String});
    // const kitty = new Cat({name: 'Zildjian'});
    // kitty.save().then(() => console.log('meow'));
    // console.log(res);
  })
  .catch(err => {
    console.log('error', err);
  });
module.exports = {};

module.exports = io => {
  io.on('connection', socket => {
    socket.on('join', async (data, callback) => {
      console.log(data);
    });
    socket.on('typing', async (data, callback) => {
      console.log(data, 'TYPING start', socket.id);
    });
    socket.on('send', async (data, callback) => {
      console.log(data, 'TYPING End', socket.id);
    });
    // ...console.log('connect socket');
  });
};

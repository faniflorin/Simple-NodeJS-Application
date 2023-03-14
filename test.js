const assert = require('assert');
const http = require('http');

const app = require('./app');

const port = process.env.PORT || 3000;

describe('Test server', function () {
  it('should return 200', function (done) {
    http.get(`http://localhost:${port}`, function (res) {
      assert.strictEqual(res.statusCode, 200);
      done();
    });
  });

  it('should return "Hello, world!"', function (done) {
    http.get(`http://localhost:${port}`, function (res) {
      res.setEncoding('utf8');
      let body = '';
      res.on('data', function (chunk) {
        body += chunk;
      });
      res.on('end', function () {
        assert.strictEqual(body, 'Hello, world!');
        done();
      });
    });
  });
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});

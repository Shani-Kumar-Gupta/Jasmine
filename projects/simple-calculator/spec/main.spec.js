describe('main.js', function () {
  describe('main()', function () {
    it('validate expression', function () { });
    it('Calls add', function () { });
    it('Calls subtract', function () { });
    it('Calls multiply', function () { });
    it('Calls devide', function () { });
    it('validate operation', function () { });
    it('Calls updateResult', function () { });
  });
  describe('updateResult()', function () {

    let element;
    beforeAll(function () {
      element = document.createElement('div');
      element.setAttribute('id', 'myResult');
      document.body.appendChild(element);
    });

    afterAll(function () {
      const element = document.getElementById('myResult');
      document.body.removeChild(element);
    });
    it('add result to the dom element', function () {
      // const element = document.createElement('div');
      // element.setAttribute('id', 'myResult');
      // document.body.appendChild(element);
      updateResult('5');
      expect(element.innerText).toBe('5');
    });
  });
});
const CustomMatcher = {
  toBeCalculator: function () {
    return {
      compare: function (actual, expected) {
        const result = {
          pass: false,
          message: ''
        };
        if (actual instanceof Calculator) {
          result.pass = true;
        } else {
          result.pass = false;
          result.message = 'Shani: calc should be an instance of Calculator';
        }
        return result;
      }
    }
  }
}
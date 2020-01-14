const args = process.argv.slice(2);

const timer = function(array) {
  for (const element of array) {
    if (element >= 0) {
      setTimeout(() => {
        process.stdout.write('\x07');
      }, 1000 * element);
    }
  }
};

timer(args);
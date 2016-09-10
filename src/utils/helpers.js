const Helpers = {
  shortenString: (string, letterCount) => {
    if (string.length > letterCount) {
      var cutString = string.substring(0, letterCount);
      return cutString + '...';
    }
    else {
      return string;
    }
  }
};

export default Helpers;

const Helpers = {
  shortDesc: (string) => {
    if (string.length > 30) {
      var cutString = string.substring(0, 30);
      return cutString + '...';
    }
    else {
      return string;
    }
  }
};

export default Helpers;

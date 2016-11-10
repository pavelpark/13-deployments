(function(module) {
  var reposObj = {};

  reposObj.requestRepos = function(callback) {
    // NOTE: refactor this request into an $.get call
    $.when(
    $.get('https://api.github.com/users/codefellows-seattle-301d14/repos', function(data) {
      reposObj.allRepos = data;
    }),
    $.get('http://api.github.com/users/codefellows/followers', function(data) {
      reposObj.followers = data;
    })
    ).done(callback);
  };

  reposObj.withTheAttribute = function(attr) {
    return reposObj.allRepos.filter(function(aRepo) {
      return aRepo[attr];
    });
  };

  module.reposObj = reposObj;
})(window);

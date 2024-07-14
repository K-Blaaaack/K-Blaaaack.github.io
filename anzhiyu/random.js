var posts=["2024/07/14/本站正在试运行-从手搓到hexo/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };
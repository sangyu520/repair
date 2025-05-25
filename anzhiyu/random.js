var posts=["2025/05/24/C++/","2025/05/22/try/","2025/05/23/期末复习以及拔高/","2025/05/19/CET6-words/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };
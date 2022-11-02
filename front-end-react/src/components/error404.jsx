const React = require('react')

function error404 () {
    return (

          <main>
              <h1>404: PAGE NOT FOUND</h1>
              <p>Oops, sorry, we can't find this page!</p>
              <div>
                    <img src="assets/images/error404-img.jpg" alt="Star Wars Lego Image" />
                    <div>
                        Photo by <a href="AUTHOR_LINK">Daniel K Cheung</a> on <a href="UNSPLASH_LINK">Unsplash</a>
                    </div>
                </div>
          </main>
    );
};
  

module.exports = error404;
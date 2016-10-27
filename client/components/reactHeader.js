/* @jsx React.DOM
 */

var React = require('react');

var Header = React.createClass({
    
        render: function() {
            return (
        <header class="navbar navbar-fixed-top navbar-inverse">
         <div class="container">
            <nav>
                <ul class="nav navbar-nav navbar-right">
                 <li><a href="/">1st story</a></li>
                  <li><a href="about">about the site</a></li>
                  <li><a href="#">Log In!</a></li>
                </ul>
            </nav>
         </div>
        </header>
        );
    }
});

modules.exports = Header;
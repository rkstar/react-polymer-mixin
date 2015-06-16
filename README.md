# react-polymer-mixin
Polymer web components mixin for React.js

# Installation
Download the `polymer.js` file and include it anywhere in your project that is available to the client code. 

# Usage
You can add the `Polymer.Mixin` to any React component to enable you to use [Polymer Components](https://www.polymer-project.org/1.0/) easily.
```
Layout = React.createClass({
  mixins: [Polymer.Mixin],
  
  render: function(){
    return (
      <paper-drawer-panel id="paperDrawerPanel" className="x-scope paper-drawer-panel-0" data-polymer="narrow, selected=main, responsive-width=4000px">
        <iron-media-query id="mq" className="style-scope paper-drawer-panel" ></iron-media-query>
          <div data-polymer="drawer">
            <paper-toolbar id="drawerToolbar">
              <span>Menu</span>
            </paper-toolbar>
            <paper-menu className="list" role="menu" attr-for-selected="data-route" selected="{{route}}">
              <paper-item role="listiem" className="x-scope paper-item-0 iron-selected">
                <a data-route="home" href="/" data-polymer="layout, horizontal, center, raised">
                  <iron-icon icon="home"></iron-icon>
                  <span>Home</span>
                </a>
              </paper-item>
              <paper-item role="listiem" className="x-scope paper-item-0 iron-selected">
                <a data-route="users" href="/users" data-polymer="layout, horizontal, center, raised">
                  <iron-icon icon="info"></iron-icon>
                  <span>Users</span>
                </a>
              </paper-item>
              <paper-item role="listiem" className="x-scope paper-item-0 iron-selected">
                <a data-route="contact" href="/contact" data-polymer="layout, horizontal, center, raised">
                  <iron-icon icon="mail"></iron-icon>
                  <span>Contact</span>
                </a>
              </paper-item>
            </paper-menu>
          </div>
        <paper-header-panel data-polymer="main, mode=standard">
          <paper-toolbar>
            <paper-icon-button icon="menu" id="paperToggle" data-polymer="paper-drawer-toggle"></paper-icon-button>
            <span className="flex text-center">
              my react/polymer application
            </span>
            <paper-icon-button icon="refresh"></paper-icon-button>
            <paper-icon-button icon="search"></paper-icon-button>
          </paper-toolbar>
          <section data-route="home">
            <paper-material data-polymer="elevation=1">
              <p className="paper-font-subhead">You now have:</p>
              <p className="paper-font-body2">Looking for more Web App layouts? Check out our <a href="https://github.com/PolymerElements/app-layout-templates">layouts</a> collection. You can also <a href="http://polymerelements.github.io/app-layout-templates/">preview</a> them live.</p>
    
              <paper-button data-polymer="raised, primary, elevation=4" role="button">my raised button</paper-button>
            </paper-material>
          </section>
        </paper-header-panel>
      </paper-drawer-panel>
    )
  }
})

React.render(<Layout />, document.body)
```

# React-Meteor ?
I've been testing this theory out with [react-meteor]() and it is working!  There are some issues, but overall, I consider it a success.

# Contributors Wanted
Please make PRs if you can help me make this mixin better!  Polymer is really cool, and so is React (and Meteor for that matter!).  Using all of these awesome technologies together makes me happy.
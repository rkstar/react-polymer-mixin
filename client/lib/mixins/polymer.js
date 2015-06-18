Polymer = {
  Mixin: {
    _polymer_attribute: 'data-polymer',

    _polymerize: function( node ){
      var polymer_attrs = (node.hasAttribute && node.hasAttribute(this._polymer_attribute)) ? node.getAttribute(this._polymer_attribute) : null,
        childNodes = Array.prototype.slice.call(node.childNodes)

      if( polymer_attrs ){
        var attr, attreq
        polymer_attrs.split(',').map(function(attr){
          attr = attr.trim()
          if( attr.indexOf("=") > -1 ){
            attreq = attr.split('=')
            node.setAttribute(attreq[0],attreq[1])
          } else {
            node.setAttribute(attr,'')
          }
        })
      }

      childNodes.map(function(child){
        this._polymerize(child)
      }, this)
    },

    componentDidMount: function(){
      this._polymerize(this.getDOMNode())
    },

    componentDidUpdate: function(){
      this._polymerize(this.getDOMNode())
    }
  }
}
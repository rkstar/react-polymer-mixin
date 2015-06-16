Polymer = {
  Mixin: {
    _polymer_attribute: 'data-polymer',
    componentDidMount: function(){
      var nodelist = this.getDOMNode().querySelectorAll("["+this._polymer_attribute+"]"),
        nodes = Array.prototype.slice.call(nodelist),
        polymer_attrs,
        attreq
      nodes.unshift(this.getDOMNode())
      nodes.map(function(el){
        polymer_attrs = el.getAttribute(this._polymer_attribute)
        if( !polymer_attrs ){
          return
        }
        polymer_attrs.split(',').map(function(attr){
          attr = attr.trim()
          if( attr.indexOf("=") > -1 ){
            attreq = attr.split('=')
            el.setAttribute(attreq[0],attreq[1])
          } else {
            el.setAttribute(attr,'')
          }
        })
        el.removeAttribute(this._polymer_attribute)
      }, this)
    }
  }
}
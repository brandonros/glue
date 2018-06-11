window.glue = {
  h: function(tagName, properties, children) {
    var element = document.createElement(tagName);

    Object.keys(properties).forEach(function(property) {
      element[property] = properties[property];
    });

    if (Array.isArray(children)) {
      children.forEach(function(child) {
        element.appendChild(child);
      });
    } else if (typeof children === 'string') {
      element.appendChild(document.createTextNode(children));
    }

    return element;
  },
  setState: function(key, value) {
    var self = this;

    var mergeState = function(oldState, newState) {
      return Object.assign({}, oldState, newState);
    };

    var updateNodes = function(oldNodes, newNodes) {
      oldNodes.replaceWith(newNodes);

      return newNodes;
    };

    return function(event) {
      var newState = {};

      newState[key] = value;

      self.state = mergeState(self.state, newState);
      self.nodes = updateNodes(self.nodes, self.render());
    };
  }
};

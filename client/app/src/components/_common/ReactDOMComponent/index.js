import React from 'react';

/**
 * Class representing ReactDOMComponent
 * @extends {React.PureComponent}
 */
class ReactDOMComponent extends React.PureComponent {
  /**
   * Finds parent of the element
   * @param {Object} element - DOM element
   * @param {String} parentName - Name of the parent node to find
   * @returns {Object} - Parent of the DOM element
   */
  findParent(element, parentName) {
    let el = element;
    while (el && el.nodeType !== Node.DOCUMENT_NODE) {
      if (el.nodeType === Node.ELEMENT_NODE && el.nodeName === parentName) {
        return el;
      }
      el = el.parentNode;
    }
    return null;
  }

  /**
   * Get scroll bar width
   *
   * @returns {void}
   */
  getScrollbarWidth() {
    const outer = document.createElement('div');
    outer.style.visibility = 'hidden';
    outer.style.width = '100px';
    outer.style.msOverflowStyle = 'scrollbar';

    document.body.appendChild(outer);

    const widthNoScroll = outer.offsetWidth;
    outer.style.overflow = 'scroll';

    const inner = document.createElement('div');
    inner.style.width = '100%';
    outer.appendChild(inner);

    const widthWithScroll = inner.offsetWidth;

    outer.parentNode.removeChild(outer);

    return widthNoScroll - widthWithScroll;
  }
}

export default ReactDOMComponent;

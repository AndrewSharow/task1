function createElement(tag, properties, styles, parentElem) {
    let element = document.createElement(tag);
    
    for ( let propertie of properties ) {
        element.setAttribute(propertie[0], propertie[1]);
    }
    for ( let style of styles ) {
        element.style[style[0]] = style[1];
    }
    parentElem.append(element);
}
createElement( 
    tag = "input", 
    properties = [ ["innerHTML", "Lorem ipsum"], ["type", "text"], ["placeholder", "dolor sit amet"] ], 
    styles = [ ["fontSize", "18px"], ["color", "red"] ], 
    parentElem = document.querySelector('span')
)
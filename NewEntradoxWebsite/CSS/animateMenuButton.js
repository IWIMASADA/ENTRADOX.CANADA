function animateMenuX() {
    var container = document.getElementById('MenuButtonContainer');
    var arrowTop = document.getElementById('arrowTop');
    var arrowBottom = document.getElementById('arrowBottom');
    var arrowMiddle = document.getElementById('arrowMiddle');

    if (container && arrowTop && arrowBottom && arrowMiddle) {
        // Get the container's dimensions
        var containerWidth = container.offsetWidth;
        var containerHeight = container.offsetHeight;

        // Increase line thickness
        var lineThickness = 4.5; // Adjust this value as needed

        // Calculate the positions for the "X"
        var xWidth = Math.min(containerWidth, containerHeight) * 1.25; // Adjust as needed
        var xHeight = lineThickness;
        var extraWidth = .6;
        var xLeft = (containerWidth - xWidth) * 0.0005;
        var xTop = (containerHeight - xHeight) * .0001;
        // Apply transformations and positions to create an "X"
        arrowTop.style.transform = `rotate(45deg) scaleX(${xWidth / 100}) scaleY(${xHeight / 100})`;
        arrowTop.style.left = xLeft + extraWidth + 'rem';
        arrowTop.style.top = xTop - 1 + 'rem';
        arrowTop.style.height = `${lineThickness}rem`;


        arrowBottom.style.transform = `rotate(-45deg) scaleX(${xWidth / 100}) scaleY(${xHeight / 100})`;
        arrowBottom.style.left = xLeft + extraWidth + 'rem';
        arrowBottom.style.top = xTop - 1 + 'rem';
        arrowBottom.style.height = `${lineThickness}rem`;


        arrowMiddle.style.opacity = '0';
        arrowMiddle.style.transform = `rotate(-45deg) scaleX(${xWidth / 100}) scaleY(${xHeight / 100})`;
        
        arrowMiddle.style.transformOrigin = 'center';
        arrowMiddle.style.height = `${lineThickness}rem`;
        arrowMiddle.style.left = (containerWidth - arrowMiddle.offsetWidth) / 2 + 'px';
        arrowMiddle.style.top = xTop - 1 + 'rem';
    } else {
        console.error("One or more elements not found.");
    }
}


function animateMenuXBack() {
    var container = document.getElementById('MenuButtonContainer');
    var arrowTop = document.getElementById('arrowTop');
    var arrowBottom = document.getElementById('arrowBottom');
    var arrowMiddle = document.getElementById('arrowMiddle');

    if (container && arrowTop && arrowBottom && arrowMiddle) {
        // Get the container's dimensions
        var containerWidth = container.offsetWidth;
        var containerHeight = container.offsetHeight;

        // Increase line thickness
        var lineThickness = 4.5; // Adjust this value as needed

        // Calculate the positions for the "X"
        var xWidth = Math.min(containerWidth, containerHeight) * 1.25; // Adjust as needed
        var xHeight = lineThickness;
        var extraWidth = .6;
        var xLeft = (containerWidth - xWidth) * 0.0005;
        var xTop = (containerHeight - xHeight) * .0001;
        // Apply transformations and positions to create an "X"
        arrowTop.style.transform = `rotate(0deg) scaleX(${xWidth / 100}) scaleY(${xHeight / 100})`;
        arrowTop.style.left = xLeft + extraWidth + 'rem';
        arrowTop.style.top = xTop -.6 + 'rem';
        arrowTop.style.height = `${lineThickness}rem`;


        arrowBottom.style.transform = `rotate(0deg) scaleX(${xWidth / 100}) scaleY(${xHeight / 100})`;
        arrowBottom.style.left = xLeft + extraWidth + 'rem';
        arrowBottom.style.top = xTop - 1.1 + 'rem';
        arrowBottom.style.height = `${lineThickness}rem`;

        arrowMiddle.style.opacity = '1';
        arrowMiddle.style.transform = `rotate(0deg) scaleX(${xWidth / 100}) scaleY(${xHeight / 100})`;
        arrowMiddle.style.height = `${lineThickness}rem`;
        arrowMiddle.style.left = xLeft + extraWidth + 'rem';
        arrowMiddle.style.top = xTop - 1.6 + 'rem';
        
    } else {
        console.error("One or more elements not found.");
    }
}

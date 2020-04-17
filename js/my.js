function scrollToElement() {
    // const element = document.getElementById('journey');
    // console.log(element);
    // const headerOffset = 45;
    // const elementPosition = element.getBoundingClientRect().top();
    // const offsetPosition = elementPosition - headerOffset;
    // window.scrollin({
    //     top: offsetPosition,
    //     behavior: 'smooth',
    //     block: 'center'
    // });

    element.scrollIntoView({ behavior: 'instant', block: 'center' });
};
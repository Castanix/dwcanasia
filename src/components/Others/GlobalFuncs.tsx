const onMobile = () => {
    return window.innerWidth < 640;
}


const inputSize = onMobile() ? 'small' : 'middle';

// const handleScroll = () => {
//     if(onMobile()) {
//         inputSize = 'small';
//     } else {
//         inputSize = 'middle';
//     }
// }

export {
    onMobile,
    inputSize,
    // handleScroll
}
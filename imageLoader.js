const imageLoader = ({ src }) => {
    console.log('!!!!', src);
    return `/blog/${src}`;
};

export default imageLoader;

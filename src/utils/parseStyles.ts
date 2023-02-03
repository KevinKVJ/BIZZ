export default (styles = ''): { [key: string]: string } => {
    return styles
        .split(';')
        .filter(style => style.split(':').length === 2)
        .map(style => [
            style
                .split(':')[0]
                .trim()
                .replace(/-./g, c => c.substr(1).toUpperCase()),
            style.split(':')[1].trim(),
        ])
        .reduce(
            (styleObj, style) => ({
                ...styleObj,
                [style[0]]: style[1],
            }),
            {}
        );
};

function Logo({ width, height }) {
    const style = {
        width,
        height,
        padding: '0.25rem',
    };
    return <img src="/logos/dark.png" style={style} alt="Informative Coding" />;
}
export default Logo;

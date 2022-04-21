
const ProdctsList = props => {
    const { products } = props;

    return (
        <>
        {/** imported nav bar */}
        <h1>Products by Type</h1>
        <ul>
            <span><li> Lipstick </li></span>
            <span><li> Lip Liner </li></span>
            <span><li> Blush </li></span>
            <span><li> Bronzer </li></span>
            <span><li> Foundation </li></span>
            <span><li> Eyeliner </li></span>
            <span><li> Brows </li></span>
            <span><li> Mascara </li></span>
            <span><li> Eye Shadow </li></span>
        </ul>
        </>
    )
}
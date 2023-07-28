import Link from "next/link"

function ProductList(){
    return (
        <>
        <Link href="/">Home</Link>
        <Link href="/product/1"><h2>Product1</h2></Link>
        <Link href="/product/2"><h2>Product2</h2></Link>
        <Link href="/product/3"><h2>Product3</h2></Link>
        </>
    )
}

export default ProductList
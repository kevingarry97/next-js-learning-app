import React from 'react'

interface Props {
    params: {
        slug: string[]
    };
    searchParams: { sortOrder: string}
}

const ProductPage = ({params: {slug}, searchParams: {sortOrder}}: Props) => {
  return (
    <p>Products Page {slug} {sortOrder}</p>
  )
}

export default ProductPage

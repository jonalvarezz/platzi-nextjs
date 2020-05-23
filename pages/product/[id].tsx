import React from 'react'
import { useRouter } from 'next/router'

import Layout from '@components/Layout'

const ProductPage = () => {
  const { query } = useRouter()

  return (
    <Layout>
      <h1>Página producto: {query.id}</h1>
    </Layout>
  )
}

export default ProductPage

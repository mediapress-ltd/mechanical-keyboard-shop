import React, { useState, useEffect } from 'react';
import Router from 'next/router';

import VariantsSelector from '../VariantsSelector/VariantsSelector';
import AddToCartButton from '../CustomButton/CustomButton.component';

import {
  ProductDetailContainer,
  Images,
  LargeImage,
  SmallImages,
  SmallImage,
  Details
} from './ProductDetail.styles';

interface IProductDetail {
  id: string;
  title: string;
  handle: string;
  images: {
    edges: [
      {
        node: {
          src: string;
        };
      }
    ];
  };
  options: [];
  variants: {
    edges: [
      {
        node: {
          id: string;
          image: {
            src: string;
          };
          price: string;
          selectedOptions: [];
          title: string;
          product: {
            title: string;
          };
        };
      }
    ];
  };
}

interface ISelectedVariants {
  name: string;
  value: string;
  [key: string]: string;
}

interface IProps {
  product: IProductDetail;
  selectedVariantId: string;
  addItem: (product: {}) => void;
  selectedVariants: ISelectedVariants;
}

const ProductDetail = ({ product, selectedVariantId, addItem }: IProps) => {
  const [selectedImage, setSelectedImage] = useState(0);
  const [selectedVariants, setSelectedVariants] = useState({ name: '', value: '' });

  useEffect(() => {
    let selectedOptionsObject: any[] = [];
    if (selectedVariantId) {
      selectedOptionsObject = {
        ...product.variants.edges.filter(edge => edge.node.id === selectedVariantId)[0]
      }.node.selectedOptions;
    } else {
      selectedOptionsObject = product.variants.edges[0].node.selectedOptions;
    }

    const selectedOptions = Object.assign(
      {},
      ...selectedOptionsObject.map(variant => ({
        [variant.name]: variant.value
      }))
    );

    setSelectedVariants(selectedOptions);
  }, [selectedVariantId]);

  const handleSelect = (name: string, value: string) => {
    const newOption = { [name]: value };
    const newSelectedVariants: ISelectedVariants = { ...selectedVariants, ...newOption };
    const newVariant = product.variants.edges.filter(
      edge =>
        edge.node.title.includes(newSelectedVariants['Size']) &&
        edge.node.title.includes(newSelectedVariants['Color'])
    )[0];
    Router.push('/[handle]', `/${product.handle}?variant=${newVariant.node.id}`);
  };

  const handleAddItemToCart = () => {
    let variantToAdd = {};
    if (selectedVariantId) {
      variantToAdd = {
        ...product.variants.edges.filter(edge => edge.node.id === selectedVariantId)[0]
      }.node;
    } else {
      variantToAdd = product.variants.edges[0].node;
    }
    addItem(variantToAdd);
  };

  const smallImages = product?.images?.edges.map((image, index) => {
    return (
      <SmallImage
        key={image.node.src}
        alt="product"
        src={image.node.src}
        onClick={() => setSelectedImage(index)}
      />
    );
  });

  return (
    <ProductDetailContainer>
      <Images>
        <LargeImage alt="product" src={product?.images?.edges[selectedImage].node.src} />
        <SmallImages>{smallImages}</SmallImages>
      </Images>
      <Details>
        <div>
          <h1>{product?.title}</h1>
          <h4>Price 100€</h4>
          <h5>Tax included.</h5>
        </div>
        <VariantsSelector
          options={product.options}
          handleSelect={handleSelect}
          selectedVariants={selectedVariants}
        />
        <AddToCartButton onClick={() => handleAddItemToCart()}>Add to cart</AddToCartButton>
      </Details>
    </ProductDetailContainer>
  );
};

export default ProductDetail;

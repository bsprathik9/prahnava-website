import { notFound } from "next/navigation";
import { Metadata } from "next";
import { ProductDetailPage } from "@/components/product-detail-page";
import { productData } from "@/data/products";

interface ProductPageProps {
  params: { slug: string };
}

export async function generateMetadata({
  params,
}: ProductPageProps): Promise<Metadata> {
  const product = productData.find((p) => p.slug === params.slug);

  if (!product) {
    return {
      title: "Product Not Found",
    };
  }

  return {
    title: `${product.title} | Prahnava AI`,
    description: product.description,
  };
}

export async function generateStaticParams() {
  return productData.map((product) => ({
    slug: product.slug,
  }));
}

export default function ProductPage({ params }: ProductPageProps) {
  const product = productData.find((p) => p.slug === params.slug);

  if (!product) {
    notFound();
  }

  return <ProductDetailPage product={product} />;
}

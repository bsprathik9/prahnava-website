"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowLeft, Check } from "lucide-react";
import { Product } from "@/data/products";

interface ProductDetailPageProps {
  product: Product;
}

export function ProductDetailPage({ product }: ProductDetailPageProps) {
  const Icon = product.icon;

  return (
    <div className="min-h-screen bg-zinc-950">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 -z-10">
          <div className={`absolute top-0 right-0 w-[800px] h-[800px] bg-gradient-to-br ${product.gradient} opacity-20 rounded-full blur-[128px]`} />
          <div className={`absolute bottom-0 left-0 w-[600px] h-[600px] bg-gradient-to-tr ${product.gradient} opacity-15 rounded-full blur-[128px]`} />
        </div>

        <div className="mx-auto max-w-6xl px-6">
          <Link
            href="/#product"
            className="inline-flex items-center gap-2 text-zinc-400 hover:text-white transition-colors mb-8 group"
          >
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
            Back to Products
          </Link>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex items-start gap-6 mb-8"
          >
            <div className={`w-20 h-20 md:w-24 md:h-24 rounded-2xl bg-gradient-to-br ${product.gradient} flex items-center justify-center shadow-xl`}>
              <Icon className="w-10 h-10 md:w-12 md:h-12 text-white" />
            </div>
            <div>
              <span className="text-sm text-cyan-400 mb-2 block uppercase tracking-wider">
                {product.subtitle}
              </span>
              <h1 className="text-5xl md:text-7xl font-bold text-white mb-4">
                {product.title}
              </h1>
              <p className="text-xl text-zinc-400 max-w-3xl">
                {product.description}
              </p>
            </div>
          </motion.div>

          {/* Highlight Cards */}
          {product.sections[0].highlights && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-12"
            >
              {product.sections[0].highlights.map((highlight, index) => (
                <div
                  key={index}
                  className="relative rounded-xl border border-white/10 bg-white/[0.02] p-4 text-center hover:border-cyan-500/30 hover:bg-cyan-500/5 transition-all duration-300"
                >
                  <div className="text-sm text-zinc-300 font-medium">
                    {highlight}
                  </div>
                </div>
              ))}
            </motion.div>
          )}
        </div>
      </section>

      {/* Content Sections */}
      <section className="py-16 md:py-20">
        <div className="mx-auto max-w-6xl px-6">
          <div className="grid md:grid-cols-2 gap-12 mb-16">
            {product.sections.map((section, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="relative rounded-2xl border border-white/10 bg-white/[0.02] p-8 hover:border-cyan-500/20 transition-all duration-300"
              >
                <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
                  {section.title}
                </h2>
                <p className="text-zinc-400 leading-relaxed">
                  {section.content}
                </p>
              </motion.div>
            ))}
          </div>

          {/* Features Grid */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-8">
              Key Features
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
              {product.features.map((feature, index) => (
                <div
                  key={index}
                  className="flex items-start gap-3 rounded-xl border border-white/10 bg-white/[0.02] p-4 hover:border-cyan-500/30 hover:bg-cyan-500/5 transition-all duration-300"
                >
                  <Check className="w-5 h-5 text-cyan-400 mt-0.5 shrink-0" />
                  <span className="text-zinc-300">{feature}</span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Benefits */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-8">
              Benefits
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              {product.benefits.map((benefit, index) => (
                <div
                  key={index}
                  className={`relative rounded-xl border border-white/10 bg-gradient-to-br ${product.gradient} bg-opacity-5 p-6 hover:border-cyan-500/30 transition-all duration-300`}
                >
                  <div className="flex items-start gap-3">
                    <div className={`w-8 h-8 rounded-lg bg-gradient-to-br ${product.gradient} flex items-center justify-center shrink-0`}>
                      <Check className="w-5 h-5 text-white" />
                    </div>
                    <p className="text-zinc-200 font-medium">{benefit}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Use Cases */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-8">
              Use Cases
            </h2>
            <div className="grid md:grid-cols-2 gap-4">
              {product.useCases.map((useCase, index) => (
                <div
                  key={index}
                  className="rounded-xl border border-white/10 bg-white/[0.02] p-5 hover:border-cyan-500/30 hover:bg-cyan-500/5 transition-all duration-300"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 rounded-full bg-cyan-400" />
                    <span className="text-zinc-300 font-medium">{useCase}</span>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-20">
        <div className="mx-auto max-w-4xl px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative rounded-2xl border border-white/10 bg-white/[0.02] p-12 text-center overflow-hidden"
          >
            <div className={`absolute inset-0 bg-gradient-to-br ${product.gradient} opacity-5`} />
            <div className="relative z-10">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Ready to Get Started?
              </h2>
              <p className="text-zinc-400 mb-8 max-w-2xl mx-auto">
                Discover how {product.title} can transform your learning experience.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <a
                  href="mailto:services@prahnava.com"
                  className={`inline-flex items-center justify-center px-8 py-3 rounded-xl bg-gradient-to-r ${product.gradient} text-white font-medium hover:opacity-90 transition-opacity`}
                >
                  Book a Demo
                </a>
                <Link
                  href="/#product"
                  className="inline-flex items-center justify-center px-8 py-3 rounded-xl border border-white/20 text-white font-medium hover:bg-white/10 transition-colors"
                >
                  View All Products
                </Link>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}

'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { Card, CardContent } from '@/components/ui/card';
import { categories } from '@/lib/data';

const Categories = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
      },
    },
  };

  return (
    <section className="py-16 bg-gradient-to-b from-background to-muted/30">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Shop by Category
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Discover your perfect comfort zone with our carefully curated collections 
            designed to make every space feel like home.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 md:gap-6"
        >
          {categories.map((category, index) => (
            <motion.div key={category.id} variants={itemVariants}>
              <Link href={`/category/${category.id}`}>
                <Card className="group card-hover border-2 border-transparent hover:border-primary/20 transition-all duration-300">
                  <CardContent className="p-6 text-center">
                    <motion.div
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      transition={{ type: "spring", stiffness: 400 }}
                      className="text-4xl md:text-5xl mb-4 inline-block"
                    >
                      {category.emoji}
                    </motion.div>
                    
                    <h3 className="font-semibold text-sm md:text-base mb-2 group-hover:text-primary transition-colors">
                      {category.name}
                    </h3>
                    
                    <div className={`w-8 h-1 bg-${category.color}-300 rounded-full mx-auto group-hover:w-12 transition-all duration-300`} />
                  </CardContent>
                </Card>
              </Link>
            </motion.div>
          ))}
        </motion.div>

        {/* Featured category banner */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-16"
        >
          <Card className="overflow-hidden bg-gradient-to-r from-sage-100 via-cream-100 to-blush-100">
            <CardContent className="p-8 md:p-12">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                <div>
                  <h3 className="text-2xl md:text-3xl font-bold mb-4">
                    Create Your Cozy Corner
                  </h3>
                  <p className="text-muted-foreground mb-6">
                    Everything you need to transform any space into your personal sanctuary. 
                    From soft pillows to warm lighting, we've got your comfort covered.
                  </p>
                  <Link href="/category/home">
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="bg-primary text-primary-foreground px-6 py-3 rounded-full font-semibold hover:bg-primary/90 transition-colors"
                    >
                      Shop Home Collection
                    </motion.button>
                  </Link>
                </div>
                
                <div className="relative">
                  <motion.img
                    whileHover={{ scale: 1.02 }}
                    transition={{ type: "spring", stiffness: 300 }}
                    src="https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=600"
                    alt="Cozy home corner"
                    className="w-full h-64 md:h-80 object-cover rounded-2xl shadow-lg"
                  />
                  
                  {/* Floating elements */}
                  <motion.div
                    animate={{ y: [0, -10, 0] }}
                    transition={{ duration: 3, repeat: Infinity }}
                    className="absolute top-4 right-4 bg-white rounded-full p-3 shadow-lg"
                  >
                    <span className="text-2xl">☕</span>
                  </motion.div>
                  
                  <motion.div
                    animate={{ y: [0, 10, 0] }}
                    transition={{ duration: 4, repeat: Infinity }}
                    className="absolute bottom-4 left-4 bg-white rounded-full p-3 shadow-lg"
                  >
                    <span className="text-2xl">🕯️</span>
                  </motion.div>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  );
};

export default Categories;
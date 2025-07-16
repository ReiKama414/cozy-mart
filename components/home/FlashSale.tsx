'use client';

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Clock, Flame, ShoppingCart } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { useCartStore } from '@/lib/store';
import { flashSaleItems } from '@/lib/data';

const FlashSale = () => {
  const [timeLeft, setTimeLeft] = useState({
    hours: 12,
    minutes: 34,
    seconds: 56,
  });

  const { addItem } = useCartStore();

  // Countdown timer effect
  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prev => {
        let { hours, minutes, seconds } = prev;
        
        if (seconds > 0) {
          seconds--;
        } else if (minutes > 0) {
          minutes--;
          seconds = 59;
        } else if (hours > 0) {
          hours--;
          minutes = 59;
          seconds = 59;
        }
        
        return { hours, minutes, seconds };
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <section className="py-16 bg-gradient-to-r from-red-50 via-orange-50 to-red-50">
      <div className="container mx-auto px-4">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center space-x-2 bg-red-100 rounded-full px-4 py-2 mb-4">
            <Flame className="h-5 w-5 text-red-500" />
            <span className="text-red-700 font-semibold">Flash Sale</span>
          </div>
          
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            ⚡ Limited Time Offers
          </h2>
          
          <p className="text-muted-foreground mb-6">
            Grab these amazing deals before they're gone!
          </p>

          {/* Countdown timer */}
          <motion.div
            initial={{ scale: 0.9 }}
            whileInView={{ scale: 1 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center space-x-4 bg-white rounded-xl p-4 shadow-lg"
          >
            <Clock className="h-5 w-5 text-red-500" />
            <span className="font-medium">Ends in:</span>
            <div className="flex items-center space-x-2">
              <div className="bg-red-500 text-white rounded-lg px-3 py-1 font-bold min-w-[3rem] text-center">
                {timeLeft.hours.toString().padStart(2, '0')}
              </div>
              <span className="font-bold">:</span>
              <div className="bg-red-500 text-white rounded-lg px-3 py-1 font-bold min-w-[3rem] text-center">
                {timeLeft.minutes.toString().padStart(2, '0')}
              </div>
              <span className="font-bold">:</span>
              <div className="bg-red-500 text-white rounded-lg px-3 py-1 font-bold min-w-[3rem] text-center">
                {timeLeft.seconds.toString().padStart(2, '0')}
              </div>
            </div>
          </motion.div>
        </motion.div>

        {/* Product grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {flashSaleItems.map((product, index) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <Card className="group card-hover border-2 border-red-100 overflow-hidden">
                <div className="relative">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  
                  {/* Discount badge */}
                  <Badge className="absolute top-2 left-2 bg-red-500 hover:bg-red-600">
                    -{product.discount}%
                  </Badge>
                  
                  {/* Hot badge */}
                  <div className="absolute top-2 right-2 bg-orange-500 text-white rounded-full p-1">
                    🔥
                  </div>
                </div>

                <CardContent className="p-4">
                  <h3 className="font-semibold mb-2 line-clamp-2">{product.name}</h3>
                  
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center space-x-2">
                      <span className="text-lg font-bold text-red-600">
                        ¥{product.price.toLocaleString()}
                      </span>
                      {product.originalPrice && (
                        <span className="text-sm text-muted-foreground line-through">
                          ¥{product.originalPrice.toLocaleString()}
                        </span>
                      )}
                    </div>
                  </div>

                  {/* Stock progress */}
                  <div className="mb-4">
                    <div className="flex justify-between text-xs text-muted-foreground mb-1">
                      <span>Sold: {Math.floor(product.stock * 0.7)}</span>
                      <span>Available: {product.stock}</span>
                    </div>
                    <Progress 
                      value={70} 
                      className="h-2 bg-red-100"
                    />
                  </div>

                  <Button
                    onClick={() => addItem(product)}
                    className="w-full rounded-full bg-red-500 hover:bg-red-600 group"
                    size="sm"
                  >
                    <ShoppingCart className="mr-2 h-4 w-4 group-hover:animate-bounce-gentle" />
                    Add to Cart
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Call to action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-center mt-12"
        >
          <Button size="lg" variant="outline" className="rounded-full px-8">
            View All Flash Deals 🏃‍♂️
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default FlashSale;
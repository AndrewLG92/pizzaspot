import { useState, useEffect } from "react";
import { supabase } from "@/lib/supabaseclient";
import { Pizza, CartItem } from "@/types";



export function useCart(userId?: string) {
  const [cart, setCart] = useState<CartItem[]>([]);

  // Load user's saved cart when logged in
  useEffect(() => {
    if (!userId) return;

    const fetchCart = async () => {
      const { data: cartRecord, error: cartErr } = await supabase
        .from("carts")
        .select("id")
        .eq("user_id", userId)
        .single();

      if (cartErr && cartErr.code !== "PGRST116") console.error(cartErr);

      let cartId = cartRecord?.id;

      // Create new cart if user doesn't have one yet
      if (!cartId) {
        const { data, error } = await supabase
          .from("carts")
          .insert({ user_id: userId })
          .select()
          .single();
        if (error) throw error;
        cartId = data.id;
      }

      // Load cart items
      const { data: items, error: itemErr } = await supabase
        .from("cart_items")
        .select("id, pizza_id, quantity, pizzas(name, price, image)")
        .eq("cart_id", cartId);

      if (itemErr) console.error(itemErr);

      const formatted =
        items?.map((i) => ({
          id: i.id,
          name: i.pizzas[0].name,
          price: i.pizzas[0].price,
          quantity: i.quantity,
          image_url: i.pizzas[0].image,
          pizza_id: i.pizza_id,
        })) || [];

      setCart(formatted);
    };

    fetchCart();
  }, [userId]);

  // Add pizza to cart
  const addToCart = async (pizza: Pizza) => {
    if (!userId) {
      setCart((prev) => {
        const existing = prev.find((i) => i.pizza_id === pizza.id);
        return existing
          ? prev.map((i) =>
              i.pizza_id === pizza.id ? { ...i, quantity: i.quantity + 1 } : i
            )
          : [...prev, { id: pizza.id, pizza_id: pizza.id, name: pizza.name, price: pizza.price, quantity: 1, image: pizza.image }];
      });
      return;
    }

    // Get user cart
    const { data: cartData } = await supabase
      .from("carts")
      .select("id")
      .eq("user_id", userId)
      .single();

    if (!cartData) return;

    const { data, error } = await supabase
      .from("cart_items")
      .upsert(
        {
          cart_id: cartData.id,
          pizza_id: pizza.id,
          quantity: 1,
        },
        { onConflict: "cart_id,pizza_id" }
      )
      .select();

    if (error) console.error(error);

    setCart((prev) => {
      const existing = prev.find((i) => i.pizza_id === pizza.id);
      if (existing) {
        return prev.map((i) =>
          i.pizza_id === pizza.id
            ? { ...i, quantity: i.quantity + 1 }
            : i
        );
      }
      return [
        ...prev,
        {
          id: data?.[0]?.id || crypto.randomUUID(),
          name: pizza.name,
          price: pizza.price,
          quantity: 1,
          image: pizza.image,
          pizza_id: pizza.id,
        },
      ];
    });
  };
  
  const total = cart.reduce((sum, i) => sum + i.price * i.quantity, 0);

  return { cart, addToCart, total };
}

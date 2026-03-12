// src/types/index.ts
export type Json = string | number | boolean | null | { [key: string]: Json | undefined } | Json[]

export interface Pizza {
  id: number;            // matches bigint in DB
  name: string;
  description?: string;
  price: number;
  quantity?: number;
  image?: string;
  category?: string;
  created_at?: string;
}

export interface Beverage {
  id: number;            // matches bigint in DB
  name: string;
  description?: string;
  category?: string;
  size_options: Json | null;
  image_url?: string;
  is_available: boolean;
  created_at?: string;
}

export interface Snack {
  id: number;
  name: string;
  description?: string;
  category?: string;
  image_url?: string;
  is_available: boolean;
  size_options: Json | null;
  created_at: string;
}

export interface CartItemFromDB {
  id: number;            // uuid from cart_items table
  cart_id?: number;
  pizza_id: number;      // bigint -> number
  quantity: number;
  created_at?: string;
  // no image_url here; join to pizzas to get it
}

export interface CartItem {
  id: number;            // local id (uuid) or DB id when persisted
  pizza_id: number;
  name?: string;
  price: number;
  quantity: number;
  image?: string;    // optional in client only
}

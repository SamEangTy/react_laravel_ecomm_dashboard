<?php

namespace App\Http\Controllers;

use App\Models\Product;
use Illuminate\Http\Request;

class ProductController extends Controller
{
    function addPro(Request $req){
        $product = new Product;
        // $products = $product->name=$req->input();
        $product->name = $req->input('name');
        $product->price = $req->input('price');
        $product->des = $req->input('des');
        $product->file_path = $req->file('file')->store('products');
        $product->save();
        return  $product;
    }
}

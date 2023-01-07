import RandJoke from '../images/random-joke.webp'
import CardPrice from '../images/cardamom-price.webp'
import TDMbc from '../images/3d-mbc.webp'
import ShopCat from '../images/shop-catalogue.webp'
import Thandava from '../images/thandava.webp'

import ReactImg from "../images/react.svg"
import Tkinter from "../images/tkinter.webp"
import PyrogramImg from "../images/pyrogram.svg"
import FastAPIImg from "../images/fastapi.svg"
import Mongo from "../images/mongo.webp"
import Axios from "../images/Axios.webp"
import ReactNa from "../images/react-native.webp"
import jWt from "../images/JWT.svg"


export const Work = [
    {
        "id": 1,
        "name": "Random Joke Generator",
        "framework": [ReactImg, Axios],
        "para": "My First React Project to Return Some Random Jokes on Loading.",
        "imag": RandJoke,
    },
    {
        "id": 2,
        "name": "Cardamom Price Tracker",
        "framework": [ReactImg, Axios],
        "para": "A Simple WebApp to Return Cardamom Price of Last 4 days.",
        "imag": CardPrice,
    },
    {
        "id": 3,
        "name": "3D MBC",
        "framework": [ReactImg],
        "para": "Website to ShowCase 360 and 3D Models of our College. Under Construction",
        "imag": TDMbc,
    },
    {
        "id": 4,
        "name": "Shop Catalogue",
        "framework": [ReactImg],
        "para": "WebApp that can be Used to track Availablity of Products in a shop",
        "imag": ShopCat,
    },
    {
        "id": 5,
        "name": "Thandava",
        "framework": [ReactNa, FastAPIImg, Mongo, jWt, Axios],
        "para": "Cross Platform Mobile App To Manage and Add the Deatils of College Arts Fest",
        "imag": Thandava,
    }
]
"use client";

import React from 'react'

const Button = (props) => {
    switch (props.type)
    {
        case "icon-right" :
            return(
                <button className= "btn bg-purple-600 uppercase font-inherit"> 
                    {props.text}
                    <svg width="20" height="20" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <g clip-path="url(#clip0_11_148)">
                    <path d="M9.66667 3L8.49167 4.175L13.1417 8.83333H3V10.5H13.1417L8.49167 15.1583L9.66667 16.3333L16.3333 9.66667L9.66667 3Z" />
                    </g>
                    <defs>
                    <clipPath id="clip0_11_148">
                    <rect width="20" height="20" />
                    </clipPath>
                    </defs>
                    </svg>
                </button>
            )
        case "text-right":
            return(
                <button className="btn">
                    {props.text}
                    <svg className="textButtonsvg" width="20" height="20" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <g clip-path="url(#clip0_11_148)">
                    <path d="M9.66667 3L8.49167 4.175L13.1417 8.83333H3V10.5H13.1417L8.49167 15.1583L9.66667 16.3333L16.3333 9.66667L9.66667 3Z" />
                    </g>
                    <defs>
                    <clipPath id="clip0_11_148">
                    <rect width="20" height="20" />
                    </clipPath>
                    </defs>
                    </svg>
                </button>
            )
        default:
            return(
                <button className= "btn"> 
                        {props.text}
                </button>
            )
    }
}

export default Button
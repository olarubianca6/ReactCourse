import React from "react";

    export function MenuItem({img, title, price, info}) {

        return (
            <article className="menu-item">
                <img src={img} alt={title} className="img" />
                <div className="item-info">
                    <header>
                      <h5>{title}</h5>
                      <span className="item-price">${price}</span>
                    </header>
                  <p className="item-text">{info}</p>
                </div>

            </article>
        );
    };
  
  
import React, { Component } from "react";
import Image from "./Image";
import Info from "./Info";
import "./Movie.css";

export default class Movie extends Component {
  render() {
    const moviesList = [
      {
        title: "The Godfather ",
        summury: "the Godfather of all time",
        image:
          "https://www.themoviedb.org/t/p/w600_and_h900_bestv2/3bhkrj58Vtu7enYsRolD1fZdja1.jpg",
      },
      {
        title: "The Shawshank Redemption",
        summury: "the The Shawshank Redemption of all time",
        image:
          "https://www.themoviedb.org/t/p/w600_and_h900_bestv2/q6y0Go1tsGEsmtFryDOJo3dEmqu.jpg",
      },
      {
        title: "Schindler's List",
        summury: "the Schindler's List of all time",
        image:
          "https://www.themoviedb.org/t/p/w600_and_h900_bestv2/sF1U4EUQS8YHUYjNl3pMGNIQyr0.jpg",
      },
      {
        title: "Schindler's List",
        summury: "the Schindler's List of all time",
        image:
          "https://www.themoviedb.org/t/p/w600_and_h900_bestv2/sF1U4EUQS8YHUYjNl3pMGNIQyr0.jpg",
      },
      {
        title: "Schindler's List",
        summury: "the Schindler's List of all time",
        image:
          "https://www.themoviedb.org/t/p/w600_and_h900_bestv2/sF1U4EUQS8YHUYjNl3pMGNIQyr0.jpg",
      },
      {
        title: "Schindler's List",
        summury: "the Schindler's List of all time",
        image:
          "https://www.themoviedb.org/t/p/w600_and_h900_bestv2/sF1U4EUQS8YHUYjNl3pMGNIQyr0.jpg",
      },
      {
        title: "Schindler's List",
        summury: "the Schindler's List of all time",
        image:
          "https://www.themoviedb.org/t/p/w600_and_h900_bestv2/sF1U4EUQS8YHUYjNl3pMGNIQyr0.jpg",
      },
    ];
    return (
      <div className="row  ">
        {moviesList.map((item, index) => {
          return (
            <div className="col">
              <div key={index} className="item">
                <Image urlLink={item.image} />

                <Info title={item.title} summury={item.summury} />
              </div>
            </div>
          );
        })}
      </div>
    );
  }
}

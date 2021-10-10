import Slider from "react-slick";
import { makeStyles } from "@material-ui/core/styles";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import Image2 from "../../assets/img2.jpg";
import Image8 from "../../assets/img8.jpg";
import Image9 from "../../assets/img9.jpg";
import Image12 from "../../assets/img12.jpg";
import Image13 from "../../assets/img13.jpg";
import Image18 from "../../assets/img18.jpg";
import Image20 from "../../assets/img20.jpg";
import Image22 from "../../assets/img22.jpg";

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: "ghostwhite",
    height: 600,
  },

  image: {
    height:600,
    width: "100%",
    objectFit: "cover",
  },
}));

const HomeInfo = () => {
  const classes = useStyles();

  const settings = {
    dots: false,
    infinite: true,
    autoplaySpeed: 5000,
    autoplay: true,
    easing: "linear",
    fade: true,
    speed: 7000,
    slideToShow: 1,
    slideToScroll: 1,
  };

  return (
    <div className={classes.root}>
      <Slider {...settings}>
        
        <div>
          <img src={Image2} className={classes.image} />
        </div>
        <div>
          <img src={Image8} className={classes.image} />
        </div>
        <div>
          <img src={Image9} className={classes.image} />
        </div>
        <div>
          <img src={Image12} className={classes.image} />
        </div>
        <div>
          <img src={Image13} className={classes.image} />
        </div>
        
        <div>
          <img src={Image18} className={classes.image} />
        </div>
        
        <div>
          <img src={Image20} className={classes.image} />
        </div>
        <div>
          <img src={Image22} className={classes.image} />
        </div>
      </Slider>
    </div>
  );
};

export default HomeInfo;

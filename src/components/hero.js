import React from "react"
import styled from "@emotion/styled"
import Breadcrumb from "../components/breadcrumb/list"
import BreadcrumbItem from "../components/breadcrumb/item"
import Arrow from "../components/arrow"

import { css } from "@emotion/core"

const HeroBackground = styled.section`
  position: relative;
  height: 60rem;
  overflow: hidden;
  background-repeat: no-repeat;
  background-position: center center;
  background-image: url(${props => props.image});

  &::before,
  &::after {
    position: absolute;
    left: 0;
    content: "";
    width: 100%;
    height: 30%;
  }

  &:before {
    top: 0;
    opacity: 0.6;
    background: -moz-linear-gradient(
      top,
      rgba(0, 0, 0, 1) 0%,
      rgba(0, 0, 0, 1) 12%,
      rgba(0, 0, 0, 0) 100%
    );
    background: -webkit-linear-gradient(
      top,
      rgba(0, 0, 0, 1) 0%,
      rgba(0, 0, 0, 1) 12%,
      rgba(0, 0, 0, 0) 100%
    );
    background: linear-gradient(
      to bottom,
      rgba(0, 0, 0, 1) 0%,
      rgba(0, 0, 0, 1) 12%,
      rgba(0, 0, 0, 0) 100%
    );
    filter: progid: DXImageTransform.Microsoft.gradient(startColorstr='#000000', endColorstr='#00000000', GradientType=0);
  }

  &:after {
    bottom: 0;
    opacity: 0.8;
    background: -moz-linear-gradient(
      top,
      rgba(0, 0, 0, 0) 0%,
      rgba(0, 0, 0, 1) 100%
    );
    background: -webkit-linear-gradient(
      top,
      rgba(0, 0, 0, 0) 0%,
      rgba(0, 0, 0, 1) 100%
    );
    background: linear-gradient(
      to bottom,
      rgba(0, 0, 0, 0) 0%,
      rgba(0, 0, 0, 1) 100%
    );
    filter: progid: DXImageTransform.Microsoft.gradient(startColorstr='#00000000', endColorstr='#000000', GradientType=0);
  }
`

const HeroContainer = styled.div`
  padding: 0 40px;
`

const Title = styled.h1`
  position: absolute;
  z-index: 1;
  bottom: 0;
  left: 4rem;
  width: calc(99.9% - 8rem);
  padding: 3rem 0;
  color: #fff;
  text-align: center;
  line-height: 1.2;
  font-weight: 600;
  font-size: 4rem;
  letter-spacing: 0.2em;
  margin: 0;
`

const Subtitle = styled.p`
  position: absolute;
  z-index: 1;
  bottom: 3.5rem;
  left: 4rem;
  opacity: 0.6;
  color: #fff;
  font-size: 1.6rem;
  margin: 0.5em 0;
`

const BreadStyles = styled.div`
  position: absolute;
  z-index: 1;
  bottom: 4.2rem;
  right: 4rem;
  color: #fff;
  font-size: 1.4rem;
`
const themeColor = css`
  color: white;
`

const underline = css`
  a {
    text-decoration: underline;
  }
`

// * setParallaxBackground -----------------------------------------------------------------
// $.fn.setParallaxBackground = function(options){
//     var op = $.extend(
//     {
//         movement:300
//     }
//     , options );

//     var $win = $(window), $tgs = $(this), movement = op.movement, requestAnimationFrame = window.requestAnimationFrame || window.mozRequestAnimationFrame || window.webkitRequestAnimationFrame || window.msRequestAnimationFrame,
//     run = function(){
//         var $tg = $(this), osft = 0, wH = 0, tgW = 0, tgH = 0, bgW = 0, bgH = 0, mvd = 0,
//         setBgSize = function(){
//             var th = tgH + movement, ds = th / bgH, tw = bgW * ds;
//             if(tgW < tw) $tg.css({ "background-size": "auto " + (tgH + movement) + "px" });
//             else $tg.css({ "background-size": tgW + "px auto" });
//         },
//         imgParallax = function(){
//             window.requestAnimationFrame(imgParallax);
//             $tg.css({ "background-position-y":-(movement - (((($win.scrollTop() + wH) - osft) / mvd) * movement)) + "px" });
//         },
//         getSize = function(){
//             wH = $win.height();
//             tgW = $tg.width();
//             tgH = $tg.outerHeight();
//             osft = $tg.offset().top;
//             mvd = wH + tgH;
//             setBgSize();
//         },
//         init = function(){
//             $tg.getBackgroundSize(function(arg){
//                 bgW = arg.width;
//                 bgH = arg.height;
//                 getSize();
//                 $win.on("resize", getSize);
//                 imgParallax();
//                 TweenMax.to($tg, 1, {opacity:1, ease:Sine.easeOut});
//             });
//         }();
//     },
//     init = function(){
//         window.requestAnimationFrame = requestAnimationFrame;
//         $tgs.each(run);
//     }();
//     return this;
// };

class Hero extends React.Component {
  constructor(props) {
    super(props)
    this.heroBg = React.createRef()

    this.state = {
      movement: 300,
      offsetTargetTop: 0,
      windowHeight: 0,
      targetWidth: 0,
      targetHeight: 0,
      bgWidth: 0,
      bgHeight: 0,
      mvd: 0,
      backgroundSize: window.innerWidth < 1500 ? "auto 700px" : "cover",
    }
  }

  componentDidMount() {
    this.setState({
      bgWidth: this.heroBg.current.clientWidth,
      bgHeight: this.heroBg.current.clientHeight,
    })
    window.addEventListener("resize", this.getSize)
  }

  componentWillUnmount() {
    window.removeEventListener("resize", this.getSize)
  }

  setBgSize = () => {
    const {
      targetHeight,
      targetWidth,
      bgHeight,
      bgWidth,
      movement,
    } = this.state
    let th = targetHeight + movement
    let ds = th / bgHeight + 0.5
    let tw = bgWidth * ds
    if (window.innerWidth < 1500) {
      console.log(targetWidth)
      console.log(ds)
      console.log(tw)
      this.setState({ backgroundSize: `auto ${700}px` })
    } else {
      this.setState({
        backgroundSize: `${targetWidth + movement}px auto`,
      })
    }
  }

  getSize = () => {
    this.setState({
      windowHeight: window.innerHeight,
      targetHeight: this.heroBg.current.clientHeight,
      targetWidth: this.heroBg.current.clientWidth,
    })
    this.setBgSize()
  }

  render() {
    const backgroundSize = css`
      background-size: ${this.state.backgroundSize};
    `
    // 3200 x 1450 recommended image size
    return (
      <HeroBackground
        ref={this.heroBg}
        image="https://soflan.lion.co.jp/aromarich/img/sec_main_bg_01.jpg"
        css={backgroundSize}
      >
        <HeroContainer>
          <Subtitle>Hot Spring</Subtitle>
          <Title>温泉</Title>
          <BreadStyles>
            <Breadcrumb>
              <BreadcrumbItem
                text="ホーム"
                url={`/`}
                color={themeColor}
                underline={underline}
              />
              <Arrow>　>　</Arrow>
              <BreadcrumbItem text="ホーム" url={`/about/`} />
            </Breadcrumb>
          </BreadStyles>
        </HeroContainer>
      </HeroBackground>
    )
  }
}

export default Hero

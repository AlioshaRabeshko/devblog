import React from 'react';
import like from '../svgs/like.svg';
import dislike from '../svgs/dislike.svg';
import seen from '../svgs/seen.svg';

const statement = {
  title: 'Ремонт ультразвуковой мойки Ultrasonic Cleaner HB-4818T',
  type: 'Ремонт',
  image: 'https://w7.pngwing.com/pngs/447/1016/png-transparent-drawing-anime-art-manga-mouse-trap-black-hair-monochrome-human.png',
  description: 'Принесли на ремонт ультразвуковую мойку Ultrasonic Cleaner HB-4818T. Вскрыв корпус я обнаружил следы ремонта и характерный запах горелого. Вскрыв корпус я обнаружил следы ремонта и характерный запах горелого. Мойка состоит из двух блоков, силового и блока управления. Первым делом был извлечён из корпуса блок управления...',
  date: 'Today',
}

class WideStatement extends React.Component {
  render() {
    return (
      <div className="statement single">
        <p className="statement-title">{statement.title}</p>
        <p className="statement-type">{statement.type}</p>
        <img className="statement-image-full" alt="" src={statement.image} />
        <p className="statement-description">{statement.description}</p>
        <p className="statement-content">{statement.content ? statement.content : ''}</p>
        <div className="statement-footer">
          <p className="statement-date">{statement.date}</p>
          <div className="footer-element">
            <img src={like} alt="" />
            <p>123</p>
          </div>
          <div className="footer-element">
            <img src={dislike} alt="" />
            <p>432</p>
          </div>
          <div className="footer-element">
            <img src={seen} alt="" />
            <p>12343</p>
          </div>
        </div>
      </div>
    )
  }
}

export default WideStatement;

import React, {Component} from 'react';

import more from '../assets/more.svg';
import like from '../assets/like.svg';
import comment from '../assets/comment.svg';
import send from '../assets/send.svg';

import './Feed.css';

class Feed extends Component {
  render() {
    return (
      <section id="post-list">
        <article>
          <header>
            <div className="user-info">
              <span>Manollo Guedes</span>
              <span className="place">Lavras</span>
            </div>

            <img src={more} alt="Mais"/>
          </header>

          <img src="http://localhost:3333/files/chart.jpg" alt="" />
          
          <footer>
            <div className="actions">
              <img src={like} alt="" />
              <img src={comment} alt="" />
              <img src={send} alt="" />
            </div>

            <strong>900 curtidas</strong>
            <p>
              Gráfico do mapeamento!
              <span>
                #react #omnistack #top
              </span>
            </p>
          </footer>
        </article>
        <article>
          <header>
            <div className="user-info">
              <span>Manollo Guedes</span>
              <span className="place">Lavras</span>
            </div>

            <img src={more} alt="Mais"/>
          </header>

          <img src="http://localhost:3333/files/chart.jpg" alt="" />
          
          <footer>
            <div className="actions">
              <img src={like} alt="" />
              <img src={comment} alt="" />
              <img src={send} alt="" />
            </div>

            <strong>900 curtidas</strong>
            <p>
              Gráfico do mapeamento
              <span>
                #react #omnistack #top 
              </span>
            </p>
          </footer>
        </article>
      </section>
    );
  }
}

export default Feed;
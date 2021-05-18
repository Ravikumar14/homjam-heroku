import React, { Component } from 'react';
class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
    <div>
        <div className="bgImg" style={{ 
                backgroundImage: `url("6991a1a773c3b45eed0c575ba2f6bd44.png")` }}>
        </div>
    <div className="homediv">
        {/* navbar  */}
    <div className="container">
        <nav className="navbar navbar-expand-lg">
      <a className="navbar-brand" href="#"><img className="logo" src="logo.png" alt="logo" /></a>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon" />
      </button>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav mr-auto">
          <li className="nav-item active">
            <a className="nav-link" href="#"> <span><i class="fas fa-search"></i></span> Search</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">Help</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">Account</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#"><span><i class="far fa-bookmark"></i></span></a>
          </li>
        </ul>
      </div>
    </nav>
      </div>

               <div className="container position-relative content">
                   <h1>Cari Cari</h1>
                   <p>Live from their sofa to yours. Get closer to your favorite artists, and never miss out.</p>
               </div>
              <div className="LabelSection d-flex container position-relative">
             <div>
                 <div>
                     <span><i class="far fa-heart"></i></span>
                     <h1>456</h1>
                     <p>Likes everyday</p>
                 </div>
             </div>
             <div>
                 <div>
                     <span><i class="fas fa-calendar-day"></i></span>
                     <h1>745</h1>
                     <p>Online events</p>
                 </div>
             </div>
             <div>
                 <div>
                     <span><i class="fas fa-users"></i></span>
                     <h1>+10k</h1>
                     <p>Users</p>
                 </div>
             </div>
             <div>
                 <div>
                    <span><i class="fas fa-video"></i></span>
                     <h1>+2</h1>
                     <p>Views every day</p>
                 </div>
             </div>
              </div>
            <div className="CardLabelSection container">
              <div className="headSection d-flex" >
                <h1 className="sectionTitle">Upcoming Shows</h1><span className="float-right sectionText">View all</span>
              </div>
              <div className="cardSection d-flex">
              <div className="card">
                <img src="card1.png" className="card-img-top" alt="..." />
                <div className="card-body">
                <p className="card-text text-danger">Folk</p>
                <h3 className="card-title">Benny Dayal</h3>
                </div>
                <div className="card-body">
                <a href="#" className="">More Info &#8594;</a>
                <a href="#" className="float-right"><span><i class="far fa-bookmark"></i></span></a>
                </div>
            </div>
            <div className="card">
                <img src="card2.png" className="card-img-top" alt="..." />
                <div className="card-body">
                <p className="card-text text-danger">Bollywood</p>
                <h3 className="card-title">Vijay Yesudas</h3>
                </div>
                <div className="card-body">
                <a href="#" className="">More Info &#8594;</a>
                <a href="#" className="float-right"><span><i class="far fa-bookmark"></i></span></a>
                </div>
            </div>
            <div className="card">
                <img src="card3.png" className="card-img-top" alt="..." />
                <div className="card-body">
                <p className="card-text text-danger">Folk</p>
                <h3 className="card-title">Andrea Jeremiah</h3>
                </div>
                <div className="card-body">
                <a href="#" className="">More Info &#8594;</a>
                <a href="#" className="float-right"><span><i class="far fa-bookmark"></i></span></a>
                </div>
            </div>
            <div className="card">
                <img src="card4.png" className="card-img-top" alt="..." />
                <div className="card-body">
                <p className="card-text text-danger">Folk</p>
                <h3 className="card-title">Shilpa Rao</h3>
                </div>
                <div className="card-body">
                <a href="#" className="">More Info &#8594;</a>
                <a href="#" className="float-right"><span><i class="far fa-bookmark"></i></span></a>
                </div>
            </div>
              </div>
              </div>

              <div className="ScardSection container">
                  <div className="d-flex">
                    <h1 className="sectionTitle">Reviews</h1><span className="float-right text-white sectionText">1/12&nbsp;&nbsp;&#8592;&nbsp;&#8594;</span>
                  </div>
                  <div className="d-flex Pcards">
                      <div className="card">
                          <div className="card-body">
                              <div>
                              <img src="scard1.png" alt="img" />
                              </div>
                              <div>
                              <h4 className="card-title">Hellen Jummy</h4>
                              <p>Palo Alto, CA</p>
                              </div>
                          </div>
                          <div>
                        <p className="card-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum, alias officiis, aperiam velit molestias magnam modi quibusdam doloremque veniam asperiores 
                        </p>
                         </div>

                      </div>
                      <div className="card">
                          <div className="card-body">
                              <div>
                              <img src="scard2.png" alt="img" />
                              </div>
                              <div>
                              <h4 className="card-title">Isaac Oluwatemilorun</h4>
                              <p>Palo Alto, CA</p>
                              </div>
                          </div>
                          <div>
                        <p className="card-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum, alias officiis, aperiam velit molestias magnam modi quibusdam doloremque veniam asperiores 
                        </p>
                         </div>

                      </div>
                      <div className="card">
                          <div className="card-body">
                              <div>
                              <img src="scard3.png" alt="img" />
                              </div>
                              <div>
                              <h4 className="card-title">Hellen Jummy</h4>
                              <p>Palo Alto, CA</p>
                              </div>
                          </div>
                          <div>
                        <p className="card-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum, alias officiis, aperiam velit molestias magnam modi quibusdam doloremque veniam asperiores 
                        </p>
                         </div>

                      </div>

                  </div>
              </div>
            </div>
            </div>
         );
    }
}
 
export default Home;
import React, { Component } from 'react';
import RaisedButton from 'material-ui/RaisedButton';

export default class Subpage extends Component {
  render() {
    return (
      <div>
        <div className='features anchor' id='features'>
          <div className='container'>
            <div className='row'>
              <div className='col-md-12'>
                <h2 className='section-title aligncenter'>Awesome Features</h2>
                <div className='sub-title-section aligncenter'>Here are several causes that make our template worth paying attention to</div>
              </div>
            </div>
            <div className='row'>
              <div className='col-md-4 col-sm-4'>
                <div className='features-left features-list alignright'>
                  <ul>
                    <li>
                      <i className='fa fa-television' />
                      <h3>Responsive Design</h3>
                      <p>Dynamically target high-payoff intellectual capital
                        for customized technologies. Objectively integrate
                        emerging core competencies before process-centric
                        communities. Dramatically evisculate holistic innovation
                        rather than client-centric data.</p>
                    </li>
                    <li>
                      <i className='fa fa-paint-brush' />
                      <h3>Different Colors</h3>
                      <p>Distinctively re-engineer revolutionary meta-services
                        and premium architectures. Intrinsically incubate intuitive
                        opportunities and real-time potentialities. Appropriately
                        communicate one-to-one technology after plug-and-play networks.</p>
                    </li>
                  </ul>
                </div>
              </div>
              <div className='col-md-4 col-sm-4 hidden-xs'>
                <div className='fs-image-wrapp aligncenter'>
                  <img src='images/placeholder-445x860.png' alt='' title='' />
                </div>
              </div>
              <div className='col-md-4 col-sm-4'>
                <div className='features-right features-list'>
                  <ul>
                    <li>
                      <i className='fa fa-star-half-o' />
                      <h3>Simple & Clean</h3>
                      <p>Enthusiastically mesh long-term high-impact infrastructures
                        vis-a-vis efficient customer service. Professionally fashion
                        wireless leadership rather than prospective experiences.
                        Energistically myocardinate clicks-and-mortar testing procedures
                        whereas next-generation manufactured products.</p>
                    </li>
                    <li>
                      <i className='fa fa-cog' />
                      <h3>CROSS BROWSER SUPPORT</h3>
                      <p>Quickly aggregate B2B users and worldwide potentialities.
                        Progressively plagiarize resource-leveling e-commerce through
                        resource-leveling core competencies. Dramatically mesh low-risk
                        high-yield alignments before transparent e-tailers.</p>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className='between-section'>
          <div className='container'>
            <div className='row'>
              <div className='col-md-12'>
                <h2 className='section-title aligncenter'>Touch The Innovations</h2>
                <div className='sub-title-section aligncenter sidepadding'>
                  Distinctively exploit optimal alignments for intuitive bandwidth.
                  Quickly coordinate e-business applications through revolutionary
                  catalysts for change. Seamlessly underwhelm optimal testing procedures
                  whereas bricks-and-clicks processes.
                </div>
              </div>
            </div>
            <div className='row'>
              <div className='col-md-12'>
                <div className='hor-img aligncenter'><img src='images/placeholder-860x445.png' alt=' title=' /></div>
              </div>
            </div>
            <div className='row'>
              <div className='col-md-12'>
                <div className='for-btn aligncenter'><a href='#0' className='btn-site btn-color'>Download App</a></div>
              </div>
            </div>
          </div>
        </div>

        <div className='benefits anchor' id='benefits'>
          <div className='container'>
            <div className='row'>
              <div className='col-md-5 col-sm-5 hidden-xs'>
                <div className='ver-img aligncenter'><img src='images/placeholder-568x771.png' alt=' title=' /></div>
              </div>
              <div className='col-md-7 col-sm-7'>
                <h2 className='section-title alignright'>Our Benefits</h2>
                <div className='benefits-list alignright'>
                  <ul>
                    <li>
                      <i className='fa fa-eyedropper' />
                      <h3>6 color options</h3>
                      <p>Proactively fabricate one-to-one materials via effective e-business.
                        Completely synergize scalable e-commerce rather than high
                        standards in e-services.</p>
                    </li>
                    <li>
                      <i className='fa fa-sliders' />
                      <h3>Stunning flexibility</h3>
                      <p>Progressively maintain extensive infomediaries via
                        extensible niches. Dramatically disseminate standardized
                        metrics after resource-leveling processes.</p>
                    </li>
                    <li>
                      <i className='fa fa-line-chart' />
                      <h3>Step on the new level</h3>
                      <p>Appropriately empower dynamic leadership skills after
                        business portals. Globally myocardinate interactive supply
                        chains with distinctive quality vectors.</p>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className='follow anchor' id='follow'>
          <div className='container'>
            <div className='row'>
              <div className='col-md-12'>
                <h2 className='section-title aligncenter'>Follow Us</h2>
                <div className='sub-title-section aligncenter'>Follow us in social
                  networks. You can also subscribe for our news. <br />We are going to
                  provide you with actual and important for you information without
                  spam or fluff.
                </div>
              </div>
            </div>
            <div className='row'>
              <div className='col-md-12'>
                <div className='social-links-wrapper aligncenter'>
                  <i className='fa fa-facebook' />
                  <i className='fa fa-google-plus' />
                  <i className='fa fa-instagram' />
                  <i className='fa fa-pinterest' />
                  <i className='fa fa-twitter' />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className='between-section'>
          <div className='container'>
            <div className='row'>
              <div className='col-md-12 aligncenter'>
                <img src='images/logo.png' alt='Logo' />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

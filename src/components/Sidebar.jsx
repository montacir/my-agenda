import React, { Component } from 'react';

const Sidebar = () => (
	<div key="sidebar" className="sidebar-left">
            
            <div className="logo dark-logo-bg visible-xs-* visible-sm-*">
                <a href="index-2.html">
                    <img src="img/logo-icon.png" alt="" />
                    
                    <span className="brand-name">SlickLab</span>
                </a>
            </div>
            

            <div className="sidebar-left-info">
                
                <div className=" search-field">  </div>
                

                
                <ul className="nav nav-pills nav-stacked side-navigation">
                    <li>
                        <h3 className="navigation-title">Navigation</h3>
                    </li>
                    <li className="active"><a href="index-2.html"><i className="fa fa-home"></i> <span>Dashboard</span></a></li>
                    <li className="menu-list">
                        <a href="#"><i className="fa fa-laptop"></i>  <span>Layouts</span></a>
                        <ul className="child-list">
                            <li><a href="boxed-layout.html"> Boxed Page</a></li>
                            <li><a href="collapsed-menu.html"> Sidebar Collapsed</a></li>
                            <li><a href="blank-page.html"> Blank page</a></li>
                            <li><a href="different-theme-layouts.html"> Different Theme Layouts</a></li>
                        </ul>
                    </li>
                    <li className="menu-list"><a href="#"><i className="fa fa-book"></i> <span>UI Elements</span></a>
                        <ul className="child-list">
                            <li><a href="general.html"> BS Elements</a></li>
                            <li><a href="buttons.html"> Buttons</a></li>
                            <li><a href="toastr.html"> Toaster Notification</a></li>
                            <li><a href="widgets.html"> Widgets</a></li>
                            <li><a href="ion-slider.html"> Ion Slider</a></li>
                            <li><a href="tree.html"> Tree View</a></li>
                            <li><a href="nestable.html"> Nestable</a></li>
                            <li><a href="fontawesome.html"> Fontawesome</a></li>
                            <li><a href="line-icon.html"> Line Icon</a></li>
                        </ul>
                    </li>
                    <li>
                        <h3 className="navigation-title">Components</h3>
                    </li>
                    <li className="menu-list"><a href="#"><i className="fa fa-cogs"></i> <span>Components <span className="badge noti-arrow bg-success pull-right">3</span> </span></a>
                        <ul className="child-list">
                            <li><a href="grid.html"> Grids</a></li>
                            <li><a href="calendar.html"> Calendar</a></li>
                            <li><a href="timeline.html"> Timeline </a></li>
                            <li><a href="gallery.html"> Gallery </a></li>
                        </ul>
                    </li>

                    <li className="menu-list"><a href="javascript:;"><i className="fa fa-th-list"></i> <span>Data Tables</span></a>
                        <ul className="child-list">
                            <li><a href="table-static.html"> Basic Table</a></li>
                            <li><a href="table-dynamic.html"> Advanced Table</a></li>
                        </ul>
                    </li>

                    <li className="menu-list"><a href="#"><i className="fa fa-tasks"></i> <span>Forms</span></a>
                        <ul className="child-list">
                            <li><a href="form-layout.html"> Form Layouts</a></li>
                            <li><a href="advanced-components.html"> Advanced Components</a></li>
                            <li><a href="form-wizard.html"> Form Wizards</a></li>
                            <li><a href="form-validation.html"> Form Validation</a></li>
                            <li><a href="form-editor.html"> Editors</a></li>
                        </ul>
                    </li>

                    <li className="menu-list"><a href="#"><i className="fa fa-bar-chart-o"></i> <span>Charts </span></a>
                        <ul className="child-list">
                            <li><a href="flot-chart.html"> Flot Charts</a></li>
                            <li><a href="morris-chart.html"> Morris Charts</a></li>
                            <li><a href="chartjs.html"> Chartjs</a></li>
                        </ul>
                    </li>
                    <li>
                        <h3 className="navigation-title">Extra</h3>
                    </li>

                    <li className="menu-list"><a href="javascript:;"><i className="fa fa-envelope-o"></i> <span>Email <span className="label noti-arrow bg-danger pull-right">4 Unread</span> </span></a>
                        <ul className="child-list">
                            <li><a href="inbox.html"> Inbox</a></li>
                            <li><a href="inbox-details.html"> View Mail</a></li>
                            <li><a href="inbox-compose.html"> Compose Mail</a></li>
                        </ul>
                    </li>

                    <li className="menu-list"><a href="javascript:;"><i className="fa fa-map-marker"></i> <span>Maps</span></a>
                        <ul className="child-list">
                            <li><a href="google-map.html"> Google Map</a></li>
                            <li><a href="vector-map.html"> Vector Map</a></li>
                        </ul>
                    </li>

                    <li className="menu-list"><a href="#"><i className="fa fa-file-text"></i> <span>Extra Pages</span></a>
                        <ul className="child-list">
                            <li><a href="profile.html"> Profile</a></li>
                            <li><a href="invoice.html"> Invoice</a></li>
                            <li><a href="login.html"> Login </a></li>
                            <li><a href="registration.html"> Registration </a></li>
                            <li><a href="lock.html"> Lock Screen </a></li>
                            <li><a href="404.html"> 404 Error</a></li>
                            <li><a href="500.html"> 500 Error</a></li>

                        </ul>
                    </li>

                </ul>
                

                
                <div className="sidebar-widget">
                    <h4>Server Status</h4>
                    <ul className="list-group">
                        <li>
                            <span className="label label-danger pull-right">33%</span>
                            <p>CPU Used</p>
                            <div className="progress progress-xs">
                                <div className="progress-bar progress-bar-danger" style={{width: '33%'}}>
                                    <span className="sr-only">33%</span>
                                </div>
                            </div>
                        </li>
                        <li>
                            <span className="label label-warning pull-right">65%</span>
                            <p>Bandwidth</p>
                            <div className="progress progress-xs">
                                <div className="progress-bar progress-bar-warning" style={{width: '65%'}}>
                                    <span className="sr-only">65%</span>
                                </div>
                            </div>
                        </li>
                        <li><a href="javascript:;" className="btn btn-success btn-sm ">View Details</a></li>
                    </ul>
                </div>
                

            </div>
        </div>
);

const RightSideBar = () => (
	<div className="sb-slidebar sb-right sb-style-overlay">
	 <div className="right-bar">

            <span className="r-close-btn sb-close"><i className="fa fa-times"></i></span>

            <ul className="nav nav-tabs nav-justified-">
                <li className="active">
                    <a href="#chat" data-toggle="tab">Chat</a>
                </li>
                <li className="">
                    <a href="#info" data-toggle="tab">Info</a>
                </li>
                <li className="">
                    <a href="#settings" data-toggle="tab">Settings</a>
                </li>
            </ul>
            <div className="tab-content">
            <div role="tabpanel" className="tab-pane active " id="chat">
                <div className="online-chat">
                    <div className="online-chat-container">
                        <div className="chat-list">
                            <h3>Chat list</h3>
                            <h5>34 Friends Online, 80 Offline</h5>
                            <a href="#" className="add-people tooltips" data-original-title="Add People" data-toggle="tooltip" data-placement="left">
                                <i className="fa fa-plus"></i>
                            </a>
                        </div>
                        <div className="side-title">
                            <h2>online</h2>
                            <div className="title-border-row">
                                <div className="title-border"></div>
                            </div>
                        </div>

                        <ul className="team-list chat-list-side">
                            <li>
                                <a href="#">
                                        <span className="thumb-small">
                                <img className="circle" src="img/img2.jpg" alt="" />
                                <i className="online dot"></i>
                            </span>
                                    <div className="inline">
                                            <span className="name">
                                    Alison Jones
                                </span>
                                        <small className="text-muted">Start exploring</small>
                                    </div>
                                </a>
                            </li>
                            <li>
                                <a href="#">
                                        <span className="thumb-small">
                                <img className="circle" src="img/img3.jpg" alt="" />
                                <i className="online dot"></i>
                            </span>
                                    <div className="inline">
                                            <span className="name">
                                    Jonathan Smith
                                </span>
                                        <small className="text-muted">Alien Inside</small>
                                    </div>
                                </a>
                            </li>
                            <li>
                                <a href="#">
                                        <span className="thumb-small">
                                <img className="circle" src="img/img1.jpg" alt="" />
                                <i className="away dot"></i>
                            </span>
                                    <div className="inline">
                                            <span className="name">
                                    Anjelina Doe
                                </span>
                                        <small className="text-muted">Screaming...</small>
                                    </div>
                                </a>
                            </li>
                            <li>
                                <a href="#">
                                        <span className="thumb-small">
                                <img className="circle" src="img/img3.jpg" alt=""/>
                                <i className="busy dot"></i>
                            </span>
                                    <div className="inline">
                                            <span className="name">
                                    Franklin Adam
                                </span>
                                        <small className="text-muted">Don't lose the hope</small>
                                    </div>
                                </a>
                            </li>
                            <li>
                                <a href="#">
                                        <span className="thumb-small">
                                <img className="circle" src="img/img2.jpg" alt=""/>
                                <i className="online dot"></i>
                            </span>
                                    <div className="inline">
                                            <span className="name">
                                    Jeff Crowford
                                </span>
                                        <small className="text-muted">Just flying</small>
                                    </div>
                                </a>
                            </li>

                        </ul>

                        <div className="side-title">
                            <h2>Offline</h2>
                            <div className="title-border-row">
                                <div className="title-border"></div>
                            </div>
                        </div>
                        <ul className="team-list chat-list-side">
                            <li>
                                <a href="#">
                                        <span className="thumb-small">
                                <img className="circle" src="img/img2.jpg" alt=""/>
                                <i className="offline dot"></i>
                            </span>
                                    <div className="inline">
                                            <span className="name">
                                    Alison Jones
                                </span>
                                        <small className="text-muted">Start exploring</small>
                                    </div>
                                </a>
                            </li>
                            <li>
                                <a href="#">
                                        <span className="thumb-small">
                                <img className="circle" src="img/img3.jpg" alt=""/>
                                <i className="offline dot"></i>
                            </span>
                                    <div className="inline">
                                            <span className="name">
                                    Jonathan Smith
                                </span>
                                        <small className="text-muted">Alien Inside</small>
                                    </div>
                                </a>
                            </li>
                            <li>
                                <a href="#">
                                        <span className="thumb-small">
                                <img className="circle" src="img/img1.jpg" alt=""/>
                                <i className="offline dot"></i>
                            </span>
                                    <div className="inline">
                                            <span className="name">
                                    Anjelina Doe
                                </span>
                                        <small className="text-muted">Screaming...</small>
                                    </div>
                                </a>
                            </li>
                            <li>
                                <a href="#">
                                        <span className="thumb-small">
                                <img className="circle" src="img/img3.jpg" alt=""/>
                                <i className="offline dot"></i>
                            </span>
                                    <div className="inline">
                                            <span className="name">
                                    Franklin Adam
                                </span>
                                        <small className="text-muted">Don't lose the hope</small>
                                    </div>
                                </a>
                            </li>
                            <li>
                                <a href="#">
                                        <span className="thumb-small">
                                <img className="circle" src="img/img2.jpg" alt=""/>
                                <i className="offline dot"></i>
                            </span>
                                    <div className="inline">
                                            <span className="name">
                                    Jeff Crowford
                                </span>
                                        <small className="text-muted">Just flying</small>
                                    </div>
                                </a>
                            </li>

                        </ul>
                    </div>


                </div>


            </div>

            <div role="tabpanel" className="tab-pane " id="info">
            <div className="chat-list info">
                <h3>Latest Information</h3>
                <a  href="javascript:;" className="add-people tooltips" data-original-title="Refresh" data-toggle="tooltip" data-placement="left">
                    <i className="fa fa-repeat"></i>
                </a>
            </div>

            <div className="aside-widget">
                <div className="side-title-alt">
                    <h2>Revenue</h2>
                    <a href="#" className="close side-w-close">
                        <i className="fa fa-times"></i>
                    </a>
                </div>
                <ul className="team-list chat-list-side info">
                    <li>
                                <span className="thumb-small">
                            <i className="fa fa-circle green-color"></i>
                        </span>
                        <div className="inline">
                                    <span className="name">
                                Received Money from John Doe
                            </span>
                            <span className="value green-color">$12300</span>
                        </div>
                    </li>
                    <li>
                                <span className="thumb-small">
                            <i className="fa fa-circle purple-color"></i>
                        </span>
                        <div className="inline">
                                    <span className="name">
                                Total Admin Template Sales
                            </span>
                            <span className="value purple-color">$40100</span>
                        </div>
                    </li>
                    <li>
                                <span className="thumb-small">
                            <i className="fa fa-circle red-color"></i>
                        </span>
                        <div className="inline">
                                    <span className="name">
                                Monty Revenue
                            </span>
                            <span className="value red-color">$322300</span>
                        </div>
                    </li>
                    <li>
                                <span className="thumb-small">
                            <i className="fa fa-circle blue-color"></i>
                        </span>
                        <div className="inline">
                                    <span className="name">
                                Received Money from John Doe
                            </span>
                            <span className="value blue-color">$1520</span>
                        </div>
                    </li>
                </ul>
            </div>

            <div className="aside-widget">

                <div className="side-title-alt">
                    <h2>Statistics</h2>
                    <a href="#" className="close side-w-close">
                        <i className="fa fa-times"></i>
                    </a>
                </div>
                <ul className="team-list chat-list-side info statistics border-less-list">
                    <li>
                        <div className="inline">
                                    <span className="name">
                                         Foreign Visit
                                    </span>
                            <small className="text-muted">25% Increase</small>
                        </div>
                                <span className="thumb-small">
                                    <span id="foreign-visit" className="chart"></span>
                                </span>
                    </li>
                    <li>
                        <div className="inline">
                                    <span className="name">
                                Montly Visit
                            </span>
                            <small className="text-muted">Average visit 12% Increase</small>
                        </div>
                                <span className="thumb-small">
                                    <span id="monthly-visit" className="chart"></span>
                                </span>
                    </li>
                    <li>
                        <div className="inline">
                                    <span className="name">
                                Unique Visit
                            </span>
                            <small className="text-muted">35% unique visitor </small>
                        </div>
                                <span className="thumb-small">
                                    <span id="unique-visit" className="chart"></span>
                                </span>
                    </li>
                </ul>
            </div>

            <div className="aside-widget">
                <div className="side-title-alt">
                    <h2>Notification</h2>
                    <a href="#" className="close side-w-close">
                        <i className="fa fa-times"></i>
                    </a>
                </div>
                <ul className="team-list chat-list-side info border-less-list">
                    <li>
                                <span className="thumb-small">
                            <i className="fa fa-bell green-color"></i>
                        </span>
                        <div className="inline">
                                    <span className="name">
                                Meeting with John Doe at
                            </span>
                            <span className="value text-muted">11.30 am</span>
                        </div>
                    </li>
                    <li>
                                <span className="thumb-small">
                            <i className="fa fa-users green-color"></i>
                        </span>
                        <div className="inline">
                                    <span className="name">
                                3 membership request pending
                            </span>
                            <span className="value text-muted">John, Smith, Lira</span>
                        </div>
                    </li>
                </ul>

            </div>

            <div className="aside-widget">


            <div className="side-title-alt">
                    <h2>System</h2>
                    <a href="#" className="close side-w-close">
                        <i className="fa fa-times"></i>
                    </a>
                </div>
            <ul className="team-list chat-list-side info border-less-list">
                    <li>
                        <div className="inline">
                                    <span className="name">
                                Received database error report from hosting provider
                            </span>
                            <span className="value text-muted">11.30 am</span>
                        </div>
                    </li>
                    <li>
                        <div className="inline">
                                    <span className="name">
                                Hosting Renew notification
                            </span>
                            <span className="value text-muted">12.00 pm</span>
                        </div>
                    </li>

                </ul>
            </div>

            <div className="aside-widget">
                <div className="side-title-alt">
                    <h2>Work Progress</h2>
                    <a href="#" className="close side-w-close">
                        <i className="fa fa-times"></i>
                    </a>
                </div>
                <ul className="team-list chat-list-side info border-less-list sale-monitor">
                    <li>
                        <div className="states">
                            <div className="info">
                                <div className="desc pull-left">Server Setup and Configuration</div>
                            </div>
                            <div className="progress progress-xs">
                                <div className="progress-bar progress-bar-success" role="progressbar" aria-valuenow="40" aria-valuemin="0" aria-valuemax="100" style={{width: '50%'}}></div>
                            </div>
                            <div className="info">
                                <small className="percent pull-left text-muted">50% completed</small>
                            </div>
                        </div>
                    </li>
                    <li>
                        <div className="states">
                            <div className="info">
                                <div className="desc pull-left">Website Design & Development</div>
                            </div>
                            <div className="progress progress-xs">
                                <div className="progress-bar progress-bar-info" role="progressbar" aria-valuenow="40" aria-valuemin="0" aria-valuemax="100" style={{width: '85%'}}></div>
                            </div>
                            <div className="info">
                                <small className="percent pull-left text-muted">85% completed</small>
                            </div>
                        </div>
                    </li>
                </ul>
            </div>

            </div>

            <div role="tabpanel" className="tab-pane " id="settings">
                <div className="chat-list bottom-border settings-head">
                    <h3>Account Setting</h3>
                    <h5>Configure your account as per your need.</h5>
                </div>
                <ul className="team-list chat-list-side info statistics border-less-list setting-list">
                    <li>
                        <div className="inline">
                                <span className="name">
                                Make my feature post public?
                            </span>
                            <small className="text-muted">Everyone will be able to see, like, comment
                                and share your feature post.</small>
                        </div>
                            <span className="thumb-small">
                            <input type="checkbox" className="js-switch-small" defaultChecked/>
                        </span>
                    </li>
                    <li>
                        <div className="inline">
                                <span className="name">
                                Show offline Contacts
                            </span>
                            <small className="text-muted">Lorem ipsum dolor sit amet, consectetuer
                                adipiscing elit.</small>
                        </div>
                            <span className="thumb-small">
                            <input type="checkbox" className="js-switch-small2" defaultChecked/>
                        </span>
                    </li>

                    <li>
                        <div className="inline">
                                <span className="name">
                                Everyone will see my stuff
                            </span>
                            <small className="text-muted">Lorem ipsum dolor sit amet, consectetuer
                                adipiscing elit.</small>
                        </div>
                            <span className="thumb-small">
                            <input type="checkbox" className="js-switch-small3"/>
                        </span>
                    </li>

                </ul>

                <div className="chat-list bottom-border settings-head">
                    <h3>General Setting</h3>
                    <h5>Configure your account as per your need.</h5>
                </div>
                <ul className="team-list chat-list-side info statistics border-less-list setting-list">
                    <li>
                        <div className="inline">
                                <span className="name">
                                Show me Online
                            </span>
                        </div>
                            <span className="thumb-small">
                            <input type="checkbox" className="js-switch-small4" defaultChecked/>
                        </span>
                    </li>
                    <li>
                        <div className="inline">
                                <span className="name">
                                Status visible to all
                            </span>
                        </div>
                            <span className="thumb-small">
                            <input type="checkbox" className="js-switch-small5" />
                        </span>
                    </li>

                    <li>
                        <div className="inline">
                                <span className="name">
                                Show my work progess to all
                            </span>
                        </div>
                            <span className="thumb-small">
                            <input type="checkbox" className="js-switch-small6" defaultChecked/>
                        </span>
                    </li>

                </ul>

            </div>

            </div>
            </div>
             </div>
    );

export { Sidebar, RightSideBar };
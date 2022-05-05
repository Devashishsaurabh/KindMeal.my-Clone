function navbar(){
    return `<div id="insidenav">
    <div id="right">
        <a href="index.html"><img  id="logo"src="https://www.kindmeal.my/images/logo-kindmeal.png"></a>
    </div>
    <div id="center">
  
    <div class="tooltip1">
      <a href="widget.html"><img id="fb"src="https://www.kindmeal.my/images/follow_blog_grey.png"></a>
      <span class="tooltiptext">Save Lives with Your Blogs - KindMeal.my Widget</span>
   </div>
        <div class="tooltip2">
        <a href="https://www.facebook.com/KindMeal.my"><img  id="fb"src="https://www.kindmeal.my/images/follow_facebook_grey.png"></a>
        <span class="tooltiptext2">Follow KindMeal.my on Facebook</span>
      </div>
     
      <div class="tooltip2">
       <a href="https://twitter.com/KindMeal"><img  id="twitter"src="https://www.kindmeal.my/images/follow_twitter_grey.png"></a>
        <span class="tooltiptext2">Follow KindMeal.my on Twitter</span>
      </div>
    </div>
    <div id="left">
        <p id="log">Login</p>
        <div id="facebook"><a href="https://www.facebook.com/login.php?skip_api_login=1&api_key=292733157519852&kid_directed_site=0&app_id=292733157519852&signed_next=1&next=https%3A%2F%2Fwww.facebook.com%2Fv2.9%2Fdialog%2Foauth%3Fclient_id%3D292733157519852%26redirect_uri%3Dhttps%253A%252F%252Fwww.kindmeal.my%252Flogin.php%253Faction%253Dfacebook%26state%3D0930d1bd3063a0c73bf1b1aa494722bc%26display%3Dpopup%26scope%3Demail%252Cuser_birthday%252Cuser_location%26ret%3Dlogin%26fbapp_pres%3D0%26logger_id%3D0df811cf-81e5-463f-a6db-25a0e1066052%26tp%3Dunspecified&cancel_url=https%3A%2F%2Fwww.kindmeal.my%2Flogin.php%3Faction%3Dfacebook%26error%3Daccess_denied%26error_code%3D200%26error_description%3DPermissions%2Berror%26error_reason%3Duser_denied%26state%3D0930d1bd3063a0c73bf1b1aa494722bc%23_%3D_&display=popup&locale=en_GB&pl_dbl=0">Facebook </a></div>
        <button
        type="button"
        id="email1"
        class="btn btn-primary"
        data-bs-toggle="modal"
        data-bs-target="#loginModal"
    >
       Email
    </button>

        <p id="pipe">|</p>
        <button id="sign"
        type="button"
        class="btn btn-primary"
        data-bs-toggle="modal"
        data-bs-target="#myModal"
    >Sign up </button>
    </div>
  </div>
  <div class="modal" tabindex="-1" role="dialog" id="loginModal">
			<div class="modal-dialog modal-dialog-centered" role="document ">
				<div class="modal-content">
					<div class="modal-header">
						<div id="logo_dismiss">
							<img
								src="https://www.kindmeal.my/images/logo-kindmeal.png"
								alt="logo-kindmeal"
								style="cursor: pointer"
								onclick="window.location.href='index.html'"
							/>
							<button
								type="button"
								class="btn-close"
								data-bs-dismiss="modal"
								aria-label="Close"
							></button>
						</div>

						<h5>Member Login</h5>
					</div>

					<div class="modal-body1">
						<div id="yourEmailPassword">
							<input type="email" placeholder="Your Email" id="email" />
							<input type="password" placeholder="Your Password" id="pass" />
							<button
								type="button"
								class="btn btn-success"
								id="userLoginButton"
							>
								Login
							</button>
						</div>
					</div>

					<div class="modal-footer">
						<button id="loginFbButton" style="display: inline-block">
							<img
								src="https://www.kindmeal.my/images/icon_button_fb.png"
								style="float: left; margin-right: 0.5em; height: 25px"
							/>Login with Facebook
						</button>
						<div id="modalFooterLinks">
							<button type="button" class="btn btn-link">
								Forgot password?
							</button>
							<button
								type="button"
								class="btn btn-link"
								onclick="window.location.href='signup.html'"
							>
								Not a member? Sign up FREE!
							</button>
						</div>
					</div>
				</div>
			</div>
		</div>
  <div class="modal" tabindex="-1" id="myModal">
        <div class="modal-dialog  modal-dialog-centered">
            <div class="modal-content">
                <div class="modal-header">
                    <div id="logo_dismiss">
                        <img src="https://www.kindmeal.my/images/logo-kindmeal.png" alt="logo-kindmeal" style="cursor: pointer;" onclick="window.location.href='index.html'"/>
                        <button
                            type="button"
                            class="btn-close"
                            data-bs-dismiss="modal"
                            aria-label="Close"
                        ></button>
                    </div>

                    <h5>Join KindMeal For FREE Now</h5>
                    <p>Please select the type of membership to proceed</p>
                </div>

                <div class="modal-body">
                    <div id="modal-body-box1"  onclick="window.location.href='signup.html'">
                        <img
                            src="https://www.kindmeal.my/images/join_normal.png"
                            alt="logo1"
                        />
                        <div>
                            <h6>Food Lover</h6>
                            <p>
                                Join FREE to enjoy yummy deals, share reviews & meet our
                                community of compassionate food lovers
                            </p>
                        </div>
                    </div>
                    <div id="modal-body-box2">
                        <img
                            src="https://www.kindmeal.my/images/join_shop.png"
                            alt="logo2"
                        />
                        <div>
                            <h6>Restaurant / Shop Owner</h6>
                            <p>
                                List your food outlet, create exciting vegetarian deals &
                                showcase your delicious menu for FREE. Enjoy our yummy deals,
                                share reviews & meet food lovers too.
                            </p>
                        </div>
                    </div>
                </div>

                <div class="modal-footer">
                    <button type="button" class="btn btn-link" data-bs-dismiss="modal">
                        Member Login
                    </button>
                    <button type="button" class="btn btn-link">Forgot password?</button>
                </div>
            </div>
        </div>
    </div>`
}
function navbar2(){
    return `<div id="insidenav2">
    <div id="selected"><a href="index.html">Home</a></div>
    <div><a href="">Meal Deals </a></div>
    <div><a href="">KindMoments</a></div>
    <div><a href="">Hot Picks</a></div>
    <div><a href="">Recipes</a></div>
    <div><a href="">Directory</a></div>
    <div><a href="">Articles</a></div>
    <div><a href="">Help</a></div>
  </div>`
}
export {navbar,navbar2}

// --------navbar export from heare----------
// Create an immediately invoked functional expression to wrap our code
(function () {

  // Define our constructor 
  this.Modal = function () {

    // Create global element references
    this.closeButton = null;
    this.modal = null;
    this.overlay = null;

    // Determine proper prefix
    this.transitionEnd = transitionSelect();

    // Define option defaults 
    var defaults = {
      autoOpen: false,
      className: 'fade-and-drop',
      closeButton: true,
      content: "",
      maxWidth: 600,
      minWidth: 280,
      overlay: true
    }

    // Create options by extending defaults with the passed in arugments
    if (arguments[0] && typeof arguments[0] === "object") {
      this.options = extendDefaults(defaults, arguments[0]);
    }

    if (this.options.autoOpen === true) this.open();

  }

  // Public Methods

  Modal.prototype.close = function () {
    var _ = this;
    this.modal.className = this.modal.className.replace(" scotch-open", "");
    this.overlay.className = this.overlay.className.replace(" scotch-open",
      "");
    this.modal.addEventListener(this.transitionEnd, function () {
      _.modal.parentNode.removeChild(_.modal);
    });
    this.overlay.addEventListener(this.transitionEnd, function () {
      if (_.overlay.parentNode) _.overlay.parentNode.removeChild(_.overlay);
    });
  }

  Modal.prototype.open = function () {
    buildOut.call(this);
    initializeEvents.call(this);
    window.getComputedStyle(this.modal).height;
    this.modal.className = this.modal.className +
      (this.modal.offsetHeight > window.innerHeight ?
        " scotch-open scotch-anchored" : " scotch-open");
    this.overlay.className = this.overlay.className + " scotch-open";
  }
  Modal.prototype.open1 = function (mobileInputVal) {
    var _ = this;
    this.modal.className = this.modal.className.replace(" scotch-open", "");
    this.overlay.className = this.overlay.className.replace(" scotch-open",
      "");
      _.modal.parentNode.removeChild(_.modal);
      if (_.overlay.parentNode) _.overlay.parentNode.removeChild(_.overlay);
    // this.modal.addEventListener(this.transitionEnd, function () {
    //   _.modal.parentNode.removeChild(_.modal);
    // });
    // this.overlay.addEventListener(this.transitionEnd, function () {
    //   if (_.overlay.parentNode) _.overlay.parentNode.removeChild(_.overlay);
    // });
    buildOut1.call(this,mobileInputVal);
    initializeEvents.call(this);
    window.getComputedStyle(this.modal).height;
    this.modal.className = this.modal.className +
      (this.modal.offsetHeight > window.innerHeight ?
        " scotch-open scotch-anchored" : " scotch-open");
    this.overlay.className = this.overlay.className + " scotch-open";
  }

  // Private Methods

  function buildOut() {
    debugger;
    var content, contentHolder, docFrag;
    var HTML = '<div class="login-module-container"> <div class="login-module-inner"> <div class="card"> <div class="card-header"> <img class="popup-close" src="assets/images/login-close-icon.svg" alt=""> <div class="card-header-block"> <div class="img-wrapper"> <img class="login-img" src="assets/images/login-logo.svg" alt=""> <img class="mobile-img" src="assets/images/login-pop-image.svg" alt=""> <img class="desktop-img" src="assets/images/login-illusion.png" alt=""> </div> <div class="text-wrapper"> <h6>To sign in, please enter your mobile number below </h6> </div> </div> </div> <div class="card-body"> <div class="form-wrapper"> <div class="input-block"> <div class="floating-placeholder active"> <input type="text" name="" id="sign-mobile" value="9999262765" /> <label for="">Mobile Number</label> </div> </div> </div> </div> <div class="card-footer"> <div class="btn-control-block"> <button id="btn-sign-in-submit" class="btn-sign-in">Sign in with OTP</button> </div> </div> </div> </div> </div>'
    /*
     * If content is an HTML string, append the HTML string.
     * If content is a domNode, append its content.
     */

    if (typeof this.options.content === "string") {
      content = this.options.content;
    } else {
      this.options.content.innerHTML = HTML;
      content = this.options.content.innerHTML;
    }

    // Create a DocumentFragment to build with
    docFrag = document.createDocumentFragment();

    // Create modal element
    this.modal = document.createElement("div");
    this.modal.className = "scotch-modal " + this.options.className;
    this.modal.style.minWidth = this.options.minWidth + "px";
    this.modal.style.maxWidth = this.options.maxWidth + "px";

    // If closeButton option is true, add a close button
    if (this.options.closeButton === true) {
      this.closeButton = document.createElement("button");
      this.closeButton.className = "scotch-close close-button";
      this.closeButton.innerHTML = "&times;";
      this.modal.appendChild(this.closeButton);
    }

    // If overlay is true, add one
    if (this.options.overlay === true) {
      this.overlay = document.createElement("div");
      this.overlay.className = "scotch-overlay " + this.options.className;
      docFrag.appendChild(this.overlay);
    }

    // Create content area and append to modal
    contentHolder = document.createElement("div");
    contentHolder.className = "scotch-content";
    contentHolder.innerHTML = content;
    this.modal.appendChild(contentHolder);

    // Append modal to DocumentFragment
    docFrag.appendChild(this.modal);

    // Append DocumentFragment to body
    document.body.appendChild(docFrag);

  }
  function buildOut1(mobileInputVal) {
   // this = __this;
    debugger;
    var content, contentHolder, docFrag;
    var HTML = '<div class="login-module-container"> <div class="login-module-inner"> <div class="card"> <div class="card-header"> <img class="popup-close" src="assets/images/login-close-icon.svg" alt=""> <div class="card-header-block"> <div class="img-wrapper"> <img class="login-img" src="assets/images/login-logo.svg" alt=""> <img class="mobile-img" src="assets/images/login-pop-image.svg" alt=""> <img class="desktop-img" src="assets/images/login-illusion.png" alt=""> </div> <div class="text-wrapper"> <h6>Please enter 4 digit OTP <span>sent on '+mobileInputVal+'</span></h6> <a href="index.html">Change mobile number</a> </div> </div> </div> <div class="card-body"> <div class="form-wrapper"> <div class="input-block"> <div class="floating-placeholder active"> <input type="text" name="" id="otp-id" /> <label for="">Enter OTP</label> </div> </div> <p>Didn&apos;t received the OTP yet? <a href="#">Resend OTP</a></p> </div> </div> <div class="card-footer"> <div class="btn-control-block"> <button id="btn-sign-in-varify-otp" class="btn-sign-in active">Confirm OTP</button> </div> </div> </div> </div> </div>'
    /*
     * If content is an HTML string, append the HTML string.
     * If content is a domNode, append its content.
     */

    if (typeof this.options.content === "string") {
      content = this.options.content;
    } else {
      this.options.content.innerHTML = HTML;
      content = this.options.content.innerHTML;
    }

    // Create a DocumentFragment to build with
    docFrag = document.createDocumentFragment();

    // Create modal element
    this.modal = document.createElement("div");
    this.modal.className = "scotch-modal " + this.options.className;
    this.modal.style.minWidth = this.options.minWidth + "px";
    this.modal.style.maxWidth = this.options.maxWidth + "px";

    // If closeButton option is true, add a close button
    if (this.options.closeButton === true) {
      this.closeButton = document.createElement("button");
      this.closeButton.className = "scotch-close close-button";
      this.closeButton.innerHTML = "&times;";
      this.modal.appendChild(this.closeButton);
    }

    // If overlay is true, add one
    if (this.options.overlay === true) {
      this.overlay = document.createElement("div");
      this.overlay.className = "scotch-overlay " + this.options.className;
      docFrag.appendChild(this.overlay);
    }

    // Create content area and append to modal
    contentHolder = document.createElement("div");
    contentHolder.className = "scotch-content";
    contentHolder.innerHTML = content;
    this.modal.appendChild(contentHolder);

    // Append modal to DocumentFragment
    docFrag.appendChild(this.modal);

    // Append DocumentFragment to body
    document.body.appendChild(docFrag);

  }

  function extendDefaults(source, properties) {
    var property;
    for (property in properties) {
      if (properties.hasOwnProperty(property)) {
        source[property] = properties[property];
      }
    }
    return source;
  }

  function initializeEvents() {

    if (this.closeButton) {
      this.closeButton.addEventListener('click', this.close.bind(this));
    }

    if (this.overlay) {
      this.overlay.addEventListener('click', this.close.bind(this));
    }

  }

  function transitionSelect() {
    var el = document.createElement("div");
    if (el.style.WebkitTransition) return "webkitTransitionEnd";
    if (el.style.OTransition) return "oTransitionEnd";
    return 'transitionend';
  }

}());

var myContent = document.getElementById('content');

var myModal = new Modal({
  content: myContent
});


// function logKey(e) {
//   debugger;
//   console.log(e, " ++++ ");
//   //log.textContent += ` ${e.code}`;
// }
var triggerButton = document.getElementById('trigger');

triggerButton.addEventListener('click', function () {
  myModal.open();
});
var triggerSubmitButton = document.getElementById('btn-sign-in-submit');
triggerButton.addEventListener('click', function () {
  console.log("++++++++++++++++");
});
document.addEventListener('click', function (event) {

  // If the clicked element doesn't have the right selector, bail
  if (event.target.matches('#btn-sign-in-submit')) {
    var mobileInputVal = document.getElementById("sign-mobile").value
    //debugger;
    //console.log(mobileInputVal,"+++++++++++++++++");
    //return false;
    var xhttp = new XMLHttpRequest();
    var bodyData = {};
    bodyData.SMSType = 1;
    bodyData.CountryCode = "91";
    bodyData.Mobile = mobileInputVal;
    bodyData.OTPLogin = true;
    xhttp.onreadystatechange = function () {
      console.log(this.status, "uuuuuuuuu +++++++");
      const container = document.getElementById("content");
      container.innerHTML = ""
      document.getElementById("content").innerHTML = '';
      myModal.open1(mobileInputVal);
      document.getElementById('sent-mobile-number').textContent = mobileInputVal;
      if (this.readyState == 4 && this.status == 200) {
        
        var responseData = JSON.parse(this.response);
        debugger;
        if (responseData.success === true) {
          const container = document.getElementById("content");
          container.innerHTML = ""
          document.getElementById("content").innerHTML = '';
          myModal.open1(mobileInputVal);
          document.getElementById('sent-mobile-number').textContent = mobileInputVal;
        }
        //document.getElementById("demo").innerHTML = this.responseText;
      }
    };

    xhttp.open("POST", "https://myaccqa.policybazaar.com/Service/Logins/SendOTP/", true);
    xhttp.setRequestHeader('Content-Type', 'application/json');
    xhttp.setRequestHeader('Accept', '*/*'); // accept all
    xhttp.send(JSON.stringify(bodyData));

  }
  if(event.target.matches('#btn-sign-in-varify-otp')){

    console.log("+++++++++++++++++");
    var xhttp = new XMLHttpRequest();
    debugger;
    var bodyData = {};
    bodyData.SMSType = 1;
    bodyData.CountryCode = "91";
    bodyData.Mobile = document.getElementById("sign-mobile").value;
    bodyData.OTPLogin = true;
    bodyData.OTP = document.getElementById("otp-id").value,
    bodyData.registrationFlow = false;
    xhttp.onreadystatechange = function () {
      if (this.readyState == 4 && this.status == 200) {
      }
    };

    xhttp.open("POST", "https://myaccqa.policybazaar.com/Service/Logins/Validate/", true);
    xhttp.setRequestHeader('Content-Type', 'application/json');
    xhttp.setRequestHeader('Accept', '*/*'); // accept all
    // xhttp.getResponseHeader('Content-Type');
    //xhttp.getResponseHeader('Cache-Control');
    xhttp.send(JSON.stringify(bodyData));
  }

  // // Don't follow the link
  // event.preventDefault();

  // // Log the clicked element in the console
  // console.log(event.target);

}, false);
var input = document.getElementById('sign-mobile');
document.addEventListener('keyup', function (event) {
 // debugger;
  console.log(event, " ++++ ");
  if (event.target.matches('#sign-mobile')) {
    document.getElementById("sign-mobile").value = event.target.value;
  }
  if (event.target.matches('#otp-id')) {
    document.getElementById("otp-id").value = event.target.value;
  }
  //log.textContent += ` ${e.code}`;
});
// var triggerSubmitButtonVerify = document.getElementById('btn-sign-in-varify-otp');
// triggerSubmitButtonVerify.addEventListener('click', function (event) {
//   debugger;
//   console.log("++++++++++++++++");
// });

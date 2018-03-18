!function(){"use strict";angular.module("piano",["ngAnimate","ngCookies","ngTouch","ngSanitize","ngMessages","ngAria","ngRoute","ngMaterial","ngMap"]).config(["$mdThemingProvider",function(e){e.theme("default").primaryPalette("blue-grey").accentPalette("brown")}])}(),function(){"use strict";function e(){this.isMobile=function(){return/Mobi/i.test(navigator.userAgent)}}angular.module("piano").service("platformService",e)}(),function(){"use strict";function e(){function e(){}var t={restrict:"E",templateUrl:"app/components/where/where.html",controller:e,controllerAs:"vm",bindToController:!0};return t}angular.module("piano").directive("where",e)}(),function(){"use strict";function e(){function e(){}var t={restrict:"E",templateUrl:"app/components/prices/prices.html",controller:e,controllerAs:"prices",bindToController:!0};return t}angular.module("piano").directive("prices",e)}(),function(){"use strict";function e(){function e(){var e=this;e.enableControl=function(){e.controllable=!0}}var t={restrict:"E",templateUrl:"app/components/map-viewer/map-viewer.html",controller:e,controllerAs:"mapViewer",bindToController:!0};return t}angular.module("piano").directive("mapViewer",e)}(),function(){"use strict";function e(){function e(e,t,a){var n=0;a.onscroll=function(){n=e.initHeight-a.scrollY/e.scrollRatio,e.height=n.toString()+"%",e.opacity=1-(e.initHeight-n)/e.initHeight,t.$digest()}}function t(t,a,n){var o=this,r=15,i=50;o.logo={initHeight:i,height:i.toString()+"%",scrollRatio:r},n.isMobile()||e(o.logo,t,a)}t.$inject=["$scope","$window","platformService"];var a={restrict:"E",templateUrl:"app/components/hero/hero.html",controller:t,controllerAs:"hero",bindToController:!0};return a}angular.module("piano").directive("hero",e)}(),function(){"use strict";function e(){function e(e,t){var a=this;a.form={name:"",email:"",telephone:"",message:"",isValid:function(){return a.form.name&&a.form.message}},a.messageStatus="static",a.send=function(){a.messageStatus="sending",e.post("contact.php",a.form).then(function(e){t(function(){a.messageStatus="sent"},1e3)},function(e){console.error("Problem sending email, data:"),console.error(e),a.messageError=!0})}}e.$inject=["$http","$timeout"];var t={restrict:"E",templateUrl:"app/components/contact/contact.html",controller:e,controllerAs:"contact",bindToController:!0};return t}angular.module("piano").directive("contact",e)}(),function(){"use strict";function e(){function e(e,t){var a=this,n="";t.bind("keydown",function(t){n+=t.key,"yaaay"===n?a.easterEgg=!0:a.easterEgg=!1,e.$apply()})}e.$inject=["$scope","$document"];var t={restrict:"E",templateUrl:"app/components/about/about.html",controller:e,controllerAs:"about",bindToController:!0};return t}angular.module("piano").directive("about",e)}(),function(){"use strict";function e(){}angular.module("piano").controller("MainController",e)}(),function(){"use strict";function e(e){e.debug("runBlock end")}e.$inject=["$log"],angular.module("piano").run(e)}(),function(){"use strict";function e(e,t){t.when("/",{templateUrl:"app/main/main.html",controller:"MainController",controllerAs:"main"}).otherwise({redirectTo:"/"}),e.html5Mode(!0)}e.$inject=["$locationProvider","$routeProvider"],angular.module("piano").config(e)}(),function(){"use strict";angular.module("piano")}(),function(){"use strict";function e(e){e.debugEnabled(!0)}e.$inject=["$logProvider"],angular.module("piano").config(e)}(),angular.module("piano").run(["$templateCache",function(e){e.put("app/main/main.html","<hero></hero><about id=about></about><where id=where></where><prices id=fees></prices><contact id=contact></contact>"),e.put("app/components/about/about.html",'<div class=width-limit layout=column layout-align="center center" layout-padding ng-class="{\'easter-egg\' : about.easterEgg}"><h2 class=md-display-2>Gill Taylor <small>ALCM; LLCM(TD)</small></h2><h3 class=md-display-1>Experienced Piano, Oboe and Music Theory teacher</h3><h4 class=md-headline>Copthorne, West Sussex</h4><img src=../assets/images/portrait-cropped.jpg class=portrait><p>My name is Gill Taylor and I am a private Piano and Oboe teacher with over 30 years’ experience. I began lessons myself at the age of 9 progressing from grade 1 to grade 8 (with distinction), the Oboe from the age of 14 up to grade 8 and then on to the London College of Music gaining diplomas in Piano and Oboe teaching. Living in Croydon I taught the Piano and Oboe in schools around this area and privately before moving to Crawley in 1987 where I established a teaching practice from home with up to 30 pupils. In 2014 I took a break from teaching but after moving to Copthorne in 2015 am able to take on pupils again.</p><p>I teach theory up to grade 5 integrating this into the weekly lesson with aural training as well. I also enjoy singing (at weddings and other social events) as well as piano accompaniment. I play the piano regularly at my local church and conducted the church choir for 15 years.</p><p>I enjoy teaching beginners from ages 7 – 77 and beyond! With a friendly and patient manner I use traditional methods aiming to give a thorough foundation in note reading and rhythm work as well as focusing strongly on the importance of good posture and hand/finger positioning. I encourage progression through the Associated Board of the Royal Schools of Music (ABRSM) graded exams as a means of measuring progress and setting goals to encourage practice. I am, however, more than happy for pupils to not take exams if they prefer.</p></div>'),e.put("app/components/contact/contact.html",'<div layout=column layout-align="center center" layout-padding><img class=logo src=assets/images/logo.png><h2 class=md-display-2>Contact</h2><form layout=column ng-submit=contact.send() ng-if="contact.messageStatus !== \'sent\'"><label aria-label=Name class=md-block><span class=form-label>Name (required)</span> <input type=text name=Name ng-model=contact.form.name ng-required=true></label><label aria-label=Email class=md-block><span class=form-label>Email address</span> <input type=email name=Email ng-model=contact.form.email></label><label aria-label=Telephone class=md-block><span class=form-label>Telephone</span> <input type=tel ng-model=contact.form.telephone name=Telephone></label><label aria-label=Message class=md-block><span class=form-label>Message (required)</span><textarea ng-model=contact.form.message name=Message ng-required=true></textarea></label><div layout-align="end end" class=button-container><md-button class="md-primary md-raised" ng-click=contact.send() ng-disabled=!contact.form.isValid()>Send</md-button></div><div class=send-overlay ng-if="contact.messageStatus === \'sending\'" layout-align="center center"><div class=message><span>Sending</span><div class=keys><div class="key has-sharp"></div><div class="key has-sharp"></div><div class=key></div><div class="key has-sharp"></div><div class=key></div></div></div></div></form><p ng-if="contact.messageStatus === \'sent\'">Thanks for getting in touch! Your message has been sent successfully and you should expect a reply within 1-2 working days</p></div>'),e.put("app/components/hero/hero.html",'<div class=overlay></div><header layout-padding layout=column layout-align="center center" style="height: {{hero.logo.height}}; opacity: {{hero.logo.opacity}}"><img class=logo src=assets/images/logo.png><h1>Copthorne Piano Tuition</h1><div class=buttons><md-button href=#about>About</md-button><md-button href=#where>Where</md-button><md-button href=#fees>Fees</md-button><md-button href=#contact>Contact</md-button></div></header>'),e.put("app/components/map-viewer/map-viewer.html",'<div class=map-viewer ng-class="{\'controllable\' : mapViewer.controllable}" title="{{mapViewer.controllable ? \'\' : \'Click to enable control\'}}"><div map-lazy-load="https://maps.googleapis.com/maps/api/js?key=AIzaSyAUt9qUyvpqz8YOdzuFJJ_cE7Bn0npAUtg"><map center="51.136271, -0.124560" zoom=14 map-type-id=ROADMAP><marker position="[51.136271, -0.124560]" on-click=myfunc()></marker></map></div><div class=mask ng-click=mapViewer.enableControl() ng-hide=mapViewer.controllable></div></div>'),e.put("app/components/prices/prices.html",'<div layout=column layout-align="center center" layout-padding><h2 class=md-display-1>Fees</h2><table><thead><tr><th>Grade</th><th class=numeral>Duration</th><th class=numeral>Price</th></tr></thead><tbody><tr><td>1-4</td><td class=numeral>30 mins</td><td class=numeral>£14</td></tr><tr><td>5</td><td class=numeral>45 mins</td><td class=numeral>£21</td></tr><tr><td>6+</td><td class=numeral>1 hour</td><td class=numeral>£28</td></tr></tbody></table><p>Lessons are charged by the term and payable in advance (WSCC school term dates).</p><p>I can also offer a 30 minute taster lesson for £7 or 4 introductory lessons for £45.</p><aside>Fees are subject to a possible increase in September each year.</aside></div>'),e.put("app/components/where/where.html",'<div class=width-limit layout=column layout-align="center center"><h2 class=md-display-1>Where I am</h2><p>Lessons are conducted at my home in Copthorne, West Sussex - about 5 minutes from Crawley and just off Junction 10 on the M23.</p></div><map-viewer></map-viewer>')}]);
//# sourceMappingURL=../maps/scripts/app-78b82d833a.js.map

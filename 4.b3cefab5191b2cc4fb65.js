(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{cxaZ:function(n,l){n.exports='<div class="card card-accent-info">\n  <div class="card-header">\n    \u7b80\u5355\u793a\u4f8b\uff1a\u5730\u70b9\u5173\u952e\u5b57 + \u6b65\u884c\u8def\u7ebf\u89c4\u5212\n  </div>\n  <div class="card-body">\n    <div class="relative">\n      <ngx-amap class="demo-map-lg" [resizeEnable]="true" [center]="[116.397428, 39.90923]" (ready)="onMapReady($event)"></ngx-amap>\n      <div id="panel" class="panel"></div>\n    </div>\n    <div class="mt-3">\n      <tabset>\n        <tab heading="HTML">\n          <markdown [data]="demo_html | language: \'html\'"></markdown>\n        </tab>\n        <tab heading="Component">\n          <markdown [data]="demo_ts | language: \'typescript\'"></markdown>\n        </tab>\n        <tab heading="API">\n          <a href="api-doc/injectables/AmapWalkingService.html" target="_blank">\u67e5\u770b\u5728\u7ebf\u6587\u6863</a>\n        </tab>\n      </tabset>\n    </div>\n  </div>\n</div>\n\n'},ggCM:function(n,l){n.exports="import { Component, OnInit, OnDestroy } from '@angular/core';\nimport { Subscription } from 'rxjs';\nimport { AmapWalkingService, WalkingOptions } from 'ngx-amap';\n\ndeclare const require: any;\n\n@Component({\n  selector: 'app-simple',\n  templateUrl: './simple.component.html',\n  styleUrls: ['./simple.component.scss']\n})\nexport class SimpleComponent implements OnInit, OnDestroy {\n  demo_html = require('!!html-loader!./simple.component.html');\n  demo_ts = require('!!raw-loader!./simple.component.ts');\n\n  private _subscription: Subscription;\n\n  constructor(private ts: AmapWalkingService) { }\n\n  ngOnInit() {\n  }\n\n  async onMapReady(map) {\n    const walkingOpts: WalkingOptions = {\n      map: map,\n      panel: 'panel'\n    };\n\n    // \u4f7f\u7528of\u65b9\u6cd5\u6784\u9020AMap.Walking\u63d2\u4ef6\u7684Wrapper\n    const walking = await this.ts.of(walkingOpts);\n\n    // \u4f7f\u7528on\u65b9\u6cd5\u4fa6\u542c\u4e8b\u4ef6\uff1a\n    this._subscription = walking.on('complete').subscribe(event => console.log('Walking event: \"complete\"', event));\n    this._subscription.add(walking.on('error').subscribe(event => console.log('Walking event: \"error\"', event)));\n\n    // \u4f7f\u7528\u63d2\u4ef6Wrapper\u641c\u7d22\u8def\u5f84\n    const { status, result } = await walking.search([\n      { keyword: '\u5317\u4eac\u5e02\u5730\u9707\u5c40(\u516c\u4ea4\u7ad9)', city: '\u5317\u4eac' },\n      { keyword: '\u4ea6\u5e84\u6587\u5316\u56ed(\u5730\u94c1\u7ad9)', city: '\u5317\u4eac' }\n    ]);\n\n    map.setFitView();\n  }\n\n  ngOnDestroy() {\n    if (this._subscription) {\n      this._subscription.unsubscribe();\n    }\n  }\n\n}\n"},ghHM:function(n,l,e){"use strict";e.r(l);var t=e("CcnG"),a=function(){},o=e("ujdH"),r=e("icah"),u=e("WFzO"),i=e("d+NZ"),p=e("vPfJ"),d=e("OQnT"),c=e("NEdW"),s=e("zk0r"),m=e("g5zm"),h=e("e7hY"),g=function(){function n(n){this.ts=n,this.demo_html=e("cxaZ"),this.demo_ts=e("ggCM")}return n.prototype.ngOnInit=function(){},n.prototype.onMapReady=function(n){return l=this,void 0,t=function(){var l;return function(n,l){var e,t,a,o,r={label:0,sent:function(){if(1&a[0])throw a[1];return a[1]},trys:[],ops:[]};return o={next:u(0),throw:u(1),return:u(2)},"function"==typeof Symbol&&(o[Symbol.iterator]=function(){return this}),o;function u(o){return function(u){return function(o){if(e)throw new TypeError("Generator is already executing.");for(;r;)try{if(e=1,t&&(a=t[2&o[0]?"return":o[0]?"throw":"next"])&&!(a=a.call(t,o[1])).done)return a;switch(t=0,a&&(o=[0,a.value]),o[0]){case 0:case 1:a=o;break;case 4:return r.label++,{value:o[1],done:!1};case 5:r.label++,t=o[1],o=[0];continue;case 7:o=r.ops.pop(),r.trys.pop();continue;default:if(!(a=(a=r.trys).length>0&&a[a.length-1])&&(6===o[0]||2===o[0])){r=0;continue}if(3===o[0]&&(!a||o[1]>a[0]&&o[1]<a[3])){r.label=o[1];break}if(6===o[0]&&r.label<a[1]){r.label=a[1],a=o;break}if(a&&r.label<a[2]){r.label=a[2],r.ops.push(o);break}a[2]&&r.ops.pop(),r.trys.pop();continue}o=l.call(n,r)}catch(n){o=[6,n],t=0}finally{e=a=0}if(5&o[0])throw o[1];return{value:o[0]?o[1]:void 0,done:!0}}([o,u])}}}(this,function(e){switch(e.label){case 0:return[4,this.ts.of({map:n,panel:"panel"})];case 1:return l=e.sent(),this._subscription=l.on("complete").subscribe(function(n){return console.log('Walking event: "complete"',n)}),this._subscription.add(l.on("error").subscribe(function(n){return console.log('Walking event: "error"',n)})),[4,l.search([{keyword:"\u5317\u4eac\u5e02\u5730\u9707\u5c40(\u516c\u4ea4\u7ad9)",city:"\u5317\u4eac"},{keyword:"\u4ea6\u5e84\u6587\u5316\u56ed(\u5730\u94c1\u7ad9)",city:"\u5317\u4eac"}])];case 2:return e.sent(),n.setFitView(),[2]}})},new((e=void 0)||(e=Promise))(function(n,a){function o(n){try{u(t.next(n))}catch(n){a(n)}}function r(n){try{u(t.throw(n))}catch(n){a(n)}}function u(l){l.done?n(l.value):new e(function(n){n(l.value)}).then(o,r)}u((t=t.apply(l,[])).next())});var l,e,t},n.prototype.ngOnDestroy=function(){this._subscription&&this._subscription.unsubscribe()},n}(),_=t["\u0275crt"]({encapsulation:0,styles:[["#panel[_ngcontent-%COMP%]{position:absolute;background-color:#fff;max-height:90%;overflow-y:auto;top:10px;right:10px;width:280px}"]],data:{}});function v(n){return t["\u0275vid"](0,[t["\u0275pid"](0,o.LanguagePipe,[]),(n()(),t["\u0275eld"](1,0,null,null,39,"div",[["class","card card-accent-info"]],null,null,null,null,null)),(n()(),t["\u0275eld"](2,0,null,null,1,"div",[["class","card-header"]],null,null,null,null,null)),(n()(),t["\u0275ted"](-1,null,[" \u7b80\u5355\u793a\u4f8b\uff1a\u5730\u70b9\u5173\u952e\u5b57 + \u6b65\u884c\u8def\u7ebf\u89c4\u5212 "])),(n()(),t["\u0275eld"](4,0,null,null,36,"div",[["class","card-body"]],null,null,null,null,null)),(n()(),t["\u0275eld"](5,0,null,null,18,"div",[["class","relative"]],null,null,null,null,null)),(n()(),t["\u0275eld"](6,0,null,null,16,"ngx-amap",[["class","demo-map-lg"]],null,[[null,"ready"]],function(n,l,e){var t=!0;return"ready"===l&&(t=!1!==n.component.onMapReady(e)&&t),t},r.d,r.b)),t["\u0275prd"](4608,null,u.G,u.G,[u.A,u.F,u.H,u.I,u.K]),t["\u0275prd"](4608,null,u.L,u.L,[u.A,u.F,u.H,u.J]),t["\u0275prd"](4608,null,u.M,u.M,[u.A,u.N,u.F]),t["\u0275prd"](4608,null,u.O,u.O,[u.A,u.F,u.H,u.N]),t["\u0275prd"](4608,null,u.P,u.P,[u.A,u.F,u.H,u.J,u.N]),t["\u0275prd"](4608,null,u.Q,u.Q,[u.A,u.N,u.F]),t["\u0275prd"](4608,null,u.R,u.R,[u.A,u.F]),t["\u0275prd"](4608,null,u.S,u.S,[u.A,u.N,u.F]),t["\u0275prd"](4608,null,u.T,u.T,[u.A,u.F,u.H,u.I]),t["\u0275prd"](4608,null,u.U,u.U,[u.A,u.N,u.F]),t["\u0275prd"](4608,null,u.V,u.V,[u.A,u.N,u.F]),t["\u0275prd"](4608,null,u.W,u.W,[u.A,u.N,u.F]),t["\u0275prd"](4608,null,u.X,u.X,[u.A,u.F,u.N]),t["\u0275prd"](512,null,u.A,u.A,[u.C,u.F]),t["\u0275did"](21,770048,null,0,u.y,[t.ElementRef,u.A,u.F],{center:[0,"center"],resizeEnable:[1,"resizeEnable"]},{ready:"ready"}),t["\u0275pad"](22,2),(n()(),t["\u0275eld"](23,0,null,null,0,"div",[["class","panel"],["id","panel"]],null,null,null,null,null)),(n()(),t["\u0275eld"](24,0,null,null,16,"div",[["class","mt-3"]],null,null,null,null,null)),(n()(),t["\u0275eld"](25,0,null,null,15,"tabset",[],[[2,"tab-container",null]],null,null,i.b,i.a)),t["\u0275did"](26,180224,null,0,p.a,[d.a,t.Renderer2],null,null),(n()(),t["\u0275eld"](27,0,null,0,4,"tab",[["heading","HTML"]],[[1,"id",0],[2,"active",null],[2,"tab-pane",null]],null,null,null,null)),t["\u0275did"](28,212992,null,0,c.a,[p.a,t.ElementRef,t.Renderer2],{heading:[0,"heading"]},null),(n()(),t["\u0275eld"](29,0,null,null,2,"markdown",[],null,null,null,s.b,s.a)),t["\u0275did"](30,4243456,null,0,m.MarkdownComponent,[t.ElementRef,h.MarkdownService],{data:[0,"data"]},null),t["\u0275ppd"](31,2),(n()(),t["\u0275eld"](32,0,null,0,4,"tab",[["heading","Component"]],[[1,"id",0],[2,"active",null],[2,"tab-pane",null]],null,null,null,null)),t["\u0275did"](33,212992,null,0,c.a,[p.a,t.ElementRef,t.Renderer2],{heading:[0,"heading"]},null),(n()(),t["\u0275eld"](34,0,null,null,2,"markdown",[],null,null,null,s.b,s.a)),t["\u0275did"](35,4243456,null,0,m.MarkdownComponent,[t.ElementRef,h.MarkdownService],{data:[0,"data"]},null),t["\u0275ppd"](36,2),(n()(),t["\u0275eld"](37,0,null,0,3,"tab",[["heading","API"]],[[1,"id",0],[2,"active",null],[2,"tab-pane",null]],null,null,null,null)),t["\u0275did"](38,212992,null,0,c.a,[p.a,t.ElementRef,t.Renderer2],{heading:[0,"heading"]},null),(n()(),t["\u0275eld"](39,0,null,null,1,"a",[["href","api-doc/injectables/AmapWalkingService.html"],["target","_blank"]],null,null,null,null,null)),(n()(),t["\u0275ted"](-1,null,["\u67e5\u770b\u5728\u7ebf\u6587\u6863"]))],function(n,l){var e=l.component;n(l,21,0,n(l,22,0,116.397428,39.90923),!0),n(l,28,0,"HTML"),n(l,30,0,t["\u0275unv"](l,30,0,n(l,31,0,t["\u0275nov"](l,0),e.demo_html,"html"))),n(l,33,0,"Component"),n(l,35,0,t["\u0275unv"](l,35,0,n(l,36,0,t["\u0275nov"](l,0),e.demo_ts,"typescript"))),n(l,38,0,"API")},function(n,l){n(l,25,0,t["\u0275nov"](l,26).clazz),n(l,27,0,t["\u0275nov"](l,28).id,t["\u0275nov"](l,28).active,t["\u0275nov"](l,28).addClass),n(l,32,0,t["\u0275nov"](l,33).id,t["\u0275nov"](l,33).active,t["\u0275nov"](l,33).addClass),n(l,37,0,t["\u0275nov"](l,38).id,t["\u0275nov"](l,38).active,t["\u0275nov"](l,38).addClass)})}var f=t["\u0275ccf"]("app-simple",g,function(n){return t["\u0275vid"](0,[(n()(),t["\u0275eld"](0,0,null,null,1,"app-simple",[],null,null,null,v,_)),t["\u0275did"](1,245760,null,0,g,[u.x],null,null)],function(n,l){n(l,1,0)},null)},{},{},[]),b=e("Ip0R"),k=e("t/Na"),y=e("z+jS"),w=e("asSr"),M=e("7PmN"),A=e("ZYCi"),C={title:"AmapWalkingService"},H=function(){};e.d(l,"AmapWalkingDemoModuleNgFactory",function(){return F});var F=t["\u0275cmf"](a,[],function(n){return t["\u0275mod"]([t["\u0275mpd"](512,t.ComponentFactoryResolver,t["\u0275CodegenComponentFactoryResolver"],[[8,[f]],[3,t.ComponentFactoryResolver],t.NgModuleRef]),t["\u0275mpd"](4608,b.n,b.m,[t.LOCALE_ID,[2,b.r]]),t["\u0275mpd"](4608,k.HttpXsrfTokenExtractor,k["\u0275angular_packages_common_http_http_h"],[b.d,t.PLATFORM_ID,k["\u0275angular_packages_common_http_http_f"]]),t["\u0275mpd"](4608,k["\u0275angular_packages_common_http_http_i"],k["\u0275angular_packages_common_http_http_i"],[k.HttpXsrfTokenExtractor,k["\u0275angular_packages_common_http_http_g"]]),t["\u0275mpd"](5120,k.HTTP_INTERCEPTORS,function(n){return[n]},[k["\u0275angular_packages_common_http_http_i"]]),t["\u0275mpd"](4608,k["\u0275angular_packages_common_http_http_e"],k["\u0275angular_packages_common_http_http_e"],[]),t["\u0275mpd"](6144,k.XhrFactory,null,[k["\u0275angular_packages_common_http_http_e"]]),t["\u0275mpd"](4608,k.HttpXhrBackend,k.HttpXhrBackend,[k.XhrFactory]),t["\u0275mpd"](6144,k.HttpBackend,null,[k.HttpXhrBackend]),t["\u0275mpd"](4608,k.HttpHandler,k["\u0275angular_packages_common_http_http_c"],[k.HttpBackend,t.Injector]),t["\u0275mpd"](4608,k.HttpClient,k.HttpClient,[k.HttpHandler]),t["\u0275mpd"](1073742336,b.c,b.c,[]),t["\u0275mpd"](1073742336,u.z,u.z,[]),t["\u0275mpd"](1073742336,y.a,y.a,[]),t["\u0275mpd"](1073742336,k.HttpClientXsrfModule,k.HttpClientXsrfModule,[]),t["\u0275mpd"](1073742336,k.HttpClientModule,k.HttpClientModule,[]),t["\u0275mpd"](1073742336,w.MarkdownModule,w.MarkdownModule,[]),t["\u0275mpd"](1073742336,M.a,M.a,[]),t["\u0275mpd"](1073742336,A.o,A.o,[[2,A.t],[2,A.l]]),t["\u0275mpd"](1073742336,H,H,[]),t["\u0275mpd"](1073742336,a,a,[]),t["\u0275mpd"](256,k["\u0275angular_packages_common_http_http_f"],"XSRF-TOKEN",[]),t["\u0275mpd"](256,k["\u0275angular_packages_common_http_http_g"],"X-XSRF-TOKEN",[]),t["\u0275mpd"](1024,A.j,function(){return[[{path:"",redirectTo:"/AmapWalkingService/simple",pathMatch:"full"},{path:"simple",component:g,data:C}]]},[])])})}}]);
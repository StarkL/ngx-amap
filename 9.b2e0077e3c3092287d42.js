(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{sBN0:function(n,l,e){"use strict";e.r(l);var t=e("CcnG"),a=function(){},u=e("ujdH"),r=e("icah"),i=e("WFzO"),o=e("d+NZ"),d=e("vPfJ"),s=e("OQnT"),c=e("NEdW"),p=e("zk0r"),m=e("g5zm"),h=e("e7hY"),v="import { Component, OnInit } from '@angular/core';\nimport { AmapDistrictSearchService } from 'ngx-amap';\nimport { AMapClass } from 'ngx-amap/types/class';\n\ndeclare const AMap: AMapClass;\n\n@Component({\n  selector: 'app-simple',\n  templateUrl: './simple.component.html',\n  styleUrls: ['./simple.component.scss']\n})\nexport class SimpleComponent implements OnInit {\n\n  constructor(private amapDistrictSearch: AmapDistrictSearchService) {\n  }\n\n  ngOnInit() {\n  }\n\n  async onMapReady(map) {\n    const wrapper = await this.amapDistrictSearch.of({\n      subdistrict: 1,   // \u8fd4\u56de\u4e0b\u4e00\u7ea7\u884c\u653f\u533a\n      extensions: 'all',  // \u8fd4\u56de\u884c\u653f\u533a\u8fb9\u754c\u5750\u6807\u7ec4\u7b49\u5177\u4f53\u4fe1\u606f\n      level: 'district'  // \u67e5\u8be2\u884c\u653f\u7ea7\u522b\u4e3a \u5e02\n    });\n\n    const { status, result } = await wrapper.search('\u671d\u9633\u533a');\n    console.log('district search for \u671d\u9633\u533a');\n    console.log('status:', status);\n    console.log('result:', result);\n\n    if (typeof result === 'string') {\n      return;\n    }\n\n    const bounds = result.districtList[0].boundaries;\n    bounds.forEach(e => {\n      return new AMap.Polygon({\n        map,\n        strokeWeight: 1,\n        path: e,\n        fillOpacity: 0.7,\n        fillColor: '#CCF3FF',\n        strokeColor: '#CC66CC'\n      });\n    });\n    map.setFitView();\n  }\n}",f='<div class="relative">\n  <div id="panel"></div>\n  <ngx-amap class="demo-map-lg" [resizeEnable]="true" (ready)="onMapReady($event)"></ngx-amap>\n</div>',g=function(){function n(n){this.amapDistrictSearch=n,this.demo_md_html=f,this.demo_md_ts=v}return n.prototype.ngOnInit=function(){},n.prototype.onMapReady=function(n){return l=this,void 0,t=function(){var l,e,t;return function(n,l){var e,t,a,u,r={label:0,sent:function(){if(1&a[0])throw a[1];return a[1]},trys:[],ops:[]};return u={next:i(0),throw:i(1),return:i(2)},"function"==typeof Symbol&&(u[Symbol.iterator]=function(){return this}),u;function i(u){return function(i){return function(u){if(e)throw new TypeError("Generator is already executing.");for(;r;)try{if(e=1,t&&(a=t[2&u[0]?"return":u[0]?"throw":"next"])&&!(a=a.call(t,u[1])).done)return a;switch(t=0,a&&(u=[0,a.value]),u[0]){case 0:case 1:a=u;break;case 4:return r.label++,{value:u[1],done:!1};case 5:r.label++,t=u[1],u=[0];continue;case 7:u=r.ops.pop(),r.trys.pop();continue;default:if(!(a=(a=r.trys).length>0&&a[a.length-1])&&(6===u[0]||2===u[0])){r=0;continue}if(3===u[0]&&(!a||u[1]>a[0]&&u[1]<a[3])){r.label=u[1];break}if(6===u[0]&&r.label<a[1]){r.label=a[1],a=u;break}if(a&&r.label<a[2]){r.label=a[2],r.ops.push(u);break}a[2]&&r.ops.pop(),r.trys.pop();continue}u=l.call(n,r)}catch(n){u=[6,n],t=0}finally{e=a=0}if(5&u[0])throw u[1];return{value:u[0]?u[1]:void 0,done:!0}}([u,i])}}}(this,function(a){switch(a.label){case 0:return[4,this.amapDistrictSearch.of({subdistrict:1,extensions:"all",level:"district"})];case 1:return[4,a.sent().search("\u671d\u9633\u533a")];case 2:return l=a.sent(),e=l.status,t=l.result,console.log("district search for \u671d\u9633\u533a"),console.log("status:",e),console.log("result:",t),"string"==typeof t?[2]:(t.districtList[0].boundaries.forEach(function(l){return new AMap.Polygon({map:n,strokeWeight:1,path:l,fillOpacity:.7,fillColor:"#CCF3FF",strokeColor:"#CC66CC"})}),n.setFitView(),[2])}})},new((e=void 0)||(e=Promise))(function(n,a){function u(n){try{i(t.next(n))}catch(n){a(n)}}function r(n){try{i(t.throw(n))}catch(n){a(n)}}function i(l){l.done?n(l.value):new e(function(n){n(l.value)}).then(u,r)}i((t=t.apply(l,[])).next())});var l,e,t},n}(),_=t["\u0275crt"]({encapsulation:0,styles:[["#panel[_ngcontent-%COMP%]{position:absolute;background-color:#fff;max-height:90%;overflow-y:auto;top:10px;right:10px;width:280px;z-index:200}.relative[_ngcontent-%COMP%]{position:relative}"]],data:{}});function b(n){return t["\u0275vid"](0,[t["\u0275pid"](0,u.LanguagePipe,[]),(n()(),t["\u0275eld"](1,0,null,null,38,"div",[["class","card card-accent-info"]],null,null,null,null,null)),(n()(),t["\u0275eld"](2,0,null,null,1,"div",[["class","card-header"]],null,null,null,null,null)),(n()(),t["\u0275ted"](-1,null,[" \u7b80\u5355\u793a\u4f8b\uff1a\u641c\u7d22\u5e76\u7ed8\u5236'\u671d\u9633\u533a' "])),(n()(),t["\u0275eld"](4,0,null,null,35,"div",[["class","card-body"]],null,null,null,null,null)),(n()(),t["\u0275eld"](5,0,null,null,17,"div",[["class","relative"]],null,null,null,null,null)),(n()(),t["\u0275eld"](6,0,null,null,0,"div",[["class","panel"],["id","panel"]],null,null,null,null,null)),(n()(),t["\u0275eld"](7,0,null,null,15,"ngx-amap",[["class","demo-map-lg"]],null,[[null,"ready"]],function(n,l,e){var t=!0;return"ready"===l&&(t=!1!==n.component.onMapReady(e)&&t),t},r.d,r.b)),t["\u0275prd"](4608,null,i.G,i.G,[i.A,i.F,i.H,i.I,i.K]),t["\u0275prd"](4608,null,i.L,i.L,[i.A,i.F,i.H,i.J]),t["\u0275prd"](4608,null,i.M,i.M,[i.A,i.N,i.F]),t["\u0275prd"](4608,null,i.O,i.O,[i.A,i.F,i.H,i.N]),t["\u0275prd"](4608,null,i.P,i.P,[i.A,i.F,i.H,i.J,i.N]),t["\u0275prd"](4608,null,i.Q,i.Q,[i.A,i.N,i.F]),t["\u0275prd"](4608,null,i.R,i.R,[i.A,i.F]),t["\u0275prd"](4608,null,i.S,i.S,[i.A,i.N,i.F]),t["\u0275prd"](4608,null,i.T,i.T,[i.A,i.F,i.H,i.I]),t["\u0275prd"](4608,null,i.U,i.U,[i.A,i.N,i.F]),t["\u0275prd"](4608,null,i.V,i.V,[i.A,i.N,i.F]),t["\u0275prd"](4608,null,i.W,i.W,[i.A,i.N,i.F]),t["\u0275prd"](4608,null,i.X,i.X,[i.A,i.F,i.N]),t["\u0275prd"](512,null,i.A,i.A,[i.C,i.F]),t["\u0275did"](22,770048,null,0,i.y,[t.ElementRef,i.A,i.F],{resizeEnable:[0,"resizeEnable"]},{ready:"ready"}),(n()(),t["\u0275eld"](23,0,null,null,16,"div",[["class","mt-3"]],null,null,null,null,null)),(n()(),t["\u0275eld"](24,0,null,null,15,"tabset",[],[[2,"tab-container",null]],null,null,o.b,o.a)),t["\u0275did"](25,180224,null,0,d.a,[s.a,t.Renderer2],null,null),(n()(),t["\u0275eld"](26,0,null,0,4,"tab",[["heading","HTML"]],[[1,"id",0],[2,"active",null],[2,"tab-pane",null]],null,null,null,null)),t["\u0275did"](27,212992,null,0,c.a,[d.a,t.ElementRef,t.Renderer2],{heading:[0,"heading"]},null),(n()(),t["\u0275eld"](28,0,null,null,2,"markdown",[],null,null,null,p.b,p.a)),t["\u0275did"](29,4243456,null,0,m.MarkdownComponent,[t.ElementRef,h.MarkdownService],{data:[0,"data"]},null),t["\u0275ppd"](30,2),(n()(),t["\u0275eld"](31,0,null,0,4,"tab",[["heading","Component"]],[[1,"id",0],[2,"active",null],[2,"tab-pane",null]],null,null,null,null)),t["\u0275did"](32,212992,null,0,c.a,[d.a,t.ElementRef,t.Renderer2],{heading:[0,"heading"]},null),(n()(),t["\u0275eld"](33,0,null,null,2,"markdown",[],null,null,null,p.b,p.a)),t["\u0275did"](34,4243456,null,0,m.MarkdownComponent,[t.ElementRef,h.MarkdownService],{data:[0,"data"]},null),t["\u0275ppd"](35,2),(n()(),t["\u0275eld"](36,0,null,0,3,"tab",[["heading","API"]],[[1,"id",0],[2,"active",null],[2,"tab-pane",null]],null,null,null,null)),t["\u0275did"](37,212992,null,0,c.a,[d.a,t.ElementRef,t.Renderer2],{heading:[0,"heading"]},null),(n()(),t["\u0275eld"](38,0,null,null,1,"a",[["href","api-doc/injectables/AmapDistrictSearchService.html"],["target","_blank"]],null,null,null,null,null)),(n()(),t["\u0275ted"](-1,null,["\u67e5\u770b\u5728\u7ebf\u6587\u6863"]))],function(n,l){var e=l.component;n(l,22,0,!0),n(l,27,0,"HTML"),n(l,29,0,t["\u0275unv"](l,29,0,n(l,30,0,t["\u0275nov"](l,0),e.demo_md_html,"html"))),n(l,32,0,"Component"),n(l,34,0,t["\u0275unv"](l,34,0,n(l,35,0,t["\u0275nov"](l,0),e.demo_md_ts,"typescript"))),n(l,37,0,"API")},function(n,l){n(l,24,0,t["\u0275nov"](l,25).clazz),n(l,26,0,t["\u0275nov"](l,27).id,t["\u0275nov"](l,27).active,t["\u0275nov"](l,27).addClass),n(l,31,0,t["\u0275nov"](l,32).id,t["\u0275nov"](l,32).active,t["\u0275nov"](l,32).addClass),n(l,36,0,t["\u0275nov"](l,37).id,t["\u0275nov"](l,37).active,t["\u0275nov"](l,37).addClass)})}var C=t["\u0275ccf"]("app-simple",g,function(n){return t["\u0275vid"](0,[(n()(),t["\u0275eld"](0,0,null,null,1,"app-simple",[],null,null,null,b,_)),t["\u0275did"](1,114688,null,0,g,[i.f],null,null)],function(n,l){n(l,1,0)},null)},{},{},[]),y="import { Component, OnDestroy, OnInit } from '@angular/core';\nimport { Subscription } from 'rxjs';\nimport { AmapDistrictSearchService, AmapDistrictSearchWrapper } from 'ngx-amap';\n\n@Component({\n  selector: 'app-events',\n  templateUrl: './events.component.html',\n  styleUrls: ['./events.component.scss']\n})\nexport class EventsComponent implements OnInit, OnDestroy {\n  private _subscription: Subscription;\n\n  private plugin: Promise<AmapDistrictSearchWrapper>;\n\n  constructor(private amapDistrictSearch: AmapDistrictSearchService) {\n  }\n\n  ngOnInit() {\n    // \u6784\u9020\u5730\u70b9\u67e5\u8be2 wrapper promise:\n    this.plugin = this.amapDistrictSearch.of({\n      subdistrict: 1,   // \u8fd4\u56de\u4e0b\u4e00\u7ea7\u884c\u653f\u533a\n      extensions: 'all',  // \u8fd4\u56de\u884c\u653f\u533a\u8fb9\u754c\u5750\u6807\u7ec4\u7b49\u5177\u4f53\u4fe1\u606f\n      level: 'district'  // \u67e5\u8be2\u884c\u653f\u7ea7\u522b\u4e3a \u5e02\n    });\n\n    // \u7ed1\u5b9a\u4e8b\u4ef6\u4fa6\u542c\uff1a\n    this.plugin.then(districtSearch => {\n      this._subscription = districtSearch.on('complete').subscribe(event => console.log('DistrictSearch event: \"complete\"', event));\n      this._subscription.add(districtSearch.on('error').subscribe(event => console.log('DistrictSearch event: \"error\"', event)));\n    });\n\n    this.plugin.then(districtSearch => districtSearch.search('\u671d\u9633\u533a'));\n  }\n\n  ngOnDestroy() {\n    if (this._subscription) {\n      this._subscription.unsubscribe();\n    }\n  }\n}",A='<div class="relative">\n  <div id="panel" class="panel"></div>\n  <ngx-amap class="demo-map-lg" [resizeEnable]="true"></ngx-amap>\n</div>',S=function(){function n(n){this.amapDistrictSearch=n,this.demo_md_html=A,this.demo_md_ts=y}return n.prototype.ngOnInit=function(){var n=this;this.plugin=this.amapDistrictSearch.of({subdistrict:1,extensions:"all",level:"district"}),this.plugin.then(function(l){n._subscription=l.on("complete").subscribe(function(n){return console.log('DistrictSearch event: "complete"',n)}),n._subscription.add(l.on("error").subscribe(function(n){return console.log('DistrictSearch event: "error"',n)}))}),this.plugin.then(function(n){return n.search("\u671d\u9633\u533a")})},n.prototype.ngOnDestroy=function(){this._subscription&&this._subscription.unsubscribe()},n}(),k=t["\u0275crt"]({encapsulation:0,styles:[["#panel[_ngcontent-%COMP%]{position:absolute;background-color:#fff;max-height:90%;overflow-y:auto;top:10px;right:10px;width:280px;z-index:200}.relative[_ngcontent-%COMP%]{position:relative}"]],data:{}});function F(n){return t["\u0275vid"](0,[t["\u0275pid"](0,u.LanguagePipe,[]),(n()(),t["\u0275eld"](1,0,null,null,40,"div",[["class","card card-accent-info"]],null,null,null,null,null)),(n()(),t["\u0275eld"](2,0,null,null,1,"div",[["class","card-header"]],null,null,null,null,null)),(n()(),t["\u0275ted"](-1,null,[" \u4e8b\u4ef6 "])),(n()(),t["\u0275eld"](4,0,null,null,37,"div",[["class","card-body"]],null,null,null,null,null)),(n()(),t["\u0275eld"](5,0,null,null,1,"div",[["class","alert alert-info mb-3"]],null,null,null,null,null)),(n()(),t["\u0275ted"](-1,null,["\u8bf7\u67e5\u770bconsole\u8f93\u51fa"])),(n()(),t["\u0275eld"](7,0,null,null,17,"div",[["class","relative"]],null,null,null,null,null)),(n()(),t["\u0275eld"](8,0,null,null,0,"div",[["class","panel"],["id","panel"]],null,null,null,null,null)),(n()(),t["\u0275eld"](9,0,null,null,15,"ngx-amap",[["class","demo-map-lg"]],null,null,null,r.d,r.b)),t["\u0275prd"](4608,null,i.G,i.G,[i.A,i.F,i.H,i.I,i.K]),t["\u0275prd"](4608,null,i.L,i.L,[i.A,i.F,i.H,i.J]),t["\u0275prd"](4608,null,i.M,i.M,[i.A,i.N,i.F]),t["\u0275prd"](4608,null,i.O,i.O,[i.A,i.F,i.H,i.N]),t["\u0275prd"](4608,null,i.P,i.P,[i.A,i.F,i.H,i.J,i.N]),t["\u0275prd"](4608,null,i.Q,i.Q,[i.A,i.N,i.F]),t["\u0275prd"](4608,null,i.R,i.R,[i.A,i.F]),t["\u0275prd"](4608,null,i.S,i.S,[i.A,i.N,i.F]),t["\u0275prd"](4608,null,i.T,i.T,[i.A,i.F,i.H,i.I]),t["\u0275prd"](4608,null,i.U,i.U,[i.A,i.N,i.F]),t["\u0275prd"](4608,null,i.V,i.V,[i.A,i.N,i.F]),t["\u0275prd"](4608,null,i.W,i.W,[i.A,i.N,i.F]),t["\u0275prd"](4608,null,i.X,i.X,[i.A,i.F,i.N]),t["\u0275prd"](512,null,i.A,i.A,[i.C,i.F]),t["\u0275did"](24,770048,null,0,i.y,[t.ElementRef,i.A,i.F],{resizeEnable:[0,"resizeEnable"]},null),(n()(),t["\u0275eld"](25,0,null,null,16,"div",[["class","mt-3"]],null,null,null,null,null)),(n()(),t["\u0275eld"](26,0,null,null,15,"tabset",[],[[2,"tab-container",null]],null,null,o.b,o.a)),t["\u0275did"](27,180224,null,0,d.a,[s.a,t.Renderer2],null,null),(n()(),t["\u0275eld"](28,0,null,0,4,"tab",[["heading","HTML"]],[[1,"id",0],[2,"active",null],[2,"tab-pane",null]],null,null,null,null)),t["\u0275did"](29,212992,null,0,c.a,[d.a,t.ElementRef,t.Renderer2],{heading:[0,"heading"]},null),(n()(),t["\u0275eld"](30,0,null,null,2,"markdown",[],null,null,null,p.b,p.a)),t["\u0275did"](31,4243456,null,0,m.MarkdownComponent,[t.ElementRef,h.MarkdownService],{data:[0,"data"]},null),t["\u0275ppd"](32,2),(n()(),t["\u0275eld"](33,0,null,0,4,"tab",[["heading","Component"]],[[1,"id",0],[2,"active",null],[2,"tab-pane",null]],null,null,null,null)),t["\u0275did"](34,212992,null,0,c.a,[d.a,t.ElementRef,t.Renderer2],{heading:[0,"heading"]},null),(n()(),t["\u0275eld"](35,0,null,null,2,"markdown",[],null,null,null,p.b,p.a)),t["\u0275did"](36,4243456,null,0,m.MarkdownComponent,[t.ElementRef,h.MarkdownService],{data:[0,"data"]},null),t["\u0275ppd"](37,2),(n()(),t["\u0275eld"](38,0,null,0,3,"tab",[["heading","API"]],[[1,"id",0],[2,"active",null],[2,"tab-pane",null]],null,null,null,null)),t["\u0275did"](39,212992,null,0,c.a,[d.a,t.ElementRef,t.Renderer2],{heading:[0,"heading"]},null),(n()(),t["\u0275eld"](40,0,null,null,1,"a",[["href","api-doc/injectables/AmapDistrictSearchService.html"],["target","_blank"]],null,null,null,null,null)),(n()(),t["\u0275ted"](-1,null,["\u67e5\u770b\u5728\u7ebf\u6587\u6863"]))],function(n,l){var e=l.component;n(l,24,0,!0),n(l,29,0,"HTML"),n(l,31,0,t["\u0275unv"](l,31,0,n(l,32,0,t["\u0275nov"](l,0),e.demo_md_html,"html"))),n(l,34,0,"Component"),n(l,36,0,t["\u0275unv"](l,36,0,n(l,37,0,t["\u0275nov"](l,0),e.demo_md_ts,"typescript"))),n(l,39,0,"API")},function(n,l){n(l,26,0,t["\u0275nov"](l,27).clazz),n(l,28,0,t["\u0275nov"](l,29).id,t["\u0275nov"](l,29).active,t["\u0275nov"](l,29).addClass),n(l,33,0,t["\u0275nov"](l,34).id,t["\u0275nov"](l,34).active,t["\u0275nov"](l,34).addClass),n(l,38,0,t["\u0275nov"](l,39).id,t["\u0275nov"](l,39).active,t["\u0275nov"](l,39).addClass)})}var w=t["\u0275ccf"]("app-events",S,function(n){return t["\u0275vid"](0,[(n()(),t["\u0275eld"](0,0,null,null,1,"app-events",[],null,null,null,F,k)),t["\u0275did"](1,245760,null,0,S,[i.f],null,null)],function(n,l){n(l,1,0)},null)},{},{},[]),M=e("Ip0R"),R=e("t/Na"),x=e("z+jS"),H=e("asSr"),E=e("7PmN"),D=e("ZYCi"),O={title:"\u7b80\u5355\u793a\u4f8b"},N={title:"\u4e8b\u4ef6"},P=function(){};e.d(l,"AmapDistrictSearchServiceDemoModuleNgFactory",function(){return I});var I=t["\u0275cmf"](a,[],function(n){return t["\u0275mod"]([t["\u0275mpd"](512,t.ComponentFactoryResolver,t["\u0275CodegenComponentFactoryResolver"],[[8,[C,w]],[3,t.ComponentFactoryResolver],t.NgModuleRef]),t["\u0275mpd"](4608,M.n,M.m,[t.LOCALE_ID,[2,M.r]]),t["\u0275mpd"](4608,R.HttpXsrfTokenExtractor,R["\u0275angular_packages_common_http_http_h"],[M.d,t.PLATFORM_ID,R["\u0275angular_packages_common_http_http_f"]]),t["\u0275mpd"](4608,R["\u0275angular_packages_common_http_http_i"],R["\u0275angular_packages_common_http_http_i"],[R.HttpXsrfTokenExtractor,R["\u0275angular_packages_common_http_http_g"]]),t["\u0275mpd"](5120,R.HTTP_INTERCEPTORS,function(n){return[n]},[R["\u0275angular_packages_common_http_http_i"]]),t["\u0275mpd"](4608,R["\u0275angular_packages_common_http_http_e"],R["\u0275angular_packages_common_http_http_e"],[]),t["\u0275mpd"](6144,R.XhrFactory,null,[R["\u0275angular_packages_common_http_http_e"]]),t["\u0275mpd"](4608,R.HttpXhrBackend,R.HttpXhrBackend,[R.XhrFactory]),t["\u0275mpd"](6144,R.HttpBackend,null,[R.HttpXhrBackend]),t["\u0275mpd"](4608,R.HttpHandler,R["\u0275angular_packages_common_http_http_c"],[R.HttpBackend,t.Injector]),t["\u0275mpd"](4608,R.HttpClient,R.HttpClient,[R.HttpHandler]),t["\u0275mpd"](1073742336,M.c,M.c,[]),t["\u0275mpd"](1073742336,i.z,i.z,[]),t["\u0275mpd"](1073742336,x.a,x.a,[]),t["\u0275mpd"](1073742336,R.HttpClientXsrfModule,R.HttpClientXsrfModule,[]),t["\u0275mpd"](1073742336,R.HttpClientModule,R.HttpClientModule,[]),t["\u0275mpd"](1073742336,H.MarkdownModule,H.MarkdownModule,[]),t["\u0275mpd"](1073742336,E.a,E.a,[]),t["\u0275mpd"](1073742336,D.o,D.o,[[2,D.t],[2,D.l]]),t["\u0275mpd"](1073742336,P,P,[]),t["\u0275mpd"](1073742336,a,a,[]),t["\u0275mpd"](256,R["\u0275angular_packages_common_http_http_f"],"XSRF-TOKEN",[]),t["\u0275mpd"](256,R["\u0275angular_packages_common_http_http_g"],"X-XSRF-TOKEN",[]),t["\u0275mpd"](1024,D.j,function(){return[[{path:"",redirectTo:"/AmapDistrictSearchService/simple",pathMatch:"full"},{path:"simple",component:g,data:O},{path:"events",component:S,data:N}]]},[])])})}}]);
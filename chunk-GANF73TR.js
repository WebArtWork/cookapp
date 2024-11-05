import{a as j}from"./chunk-X6MR4YMR.js";import{e as $}from"./chunk-QIM7ZO2A.js";import{$a as U,A as a,C as f,Ca as P,E as s,H as g,I as h,Ia as v,M as y,N as M,O as l,Pa as k,Ua as F,Ya as I,_a as S,bb as T,k as _,m as u,ma as O,n as b,p as x,q as C,z as w}from"./chunk-62GQ7SFB.js";function D(t,e){if(t&1){let c=y();g(0,"winput",3),M("wChange",function(n){let r=x(c).$implicit,d=l().$implicit,m=l();return r.is[d]=n,C(m.update(r))}),h()}if(t&2){let c=e.$implicit,i=l().$implicit;s("value",c.is[i])}}function V(t,e){if(t&1&&f(0,D,1,1,"ng-template",2),t&2){let c=e.$implicit;s("cell",c)}}var N=(()=>{let e=class e{get roles(){return this._us.roles}get users(){return this._us.users}constructor(i,n,r,d,m){this._translate=i,this._us=n,this._form=r,this._alert=d,this._core=m,this.form=this._form.getForm("user"),this.config={create:()=>{this._form.modal(this.form,{label:"Create",click:(o,p)=>{this._us.create(o,{alert:"User has been created",callback:p.bind(this)})}}).then(this._us.create.bind(this))},update:o=>{this._form.modal(this.form,[],o).then(p=>{this._core.copy(p,o),this._us.update(o,{alert:"User has been updated"})})},delete:o=>{this._alert.question({text:this._translate.translate("Common.Are you sure you want to delete this user?"),buttons:[{text:this._translate.translate("Common.No")},{text:this._translate.translate("Common.Yes"),callback:()=>{this._us.delete(o,{name:"admin",alert:"User has been deleted",callback:()=>{}})}}]})}},this.columns=["name","email"];for(let o of this._us.roles)this.columns.push(o)}update(i){this._us.updateAdmin(i)}};e.\u0275fac=function(n){return new(n||e)(a(F),a(j),a(T),a(k),a(v))},e.\u0275cmp=u({type:e,selectors:[["app-users"]],decls:2,vars:4,consts:[["title","Users",3,"columns","config","rows"],[4,"ngFor","ngForOf"],[3,"cell"],["type","checkbox",3,"wChange","value"]],template:function(n,r){n&1&&(g(0,"wtable",0),f(1,V,1,1,null,1),h()),n&2&&(s("columns",r.columns)("config",r.config)("rows",r.users),w(),s("ngForOf",r.roles))},dependencies:[O,I,U,S],styles:["[_ngcontent-%COMP%]:root{--c-white: #fff;--c-basic: #3558ae;--c-primary: #256eff;--c-primary-hover: #0051f1;--c-secondary: rgb(197, 61, 61);--c-secondary-hover: rgb(150, 42, 42);--c-bg-primary: #f3f4f7;--c-bg-secondary: #ffffff;--c-bg-tertiary: #fcfdfe;--c-border: #f0f1f7;--c-shadow: #f3f3f3;--c-text-primary: #666666;--c-text-secondary: #19235c;--c-placeholder: #313335ab;--c-img-round: 50%;--card-background: #fefefe;--card-border-radius: 10px;--card-box-shadow: 0 4px 12px rgba(0, 0, 0, .15);--card-margin-bottom: 24px;--card-header-padding: 20px;--card-header-background: #e0e0e0;--card-body-padding: 20px;--card-section-padding: 10px 0;--card-footer-padding: 20px;--card-footer-background: #e0e0e0;--card-border-width: 2px;--card-border-color: #cccccc;--file-img-border-radius: 50%;--file-add-bg: #28a745;--file-add-bg-hover: #218838;--file-item-border-radius: 10px;--day-name: #988888;--b-radius-btn: 10px;--transition: all .3s;--events: #4c8e9d;--border: rgba(102, 91, 91, .432)}html.dark[_ngcontent-%COMP%]:root{--c-white: #fff;--c-basic: #333;--c-bg-primary: #282828;--c-bg-secondary: #343434;--c-bg-tertiary: #404040;--c-border: #404040;--c-shadow: #444444;--c-text-primary: #ffffff;--c-text-secondary: #ffffff;--c-placeholder: #d3cdcd;--c-calendar: #141414;--day-name: #dad5d5;--events: #1c2e32;--border: rgb(255 255 255 / 23%)}.w-table-user[_ngcontent-%COMP%]{display:flex;align-items:center;flex-wrap:wrap}.w-table-user__img[_ngcontent-%COMP%]{width:30px;height:30px;min-width:30px;min-height:30px;margin-right:10px}.w-table-user__img[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:100%;height:100%;border-radius:var(--b-radius-img)}@media (max-width: 991.9px){.w-table-user__img[_ngcontent-%COMP%]{display:none}}@media (max-width: 991.9px){.w-table[_ngcontent-%COMP%]   .email[_ngcontent-%COMP%], .w-table[_ngcontent-%COMP%]   .role[_ngcontent-%COMP%]{display:none}}.w-table[_ngcontent-%COMP%]   .checkbox[_ngcontent-%COMP%]{height:18px;max-height:18px;display:block}.w-table[_ngcontent-%COMP%]   .checkbox__body[_ngcontent-%COMP%]{padding:2px}.users-field[_ngcontent-%COMP%]{display:flex;justify-content:space-between;align-items:flex-end}.users-field[_ngcontent-%COMP%]   .w-btn[_ngcontent-%COMP%]{margin:10px}.users-field[_ngcontent-%COMP%]   .forms[_ngcontent-%COMP%]{width:100%}@media (max-width: 575.9px){.users-field[_ngcontent-%COMP%]{flex-direction:column;align-items:center}.users-field[_ngcontent-%COMP%]   .w-btn[_ngcontent-%COMP%]{margin-bottom:20px;width:100%}}.w-table__td.actions[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%]{transition:var(--transition)}.w-table__td.actions[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%]:hover{color:var(--c-error)}.w-table__td.actions[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] + i[_ngcontent-%COMP%]{margin-left:15px}.users__header[_ngcontent-%COMP%]{letter-spacing:0;line-height:23px;font-weight:500;font-size:20px;color:var(--c-text-primary);display:flex;justify-content:space-between;align-items:center;border-radius:var(--b-radius)}"]});let t=e;return t})();var E=[{path:"",component:N}],X=(()=>{let e=class e{};e.\u0275fac=function(n){return new(n||e)},e.\u0275mod=b({type:e}),e.\u0275inj=_({imports:[P.forChild(E),$]});let t=e;return t})();export{X as UsersModule};

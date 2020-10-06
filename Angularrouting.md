Routing angular 

1---create moduleModule

create module App-routing.model.ts, module décoréer par @NgModule


const routes: Routes = [
  {path:"home",component:HomeComponent},
  {path:"contacts",component:ContactusComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {


}

**Injection au niveau du module principale app.module.ts
  
  imports: [
    BrowserModule,
    AppRoutingModule => not class de routinng
  ],


2--Ajouter les urls : 

au niveau de la classe des routing : 

const routes: Routes = [ 
   {path:"home", component:HomeComponent}, 
   {path:"contactus", component:ContactusComponent} 
];





3----Create  component (link)
ng g component home
ng g c contact us 

add this t ocomponent mere : 


<h1>Angular 7 Routing Demo</h1> 
<nav> 
   <a routerLink = "/home">Home</a> 
   <a routerLink = "/contactus">Contact Us </a> 
</nav> 
<router-outlet></router-outlet>




3---------




